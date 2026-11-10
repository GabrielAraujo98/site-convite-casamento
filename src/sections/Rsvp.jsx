import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Section } from '../components/Section'
import { wedding } from '../data/wedding'
import { useDateFormat } from '../hooks/useDateFormat'

const initialForm = { name: '', attending: 'yes', guests: 1, message: '' }

export function Rsvp() {
  const { t } = useTranslation()
  const { formatLongDate } = useDateFormat()
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function updateField(field) {
    return (event) => setForm((previousForm) => ({ ...previousForm, [field]: event.target.value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')
    try {
      if (wedding.rsvp.endpoint) {
        const response = await fetch(wedding.rsvp.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (!response.ok) throw new Error(`RSVP request failed: ${response.status}`)
      } else {
        // No endpoint configured yet: log locally so the flow can be tested.
        console.info('RSVP (no endpoint configured):', form)
      }
      setStatus('sent')
      setForm(initialForm)
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <Section id="rsvp" title={t('rsvp.title')} className="section--alt">
      <p className="center">{t('rsvp.subtitle')}</p>
      <p className="center muted">{t('rsvp.deadline', { date: formatLongDate(wedding.rsvp.deadline) })}</p>

      {status === 'sent' ? (
        <p className="center success">{t('rsvp.sent')}</p>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <label>
            {t('rsvp.nameLabel')}
            <input required value={form.name} onChange={updateField('name')} />
          </label>

          <label>
            {t('rsvp.attendingLabel')}
            <select value={form.attending} onChange={updateField('attending')}>
              <option value="yes">{t('rsvp.attendingYes')}</option>
              <option value="no">{t('rsvp.attendingNo')}</option>
            </select>
          </label>

          {form.attending === 'yes' && (
            <label>
              {t('rsvp.guestsLabel')}
              <input
                type="number"
                min="1"
                max="10"
                value={form.guests}
                onChange={updateField('guests')}
              />
            </label>
          )}

          <label>
            {t('rsvp.messageLabel')}
            <textarea rows="3" value={form.message} onChange={updateField('message')} />
          </label>

          <button className="button" disabled={status === 'sending'}>
            {status === 'sending' ? t('rsvp.sending') : t('rsvp.submit')}
          </button>

          {status === 'error' && (
            <p className="error">{t('rsvp.error')}</p>
          )}
        </form>
      )}
    </Section>
  )
}
