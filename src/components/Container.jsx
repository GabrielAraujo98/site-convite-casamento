/**
 * Centered column, 1024px wide like the PDF, with side margins.
 * It sits above the section's ornaments (z-10).
 */
export function Container({ className = '', children }) {
  return (
    <div className={`relative z-10 mx-auto w-full max-w-[1024px] px-5 md:px-page ${className}`}>
      {children}
    </div>
  )
}
