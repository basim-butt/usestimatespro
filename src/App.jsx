import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import TradesPage from './pages/TradesPage'
import HowItWorksPage from './pages/HowItWorksPage'
import WhyUsPage from './pages/WhyUsPage'
import TakeoffCalculatorPage from './pages/TakeoffCalculatorPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="site-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/trades" element={<TradesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/takeoff-calculator" element={<TakeoffCalculatorPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quote" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  )
}
