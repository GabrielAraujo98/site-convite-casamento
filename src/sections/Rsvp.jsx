import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { Ornament } from '../components/Ornament'
import { DisplayHeading } from '../components/DisplayHeading'
import { Button } from '../components/Button'
import { wedding } from '../data/wedding'

// Answer values sent to the form endpoint. Their labels are in translation.json (rsvp.answers).
const ANSWERS = ['yes', 'flu', 'no']
const EMPTY_FORM = { name: '', answer: '' }

const LABEL = 'font-utility text-label font-bold'

export function Rsvp() {
  const { t } = useTranslation()
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    try {
      if (wedding.rsvp.endpoint) {
        const response = await fetch(wedding.rsvp.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(form),
        })
        if (!response.ok) throw new Error(`RSVP request failed: ${response.status}`)
      } else {
        console.info('RSVP (no endpoint configured):', form)
      }
      setStatus('sent')
      setForm(EMPTY_FORM)
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section id="rsvp" className="relative pt-[50px] pb-[120px]">
      {/* Ivy around the orange card */}
      <Ornament name="ivy-rsvp-top" className="-top-[60px] left-[450px] hidden w-[437px] rotate-[14deg] lg:block" />
      <Ornament name="ivy-rsvp-right" className="-top-[70px] -right-[50px] w-[160px] -rotate-[67deg] lg:-right-[60px] lg:w-[300px]" />
      <Ornament name="ivy-rsvp-left" className="top-[330px] -left-[60px] hidden w-[406px] rotate-[80deg] lg:block" />

      <Container className="grid items-start gap-block lg:grid-cols-[1fr_453px] lg:gap-[90px]">
        <div className="flex flex-col items-start">
          <DisplayHeading size="large">{t('rsvp.title')}</DisplayHeading>
          <p className="mt-6 text-lead">{t('rsvp.subtitle')}</p>
          <Button size="small" href="#gifts" className="mt-6 lg:mt-[140px] lg:ml-[60px]">
            {t('rsvp.giftButton')}
          </Button>
        </div>

        {/* Orange card with the form */}
        <div className="rounded-card border-[1.5px] border-tangerine-edge bg-tangerine p-form text-paper">
          {status === 'sent' ? (
            <p className="text-lead" role="status">{t('rsvp.sent')}</p>
          ) : (
            <form className="flex flex-col gap-2.5" onSubmit={handleSubmit}>
              <label className={LABEL} htmlFor="rsvp-name">
                {t('rsvp.nameLabel')}
              </label>
              <input
                id="rsvp-name"
                required
                autoComplete="name"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className="mb-3.5 h-8 rounded-field border-[0.75px] border-paper bg-transparent px-2.5 font-utility text-body text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
              />

              <fieldset className="mb-2 flex flex-col gap-option">
                <legend className={`${LABEL} mb-2.5`}>{t('rsvp.question')}</legend>
                {ANSWERS.map((answer) => (
                  // The whole box is the option: the radio is hidden but still works with keyboard and screen readers.
                  <label
                    key={answer}
                    className="flex min-h-[79px] cursor-pointer items-center rounded-field border-2 border-transparent bg-tangerine-veil px-3.5 py-tight font-utility text-option transition hover:bg-paper/20 has-checked:border-paper has-checked:bg-paper/25 has-checked:font-bold has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-paper"
                  >
                    <input
                      type="radio"
                      name="answer"
                      value={answer}
                      required
                      checked={form.answer === answer}
                      onChange={() => setForm({ ...form, answer })}
                      className="sr-only"
                    />
                    <span>{t(`rsvp.answers.${answer}`)}</span>
                  </label>
                ))}
              </fieldset>

              <Button type="submit" variant="olive" size="full" disabled={status === 'sending'}>
                {status === 'sending' ? t('rsvp.sending') : t('rsvp.submit')}
              </Button>

              {status === 'error' && <p className="text-base" role="alert">{t('rsvp.error')}</p>}
            </form>
          )}
        </div>
      </Container>
    </section>
  )
}
