import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { Ornament } from '../components/Ornament'
import { BrushHeading } from '../components/BrushHeading'
import { wedding } from '../data/wedding'
import { imageUrl } from '../utils/imageUrl'

// "Olha que fofinhos": title, couple photo and a short text.
export function Story() {
  const { t } = useTranslation()
  const paragraphs = t('story.paragraphs', { returnObjects: true })

  return (
    <section className="relative pt-16 lg:pt-[117px]">
      <Container className="grid items-center justify-items-center gap-block text-center lg:grid-cols-[1fr_339px_1fr] lg:gap-[60px] lg:text-left">
        <BrushHeading className="max-w-[6em]">{t('story.title')}</BrushHeading>

        <img
          className="aspect-[339/453] w-full max-w-[339px] object-cover"
          src={imageUrl('photos/couple-beach.webp')}
          alt={t('story.photoAlt', wedding.couple)}
        />

        <div className="flex max-w-[36ch] flex-col gap-[19px] lg:max-w-[200px]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>

      <Ornament name="ivy-story" className="top-[420px] -right-[150px] hidden w-[286px] -rotate-[35deg] lg:block" />
    </section>
  )
}
