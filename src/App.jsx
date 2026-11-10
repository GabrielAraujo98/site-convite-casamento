import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { Story } from './sections/Story'
import { Event } from './sections/Event'
import { Gallery } from './sections/Gallery'
import { Rsvp } from './sections/Rsvp'
import { Gifts } from './sections/Gifts'
import { wedding } from './data/wedding'

export default function App() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const names = wedding.couple
    document.title = t('meta.title', names)
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description', names))
  }, [t, i18n.language])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <Event />
        <Gallery />
        <Rsvp />
        <Gifts />
      </main>
      <Footer />
    </>
  )
}
