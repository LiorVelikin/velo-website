import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Hero            from '../components/Hero'
import ServicesGrid    from '../components/ServicesGrid'
import WebsitesSection from '../components/WebsitesSection'
import AiContentReel   from '../components/AiContentReel'
import ProcessSection  from '../components/ProcessSection'
import AgencySection   from '../components/AgencySection'
import CaseStudies     from '../components/CaseStudies'
import Testimonials    from '../components/Testimonials'
import FAQSection      from '../components/FAQSection'
import CTA             from '../components/CTA'
import { orgSchema, faqSchema } from '../components/shared/SchemaOrg'

const HOME_FAQS = [
  { q: 'תוך כמה זמן רואים תוצאות?', a: 'תוך שבועיים אתם כבר רואים את הקמפיין באוויר ואת הפניות הראשונות. תוצאות אמיתיות שאפשר למדוד — בין חודש לחודשיים.' },
  { q: 'מה ההבדל בין סרטון רגיל לסרטון שיוצר ב־AI?', a: 'במבחן עיוור — קשה להבדיל. ההבדל הגדול הוא במהירות ובמחיר. הפקה רגילה לוקחת שבועות ועולה עשרות אלפי שקלים. אנחנו מספקים תוצר דומה תוך כמה ימים, בשבריר מהמחיר.' },
  { q: 'אני יכול לקחת רק שירות אחד?', a: 'בטח. הרבה לקוחות מתחילים עם פרסום בלבד או רק עם תוכן. בפגישת הייעוץ נמליץ לכם על המתאים לפי היעדים שלכם.' },
  { q: 'כמה זה עולה?', a: 'תלוי במה אתם צריכים. אתרים — מחיר פרויקט קבוע. תוכן וקמפיינים — חבילה חודשית. בפגישת הייעוץ אנחנו מציגים הצעה מותאמת — ללא הפתעות, ללא אותיות קטנות.' },
  { q: 'אתם עובדים גם עם עסקים בחו"ל?', a: 'כן. אנחנו עובדים עם עסקים בכל העולם. תוכן ב־AI אנחנו מפיקים ב־12 שפות, וקמפיינים אנחנו מנהלים בכל מדינה.' },
  { q: 'מה ההבדל בינכם לסוכנות שיווק רגילה?', a: 'אנחנו עושים את הכל באותו מקום — אתרים, תוכן וקמפיינים. אין ניתוקים, אין "זה לא באחריותנו". הכל אצלנו, תחת קורת גג אחת.' },
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
        <title>VELO DIGITAL | סוכנות שיווק דיגיטלי תחת קורת גג אחת</title>
        <meta name="description" content="VELO DIGITAL — סוכנות שיווק מלאה. אתרים שממירים, תוכן AI היפר־ריאליסטי וקמפיינים שמביאים לידים. תחת קורת גג אחת." />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/" />
        <meta property="og:title" content="VELO DIGITAL | סוכנות שיווק דיגיטלי" />
        <meta property="og:description" content="מעטפת שיווק שמייצרת תוצאות — אתרים, תוכן AI וקמפיינים בתשלום תחת קורת גג אחת." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:url" content="https://liorvelikin.github.io/velo-website/" />
        <script type="application/ld+json">{orgSchema()}</script>
        <script type="application/ld+json">{faqSchema(HOME_FAQS)}</script>
      </Helmet>

      <Hero />
      <ServicesGrid />
      <WebsitesSection />
      <AiContentReel />
      <ProcessSection />
      <AgencySection />
      <CaseStudies />
      <Testimonials />
      <FAQSection />
      <CTA />
    </>
  )
}
