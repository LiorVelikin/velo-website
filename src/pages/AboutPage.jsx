import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import PageHero from '../components/shared/PageHero'
import ContactForm from '../components/shared/ContactForm'
import portraitSrc from '../assets/portrait.webp'

const IconTarget = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
)
const IconUsers = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
)
const IconZap = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

const values = [
  {
    icon: <IconTarget />, color: '#4d9fff',
    title: 'תוצאות, לא הבטחות',
    desc: 'כל פרויקט מתחיל ממטרה עסקית ברורה ומסתיים במדידה. לא מוכרים "נוכחות דיגיטלית" — מוכרים לידים, מכירות וצמיחה.',
  },
  {
    icon: <IconUsers />, color: '#00d4b8',
    title: 'שקיפות מלאה',
    desc: 'אתם יודעים כל מה שאנחנו יודעים. דוחות ברורים, גישה לכל הכלים, ושיחות ישירות עם האנשים שמבצעים את העבודה.',
  },
  {
    icon: <IconZap />, color: '#a07dff',
    title: 'מחויבות אמיתית',
    desc: 'אנחנו עובדים עם מספר מוגבל של לקוחות בכל פעם — כדי שכל עסק יקבל את הקשב, הזמן והאנרגיה שמגיעים לו.',
  },
]

const stats = [
  { num: '60+',  label: 'עסקים שינו את הנוכחות הדיגיטלית שלהם' },
  { num: '2',    label: 'מדינות פעילות — ישראל וארה"ב' },
  { num: '45',   label: 'ימים ממוצע עד לתוצאות ראשונות' },
]

export default function AboutPage() {
  const [ref, visible] = useReveal()
  const [statsRef, statsVis] = useReveal()

  return (
    <>
      <Helmet>
        <title>על ליאור וליקין ו-VELO DIGITAL | שיווק דיגיטלי לעסקים</title>
        <meta name="description" content="הכירו את ליאור וליקין, מייסד VELO DIGITAL — בונים מערכות שיווק שלמות לעסקים. תוכן AI, אתרים ממירים, ניהול קמפיינים וקידום SEO." />
        <meta name="keywords" content="ליאור וליקין, VELO DIGITAL, סוכנות שיווק דיגיטלי, שיווק דיגיטלי לעסקים" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/about" />
        <meta property="og:title" content="על VELO DIGITAL | שיווק דיגיטלי לעסקים" />
        <meta property="og:description" content="הכירו את ליאור וליקין ו-VELO DIGITAL — בונים מערכות שיווק שלמות לעסקים." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:url" content="https://liorvelikin.github.io/velo-website/about" />
        <meta property="og:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="על VELO DIGITAL | שיווק דיגיטלי לעסקים" />
        <meta name="twitter:description" content="הכירו את ליאור וליקין ו-VELO DIGITAL — בונים מערכות שיווק שלמות לעסקים." />
        <meta name="twitter:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
      </Helmet>

      <PageHero
        tag="הסיפור שלנו"
        title="שותפים לצמיחה — לא עוד סוכנות"
        accent="שותפים לצמיחה"
        subtitle="VELO DIGITAL נוסדה מתוך אמונה אחת פשוטה: עסקים מגיעים לשיווק שמביא תוצאות אמיתיות, לא פעולות מנותקות ותקציבים שנשרפים."
      />

      {/* Founder section */}
      <section style={{ padding: 'clamp(48px,8vw,96px) 0', direction: 'rtl' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div
            ref={ref}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(32px, 5vw, 72px)',
              alignItems: 'center',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(24px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            {/* Portrait */}
            <div style={{ flexShrink: 0, width: 'clamp(200px, 30%, 320px)', margin: '0 auto' }}>
              <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden' }}>
                <div style={{ position: 'absolute', bottom: '-10%', left: '-15%', right: '-15%', height: '60%', background: 'radial-gradient(ellipse at 50% 100%, rgba(26,100,220,0.38) 0%, rgba(0,160,255,0.14) 50%, transparent 75%)', filter: 'blur(28px)', pointerEvents: 'none', zIndex: 0 }} />
                <img
                  src={portraitSrc}
                  alt="ליאור וליקין — מייסד VELO DIGITAL"
                  style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top', borderRadius: 20, position: 'relative', zIndex: 1, WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}
                />
              </div>
              <div style={{ textAlign: 'center', marginTop: 16 }}>
                <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: 4 }}>ליאור וליקין</p>
                <p style={{ color: '#4d9fff', fontSize: '0.85rem', fontWeight: 600 }}>מייסד ומנכ"ל — VELO DIGITAL</p>
              </div>
            </div>

            {/* Bio */}
            <div style={{ flex: '1 1 340px', minWidth: 0 }}>
              <div className="tag-pill" style={{ marginBottom: 20, display: 'inline-flex' }}>מי אנחנו</div>
              <h2 className="font-black" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', letterSpacing: '-0.02em', marginBottom: 24, lineHeight: 1.2 }}>
                הבנתי שהדרך הנכונה לשיווק היא{' '}
                <span className="gradient-text">מערכת, לא פעולות</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, color: '#8ba3c7', fontSize: '1rem', lineHeight: 1.75 }}>
                <p>
                  ראיתי עסקים רבים מוציאים הרבה כסף על שיווק — אתר כאן, קמפיין שם, תוכן מפה — ולא רואים תוצאות. לא כי המוצר שלהם לא טוב, אלא כי כל הפעולות האלה עובדות בנפרד ולא יוצרות זרימה שמייצרת לקוחות.
                </p>
                <p>
                  זו הסיבה שבנינו את שיטת Velocity — מתודולוגיה שמחברת בין תוכן, אתר, פרסום ואוטומציה למערכת אחת קוהרנטית. כאשר כל החלקים עובדים יחד, התוצאות מגיעות מהר יותר ונשארות לאורך זמן.
                </p>
                <p>
                  אנחנו עובדים עם עסקים בישראל ובארה"ב שרוצים לבנות נוכחות דיגיטלית אמיתית שעובדת בשבילם — לא סתם "להיות בדיגיטל".
                </p>
              </div>

              <div style={{ marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <button className="btn-primary">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ flexShrink: 0 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    <span>בואו נדבר</span>
                  </button>
                </Link>
                <Link to="/services" style={{ textDecoration: 'none' }}>
                  <button className="btn-outline"><span>השירותים שלנו</span></button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: 'clamp(40px,6vw,80px) 0', direction: 'rtl' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.6rem,3.5vw,2.6rem)', letterSpacing: '-0.02em', marginBottom: 12 }}>
              מה שמנחה אותנו
            </h2>
            <p style={{ color: '#8ba3c7', fontSize: '1rem', maxWidth: 480, margin: '0 auto' }}>
              שלושה עקרונות שנמצאים בבסיס כל פרויקט שאנחנו עושים
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {values.map((v, i) => (
              <div key={i} className="glass-card" style={{ padding: '28px 24px' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${v.color}18`, border: `1px solid ${v.color}35`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: v.color, marginBottom: 16,
                  boxShadow: `0 0 14px ${v.color}20`,
                }}>
                  {v.icon}
                </div>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: '#8ba3c7', fontSize: '0.9rem', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} style={{ padding: 'clamp(40px,6vw,72px) 0', direction: 'rtl' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, textAlign: 'center' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ opacity: statsVis ? 1 : 0, transform: statsVis ? 'none' : 'translateY(16px)', transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms` }}>
                <div style={{ color: '#1a6fff', fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1 }}>{s.num}</div>
                <div style={{ color: '#8ba3c7', fontSize: '0.9rem', marginTop: 10, lineHeight: 1.5 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(48px,8vw,96px) 0', direction: 'rtl' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.6rem,3.5vw,2.6rem)', letterSpacing: '-0.02em', marginBottom: 14 }}>
              רוצים לדעת אם אנחנו <span className="gradient-text">מתאימים לכם?</span>
            </h2>
            <p style={{ color: '#8ba3c7', fontSize: '1rem', lineHeight: 1.65 }}>
              שיחת היכרות של 30 דקות — ליאור יבין את העסק שלכם ויגיד לכם ישירות אם יש פה התאמה. ללא מצגת מכירה, ללא לחץ.
            </p>
          </div>
          <ContactForm source="about-page" />
        </div>
      </section>
    </>
  )
}
