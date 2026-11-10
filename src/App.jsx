import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { Story } from './sections/Story'
import { Event } from './sections/Event'
import { Gallery } from './sections/Gallery'
import { Rsvp } from './sections/Rsvp'
import { Gifts } from './sections/Gifts'

export default function App() {
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
