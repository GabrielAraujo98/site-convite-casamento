import { Section } from '../components/Section'
import { wedding } from '../data/wedding'

export function Story() {
  return (
    <Section id="story" title={wedding.story.title}>
      <div className="prose">
        {wedding.story.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
