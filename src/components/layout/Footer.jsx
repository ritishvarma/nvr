import React from 'react'
import { Link } from 'react-router-dom'
import {
  COMPANY_NAME,
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_PHONE,
} from '../../utils/constants'

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2 space-y-3">
          <h3 className="text-lg font-semibold text-slate-50">
            {COMPANY_NAME}
          </h3>
          <p className="text-sm text-slate-400 max-w-md">
            We collaborate with homeowners, developers, and businesses to build
            durable, future-ready spaces with complete transparency.
          </p>
          <p className="text-xs text-slate-500">{COMPANY_ADDRESS}</p>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="font-semibold text-slate-100">Quick Links</h4>
          <div className="flex flex-col gap-2 text-slate-400">
            <Link to="/about" className="hover:text-accent">
              About
            </Link>
            <Link to="/services" className="hover:text-accent">
              Services
            </Link>
            <Link to="/projects" className="hover:text-accent">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-accent">
              Contact
            </Link>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="font-semibold text-slate-100">Contact</h4>
          <p className="text-slate-400">
            Phone:{' '}
            <a href={`tel:${COMPANY_PHONE}`} className="hover:text-accent">
              {COMPANY_PHONE}
            </a>
          </p>
          <p className="text-slate-400">
            Email:{' '}
            <a
              href={`mailto:${COMPANY_EMAIL}`}
              className="hover:text-accent break-all"
            >
              {COMPANY_EMAIL}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

