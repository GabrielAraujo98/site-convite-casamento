import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../components/Container'
import { Ornament } from '../components/Ornament'
import { DisplayHeading } from '../components/DisplayHeading'
import { Button } from '../components/Button'
import { BranchCurtain } from '../components/BranchCurtain'
import { FallingBlossoms } from '../components/FallingBlossoms'
import { createBlossomShower } from '../utils/createBlossomShower'
import { wedding } from '../data/wedding'
import { prefersReducedMotion } from '../hooks/useScrollFrame'

// Answer options. Their labels are in translation.json (rsvp.answers) and the value
// written in the spreadsheet is in wedding.rsvp.sheetAnswers.
const ANSWERS = ['yes', 'flu']
const EMPTY_FORM = { name: '', answer: '', shoeSize: '' }

// How long the blossoms stay on screen (the slowest one takes about 6s to fall).
const BLOSSOM_SHOWER_MS = 7000

const LABEL = 'font-utility text-label font-bold'

// Keeps only the digits 0-9, so letters, signs and decimal points never get in.
const onlyDigits = (value) => value.replace(/\D/g, '')
const TEXT_FIELD =
  'h-8 rounded-field border-[0.75px] border-paper bg-transparent px-2.5 font-utility text-body text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper'

export function Rsvp() {
  const { t } = useTranslation()
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [blossoms, setBlossoms] = useState([])

  function celebrate() {
    if (prefersReducedMotion()) return
    setBlossoms(createBlossomShower())
    setTimeout(() => setBlossoms([]), BLOSSOM_SHOWER_MS)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    const reply = {
      name: form.name,
      answer: wedding.rsvp.sheetAnswers[form.answer],
      shoeSize: form.shoeSize.trim(),
    }

    try {
      if (wedding.rsvp.endpoint) {
        const response = await fetch(wedding.rsvp.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(reply),
        })
        if (!response.ok) throw new Error(`RSVP request failed: ${response.status}`)
      } else {
        console.info('RSVP (no endpoint configured):', reply)
      }
      setStatus('sent')
      setForm(EMPTY_FORM)
      if (form.answer === 'yes') celebrate()
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section id="rsvp" className="relative pt-[90px] pb-[120px]">
      {/* Ivy around the orange card */}
      <Ornament name="ivy-rsvp-right" speed={0.22} className="-top-[70px] -right-[60px] hidden w-[300px] -rotate-[67deg] lg:block" />
      <Ornament name="ivy-rsvp-left" speed={-0.08} className="top-[150px] -left-[120px] hidden w-[406px] rotate-[80deg] lg:block" />

      <Container className="grid items-start gap-block lg:grid-cols-[1fr_453px] lg:gap-[90px]">
        <div className="flex flex-col items-start">
          <DisplayHeading size="semiLarge">{t('rsvp.title')}</DisplayHeading>
          <p className="mt-5 font-brush text-[26px] leading-tight text-merlot md:text-[30px]">{t('rsvp.subtitle')}</p>
          <Button variant="olive" size="small" href="#gifts" className="mt-6 lg:mt-10 lg:ml-[60px]">
            {t('rsvp.giftButton')}
          </Button>
        </div>

        {/* Orange card with the form */}
        <div className="rounded-card border-[1.5px] border-tangerine-edge bg-tangerine p-form text-paper">
          {status === 'sent' ? (
            <p className="text-lead" role="status">{t('rsvp.sent')}</p>
          ) : (
            <form className="flex flex-col gap-2.5" onSubmit={handleSubmit}>
              {/* Each label sits on the left, its input on the right */}
              <div className="mb-3.5 flex items-center gap-3">
                <label className={`${LABEL} shrink-0`} htmlFor="rsvp-name">
                  {t('rsvp.nameLabel')}
                </label>
                <input
                  id="rsvp-name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className={`${TEXT_FIELD} min-w-0 flex-1`}
                />
              </div>

              <div className="mb-3.5 flex items-center gap-3">
                <label className={`${LABEL} flex-1`} htmlFor="rsvp-shoe-size">
                  {t('rsvp.shoeSizeLabel')}
                </label>
                {/* Whole positive numbers only: anything that isn't a digit is dropped as it is typed */}
                <input
                  id="rsvp-shoe-size"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={2}
                  value={form.shoeSize}
                  onChange={(event) => setForm({ ...form, shoeSize: onlyDigits(event.target.value) })}
                  className={`${TEXT_FIELD} w-16 shrink-0 text-center`}
                />
              </div>

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

      {/* Branches cover the section and open sideways as it reaches the middle of the screen */}
      <BranchCurtain />
      <FallingBlossoms pieces={blossoms} />
    </section>
  )
}
