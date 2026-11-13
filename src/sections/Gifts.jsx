import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { BrushHeading } from '../components/BrushHeading'
import { GiftCard } from '../components/GiftCard'
import { gifts } from '../data/gifts'
import { Ornament } from '../components/Ornament'
import { useState } from 'react'
import { PixModal } from '../components/PixModal'

// Gift list: title, intro between two ivy branches and the grid of gifts.
export function Gifts() {
  const { t } = useTranslation()
  const [selectedGift, setSelectedGift] = useState(null)
  const introLines = t('gifts.intro', { returnObjects: true })

  return (
    <section id="gifts" className="relative pt-16 pb-section lg:pt-[90px]">
      <Container>
        <header className="flex flex-col items-center text-center">
          <BrushHeading size="xlarge">{t('gifts.title')}</BrushHeading>
          <div className="relative mt-[30px]">
            {/* A light ivy branch on each side of the intro */}
            <Ornament name="ivy-story" className="-bottom-[120px] -left-[435px] hidden w-[490px] rotate-[6deg] -scale-y-100 lg:block" />
            <Ornament name="ivy-story" className="-right-[435px] -bottom-[120px] hidden w-[490px] rotate-[174deg] lg:block" />

            <div className="relative z-10 text-body-lg leading-normal md:text-lead">
              {introLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </header>

        {/* One column on phones, two on tablets, three on desktop */}
        <div className="mt-20 grid gap-x-gutter gap-y-[60px] sm:grid-cols-2 lg:mt-[200px] lg:grid-cols-3 lg:gap-y-[100px]">
          {gifts.map((gift, index) => (
            <GiftCard key={gift.id} {...gift} index={index}
            onSelect={() => setSelectedGift(gift)} />
          ))}
        </div>
      </Container>

      <PixModal gift={selectedGift} onClose={() => setSelectedGift(null)} />
    </section>
  )
}
