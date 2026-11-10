import { useTranslation } from 'react-i18next'
import { wedding } from '../data/wedding'

// Formats ISO dates with the current language, always in the venue's time zone.
export function useDateFormat() {
  const { t } = useTranslation()

  function format(key, isoDate) {
    return t(key, {
      date: new Date(isoDate),
      formatParams: { date: { timeZone: wedding.timeZone } },
    })
  }

  return {
    formatLongDate: (isoDate) => format('dates.long', isoDate),
    formatTime: (isoDate) => format('dates.time', isoDate),
  }
}
