import React from 'react'
import { Link } from 'react-router-dom'

const PrimaryButton = ({
  to,
  href,
  children,
  variant = 'primary',
  className = '',
  external = false,
  ...rest
}) => {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900'
  const variants = {
    primary: 'bg-accent text-slate-900 hover:bg-orange-500 focus:ring-accent',
    outline:
      'border border-slate-500 text-slate-100 hover:bg-slate-800 focus:ring-slate-500',
  }
  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={cls}
          rel="noreferrer"
          target="_blank"
          {...rest}
        >
          {children}
        </a>
      )
    }
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}

export default PrimaryButton

