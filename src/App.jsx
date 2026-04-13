import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageLayout from './components/layout/PageLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import WebDesignPage from './pages/services/WebDesignPage'
import LandingPagesPage from './pages/services/LandingPagesPage'
import EcommercePage from './pages/services/EcommercePage'
import AiContentPage from './pages/services/AiContentPage'
import PaidAdsPage from './pages/services/PaidAdsPage'
import SeoPage from './pages/services/SeoPage'

export default function App() {
  return (
    <BrowserRouter basename="/velo-website">
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/web-design" element={<WebDesignPage />} />
          <Route path="services/landing-pages" element={<LandingPagesPage />} />
          <Route path="services/ecommerce" element={<EcommercePage />} />
          <Route path="services/ai-content" element={<AiContentPage />} />
          <Route path="services/paid-ads" element={<PaidAdsPage />} />
          <Route path="services/seo" element={<SeoPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
