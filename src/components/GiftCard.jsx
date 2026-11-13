import { useTranslation } from 'react-i18next'
import { imageUrl } from '../utils/imageUrl'
import { Button } from './Button'

// Each card leans a little to a different side, like photos on a table.
const TILTS = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2']

/**
 * One gift as a polaroid: photo, caption and price. The whole card is a button that opens the PIX modal.
 */
export function GiftCard({ id, image, price, index, onSelect }) {
  const { t } = useTranslation()
  const title = t(`gifts.items.${id}.title`)

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={t('gifts.openPixFor', { gift: title })}
      className={`flex cursor-pointer flex-col bg-paper p-3 pb-5 text-left shadow-polaroid
        transition hover:rotate-0 hover:scale-[1.02]
        focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink
        ${TILTS[index % TILTS.length]}`}
    >
      <img
        className="aspect-square w-full object-cover"
        src={imageUrl(`gifts/${image}`)}
        alt=""
        loading="lazy"
      />
      {/* Spans only: a button may hold just inline content */}
      <span className="flex flex-1 flex-col gap-1 px-1 pt-4">
        <span className="block text-gift-title">{title}</span>
        <span className="block text-gift-note">{t(`gifts.items.${id}.note`)}</span>
        {/* Looks like a button; the click is handled by the whole card */}
        <Button as="span" variant="outline" size="compact" className="mt-4 self-center">
          {t('gifts.price', { price })} · {t('gifts.giveButton')}
        </Button>
      </span>
    </button>
  )
}
