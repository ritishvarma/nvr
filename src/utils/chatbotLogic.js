import { chatbotFaq } from '../data/chatbotFaq'
import { COMPANY_MAP_LINK, COMPANY_WHATSAPP } from './constants'

const normalize = (text) =>
  text.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '')

const CTA_LINE = `For a detailed quotation and site visit, please WhatsApp us at ${COMPANY_WHATSAPP}.`

const formatINR = (n) => {
  try {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(n)
  } catch {
    return `₹${Math.round(n).toLocaleString('en-IN')}`
  }
}

const parseAreaSqFt = (text) => {
  const t = normalize(text)

  // 1200 sqft / 1200 sq ft / 1200 sft
  const sqftMatch = t.match(/(\d{2,6}(?:\.\d{1,2})?)\s*(sq\s*ft|sqft|sft)\b/)
  if (sqftMatch) return { value: Number(sqftMatch[1]), unit: 'sqft', sqft: Number(sqftMatch[1]) }

  // 200 sq yards / 200 sqyd / 200 sq yd
  const sqydMatch = t.match(/(\d{2,6}(?:\.\d{1,2})?)\s*(sq\s*yards?|sq\s*yd|sqyd)\b/)
  if (sqydMatch) {
    const sqyd = Number(sqydMatch[1])
    const sqft = sqyd * 9
    return { value: sqyd, unit: 'sqyd', sqft }
  }

  return null
}

const parseBudgetINR = (text) => {
  const t = normalize(text)

  // 40 lakhs, 40 lakh, 40l
  const lakhMatch = t.match(/(\d{1,4}(?:\.\d{1,2})?)\s*(lakh|lakhs|l)\b/)
  if (lakhMatch) return { amount: Number(lakhMatch[1]) * 100000, label: `${lakhMatch[1]} lakh` }

  // 1.2 cr, 1 crore, 1.2 crores
  const crMatch = t.match(/(\d{1,3}(?:\.\d{1,2})?)\s*(cr|crore|crores)\b/)
  if (crMatch) return { amount: Number(crMatch[1]) * 10000000, label: `${crMatch[1]} crore` }

  // ₹ 25,00,000 / rs 2500000
  const rupeeMatch = t.match(/(₹|rs\.?)\s*([0-9,]{5,})/)
  if (rupeeMatch) {
    const raw = rupeeMatch[2].replace(/,/g, '')
    const amt = Number(raw)
    if (!Number.isNaN(amt)) return { amount: amt, label: formatINR(amt) }
  }

  return null
}

const detectFloors = (text) => {
  const t = normalize(text)
  if (/\bg\+2\b/.test(t) || /\bground\s*\+\s*2\b/.test(t)) return 'G+2'
  if (/\bg\+1\b/.test(t) || /\bground\s*\+\s*1\b/.test(t)) return 'G+1'
  if (/\bduplex\b/.test(t)) return 'Duplex'
  return null
}

const looksLikeTimeline = (text) => {
  const t = normalize(text)
  return (
    t.includes('timeline') ||
    t.includes('how long') ||
    t.includes('duration') ||
    t.includes('months') ||
    t.includes('time to') ||
    t.includes('complete')
  )
}

const looksLikeOfficeVisit = (text) => {
  const t = normalize(text)
  return t.includes('visit') && (t.includes('office') || t.includes('location') || t.includes('address'))
}

const looksConstructionRelated = (text) => {
  const t = normalize(text)
  const keywords = [
    'construction',
    'contractor',
    'builder',
    'build',
    'house',
    'home',
    'villa',
    'duplex',
    'apartment',
    'commercial',
    'interior',
    'renovation',
    'remodel',
    'plan approval',
    'approval',
    'architect',
    'estimate',
    'quote',
    'quotation',
    'cost',
    'budget',
    'sqft',
    'sq ft',
    'sqyd',
    'sq yards',
    'timeline',
  ]
  return keywords.some((k) => t.includes(k))
}

const getKnowledgeBaseMatch = (message) => {
  const text = normalize(message)
  for (const faq of chatbotFaq) {
    if (faq.keywords.some((k) => text.includes(k))) return faq.answer
  }
  return null
}

export const getAssistantResponse = (message) => {
  const text = normalize(message)

  const area = parseAreaSqFt(message)
  const budget = parseBudgetINR(message)
  const floors = detectFloors(message)

  // Office visit / maps
  if (looksLikeOfficeVisit(message) || text.includes('maps') || text.includes('google map')) {
    const reply =
      `Sure. You can visit our office — here’s the Google Maps link:\n${COMPANY_MAP_LINK}\n\n` +
      `If you share your preferred time and your area/locality, we’ll guide you for a quick site-visit/consultation.`
    return `${reply}\n\n${CTA_LINE}`
  }

  // Area-based estimate (rule 1)
  if (area?.sqft && area.sqft > 0) {
    const low = area.sqft * 1600
    const high = area.sqft * 2500

    const reply =
      `Thanks — for approx ${Math.round(area.sqft)} sq.ft built-up area, a rough construction cost range in India is:\n\n` +
      `• Estimated Cost Range: ${formatINR(low)} – ${formatINR(high)} (₹1600–₹2500 per sq.ft)\n` +
      `• Next: Please share (1) location/city, (2) budget range, and (3) number of floors (G, G+1, G+2) so I can narrow it down.`

    return `${reply}\n\n${CTA_LINE}`
  }

  // Budget-based suggestion (rule 2)
  if (budget?.amount && budget.amount > 0) {
    const approxSqftLow = budget.amount / 2500
    const approxSqftHigh = budget.amount / 1600

    const reply =
      `Under a budget of around ${formatINR(budget.amount)}, here’s what is typically feasible (depending on location and specifications):\n\n` +
      `• Possible Built-up Area: ~${Math.round(approxSqftLow)} – ${Math.round(approxSqftHigh)} sq.ft (at ₹2500–₹1600 per sq.ft)\n` +
      `• Suitable Options: 1BHK/2BHK compact home, or a portion of a G+1 plan, or interiors/renovation scope\n\n` +
      `To guide you step-by-step, please share:\n` +
      `1) City/area\n2) Plot size (sq.ft or sq.yd)\n3) Floors required${floors ? ` (you mentioned ${floors})` : ''}\n4) Finish level: Basic / Standard / Premium`

    return `${reply}\n\n${CTA_LINE}`
  }

  // Timeline questions (rule 3)
  if (looksLikeTimeline(message)) {
    const reply =
      `Timeline depends on built-up area, number of floors, and approvals. As a quick guideline:\n\n` +
      `• 1000–1500 sq.ft house: ~4–6 months\n` +
      `• Larger homes or G+1/G+2: ~6–10 months\n\n` +
      `To give you a realistic timeline, please share:\n` +
      `1) Built-up area (sq.ft)\n2) Floors (G/G+1/G+2)\n3) Location\n4) Whether plan approval is needed`

    return `${reply}\n\n${CTA_LINE}`
  }

  // Services / pricing / quotation / contact (knowledge base)
  const kb = getKnowledgeBaseMatch(message)
  if (kb) {
    return `${kb}\n\n${CTA_LINE}`
  }

  // Off-topic redirect (rule 5) + always step-by-step (rule 1/4 style)
  if (!looksConstructionRelated(message)) {
    const reply =
      `I can help with construction-related queries for NVR Constructions (India) — residential, commercial, interiors, renovation, architectural planning, and plan approvals.\n\n` +
      `Please tell me what you need:\n` +
      `1) Service type (Residential / Commercial / Interior / Renovation / Plan Approval)\n` +
      `2) Location\n` +
      `3) Built-up area (sq.ft or sq.yd) or budget\n` +
      `4) Floors (G/G+1/G+2)\n\n` +
      `Once I have these, I’ll share an estimated cost range and timeline.`
    return `${reply}\n\n${CTA_LINE}`
  }

  // Construction-related but unclear → guided next steps (no generic fallback)
  const reply =
    `Got it. To help you accurately, please share these details:\n\n` +
    `1) Service type (Residential / Commercial / Interior / Renovation / Plan Approval)\n` +
    `2) Location\n` +
    `3) Built-up area (sq.ft or sq.yd) or budget\n` +
    `4) Floors (G/G+1/G+2)\n` +
    `5) Finish level (Basic / Standard / Premium)\n\n` +
    `After that, I’ll provide:\n• Estimated Cost Range\n• Estimated Timeline\n• What’s Included\n• Next Steps`

  return `${reply}\n\n${CTA_LINE}`
}

