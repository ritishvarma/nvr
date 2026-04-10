import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import PrimaryButton from '../common/PrimaryButton'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/80 border-b border-slate-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="NVR Constructions Logo" className="h-10 w-auto object-contain drop-shadow-md" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm md:text-base font-bold text-slate-50">
              NVR Constructions
            </span>
            <span className="text-[11px] text-slate-400">
              Building Dreams with Quality &amp; Trust
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `transition hover:text-accent ${
                    isActive ? 'text-accent' : 'text-slate-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <PrimaryButton to="/contact">Get Free Quote</PrimaryButton>
        </div>

        <button
          type="button"
          className="md:hidden text-slate-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="text-2xl">{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {open ? (
        <div className="md:hidden border-t border-slate-800 bg-slate-900">
          <div className="space-y-1 px-4 py-3 text-sm text-slate-100">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 ${
                    isActive ? 'bg-slate-800 text-accent' : 'hover:bg-slate-800'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <PrimaryButton
              to="/contact"
              className="w-full justify-center mt-2"
              onClick={() => setOpen(false)}
            >
              Get Free Quote
            </PrimaryButton>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar

