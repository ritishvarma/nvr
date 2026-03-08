import React, { useMemo, useState } from 'react'
import SEO from '../seo/SEO'
import SectionHeader from '../components/common/SectionHeader'
import { projectCategories, projects } from '../data/projects'

const Projects = () => {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <>
      <SEO
        title="Construction Projects"
        path="/projects"
        description="View residential, commercial, and renovation projects delivered by NVR Constructions, including timelines, locations, and indicative cost ranges."
      />

      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 space-y-8">
          <SectionHeader
            eyebrow="Projects"
            title="Selected work across categories"
            subtitle="A snapshot of how we transform drawings into durable, liveable, and efficient spaces."
          />

          <div className="flex flex-wrap gap-2 text-xs">
            <button
              type="button"
              onClick={() => setFilter('All')}
              className={`rounded-full border px-3 py-1 ${
                filter === 'All'
                  ? 'border-accent bg-accent text-slate-900'
                  : 'border-slate-700 text-slate-200 hover:bg-slate-800'
              }`}
            >
              All
            </button>
            {projectCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={`rounded-full border px-3 py-1 ${
                  filter === c
                    ? 'border-accent bg-accent text-slate-900'
                    : 'border-slate-700 text-slate-200 hover:bg-slate-800'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article
                key={p.id}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
              >
                <div className="relative">
                  <img
                    src={p.afterImage}
                    alt={`${p.name} completed project`}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-100">
                    {p.category}
                  </span>
                </div>
                <div className="p-4 space-y-1 text-xs text-slate-300">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {p.name}
                  </h3>
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
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects

