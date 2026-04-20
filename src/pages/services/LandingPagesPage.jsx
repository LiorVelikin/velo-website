import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/shared/PageHero'
import ContactForm from '../../components/shared/ContactForm'
import { serviceSchema, breadcrumbSchema } from '../../components/shared/SchemaOrg'

/* ── Icons ── */
const IconLayers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
  </svg>
)
const IconMessageCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
)
const IconTarget = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
)
const IconBarChart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
)
const IconZap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)
const IconCode = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
)

const features = [
  { icon: <IconLayers />,        color: '#00c8ff', title: 'מבנה CRO מוכח',             desc: 'כותרת → כאב → הבטחה → הוכחה → CTA. מבנה שנבדק על אלפי עמודים.' },
  { icon: <IconMessageCircle />, color: '#4d9fff', title: 'כותרת שפוגעת בכאב',         desc: '3 שניות להחליט אם להישאר — הכותרת שלנו מדברת ישיר לקהל.' },
  { icon: <IconTarget />,        color: '#a07dff', title: 'Social Proof ישראלית',       desc: 'ביקורות, תוצאות, ולוגואים — ישראלים קונים מ"ראיתי שהם עשו לחבר שלי".' },
  { icon: <IconBarChart />,      color: '#00d478', title: 'A/B Testing',                desc: 'בודקים כותרות ו-CTAs עד שמוצאים מה עובד יותר.' },
  { icon: <IconZap />,           color: '#ffb347', title: 'מהירות קריטית',              desc: '95+ PageSpeed — לא מאבדים גולשים בגלל טעינה איטית.' },
  { icon: <IconCode />,          color: '#00d4b8', title: 'Tracking מלא',               desc: 'Meta Pixel, GTM — כל ליד מיוחס לקמפיין הנכון.' },
]

const processSteps = [
  { num: '01', title: 'הבנת הקמפיין וקהל היעד',    desc: 'מבינים מה הקמפיין מבטיח, מי הקהל, ומה הכאב שצריך לפגוע.' },
  { num: '02', title: 'כתיבת קופי וארכיטקטורה',    desc: 'כותבים את הטקסט ומגדירים את המבנה לפי מסגרת AIDA.' },
  { num: '03', title: 'עיצוב ופיתוח',               desc: 'עיצוב ויזואלי שתומך במסר, ובנייה מהירה ונקייה.' },
  { num: '04', title: 'חיבור לקמפיין + A/B Testing', desc: 'מחברים לפיקסל ולקמפיין, ומריצים בדיקות על הכותרת וה-CTA.' },
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
  { niche: 'חלונות ודלתות', title: 'Windows 4U — דף לידים', url: 'https://windows-4u.com/landing-page', accent: '#1a6fff', live: true },
  { niche: 'נדל"ן', title: 'נווה הירוק — פרויקט יוקרה', url: 'https://liorvelikin.github.io/velo-website/mockups/landing/realestate/', accent: '#c9a84c', live: false },
  { niche: 'כושר ואימונים', title: 'FitLife Studio — מנוי לחדר כושר', url: 'https://liorvelikin.github.io/velo-website/mockups/landing/fitness/', accent: '#ff5722', live: false },
  { niche: 'קוסמטיקה ויופי', title: 'GlowBar — טיפולי פנים', url: 'https://liorvelikin.github.io/velo-website/mockups/landing/beauty/', accent: '#e8a0bf', live: false },
  { niche: 'שיפוצים', title: 'ProHome — שיפוץ דירה', url: 'https://liorvelikin.github.io/velo-website/mockups/landing/renovation/', accent: '#ffc107', live: false },
  { niche: 'קורס דיגיטלי', title: 'DigiMaster — קורס מכירות', url: 'https://liorvelikin.github.io/velo-website/mockups/landing/course/', accent: '#6c3ee8', live: false },
  { niche: 'ביטוח ופיננסים', title: 'Shield Financial — ביטוח חיים', url: 'https://liorvelikin.github.io/velo-website/mockups/landing/insurance/', accent: '#00d4ff', live: false },
]

const faqs = [
  { q: 'מה ההבדל בין דף נחיתה לאתר?', a: 'דף נחיתה מיועד לפעולה אחת ספציפית — מילוי טופס, שיחת טלפון, או רכישה. אין תפריט, אין הסחות דעת. רק המסר וה-CTA.' },
  { q: 'כמה זמן לוקח לבנות דף נחיתה?', a: 'דף נחיתה סטנדרטי — 5-10 ימים עסקיים מהאישור ועד ההשקה.' },
  { q: 'האם אתם כותבים את הטקסט?', a: 'כן. הקופי הוא חלק מהפרויקט. אנחנו כותבים עברית המותאמת לקהל היעד ולפלטפורמת הפרסום.' },
  { q: 'האם אפשר לחבר לקמפיין Meta/Google?', a: 'בהחלט. זו המטרה. בונים את הדף כך שיהיה מסונכרן עם המסר של הקמפיין ועם הפיקסל.' },
]

export default function LandingPagesPage() {
  const [featuresRef, featuresVis] = useReveal()
  const [processRef, processVis] = useReveal()

  return (
    <>
      <Helmet>
        <title>עיצוב דף נחיתה | דפי נחיתה ממירים לקמפיינים | VELO DIGITAL</title>
        <meta name="description" content="בניית דפי נחיתה ממוקדי המרות לעסקים בישראל — מבנה CRO, קופי ממיר ומהירות טעינה. מוריד עלות לליד ומגדיל המרות מקמפיינים ב-Meta ו-Google." />
        <meta property="og:title" content="עיצוב דף נחיתה | דפי נחיתה ממירים לקמפיינים | VELO DIGITAL" />
        <meta property="og:description" content="בניית דפי נחיתה ממוקדי המרות לעסקים בישראל — מבנה CRO, קופי ממיר ומהירות טעינה." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:url" content="https://liorvelikin.github.io/velo-website/services/landing-pages" />
        <meta property="og:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/services/landing-pages" />
        <script type="application/ld+json">{serviceSchema('עיצוב דפי נחיתה', 'דפי נחיתה ממוקדי המרות לעסקים בישראל — CRO, A/B testing ומהירות.', '/services/landing-pages')}</script>
        <script type="application/ld+json">{breadcrumbSchema([{ name: 'ראשי', path: '/' }, { name: 'שירותים', path: '/services' }, { name: 'דפי נחיתה', path: '/services/landing-pages' }])}</script>
      </Helmet>

      <PageHero
        tag="דפי נחיתה"
        title="דף נחיתה שמוריד עלות לליד"
        accent="מוריד עלות לליד"
        subtitle="מבנה CRO מוכח, קופי שפוגע בכאב, ומהירות שלא מאבדת גולשים — כל דף נחיתה שאנחנו בונים עובד עם הקמפיין שלכם."
      />

      {/* על השירות */}
      <section style={{ padding: 'clamp(56px,8vw,96px) 0', direction: 'rtl' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em', color: '#0a0f1e', marginBottom: 24 }}>
            דף נחיתה לקמפיין Meta ו-Google — מה ההבדל?
          </h2>
          <p style={{ color: '#4a5d7a', fontSize: '1rem', lineHeight: 1.9, marginBottom: 32 }}>
            עסקים רבים בישראל שולחים תנועה ממומנת — Meta Ads, Google Ads — ישירות לדף הבית שלהם. זה הטעות הנפוצה ביותר בפרסום דיגיטלי. דף הבית לא ממיר תנועה ממומנת כי הוא כללי מדי. landing page ישראל שעובד הוא דף שממוקד למסר אחד, לקהל אחד, ולפעולה אחת. הוא מוריד את עלות לליד כי שיעור ההמרה שלו גבוה יותר — ולכן אתם משלמים פחות על כל ליד שמגיע. כשמריצים קמפיין Meta Ads בישראל עם דף נחיתה ממוקד, ההבדל בעלות לליד יכול להיות משמעותי מאוד לעומת שליחה לדף כללי.
          </p>
          <h3 className="font-black" style={{ fontSize: 'clamp(1.2rem,2.2vw,1.7rem)', letterSpacing: '-0.02em', color: '#0a0f1e', marginBottom: 16 }}>
            מבנה CRO שנבדק — מהכותרת ועד הטופס
          </h3>
          <p style={{ color: '#4a5d7a', fontSize: '1rem', lineHeight: 1.9 }}>
            אנחנו בונים כל דף לפי מסגרת AIDA — Attention, Interest, Desire, Action. הכותרת תופסת את תשומת הלב, הגוף מדבר לכאב ומציג את הפתרון, ה-CTA מוביל לפעולה. אנחנו כותבים את הקופי בעברית שמדברת לקהל הישראלי — ישיר, ברור, וללא עודף מילים. בנוסף אנחנו מריצים A/B testing על הכותרת וה-CTA, ומתחברים לקמפיין כדי שהמסר בדף יהיה זהה למסר במודעה. זה מה שמוריד עלות לליד ומגדיל המרות.
          </p>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} style={{ padding: 'clamp(56px,8vw,96px) 0', direction: 'rtl', background: 'rgba(26,111,255,0.025)', borderTop: '1px solid rgba(26,111,255,0.07)', borderBottom: '1px solid rgba(26,111,255,0.07)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>מה כולל הפרויקט</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.6rem,3.2vw,2.4rem)', letterSpacing: '-0.02em', color: '#0a0f1e' }}>
              דף שבנוי <span className="gradient-text">להמרה</span>
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
              מהבריף <span className="gradient-text">עד ההשקה</span>
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
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(0,200,255,0.1)', border: '1px solid rgba(0,200,255,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.82rem', color: '#00c8ff', flexShrink: 0 }}>
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
            <p style={{ color: '#4a5d7a', fontSize: '0.95rem' }}>כל עסק שמריץ פרסום ממומן — ייהנה מדף נחיתה ממוקד</p>
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
              דפי נחיתה <span className="gradient-text">שבנינו</span>
            </h2>
            <p style={{ color: '#4a5d7a', fontSize: '0.98rem', lineHeight: 1.75, maxWidth: 580, margin: '16px auto 0' }}>
              לחצו על כל דף כדי לראות אותו בפעולה
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div
                  className="glass-card"
                  style={{ padding: '28px 26px', cursor: 'pointer', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                    <div className="tag-pill">{p.niche}</div>
                    <span style={{
                      fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: 100,
                      background: p.live ? 'rgba(0,212,120,0.12)' : 'rgba(26,111,255,0.1)',
                      border: `1px solid ${p.live ? 'rgba(0,212,120,0.3)' : 'rgba(26,111,255,0.2)'}`,
                      color: p.live ? '#00d478' : '#4d9fff',
                    }}>
                      {p.live ? 'Live' : 'Demo'}
                    </span>
                  </div>
                  <div style={{
                    height: 120, borderRadius: 10,
                    background: `linear-gradient(135deg, ${p.accent}18 0%, ${p.accent}08 100%)`,
                    border: `1px solid ${p.accent}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16,
                  }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={p.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                      <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                  </div>
                  <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.98rem', marginBottom: 10 }}>{p.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#4d9fff', fontSize: '0.82rem', fontWeight: 600 }}>
                    <span>כניסה לדף</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </div>
                </div>
              </a>
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
              רוצים דף שמוריד את <span className="gradient-text">עלות הליד?</span>
            </h2>
            <p style={{ color: '#4a5d7a', fontSize: '0.95rem', lineHeight: 1.65 }}>
              ספרו לנו על הקמפיין — ונגיד לכם מה הדף שלכם צריך לשנות.
            </p>
          </div>
          <ContactForm source="landing-pages-page" />
        </div>
      </section>
    </>
  )
}
