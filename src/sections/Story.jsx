import { useTranslation } from 'react-i18next'
import { Section } from '../components/Section'

export function Story() {
  const { t } = useTranslation()
  const paragraphs = t('story.paragraphs', { returnObjects: true })

  return (
    <Section id="story" title={t('story.title')}>
      <div className="prose">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
