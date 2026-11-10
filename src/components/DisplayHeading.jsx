// Font size of each heading size (smaller on phones).
const SIZES = {
  medium: 'text-[32px] md:text-display-md',
  large: 'text-[44px] leading-[0.95] md:text-display-lg',
}

/**
 * Thin, elegant uppercase title for the formal parts of the invitation.
 * size: 'medium' | 'large'
 */
export function DisplayHeading({ as: Tag = 'h2', size = 'medium', className = '', children }) {
  return (
    <Tag className={`font-display font-normal text-balance uppercase text-ink-soft ${SIZES[size]} ${className}`}>
      {children}
    </Tag>
  )
}
