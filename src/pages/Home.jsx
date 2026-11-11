import React from 'react'
import Hero from '../components/Hero'
import QuickEstimator from '../components/QuickEstimator'
import Services from '../components/Services'
import Trades from '../components/Trades'
import HowItWorks from '../components/HowItWorks'
import WhyUs from '../components/WhyUs'
import Deliverables from '../components/Deliverables'
import QuoteForm from '../components/QuoteForm'

export default function Home() {
  return (
    <main>
      <Hero />
      <QuickEstimator />
      <Services />
      <Trades />
      <HowItWorks />
      <WhyUs />
      <Deliverables />
      <QuoteForm />
    </main>
  )
}

