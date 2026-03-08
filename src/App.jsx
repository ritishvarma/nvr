import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTopButton from './components/layout/ScrollToTopButton'
import AppRoutes from './router'
import FloatingChatbot from './chatbot/FloatingChatbot'
import { SEOProvider } from './seo/SEOProvider'
import { COMPANY_WHATSAPP } from './utils/constants'

const App = () => {
  return (
    <SEOProvider>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col bg-slate-900 text-slate-50">
          <Navbar />
          <main className="flex-1">
            <AppRoutes />
          </main>
          <Footer />
          <ScrollToTopButton />
          <FloatingChatbot />
          <a
            href={`https://wa.me/${COMPANY_WHATSAPP.replace(/\D/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-20 z-40 hidden md:flex h-11 items-center rounded-full bg-green-500 px-4 text-xs font-semibold text-white shadow-lg hover:bg-green-600"
          >
            WhatsApp Us
          </a>
        </div>
      </BrowserRouter>
    </SEOProvider>
  )
}

export default App
