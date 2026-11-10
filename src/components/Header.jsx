import { useState } from 'react'
import { wedding } from '../data/wedding'

const links = [
  { href: '#story', label: 'Story' },
  { href: '#event', label: 'Event' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#rsvp', label: 'RSVP' },
  { href: '#gifts', label: 'Gifts' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const { partnerOne, partnerTwo } = wedding.couple

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__brand">
          {partnerOne[0]} &amp; {partnerTwo[0]}
        </a>
        <button
          className="header__toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          Menu
        </button>
        <nav id="main-nav" className={`header__nav ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
