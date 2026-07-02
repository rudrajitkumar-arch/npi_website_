/**
 * useHeroScroll
 * Manages scroll-hijacking inside the Hero section.
 *
 * Behaviour:
 * - While hero is in view, wheel/touch scroll navigates slides instead of scrolling page.
 * - Reaching final slide releases the lock so page scrolls normally.
 * - Scrolling back up into the hero re-engages the lock.
 * - Returns current slide index, a goTo function, and a "locked" state flag.
 */

import { useEffect, useRef, useCallback, useState } from "react";

interface UseHeroScrollOptions {
  slideCount: number;
  /** px threshold to detect hero is "in view" at the top */
  heroRef: React.RefObject<HTMLElement | null>;
  onSlideChange: (index: number) => void;
  /** ms throttle between slide changes */
  throttleMs?: number;
}

export function useHeroScroll({
  slideCount,
  heroRef,
  onSlideChange,
  throttleMs = 700,
}: UseHeroScrollOptions) {
  const [current, setCurrent] = useState(0);
  const [locked, setLocked] = useState(false);

  // Refs to avoid stale closures inside event handlers
  const currentRef = useRef(0);
  const lockedRef = useRef(false);
  const lastScrollTime = useRef(0);
  // Touch tracking
  const touchStartY = useRef<number | null>(null);

  // Keep refs in sync with state
  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  useEffect(() => {
    lockedRef.current = locked;
  }, [locked]);

  /** Navigate to an absolute slide index */
  const goTo = useCallback(
    (idx: number) => {
      const clamped = Math.max(0, Math.min(slideCount - 1, idx));
      if (clamped === currentRef.current) return;
      currentRef.current = clamped;
      setCurrent(clamped);
      onSlideChange(clamped);
    },
    [slideCount, onSlideChange]
  );

  /** Move forward or backward by delta (±1) — returns whether consumed */
  const step = useCallback(
    (delta: number): boolean => {
      const now = Date.now();
      if (now - lastScrollTime.current < throttleMs) return lockedRef.current;
      lastScrollTime.current = now;

      const next = currentRef.current + delta;

      if (next < 0) {
        // Already on first slide — release upward scroll
        return false;
      }

      if (next >= slideCount) {
        // Past last slide — unlock so page scrolls
        setLocked(false);
        lockedRef.current = false;
        return false;
      }

      goTo(next);
      return true; // consumed
    },
    [slideCount, goTo, throttleMs]
  );

  /** Detect whether the hero section occupies the top of the viewport */
  const isHeroAtTop = useCallback((): boolean => {
    if (!heroRef.current) return false;
    const rect = heroRef.current.getBoundingClientRect();
    // Hero is "at top" when its top edge is within 1px of the viewport top
    return rect.top <= 1 && rect.bottom > 0;
  }, [heroRef]);

  useEffect(() => {
    // Respect prefers-reduced-motion — disable scroll hijack entirely
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /** Wheel handler */
    const onWheel = (e: WheelEvent) => {
      if (prefersReduced) return;
      if (!isHeroAtTop()) return;

      const delta = e.deltaY > 0 ? 1 : -1;

      // If not locked yet and user scrolls down into hero from position 0, engage
      if (!lockedRef.current && delta > 0 && window.scrollY <= 1) {
        setLocked(true);
        lockedRef.current = true;
      }

      // Also re-engage if user scrolls up and we're on first slide at page top
      if (!lockedRef.current && delta < 0 && window.scrollY <= 1 && currentRef.current > 0) {
        setLocked(true);
        lockedRef.current = true;
      }

      if (!lockedRef.current) return;

      const consumed = step(delta);
      if (consumed) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    /** Touch start handler */
    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    /** Touch end handler */
    const onTouchEnd = (e: TouchEvent) => {
      if (prefersReduced) return;
      if (!isHeroAtTop()) return;
      if (touchStartY.current === null) return;

      const diff = touchStartY.current - e.changedTouches[0].clientY;
      touchStartY.current = null;

      // Minimum swipe distance: 30px
      if (Math.abs(diff) < 30) return;

      const delta = diff > 0 ? 1 : -1;

      if (!lockedRef.current && delta > 0 && window.scrollY <= 1) {
        setLocked(true);
        lockedRef.current = true;
      }

      if (lockedRef.current) {
        step(delta);
      }
    };

    /** Scroll handler — detect when user scrolled away from hero and reset */
    const onScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      // If hero completely above viewport, unlock and reset
      if (rect.bottom <= 0) {
        setLocked(false);
        lockedRef.current = false;
      }
      // If hero comes back to top and user is on first slide, re-lock on next scroll
      if (rect.top >= 0 && currentRef.current === slideCount - 1) {
        // will re-lock on next wheel event
      }
    };

    /** Keyboard navigation */
    const onKeyDown = (e: KeyboardEvent) => {
      if (!lockedRef.current) return;
      if (!isHeroAtTop()) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        step(1);
        e.preventDefault();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        step(-1);
        e.preventDefault();
      }
    };

    // passive: false required so we can call preventDefault on wheel
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isHeroAtTop, step, heroRef, slideCount]);

  return { current, goTo, locked };
}

/**
 * useAutoPlay
 * Starts autoplaying slides when on the last slide.
 * Stops if user manually interacts (via stopAutoPlay call).
 */
export function useAutoPlay({
  current,
  slideCount,
  goTo,
  initialDelay = 2000,
  interval = 3500,
}: {
  current: number;
  slideCount: number;
  goTo: (idx: number) => void;
  initialDelay?: number;
  interval?: number;
}) {
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const initialTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeRef = useRef(false);

  const stopAutoPlay = useCallback(() => {
    activeRef.current = false;
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    if (initialTimerRef.current) clearTimeout(initialTimerRef.current);
    autoPlayRef.current = null;
    initialTimerRef.current = null;
  }, []);

  useEffect(() => {
    // Start autoplay only when on last slide
    if (current !== slideCount - 1) {
      stopAutoPlay();
      return;
    }

    // Already running
    if (activeRef.current) return;

    activeRef.current = true;

    initialTimerRef.current = setTimeout(() => {
      if (!activeRef.current) return;
      let idx = 0;
      autoPlayRef.current = setInterval(() => {
        if (!activeRef.current) return;
        goTo(idx % slideCount);
        idx++;
      }, interval);
    }, initialDelay);

    return () => stopAutoPlay();
  }, [current, slideCount, goTo, initialDelay, interval, stopAutoPlay]);

  return { stopAutoPlay };
}
