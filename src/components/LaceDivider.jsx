import { imageUrl } from '../utils/imageUrl'

/**
 * Crochet flower trim across the whole width, used as a break between sections.
 * The image is a mask, so its color comes from the background class (sand by default).
 * flipped: turns it upside down, with the scallops pointing up.
 */
export function LaceDivider({ flipped = false, className = '' }) {
  const mask = `url(${imageUrl('ornaments/crochet-flower-trim.png')}) center / auto 100% repeat-x`

  return (
    <div
      aria-hidden="true"
      className={`relative z-10 h-10 w-full bg-sand md:h-14 ${flipped ? '-scale-y-100' : ''} ${className}`}
      style={{ mask, WebkitMask: mask }}
    />
  )
}
