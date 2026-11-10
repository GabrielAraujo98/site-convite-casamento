import { useState } from 'react'
import { Section } from '../components/Section'
import { wedding } from '../data/wedding'

const initialForm = { name: '', attending: 'yes', guests: 1, message: '' }

export function Rsvp() {
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
    <Section id="rsvp" title="RSVP" className="section--alt">
      <p className="center muted">Please reply by {wedding.rsvp.deadlineLabel}.</p>

      {status === 'sent' ? (
        <p className="center success">Thank you! Your reply has been received.</p>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input required value={form.name} onChange={updateField('name')} />
          </label>

          <label>
            Will you attend?
            <select value={form.attending} onChange={updateField('attending')}>
              <option value="yes">Yes, I will be there</option>
              <option value="no">Sorry, I cannot make it</option>
            </select>
          </label>

          {form.attending === 'yes' && (
            <label>
              Number of guests (including you)
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
            Message for the couple (optional)
            <textarea rows="3" value={form.message} onChange={updateField('message')} />
          </label>

          <button className="button" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send reply'}
          </button>

          {status === 'error' && (
            <p className="error">Could not send your reply. Please try again.</p>
          )}
        </form>
      )}
    </Section>
  )
}
