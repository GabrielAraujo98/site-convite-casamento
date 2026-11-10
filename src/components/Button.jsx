// Colors of each button type.
const VARIANTS = {
  tangerine: 'bg-tangerine text-linen', // main action
  olive: 'bg-olive text-paper', // quiet action
  ink: 'bg-ink-button text-paper focus-visible:outline-paper', // on top of photos
}

// Sizes measured in the PDF.
const SIZES = {
  small: 'min-h-[37px] min-w-[225px] px-5',
  large: 'min-h-[51px] min-w-[251px] px-7',
  wide: 'min-h-[51px] min-w-[306px] px-7',
  full: 'min-h-[35px] w-full px-5 rounded-full!', // RSVP submit (pill)
}

/**
 * Site button. Renders a link when `href` is given, otherwise a <button>.
 * variant: 'tangerine' | 'olive' | 'ink'
 * size:    'small' | 'large' | 'wide' | 'full'
 */
export function Button({ variant = 'tangerine', size = 'large', href, className = '', children, ...props }) {
  const classes = [
    'inline-flex items-center justify-center rounded-button text-center text-body font-bold leading-tight no-underline',
    'cursor-pointer transition hover:brightness-110 disabled:cursor-wait disabled:opacity-60',
    'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ink',
    VARIANTS[variant],
    SIZES[size],
    className,
  ].join(' ')

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
