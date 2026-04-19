import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/shared/PageHero'
import ContactForm from '../../components/shared/ContactForm'
import { serviceSchema, breadcrumbSchema } from '../../components/shared/SchemaOrg'

/* ── Icons ── */
const IconPackage = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
)
const IconShoppingBag = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
  </svg>
)
const IconStar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)
const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
  </svg>
)
const IconCreditCard = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
)
const IconLink = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
  </svg>
)

const features = [
  { icon: <IconPackage />,    color: '#00d4b8', title: 'עיצוב Shopify מותאם',        desc: 'לא תבנית מדף — חנות שמשקפת את המותג שלכם ובנויה לקהל הקנייה הספציפי.' },
  { icon: <IconShoppingBag />,color: '#4d9fff', title: 'UX שמוריד נטישת עגלה',        desc: 'פלואו רכישה מינימליסטי, sticky CTA, ו-trust signals.' },
  { icon: <IconStar />,       color: '#a07dff', title: 'Product Pages שמוכרות',       desc: 'תמונות, תיאורים, ו-social proof — כל דף מוצר הוא דף מכירה עצמאי.' },
  { icon: <IconSearch />,     color: '#ffb347', title: 'SEO לאיקומרס',                desc: 'URL נכון, meta למוצרים, schema markup — הקטלוג שלכם בגוגל.' },
  { icon: <IconCreditCard />, color: '#00c8ff', title: 'תשלומים ישראלים',             desc: 'ביט, כרטיס אשראי, PayPal — כל שיטות התשלום שהלקוח מצפה לראות.' },
  { icon: <IconLink />,       color: '#00d478', title: 'אינטגרציות',                  desc: 'Klaviyo, Meta Pixel, Google Ads — מערכת שמוכרת גם כשאתם לא ליד המסך.' },
]

const processSteps = [
  { num: '01', title: 'הגדרת מוצרים, קהל ומותג',  desc: 'מבינים מה מוכרים, למי, ואיך המותג צריך להיראות בחנות.' },
  { num: '02', title: 'עיצוב חנות ו-UX',           desc: 'מגדירים את פלואו הקנייה, עמודי מוצר, ועגלה אופטימלית.' },
  { num: '03', title: 'פיתוח, אינטגרציות ותשלומים', desc: 'בניית החנות, חיבור כלי שיווק ואינטגרציות תשלום.' },
  { num: '04', title: 'בדיקות, עלייה לאוויר, אופטימיזציה', desc: 'בדיקות מלאות לפני השקה ומעקב שוטף אחרי.' },
]

const projects = [
  {
    niche: 'מותג אופנה',
    title: 'חנות בגדים ואקססוריז',
    desc: 'חנות Shopify למותג אופנה — עיצוב מינימליסטי, product pages עם מידות ו-UX שמוריד נטישת עגלה.',
  },
  {
    niche: 'מוצרי ביוטי',
    title: 'חנות קוסמטיקה',
    desc: 'חנות לקוסמטיקה ישראלית — תמונות מוצר ברמה גבוהה, ביקורות, ואינטגרציית Klaviyo לאוטומציות.',
  },
  {
    niche: 'מוצרי בית',
    title: 'חנות לייף-סטייל',
    desc: 'חנות לייף-סטייל ומוצרי בית — קטגוריות ברורות, SEO לאיקומרס, ואינטגרציית Meta Pixel לריטרגטינג.',
  },
]

const faqs = [
  { q: 'האם Shopify מתאים לעסק קטן?', a: 'כן. Shopify מתאים לכל גודל — מחנות קטנה בתחילת דרכה ועד מותגים גדולים עם אלפי מוצרים. הפלטפורמה גדלה איתכם.' },
  { q: 'כמה זמן לוקח להקים חנות?', a: 'חנות בסיסית — 2-3 שבועות. חנות מורכבת עם אינטגרציות מרובות — 4-8 שבועות.' },
  { q: 'האם יש תמיכה בעברית ותשלום בשקל?', a: 'כן. אנחנו מגדירים את החנות עם ממשק בעברית, מחירים בשקל, ואינטגרציות לשיטות תשלום ישראליות כולל ביט ו-PayPal.' },
  { q: 'האם אתם מעלים את המוצרים?', a: 'כן, עד כמות מוסכמת. לחנויות גדולות — נעביר אתכם הדרכה להעלאה יעילה.' },
]

export default function EcommercePage() {
  const [featuresRef, featuresVis] = useReveal()
  const [processRef, processVis] = useReveal()

  return (
    <>
      <Helmet>
        <title>בניית חנות Shopify | חנות אינטרנטית לישראל | VELO DIGITAL</title>
        <meta name="description" content="בניית חנויות Shopify מקצועיות לעסקים בישראל — עיצוב מותאם, UX שמוריד נטישת עגלה, אינטגרציות תשלום ישראליות ו-SEO לאיקומרס." />
        <meta property="og:title" content="בניית חנות Shopify | חנות אינטרנטית לישראל | VELO DIGITAL" />
        <meta property="og:description" content="בניית חנויות Shopify מקצועיות לעסקים בישראל — עיצוב מותאם, UX שמוריד נטישת עגלה ו-SEO לאיקומרס." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:url" content="https://liorvelikin.github.io/velo-website/services/ecommerce" />
        <meta property="og:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/services/ecommerce" />
        <script type="application/ld+json">{serviceSchema('בניית חנות Shopify', 'חנויות Shopify מקצועיות לעסקים בישראל — עיצוב מותאם, UX ממיר ו-SEO לאיקומרס.', '/services/ecommerce')}</script>
        <script type="application/ld+json">{breadcrumbSchema([{ name: 'ראשי', path: '/' }, { name: 'שירותים', path: '/services' }, { name: 'חנויות Shopify', path: '/services/ecommerce' }])}</script>
      </Helmet>

      <PageHero
        tag="חנויות Shopify"
        title="חנות אינטרנטית שמוכרת בשבילכם"
        accent="מוכרת בשבילכם"
        subtitle="בונים חנויות Shopify שמתאימות לשוק הישראלי — עם UX שמוריד נטישה, עיצוב שבונה אמון, ואינטגרציות לכל כלי השיווק שלכם."
      />

      {/* על השירות */}
      <section style={{ padding: 'clamp(56px,8vw,96px) 0', direction: 'rtl' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em', color: '#0a0f1e', marginBottom: 24 }}>
            בניית חנות Shopify לשוק הישראלי
          </h2>
          <p style={{ color: '#4a5d7a', fontSize: '1rem', lineHeight: 1.9, marginBottom: 32 }}>
            Shopify היא פלטפורמת האיקומרס המובילה בעולם — ויש סיבה טובה לכך. היא מהירה, אמינה, ומאפשרת לבנות חנות אונליין מקצועית בלי להשקיע בתשתית טכנית. בניית חנות אינטרנטית לשוק הישראלי דורשת התייחסות לפרטים ייחודיים: תמיכה מלאה בעברית RTL, מחירים בשקל, שיטות תשלום שהלקוח הישראלי מכיר — ביט, כרטיס אשראי, PayPal — ותקשורת בשפה שמדברת לקהל המקומי. חנות Shopify ישראל שמוגדרת נכון מאפשרת לכם למכור 24/7, לנהל מלאי בקלות, ולהריץ קמפיינים שיווקיים ישר מהפלטפורמה.
          </p>
          <h3 className="font-black" style={{ fontSize: 'clamp(1.2rem,2.2vw,1.7rem)', letterSpacing: '-0.02em', color: '#0a0f1e', marginBottom: 16 }}>
            יותר ממראה — חנות שממירה
          </h3>
          <p style={{ color: '#4a5d7a', fontSize: '1rem', lineHeight: 1.9 }}>
            הסיבה שרוב החנויות לא מגיעות לפוטנציאל שלהן היא לא המוצר — היא ה-UX. שבעים אחוז מהגולשים עוזבים את העגלה לפני שמסיימים לקנות. אנחנו בונים את פלואו הרכישה בצורה שמוריד נטישה: עמוד מוצר שמכסה את כל ה-objections, checkout מינימליסטי, ו-trust signals בכל שלב. מוסיפים על זה אינטגרציות כמו Klaviyo לאוטומציות אימייל, Meta Pixel לריטרגטינג, ו-Google Ads — וקיבלתם מערכת שמוכרת גם כשאתם לא ליד המסך.
          </p>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} style={{ padding: 'clamp(56px,8vw,96px) 0', direction: 'rtl', background: 'rgba(0,212,184,0.02)', borderTop: '1px solid rgba(0,212,184,0.08)', borderBottom: '1px solid rgba(0,212,184,0.08)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>מה כולל הפרויקט</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.6rem,3.2vw,2.4rem)', letterSpacing: '-0.02em', color: '#0a0f1e' }}>
              חנות שבנויה <span className="gradient-text">לצמיחה</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {features.map((f, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: '24px 22px',
                  opacity: featuresVis ? 1 : 0,
                  transform: featuresVis ? 'none' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 70}ms, transform 0.5s ease ${i * 70}ms`,
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${f.color}18`, border: `1px solid ${f.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: f.color, marginBottom: 16 }}>
                  {f.icon}
                </div>
                <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1rem', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: '#8ba3c7', fontSize: '0.87rem', lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section ref={processRef} style={{ padding: 'clamp(56px,8vw,96px) 0', direction: 'rtl' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>תהליך העבודה</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.6rem,3.2vw,2.4rem)', letterSpacing: '-0.02em', color: '#0a0f1e' }}>
              מהקונספט <span className="gradient-text">עד המכירה הראשונה</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: '24px 22px', display: 'flex', gap: 16, alignItems: 'flex-start',
                  opacity: processVis ? 1 : 0,
                  transform: processVis ? 'none' : 'translateY(16px)',
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(0,212,184,0.12)', border: '1px solid rgba(0,212,184,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.82rem', color: '#00d4b8', flexShrink: 0 }}>
                  {step.num}
                </div>
                <div>
                  <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem', marginBottom: 5 }}>{step.title}</h3>
                  <p style={{ color: '#8ba3c7', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* פרויקטים נבחרים */}
      <section style={{ padding: 'clamp(56px,8vw,96px) 0', direction: 'rtl', background: 'rgba(0,212,184,0.02)', borderTop: '1px solid rgba(0,212,184,0.06)', borderBottom: '1px solid rgba(0,212,184,0.06)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>עבודות</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.6rem,3.2vw,2.4rem)', letterSpacing: '-0.02em', color: '#0a0f1e' }}>
              פרויקטים <span className="gradient-text">נבחרים</span>
            </h2>
            <p style={{ color: '#4a5d7a', fontSize: '0.98rem', lineHeight: 1.75, maxWidth: 580, margin: '16px auto 0' }}>
              פרויקטים שאנחנו עובדים עליהם — יעודכנו בקרוב
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {projects.map((p, i) => (
              <div key={i} className="glass-card" style={{ padding: '28px 26px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <div className="tag-pill">{p.niche}</div>
                  <span style={{ color: '#4d9fff', fontSize: '0.72rem', fontWeight: 700, background: 'rgba(26,111,255,0.1)', border: '1px solid rgba(26,111,255,0.2)', padding: '3px 10px', borderRadius: 100 }}>בקרוב</span>
                </div>
                <div style={{ height: 140, borderRadius: 10, background: 'linear-gradient(135deg, rgba(0,212,184,0.08) 0%, rgba(26,111,255,0.05) 100%)', border: '1px dashed rgba(0,212,184,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <span style={{ color: 'rgba(0,212,184,0.4)', fontSize: '0.8rem' }}>צילומי מסך בקרוב</span>
                </div>
                <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.98rem', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ color: '#8ba3c7', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: 'clamp(40px,6vw,72px) 0', direction: 'rtl' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', letterSpacing: '-0.02em', color: '#0a0f1e' }}>
              שאלות <span className="gradient-text">נפוצות</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card" style={{ padding: '22px 24px' }}>
                <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem', marginBottom: 8 }}>{faq.q}</h3>
                <p style={{ color: '#8ba3c7', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(40px,6vw,72px) 0', direction: 'rtl' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', letterSpacing: '-0.02em', color: '#0a0f1e', marginBottom: 12 }}>
              רוצים חנות שמוכרת <span className="gradient-text">בשבילכם?</span>
            </h2>
            <p style={{ color: '#4a5d7a', fontSize: '0.95rem', lineHeight: 1.65 }}>
              ספרו לנו על המוצרים שלכם — ונגיד לכם איך להפוך גולשים ללקוחות.
            </p>
          </div>
          <ContactForm source="ecommerce-page" />
        </div>
      </section>
    </>
  )
}
