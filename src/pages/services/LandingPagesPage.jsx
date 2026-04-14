import { Helmet } from 'react-helmet-async'
import { serviceSchema, breadcrumbSchema } from '../../components/shared/SchemaOrg'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/shared/PageHero'
import ContactForm from '../../components/shared/ContactForm'
import BrowserMockup from '../../components/shared/BrowserMockup'

/* ── SVG Icons ── */
const IconTarget = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
)
const IconTrendingDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>
  </svg>
)
const IconLayers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
  </svg>
)
const IconZap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)
const IconBarChart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
)
const IconCode = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
)
const IconMessageCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
)
const IconDollarSign = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
  </svg>
)

const painPoints = [
  { icon: <IconTrendingDown />, text: 'מביאים תנועה — אבל אף אחד לא ממיר ללידים' },
  { icon: <IconDollarSign />,  text: 'תקציב פרסום שנשרף כי הדף לא עושה את העבודה' },
  { icon: <IconMessageCircle />, text: 'המסר הכללי של הדף לא פוגע ב"כאב" של הלקוח' },
  { icon: <IconZap />,         text: 'הדף איטי — מאבד 20% מהגולשים כל שנייה נוספת' },
]

const features = [
  { icon: <IconLayers />,     color: '#00c8ff', title: 'מבנה CRO מוכח',           desc: 'כותרת שתופסת → כאב → הבטחה → הוכחה → CTA. מבנה שנבדק על אלפי עמודים.' },
  { icon: <IconMessageCircle />, color: '#4d9fff', title: 'כותרת שתופסת תוך 3 שניות', desc: '3 שניות להשאיר גולש. הכותרת שלנו עושה את זה — עם מסר שישיר לכאב של הקהל.' },
  { icon: <IconTarget />,     color: '#a07dff', title: 'Social Proof חזקה',        desc: 'ביקורות, תוצאות, ולוגואים — ישראלים קונים מ"ראיתי שהם עשו לחבר שלי".' },
  { icon: <IconBarChart />,   color: '#00d478', title: 'A/B Testing מובנה',        desc: 'בודקים כותרות, CTAs ותמונות — ומשאירים רק מה שממיר יותר.' },
  { icon: <IconZap />,        color: '#ffb347', title: 'מהירות טעינה קריטית',      desc: '95+ ב-PageSpeed. כל שנייה שלא נטענת = עוד 20% נטישה.' },
  { icon: <IconCode />,       color: '#00d4b8', title: 'Pixel ו-Tracking מלא',    desc: 'Meta Pixel, GTM — כל ליד נמדד ומיוחס לקמפיין הנכון.' },
]

const results = [
  { metric: '3.2×', label: 'עלייה ממוצעת בשיעור ההמרה', color: '#00c8ff' },
  { metric: '-41%', label: 'ירידה בעלות לליד', color: '#00d478' },
  { metric: '< 2s', label: 'זמן טעינה ממוצע', color: '#4d9fff' },
  { metric: '95+', label: 'ציון PageSpeed', color: '#a07dff' },
]

const faqs = [
  { q: 'מה ההבדל בין דף נחיתה לאתר רגיל?', a: 'דף נחיתה מיועד לפעולה אחת ספציפית — מילוי טופס, שיחת טלפון, או רכישה. אין תפריט, אין הסחות דעת. רק המסר ה-CTA.' },
  { q: 'כמה זמן לוקח לבנות דף נחיתה?', a: 'דף נחיתה סטנדרטי — 5-10 ימים עסקיים מהאישור ועד ההשקה.' },
  { q: 'האם אתם כותבים את הטקסט?', a: 'כן. הקופי הוא חלק מהפרויקט. אנחנו כותבים עברית ואנגלית המותאמת לקהל היעד ולפלטפורמת הפרסום.' },
  { q: 'האם אפשר לחבר לקמפיין Meta/Google?', a: 'בהחלט. זו המטרה. בונים את הדף כך שיהיה מסונכרן עם המסר של הקמפיין.' },
]

/* ── Landing Page Mock ── */
function LandingShowcase() {
  return (
    <BrowserMockup url="client-landing.velo-studio.com" accentColor="#00c8ff">
      <div style={{ height: 340, background: 'linear-gradient(170deg, #050b18 0%, #080f20 60%, #060d1a 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'radial-gradient(ellipse at 50% 0%, rgba(0,200,255,0.08) 0%, transparent 70%)' }} />
        {/* Fake hero content */}
        <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14 }}>
          <div style={{ background: 'rgba(0,200,255,0.1)', border: '1px solid rgba(0,200,255,0.25)', borderRadius: 100, padding: '4px 14px', width: 'fit-content' }}>
            <div style={{ width: 80, height: 7, borderRadius: 3, background: 'rgba(0,200,255,0.5)' }} />
          </div>
          <div style={{ width: '80%', height: 20, borderRadius: 4, background: 'rgba(255,255,255,0.2)' }} />
          <div style={{ width: '70%', height: 16, borderRadius: 4, background: 'rgba(255,255,255,0.13)' }} />
          <div style={{ width: '60%', height: 12, borderRadius: 4, background: 'rgba(255,255,255,0.08)' }} />
          {/* CTA button */}
          <div style={{ width: 180, height: 42, borderRadius: 21, background: 'linear-gradient(135deg, #0055ff, #00c8ff)', boxShadow: '0 8px 32px rgba(0,200,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 4 }}>
            <div style={{ width: 100, height: 9, borderRadius: 4, background: 'rgba(255,255,255,0.7)' }} />
          </div>
          <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.65rem' }}>ללא התחייבות • תוך כמה שעות</div>
        </div>
        {/* Trust logos row */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 28px', background: 'rgba(0,0,0,0.3)', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: 16, justifyContent: 'center' }}>
          {[56, 44, 60, 48, 52].map((w, i) => (
            <div key={i} style={{ width: w, height: 16, borderRadius: 4, background: 'rgba(255,255,255,0.08)' }} />
          ))}
        </div>
        {/* Conversion badge */}
        <div style={{ position: 'absolute', top: 20, left: 20, background: 'rgba(0,212,120,0.15)', border: '1px solid rgba(0,212,120,0.3)', borderRadius: 8, padding: '6px 12px' }}>
          <div style={{ color: '#00d478', fontSize: '0.7rem', fontWeight: 700 }}>CVR 8.4%</div>
          <div style={{ color: 'rgba(0,212,120,0.5)', fontSize: '0.6rem' }}>שיעור המרה</div>
        </div>
      </div>
    </BrowserMockup>
  )
}

export default function LandingPagesPage() {
  const [resultsRef, resultsVis] = useReveal()
  const [featuresRef, featuresVis] = useReveal()

  return (
    <>
      <Helmet>
        <title>עיצוב דף נחיתה | דפי נחיתה ממירים לעסקים | VELO Studio</title>
        <meta name="description" content="עיצוב דפי נחיתה ממוקדי המרות לעסקים בישראל — CRO, A/B testing ומהירות טעינה שמורידים עלות לליד. VELO Studio בונה דפי נחיתה שהופכים קליקים ללידים איכותיים." />
        <meta name="keywords" content="עיצוב דף נחיתה, דפי נחיתה ממירים, דף נחיתה לעסק, landing page ישראל, הורדת עלות לליד, דף נחיתה ממוקד המרות, CRO ישראל, בניית דף נחיתה, דף נחיתה לקמפיין, דף נחיתה לנדלן, דף נחיתה לפרסום" />
        <meta property="og:title" content="עיצוב דפי נחיתה | VELO Studio" />
        <meta property="og:description" content="דפי נחיתה ממוקדי המרות — CRO, A/B testing ומהירות שמורידים עלות לליד. לעסקים בישראל." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:url" content="https://liorvelikin.github.io/velo-website/services/landing-pages" />
        <meta property="og:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="עיצוב דפי נחיתה | VELO Studio" />
        <meta name="twitter:description" content="דפי נחיתה ממוקדי המרות — CRO, A/B testing ומהירות שמורידים עלות לליד." />
        <meta name="twitter:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/services/landing-pages" />
        <script type="application/ld+json">{serviceSchema('עיצוב דפי נחיתה', 'דפי נחיתה ממוקדי המרות שהופכים קליקים ללידים — CRO ו-A/B testing.', '/services/landing-pages')}</script>
        <script type="application/ld+json">{breadcrumbSchema([{name:'ראשי',path:'/'},{name:'שירותים',path:'/services'},{name:'דפי נחיתה',path:'/services/landing-pages'}])}</script>
      </Helmet>

      <PageHero
        tag="דפי נחיתה"
        title="קליקים שהופכים ללידים"
        accent="ללידים"
        subtitle="דף נחיתה טוב לא מחכה שהגולש יחליט — הוא מוביל אותו לפעולה. מבנה CRO, מהירות ומסר מדויק."
      />

      {/* Results metrics */}
      <section ref={resultsRef} style={{ padding: 'clamp(24px,4vw,48px) 0', direction: 'rtl', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {results.map((r, i) => (
              <div
                key={i}
                style={{
                  textAlign: 'center', padding: '20px 16px',
                  borderLeft: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  opacity: resultsVis ? 1 : 0,
                  transform: resultsVis ? 'none' : 'translateY(12px)',
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                }}
              >
                <div style={{ color: r.color, fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1 }}>{r.metric}</div>
                <div style={{ color: '#6a88ad', fontSize: '0.78rem', marginTop: 6 }}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section style={{ padding: 'clamp(48px,7vw,80px) 0', direction: 'rtl' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>הבעיה</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em' }}>
              למה הדף שלכם <span className="gradient-text">לא ממיר?</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {painPoints.map((p, i) => (
              <div key={i} className="glass-card" style={{ padding: '22px 24px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(0,200,255,0.1)', border: '1px solid rgba(0,200,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00c8ff', flexShrink: 0 }}>
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
              <div className="tag-pill" style={{ marginBottom: 20, display: 'inline-flex' }}>דף נחיתה לדוגמה</div>
              <h2 className="font-black" style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)', letterSpacing: '-0.02em', marginBottom: 16 }}>
                מבנה שמוביל <span className="gradient-text">לפעולה</span>
              </h2>
              <p style={{ color: '#8ba3c7', fontSize: '0.92rem', lineHeight: 1.75, marginBottom: 24 }}>
                כל דף נחיתה שאנחנו בונים עומד בתבנית AIDA — Attention, Interest, Desire, Action. כל שורה כתובה עם מטרה. כל CTA מכוון.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
                {[
                  { step: '1', label: 'כותרת שמדברת לכאב', color: '#00c8ff' },
                  { step: '2', label: 'הוכחה חברתית ומספרים', color: '#4d9fff' },
                  { step: '3', label: 'הצעת ערך ייחודית', color: '#a07dff' },
                  { step: '4', label: 'CTA ברור ובלתי נמנע', color: '#00d478' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.01)', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: `${item.color}15`, border: `1px solid ${item.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: item.color, fontWeight: 800, fontSize: '0.78rem' }}>{item.step}</div>
                    <span style={{ color: '#8ba3c7', fontSize: '0.88rem' }}>{item.label}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 'auto', opacity: 0.6 }}><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: '1 1 400px', minWidth: 0 }}>
              <LandingShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} style={{ padding: 'clamp(48px,7vw,80px) 0', direction: 'rtl', background: 'rgba(0,200,255,0.02)', borderTop: '1px solid rgba(0,200,255,0.07)', borderBottom: '1px solid rgba(0,200,255,0.07)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>מה כולל הפרויקט</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em' }}>
              דף שבנוי <span className="gradient-text">להמרה</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {features.map((f, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: '28px 26px', display: 'flex', gap: 18, alignItems: 'flex-start',
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
              רוצים דף שמוריד את <span className="gradient-text">עלות הליד?</span>
            </h2>
            <p style={{ color: '#8ba3c7', fontSize: '0.95rem', lineHeight: 1.65 }}>
              ספרו לנו על הקמפיין — ונגיד לכם מה הדף שלכם צריך לשנות.
            </p>
          </div>
          <ContactForm source="landing-pages-page" />
        </div>
      </section>
    </>
  )
}
