import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/shared/PageHero'
import ContactForm from '../../components/shared/ContactForm'
import { serviceSchema, breadcrumbSchema } from '../../components/shared/SchemaOrg'

/* ── SVG Icons ── */
const IconTrendingUp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
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
const IconRefreshCw = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
  </svg>
)
const IconFilter = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
)
const IconCode = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
)
const IconDollarSign = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
  </svg>
)
const IconAlertTriangle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
)

const painPoints = [
  { icon: <IconDollarSign />, text: 'תקציב פרסום שנשרף — בלי לקוחות שמגיעים' },
  { icon: <IconTarget />,     text: 'קמפיינים שמגיעים לאנשים הלא נכונים' },
  { icon: <IconBarChart />,   text: 'אין מעקב — לא יודעים מה עובד ומה לא' },
  { icon: <IconRefreshCw />,  text: 'אין retargeting — לידים קרים שלא חוזרים' },
]

const channels = [
  {
    name: 'Meta Ads',
    colorPrimary: '#4d9fff',
    colorBg: 'rgba(77,159,255,0.08)',
    colorBorder: 'rgba(77,159,255,0.2)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4d9fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
    desc: 'Facebook ו-Instagram. הכי חזק לפניות, לידים, ומותג. Targeting מדויק לפי תחומי עניין ו-lookalike.',
    tags: ['Reels Ads', 'Lead Ads', 'Retargeting', 'Lookalike'],
  },
  {
    name: 'Google Ads',
    colorPrimary: '#00d478',
    colorBg: 'rgba(0,212,120,0.08)',
    colorBorder: 'rgba(0,212,120,0.2)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00d478" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
      </svg>
    ),
    desc: 'Search, Display, ו-YouTube. מגיעים לאנשים שכבר מחפשים מה שאתם מוכרים — כוונת רכישה גבוהה.',
    tags: ['Search', 'Shopping', 'Performance Max', 'YouTube'],
  },
  {
    name: 'Retargeting',
    colorPrimary: '#a07dff',
    colorBg: 'rgba(160,125,255,0.08)',
    colorBorder: 'rgba(160,125,255,0.2)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a07dff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
      </svg>
    ),
    desc: 'מי שביקר באתר, הוסיף לעגלה, או צפה בסרטון — חוזרים אליהם עם מסר ממוקד עד שמקנים.',
    tags: ['Dynamic Ads', 'Custom Audiences', 'Cross-platform', 'Sequential'],
  },
  {
    name: 'Creative Studio',
    colorPrimary: '#ffb347',
    colorBg: 'rgba(255,179,71,0.08)',
    colorBorder: 'rgba(255,179,71,0.2)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffb347" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.38" y1="12" x2="13.12" y2="2.06"/><line x1="9.69" y1="16" x2="3.95" y2="6.06"/><line x1="14.31" y1="16" x2="2.83" y2="16"/><line x1="16.62" y1="12" x2="10.88" y2="21.94"/>
      </svg>
    ),
    desc: 'קריאייטיבים שמבדלים — טקסטים, תמונות וסרטונים שמשיגים את תשומת הלב ולא נראים כמו פרסומת.',
    tags: ['Video Ads', 'Static', 'Carousel', 'UGC Style'],
  },
]

const process = [
  { num: '01', title: 'מחקר קהל ומתחרים',   desc: 'מבינים מי הלקוח האידיאלי, מה הכאבים שלו, ואיך המתחרים שלכם מפרסמים.' },
  { num: '02', title: 'בניית קריאייטיב',     desc: 'טקסטים, תמונות וסרטונים שמשיגים את תשומת הלב — ולא נראים כמו פרסומת.' },
  { num: '03', title: 'הגדרת Tracking',      desc: 'Pixel, Conversions API, ו-Google Tag — כל ליד נמדד ומיוחס לקמפיין הנכון.' },
  { num: '04', title: 'השקה ואופטימיזציה',   desc: 'משיקים בתקציב מבוקר, בודקים מה עובד, ומגדילים את מה שמביא תוצאות.' },
  { num: '05', title: 'Scale ורחבות',        desc: 'קמפיין שעובד — מגדילים בהדרגה. כדי לשמר ROI בזמן גדילה.' },
  { num: '06', title: 'דיווח שקוף',          desc: 'דוח חודשי ברור — הוצאות, לידים, עלות לליד, ומה אנחנו עושים הלאה.' },
]

const faqs = [
  { q: 'מה התקציב המינימלי לפרסום?',         a: 'מעל 3,000 ש"ח לחודש לתקציב מדיה. מתחת לזה קשה לייצר נתונים משמעותיים לאופטימיזציה.' },
  { q: 'כמה זמן עד שרואים תוצאות?',         a: 'קמפיינים ב-Meta — בדרך כלל תוצאות ראשוניות תוך 7-14 יום. Google Search — מהיר יותר כי מגיעים לכוונת רכישה.' },
  { q: 'האם אתם עובדים עם תקציב קבוע?',      a: 'כן. מגדירים ביחד תקציב חודשי ועמלת ניהול. ללא הפתעות.' },
  { q: 'האם צריך גם דף נחיתה?',             a: 'ממליצים בחום. קמפיין מעולה + דף נחיתה חלש = כסף נשרף. אנחנו בונים גם את הדפים.' },
]

export default function PaidAdsPage() {
  const [channelsRef, channelsVis] = useReveal()
  const [processRef, processVis] = useReveal()
  const [metricsRef, metricsVis] = useReveal()

  return (
    <>
      <Helmet>
        <title>ניהול פרסום ממומן | Meta Ads ו-Google Ads בישראל | VELO DIGITAL</title>
        <meta name="description" content="ניהול קמפיינים ממומנים ב-Meta Ads וGoogle Ads לעסקים בישראל — לידים איכותיים, ROAS מוכח ואופטימיזציה שוטפת. VELO DIGITAL מביא תוצאות מדידות, לא הבטחות." />
        <meta name="keywords" content="ניהול קמפיינים ממומנים, Meta Ads ישראל, Google Ads ישראל, פרסום ממומן לעסקים, לידים ממומנים, ניהול פייסבוק אדס, ניהול גוגל אדס, פרסום בפייסבוק, פרסום בגוגל, ROAS גבוה, ניהול תקציב פרסום, ריטארגטינג" />
        <meta property="og:title" content="ניהול פרסום ממומן | VELO DIGITAL" />
        <meta property="og:description" content="Meta Ads ו-Google Ads לעסקים בישראל — לידים איכותיים, ROAS מוכח ואופטימיזציה שוטפת." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:url" content="https://liorvelikin.github.io/velo-website/services/paid-ads" />
        <meta property="og:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ניהול פרסום ממומן | VELO DIGITAL" />
        <meta name="twitter:description" content="Meta Ads ו-Google Ads לעסקים — לידים איכותיים, ROAS מוכח ואופטימיזציה שוטפת." />
        <meta name="twitter:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/services/paid-ads" />
        <script type="application/ld+json">{serviceSchema('ניהול קמפיינים ממומנים', 'Meta Ads ו-Google Ads לעסקים בישראל — לידים איכותיים ו-ROAS מוכח.', '/services/paid-ads')}</script>
        <script type="application/ld+json">{breadcrumbSchema([{name:'ראשי',path:'/'},{name:'שירותים',path:'/services'},{name:'ניהול קמפיינים',path:'/services/paid-ads'}])}</script>
      </Helmet>

      <PageHero
        tag="פרסום ממומן"
        title="תקציב שעובד — לא נשרף"
        accent="עובד"
        subtitle="Meta Ads, Google Ads וריטארגטינג שמביאים לידים איכותיים — עם מעקב מלא ואופטימיזציה שוטפת."
      />

      {/* Metrics strip */}
      <section ref={metricsRef} style={{ padding: 'clamp(24px,4vw,48px) 0', direction: 'rtl', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {[
              { num: '-52%', label: 'ירידה ממוצעת בעלות לליד',  color: '#00d478' },
              { num: '3.8×', label: 'שיפור ב-ROAS',              color: '#4d9fff' },
              { num: '14 יום', label: 'עד לתוצאות ראשונות',     color: '#a07dff' },
              { num: '100%', label: 'שקיפות בכל ₪ שהוצא',       color: '#ffb347' },
            ].map((m, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '20px 16px', borderLeft: i < 3 ? '1px solid rgba(10,15,30,0.08)' : 'none', opacity: metricsVis ? 1 : 0, transform: metricsVis ? 'none' : 'translateY(12px)', transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms` }}>
                <div style={{ color: m.color, fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1 }}>{m.num}</div>
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
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>הבעיה</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em' }}>
              למה רוב הפרסום <span className="gradient-text">לא מביא תוצאות?</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {painPoints.map((p, i) => (
              <div key={i} className="glass-card" style={{ padding: '22px 24px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(0,212,120,0.1)', border: '1px solid rgba(0,212,120,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00d478', flexShrink: 0 }}>
                  {p.icon}
                </div>
                <p style={{ color: '#4a5d7a', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section ref={channelsRef} style={{ padding: 'clamp(48px,7vw,80px) 0', direction: 'rtl', background: 'rgba(0,212,120,0.02)', borderTop: '1px solid rgba(0,212,120,0.07)', borderBottom: '1px solid rgba(0,212,120,0.07)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>ערוצי פרסום</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em' }}>
              הפלטפורמות שאנחנו <span className="gradient-text">שולטים בהן</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {channels.map((ch, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: '28px 26px',
                  opacity: channelsVis ? 1 : 0,
                  transform: channelsVis ? 'none' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: ch.colorBg, border: `1px solid ${ch.colorBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {ch.icon}
                  </div>
                  <h3 style={{ color: ch.colorPrimary, fontWeight: 800, fontSize: '1.05rem', margin: 0 }}>{ch.name}</h3>
                </div>
                <p style={{ color: '#4a5d7a', fontSize: '0.87rem', lineHeight: 1.65, marginBottom: 14 }}>{ch.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {ch.tags.map((tag, j) => (
                    <span key={j} style={{ background: ch.colorBg, border: `1px solid ${ch.colorBorder}`, borderRadius: 100, padding: '3px 10px', fontSize: '0.7rem', color: ch.colorPrimary, fontWeight: 600 }}>
                      {tag}
                    </span>
                  ))}
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
              איך אנחנו <span className="gradient-text">עובדים?</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {process.map((step, i) => (
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
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(0,212,120,0.1)', border: '1px solid rgba(0,212,120,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.82rem', color: '#00d478', flexShrink: 0 }}>
                  {step.num}
                </div>
                <div>
                  <h3 style={{ color: '#0a0f1e', fontWeight: 700, fontSize: '0.95rem', marginBottom: 5 }}>{step.title}</h3>
                  <p style={{ color: '#4a5d7a', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
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
                <h3 style={{ color: '#0a0f1e', fontWeight: 700, fontSize: '0.95rem', marginBottom: 8 }}>{faq.q}</h3>
                <p style={{ color: '#4a5d7a', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{faq.a}</p>
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
              רוצים פרסום שמביא <span className="gradient-text">לידים — לא עלויות?</span>
            </h2>
            <p style={{ color: '#4a5d7a', fontSize: '0.95rem', lineHeight: 1.65 }}>
              ספרו לנו על העסק — ונגיד לכם מה צריך לשנות בקמפיין.
            </p>
          </div>
          <ContactForm source="paid-ads-page" />
        </div>
      </section>
    </>
  )
}
