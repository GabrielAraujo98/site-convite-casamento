import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { DisplayHeading } from '../components/DisplayHeading'
import { Button } from '../components/Button'
import { wedding } from '../data/wedding'

// Dress code list with a link to the Pinterest board.
export function DressCode() {
  const { t } = useTranslation()
  const items = t('dressCode.items', { returnObjects: true })

  return (
    <section className="relative pt-16 pb-section lg:pt-[90px]">
      <Container>
        {/* Same left edge as the details above */}
        <div className="flex flex-col items-start lg:pl-[200px]">
          <DisplayHeading>{t('dressCode.title')}</DisplayHeading>

          <ul className="mt-9 list-disc pl-[1.1em] text-body-lg lg:whitespace-nowrap">
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
