import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Section } from '../components/Section'
import { wedding } from '../data/wedding'

export function Gifts() {
  const { t } = useTranslation()
  const { pixKey, listUrl } = wedding.gifts
  const [copied, setCopied] = useState(false)

  async function copyPix() {
    try {
      await navigator.clipboard.writeText(pixKey)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Could not copy PIX key', error)
    }
  }

  return (
    <Section id="gifts" title={t('gifts.title')}>
      <p className="center prose">{t('gifts.message')}</p>
      <div className="gifts">
        <div className="card">
          <h3>{t('gifts.pixTitle')}</h3>
          <p className="mono">{pixKey}</p>
          <button className="button button--ghost" onClick={copyPix}>
            {copied ? t('gifts.copied') : t('gifts.copyKey')}
          </button>
        </div>
        {listUrl && (
          <div className="card">
            <h3>{t('gifts.registryTitle')}</h3>
            <a href={listUrl} target="_blank" rel="noreferrer" className="button">
              {t('gifts.viewRegistry')}
            </a>
          </div>
        )}
      </div>
    </Section>
  )
}
