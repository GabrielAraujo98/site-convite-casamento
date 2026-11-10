// Font size of each heading size (smaller on phones).
const SIZES = {
  small: 'text-[20px] md:text-brush-sm',
  medium: 'text-[32px] md:text-brush-md',
  large: 'text-[40px] md:text-brush-lg',
}

/**
 * Dark red hand-brushed title, used for the couple's jokes.
 * size: 'small' | 'medium' | 'large'
 */
export function BrushHeading({ as: Tag = 'h2', size = 'medium', className = '', children }) {
  return (
    <Tag className={`font-brush font-normal text-balance uppercase text-merlot ${SIZES[size]} ${className}`}>
      {children}
    </Tag>
  )
}
