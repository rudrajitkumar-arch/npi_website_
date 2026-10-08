export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width?: number;
  quality?: number;
}): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  let path = src;
  if (src.startsWith("/") && !src.startsWith("//")) {
    if (basePath && !src.startsWith(basePath)) {
      path = `${basePath}${src}`;
    }
  }

  const q = quality || 75;
  const separator = path.includes("?") ? "&" : "?";
  return width ? `${path}${separator}w=${width}&q=${q}` : path;
}
