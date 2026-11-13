import { imageUrl } from '../utils/imageUrl'

/** Screen-wide layer where the blossoms fall. It never blocks clicks. */
export function FallingBlossoms({ pieces }) {
  if (!pieces.length) return null

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((piece) => (
        <img
          key={piece.id}
          src={imageUrl(`ornaments/${piece.image}.webp`)}
          alt=""
          className="falling-blossom h-auto"
          style={{
            left: `${piece.left}%`,
            width: `${piece.width}px`,
            animationDuration: `${piece.duration}s`,
            animationDelay: `${piece.delay}s`,
            '--spin': `${piece.spin}deg`,
          }}
        />
      ))}
    </div>
  )
}
