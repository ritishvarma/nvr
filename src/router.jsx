import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import useScrollToTop from './hooks/useScrollToTop'
import NotFound from './pages/NotFound'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Projects = lazy(() => import('./pages/Projects'))
const Contact = lazy(() => import('./pages/Contact'))

const AppRoutes = () => {
  useScrollToTop()

  return (
    <Suspense
      fallback={
        <div className="flex h-[60vh] items-center justify-center text-slate-400">
          Loading...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes

