import React from 'react'
import SEO from '../seo/SEO'
import PrimaryButton from '../components/common/PrimaryButton'

const NotFound = () => {
  return (
    <>
      <SEO title="Page Not Found" path="/404" />
      <section className="flex min-h-[60vh] items-center justify-center bg-slate-950 border-b border-slate-800">
        <div className="text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            404
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-50">
            We couldn’t find that page
          </h1>
          <p className="text-sm text-slate-400">
            The page you’re looking for may have been moved or renamed.
          </p>
          <PrimaryButton to="/">Back to Home</PrimaryButton>
        </div>
      </section>
    </>
  )
}

export default NotFound

