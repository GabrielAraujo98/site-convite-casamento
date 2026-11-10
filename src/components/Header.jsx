import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { wedding } from '../data/wedding'

const NAV_SECTIONS = ['story', 'event', 'gallery', 'rsvp', 'gifts']

export function Header() {
  const { t } = useTranslation()
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
          {t('header.menu')}
        </button>
        <nav id="main-nav" className={`header__nav ${open ? 'is-open' : ''}`}>
          {NAV_SECTIONS.map((sectionId) => (
            <a key={sectionId} href={`#${sectionId}`} onClick={() => setOpen(false)}>
              {t(`header.nav.${sectionId}`)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
