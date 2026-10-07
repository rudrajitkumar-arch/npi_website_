export default function imageLoader({
  src,
}: {
  src: string;
  width?: number;
  quality?: number;
}): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (src.startsWith("/") && !src.startsWith("//")) {
    if (basePath && !src.startsWith(basePath)) {
      return `${basePath}${src}`;
    }
  }
  return src;
}
