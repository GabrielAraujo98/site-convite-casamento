import { useTranslation } from 'react-i18next'
import { Section } from '../components/Section'
import { wedding } from '../data/wedding'

export function Gallery() {
  const { t } = useTranslation()
  const photos = wedding.gallery

  return (
    <Section id="gallery" title={t('gallery.title')}>
      {photos.length === 0 ? (
        <p className="center muted">{t('gallery.empty')}</p>
      ) : (
        <div className="gallery">
          {photos.map((src, index) => (
            <img key={src} src={src} alt={t('gallery.photoAlt', { number: index + 1 })} loading="lazy" />
          ))}
        </div>
      )}
    </Section>
  )
}
