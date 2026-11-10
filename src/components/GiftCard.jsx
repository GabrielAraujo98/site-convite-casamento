import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { wedding } from '../data/wedding'
import { imageUrl } from '../utils/imageUrl'

/**
 * One gift: photo, framed title, joke note and price.
 * Clicking the price copies the PIX key so the guest can pay right away.
 */
export function GiftCard({ id, image, price }) {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)
  const title = t(`gifts.items.${id}.title`)

  async function copyPixKey() {
    try {
      await navigator.clipboard.writeText(wedding.gifts.pixKey)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch (error) {
      console.error('Could not copy the PIX key', error)
    }
  }

  return (
    <article className="flex flex-col gap-[5px]">
      <img
        className="aspect-[268/340] w-full object-cover"
        src={imageUrl(`gifts/${image}`)}
        alt={title}
        loading="lazy"
      />

      {/* Brown frame with title, note and price */}
      <div className="flex min-h-[122px] flex-1 flex-col gap-0.5 border-[1.5px] border-bark px-card pt-3.5 pb-3">
        <h3 className="text-gift-title font-normal">{title}</h3>
        <p className="text-gift-note">{t(`gifts.items.${id}.note`)}</p>

        <button
          type="button"
          onClick={copyPixKey}
          aria-label={t('gifts.copyPixFor', { gift: title })}
          className="mt-auto min-h-[33px] w-[76%] cursor-pointer self-center border-[0.75px] border-olive bg-linen-deep px-3 font-utility text-[13px] font-bold text-olive tabular-nums hover:bg-linen focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive"
        >
          {copied ? t('gifts.pixCopied') : t('gifts.price', { price })}
        </button>
      </div>
    </article>
  )
}
