import React from 'react'
import SEO from '../seo/SEO'
import SectionHeader from '../components/common/SectionHeader'
import { COMPANY_CITY, COMPANY_NAME } from '../utils/constants'

const About = () => {
  return (
    <>
      <SEO
        title="About NVR Constructions"
        path="/about"
        description={`${COMPANY_NAME} is a construction company in ${COMPANY_CITY} focused on quality, transparency, and timely delivery.`}
      />

      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-14 space-y-10">
          <SectionHeader
            eyebrow="About"
            title="Engineering-led construction with a partnership mindset"
            subtitle={`${COMPANY_NAME} was founded to bridge the gap between design intent and on-ground execution.`}
          />

          <div className="grid gap-8 md:grid-cols-2 text-sm text-slate-300">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-50">Mission</h3>
              <p>
                To deliver thoughtfully engineered, future-ready spaces that
                balance aesthetics, performance, and long-term value while
                maintaining complete transparency with every stakeholder.
              </p>
              <h3 className="mt-5 text-sm font-semibold text-slate-50">
                Vision
              </h3>
              <p>
                To be the most trusted construction partner in {COMPANY_CITY},
                known for predictable outcomes, engineering excellence, and
                long-term relationships.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Experience
              </h3>
              <p>
                Our leadership team brings 15+ years of experience across
                residential towers, villas, corporate offices, retail formats,
                and specialized interior projects.
              </p>
              <h3 className="mt-5 text-sm font-semibold text-slate-50">
                Founder&apos;s Message
              </h3>
              <p>
                “Every project at NVR is treated as if we are building it for
                ourselves. We prioritize structural safety, functionality, and
                lifecycle cost over short-term shortcuts. Our promise is simple:
                informed choices, transparent communication, and on-time
                delivery.”
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 text-sm">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-50">
                Core Values
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Engineering first, aesthetics always.</li>
                <li>• Radical transparency in scope, cost, and timelines.</li>
                <li>• Respect for time – both on site and for clients.</li>
                <li>• Safety and compliance as non-negotiable pillars.</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-50">
                Certifications &amp; Affiliations
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li>• GST and statutory registrations in place.</li>
                <li>• Structural design partners with relevant licenses.</li>
                <li>• Preferred vendor status with leading material brands.</li>
              </ul>
              <p className="text-xs text-slate-500">
                (Add your actual registrations, ISO certifications, and
                licenses here for increased trust and compliance clarity.)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

