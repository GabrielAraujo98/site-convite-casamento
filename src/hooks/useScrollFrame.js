import { useEffect } from 'react'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'
const PHONE_QUERY = '(max-width: 767px)'

/** True when the guest asked the system for less motion. */
export function prefersReducedMotion() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches
}

/** Phones get half the movement: strong parallax on a small screen feels jumpy. */
export function motionScale() {
  return window.matchMedia(PHONE_QUERY).matches ? 0.5 : 1
}

/**
 * Distance from the middle of `block` to the middle of the screen, in pixels.
 * Blocks already on screen when the page opens count from zero,
 * so nothing starts out of place.
 */
export function distanceToScreenCenter(block) {
  const rect = block.getBoundingClientRect()
  const screenHeight = window.innerHeight
  if (rect.top + window.scrollY < screenHeight) return -window.scrollY
  return rect.top + Math.min(rect.height, screenHeight) / 2 - screenHeight / 2
}

/**
 * Calls `onFrame(element)` once on mount and then once per animation frame
 * while the page scrolls or resizes. Does nothing when the guest prefers reduced motion.
 * `onFrame` must be stable (a module function or wrapped in useCallback).
 */
export function useScrollFrame(ref, onFrame) {
  useEffect(() => {
    const element = ref.current
    if (!element || !onFrame || prefersReducedMotion()) return undefined

    let frame = 0
    const run = () => {
      frame = 0
      onFrame(element)
    }
    const requestRun = () => {
      if (!frame) frame = window.requestAnimationFrame(run)
    }

    run()
    window.addEventListener('scroll', requestRun, { passive: true })
    window.addEventListener('resize', requestRun)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', requestRun)
      window.removeEventListener('resize', requestRun)
    }
  }, [ref, onFrame])
}
