import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { Ornament, OrnamentGroup } from '../components/Ornament'
import { DisplayHeading } from '../components/DisplayHeading'
import { wedding } from '../data/wedding'
import { useDateFormat } from '../hooks/useDateFormat'

// "What you need to know": date, time and venue.
export function Details() {
  const { t } = useTranslation()
  const { formatDate } = useDateFormat()

  const items = [
    { id: 'date', label: t('details.dateLabel'), value: formatDate('details.date', wedding.date) },
    { id: 'time', label: t('details.timeLabel'), value: formatDate('details.time', wedding.date) },
    { id: 'venue', label: t('details.venueLabel'), value: wedding.venue },
  ]

  return (
    <section className="relative pt-10 pb-10 lg:pt-[50px] lg:pb-[50px]">
      {/* Orange branch with a white blossom, moving together between the crochet dividers */}
      <OrnamentGroup speed={0.2} contained className="top-[15px] -left-[90px] hidden h-[440px] w-[320px] lg:block">
        <Ornament name="orange-branch-left" className="top-[25px] left-[30px] w-[200px] -rotate-[24deg]" />
        <Ornament name="orange-blossom-sprig" className="top-[105px] left-[105px] w-[80px] rotate-[18deg]" />
      </OrnamentGroup>

      <Container>
        {/* Same left edge as the dress code below */}
        <div className="flex flex-col items-start lg:pl-[200px]">
          <DisplayHeading>{t('details.title')}</DisplayHeading>

          <div className="mt-9 flex w-full max-w-[520px] flex-col lg:w-auto lg:max-w-none">
            {items.map((item) => (
              <h3
                key={item.id}
                className="flex flex-col gap-1 border-t-[0.75px] border-olive py-4 font-normal last:border-b-[0.75px] sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="font-utility text-label font-bold tracking-[0.12em] text-olive uppercase sm:w-[90px] sm:shrink-0">
                  {item.label}
                </span>
                <span className="text-body-lg lg:whitespace-nowrap">{item.value}</span>
              </h3>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
