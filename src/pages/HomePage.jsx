import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import ContentSection from '../components/ContentSection'
import WebsitesSection from '../components/WebsitesSection'
import VelocitySection from '../components/VelocitySection'
import FAQSection from '../components/FAQSection'
import CTA from '../components/CTA'
import { orgSchema, faqSchema } from '../components/shared/SchemaOrg'

const HOME_FAQS = [
  { q: 'כמה עולים השירותים שלכם?', a: 'המחיר תלוי בשירותים ובגודל הפרויקט. אנחנו לא עובדים עם מחירונים קבועים כי כל עסק שונה. האבחון החינמי עוזר לנו להציע מחיר שהגיוני לשני הצדדים.' },
  { q: 'כמה זמן לוקח לראות תוצאות?', a: 'ברוב המקרים מתחילים לראות תנועה ולידים תוך 30 עד 45 יום. תוצאות משמעותיות מגיעות בדרך כלל תוך 60 עד 90 יום — תלוי בתחום ובנקודת ההתחלה.' },
  { q: 'מה ההבדל בינכם לבין סוכנות רגילה?', a: 'סוכנות רגילה עושה דבר אחד — פרסום, או עיצוב, או תוכן. אנחנו עושים הכל ביחד ומחברים את החלקים. התוכן שאנחנו יוצרים מגיע לאתר שאנחנו בנינו ולקמפיין שאנחנו מנהלים.' },
  { q: 'האם אתם מתאימים לעסק קטן?', a: 'כן. רוב הלקוחות שלנו הם עסקים קטנים עד בינוניים שרוצים לגדול בלי לגייס צוות שיווק שלם.' },
  { q: 'מה זה האבחון החינמי?', a: 'שיחה של 20 עד 30 דקות שבה אנחנו מסתכלים על העסק שלכם, מזהים מה עוצר את הצמיחה ומציעים כיוון. אתם יוצאים עם תובנות שימושיות גם אם תחליטו לא לעבוד איתנו.' },
]

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
        <title>VELO DIGITAL | שיווק דיגיטלי לעסקים — תוכן, אתרים ופרסום שמביאים תוצאות</title>
        <meta name="description" content="VELO DIGITAL בונה מערכות שיווק שלמות לעסקים — תוכן AI, אתרים ממירים, ניהול קמפיינים וקידום SEO. הכל עובד ביחד, הכל ניתן למדידה." />
        <meta name="keywords" content="שיווק דיגיטלי לעסקים, סוכנות שיווק דיגיטלי, עיצוב אתרים, תוכן AI, דפי נחיתה ממירים, חנות Shopify, ניהול קמפיינים ממומנים, קידום SEO, לידים, מכירות" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/" />
        <meta property="og:title" content="VELO DIGITAL | שיווק דיגיטלי לעסקים — תוכן, אתרים ופרסום" />
        <meta property="og:description" content="בונים מערכת שיווק שלמה לעסקים — תוכן AI, אתרים ממירים, ניהול קמפיינים וקידום SEO. הכל עובד ביחד." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:url" content="https://liorvelikin.github.io/velo-website/" />
        <meta property="og:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VELO DIGITAL | שיווק דיגיטלי לעסקים" />
        <meta name="twitter:description" content="בונים מערכת שיווק שלמה לעסקים — תוכן AI, אתרים ממירים, ניהול קמפיינים וקידום SEO." />
        <meta name="twitter:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
        <script type="application/ld+json">{orgSchema()}</script>
        <script type="application/ld+json">{faqSchema(HOME_FAQS)}</script>
      </Helmet>
      <Hero />
      <ServicesGrid />
      <ContentSection />
      <WebsitesSection />
      <VelocitySection />
      <FAQSection />
      <CTA />
    </>
  )
}
