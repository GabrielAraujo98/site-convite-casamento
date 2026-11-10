import { useState } from 'react'
import { Section } from '../components/Section'
import { wedding } from '../data/wedding'

export function Gifts() {
  const { message, pixKey, listUrl } = wedding.gifts
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
    <Section id="gifts" title="Gifts">
      <p className="center prose">{message}</p>
      <div className="gifts">
        <div className="card">
          <h3>PIX</h3>
          <p className="mono">{pixKey}</p>
          <button className="button button--ghost" onClick={copyPix}>
            {copied ? 'Copied!' : 'Copy key'}
          </button>
        </div>
        {listUrl && (
          <div className="card">
            <h3>Gift registry</h3>
            <a href={listUrl} target="_blank" rel="noreferrer" className="button">
              View registry
            </a>
          </div>
        )}
      </div>
    </Section>
  )
}
