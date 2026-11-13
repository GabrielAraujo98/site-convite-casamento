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
      className="relative flex flex-col items-center px-5 pt-[200px] pb-12 text-center md:min-h-[600px] md:pt-[142px] md:pb-16"
    >
      {/* Ornaments: angles from the PDF. Small on phones, medium on tablets (so they don't cover
          the names), a bit bigger from 1024px and large from 1280px, where the margins have room.
          The blossoms only show with the large branch they belong to.
          The left branch and its two blossoms share one speed, so they move as one piece. */}
      <Ornament name="orange-branch-left" speed={0.3} className="top-0 -left-2.5 w-[140px] rotate-6 md:w-[210px] lg:-top-[30px] lg:-left-[30px] lg:w-[290px] xl:-top-[70px] xl:-left-[39px] xl:w-[430px]" />
      <Ornament name="orange-blossom" speed={0.3} className="top-[152px] left-[174px] hidden w-[152px] -rotate-[11.6deg] xl:block" />
      <Ornament name="orange-blossom" speed={0.3} className="top-[344px] left-[67px] hidden w-[152px] rotate-[131deg] xl:block" />
      <Ornament name="orange-branch-right" speed={0.25} className="top-0 -right-2.5 w-[130px] -rotate-[6.6deg] md:w-[195px] lg:-top-[20px] lg:-right-[25px] lg:w-[270px] xl:-top-[50px] xl:-right-[35px] xl:w-[400px]" />

      {/* "LICI e BIEL" */}
      <h1 className="relative flex flex-col items-center font-normal">
        <span className="pl-[0.14em] font-display text-[48px] leading-[1.1] tracking-[0.14em] uppercase md:text-names">{partnerOne}</span>
        <span className="my-1 font-script text-script md:text-[40px]">{t('hero.joiner')}</span>
        <span className="pl-[0.14em] font-display text-[48px] leading-[1.1] tracking-[0.14em] uppercase md:text-names">{partnerTwo}</span>
      </h1>

      {/* Thin olive line with the date under it */}
      <p className="relative mt-10 w-[min(325px,80vw)] border-t-[0.75px] border-olive pt-1.5 font-date text-date uppercase md:mt-16">
        {formatDate('hero.dateLine', wedding.date)}
      </p>

      {/* Centered and slightly tilted, so it feels hand placed */}
      <CurvedText
        width={460}
        curve={-55}
        fontSize={40}
        className="relative mt-6 w-full max-w-[520px] rotate-[7deg] md:mt-12 md:rotate-[9deg]"
      >
        {t('hero.tagline')}
      </CurvedText>
    </header>
  )
}
