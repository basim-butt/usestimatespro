import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuickEstimator from './components/QuickEstimator'
import Services from './components/Services'
import Trades from './components/Trades'
import HowItWorks from './components/HowItWorks'
import WhyUs from './components/WhyUs'
import Deliverables from './components/Deliverables'
import Testimonials from './components/Testimonials'
import QuoteForm from './components/QuoteForm'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <Hero />
      <QuickEstimator />
      <Services />
      <Trades />
      <HowItWorks />
      <WhyUs />
      <Deliverables />
      <Testimonials />
      <QuoteForm />
      <Footer />
      <BackToTop />
    </div>
  )
}
