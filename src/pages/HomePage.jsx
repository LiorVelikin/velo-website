import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
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
        <title>VELO Studio | סוכנות שיווק דיגיטלי — תוכן, אתרים ופרסום שמביאים לקוחות</title>
        <meta name="description" content="VELO Studio — סוכנות שיווק דיגיטלי לעסקים בישראל. עיצוב אתרים ממירים, תוכן AI, דפי נחיתה, חנויות Shopify, ניהול קמפיינים וקידום SEO. הכל עובד ביחד." />
        <meta name="keywords" content="סוכנות שיווק דיגיטלי ישראל, עיצוב אתרים לעסקים, תוכן AI, דפי נחיתה ממירים, חנות Shopify, ניהול קמפיינים ממומנים, קידום SEO, שיווק דיגיטלי, לידים, מכירות" />
        <meta property="og:title" content="VELO Studio | סוכנות שיווק דיגיטלי לעסקים" />
        <meta property="og:description" content="תוכן, אתרים ופרסום שמביאים לקוחות — לא רק תנועה. VELO Studio בונה מערכת שיווק שלמה לעסקים בישראל." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/" />
      </Helmet>
      <Hero />
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
