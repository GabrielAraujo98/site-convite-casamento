import { useTranslation } from 'react-i18next'
import { Button } from '../components/Button'

// Two full-width photos with a button each: confirm attendance and give a gift.
const ACTIONS = [
  { id: 'rsvp', photo: 'rsvp-card.webp', target: '#rsvp' },
  { id: 'gift', photo: 'gift-box.webp', target: '#gifts' },
]

export function ActionPhotos() {
  const { t } = useTranslation()

  return (
    <section className="grid md:grid-cols-2">
      {ACTIONS.map((action) => (
        <div key={action.id} className="relative aspect-[4/3] overflow-hidden md:aspect-[512/576]">
          <img
            className="h-full w-full object-cover"
            src={`/images/photos/${action.photo}`}
            alt={t(`actions.${action.id}PhotoAlt`)}
            loading="lazy"
          />
          {/* Button centered horizontally, at 74% of the photo height */}
          <Button
            variant="ink"
            href={action.target}
            className="absolute top-[74%] left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {t(`actions.${action.id}`)}
          </Button>
        </div>
      ))}
    </section>
  )
}
