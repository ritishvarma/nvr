import {
  COMPANY_CITY,
  COMPANY_PHONE,
  COMPANY_EMAIL,
  COMPANY_ADDRESS,
  COMPANY_MAP_LINK,
} from '../utils/constants'

export const chatbotFaq = [
  {
    intent: 'services',
    keywords: ['services', 'what do you do', 'offer'],
    answer: `We offer residential construction (1BHK/2BHK/Duplex/Villas/G+1/G+2), commercial construction, architectural planning, interior design, renovation & remodeling, and plan approval assistance in ${COMPANY_CITY}.`,
  },
  {
    intent: 'pricing',
    keywords: ['price', 'pricing', 'cost', 'charges', 'budget'],
    answer:
      'For India, a practical construction cost range is usually ₹1600–₹2500 per sq.ft depending on material and finishing quality. Share your built-up area, location, and number of floors for a closer estimate.',
  },
  {
    intent: 'timeline',
    keywords: ['timeline', 'time', 'duration', 'how long'],
    answer:
      'As a broad guideline: 1000–1500 sq.ft houses typically take ~4–6 months. Larger homes or G+1/G+2 projects usually take ~6–10 months depending on scope and approvals.',
  },
  {
    intent: 'location',
    keywords: ['office', 'location', 'where are you', 'address'],
    answer: `Our office address: ${COMPANY_ADDRESS}\nGoogle Maps: ${COMPANY_MAP_LINK}`,
  },
  {
    intent: 'contact',
    keywords: ['contact', 'phone', 'email', 'reach you'],
    answer: `You can reach us at ${COMPANY_PHONE} or email ${COMPANY_EMAIL}. You can also use the contact form on the Contact page.`,
  },
  {
    intent: 'quotation',
    keywords: ['quotation', 'quote', 'estimate'],
    answer:
      'To request a detailed quotation, please share your plot location, size, and project type via the contact form or WhatsApp, and our team will prepare a custom proposal.',
  },
]

