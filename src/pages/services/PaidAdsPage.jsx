import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/shared/PageHero'
import ContactForm from '../../components/shared/ContactForm'

const painPoints = [
  { icon: '🔥', text: 'תקציב פרסום שנשרף — בלי לקוחות שמגיעים' },
  { icon: '🎯', text: 'קמפיינים שמגיעים לאנשים הלא נכונים' },
  { icon: '📊', text: 'אין מעקב — לא יודעים מה עובד ומה לא' },
  { icon: '🔄', text: 'אין retargeting — לידים קרים שלא חוזרים' },
]

const channels = [
  {
    name: 'Meta Ads',
    color: '#4d9fff',
    desc: 'Facebook ו-Instagram. הכי חזק לפניות, לידים, ומותג. Targeting מדויק לפי תחומי עניין, דמוגרפיה, ו-lookalike.',
    tags: ['Reels Ads', 'Lead Ads', 'Retargeting', 'Lookalike'],
  },
  {
    name: 'Google Ads',
    color: '#00d478',
    desc: 'Search, Display, ו-YouTube. מגיעים אל אנשים שכבר מחפשים מה שאתם מוכרים — כוונת רכישה גבוהה.',
    tags: ['Search Campaigns', 'Shopping', 'Performance Max', 'YouTube'],
  },
  {
    name: 'Retargeting',
    color: '#a07dff',
    desc: 'מי שביקר באתר, הוסיף לעגלה, או צפה בסרטון — חוזר אליהם עם מסר ממוקד עד שמקנים.',
    tags: ['Dynamic Ads', 'Custom Audiences', 'Cross-platform', 'Sequential'],
  },
]

const process = [
  { num: '01', title: 'מחקר קהל ומתחרים', desc: 'מבינים מי הלקוח האידיאלי, מה הכאבים שלו, ואיך המתחרים שלכם מפרסמים.' },
  { num: '02', title: 'בניית קריאייטיב', desc: 'טקסטים, תמונות וסרטונים שמשיגים את תשומת הלב — ולא נראים כמו פרסומת.' },
  { num: '03', title: 'הגדרת Tracking', desc: 'Pixel, Conversions API, ו-Google Tag — כל ליד נמדד ומיוחס לקמפיין הנכון.' },
  { num: '04', title: 'השקה ואופטימיזציה', desc: 'משיקים בתקציב מבוקר, בודקים מה עובד, ומגדילים את מה שמביא תוצאות.' },
  { num: '05', title: 'דיווח שקוף', desc: 'דוח חודשי ברור — כמה הוצאנו, כמה לידים הגיעו, ומה עלות הליד.' },
]

const faqs = [
  { q: 'מה התקציב המינימלי לפרסום?', a: 'מעל 3,000 ש"ח לחודש לתקציב מדיה. מתחת לזה קשה לייצר נתונים משמעותיים ולאופטמז.' },
  { q: 'כמה זמן עד שרואים תוצאות?', a: 'קמפיינים ב-Meta — בדרך כלל תוצאות ראשוניות תוך 7-14 יום. Google Search — מהיר יותר כי מגיעים לכוונת רכישה.' },
  { q: 'האם אתם עובדים עם תקציב קבוע?', a: 'כן. מגדירים ביחד תקציב חודשי ועמלת ניהול. ללא הפתעות.' },
  { q: 'האם צריך גם דף נחיתה?', a: 'ממליצים בחום. קמפיין מעולה + דף נחיתה חלש = כסף נשרף. אנחנו בונים גם את הדפים.' },
]

export default function PaidAdsPage() {
  const [ref, visible] = useReveal()
  const [processRef, processVisible] = useReveal()

  return (
    <>
      <Helmet>
        <title>ניהול קמפיינים ממומנים | VELO Studio — Meta Ads וGoogle Ads שמביאים לידים</title>
        <meta name="description" content="ניהול קמפיינים ממומנים ב-Meta Ads וGoogle Ads לעסקים בישראל. לידים איכותיים, מעקב מלא, ואופטימיזציה שוטפת. VELO Studio — תוצאות לא הבטחות." />
        <meta name="keywords" content="ניהול קמפיינים ממומנים, Meta Ads ישראל, Google Ads ישראל, פרסום ממומן, לידים ממומנים" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/services/paid-ads" />
      </Helmet>

      <PageHero
        tag="פרסום ממומן"
        title="תקציב שעובד — לא נשרף"
        accent="עובד"
        subtitle="Meta Ads, Google Ads וריטארגטינג שמביאים לידים איכותיים — עם מעקב מלא ואופטימיזציה שוטפת."
      />

      {/* Pain Points */}
      <section style={{ padding: 'clamp(40px,6vw,72px) 0', direction: 'rtl' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em', marginBottom: 12 }}>
              למה רוב הפרסום <span className="gradient-text">לא מביא תוצאות?</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {painPoints.map((p, i) => (
              <div key={i} className="glass-card" style={{ padding: '20px 22px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{p.icon}</span>
                <p style={{ color: '#8ba3c7', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section ref={ref} style={{ padding: 'clamp(40px,6vw,72px) 0', direction: 'rtl' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>ערוצי פרסום</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em' }}>
              הפלטפורמות שאנחנו <span className="gradient-text">שולטים בהן</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {channels.map((ch, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: '28px 26px',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'none' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`,
                }}
              >
                <h3 style={{ color: ch.color, fontWeight: 800, fontSize: '1.15rem', marginBottom: 12 }}>{ch.name}</h3>
                <p style={{ color: '#8ba3c7', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: 16 }}>{ch.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {ch.tags.map((tag, j) => (
                    <span key={j} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, padding: '3px 10px', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
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
      <section ref={processRef} style={{ padding: 'clamp(40px,6vw,72px) 0', direction: 'rtl' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em', marginBottom: 12 }}>
              איך אנחנו <span className="gradient-text">עובדים?</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {process.map((step, i) => (
              <div
                key={i}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start',
                  opacity: processVisible ? 1 : 0,
                  transform: processVisible ? 'none' : 'translateX(16px)',
                  transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`,
                }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(0,212,120,0.1)', border: '1px solid rgba(0,212,120,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', color: '#00d478', flexShrink: 0 }}>
                  {step.num}
                </div>
                <div>
                  <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: 6 }}>{step.title}</h3>
                  <p style={{ color: '#8ba3c7', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
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
              רוצים פרסום שמביא <span className="gradient-text">לידים — לא עלויות?</span>
            </h2>
            <p style={{ color: '#8ba3c7', fontSize: '0.95rem', lineHeight: 1.65 }}>
              ספרו לנו על העסק — ונגיד לכם מה צריך לשנות בקמפיין.
            </p>
          </div>
          <ContactForm source="paid-ads-page" />
        </div>
      </section>
    </>
  )
}
