import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/shared/PageHero'
import ContactForm from '../../components/shared/ContactForm'
import BrowserMockup from '../../components/shared/BrowserMockup'
import { serviceSchema, breadcrumbSchema } from '../../components/shared/SchemaOrg'

/* ── SVG Icons ── */
const IconMonitor = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
  </svg>
)
const IconZap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)
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
const IconBarChart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
)
const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
  </svg>
)
const IconLayers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
  </svg>
)
const IconLink = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
  </svg>
)

const painPoints = [
  { icon: <IconMonitor />, text: 'יש לכם אתר שנראה טוב — אבל לא מביא לקוחות' },
  { icon: <IconZap />,     text: 'האתר שלכם איטי, לא מותאם למובייל, ולא נמצא בגוגל' },
  { icon: <IconTarget />,  text: 'שילמתם הרבה לעיצוב שלא מייצג את מה שהעסק שלכם שווה' },
  { icon: <IconBarChart />, text: 'אין לכם מושג כמה גולשים מגיעים ומה הם עושים שם' },
]

const features = [
  { icon: <IconTarget />,     color: '#4d9fff', title: 'עיצוב ממוקד המרות',   desc: 'כל עמוד נבנה עם מסלול ברור לפעולה — מהכניסה ועד ליצירת הקשר. לא רק יפה, אלא עובד.' },
  { icon: <IconSmartphone />, color: '#00c8ff', title: 'מובייל-פירסט',        desc: '70% מהגולשים מגיעים מהטלפון. האתר שלכם חייב להיראות ולעבוד מושלם על כל מסך.' },
  { icon: <IconZap />,        color: '#00d4b8', title: 'מהירות קריטית',       desc: 'זמן טעינה מתחת ל-2 שניות. כל שנייה שהאתר לוקח — אתם מאבדים 20% מהגולשים.' },
  { icon: <IconSearch />,     color: '#a07dff', title: 'SEO מובנה מהיסוד',    desc: 'מבנה נכון, מטא-תגים, schema markup ומהירות — גוגל יאהב אתכם מהיום הראשון.' },
  { icon: <IconBarChart />,   color: '#ffb347', title: 'מחובר לכלי ניתוח',    desc: 'Google Analytics, Meta Pixel וכלי חום — תדעו בדיוק מה עובד ומה לא.' },
  { icon: <IconLayers />,     color: '#00d478', title: 'מוכן לצמיחה',         desc: 'אפשר להוסיף דפים, שפות ופיצ\'רים בלי לבנות מחדש. נבנה כדי לגדול איתכם.' },
]

const processSteps = [
  { num: '01', title: 'גילוי ואסטרטגיה',        desc: 'מבינים את הקהל שלכם, המתחרים, ומה שמייחד אתכם. בונים אסטרטגיה לפני שנוגעים בעיצוב.' },
  { num: '02', title: 'ארכיטקטורה ו-Wireframes', desc: 'מגדירים את המבנה, הפלואו, וה-CTA לפי שיטת CRO — לפני שמשקיעים בעיצוב ויזואלי.' },
  { num: '03', title: 'עיצוב ויזואלי',           desc: 'עיצוב שמשקף את המותג שלכם ויוצר אמון מהשנייה הראשונה.' },
  { num: '04', title: 'פיתוח ואינטגרציות',       desc: 'קוד נקי, אופטימיזציית מהירות, וחיבור לכל הכלים שאתם צריכים.' },
  { num: '05', title: 'השקה ומעקב',              desc: 'השקה מבוקרת, בדיקות, ומדידה — כי לא עוצרים בהשקה.' },
  { num: '06', title: 'אופטימיזציה שוטפת',       desc: 'ניתוח נתונים, A/B testing ושיפורים מתמשכים להגדלת ההמרות.' },
]

const faqs = [
  { q: 'כמה זמן לוקח לבנות אתר?',           a: 'בדרך כלל 3-6 שבועות, תלוי בגודל הפרויקט. דפי נחיתה פשוטים יכולים להיות מוכנים תוך שבוע.' },
  { q: 'מה ההבדל בין אתר "רגיל" לאתר שמביא לקוחות?', a: 'אתר "רגיל" מציג מידע. אתר שמביא לקוחות בנוי עם מסלול שמוביל את הגולש לפעולה — יצירת קשר, קנייה, או הרשמה. כל רכיב בדף משרת מטרה.' },
  { q: 'מה הפלטפורמות שאתם עובדים איתן?',   a: 'React/Next.js לאתרים מתקדמים, WordPress עם Elementor לאתרי תוכן, Shopify לאיקומרס.' },
  { q: 'האם תעזרו לנו גם לאחר ההשקה?',      a: 'כן. מציעים חבילות תחזוקה חודשיות — עדכונים, שינויים, ומעקב על הביצועים.' },
]

/* ── Mock project for showcase ── */
function WebsiteShowcase() {
  return (
    <BrowserMockup url="velo-client.com" accentColor="#1a6fff">
      <div style={{ height: 320, background: 'linear-gradient(160deg, #060d1f 0%, #0a1628 60%, #071020 100%)', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(26,111,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,111,255,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        {/* Fake nav */}
        <div style={{ height: 44, borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', padding: '0 24px', gap: 24 }}>
          <div style={{ width: 60, height: 10, borderRadius: 4, background: 'rgba(255,255,255,0.15)' }} />
          <div style={{ display: 'flex', gap: 16, marginRight: 'auto' }}>
            {[40,36,44,38].map((w,i) => <div key={i} style={{ width: w, height: 8, borderRadius: 3, background: 'rgba(255,255,255,0.08)' }} />)}
          </div>
          <div style={{ width: 72, height: 28, borderRadius: 14, background: 'linear-gradient(135deg, #0055ff, #00c8ff)' }} />
        </div>
        {/* Hero content */}
        <div style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ width: 48, height: 20, borderRadius: 10, background: 'rgba(26,111,255,0.2)', border: '1px solid rgba(26,111,255,0.3)' }} />
          <div style={{ width: '70%', height: 18, borderRadius: 4, background: 'rgba(255,255,255,0.18)' }} />
          <div style={{ width: '85%', height: 14, borderRadius: 4, background: 'rgba(255,255,255,0.1)' }} />
          <div style={{ width: '60%', height: 14, borderRadius: 4, background: 'rgba(255,255,255,0.07)' }} />
          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            <div style={{ width: 100, height: 34, borderRadius: 17, background: 'linear-gradient(135deg, #0055ff, #00c8ff)' }} />
            <div style={{ width: 88, height: 34, borderRadius: 17, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }} />
          </div>
        </div>
        {/* Stats row */}
        <div style={{ position: 'absolute', bottom: 20, left: 24, right: 24, display: 'flex', gap: 12 }}>
          {['220%','3×','< 2s'].map((v,i) => (
            <div key={i} style={{ flex: 1, background: 'rgba(26,111,255,0.08)', border: '1px solid rgba(26,111,255,0.18)', borderRadius: 10, padding: '10px 12px', textAlign: 'center' }}>
              <div style={{ color: '#4d9fff', fontWeight: 800, fontSize: '1rem' }}>{v}</div>
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.6rem', marginTop: 2 }}>
                {['צמיחה בלידים', 'שיפור המרות', 'זמן טעינה'][i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserMockup>
  )
}

export default function WebDesignPage() {
  const [featuresRef, featuresVis] = useReveal()
  const [processRef, processVis] = useReveal()
  const [metricsRef, metricsVis] = useReveal()

  return (
    <>
      <Helmet>
        <title>בניית אתר לעסק | עיצוב אתרים מקצועי בישראל | VELO Studio</title>
        <meta name="description" content="בניית אתרים מקצועית לעסקים — עיצוב ממוקד המרות, מהיר ומותאם למובייל. VELO Studio בונה אתרי עסק, קטלוגים ואתרי שירות שמביאים לקוחות ולא רק נראים טוב." />
        <meta name="keywords" content="בניית אתר לעסק, עיצוב אתרים מקצועי, בניית אתרים בישראל, אתר עסקי, עיצוב אתרים ממוקד המרות, אתר מהיר לגוגל, בניית אתר WordPress, בניית אתר React, עיצוב אתרים תל אביב, אתר קטלוג לעסק, בניית אתר לעסק קטן" />
        <meta property="og:title" content="בניית אתר לעסק | VELO Studio" />
        <meta property="og:description" content="עיצוב אתרים מקצועי לעסקים בישראל — ממוקד המרות, מהיר ומותאם למובייל. מהאסטרטגיה ועד ההשקה." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:url" content="https://liorvelikin.github.io/velo-website/services/web-design" />
        <meta property="og:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="בניית אתר לעסק | VELO Studio" />
        <meta name="twitter:description" content="עיצוב אתרים מקצועי לעסקים בישראל — ממוקד המרות, מהיר ומותאם למובייל." />
        <meta name="twitter:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/services/web-design" />
        <script type="application/ld+json">{serviceSchema('עיצוב אתרים לעסקים', 'בניית אתרים מקצועית לעסקים — עיצוב ממוקד המרות, מהיר ומותאם למובייל.', '/services/web-design')}</script>
        <script type="application/ld+json">{breadcrumbSchema([{name:'ראשי',path:'/'},{name:'שירותים',path:'/services'},{name:'עיצוב אתרים',path:'/services/web-design'}])}</script>
      </Helmet>

      <PageHero
        tag="עיצוב אתרים"
        title="אתר שעובד בשבילכם — 24/7"
        accent="עובד בשבילכם"
        subtitle="לא רק אתר יפה. אתר שמבין את הלקוח שלכם, מוביל אותו לפעולה, ומדיד מהיום הראשון."
      />

      {/* Metrics strip */}
      <section ref={metricsRef} style={{ padding: 'clamp(24px,4vw,48px) 0', direction: 'rtl', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {[
              { num: '3×',   label: 'עלייה ממוצעת בהמרות' },
              { num: '< 2s', label: 'זמן טעינה יעד' },
              { num: '60+',  label: 'פרויקטים הושלמו' },
              { num: '95+',  label: 'PageSpeed Score' },
            ].map((m, i) => (
              <div
                key={i}
                style={{
                  textAlign: 'center', padding: '20px 16px',
                  borderLeft: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  opacity: metricsVis ? 1 : 0,
                  transform: metricsVis ? 'none' : 'translateY(12px)',
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                }}
              >
                <div style={{ color: '#4d9fff', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1 }}>{m.num}</div>
                <div style={{ color: '#6a88ad', fontSize: '0.78rem', marginTop: 6 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section style={{ padding: 'clamp(48px,7vw,80px) 0', direction: 'rtl' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>המצב הנוכחי</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em' }}>
              מכירים את <span className="gradient-text">התסכול הזה?</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {painPoints.map((p, i) => (
              <div key={i} className="glass-card" style={{ padding: '22px 24px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(26,111,255,0.1)', border: '1px solid rgba(26,111,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4d9fff', flexShrink: 0 }}>
                  {p.icon}
                </div>
                <p style={{ color: '#8ba3c7', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section style={{ padding: 'clamp(32px,5vw,60px) 0', direction: 'rtl' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }}>
            <div style={{ flex: '1 1 340px', minWidth: 0 }}>
              <div className="tag-pill" style={{ marginBottom: 20, display: 'inline-flex' }}>פרויקט לדוגמה</div>
              <h2 className="font-black" style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)', letterSpacing: '-0.02em', marginBottom: 16 }}>
                אתר שמביא <span className="gradient-text">לידים יומיים</span>
              </h2>
              <p style={{ color: '#8ba3c7', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: 24 }}>
                כל פרויקט שאנחנו בונים מחבר בין עיצוב מותגי, מבנה CRO, ומהירות טעינה — שלושת הגורמים שקובעים אם גולש יהפוך ללקוח.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { label: 'עלייה בהמרות', value: '+220%', color: '#4d9fff' },
                  { label: 'PageSpeed Mobile', value: '96/100', color: '#00d4b8' },
                  { label: 'זמן עד לתוצאות', value: '30 יום', color: '#a07dff' },
                ].map((stat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'rgba(255,255,255,0.03)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ color: '#8ba3c7', fontSize: '0.88rem' }}>{stat.label}</span>
                    <span style={{ color: stat.color, fontWeight: 800, fontSize: '1rem' }}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: '1 1 400px', minWidth: 0 }}>
              <WebsiteShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} style={{ padding: 'clamp(48px,7vw,80px) 0', direction: 'rtl', background: 'rgba(26,111,255,0.02)', borderTop: '1px solid rgba(26,111,255,0.08)', borderBottom: '1px solid rgba(26,111,255,0.08)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>מה כולל הפרויקט</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em' }}>
              אתר שבנוי <span className="gradient-text">לתוצאות</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {features.map((f, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: '28px 26px',
                  display: 'flex', gap: 18, alignItems: 'flex-start',
                  opacity: featuresVis ? 1 : 0,
                  transform: featuresVis ? 'none' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 70}ms, transform 0.5s ease ${i * 70}ms`,
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${f.color}15`, border: `1px solid ${f.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: f.color, flexShrink: 0 }}>
                  {f.icon}
                </div>
                <div>
                  <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: 6 }}>{f.title}</h3>
                  <p style={{ color: '#8ba3c7', fontSize: '0.87rem', lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section ref={processRef} style={{ padding: 'clamp(48px,7vw,80px) 0', direction: 'rtl' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>תהליך העבודה</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em' }}>
              מהאסטרטגיה <span className="gradient-text">עד לתוצאות</span>
            </h2>
            <p style={{ color: '#8ba3c7', fontSize: '0.95rem', marginTop: 12 }}>6 שלבים מוכחים — שקיפות מלאה בכל אחד מהם</p>
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
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(26,111,255,0.1)', border: '1px solid rgba(26,111,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.82rem', color: '#4d9fff', flexShrink: 0, letterSpacing: '0.02em' }}>
                  {step.num}
                </div>
                <div>
                  <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: 5 }}>{step.title}</h3>
                  <p style={{ color: '#8ba3c7', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: 'clamp(40px,6vw,72px) 0', direction: 'rtl' }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-black" style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', letterSpacing: '-0.02em', marginBottom: 32, textAlign: 'center' }}>
            שאלות <span className="gradient-text">נפוצות</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card" style={{ padding: '22px 24px' }}>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: 8 }}>{faq.q}</h3>
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
            <h2 className="font-black" style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', letterSpacing: '-0.02em', marginBottom: 12 }}>
              מוכנים לאתר שמביא <span className="gradient-text">תוצאות אמיתיות?</span>
            </h2>
            <p style={{ color: '#8ba3c7', fontSize: '0.95rem', lineHeight: 1.65 }}>
              ספרו לנו על העסק — ונגיד לכם בדיוק מה האתר שלכם צריך לשנות.
            </p>
          </div>
          <ContactForm source="web-design-page" />
        </div>
      </section>
    </>
  )
}
