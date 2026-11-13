import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Hero } from './sections/Hero'
import { Story } from './sections/Story'
import { Details } from './sections/Details'
import { DressCode } from './sections/DressCode'
import { Rsvp } from './sections/Rsvp'
import { Gifts } from './sections/Gifts'
import { Closing } from './sections/Closing'
import { CrochetTexture } from './components/CrochetTexture'
import { LaceDivider } from './components/LaceDivider'
import { wedding } from './data/wedding'

// The invitation is one long page; sections appear in this order,
// separated by a crochet trim and over a light crochet texture.
export default function App() {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = t('meta.title', wedding.couple)
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description', wedding.couple))
  }, [t])

  return (
    // overflow-x-clip: ornaments that reach past the screen edge are cut off instead of making
    // the page wider than the phone (mobile browsers ignore overflow-x: hidden on <body>).
    <div className="relative overflow-x-clip">
      <CrochetTexture />
      <Hero />
      <LaceDivider />
      <main>
        <Story />
        <LaceDivider flipped />
        <Details />
        <LaceDivider />
        <DressCode />
        <Rsvp />
        <LaceDivider />
        <Gifts />
        <LaceDivider />
      </main>
      <Closing />
    </div>
  )
}
