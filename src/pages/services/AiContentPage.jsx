import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/shared/PageHero'
import ContactForm from '../../components/shared/ContactForm'

/* ── SVG Icons ── */
const IconFilm = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/>
  </svg>
)
const IconImage = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
  </svg>
)
const IconEdit = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
)
const IconCalendar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)
const IconZap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)
const IconDollarSign = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
  </svg>
)
const IconRefreshCw = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
  </svg>
)
const IconTarget = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
)

const contentTypes = [
  {
    icon: <IconFilm />,
    color: '#a07dff',
    tag: 'וידאו',
    title: 'UGC & Ads Creatives',
    desc: 'סרטוני פרסומת ו-UGC שנראים כמו הפקה אמיתית — בשבריר מהעלות. מושלם לקמפיינים ב-Meta ו-TikTok.',
    platforms: ['Reels', 'TikTok', 'YouTube Shorts', 'Stories'],
  },
  {
    icon: <IconImage />,
    color: '#00c8ff',
    tag: 'תמונות',
    title: 'Product & Brand Photography',
    desc: 'תמונות מוצר ומותג ברמה פרופסיונלית בלי סטודיו. עשרות וריאציות לכל מוצר — לכל פלטפורמה.',
    platforms: ['Instagram', 'eCommerce', 'Ads', 'Catalog'],
  },
  {
    icon: <IconEdit />,
    color: '#00d478',
    tag: 'קופי',
    title: 'תוכן שיווקי בעברית',
    desc: 'פוסטים, כתבות, ו-ad copy מותאמים לקהל הישראלי — כתובים בקול המותג שלכם, לא קול AI גנרי.',
    platforms: ['Facebook', 'LinkedIn', 'Blog', 'Email'],
  },
  {
    icon: <IconCalendar />,
    color: '#ffb347',
    tag: 'אסטרטגיה',
    title: 'Pipeline תוכן חודשי',
    desc: 'לוח שנה מלא, קריאייטיבים מוכנים, ולוגיסטיקה — להיראות פעילים ומקצועיים בלי להקדיש שעות.',
    platforms: ['30 פוסטים', '20 Stories', '8 Reels', '4 כתבות'],
  },
]

const benefits = [
  { icon: <IconZap />,        color: '#ffb347', title: 'מהיר פי 10',         desc: 'תוכן שלוקח שבועות — מוכן תוך ימים.' },
  { icon: <IconDollarSign />, color: '#00d478', title: 'עלות נמוכה ב-80%',   desc: 'הפקה מקצועית בלי עלות צוות, ציוד, ומיקום.' },
  { icon: <IconRefreshCw />,  color: '#00c8ff', title: 'וריאציות ללא הגבלה', desc: 'בודקים מה עובד — ומייצרים עוד מזה.' },
  { icon: <IconTarget />,     color: '#a07dff', title: 'מותאם לפלטפורמה',   desc: 'פורמט, טון ואורך נכון לכל ערוץ.' },
]

const faqs = [
  { q: 'האם התוכן ייראה "AI"?', a: 'לא. אנחנו עובדים עם AI כלי לייצור אבל מעצבים ועורכים את כל הפרויקטים ידנית. התוצאה נראית פרופסיונלית, לא גנרית.' },
  { q: 'מה הפלטפורמות שאתם מייצרים עבורן?', a: 'Instagram, Facebook, TikTok, YouTube Shorts, LinkedIn, ואתר. כל תוכן מותאם לפורמט ולטון של הפלטפורמה.' },
  { q: 'כמה תוכן אפשר לקבל בחודש?', a: 'תלוי בחבילה — החל מ-20 קריאייטיבים ועד 100+. בונים יחד לוח שנה תוכן חודשי מלא.' },
  { q: 'האם אני צריך לספק תמונות/וידאו?', a: 'לא חובה. עם AI generative אנחנו יכולים לבנות מ-0. אם יש לכם חומרים קיימים — זה רק יוסיף לאיכות.' },
]

/* ── Content type visual card ── */
function ContentTypeCard({ ct, index, visible }) {
  return (
    <div
      className="glass-card"
      style={{
        padding: '28px 26px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(24px)',
        transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 16 }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: `${ct.color}15`, border: `1px solid ${ct.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: ct.color, flexShrink: 0 }}>
          {ct.icon}
        </div>
        <div>
          <span style={{ background: `${ct.color}12`, border: `1px solid ${ct.color}25`, borderRadius: 100, padding: '2px 10px', fontSize: '0.68rem', fontWeight: 700, color: ct.color, display: 'inline-block', marginBottom: 6 }}>
            {ct.tag}
          </span>
          <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', margin: 0 }}>{ct.title}</h3>
        </div>
      </div>
      <p style={{ color: '#8ba3c7', fontSize: '0.87rem', lineHeight: 1.65, marginBottom: 16 }}>{ct.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {ct.platforms.map((p, j) => (
          <span key={j} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100, padding: '3px 10px', fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', fontWeight: 600 }}>
            {p}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Visual mockup of content pipeline ── */
function ContentPipelineVisual() {
  return (
    <div style={{ padding: 'clamp(24px,4vw,40px)', borderRadius: 20, background: 'rgba(160,125,255,0.04)', border: '1px solid rgba(160,125,255,0.14)' }}>
      <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: 20, textAlign: 'center' }}>Pipeline תוכן חודשי לדוגמה</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          { label: 'Reels / TikToks', count: 8, color: '#a07dff', pct: 40 },
          { label: 'פוסטים קבועים', count: 16, color: '#00c8ff', pct: 80 },
          { label: 'Stories', count: 20, color: '#00d478', pct: 100 },
          { label: 'כתבות / Blog', count: 4, color: '#ffb347', pct: 20 },
        ].map((item, i) => (
          <div key={i}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ color: '#8ba3c7', fontSize: '0.82rem' }}>{item.label}</span>
              <span style={{ color: item.color, fontWeight: 700, fontSize: '0.82rem' }}>{item.count} / חודש</span>
            </div>
            <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
              <div style={{ width: `${item.pct}%`, height: '100%', borderRadius: 3, background: `linear-gradient(90deg, ${item.color}cc, ${item.color}66)` }} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ color: '#6a88ad', fontSize: '0.8rem' }}>סה"כ קריאייטיבים</span>
        <span style={{ color: '#fff', fontWeight: 800, fontSize: '1.1rem' }}>48 / חודש</span>
      </div>
    </div>
  )
}

export default function AiContentPage() {
  const [typesRef, typesVis] = useReveal()
  const [benefitsRef, benefitsVis] = useReveal()

  return (
    <>
      <Helmet>
        <title>יצירת תוכן AI לעסקים | VELO Studio — הפקה פרופסיונלית בשבריר המחיר</title>
        <meta name="description" content="יצירת תוכן שיווקי AI לעסקים בישראל — UGC, פרסומות, תמונות מותג ותוכן לרשתות חברתיות. הפקה פרופסיונלית במחיר נגיש. VELO Studio." />
        <meta name="keywords" content="תוכן AI לעסקים, יצירת תוכן שיווקי, UGC ישראל, תמונות AI למותג, תוכן לרשתות חברתיות" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/services/ai-content" />
      </Helmet>

      <PageHero
        tag="תוכן AI"
        title="הפקת תוכן שנראה מיליון דולר"
        accent="מיליון דולר"
        subtitle="UGC, פרסומות, תמונות מותג ותוכן לרשתות — ברמה פרופסיונלית, בשבריר מהזמן והעלות הרגילה."
      />

      {/* Benefits strip */}
      <section ref={benefitsRef} style={{ padding: 'clamp(24px,4vw,48px) 0', direction: 'rtl', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {benefits.map((b, i) => (
              <div
                key={i}
                style={{
                  textAlign: 'center', padding: '20px 14px',
                  borderLeft: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  opacity: benefitsVis ? 1 : 0,
                  transform: benefitsVis ? 'none' : 'translateY(10px)',
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                }}
              >
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${b.color}12`, border: `1px solid ${b.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: b.color, margin: '0 auto 10px' }}>
                  {b.icon}
                </div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem', marginBottom: 4 }}>{b.title}</div>
                <div style={{ color: '#6a88ad', fontSize: '0.76rem', lineHeight: 1.4 }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section ref={typesRef} style={{ padding: 'clamp(48px,7vw,80px) 0', direction: 'rtl' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>סוגי תוכן</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em' }}>
              כל סוג תוכן שהמותג <span className="gradient-text">צריך לצמוח</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {contentTypes.map((ct, i) => (
              <ContentTypeCard key={i} ct={ct} index={i} visible={typesVis} />
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline visual */}
      <section style={{ padding: 'clamp(32px,5vw,60px) 0', direction: 'rtl' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }}>
            <div style={{ flex: '1 1 320px', minWidth: 0 }}>
              <div className="tag-pill" style={{ marginBottom: 20, display: 'inline-flex' }}>ניהול תוכן</div>
              <h2 className="font-black" style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)', letterSpacing: '-0.02em', marginBottom: 16 }}>
                מכונת תוכן <span className="gradient-text">שעובדת לבד</span>
              </h2>
              <p style={{ color: '#8ba3c7', fontSize: '0.92rem', lineHeight: 1.75, marginBottom: 20 }}>
                אנחנו לא רק מייצרים תוכן — אנחנו בונים מערכת שמייצרת תוכן חודש אחרי חודש. לוח שנה, קריאייטיבים, scheduling — הכל מנוהל.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  'ניתוח מה מביא engagement על הפלטפורמות שלכם',
                  'ייצור קריאייטיבים מותאמים לביצועים',
                  'תזמון פרסומים אוטומטי',
                  'דוח חודשי עם מדדים וSights',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(160,125,255,0.15)', border: '1px solid rgba(160,125,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#a07dff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span style={{ color: '#8ba3c7', fontSize: '0.88rem', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: '1 1 340px', minWidth: 0 }}>
              <ContentPipelineVisual />
            </div>
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
              רוצים תוכן שמייצר <span className="gradient-text">תשומת לב ומכירות?</span>
            </h2>
            <p style={{ color: '#8ba3c7', fontSize: '0.95rem', lineHeight: 1.65 }}>
              ספרו לנו על המותג — ונגיד לכם איזה תוכן יעבוד הכי טוב עבורכם.
            </p>
          </div>
          <ContactForm source="ai-content-page" />
        </div>
      </section>
    </>
  )
}
