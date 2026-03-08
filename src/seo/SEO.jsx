import React from 'react'
import { Helmet } from 'react-helmet-async'
import { baseSEOConfig } from '../utils/seoConfig'

const SEO = ({ title, description, path = '/', image }) => {
  const fullTitle = title
    ? `${title} | ${baseSEOConfig.siteName}`
    : baseSEOConfig.defaultTitle
  const metaDescription = description || baseSEOConfig.defaultDescription
  const url = `${baseSEOConfig.siteUrl}${path}`
  const ogImage = image || baseSEOConfig.defaultImage

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="index,follow" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}

export default SEO

