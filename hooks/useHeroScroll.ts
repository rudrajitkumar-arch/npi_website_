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
  heroRef: React.RefObject<HTMLElement | null>;
  onSlideChange: (index: number) => void;
  onUserInteract?: () => void;
  onHeroLeave?: () => void;
  throttleMs?: number;
}

export function useHeroScroll({
  slideCount,
  heroRef,
  onSlideChange,
  onUserInteract,
  onHeroLeave,
  throttleMs = 700,
}: UseHeroScrollOptions) {
  const [current, setCurrent] = useState(0);
  const [isHeroActive, setIsHeroActive] = useState(false);

  const currentRef = useRef(0);
  const isHeroActiveRef = useRef(false);
  const lastScrollTime = useRef(0);
  const touchStartY = useRef<number | null>(null);
  const hasReleasedAfterLast = useRef(false);

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  useEffect(() => {
    isHeroActiveRef.current = isHeroActive;
  }, [isHeroActive]);

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

  const isHeroInViewport = useCallback((): boolean => {
    if (!heroRef.current) return false;
    const rect = heroRef.current.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }, [heroRef]);

  const isHeroPrimaryViewport = useCallback((): boolean => {
    if (!heroRef.current) return false;
    const rect = heroRef.current.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.35 && rect.bottom >= window.innerHeight * 0.35;
  }, [heroRef]);

  const anchorHero = useCallback(() => {
    if (!heroRef.current) return;
    const top = window.scrollY + heroRef.current.getBoundingClientRect().top;
    window.scrollTo(0, top);
  }, [heroRef]);

  const activateHero = useCallback(() => {
    if (isHeroActiveRef.current) return;
    setIsHeroActive(true);
    isHeroActiveRef.current = true;
  }, []);

  const deactivateHero = useCallback(() => {
    if (!isHeroActiveRef.current) return;
    setIsHeroActive(false);
    isHeroActiveRef.current = false;
  }, []);

  const step = useCallback(
    (delta: number): boolean => {
      const now = Date.now();
      if (now - lastScrollTime.current < throttleMs) return true;
      lastScrollTime.current = now;

      onUserInteract?.();
      const next = currentRef.current + delta;

      if (next < 0) {
        deactivateHero();
        return false;
      }

      if (next >= slideCount) {
        hasReleasedAfterLast.current = true;
        deactivateHero();
        return false;
      }

      goTo(next);
      return true; // consumed
    },
    [deactivateHero, goTo, onUserInteract, slideCount, throttleMs]
  );

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onWheel = (e: WheelEvent) => {
      if (prefersReduced) return;
      if (!isHeroPrimaryViewport()) return;

      const delta = e.deltaY > 0 ? 1 : -1;

      if (!isHeroActiveRef.current) {
        if (delta < 0 && hasReleasedAfterLast.current) {
          hasReleasedAfterLast.current = false;
          goTo(slideCount - 1);
          activateHero();
          e.preventDefault();
          return;
        }

        if (delta > 0 && !hasReleasedAfterLast.current) {
          activateHero();
        }
      }

      if (!isHeroActiveRef.current) return;

      const consumed = step(delta);
      if (consumed) {
        e.preventDefault();
        e.stopPropagation();
        anchorHero();
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (prefersReduced) return;
      if (!isHeroPrimaryViewport()) return;
      if (touchStartY.current === null) return;

      const diff = touchStartY.current - e.changedTouches[0].clientY;
      touchStartY.current = null;

      // Minimum swipe distance: 30px
      if (Math.abs(diff) < 30) return;

      const delta = diff > 0 ? 1 : -1;

      if (!isHeroActiveRef.current) {
        if (delta < 0 && hasReleasedAfterLast.current) {
          hasReleasedAfterLast.current = false;
          goTo(slideCount - 1);
          activateHero();
          return;
        }

        if (delta > 0 && !hasReleasedAfterLast.current) {
          activateHero();
        }
      }

      if (isHeroActiveRef.current) {
        if (step(delta)) anchorHero();
      }
    };

    const onScroll = () => {
      if (!isHeroInViewport()) {
        deactivateHero();
        onHeroLeave?.();
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (!isHeroPrimaryViewport()) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        activateHero();
        if (step(1)) {
          e.preventDefault();
          anchorHero();
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        activateHero();
        if (step(-1)) {
          e.preventDefault();
          anchorHero();
        }
      } else if (e.key === "Home") {
        onUserInteract?.();
        activateHero();
        goTo(0);
      } else if (e.key === "End") {
        onUserInteract?.();
        activateHero();
        goTo(slideCount - 1);
      }
    };

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
  }, [
    activateHero,
    anchorHero,
    deactivateHero,
    goTo,
    isHeroInViewport,
    isHeroPrimaryViewport,
    onHeroLeave,
    onUserInteract,
    slideCount,
    step,
  ]);

  return { current, goTo, isHeroActive };
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
  enabled = true,
  initialDelay = 2000,
  interval = 3500,
}: {
  current: number;
  slideCount: number;
  goTo: (idx: number) => void;
  enabled?: boolean;
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
    if (!enabled) {
      stopAutoPlay();
      return;
    }

    if (activeRef.current) return;
    if (current !== slideCount - 1) return;

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
  }, [current, enabled, slideCount, goTo, initialDelay, interval, stopAutoPlay]);

  return { stopAutoPlay };
}
