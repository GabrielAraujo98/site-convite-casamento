import { useTranslation } from 'react-i18next'
import { imageUrl } from '../utils/imageUrl'
import { Button } from './Button'

// Each card leans a little to a different side, like photos on a table.
const TILTS = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2']

/**
 * One gift as a polaroid: photo, caption and a button that opens the PIX modal.
 */
export function GiftCard({ id, image, price, index, onSelect }) {
  const { t } = useTranslation()
  const title = t(`gifts.items.${id}.title`)

  return (
    <article
      className={`flex flex-col bg-paper p-3 pb-5 shadow-polaroid
        transition hover:rotate-0 hover:scale-[1.02]
        ${TILTS[index % TILTS.length]}`}
    >
      <img
        className="aspect-square w-full object-cover"
        src={imageUrl(`gifts/${image}`)}
        alt={title}
        loading="lazy"
      />
      <div className="flex flex-1 flex-col gap-1 px-1 pt-4">
        <h3 className="text-gift-title font-normal">{title}</h3>
        <p className="text-gift-note">{t(`gifts.items.${id}.note`)}</p>
        <Button
          variant="outline"
          size="compact"
          onClick={onSelect}
          aria-label={t('gifts.openPixFor', { gift: title })}
          className="mt-4 self-center"
        >
          {t('gifts.price', { price })} · {t('gifts.giveButton')}
        </Button>
      </div>
    </article>
  )
}
