// Colors of each button type.
const VARIANTS = {
  tangerine: 'bg-tangerine text-linen', // main action
  olive: 'bg-olive text-paper', // quiet action
  ink: 'bg-ink-button text-paper focus-visible:outline-paper', // on top of photos
  outline: 'border-[0.75px] border-olive bg-linen-deep text-olive hover:bg-linen focus-visible:outline-olive', // gift price
}

// Sizes measured in the PDF.
const SIZES = {
  small: 'min-h-[37px] min-w-[225px] px-5',
  large: 'min-h-[51px] min-w-[251px] px-7',
  wide: 'min-h-[51px] min-w-[306px] px-7',
  full: 'min-h-[35px] w-full px-5 rounded-full!', // RSVP submit (pill)
  compact: 'min-h-[33px] px-4 font-utility text-[13px]!', // gift price
}

/**
 * Site button. Renders a link when `href` is given, otherwise a <button>.
 * variant: 'tangerine' | 'olive' | 'ink' | 'outline'
 * size:    'small' | 'large' | 'wide' | 'full' | 'compact'
 * as="span": only looks like a button, for use inside something that is already clickable.
 */
export function Button({ as, variant = 'tangerine', size = 'large', href, className = '', children, ...props }) {
  const classes = [
    'inline-flex items-center justify-center rounded-button text-center text-body font-bold leading-tight no-underline',
    'cursor-pointer transition hover:brightness-110 disabled:cursor-wait disabled:opacity-60',
    'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ink',
    VARIANTS[variant],
    SIZES[size],
    className,
  ].join(' ')

  if (as === 'span') {
    return (
      <span className={classes} {...props}>
        {children}
      </span>
    )
  }

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
