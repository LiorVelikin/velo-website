import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MethodSection from './components/MethodSection'
import ServicesGrid from './components/ServicesGrid'
import VelocitySection from './components/VelocitySection'
import ContentSection from './components/ContentSection'
import WebsitesSection from './components/WebsitesSection'
import ResultsFlowSection from './components/ResultsFlowSection'
import FAQSection from './components/FAQSection'
import CTA from './components/CTA'
import Footer from './components/Footer'
import MobileCtaBar from './components/MobileCtaBar'

export default function App() {
  return (
    <div className="bg-[#060b14] text-white overflow-x-hidden font-heebo">
      <Navbar />
      <Hero />
      <MethodSection />
      <ServicesGrid />
      <ContentSection />
      <WebsitesSection />
      <ResultsFlowSection />
      <VelocitySection />
      <FAQSection />
      <CTA />
      <Footer />
      <MobileCtaBar />
    </div>
  )
}
