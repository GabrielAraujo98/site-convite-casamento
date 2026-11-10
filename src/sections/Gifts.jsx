import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { BrushHeading } from '../components/BrushHeading'
import { GiftCard } from '../components/GiftCard'
import { gifts } from '../data/gifts'

// Gift list: title, intro, lace trim and the grid of gifts.
export function Gifts() {
  const { t } = useTranslation()
  const introLines = t('gifts.intro', { returnObjects: true })

  return (
    <section id="gifts" className="relative pb-section">
      <Container>
        <header className="flex flex-col items-center text-center">
          <BrushHeading size="large">{t('gifts.title')}</BrushHeading>
          <div className="mt-[30px] text-[14.5px] leading-normal">
            {introLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <img className="h-auto w-[min(414px,100%)]" src="/images/ornaments/scallop-trim.svg" alt="" aria-hidden="true" />
        </header>

        {/* One column on phones, two on tablets, three on desktop */}
        <div className="mt-20 grid gap-x-gutter gap-y-[60px] sm:grid-cols-2 lg:mt-[200px] lg:grid-cols-3 lg:gap-y-[100px]">
          {gifts.map((gift) => (
            <GiftCard key={gift.id} {...gift} />
          ))}
        </div>
      </Container>
    </section>
  )
}
