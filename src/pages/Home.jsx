import React from 'react'
import { motion } from 'framer-motion'
import PrimaryButton from '../components/common/PrimaryButton'
import SectionHeader from '../components/common/SectionHeader'
import StatCounter from '../components/common/StatCounter'
import FAQItem from '../components/common/FAQItem'
import { stats } from '../data/stats'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { testimonials } from '../data/testimonials'
import { faqs } from '../data/faqs'
import SEO from '../seo/SEO'
import { COMPANY_CITY, COMPANY_PHONE } from '../utils/constants'

// Replace with your own hero asset when available
const heroImg =
  'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1200'

const Home = () => {
  return (
    <>
      <SEO
        title="Construction Company in Hyderabad"
        path="/"
        description={`NVR Constructions is a trusted construction company in ${COMPANY_CITY}, delivering residential, commercial, renovation, interior, and turnkey projects.`}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900">
        <div className="absolute inset-0 opacity-30">
          <img
            src={heroImg}
            alt="Construction site with cranes and workers"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24">
          <div className="max-w-xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              NVR CONSTRUCTIONS
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              Building Dreams with{' '}
              <span className="text-accent">Quality &amp; Trust</span>
            </h1>
            <p className="text-sm md:text-base text-slate-200">
              From premium homes to high-performance commercial spaces, NVR
              Constructions delivers end-to-end construction services backed by
              engineering rigor, transparent communication, and on-time
              delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <PrimaryButton to="/contact">Get Free Quote</PrimaryButton>
              <PrimaryButton href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} variant="outline">
                Call Now
              </PrimaryButton>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-xs text-slate-300 md:text-sm">
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>Turnkey design &amp; build</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>Strict quality checkpoints</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>Transparent BOQs &amp; billing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">✓</span>
                <span>Dedicated project manager</span>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-6 md:mt-0 md:ml-auto w-full max-w-sm"
          >
            <div className="rounded-3xl bg-slate-900/80 p-5 shadow-soft border border-slate-800 backdrop-blur">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.2em] mb-2">
                PROJECT SNAPSHOT
              </p>
              <p className="text-sm text-slate-100 mb-3">
                Avg. turnkey residential project
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
                <div>
                  <p className="text-slate-400">Timeline</p>
                  <p className="font-semibold text-slate-50">12–16 months</p>
                </div>
                <div>
                  <p className="text-slate-400">Cost Range</p>
                  <p className="font-semibold text-slate-50">
                    ₹1,900–₹3,000 / sq.ft
                  </p>
                </div>
                <div>
                  <p className="text-slate-400">Project Types</p>
                  <p className="font-semibold text-slate-50">
                    Villas, G+4, Interiors
                  </p>
                </div>
                <div>
                  <p className="text-slate-400">Location</p>
                  <p className="font-semibold text-slate-50">
                    {COMPANY_CITY} &amp; nearby
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why choose us + stats */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 space-y-10 md:space-y-0 md:flex md:items-start md:gap-10">
          <div className="flex-1 space-y-5">
            <SectionHeader
              eyebrow="Why NVR"
              title="Why homeowners & businesses trust us"
              subtitle="We combine engineering discipline with a partnership mindset to deliver high-quality, predictable outcomes."
            />
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="text-accent mt-1">▾</span>
                <span>
                  Dedicated project management with weekly progress reporting
                  and strict milestone tracking.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent mt-1">▾</span>
                <span>
                  Curated partner network for structural design, approvals, and
                  services – single accountable team.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent mt-1">▾</span>
                <span>
                  Material quality transparency with documented brand and
                  specification commitments.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-6 mt-6 md:mt-0">
            {stats.map((s) => (
              <StatCounter
                key={s.label}
                value={s.value}
                label={s.label}
                suffix={s.suffix}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-14 space-y-8">
          <SectionHeader
            eyebrow="Services"
            title="End-to-end construction solutions"
            subtitle="From early concept to handover, we manage every stage with seasoned specialists."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-sm hover:shadow-soft transition"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800">
                    <span className="text-lg">{service.icon}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {service.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-400">
                  {service.shortDescription}
                </p>
                <ul className="space-y-1 text-xs text-slate-300">
                  {service.benefits.slice(0, 2).map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <PrimaryButton
                  to="/services"
                  variant="outline"
                  className="mt-auto text-xs"
                >
                  View Details
                </PrimaryButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 space-y-8">
          <SectionHeader
            eyebrow="Projects"
            title="A glimpse of our work"
            subtitle="Every site is engineered for safety, longevity, and visual impact."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.id}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
              >
                <div className="grid grid-cols-2">
                  <figure className="relative">
                    <img
                      src={p.beforeImage}
                      alt={`${p.name} before construction`}
                      className="h-40 w-full object-cover"
                      loading="lazy"
                    />
                    <figcaption className="absolute bottom-2 left-2 rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-100">
                      Before
                    </figcaption>
                  </figure>
                  <figure className="relative">
                    <img
                      src={p.afterImage}
                      alt={`${p.name} after completion`}
                      className="h-40 w-full object-cover"
                      loading="lazy"
                    />
                    <figcaption className="absolute bottom-2 left-2 rounded-full bg-accent px-2 py-0.5 text-[10px] text-slate-900">
                      After
                    </figcaption>
                  </figure>
                </div>
                <div className="px-4 py-4 space-y-1 text-xs text-slate-300">
                  <p className="text-sm font-semibold text-slate-50">
                    {p.name}
                  </p>
                  <p>{p.location}</p>
                  <p>
                    <span className="text-slate-400">Timeline: </span>
                    {p.timeline}
                  </p>
                  <p>
                    <span className="text-slate-400">Cost range: </span>
                    {p.costRange}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials + FAQ */}
      <section className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-14 grid gap-10 md:grid-cols-2">
          <div className="space-y-5">
            <SectionHeader
              eyebrow="Testimonials"
              title="What our clients say"
              subtitle="We measure success by the trust and referrals of our clients."
            />
            <div className="space-y-4">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300"
                >
                  <p className="mb-3 text-slate-100">“{t.quote}”</p>
                  <p className="text-xs text-slate-400">
                    {t.name} · {t.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <SectionHeader
              eyebrow="FAQ"
              title="Answers to common questions"
              subtitle="Still need clarity? NVR Assistant and our team are just a message away."
              align="left"
            />
            <div className="space-y-3">
              {faqs.map((f) => (
                <FAQItem key={f.question} {...f} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA banner */}
      <section className="bg-gradient-to-r from-primary to-slate-900 border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-10 md:flex md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Ready to discuss your next project?
            </h2>
            <p className="text-sm text-slate-200">
              Share your plot details and requirements, and we’ll revert with a
              tailored cost and timeline estimate.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 md:mt-0">
            <PrimaryButton to="/contact">Request Free Consultation</PrimaryButton>
            <PrimaryButton
              href="#contact-form"
              variant="outline"
              className="text-xs"
            >
              Send Project Brief
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

