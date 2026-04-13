import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import MethodSection from '../components/MethodSection'
import ServicesGrid from '../components/ServicesGrid'
import ContentSection from '../components/ContentSection'
import WebsitesSection from '../components/WebsitesSection'
import ResultsFlowSection from '../components/ResultsFlowSection'
import VelocitySection from '../components/VelocitySection'
import FAQSection from '../components/FAQSection'
import CTA from '../components/CTA'

export default function HomePage() {
  const { hash } = useLocation()

  // Handle hash scroll when navigating here from another page
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [hash])

  return (
    <>
      <Helmet>
        <title>VELO Studio | סוכנות שיווק דיגיטלי AI לעסקים בישראל</title>
        <meta name="description" content="סוכנות שיווק דיגיטלי מבוסס AI לעסקים בישראל. עיצוב אתרים, דפי נחיתה, תוכן AI, ניהול קמפיינים וקידום SEO — הכל תחת קורת גג אחת." />
        <meta name="keywords" content="סוכנות שיווק דיגיטלי ישראל, עיצוב אתרים, דפי נחיתה, תוכן AI, ניהול קמפיינים, קידום SEO, שיווק דיגיטלי עסקים" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/" />
      </Helmet>
      <Hero />
      <MethodSection />
      <ServicesGrid />
      <ContentSection />
      <WebsitesSection />
      <ResultsFlowSection />
      <VelocitySection />
      <FAQSection />
      <CTA />
    </>
  )
}
