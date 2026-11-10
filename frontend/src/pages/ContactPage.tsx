import { useState } from 'react'
import { useLeadQueue } from '../hooks/useLeadQueue'

type ContactFormState = {
  name: string
  phone: string
  requirement: string
  preferredLocation: string
  budget: string
  timeline: string
  message: string
}

export function ContactPage() {
  const { addLead, queuedCount } = useLeadQueue()
  const [submitState, setSubmitState] = useState<'idle' | 'success'>('idle')
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({})
  const officeAddress = 'Sector 57, Gurgaon, Haryana 122011'
  const officeLat = 28.4219
  const officeLng = 77.0649
  const lngOffset = 0.03
  const latOffset = 0.015
  const mapEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${officeLng - lngOffset}%2C${officeLat - latOffset}%2C${officeLng + lngOffset}%2C${officeLat + latOffset}&layer=mapnik&marker=${officeLat}%2C${officeLng}`
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${officeLat},${officeLng}`
  const openStreetMapUrl = `https://www.openstreetmap.org/?mlat=${officeLat}&mlon=${officeLng}#map=15/${officeLat}/${officeLng}`
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    phone: '',
    requirement: 'Buy Residential',
    preferredLocation: '',
    budget: '',
    timeline: '',
    message: '',
  })

  const validateField = (field: keyof ContactFormState, value: string) => {
    if (field === 'name') {
      return value.trim().length >= 2 ? '' : 'Please enter at least 2 characters for your name.'
    }

    if (field === 'phone') {
      return value.replace(/\D/g, '').length >= 10
        ? ''
        : 'Please enter at least 10 digits for phone number.'
    }

    if (field === 'message') {
      return value.trim().length >= 12
        ? ''
        : 'Please add a short requirement message (minimum 12 characters).'
    }

    return ''
  }

  const updateField = (field: keyof ContactFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))

    if (fieldErrors[field]) {
      setFieldErrors((current) => ({ ...current, [field]: validateField(field, value) }))
    }
  }

  const validateFieldOnBlur = (field: keyof ContactFormState) => {
    setFieldErrors((current) => ({
      ...current,
      [field]: validateField(field, form[field]),
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitState('idle')
    setError('')

    const name = form.name.trim()
    const phoneDigits = form.phone.replace(/\D/g, '')
    const message = form.message.trim()

    const nextErrors: Partial<Record<keyof ContactFormState, string>> = {
      name: validateField('name', form.name),
      phone: validateField('phone', form.phone),
      message: validateField('message', form.message),
    }

    setFieldErrors(nextErrors)

    if (nextErrors.name) {
      setError('Please enter a valid full name.')
      return
    }

    if (nextErrors.phone) {
      setError('Please enter a valid phone number with at least 10 digits.')
      return
    }

    if (nextErrors.message) {
      setError('Please add a short requirement message so our team can assist better.')
      return
    }

    addLead({
      name,
      phone: phoneDigits,
      requirement: form.requirement,
      preferredLocation: form.preferredLocation.trim() || 'Not specified',
      budget: form.budget.trim() || 'Not specified',
      timeline: form.timeline.trim() || 'Not specified',
      message,
    })

    setForm({
      name: '',
      phone: '',
      requirement: 'Buy Residential',
      preferredLocation: '',
      budget: '',
      timeline: '',
      message: '',
    })
    setFieldErrors({})
    setSubmitState('success')
  }

  return (
    <section className="section contact-page">
      <div className="container contact-page-shell">
        <div className="contact-top-grid">
          <div className="contact-info-column">
            <article className="contact-hero-card">
              <p className="eyebrow">Consultation Desk</p>
              <h1>Contact Maple Enterprises</h1>
              <p className="contact-intro">
                Connect with our advisory team for verified options, legal clarity, and guided support from first shortlist to final closure.
              </p>

              <div className="contact-info-grid">
                <div>
                  <p>Office</p>
                  <strong>{officeAddress}</strong>
                </div>
                <div>
                  <p>Phone</p>
                  <strong>+91 99999 99999</strong>
                </div>
                <div>
                  <p>Email</p>
                  <strong>hello@mapleenterprises.in</strong>
                </div>
                <div>
                  <p>Hours</p>
                  <strong>Mon - Sat | 9:30 AM - 7:30 PM</strong>
                </div>
              </div>

              <div className="trust-points contact-trust">
                <span>30-Minute Response Target</span>
                <span>Verified Listing Guidance</span>
                <span>Legal Checklist Support</span>
              </div>

              <div className="contact-queue-meta-wrap">
                <p className="contact-queue-meta">Queued web enquiries: {queuedCount}</p>
              </div>
            </article>

            <section className="contact-map-section" aria-label="Locate us map">
              <div className="contact-map-head">
                <div>
                  <p className="section-kicker">Locate Us</p>
                  <h2>Visit Our Office</h2>
                  <p>{officeAddress}</p>
                </div>
                <div className="contact-map-links">
                  <a className="button secondary" href={googleMapsUrl} target="_blank" rel="noreferrer">
                    Open on Google Maps
                  </a>
                  <a className="button secondary" href={openStreetMapUrl} target="_blank" rel="noreferrer">
                    Open on OpenStreetMap
                  </a>
                </div>
              </div>

              <iframe
                className="contact-map-frame"
                title="Maple Enterprises office location"
                src={mapEmbedUrl}
                loading="lazy"
              />
            </section>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h3>Start Your Requirement</h3>

            {error ? <p className="contact-feedback error">{error}</p> : null}
            {submitState === 'success' ? (
              <p className="contact-feedback success">Enquiry submitted. Our team will contact you soon.</p>
            ) : null}

            <label>
              Full Name
              <input
                type="text"
                placeholder="Enter your name"
                value={form.name}
                aria-invalid={Boolean(fieldErrors.name)}
                onChange={(event) => updateField('name', event.target.value)}
                onBlur={() => validateFieldOnBlur('name')}
                className={fieldErrors.name ? 'field-input-error' : ''}
              />
              {fieldErrors.name ? <span className="contact-field-error">{fieldErrors.name}</span> : null}
            </label>
            <label>
              Phone Number
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={form.phone}
                aria-invalid={Boolean(fieldErrors.phone)}
                onChange={(event) => updateField('phone', event.target.value)}
                onBlur={() => validateFieldOnBlur('phone')}
                className={fieldErrors.phone ? 'field-input-error' : ''}
              />
              {fieldErrors.phone ? <span className="contact-field-error">{fieldErrors.phone}</span> : null}
            </label>
            <label>
              Requirement
              <select value={form.requirement} onChange={(event) => updateField('requirement', event.target.value)}>
                <option>Buy Residential</option>
                <option>Commercial Investment</option>
                <option>Industrial</option>
                <option>Plot/Land</option>
              </select>
            </label>
            <label>
              Preferred Location
              <input
                type="text"
                placeholder="Ex: Sector 150 Noida"
                value={form.preferredLocation}
                onChange={(event) => updateField('preferredLocation', event.target.value)}
              />
            </label>
            <label>
              Budget
              <input
                type="text"
                placeholder="Ex: 1Cr - 2Cr"
                value={form.budget}
                onChange={(event) => updateField('budget', event.target.value)}
              />
            </label>
            <label>
              Timeline
              <input
                type="text"
                placeholder="Ex: Within 3 months"
                value={form.timeline}
                onChange={(event) => updateField('timeline', event.target.value)}
              />
            </label>
            <label>
              Message
              <textarea
                rows={4}
                placeholder="Tell us your preferred location, budget, and timeline"
                value={form.message}
                aria-invalid={Boolean(fieldErrors.message)}
                onChange={(event) => updateField('message', event.target.value)}
                onBlur={() => validateFieldOnBlur('message')}
                className={fieldErrors.message ? 'field-input-error' : ''}
              />
              {fieldErrors.message ? <span className="contact-field-error">{fieldErrors.message}</span> : null}
            </label>
            <button type="submit" className="button accent">Submit Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  )
}
