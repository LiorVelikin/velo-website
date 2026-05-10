import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import ContentSection from '../components/ContentSection'
import WebsitesSection from '../components/WebsitesSection'
import WhyUsSection from '../components/WhyUsSection'
import ProcessSection from '../components/ProcessSection'
import FAQSection from '../components/FAQSection'
import CTA from '../components/CTA'
import { orgSchema, faqSchema } from '../components/shared/SchemaOrg'

const HOME_FAQS = [
  { q: 'כמה עולים השירותים שלכם?', a: 'המחיר תלוי בשירותים ובגודל הפרויקט. אנחנו לא עובדים עם מחירונים קבועים כי כל עסק שונה. שיחת הייעוץ החינמית עוזרת לנו להציע מחיר שהגיוני לשני הצדדים.' },
  { q: 'כמה זמן לוקח לראות תוצאות?', a: 'ברוב המקרים מתחילים לראות תנועה ולידים תוך 30 עד 45 יום. תוצאות משמעותיות מגיעות בדרך כלל תוך 60 עד 90 יום — תלוי בתחום ובנקודת ההתחלה.' },
  { q: 'מה ההבדל בינכם לבין סוכנות רגילה?', a: 'סוכנות רגילה עושה דבר אחד — פרסום, או עיצוב, או תוכן. אנחנו עושים הכל ביחד ומחברים את החלקים. התוכן שאנחנו יוצרים מגיע לאתר שבנינו ולקמפיין שאנחנו מנהלים — הכל עובד ביחד.' },
  { q: 'האם אתם מתאימים לעסק קטן?', a: 'כן. רוב הלקוחות שלנו הם עסקים קטנים עד בינוניים שרוצים לגדול בלי לגייס צוות שיווק שלם. אנחנו מחליפים את כל המחלקה.' },
  { q: 'מה זה שיחת הייעוץ ללא עלות?', a: 'שיחה של 20–30 דקות שבה מסתכלים על העסק שלכם, מזהים מה עוצר את הצמיחה ומציעים כיוון. אתם יוצאים עם תובנות שימושיות גם אם תחליטו לא לעבוד יחד.' },
  { q: 'האם כל שירות זמין גם בנפרד?', a: 'כן. כל שירות זמין בנפרד — עיצוב אתר, יצירת תוכן, ניהול קמפיינים — וגם כחבילה משולבת. בשיחת האפיון נבין יחד מה מתאים לכם.' },
]

export default function HomePage() {
  const { hash } = useLocation()

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
        <title>VELO DIGITAL | ליאור וליקין — מעטפת שיווק דיגיטלי שמביאה תוצאות</title>
        <meta name="description" content="ליאור וליקין, VELO DIGITAL — מעטפת שיווק מלאה לעסקים. תוכן AI המוביל בישראל, אתרים שממירים וקמפיינים שמביאים לידים. הכל תחת קורת גג אחת." />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/" />
        <meta property="og:title" content="VELO DIGITAL | ליאור וליקין — מעטפת שיווק דיגיטלי" />
        <meta property="og:description" content="מעטפת שיווק מלאה — תוכן AI, אתרים ממירים וקמפיינים שעובדים. הכל תחת קורת גג אחת." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:url" content="https://liorvelikin.github.io/velo-website/" />
        <script type="application/ld+json">{orgSchema()}</script>
        <script type="application/ld+json">{faqSchema(HOME_FAQS)}</script>
      </Helmet>

      <Hero />
      <div className="section-divider" />
      <ServicesGrid />
      <div className="section-divider" />
      <ContentSection />
      <div className="section-divider" />
      <WebsitesSection />
      <div className="section-divider" />
      <WhyUsSection />
      <div className="section-divider" />
      <ProcessSection />
      <div className="section-divider" />
      <FAQSection />
      <div className="section-divider" />
      <CTA />
    </>
  )
}
