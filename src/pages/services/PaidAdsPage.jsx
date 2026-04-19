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
const IconCode = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
)
const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
  </svg>
)
const IconZap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

const channels = [
  {
    name: 'Meta Ads (Facebook + Instagram)',
    colorPrimary: '#4d9fff',
    colorBg: 'rgba(77,159,255,0.08)',
    colorBorder: 'rgba(77,159,255,0.2)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4d9fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
    desc: 'הפלטפורמה החזקה ביותר ללידים בישראל. Targeting לפי גיל, מיקום, תחומי עניין ו-Lookalike. Reels Ads, Lead Gen, ריטרגטינג.',
  },
  {
    name: 'Google Ads (Search + Display)',
    colorPrimary: '#00d478',
    colorBg: 'rgba(0,212,120,0.08)',
    colorBorder: 'rgba(0,212,120,0.2)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00d478" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
      </svg>
    ),
    desc: 'ללכוד כוונת רכישה בזמן אמת. Search לאנשים שמחפשים עכשיו, Display לחשיפה ומותג, Performance Max לכיסוי מקסימלי.',
  },
  {
    name: 'TikTok Ads',
    colorPrimary: '#a07dff',
    colorBg: 'rgba(160,125,255,0.08)',
    colorBorder: 'rgba(160,125,255,0.2)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a07dff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
      </svg>
    ),
    desc: 'תוכן UGC לקהל הצעיר. TikTok For Business עם קריאייטיב שנראה כמו תוכן אורגני — לא פרסומת מסורתית.',
  },
]

const features = [
  { icon: <IconTarget />,    color: '#4d9fff', title: 'מיקוד מדויק לקהל ישראלי',    desc: 'Targeting לפי גיל, מיקום גיאוגרפי, תחומי עניין ו-Lookalike בישראל.' },
  { icon: <IconZap />,       color: '#00c8ff', title: 'קריאייטיב שממיר',             desc: 'טקסטים, תמונות וסרטונים שתופסים את תשומת הלב ולא נראים כמו פרסומת.' },
  { icon: <IconCode />,      color: '#00d4b8', title: 'Pixel ו-Tracking מלא',        desc: 'Meta Pixel, Conversions API, GTM — כל ליד מיוחס לקמפיין הנכון.' },
  { icon: <IconRefreshCw />, color: '#a07dff', title: 'Retargeting',                  desc: 'מחזיר לידים שעזבו — עם מסר ממוקד שמקרב לסגירה.' },
  { icon: <IconBarChart />,  color: '#ffb347', title: 'A/B Testing על קריאייטיב',    desc: 'בודקים גרסאות מרובות של מודעות ומשאירים רק מה שממיר.' },
  { icon: <IconSearch />,    color: '#00d478', title: 'דיווח שבועי שקוף',            desc: 'דוח ברור — כמה הוצאנו, כמה לידים הגיעו, עלות לליד, ומה הלאה.' },
]

const processSteps = [
  { num: '01', title: 'אבחון תקציב וקהל יעד',       desc: 'מבינים מה הקהל האידיאלי, מה הכאב שלו, ואיך המתחרים מפרסמים.' },
  { num: '02', title: 'הקמת קמפיינים ומיקוד',       desc: 'בונים את מבנה הקמפיין, הקהלים, והמיקוד לפי הפלטפורמה.' },
  { num: '03', title: 'ייצור קריאייטיב',             desc: 'טקסטים, תמונות וסרטונים שמשיגים קליקים ולידים.' },
  { num: '04', title: 'השקה ואופטימיזציה שוטפת',    desc: 'משיקים, עוקבים, ומשפרים על בסיס ביצועים אמיתיים.' },
  { num: '05', title: 'דיווח ומדידת ROI',            desc: 'דוח חודשי ברור עם עלות לליד, לידים שהגיעו, ותכנית לחודש הבא.' },
]

const projects = [
  {
    niche: 'נדל"ן',
    title: 'קמפיין לידים לפרויקט',
    desc: 'קמפיין Meta Ads לפרויקט נדל"ן — קהל ממוקד לפי גיל ואזור, דף נחיתה מותאם, וריטרגטינג למעלה להמרה.',
  },
  {
    niche: 'קורס דיגיטלי',
    title: 'קמפיין מכירות',
    desc: 'קמפיין מכירות לקורס אונליין — Meta + Google, קריאייטיב UGC, ו-A/B testing על כותרות.',
  },
  {
    niche: 'קליניקה',
    title: 'Meta Ads לתורים',
    desc: 'קמפיין לידים לקליניקה פרטית — Lead Gen Ads עם טופס מהיר, ריטרגטינג, ודיווח שבועי.',
  },
]

const faqs = [
  { q: 'מה תקציב מינימלי מומלץ?', a: 'מעל 3,000 ש"ח לחודש לתקציב מדיה. מתחת לזה קשה לייצר נתונים משמעותיים לאופטימיזציה.' },
  { q: 'כמה זמן עד שרואים תוצאות?', a: 'Meta Ads — בדרך כלל תוצאות ראשוניות תוך 7-14 יום. Google Search — מהיר יותר כי מגיעים לכוונת רכישה קיימת.' },
  { q: 'האם אתם מייצרים גם את הקריאייטיב?', a: 'כן. קריאייטיב הוא חלק אינטגרלי מהשירות — טקסטים, תמונות, וסרטונים. קמפיין עם קריאייטיב גרוע לא יביא תוצאות.' },
  { q: 'האם יש חוזה לטווח ארוך?', a: 'לא. עובדים על בסיס חודשי. אנחנו מאמינים שהתוצאות ישמרו אתכם — לא חוזה.' },
]

export default function PaidAdsPage() {
  const [channelsRef, channelsVis] = useReveal()
  const [featuresRef, featuresVis] = useReveal()
  const [processRef, processVis] = useReveal()

  return (
    <>
      <Helmet>
        <title>ניהול קמפיינים ממומנים | Meta Ads ו-Google Ads בישראל | VELO DIGITAL</title>
        <meta name="description" content="ניהול קמפיינים ממומנים בישראל — Meta Ads, Google Ads ו-TikTok. מיקוד מדויק, קריאייטיב שממיר ומדידה מלאה. מפסיקים לשרוף תקציב ומתחילים לקבל לידים." />
        <meta property="og:title" content="ניהול קמפיינים ממומנים | Meta Ads ו-Google Ads בישראל | VELO DIGITAL" />
        <meta property="og:description" content="ניהול קמפיינים ממומנים בישראל — Meta Ads, Google Ads ו-TikTok. מיקוד מדויק וקריאייטיב שממיר." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:url" content="https://liorvelikin.github.io/velo-website/services/paid-ads" />
        <meta property="og:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/services/paid-ads" />
        <script type="application/ld+json">{serviceSchema('ניהול קמפיינים ממומנים', 'Meta Ads ו-Google Ads לעסקים בישראל — מיקוד מדויק, קריאייטיב שממיר, ומדידה מלאה.', '/services/paid-ads')}</script>
        <script type="application/ld+json">{breadcrumbSchema([{ name: 'ראשי', path: '/' }, { name: 'שירותים', path: '/services' }, { name: 'ניהול קמפיינים', path: '/services/paid-ads' }])}</script>
      </Helmet>

      <PageHero
        tag="ניהול קמפיינים ממומנים"
        title="קמפיינים שמביאים לידים — לא רק קליקים"
        accent="מביאים לידים"
        subtitle="מנהלים קמפיינים ב-Meta, Google ו-TikTok לעסקים ישראלים — עם מיקוד מדויק, קריאייטיב שממיר ודיווח שקוף."
      />

      {/* על השירות */}
      <section style={{ padding: 'clamp(56px,8vw,96px) 0', direction: 'rtl' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em', color: '#0a0f1e', marginBottom: 24 }}>
            פרסום ממומן בישראל — Meta Ads ו-Google Ads
          </h2>
          <p style={{ color: '#4a5d7a', fontSize: '1rem', lineHeight: 1.9, marginBottom: 32 }}>
            ניהול קמפיינים ממומנים בישראל הוא תחום שבו רוב העסקים שורפים כסף בלי לדעת למה. הפרסום ממומן עובד — כשהוא מנוהל נכון. הבעיות הנפוצות: קהל יעד רחב מדי שלא ממיר, קריאייטיב גנרי שאנשים מדלגים עליו, חוסר מעקב שמונע אופטימיזציה, ואין ריטרגטינג ללידים חמים שעזבו. ניהול Meta Ads מקצועי בישראל אומר לבנות פאנל שלם — מהמודעה הראשונה ועד לסגירה — עם מדידה בכל שלב.
          </p>
          <h3 className="font-black" style={{ fontSize: 'clamp(1.2rem,2.2vw,1.7rem)', letterSpacing: '-0.02em', color: '#0a0f1e', marginBottom: 16 }}>
            מקריאייטיב למיקוד — קמפיין שלם שעובד ביחד
          </h3>
          <p style={{ color: '#4a5d7a', fontSize: '1rem', lineHeight: 1.9 }}>
            ב-VELO אנחנו מנהלים את הפאנל המלא: קריאייטיב שמשיג תשומת לב, מיקוד מדויק לקהל הישראלי הרלוונטי, דף נחיתה שממיר, tracking שמיחס כל ליד לקמפיין הנכון, ריטרגטינג שמחזיר לידים שעזבו, ואופטימיזציה שוטפת לפי ביצועים. הכל מלווה בדיווח שבועי שקוף — כמה הוצאנו, כמה לידים הגיעו, ועלות לליד.
          </p>
        </div>
      </section>

      {/* Channels */}
      <section ref={channelsRef} style={{ padding: 'clamp(56px,8vw,96px) 0', direction: 'rtl', background: 'rgba(0,212,120,0.02)', borderTop: '1px solid rgba(0,212,120,0.07)', borderBottom: '1px solid rgba(0,212,120,0.07)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>ערוצי פרסום</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.6rem,3.2vw,2.4rem)', letterSpacing: '-0.02em', color: '#0a0f1e' }}>
              הפלטפורמות שאנחנו <span className="gradient-text">שולטים בהן</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
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
                <div style={{ width: 48, height: 48, borderRadius: 13, background: ch.colorBg, border: `1px solid ${ch.colorBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  {ch.icon}
                </div>
                <h3 style={{ color: ch.colorPrimary, fontWeight: 800, fontSize: '0.98rem', marginBottom: 10 }}>{ch.name}</h3>
                <p style={{ color: '#8ba3c7', fontSize: '0.87rem', lineHeight: 1.65, margin: 0 }}>{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} style={{ padding: 'clamp(56px,8vw,96px) 0', direction: 'rtl' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>מה כולל הניהול</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.6rem,3.2vw,2.4rem)', letterSpacing: '-0.02em', color: '#0a0f1e' }}>
              ניהול <span className="gradient-text">קמפיין שלם</span>
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
      <section ref={processRef} style={{ padding: 'clamp(56px,8vw,96px) 0', direction: 'rtl', background: 'rgba(0,212,120,0.02)', borderTop: '1px solid rgba(0,212,120,0.06)', borderBottom: '1px solid rgba(0,212,120,0.06)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>תהליך העבודה</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.6rem,3.2vw,2.4rem)', letterSpacing: '-0.02em', color: '#0a0f1e' }}>
              מהאבחון <span className="gradient-text">לתוצאות</span>
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
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(0,212,120,0.12)', border: '1px solid rgba(0,212,120,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.82rem', color: '#00d478', flexShrink: 0 }}>
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
                <div style={{ height: 140, borderRadius: 10, background: 'linear-gradient(135deg, rgba(0,212,120,0.08) 0%, rgba(26,111,255,0.05) 100%)', border: '1px dashed rgba(0,212,120,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <span style={{ color: 'rgba(0,212,120,0.4)', fontSize: '0.8rem' }}>נתוני קמפיין בקרוב</span>
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
