import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import PageHero from '../components/shared/PageHero'
import ContactForm from '../components/shared/ContactForm'

const services = [
  {
    to: '/services/web-design',
    tag: 'עיצוב',
    tagColor: '#4d9fff',
    title: 'עיצוב אתרים לעסקים',
    desc: 'אתרים שנבנים מתוך חשיבה מותגית. לא רק יפה — מותאם להמרות, לחווית משתמש ולמנועי החיפוש.',
    keyword: 'בניית אתר לעסק',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    to: '/services/landing-pages',
    tag: 'המרות',
    tagColor: '#00c8ff',
    title: 'עיצוב דפי נחיתה',
    desc: 'דפים ממוקדי המרות שהופכים קליקים ללידים. מבנה CRO, מהירות טעינה, ו-A/B testing.',
    keyword: 'דפי נחיתה ממירים',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 9h20M9 21V9"/>
      </svg>
    ),
  },
  {
    to: '/services/ecommerce',
    tag: 'איקומרס',
    tagColor: '#00d4b8',
    title: 'חנויות Shopify',
    desc: 'חנויות Shopify שמוכרות — לא רק נראות טוב. מבנה שמניע לרכישה, עם UX שמוריד נטישה.',
    keyword: 'Shopify ישראל',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
  },
  {
    to: '/services/ai-content',
    tag: 'תוכן',
    tagColor: '#a07dff',
    title: 'יצירת תוכן AI',
    desc: 'תוכן ברמת הפקה פרופסיונלית — UGC, פרסומות, תמונות מותג — בשבריר מהעלות הרגילה.',
    keyword: 'תוכן AI לעסקים',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l1.5 4.6 4.5 1-4.5 1-1.5 4.6-1.5-4.6-4.5-1 4.5-1L12 3z"/>
        <path d="M5.5 19.5l.5-1.5 1.5-.5-1.5-.5-.5-1.5-.5 1.5-1.5.5 1.5.5.5 1.5z"/>
      </svg>
    ),
  },
  {
    to: '/services/paid-ads',
    tag: 'פרסום',
    tagColor: '#00d478',
    title: 'ניהול קמפיינים ממומנים',
    desc: 'Meta Ads, Google Ads וריטארגטינג שמביאים לידים איכותיים — עם מעקב ואופטימיזציה שוטפת.',
    keyword: 'פרסום ממומן ישראל',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    to: '/services/seo',
    tag: 'SEO',
    tagColor: '#ffb347',
    title: 'קידום אורגני SEO',
    desc: 'להופיע ראשון כשהלקוחות שלכם מחפשים. מחקר מילות מפתח, תוכן SEO ואופטימיזציה טכנית.',
    keyword: 'קידום אתרים בגוגל',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
      </svg>
    ),
  },
]

export default function ServicesPage() {
  const [ref, visible] = useReveal()

  return (
    <>
      <Helmet>
        <title>שירותי שיווק דיגיטלי | עיצוב אתרים, תוכן AI, פרסום ו-SEO | VELO DIGITAL</title>
        <meta name="description" content="כל שירותי השיווק הדיגיטלי תחת קורת גג אחת — עיצוב אתרים, דפי נחיתה, חנויות Shopify, תוכן AI, ניהול קמפיינים וקידום SEO. הכל עובד ביחד." />
        <meta name="keywords" content="שירותי שיווק דיגיטלי, עיצוב אתרים לעסקים, דפי נחיתה, Shopify ישראל, תוכן AI, ניהול קמפיינים, קידום SEO" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/services" />
        <meta property="og:title" content="שירותי שיווק דיגיטלי | VELO DIGITAL" />
        <meta property="og:description" content="עיצוב אתרים, דפי נחיתה, Shopify, תוכן AI, קמפיינים ו-SEO — הכל עובד ביחד." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:url" content="https://liorvelikin.github.io/velo-website/services" />
        <meta property="og:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="שירותי שיווק דיגיטלי | VELO DIGITAL" />
        <meta name="twitter:description" content="עיצוב אתרים, דפי נחיתה, Shopify, תוכן AI, קמפיינים ו-SEO — הכל עובד ביחד." />
        <meta name="twitter:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
      </Helmet>

      <PageHero
        tag="מה אנחנו עושים"
        title="כל הכלים שצריך — מערכת אחת"
        accent="מערכת אחת"
        subtitle="כל שירות שאנחנו מספקים מחובר לשאר. תוכן, אתר, פרסום ואוטומציה עובדים יחד — לא בנפרד."
      />

      <section style={{ padding: 'clamp(32px,6vw,72px) 0', direction: 'rtl' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={ref}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}
          >
            {services.map((svc, i) => (
              <Link
                key={svc.to}
                to={svc.to}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="svc-card"
                  style={{
                    cursor: 'pointer', height: '100%',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'none' : 'translateY(24px)',
                    transition: `opacity 0.5s ease ${i * 60}ms, transform 0.5s ease ${i * 60}ms`,
                  }}
                >
                  <div style={{ position: 'relative', zIndex: 2, padding: '28px 26px 24px', display: 'flex', flexDirection: 'column', gap: 14, height: '100%', boxSizing: 'border-box' }}>
                    <div className="svc-icon-wrap" style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(26,111,255,0.1)', border: '1px solid rgba(26,111,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4d9fff', flexShrink: 0 }}>
                      {svc.icon}
                    </div>
                    <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', lineHeight: 1.3, margin: 0 }}>{svc.title}</h3>
                    <p className="svc-desc" style={{ color: '#8ba3c7', fontSize: '0.88rem', lineHeight: 1.65, margin: 0, flex: 1 }}>{svc.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 8 }}>
                      <span style={{ background: 'rgba(26,111,255,0.1)', border: '1px solid rgba(26,111,255,0.25)', borderRadius: 100, padding: '3px 11px', fontSize: '0.7rem', fontWeight: 700, color: svc.tagColor }}>
                        {svc.tag}
                      </span>
                      <span style={{ color: '#4d9fff', fontSize: '0.82rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                        למידע נוסף
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Velocity method brief */}
          <div style={{ marginTop: 64, padding: 'clamp(28px,4vw,48px)', borderRadius: 20, background: 'rgba(26,111,255,0.05)', border: '1px solid rgba(26,111,255,0.15)', textAlign: 'center' }}>
            <div className="tag-pill" style={{ marginBottom: 20, display: 'inline-flex' }}>שיטת Velocity</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              למה <span className="gradient-text">מערכת</span> עובדת יותר מפעולות בודדות?
            </h2>
            <p style={{ color: '#8ba3c7', fontSize: '1rem', lineHeight: 1.75, maxWidth: 620, margin: '0 auto 28px' }}>
              כשהתוכן שלכם מחובר לאתר שמחובר לקמפיינים שמחוברים לאוטומציה — כל חלק מחזק את האחרים. זו ההבדל בין "להיות בדיגיטל" לבין שיווק שמייצר לקוחות.
            </p>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <button className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
                </svg>
                <span>קבלו אבחון חינם</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(32px,5vw,64px) 0', direction: 'rtl' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', letterSpacing: '-0.02em', marginBottom: 10 }}>
              לא בטוחים <span className="gradient-text">מאיפה להתחיל?</span>
            </h2>
            <p style={{ color: '#8ba3c7', fontSize: '0.95rem', lineHeight: 1.65 }}>
              ספרו לנו על העסק — ואנחנו נגיד לכם בדיוק מה יביא לכם את התוצאות הכי מהירות.
            </p>
          </div>
          <ContactForm source="services-page" />
        </div>
      </section>
    </>
  )
}
