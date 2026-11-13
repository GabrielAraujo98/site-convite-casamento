import { useRef } from 'react'
import { useScrollFrame } from '../hooks/useScrollFrame'

// The photo is 24% taller than its frame (12% spare on each side) and slides at most 9% of
// its own height, which is about 11% of the frame: the frame never shows an empty edge.
const MAX_SLIDE_PERCENT = 9

// Moves the photo from the bottom of its spare room (frame entering the screen)
// to the top (frame leaving the screen).
function slidePhoto(image) {
  const rect = image.parentElement.getBoundingClientRect()
  const screenHeight = window.innerHeight
  const position = (rect.top + rect.height / 2 - screenHeight / 2) / (screenHeight / 2 + rect.height / 2)
  const clamped = Math.max(-1, Math.min(1, position))
  image.style.transform = `translate3d(0, ${(clamped * MAX_SLIDE_PERCENT).toFixed(2)}%, 0)`
}

// Cuts a quarter circle of `radius` out of each corner (concave corners, like a ticket).
function notchedCornersMask(radius) {
  // Each layer covers one quarter of the frame and is drawn from its own corner.
  const corner = (position) =>
    `radial-gradient(circle ${radius}px at ${position}, #0000 ${radius - 0.5}px, #000 ${radius}px) ${position} / 50% 50% no-repeat`
  return ['0 0', '100% 0', '0 100%', '100% 100%'].map(corner).join(', ')
}

/**
 * Photo inside a fixed frame: the frame scrolls with the page and the photo slides slowly inside it.
 * Size and shape come from `className` (e.g. "aspect-[339/453] w-full max-w-[339px]").
 * notch (optional): radius in px of the concave cut at each corner.
 */
export function ParallaxPhoto({ src, alt, notch = 0, className = '' }) {
  const imageRef = useRef(null)
  useScrollFrame(imageRef, slidePhoto)
  const mask = notch ? notchedCornersMask(notch) : undefined

  return (
    <div className={`relative overflow-hidden ${className}`} style={mask && { mask }}>
      <img ref={imageRef} src={src} alt={alt} className="absolute inset-x-0 -top-[12%] h-[124%] w-full object-cover" />
    </div>
  )
}
