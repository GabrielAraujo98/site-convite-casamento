import { useTranslation } from 'react-i18next'
import { Ornament } from '../components/Ornament'
import { CurvedText } from '../components/CurvedText'
import { wedding } from '../data/wedding'
import { useDateFormat } from '../hooks/useDateFormat'

// Opening: the couple's names between two orange branches.
export function Hero() {
  const { t } = useTranslation()
  const { formatDate } = useDateFormat()
  const { partnerOne, partnerTwo } = wedding.couple

  return (
    <header
      id="top"
      className="relative flex flex-col items-center px-5 pt-[200px] pb-10 text-center md:min-h-[560px] md:pt-[142px] md:pb-0"
    >
      {/* Ornaments: positions and angles measured in the PDF */}
      <Ornament name="orange-branch-left" className="top-0 -left-2.5 w-[120px] rotate-6 md:top-[43px] md:left-[50px] md:w-[236px]" />
      <Ornament name="orange-blossom" className="top-[160px] left-[155px] hidden w-[88px] -rotate-[11.6deg] md:block" />
      <Ornament name="orange-blossom" className="top-[275px] left-[95px] hidden w-[88px] rotate-[131deg] md:block" />
      <Ornament name="orange-branch-right" className="top-0 -right-2.5 w-[110px] -rotate-[6.6deg] md:top-[65px] md:right-[55px] md:w-[210px]" />

      {/* "LICI e BIEL" */}
      <h1 className="relative flex flex-col items-center font-normal">
        <span className="pl-[0.14em] font-display text-[40px] tracking-[0.14em] uppercase md:text-names">{partnerOne}</span>
        <span className="my-1 font-script text-script">{t('hero.joiner')}</span>
        <span className="pl-[0.14em] font-display text-[40px] tracking-[0.14em] uppercase md:text-names">{partnerTwo}</span>
      </h1>

      {/* Thin olive line with the date under it */}
      <p className="relative mt-10 w-[min(325px,80vw)] border-t-[0.75px] border-olive pt-1.5 font-date text-date uppercase md:mt-16">
        {formatDate('hero.dateLine', wedding.date)}
      </p>

      <CurvedText width={460} curve={-55} fontSize={58} className="relative -mt-[30px] w-full max-w-[520px] rotate-6 md:rotate-12">
        {t('hero.tagline')}
      </CurvedText>
    </header>
  )
}
