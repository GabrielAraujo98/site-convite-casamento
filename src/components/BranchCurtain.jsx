import { useRef } from 'react'
import { imageUrl } from '../utils/imageUrl'
import { prefersReducedMotion, useScrollFrame } from '../hooks/useScrollFrame'

// Ivy of each half, layered from back to front; each piece is one rib of the fan.
const LEFT_BRANCHES = [
  { name: 'ivy-branch-2', className: 'top-[4%] -right-[110px] w-[540px] rotate-[8deg]' },
  { name: 'ivy-rsvp-left', className: 'top-[2%] left-[2%] w-[440px] rotate-[12deg]' },
  { name: 'ivy-branch-4', className: 'top-[20%] -right-[90px] w-[540px] -rotate-[30deg]' },
  { name: 'ivy-story', className: 'top-[26%] left-[24%] w-[380px] rotate-[70deg]' },
  { name: 'ivy-branch-1', className: 'top-[38%] -left-[8%] w-[500px] -rotate-[45deg]' },
  { name: 'ivy-branch-5', className: 'top-[48%] -right-[110px] w-[540px] rotate-[15deg]' },
  { name: 'ivy-rsvp-top', className: 'bottom-[6%] left-[4%] w-[460px] -rotate-[10deg]' },
  { name: 'ivy-branch-3', className: 'bottom-[0%] -right-[80px] w-[520px] -rotate-[20deg]' },
  { name: 'ivy-branch-2', className: 'top-[64%] left-[20%] w-[460px] -rotate-[55deg]' },
  { name: 'ivy-branch-3', className: 'top-[9%] -right-[60px] w-[400px] -rotate-[4deg]' },
  // Extra layers so the closed fan reads as a dense thicket
  { name: 'ivy-rsvp-right', className: '-top-[6%] left-[30%] w-[420px] rotate-[150deg]' },
  { name: 'ivy-branch-5', className: 'top-[14%] -left-[10%] w-[480px] rotate-[35deg]' },
  { name: 'ivy-story', className: 'top-[44%] -right-[40px] w-[360px] -rotate-[110deg]' },
  { name: 'ivy-branch-1', className: 'top-[30%] left-[16%] w-[440px] rotate-[10deg]' },
  { name: 'ivy-rsvp-left', className: 'top-[56%] left-[34%] w-[400px] -rotate-[20deg]' },
  { name: 'ivy-branch-4', className: 'bottom-[18%] -left-[6%] w-[460px] rotate-[25deg]' },
  { name: 'ivy-rsvp-top', className: 'top-[72%] -right-[30px] w-[420px] rotate-[160deg]' },
  { name: 'ivy-branch-3', className: '-bottom-[4%] left-[10%] w-[460px] rotate-[8deg]' },
]

const RIGHT_BRANCHES = [
  { name: 'ivy-branch-2', className: 'top-[4%] -left-[110px] w-[540px] -rotate-[8deg] -scale-x-100' },
  { name: 'ivy-rsvp-right', className: 'top-[2%] right-[2%] w-[440px] -rotate-[12deg]' },
  { name: 'ivy-branch-4', className: 'top-[20%] -left-[90px] w-[540px] rotate-[30deg] -scale-x-100' },
  { name: 'ivy-story', className: 'top-[26%] right-[24%] w-[380px] -rotate-[70deg] -scale-x-100' },
  { name: 'ivy-branch-1', className: 'top-[38%] -right-[8%] w-[500px] rotate-[45deg] -scale-x-100' },
  { name: 'ivy-branch-5', className: 'top-[48%] -left-[110px] w-[540px] -rotate-[15deg] -scale-x-100' },
  { name: 'ivy-rsvp-top', className: 'bottom-[6%] right-[4%] w-[460px] rotate-[10deg] -scale-x-100' },
  { name: 'ivy-branch-3', className: 'bottom-[0%] -left-[80px] w-[520px] rotate-[20deg] -scale-x-100' },
  { name: 'ivy-branch-2', className: 'top-[64%] right-[20%] w-[460px] rotate-[55deg] -scale-x-100' },
  { name: 'ivy-branch-3', className: 'top-[9%] -left-[60px] w-[400px] rotate-[4deg] -scale-x-100' },
  // Extra layers so the closed fan reads as a dense thicket
  { name: 'ivy-rsvp-left', className: '-top-[6%] right-[30%] w-[420px] -rotate-[150deg] -scale-x-100' },
  { name: 'ivy-branch-5', className: 'top-[14%] -right-[10%] w-[480px] -rotate-[35deg] -scale-x-100' },
  { name: 'ivy-story', className: 'top-[44%] -left-[40px] w-[360px] rotate-[110deg] -scale-x-100' },
  { name: 'ivy-branch-1', className: 'top-[30%] right-[16%] w-[440px] -rotate-[10deg] -scale-x-100' },
  { name: 'ivy-rsvp-right', className: 'top-[56%] right-[34%] w-[400px] rotate-[20deg]' },
  { name: 'ivy-branch-4', className: 'bottom-[18%] -right-[6%] w-[460px] -rotate-[25deg] -scale-x-100' },
  { name: 'ivy-rsvp-top', className: 'top-[72%] -left-[30px] w-[420px] -rotate-[160deg] -scale-x-100' },
  { name: 'ivy-branch-3', className: '-bottom-[4%] right-[10%] w-[460px] -rotate-[8deg] -scale-x-100' },
]

// Fan: each half turns around its outer bottom corner, like the ribs of a hand fan.
// Every ivy piece is one rib; the front ribs start first and the back ones follow,
// so the leaves spread out before leaving the screen.
const FAN_ANGLE = 130 // degrees each rib turns when fully open (past 90, so it leaves the screen)
const FAN_SPREAD = 2 // extra degrees per rib, so the open fan stays spread out
const RIB_DELAY = 0.025 // how much later (in progress) each rib starts

// How far (px) the leaves may reach outside the section: matches -top-20 / inset-y-20 below.
const OVERFLOW = 80
const CURTAIN_FADE = `linear-gradient(to bottom, #0000, #000 ${OVERFLOW}px, #000 calc(100% - ${OVERFLOW}px), #0000)`

// Gentle ease (sine): starts and ends softly, with no sudden middle.
const easeInOut = (progress) => (1 - Math.cos(Math.PI * progress)) / 2
const clamp01 = (value) => Math.max(0, Math.min(1, value))

// The fan stays fully closed while the section comes into view, starts opening when its
// top reaches FAN_START of the screen height, and is fully open after OPEN_SCROLL more pixels.
const FAN_START = 0.8
const OPEN_SCROLL = 560
// Each frame the fan covers this share of the distance to where the scroll says it should be,
// so mouse-wheel jumps turn into a smooth glide instead of a jerk.
const SMOOTHING = 0.08

function drawFan(curtain, open) {
  curtain.querySelectorAll('[data-side]').forEach((half) => {
    // Left half turns counterclockwise, right half clockwise: both open outwards.
    const direction = half.dataset.side === 'left' ? -1 : 1
    const ribs = [...half.querySelectorAll('[data-rib]')]
    const lastStart = (ribs.length - 1) * RIB_DELAY

    ribs.forEach((rib) => {
      const order = ribs.length - 1 - Number(rib.dataset.rib) // front ribs first
      const ribOpen = easeInOut(clamp01((open - order * RIB_DELAY) / (1 - lastStart)))
      const angle = direction * ribOpen * (FAN_ANGLE + order * FAN_SPREAD)
      rib.style.transform = `rotate(${angle.toFixed(2)}deg)`
      // Leaves right next to the pivot never travel far, so each rib also fades out at the end.
      rib.style.opacity = (1 - clamp01((ribOpen - 0.8) / 0.2)).toFixed(3)
    })

    // The linen backing stays while the fan is closed and fades out as the ribs spread.
    half.querySelector('[data-backing]').style.opacity = (1 - clamp01((open - 0.2) / 0.4)).toFixed(3)
  })
}

// Called on scroll: works out the target opening and glides the fan towards it.
function openFan(curtain) {
  const sectionTop = curtain.getBoundingClientRect().top + OVERFLOW
  const startTop = window.innerHeight * FAN_START
  curtain.fanTarget = clamp01((startTop - sectionTop) / OPEN_SCROLL)

  if (curtain.fanFrame) return
  const step = () => {
    const current = curtain.fanOpen ?? curtain.fanTarget
    const next = current + (curtain.fanTarget - current) * SMOOTHING
    const settled = Math.abs(curtain.fanTarget - next) < 0.001
    curtain.fanOpen = settled ? curtain.fanTarget : next
    drawFan(curtain, curtain.fanOpen)
    curtain.fanFrame = settled ? 0 : window.requestAnimationFrame(step)
  }
  step()
}

function CurtainHalf({ side, branches }) {
  const position = side === 'left' ? 'left-0' : 'right-0'
  // Every rib turns around the outer bottom corner of its half.
  const pivot = side === 'left' ? 'origin-bottom-left' : 'origin-bottom-right'
  // Soft linen backing under the leaves, so the content doesn't peek through the gaps.
  const backing = side === 'left' ? 'left-[12%] -right-10' : 'right-[12%] -left-10'

  return (
    // Inset by OVERFLOW, so each half matches the section itself.
    <div data-side={side} className={`absolute inset-y-20 w-[60%] md:w-1/2 ${position}`}>
      <div data-backing className={`absolute inset-y-[3%] bg-linen blur-[18px] ${backing}`} />
      {branches.map((branch, index) => (
        // Full-size layer, so the rotation pivot is the half's corner, not the image's center.
        <div key={`${branch.name}-${index}`} data-rib={index} className={`absolute inset-0 ${pivot}`}>
          <img
            src={imageUrl(`ornaments/${branch.name}.webp`)}
            alt=""
            className={`absolute h-auto max-w-none select-none ${branch.className}`}
          />
        </div>
      ))}
    </div>
  )
}

/**
 * Two clusters of ivy that cover the section and open outwards like a hand fan
 * as the section scrolls to the middle of the screen. Place it inside a `relative` section.
 * Hidden for guests who prefer reduced motion.
 */
export function BranchCurtain() {
  const ref = useRef(null)
  useScrollFrame(ref, openFan)

  if (prefersReducedMotion()) return null

  return (
    // The leaves may reach OVERFLOW px above and below the section and fade out there,
    // so they never touch the Pinterest button above and never show a straight cut.
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 -top-20 -bottom-20 z-20 overflow-hidden"
      style={{ mask: CURTAIN_FADE }}
    >
      <CurtainHalf side="left" branches={LEFT_BRANCHES} />
      <CurtainHalf side="right" branches={RIGHT_BRANCHES} />
    </div>
  )
}
