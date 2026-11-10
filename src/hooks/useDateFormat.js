import { useTranslation } from 'react-i18next'
import { wedding } from '../data/wedding'

/**
 * Formats a date with a translation key, always in the venue's time zone.
 * Example: formatDate('hero.dateLine', wedding.date) -> "03 de julho 2027 | 10h"
 */
export function useDateFormat() {
  const { t } = useTranslation()

  function formatDate(translationKey, isoDate) {
    return t(translationKey, {
      date: new Date(isoDate),
      formatParams: { date: { timeZone: wedding.timeZone } },
    })
  }

  return { formatDate }
}
