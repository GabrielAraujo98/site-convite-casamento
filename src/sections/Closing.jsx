import { useTranslation } from 'react-i18next'
import { Ornament } from '../components/Ornament'
import { BrushHeading } from '../components/BrushHeading'
import { Button } from '../components/Button'

// End of the page, with a button back to the top.
export function Closing() {
  const { t } = useTranslation()

  return (
    <footer className="relative flex flex-col items-center gap-[18px] overflow-hidden px-5 pt-[110px] pb-[70px] text-center md:px-page">
      <Ornament name="orange-branch-corner" className="-bottom-[110px] -left-20 w-[150px] -rotate-[34deg] md:-bottom-[200px] md:-left-[140px] md:w-[256px]" />
      <Ornament name="orange-branch-corner" className="-right-20 -bottom-[100px] w-[150px] -rotate-[58deg] md:-right-[170px] md:-bottom-[190px] md:w-[256px]" />

      <BrushHeading className="relative z-10">{t('closing.title')}</BrushHeading>
      <Button variant="olive" size="small" href="#top" className="relative z-10">
        {t('closing.backToTop')}
      </Button>
    </footer>
  )
}
