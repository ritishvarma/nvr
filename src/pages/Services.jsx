import React from 'react'
import SEO from '../seo/SEO'
import SectionHeader from '../components/common/SectionHeader'
import PrimaryButton from '../components/common/PrimaryButton'
import { services } from '../data/services'
import { COMPANY_CITY } from '../utils/constants'

const Services = () => {
  return (
    <>
      <SEO
        title={`Construction Services in ${COMPANY_CITY}`}
        path="/services"
        description={`Explore residential construction, commercial construction, renovation, interior works, and turnkey project services by NVR Constructions in ${COMPANY_CITY}.`}
      />

      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-14 space-y-10">
          <SectionHeader
            eyebrow="Services"
            title="Services designed around your goals"
            subtitle="Whether you’re building from scratch or upgrading existing spaces, we tailor our approach to your priorities."
          />

          <div className="space-y-6">
            {services.map((s) => (
              <div
                key={s.id}
                className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-5 flex flex-col md:flex-row md:items-start md:gap-6"
              >
                <div className="flex-shrink-0 mb-3 md:mb-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800">
                    <span className="text-xl">{s.icon}</span>
                  </div>
                </div>
                <div className="flex-1 space-y-3 text-sm text-slate-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <h2 className="text-base font-semibold text-slate-50">
                      {s.name}
                    </h2>
                    <span className="rounded-full border border-slate-700 px-2 py-0.5 text-[11px] text-slate-400">
                      Typical engagement: 3–18 months
                    </span>
                  </div>
                  <p>{s.shortDescription}</p>
                  <ul className="grid gap-2 md:grid-cols-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-accent mt-1">▾</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <PrimaryButton to="/contact" className="mt-3 text-xs">
                    {s.ctaLabel}
                  </PrimaryButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services

