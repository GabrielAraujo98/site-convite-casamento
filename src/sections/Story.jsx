import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { Ornament } from '../components/Ornament'
import { BrushHeading } from '../components/BrushHeading'
import { ParallaxPhoto } from '../components/ParallaxPhoto'
import { wedding } from '../data/wedding'
import { imageUrl } from '../utils/imageUrl'

// "Olha que fofinhos": title, couple photo and a short text.
export function Story() {
  const { t } = useTranslation()
  const paragraphs = t('story.paragraphs', { returnObjects: true })

  return (
    <section className="relative pt-16 pb-16 lg:pt-[117px] lg:pb-[100px]">
      <Container className="lg:-translate-x-[50px] grid items-center justify-items-center gap-block text-center lg:grid-cols-[1fr_339px_1fr] lg:gap-[60px] lg:text-left">
        <BrushHeading size="xlarge" className="max-w-[6em]">{t('story.title')}</BrushHeading>

        <ParallaxPhoto
          notch={36}
          className="aspect-[339/453] w-full max-w-[339px]"
          src={imageUrl('photos/couple-beach.webp')}
          alt={t('story.photoAlt', wedding.couple)}
        />

        <div className="relative flex max-w-[36ch] flex-col gap-[19px] lg:max-w-[200px]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {/* Oval bouquet of orange blossoms next to the text, so it never overlaps it on narrower screens.
              Same speed for every piece, so it moves as one; later pieces sit in front. */}
          <div aria-hidden="true" className="pointer-events-none absolute top-[130px] left-[calc(100%+130px)] hidden h-[340px] w-[200px] origin-top-left scale-[1.7] rotate-[15deg] lg:block">
            <Ornament name="orange-blossom-bunch" speed={0.2} className="top-[10px] left-[13px] w-[145px] rotate-[14deg] -scale-x-100" />
            <Ornament name="orange-blossom-sprig" speed={0.2} className="top-0 left-[28px] w-[90px] -rotate-[28deg]" />
            <Ornament name="orange-blossom-sprig" speed={0.2} className="top-[150px] left-[48px] w-[100px] rotate-[160deg]" />
            <Ornament name="orange-blossom-bunch" speed={0.2} className="top-[50px] left-[3px] w-[160px] -rotate-[10deg]" />
            <Ornament name="orange-blossom-large" speed={0.2} className="top-[90px] left-[8px] w-[130px] rotate-[4deg]" />
          </div>
        </div>
      </Container>
    </section>
  )
}
