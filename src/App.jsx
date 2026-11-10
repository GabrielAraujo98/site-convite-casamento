import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Hero } from './sections/Hero'
import { Story } from './sections/Story'
import { DressCode } from './sections/DressCode'
import { ActionPhotos } from './sections/ActionPhotos'
import { Rsvp } from './sections/Rsvp'
import { Gifts } from './sections/Gifts'
import { Closing } from './sections/Closing'
import { wedding } from './data/wedding'

// The invitation is one long page; sections appear in this order.
export default function App() {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = t('meta.title', wedding.couple)
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description', wedding.couple))
  }, [t])

  return (
    <>
      <Hero />
      <main>
        <Story />
        <DressCode />
        <ActionPhotos />
        <Rsvp />
        <Gifts />
      </main>
      <Closing />
    </>
  )
}
