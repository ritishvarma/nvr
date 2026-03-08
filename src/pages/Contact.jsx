import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import SEO from '../seo/SEO'
import SectionHeader from '../components/common/SectionHeader'
import PrimaryButton from '../components/common/PrimaryButton'
import {
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  COMPANY_WHATSAPP,
  GOOGLE_MAPS_EMBED_SRC,
} from '../utils/constants'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const Contact = () => {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        state: 'error',
        message:
          'Email service is not configured. Please contact us via phone or WhatsApp.',
      })
      return
    }
    setStatus({ state: 'loading', message: 'Sending your message...' })

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setStatus({
          state: 'success',
          message:
            'Thanks for reaching out. Our team will get back to you shortly.',
        })
        formRef.current.reset()
      },
      () => {
        setStatus({
          state: 'error',
          message:
            'Something went wrong. Please try again or contact us directly.',
        })
      },
    )
  }

  return (
    <>
      <SEO
        title="Contact NVR Constructions"
        path="/contact"
        description="Contact NVR Constructions for residential, commercial, renovation, interior, and turnkey projects. Request a free consultation and project estimate."
      />

      <section className="bg-slate-950 border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-14 space-y-10">
          <SectionHeader
            eyebrow="Contact"
            title="Let’s talk about your project"
            subtitle="Share a few details and our team will reach out with a customized plan, cost estimate, and suggested timeline."
          />

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                id="contact-form"
                className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-5 text-sm"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block text-xs font-medium text-slate-200"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1 block text-xs font-medium text-slate-200"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-xs font-medium text-slate-200"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="Your email (optional)"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="projectType"
                      className="mb-1 block text-xs font-medium text-slate-200"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-1 focus:ring-accent"
                    >
                      <option>Residential Construction</option>
                      <option>Commercial Construction</option>
                      <option>Renovation</option>
                      <option>Interior Works</option>
                      <option>Turnkey Project</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-xs font-medium text-slate-200"
                  >
                    Project Brief
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Share plot size, location, expected timeline, and any specific requirements."
                  />
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <PrimaryButton type="submit">
                    {status.state === 'loading' ? 'Sending...' : 'Submit Enquiry'}
                  </PrimaryButton>
                  <PrimaryButton
                    href={`https://wa.me/${COMPANY_WHATSAPP.replace(/\D/g, '')}`}
                    external
                    variant="outline"
                  >
                    WhatsApp Us
                  </PrimaryButton>
                  <PrimaryButton href={`tel:${COMPANY_PHONE}`} variant="outline">
                    Call Now
                  </PrimaryButton>
                </div>
                {status.message ? (
                  <p
                    className={`text-xs mt-2 ${
                      status.state === 'error'
                        ? 'text-red-400'
                        : 'text-green-400'
                    }`}
                  >
                    {status.message}
                  </p>
                ) : null}
              </form>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-3">
                <h3 className="text-sm font-semibold text-slate-50">Office</h3>
                <p className="text-xs text-slate-400">{COMPANY_ADDRESS}</p>
                <p>
                  Phone:{' '}
                  <a
                    href={`tel:${COMPANY_PHONE}`}
                    className="text-accent hover:underline"
                  >
                    {COMPANY_PHONE}
                  </a>
                </p>
                <p>
                  Email:{' '}
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    className="text-accent hover:underline break-all"
                  >
                    {COMPANY_EMAIL}
                  </a>
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                <iframe
                  title="NVR Constructions Location"
                  src={GOOGLE_MAPS_EMBED_SRC}
                  width="100%"
                  height="260"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

