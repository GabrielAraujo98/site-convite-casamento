import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { Ornament } from '../components/Ornament'
import { DisplayHeading } from '../components/DisplayHeading'
import { Button } from '../components/Button'
import { wedding } from '../data/wedding'

// Dress code list with a link to the Pinterest board.
export function DressCode() {
  const { t } = useTranslation()
  const items = t('dressCode.items', { returnObjects: true })

  return (
    <section className="relative pt-[50px] pb-section">
      <Ornament name="crochet-doily" className="top-0 -left-[330px] w-[419px] opacity-50 lg:-left-[264px] lg:opacity-100" />

      <Container>
        {/* Content starts at about one third of the page, like the PDF */}
        <div className="flex flex-col items-start lg:pl-[291px]">
          <DisplayHeading>{t('dressCode.title')}</DisplayHeading>

          <ul className="mt-9 list-disc pl-[1.1em] text-body-lg">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Button size="wide" href={wedding.dressCode.pinterestUrl} target="_blank" rel="noreferrer" className="mt-block">
            {t('dressCode.pinterest')}
          </Button>
        </div>
      </Container>
    </section>
  )
}
