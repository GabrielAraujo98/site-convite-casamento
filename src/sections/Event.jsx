import { useTranslation } from 'react-i18next'
import { Section } from '../components/Section'
import { wedding } from '../data/wedding'
import { useDateFormat } from '../hooks/useDateFormat'

export function Event() {
  const { t } = useTranslation()
  const { formatTime } = useDateFormat()

  return (
    <Section id="event" title={t('event.title')} className="section--alt">
      <div className="cards">
        {wedding.events.map((event) => (
          <article key={event.id} className="card">
            <h3>{t(`event.types.${event.type}`)}</h3>
            <p className="card__time">{formatTime(event.startsAt)}</p>
            <p className="card__place">{event.place}</p>
            <p>{event.address}</p>
            <a href={event.mapUrl} target="_blank" rel="noreferrer" className="link">
              {t('event.viewOnMap')}
            </a>
          </article>
        ))}
      </div>
      <p className="center muted">{t('event.dressCode', { dressCode: t('event.dressCodeValue') })}</p>
    </Section>
  )
}
