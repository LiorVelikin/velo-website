import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/shared/PageHero'
import ContactForm from '../../components/shared/ContactForm'

const contentTypes = [
  {
    tag: 'וידאו',
    tagColor: '#a07dff',
    title: 'UGC & Ads Creatives',
    desc: 'סרטוני פרסומת ו-UGC שנראים כמו הפקה אמיתית — בשבריר מהעלות. מושלם לקמפיינים ב-Meta ו-TikTok.',
  },
  {
    tag: 'תמונות',
    tagColor: '#00c8ff',
    title: 'Product & Brand Photography',
    desc: 'תמונות מוצר ומותג ברמה פרופסיונלית בלי סטודיו. עשרות וריאציות לכל מוצר — לכל פלטפורמה.',
  },
  {
    tag: 'קופי',
    tagColor: '#00d478',
    title: 'תוכן שיווקי בעברית',
    desc: 'פוסטים, כתבות, ו-ad copy מותאמים לקהל הישראלי — כתובים בקול המותג שלכם, לא קול AI גנרי.',
  },
  {
    tag: 'אוטומציה',
    tagColor: '#ffb347',
    title: 'Pipeline תוכן חודשי',
    desc: 'לוח שנה של תוכן, קריאייטיבים מוכנים, ולוגיסטיקה שגורמת לכם להיראות פעילים — בלי להקדיש שעות.',
  },
]

const benefits = [
  { icon: '⚡', title: 'מהיר פי 10', desc: 'תוכן שלוקח שבועות — מוכן תוך ימים.' },
  { icon: '💰', title: 'עלות נמוכה ב-80%', desc: 'הפקה מקצועית בלי עלות צוות, ציוד, ומיקום.' },
  { icon: '🔄', title: 'וריאציות ללא הגבלה', desc: 'בודקים מה עובד — ומייצרים עוד מזה.' },
  { icon: '🎯', title: 'מותאם לפלטפורמה', desc: 'פורמט, טון ואורך נכון לכל ערוץ.' },
]

const faqs = [
  { q: 'האם התוכן ייראה "AI"?', a: 'לא. אנחנו עובדים עם AI כלי לייצור אבל מעצבים ועורכים את כל הפרויקטים ידנית. התוצאה נראית פרופסיונלית, לא גנרית.' },
  { q: 'מה הפלטפורמות שאתם מייצרים עבורן?', a: 'Instagram, Facebook, TikTok, YouTube Shorts, LinkedIn, ואתר. כל תוכן מותאם לפורמט ולטון של הפלטפורמה.' },
  { q: 'כמה תוכן אפשר לקבל בחודש?', a: 'תלוי בחבילה — החל מ-20 קריאייטיבים ועד 100+. בונים יחד לוח שנה תוכן חודשי מלא.' },
  { q: 'האם אני צריך לספק תמונות/וידאו?', a: 'לא חובה. עם AI generative אנחנו יכולים לבנות מ-0. אם יש לכם חומרים קיימים — זה רק יוסיף לאיכות.' },
]

export default function AiContentPage() {
  const [ref, visible] = useReveal()

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

      {/* Content Types */}
      <section style={{ padding: 'clamp(40px,6vw,72px) 0', direction: 'rtl' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>סוגי תוכן</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em' }}>
              כל סוג תוכן שהמותג <span className="gradient-text">צריך לצמוח</span>
            </h2>
          </div>
          <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {contentTypes.map((ct, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: '28px 26px',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'none' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                }}
              >
                <span style={{ background: 'rgba(160,125,255,0.1)', border: '1px solid rgba(160,125,255,0.2)', borderRadius: 100, padding: '3px 11px', fontSize: '0.7rem', fontWeight: 700, color: ct.tagColor, display: 'inline-block', marginBottom: 16 }}>
                  {ct.tag}
                </span>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', marginBottom: 10 }}>{ct.title}</h3>
                <p style={{ color: '#8ba3c7', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{ct.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: 'clamp(32px,5vw,60px) 0', direction: 'rtl' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ padding: 'clamp(28px,4vw,48px)', borderRadius: 20, background: 'rgba(160,125,255,0.05)', border: '1px solid rgba(160,125,255,0.15)' }}>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <h2 className="font-black" style={{ fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', letterSpacing: '-0.02em' }}>
                למה AI Content <span className="gradient-text">משנה את המשחק</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '16px 12px' }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>{b.icon}</div>
                  <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: 6 }}>{b.title}</h3>
                  <p style={{ color: '#8ba3c7', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                </div>
              ))}
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
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
