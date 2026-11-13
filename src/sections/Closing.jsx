import { useTranslation } from 'react-i18next'
import { Ornament } from '../components/Ornament'
import { BrushHeading } from '../components/BrushHeading'
import { Button } from '../components/Button'

// End of the page, with a button back to the top.
export function Closing() {
  const { t } = useTranslation()

  return (
    <footer className="relative flex flex-col items-center gap-[18px] overflow-hidden px-5 pt-[110px] pb-[230px] text-center md:px-page md:pb-[160px]">
      {/* Larger and further in than the PDF, so they fill the corners */}
      <Ornament name="orange-branch-corner" className="-bottom-[150px] -left-14 w-[190px] -rotate-[34deg] md:-bottom-[260px] md:-left-[80px] md:w-[340px]" />
      <Ornament name="orange-branch-corner" className="-right-14 -bottom-[140px] w-[190px] -rotate-[22deg] md:-right-[100px] md:-bottom-[250px] md:w-[340px]" />

      <BrushHeading className="relative z-10">{t('closing.title')}</BrushHeading>
      <Button variant="olive" size="small" href="#top" className="relative z-10">
        {t('closing.backToTop')}
      </Button>
    </footer>
  )
}
