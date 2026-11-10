/**
 * Decorative illustration from /public/images/ornaments.
 * It floats behind the content and never blocks clicks.
 * Position, size and rotation come from `className`, e.g. "top-[43px] left-[50px] w-[236px] rotate-6".
 */
export function Ornament({ name, className = '' }) {
  return (
    <img
      src={`/images/ornaments/${name}.webp`}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className={`pointer-events-none absolute z-0 h-auto max-w-none select-none ${className}`}
    />
  )
}
