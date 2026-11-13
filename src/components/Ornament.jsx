import { useCallback, useRef } from 'react'
import { imageUrl } from '../utils/imageUrl'
import { distanceToScreenCenter, motionScale, useScrollFrame } from '../hooks/useScrollFrame'

// Contained parallax: as the section crosses the screen, the ornament travels smoothly
// through the free space between its resting place and the section edges, never past them.
function containedOffset(element, block, speed) {
  const blockRect = block.getBoundingClientRect()
  const imageRect = element.getBoundingClientRect() // includes rotation
  const current = Number(element.dataset.offset || 0)
  const roomAbove = Math.max(0, imageRect.top - current - blockRect.top)
  const roomBelow = Math.max(0, blockRect.bottom - (imageRect.bottom - current))

  // -1 when the section is leaving the top of the screen, 1 when it is entering from the bottom.
  const screenHeight = window.innerHeight
  const center = blockRect.top + blockRect.height / 2 - screenHeight / 2
  const progress = Math.max(-1, Math.min(1, center / (screenHeight / 2 + blockRect.height / 2)))

  const direction = Math.sign(speed) * Math.sign(progress)
  return progress * Math.sign(speed) * (direction > 0 ? roomBelow : roomAbove)
}

// Moves an ornament (or a group of them) with the scroll. See Ornament for `speed` and `contained`.
function useOrnamentParallax(ref, speed, contained) {
  const moveWithScroll = useCallback(
    (element) => {
      // Measure the section, not the element, so the element's own movement doesn't feed back.
      const block = element.closest('section, header, footer') ?? element.parentElement
      const offset = contained ? containedOffset(element, block, speed) : distanceToScreenCenter(block) * speed * motionScale()
      // `translate` runs before the element's own `rotate`, so it always moves straight up or down.
      element.style.translate = `0 ${offset.toFixed(1)}px`
      element.dataset.offset = offset
    },
    [speed, contained],
  )
  useScrollFrame(ref, speed ? moveWithScroll : null)
}

/**
 * Decorative illustration from /public/images/ornaments.
 * It floats behind the content and never blocks clicks.
 * Position, size and rotation come from `className`, e.g. "top-[43px] left-[50px] w-[236px] rotate-6".
 *
 * speed (optional) turns on parallax while the page scrolls:
 *   positive = the ornament sits "in front" and moves faster than the page (e.g. 0.3)
 *   negative = it sits "behind" and moves slower (e.g. -0.15)
 * contained (optional): keeps the moving ornament inside its section, so it never
 *   crosses the crochet dividers above and below.
 */
export function Ornament({ name, speed = 0, contained = false, className = '' }) {
  const ref = useRef(null)
  useOrnamentParallax(ref, speed, contained)

  return (
    <img
      ref={ref}
      src={imageUrl(`ornaments/${name}.webp`)}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className={`pointer-events-none absolute z-0 h-auto max-w-none select-none ${className}`}
    />
  )
}

/**
 * Several ornaments that move as one piece. Size and place the group with `className`
 * (it must cover all its pieces) and put <Ornament> pieces without `speed` inside.
 */
export function OrnamentGroup({ speed = 0, contained = false, className = '', children }) {
  const ref = useRef(null)
  useOrnamentParallax(ref, speed, contained)

  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none absolute z-0 ${className}`}>
      {children}
    </div>
  )
}
