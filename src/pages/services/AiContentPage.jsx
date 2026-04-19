import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/shared/PageHero'
import ContactForm from '../../components/shared/ContactForm'
import { serviceSchema, breadcrumbSchema } from '../../components/shared/SchemaOrg'

/* ── Icons ── */
const IconVideo = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
  </svg>
)
const IconPlay = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
  </svg>
)
const IconImage = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
  </svg>
)
const IconEdit = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
)

const contentTypes = [
  {
    icon: <IconVideo />,
    color: '#4d9fff',
    title: 'UGC & Ads Creatives',
    desc: 'סרטוני פרסומת שנראים אמיתיים, טבעיים, ומושלמים ל-Meta Ads. UGC שמביא לקוחות כי הוא נראה כמו המלצה — לא פרסומת מלוטשת.',
  },
  {
    icon: <IconPlay />,
    color: '#a07dff',
    title: 'Reels & Short Video',
    desc: 'תוכן קצר לאינסטגרם, TikTok ו-YouTube Shorts — פורמט שהאלגוריתם אוהב ושהקהל צורך.',
  },
  {
    icon: <IconImage />,
    color: '#00d4b8',
    title: 'תמונות וויזואל',
    desc: 'עיצוב פוסטים, statics, וקריאייטיב לקמפיינים — ויזואל שמשקף את המותג ומושך את העין בפיד.',
  },
  {
    icon: <IconEdit />,
    color: '#ffb347',
    title: 'קופי ותוכן כתוב',
    desc: 'כיתובים לפוסטים, כתבות, תיאורי מוצר, ותוכן SEO — כתיבה בעברית שמדברת לקהל הישראלי.',
  },
]

const processSteps = [
  { num: '01', title: 'בריף ואסטרטגיית תוכן', desc: 'מגדירים את קהל היעד, המותג, הפלטפורמות, ולוח השנה.' },
  { num: '02', title: 'הפקה — AI + עריכה',     desc: 'מפיקים את התוכן עם כלי AI + עריכה ידנית לאיכות פרימיום.' },
  { num: '03', title: 'אישור ועדכונים',         desc: 'שולחים לאישורכם, מקשיבים לפידבק, ומעדכנים עד שמושלם.' },
  { num: '04', title: 'לוח שנה ופרסום',         desc: 'מארגנים לוח תוכן חודשי ומסייעים בפרסום הנכון בזמן הנכון.' },
]

const projects = [
  {
    niche: 'מותג אופנה',
    title: 'תוכן חודשי לאינסטגרם',
    desc: 'חבילת תוכן חודשית למותג אופנה — Reels, statics, וקופי שמדבר לקהל הנשי.',
  },
  {
    niche: 'קליניקה',
    title: 'UGC לקמפייני Meta',
    desc: 'סרטוני UGC לקמפיין Meta לקליניקת עור — נראים כמו המלצה אמיתית, מביאים פניות.',
  },
  {
    niche: 'מוצרי בית',
    title: 'Reels ופוסטים שוטפים',
    desc: 'תוכן שוטף למותג מוצרי בית — Reels לייף-סטייל, פוסטים מוצריים, ותיאורים לחנות.',
  },
]

const faqs = [
  { q: 'האם התוכן נראה "מדומה" או מלאכותי?', a: 'לא. אנחנו משתמשים ב-AI ככלי הפקה, אבל כל פיס עובר עריכה ידנית. התוצאה נראית טבעית וממותגת — לא רובוטי.' },
  { q: 'כמה תוכן אפשר לקבל בחודש?', a: 'תלוי בחבילה — מ-8 פיסות תוכן בחודש ועד 30+. מגדירים יחד לפי הפלטפורמות ותדירות הפרסום הרצויה.' },
  { q: 'האם הקופי כולל כתיבת טקסטים?', a: 'כן. כל תוכן ויזואלי מגיע עם קופי בעברית — כיתוב, תיאור ו-CTA מותאמים לפלטפורמה.' },
  { q: 'מה הפלטפורמות שאתם מכינים עבורן?', a: 'Instagram, Facebook, TikTok, YouTube Shorts ו-LinkedIn. מכינים את הפורמט הנכון לכל פלטפורמה.' },
]

export default function AiContentPage() {
  const [contentRef, contentVis] = useReveal()
  const [processRef, processVis] = useReveal()

  return (
    <>
      <Helmet>
        <title>הפקת תוכן AI לעסקים | תוכן שיווקי לרשתות חברתיות | VELO DIGITAL</title>
        <meta name="description" content="הפקת תוכן שיווקי לעסקים בישראל — סרטונים, תמונות, קופי ופוסטים לרשתות חברתיות. תוכן AI בעלות הפקה נמוכה, בנפח גבוה ובאיכות פרימיום." />
        <meta property="og:title" content="הפקת תוכן AI לעסקים | תוכן שיווקי לרשתות חברתיות | VELO DIGITAL" />
        <meta property="og:description" content="הפקת תוכן שיווקי לעסקים בישראל — סרטונים, תמונות, קופי ופוסטים לרשתות חברתיות." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:url" content="https://liorvelikin.github.io/velo-website/services/ai-content" />
        <meta property="og:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/services/ai-content" />
        <script type="application/ld+json">{serviceSchema('הפקת תוכן AI', 'הפקת תוכן שיווקי לעסקים בישראל — סרטונים, תמונות, קופי ופוסטים.', '/services/ai-content')}</script>
        <script type="application/ld+json">{breadcrumbSchema([{ name: 'ראשי', path: '/' }, { name: 'שירותים', path: '/services' }, { name: 'תוכן AI', path: '/services/ai-content' }])}</script>
      </Helmet>

      <PageHero
        tag="תוכן AI"
        title="תוכן שיווקי שעובד — בנפח שעסקים לא יכולים לעמוד בו"
        accent="לא יכולים לעמוד בו"
        subtitle="מפיקים סרטונים, תמונות, קופי ופוסטים לעסקים ישראלים — מהר יותר, בעלות נמוכה יותר, בלי להקריב איכות."
      />

      {/* על השירות */}
      <section style={{ padding: 'clamp(56px,8vw,96px) 0', direction: 'rtl' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em', color: '#0a0f1e', marginBottom: 24 }}>
            הפקת תוכן לרשתות חברתיות — האתגר של העסק הישראלי
          </h2>
          <p style={{ color: '#4a5d7a', fontSize: '1rem', lineHeight: 1.9, marginBottom: 32 }}>
            האלגוריתמים של Meta, Instagram ו-TikTok מתגמלים עקביות. עסק שמפרסם פעם בשבוע לא מגיע לקהל — עסק שמפרסם כל יום כן. הבעיה: הפקת תוכן שיווקי לרשתות חברתיות בצורה מסורתית — צלם, עורך, קופירייטר — עולה הרבה ולוקח זמן רב. רוב העסקים הקטנים בישראל לא יכולים לעמוד בנפח ובעלות הזה. כלי ה-AI שינו את המשוואה הזו לחלוטין. אנחנו מביאים את הטכנולוגיה הזו לעסקים ישראלים — עם creative direction אנושי שמבטיח שהתוכן שיווקי לעסקים ייראה מקצועי, ממותג, ולא גנרי.
          </p>
          <h3 className="font-black" style={{ fontSize: 'clamp(1.2rem,2.2vw,1.7rem)', letterSpacing: '-0.02em', color: '#0a0f1e', marginBottom: 16 }}>
            UGC, Reels וקופי — הכל בשבריר מהעלות הרגילה
          </h3>
          <p style={{ color: '#4a5d7a', fontSize: '1rem', lineHeight: 1.9 }}>
            אנחנו מפיקים UGC לקמפיינים ב-Meta שנראים כמו המלצה אמיתית — לא פרסומת מלוטשת. מפיקים Reels וסרטונים קצרים לאינסטגרם ו-TikTok בפורמט שהאלגוריתם אוהב. כותבים קופי בעברית שמדבר ישיר לקהל הישראלי — בלי תרגומים מאנגלית ובלי ז'רגון שאנשים לא מבינים. מסיימים עם לוח תוכן חודשי מסודר שמאפשר לכם לפרסם בעקביות בלי לחשוב כל פעם מה להעלות.
          </p>
        </div>
      </section>

      {/* Content Types */}
      <section ref={contentRef} style={{ padding: 'clamp(56px,8vw,96px) 0', direction: 'rtl', background: 'rgba(77,159,255,0.025)', borderTop: '1px solid rgba(77,159,255,0.07)', borderBottom: '1px solid rgba(77,159,255,0.07)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>סוגי תוכן</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.6rem,3.2vw,2.4rem)', letterSpacing: '-0.02em', color: '#0a0f1e' }}>
              מה אנחנו <span className="gradient-text">מפיקים</span>
            </h2>
            <p style={{ color: '#4a5d7a', fontSize: '0.98rem', lineHeight: 1.75, maxWidth: 580, margin: '16px auto 0' }}>
              כל סוג תוכן מותאם לפלטפורמה, לקהל, ולמטרה השיווקית
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {contentTypes.map((ct, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: '32px 28px',
                  opacity: contentVis ? 1 : 0,
                  transform: contentVis ? 'none' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                }}
              >
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${ct.color}18`, border: `1px solid ${ct.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: ct.color, marginBottom: 20 }}>
                  {ct.icon}
                </div>
                <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.1rem', marginBottom: 10 }}>{ct.title}</h3>
                <p style={{ color: '#8ba3c7', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{ct.desc}</p>
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
              מהבריף <span className="gradient-text">לפרסום</span>
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
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(77,159,255,0.12)', border: '1px solid rgba(77,159,255,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.82rem', color: '#4d9fff', flexShrink: 0 }}>
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
      <section style={{ padding: 'clamp(56px,8vw,96px) 0', direction: 'rtl', background: 'rgba(77,159,255,0.025)', borderTop: '1px solid rgba(77,159,255,0.06)', borderBottom: '1px solid rgba(77,159,255,0.06)' }}>
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
                <div style={{ height: 140, borderRadius: 10, background: 'linear-gradient(135deg, rgba(77,159,255,0.08) 0%, rgba(160,125,255,0.05) 100%)', border: '1px dashed rgba(77,159,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <span style={{ color: 'rgba(77,159,255,0.4)', fontSize: '0.8rem' }}>דוגמאות תוכן בקרוב</span>
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
              רוצים תוכן שעובד <span className="gradient-text">בשבילכם?</span>
            </h2>
            <p style={{ color: '#4a5d7a', fontSize: '0.95rem', lineHeight: 1.65 }}>
              ספרו לנו על העסק והפלטפורמות — ונציג מה אנחנו יכולים להפיק עבורכם.
            </p>
          </div>
          <ContactForm source="ai-content-page" />
        </div>
      </section>
    </>
  )
}
