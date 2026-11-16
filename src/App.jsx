import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop'

// Home is statically imported so initial landing page renders instantly with zero layout shift
import Home from './pages/Home'

// Subpages lazy-loaded on demand to keep initial JavaScript payload minimal
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const TradesPage = lazy(() => import('./pages/TradesPage'))
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage'))
const WhyUsPage = lazy(() => import('./pages/WhyUsPage'))
const TakeoffCalculatorPage = lazy(() => import('./pages/TakeoffCalculatorPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))

// Dedicated Service Pages
const QuantityTakeoffsPage = lazy(() => import('./pages/services/QuantityTakeoffsPage'))
const RSMeansEstimatingPage = lazy(() => import('./pages/services/RSMeansEstimatingPage'))
const BidPackagePrepPage = lazy(() => import('./pages/services/BidPackagePrepPage'))
const ValueEngineeringPage = lazy(() => import('./pages/services/ValueEngineeringPage'))

// Dedicated Trade Pages
const ConcreteEstimatingPage = lazy(() => import('./pages/trades/ConcreteEstimatingPage'))
const MepEstimatingPage = lazy(() => import('./pages/trades/MepEstimatingPage'))
const StructuralSteelPage = lazy(() => import('./pages/trades/StructuralSteelPage'))
const RoofingEstimatingPage = lazy(() => import('./pages/trades/RoofingEstimatingPage'))
const DrywallEstimatingPage = lazy(() => import('./pages/trades/DrywallEstimatingPage'))
const MasonryEstimatingPage = lazy(() => import('./pages/trades/MasonryEstimatingPage'))
const SiteworkEstimatingPage = lazy(() => import('./pages/trades/SiteworkEstimatingPage'))

// Dedicated Location Pages
const NewYorkEstimatingPage = lazy(() => import('./pages/locations/NewYorkEstimatingPage'))

// Contractor Blog Knowledge Base
const BlogIndexPage = lazy(() => import('./pages/blog/BlogIndexPage'))
const HowToDoAQuantityTakeoffPage = lazy(() => import('./pages/blog/HowToDoAQuantityTakeoffPage'))
const InHouseVsOutsourcedEstimatingPage = lazy(() => import('./pages/blog/InHouseVsOutsourcedEstimatingPage'))
const WhatIsIncludedInABidPackagePage = lazy(() => import('./pages/blog/WhatIsIncludedInABidPackagePage'))

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="site-wrapper">
        <a href="#main-content" className="sr-only-focusable">Skip to main content</a>
        <Navbar />
        <main id="main-content" tabIndex="-1">
          <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
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
          </Suspense>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  )
}
