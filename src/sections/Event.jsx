import { Section } from '../components/Section'
import { wedding } from '../data/wedding'

export function Event() {
  return (
    <Section id="event" title="The big day" className="section--alt">
      <div className="cards">
        {wedding.events.map((event) => (
          <article key={event.id} className="card">
            <h3>{event.title}</h3>
            <p className="card__time">{event.time}</p>
            <p className="card__place">{event.place}</p>
            <p>{event.address}</p>
            <a href={event.mapUrl} target="_blank" rel="noreferrer" className="link">
              View on map
            </a>
          </article>
        ))}
      </div>
      <p className="center muted">Dress code: {wedding.dressCode}</p>
    </Section>
  )
}
