import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop'

// Main Hub Pages
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import TradesPage from './pages/TradesPage'
import HowItWorksPage from './pages/HowItWorksPage'
import WhyUsPage from './pages/WhyUsPage'
import TakeoffCalculatorPage from './pages/TakeoffCalculatorPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'

// Dedicated Service Pages
import QuantityTakeoffsPage from './pages/services/QuantityTakeoffsPage'
import RSMeansEstimatingPage from './pages/services/RSMeansEstimatingPage'
import BidPackagePrepPage from './pages/services/BidPackagePrepPage'
import ValueEngineeringPage from './pages/services/ValueEngineeringPage'

// Dedicated Trade Pages
import ConcreteEstimatingPage from './pages/trades/ConcreteEstimatingPage'
import MepEstimatingPage from './pages/trades/MepEstimatingPage'
import StructuralSteelPage from './pages/trades/StructuralSteelPage'
import RoofingEstimatingPage from './pages/trades/RoofingEstimatingPage'
import DrywallEstimatingPage from './pages/trades/DrywallEstimatingPage'
import MasonryEstimatingPage from './pages/trades/MasonryEstimatingPage'
import SiteworkEstimatingPage from './pages/trades/SiteworkEstimatingPage'

// Dedicated Location Pages
import NewYorkEstimatingPage from './pages/locations/NewYorkEstimatingPage'

// Contractor Blog Knowledge Base
import BlogIndexPage from './pages/blog/BlogIndexPage'
import HowToDoAQuantityTakeoffPage from './pages/blog/HowToDoAQuantityTakeoffPage'
import InHouseVsOutsourcedEstimatingPage from './pages/blog/InHouseVsOutsourcedEstimatingPage'
import WhatIsIncludedInABidPackagePage from './pages/blog/WhatIsIncludedInABidPackagePage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="site-wrapper">
        <Navbar />
        <Routes>
          {/* Main Hub Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/trades" element={<TradesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/takeoff-calculator" element={<TakeoffCalculatorPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quote" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* Dedicated Service Routes */}
          <Route path="/services/quantity-takeoffs" element={<QuantityTakeoffsPage />} />
          <Route path="/services/rsmeans-cost-estimating" element={<RSMeansEstimatingPage />} />
          <Route path="/services/bid-package-preparation" element={<BidPackagePrepPage />} />
          <Route path="/services/value-engineering" element={<ValueEngineeringPage />} />

          {/* Dedicated Trade Routes */}
          <Route path="/trades/concrete-estimating" element={<ConcreteEstimatingPage />} />
          <Route path="/trades/mep-estimating" element={<MepEstimatingPage />} />
          <Route path="/trades/structural-steel-estimating" element={<StructuralSteelPage />} />
          <Route path="/trades/roofing-estimating" element={<RoofingEstimatingPage />} />
          <Route path="/trades/drywall-estimating" element={<DrywallEstimatingPage />} />
          <Route path="/trades/masonry-estimating" element={<MasonryEstimatingPage />} />
          <Route path="/trades/sitework-estimating" element={<SiteworkEstimatingPage />} />

          {/* Dedicated Location Routes */}
          <Route path="/locations/new-york" element={<NewYorkEstimatingPage />} />

          {/* Contractor Guides / Blog */}
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/how-to-do-a-quantity-takeoff" element={<HowToDoAQuantityTakeoffPage />} />
          <Route path="/blog/in-house-vs-outsourced-estimating" element={<InHouseVsOutsourcedEstimatingPage />} />
          <Route path="/blog/what-is-included-in-a-construction-bid-package" element={<WhatIsIncludedInABidPackagePage />} />

          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  )
}
