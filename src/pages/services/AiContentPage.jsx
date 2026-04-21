import { Helmet } from 'react-helmet-async'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/shared/PageHero'
import ContactForm from '../../components/shared/ContactForm'
import { serviceSchema, breadcrumbSchema } from '../../components/shared/SchemaOrg'

const BASE = import.meta.env.BASE_URL

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

const videoAds = [
  {
    file: 'videos/alo-yoga-ad.mp4',
    category: 'Reels Ad',
    title: 'ספורט ויוגה',
    desc: 'Reels ממיר לקמפיין Meta — תנועה, מוסיקה ומסר שנוגע',
    accent: '#4d9fff',
  },
  {
    file: 'videos/channel-perfume-ad.mp4',
    category: 'Product Ad',
    title: 'בושם ויוקרה',
    desc: 'פרסומת מוצר אסתטית — ויזואל שמוכר ברשתות החברתיות',
    accent: '#c9a84c',
  },
  {
    file: 'videos/ai-avatar-1.mp4',
    category: 'UGC Ad',
    title: 'AI Avatar',
    desc: 'דמות AI שמדברת על המוצר — UGC שנראה אמיתי ומשכנע',
    accent: '#a07dff',
  },
  {
    file: 'videos/ai-avatar-2.mp4',
    category: 'UGC Ad',
    title: 'AI Creator',
    desc: 'AI Creator לקמפיינים — עולה שברי עלות הפקה מסורתית',
    accent: '#a07dff',
  },
  {
    file: 'videos/ai-avatar-3.mp4',
    category: 'Reels',
    title: 'AI Creator Reel',
    desc: 'תוכן אורגני מ-AI Creator לאינסטגרם ו-TikTok',
    accent: '#00d4b8',
  },
  {
    file: 'videos/luxury-unboxing.mp4',
    category: 'Unboxing',
    title: 'יוקרה ומוצרים',
    desc: 'סרטון Unboxing שבונה ציפיות ומוכר חוויה לפני שקנו',
    accent: '#c9a84c',
  },
  {
    file: 'videos/maya-ugc.mp4',
    category: 'UGC בעברית',
    title: 'מאיה — AI Influencer',
    desc: 'AI Influencer שמדברת עברית — UGC שנראה אמיתי לחלוטין',
    accent: '#ff85c2',
  },
  {
    file: 'videos/michal-ugc.mp4',
    category: 'UGC בעברית',
    title: 'מיכל — AI Creator',
    desc: 'מספרת על המוצר כמו חברה — עברית טבעית ומשכנעת',
    accent: '#ff85c2',
  },
  {
    file: 'videos/noa-ugc.mp4',
    category: 'UGC בעברית',
    title: 'נועה — AI Influencer',
    desc: 'AI Influencer ישראלית לקמפיינים ממומנים ואורגניים',
    accent: '#ff85c2',
  },
]

const faqs = [
  { q: 'האם התוכן נראה "מדומה" או מלאכותי?', a: 'לא. אנחנו משתמשים ב-AI ככלי הפקה, אבל כל פיס עובר עריכה ידנית. התוצאה נראית טבעית וממותגת — לא רובוטי.' },
  { q: 'כמה תוכן אפשר לקבל בחודש?', a: 'תלוי בחבילה — מ-8 פיסות תוכן בחודש ועד 30+. מגדירים יחד לפי הפלטפורמות ותדירות הפרסום הרצויה.' },
  { q: 'האם הקופי כולל כתיבת טקסטים?', a: 'כן. כל תוכן ויזואלי מגיע עם קופי בעברית — כיתוב, תיאור ו-CTA מותאמים לפלטפורמה.' },
  { q: 'מה הפלטפורמות שאתם מכינים עבורן?', a: 'Instagram, Facebook, TikTok, YouTube Shorts ו-LinkedIn. מכינים את הפורמט הנכון לכל פלטפורמה.' },
]

function PhoneCard({ video }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, flexShrink: 0, width: 212 }}>
      {/* iPhone body */}
      <div style={{
        width: 196,
        borderRadius: 40,
        background: 'linear-gradient(160deg, #2e2e2e 0%, #111 60%, #1a1a1a 100%)',
        padding: '10px',
        boxShadow: `
          inset 0 0 0 1px rgba(255,255,255,0.14),
          0 0 0 1px rgba(0,0,0,0.9),
          0 40px 100px rgba(0,0,0,0.75),
          0 8px 24px rgba(0,0,0,0.5)
        `,
        position: 'relative',
      }}>
        {/* Power button (right side) */}
        <div style={{
          position: 'absolute', right: -3, top: 108,
          width: 3, height: 56,
          background: 'linear-gradient(180deg, #333 0%, #222 100%)',
          borderRadius: '0 3px 3px 0',
        }} />
        {/* Mute switch (left side) */}
        <div style={{
          position: 'absolute', left: -3, top: 60,
          width: 3, height: 18,
          background: 'linear-gradient(180deg, #333 0%, #222 100%)',
          borderRadius: '3px 0 0 3px',
        }} />
        {/* Volume up (left side) */}
        <div style={{
          position: 'absolute', left: -3, top: 90,
          width: 3, height: 34,
          background: 'linear-gradient(180deg, #333 0%, #222 100%)',
          borderRadius: '3px 0 0 3px',
        }} />
        {/* Volume down (left side) */}
        <div style={{
          position: 'absolute', left: -3, top: 132,
          width: 3, height: 34,
          background: 'linear-gradient(180deg, #333 0%, #222 100%)',
          borderRadius: '3px 0 0 3px',
        }} />

        {/* Screen */}
        <div style={{
          borderRadius: 30,
          overflow: 'hidden',
          position: 'relative',
          aspectRatio: '9/19.5',
          background: '#000',
        }}>
          {/* Dynamic Island */}
          <div style={{
            position: 'absolute',
            top: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 72,
            height: 22,
            background: '#0a0a0a',
            borderRadius: 100,
            zIndex: 10,
            boxShadow: '0 0 0 1px rgba(255,255,255,0.07)',
          }} />

          {/* Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          >
            <source src={`${BASE}${video.file}`} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Label */}
      <div style={{ textAlign: 'center', width: '100%', direction: 'rtl' }}>
        <span style={{
          display: 'inline-block',
          fontSize: '0.68rem',
          fontWeight: 700,
          padding: '3px 12px',
          borderRadius: 100,
          background: `${video.accent}18`,
          border: `1px solid ${video.accent}35`,
          color: video.accent,
          marginBottom: 7,
          letterSpacing: '0.04em',
        }}>{video.category}</span>
        <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem', margin: '0 0 4px', lineHeight: 1.3 }}>{video.title}</p>
        <p style={{ color: '#8ba3c7', fontSize: '0.76rem', lineHeight: 1.55, margin: 0 }}>{video.desc}</p>
      </div>
    </div>
  )
}

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

      {/* Video Showcase */}
      <section style={{ padding: 'clamp(56px,8vw,96px) 0', direction: 'rtl', background: 'rgba(77,159,255,0.025)', borderTop: '1px solid rgba(77,159,255,0.06)', borderBottom: '1px solid rgba(77,159,255,0.06)', overflow: 'hidden' }}>
        <div className="max-w-6xl mx-auto px-6" style={{ marginBottom: 52 }}>
          <div style={{ textAlign: 'center' }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>עבודות</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.6rem,3.2vw,2.4rem)', letterSpacing: '-0.02em', color: '#0a0f1e' }}>
              תוכן AI שהפקנו — <span className="gradient-text">תראו בעצמכם</span>
            </h2>
            <p style={{ color: '#4a5d7a', fontSize: '0.98rem', lineHeight: 1.75, maxWidth: 560, margin: '16px auto 0' }}>
              סרטוני UGC, Reels ופרסומות — מופקים עם AI בעלות נמוכה, נראים כמו הפקה אמיתית
            </p>
          </div>
        </div>

        {/* Horizontal scroll carousel */}
        <div style={{
          display: 'flex',
          gap: 28,
          overflowX: 'auto',
          paddingInline: 'clamp(24px,6vw,96px)',
          paddingBottom: 28,
          paddingTop: 8,
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          scrollSnapType: 'x mandatory',
        }}>
          {videoAds.map((v, i) => (
            <div key={i} style={{ scrollSnapAlign: 'start' }}>
              <PhoneCard video={v} />
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div style={{ textAlign: 'center', marginTop: 20, direction: 'rtl' }}>
          <span style={{ color: '#8ba3c7', fontSize: '0.78rem', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            גללו לראות עוד
          </span>
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
