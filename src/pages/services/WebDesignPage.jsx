import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/shared/PageHero'
import ContactForm from '../../components/shared/ContactForm'
import { serviceSchema, breadcrumbSchema } from '../../components/shared/SchemaOrg'

/* ── Icons ── */
const IconTarget = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
)
const IconSmartphone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
)
const IconZap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)
const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
  </svg>
)
const IconBarChart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
)
const IconLayers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
  </svg>
)

const features = [
  { icon: <IconTarget />,     color: '#4d9fff', title: 'עיצוב ממוקד המרות',   desc: 'כל עמוד בנוי עם מסלול ברור לפעולה — מהכניסה ועד ליצירת הקשר.' },
  { icon: <IconSmartphone />, color: '#00c8ff', title: 'מובייל-פירסט',        desc: 'עובד מושלם על כל מסך — מהטלפון ועד הדסקטופ.' },
  { icon: <IconZap />,        color: '#00d4b8', title: 'מהירות טעינה',        desc: 'מתחת ל-2 שניות, PageSpeed גבוה — כי גולשים לא מחכים.' },
  { icon: <IconSearch />,     color: '#a07dff', title: 'SEO מובנה',            desc: 'מבנה נכון, schema, meta tags מהיום הראשון.' },
  { icon: <IconBarChart />,   color: '#ffb347', title: 'אנליטיקס מלא',        desc: 'Google Analytics, Meta Pixel, כלי חום — תדעו מה עובד.' },
  { icon: <IconLayers />,     color: '#00d478', title: 'מוכן לצמיחה',         desc: 'אפשר להוסיף ולשנות בלי לבנות מחדש.' },
]

const processSteps = [
  { num: '01', title: 'גילוי ואסטרטגיה',        desc: 'מבינים את קהל היעד, המתחרים, ומה מייחד את העסק שלכם.' },
  { num: '02', title: 'ארכיטקטורה ו-Wireframes', desc: 'מגדירים את המבנה, הפלואו, ומיפוי CTA לפני שמשקיעים בעיצוב.' },
  { num: '03', title: 'עיצוב ויזואלי',           desc: 'מותג, צבעים, טיפוגרפיה — עיצוב שמשקף אתכם.' },
  { num: '04', title: 'פיתוח ואינטגרציות',       desc: 'קוד נקי, מהירות, וחיבור לכל הכלים שאתם צריכים.' },
  { num: '05', title: 'השקה, בדיקות ומעקב',      desc: 'בדיקות, אנליטיקס, ואופטימיזציה שוטפת אחרי ההשקה.' },
]

const businessTypes = [
  { icon: '🏥', label: 'קליניקות ורופאים' },
  { icon: '⚖️', label: 'עורכי דין' },
  { icon: '🏠', label: 'סוכני נדל"ן' },
  { icon: '🍽️', label: 'מסעדות ובתי קפה' },
  { icon: '🛋️', label: 'מעצבי פנים' },
  { icon: '💼', label: 'יועצי עסקים' },
  { icon: '💄', label: 'קוסמטיקה ויופי' },
  { icon: '🏗️', label: 'חברות בנייה' },
  { icon: '📚', label: 'בתי ספר וקורסים' },
  { icon: '📐', label: 'אדריכלים' },
  { icon: '🧘', label: 'פיזיותרפיסטים ומאמנים' },
  { icon: '✂️', label: 'מספרות וסטודיו יופי' },
  { icon: '🔨', label: 'שיפוצים וקבלנות' },
  { icon: '📸', label: 'צלמים ואירועים' },
  { icon: '🌿', label: 'טיפול ורפואה אלטרנטיבית' },
]

const projects = [
  {
    niche: 'קליניקת שיניים',
    title: 'אתר שירות + דף תורים',
    desc: 'אתר עסקי לקליניקת שיניים פרטית — מבנה SEO מקומי, דף שירותים ממיר, ואינטגרציית תורים אונליין.',
  },
  {
    niche: 'סוכן נדל"ן',
    title: 'אתר קטלוג נכסים',
    desc: 'אתר ממוקד לידים לסוכן נדל"ן עצמאי — רשימת נכסים, דף אודות מבסס אמון, וטופס יצירת קשר חכם.',
  },
  {
    niche: 'עורך דין',
    title: 'אתר ייצוגי עם SEO מקומי',
    desc: 'אתר מקצועי לעורך דין — תחומי עיסוק, ביוגרפיה, schema מקומי, ומיצוב בגוגל לפי ביטויי חיפוש ממוקדים.',
  },
]

const faqs = [
  { q: 'כמה זמן לוקח לבנות אתר?', a: 'בדרך כלל 3-6 שבועות, תלוי בגודל הפרויקט. דפי נחיתה פשוטים יכולים להיות מוכנים תוך שבוע.' },
  { q: 'מה ההבדל בין אתר שמביא לקוחות לאתר רגיל?', a: 'אתר רגיל מציג מידע. אתר שמביא לקוחות בנוי עם מסלול שמוביל את הגולש לפעולה — יצירת קשר, קנייה, או הרשמה. כל רכיב בדף משרת מטרה.' },
  { q: 'איזו פלטפורמה אתם בונים עליה?', a: 'React/Next.js לאתרים מתקדמים, WordPress לאתרי תוכן, Shopify לאיקומרס — נבחר יחד לפי הצרכים.' },
  { q: 'האם תעזרו לנו לאחר ההשקה?', a: 'כן. מציעים חבילות תחזוקה חודשיות — עדכונים, שינויים, ומעקב על הביצועים.' },
  { q: 'האם נוכל לנהל את האתר לבד?', a: 'בהחלט. מעבירים הדרכה ומספקים מדריך ניהול. האתר בנוי כך שתוכלו לעדכן תכנים ללא ידע טכני.' },
]

export default function WebDesignPage() {
  const [featuresRef, featuresVis] = useReveal()
  const [processRef, processVis] = useReveal()

  return (
    <>
      <Helmet>
        <title>בניית אתר לעסק | עיצוב אתרים מקצועי בישראל | VELO DIGITAL</title>
        <meta name="description" content="בניית אתרים מקצועית לעסקים בישראל — עיצוב ממוקד המרות, מותאם למובייל ומהיר. אנחנו בונים אתרי עסק, קטלוגים ואתרי שירות שמביאים לקוחות. קליניקות, עורכי דין, נדל&quot;ן, מסעדות ועוד." />
        <meta property="og:title" content="בניית אתר לעסק | עיצוב אתרים מקצועי בישראל | VELO DIGITAL" />
        <meta property="og:description" content="בניית אתרים מקצועית לעסקים בישראל — עיצוב ממוקד המרות, מותאם למובייל ומהיר." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:url" content="https://liorvelikin.github.io/velo-website/services/web-design" />
        <meta property="og:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/services/web-design" />
        <script type="application/ld+json">{serviceSchema('עיצוב אתרים לעסקים', 'בניית אתרים מקצועית לעסקים בישראל — ממוקד המרות, מהיר ומותאם למובייל.', '/services/web-design')}</script>
        <script type="application/ld+json">{breadcrumbSchema([{ name: 'ראשי', path: '/' }, { name: 'שירותים', path: '/services' }, { name: 'עיצוב אתרים', path: '/services/web-design' }])}</script>
      </Helmet>

      <PageHero
        tag="עיצוב אתרים לעסקים"
        title="אתר שמביא לקוחות — לא רק נראה טוב"
        accent="מביא לקוחות"
        subtitle="בונים אתרי עסק שעובדים: מהירים, ממוקדי המרות, ומותאמים לאיך שישראלים מחפשים ומחליטים."
      />

      {/* על השירות */}
      <section style={{ padding: 'clamp(56px,8vw,96px) 0', direction: 'rtl' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em', color: '#0a0f1e', marginBottom: 24 }}>
            בניית אתר לעסק בישראל — יותר מכרטיס ביקור
          </h2>
          <p style={{ color: '#4a5d7a', fontSize: '1rem', lineHeight: 1.9, marginBottom: 32 }}>
            רוב האתרים לעסקים בישראל נראים בסדר — אבל לא עושים כלום. גולש נכנס, לא מבין מה מציעים לו, ויוצא. בניית אתר לעסק היא לא עוד משימה טכנית — זה כלי מכירה. אתר עסקי ממיר צריך לענות על שלוש שאלות תוך שלוש שניות: מי אתם, מה אתם מציעים, ולמה לפנות אליכם ולא למתחרה. עיצוב אתרים בישראל בשנת 2025 אומר גם מהירות טעינה, מותאם למובייל לחלוטין, ונוכחות בגוגל — כי 70% מהחיפושים המקומיים נעשים מהטלפון, ועסק שלא מופיע בעמוד הראשון פשוט לא קיים עבור הלקוח הפוטנציאלי.
          </p>
          <h3 className="font-black" style={{ fontSize: 'clamp(1.2rem,2.2vw,1.7rem)', letterSpacing: '-0.02em', color: '#0a0f1e', marginBottom: 16 }}>
            אתר שמייצג את העסק שלכם ומביא לידים
          </h3>
          <p style={{ color: '#4a5d7a', fontSize: '1rem', lineHeight: 1.9 }}>
            ב-VELO DIGITAL אנחנו מתחילים מאסטרטגיה — מי הלקוח, מה הכאב שלו, ומה גורם לו לבחור בכם ולא במתחרה בתל אביב או בכל עיר אחרת. רק אחרי שאנחנו מבינים את זה, אנחנו ניגשים לעיצוב. אנחנו בונים ב-React, Next.js ו-WordPress תלוי בצרכים, עם SEO מובנה מהיום הראשון — מבנה URL נכון, schema markup, meta tags, ו-Core Web Vitals. כי אתר שלא נמצא בגוגל לא יכול להביא לקוחות, לא משנה כמה הוא יפה.
          </p>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} style={{ padding: 'clamp(56px,8vw,96px) 0', direction: 'rtl', background: 'rgba(26,111,255,0.025)', borderTop: '1px solid rgba(26,111,255,0.07)', borderBottom: '1px solid rgba(26,111,255,0.07)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>מה כולל הפרויקט</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.6rem,3.2vw,2.4rem)', letterSpacing: '-0.02em', color: '#0a0f1e' }}>
              אתר שבנוי <span className="gradient-text">לתוצאות</span>
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
              מהאסטרטגיה <span className="gradient-text">עד ההשקה</span>
            </h2>
            <p style={{ color: '#4a5d7a', fontSize: '0.98rem', lineHeight: 1.75, maxWidth: 580, margin: '16px auto 0' }}>
              5 שלבים מוכחים — שקיפות מלאה בכל אחד מהם
            </p>
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
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(26,111,255,0.12)', border: '1px solid rgba(26,111,255,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.82rem', color: '#4d9fff', flexShrink: 0 }}>
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

      {/* מי מרוויח */}
      <section style={{ padding: 'clamp(48px,7vw,80px) 0', direction: 'rtl', background: 'rgba(26,111,255,0.025)', borderTop: '1px solid rgba(26,111,255,0.07)', borderBottom: '1px solid rgba(26,111,255,0.07)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.4rem,2.8vw,2rem)', letterSpacing: '-0.02em', color: '#0a0f1e', marginBottom: 12 }}>
              מי נהנה מ<span className="gradient-text">השירות הזה?</span>
            </h2>
            <p style={{ color: '#4a5d7a', fontSize: '0.95rem' }}>עבדנו עם מגוון תחומים — כולם נהנים מאתר שמביא לקוחות</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {businessTypes.map((type, i) => (
              <div key={i} style={{ padding: '10px 18px', borderRadius: 100, background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(10,15,30,0.1)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', fontSize: '0.88rem', fontWeight: 600, color: '#0a0f1e', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: '#1a6fff', fontSize: '1rem' }}>{type.icon}</span>
                {type.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* פרויקטים נבחרים */}
      <section style={{ padding: 'clamp(56px,8vw,96px) 0', direction: 'rtl' }}>
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
                <div style={{ height: 140, borderRadius: 10, background: 'linear-gradient(135deg, rgba(26,111,255,0.08) 0%, rgba(0,212,255,0.05) 100%)', border: '1px dashed rgba(26,111,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <span style={{ color: 'rgba(26,111,255,0.4)', fontSize: '0.8rem' }}>צילומי מסך בקרוב</span>
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
              מוכנים לאתר שמביא <span className="gradient-text">תוצאות אמיתיות?</span>
            </h2>
            <p style={{ color: '#4a5d7a', fontSize: '0.95rem', lineHeight: 1.65 }}>
              ספרו לנו על העסק — ונגיד לכם בדיוק מה האתר שלכם צריך לשנות.
            </p>
          </div>
          <ContactForm source="web-design-page" />
        </div>
      </section>
    </>
  )
}
