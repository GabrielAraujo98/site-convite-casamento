import { wedding } from '../data/wedding'
import { useCountdown } from '../hooks/useCountdown'

const units = [
  ['days', 'days'],
  ['hours', 'hours'],
  ['minutes', 'min'],
  ['seconds', 'sec'],
]

export function Hero() {
  const { partnerOne, partnerTwo } = wedding.couple
  const timeLeft = useCountdown(wedding.date)

  return (
    <section id="top" className="hero">
      <p className="hero__eyebrow">We are getting married</p>
      <h1 className="hero__names">
        {partnerOne} <span>&amp;</span> {partnerTwo}
      </h1>
      <p className="hero__date">{wedding.dateLabel}</p>

      {timeLeft.done ? (
        <p className="hero__done">The big day is here!</p>
      ) : (
        <ul className="countdown" aria-label="Countdown">
          {units.map(([key, label]) => (
            <li key={key}>
              <strong>{String(timeLeft[key]).padStart(2, '0')}</strong>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      )}

      <a href="#rsvp" className="button">RSVP</a>
    </section>
  )
}
