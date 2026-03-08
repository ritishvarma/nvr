const CITY = import.meta.env.VITE_COMPANY_CITY || 'Hyderabad'

export const baseSEOConfig = {
  siteName: 'NVR Constructions',
  siteUrl: 'https://your-domain.com',
  defaultTitle: 'NVR Constructions – Building Dreams with Quality & Trust',
  defaultDescription: `NVR Constructions is a leading construction company in ${CITY}, specializing in residential, commercial, renovation, interior, and turnkey projects.`,
  defaultImage: 'https://your-domain.com/og-image.jpg',
  keywords: [
    `construction company in ${CITY}`,
    `residential builders in ${CITY}`,
    `commercial contractors in ${CITY}`,
    'turnkey construction solutions',
    'interior design and renovation',
  ],
}

