import { useId } from 'react'

/**
 * Text that follows a curve, drawn with SVG.
 * - curve:    how far the middle bends. Positive = arch (∩), negative = smile (∪), 0 = straight line
 * - fontSize: size in SVG units; the whole drawing scales with the page width
 */
export function CurvedText({ children, width = 560, curve = 70, fontSize = 50, className = '' }) {
  // Unique id so two curved texts on the page don't share the same path.
  const pathId = useId()
  const height = Math.abs(curve) + fontSize * 1.6
  // Height of both ends of the curve: low for an arch, high for a smile.
  const endY = curve >= 0 ? height - fontSize * 0.4 : fontSize * 1.2
  // The control point pulls the middle up (arch) or down (smile).
  const controlY = endY - curve * 2

  return (
    <p className={className}>
      {/* Screen readers read the plain text; the drawing is decorative. */}
      <span className="sr-only">{children}</span>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full overflow-visible" aria-hidden="true">
        {/* Invisible curve the text sits on: left end, middle control point, right end */}
        <path id={pathId} d={`M 0 ${endY} Q ${width / 2} ${controlY} ${width} ${endY}`} fill="none" />

        <text className="fill-merlot font-brush" fontSize={fontSize} textAnchor="middle">
          <textPath href={`#${pathId}`} startOffset="50%">
            {children}
          </textPath>
        </text>
      </svg>
    </p>
  )
}
