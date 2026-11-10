import { Section } from '../components/Section'
import { wedding } from '../data/wedding'

export function Gallery() {
  const photos = wedding.gallery

  return (
    <Section id="gallery" title="Gallery">
      {photos.length === 0 ? (
        <p className="center muted">Our photos are coming soon.</p>
      ) : (
        <div className="gallery">
          {photos.map((src, index) => (
            <img key={src} src={src} alt={`Couple photo ${index + 1}`} loading="lazy" />
          ))}
        </div>
      )}
    </Section>
  )
}
