import { useTranslation } from 'react-i18next'
import { wedding } from '../data/wedding'
import { useDateFormat } from '../hooks/useDateFormat'

export function Footer() {
  const { t } = useTranslation()
  const { formatLongDate } = useDateFormat()
  const { partnerOne, partnerTwo } = wedding.couple

  return (
    <footer className="footer">
      <p>{t('footer.credits', { partnerOne, partnerTwo, date: formatLongDate(wedding.date) })}</p>
      <p className="footer__hashtag">{wedding.hashtag}</p>
    </footer>
  )
}
