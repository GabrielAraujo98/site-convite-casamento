import { useTranslation } from 'react-i18next'
import { wedding } from '../data/wedding'
import { useCountdown } from '../hooks/useCountdown'
import { useDateFormat } from '../hooks/useDateFormat'

const COUNTDOWN_UNITS = ['days', 'hours', 'minutes', 'seconds']

export function Hero() {
  const { t } = useTranslation()
  const { formatLongDate } = useDateFormat()
  const { partnerOne, partnerTwo } = wedding.couple
  const timeLeft = useCountdown(wedding.date)

  return (
    <section id="top" className="hero">
      <p className="hero__eyebrow">{t('hero.eyebrow')}</p>
      <h1 className="hero__names">
        {partnerOne} <span>{t('hero.joiner')}</span> {partnerTwo}
      </h1>
      <p className="hero__date">{formatLongDate(wedding.date)}</p>

      {timeLeft.done ? (
        <p className="hero__done">{t('hero.done')}</p>
      ) : (
        <ul className="countdown" aria-label={t('hero.countdownLabel')}>
          {COUNTDOWN_UNITS.map((unit) => (
            <li key={unit}>
              <strong>{String(timeLeft[unit]).padStart(2, '0')}</strong>
              <span>{t(`hero.countdown.${unit}`, { count: timeLeft[unit] })}</span>
            </li>
          ))}
        </ul>
      )}

      <a href="#rsvp" className="button">{t('hero.cta')}</a>
    </section>
  )
}
