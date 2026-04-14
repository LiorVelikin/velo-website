import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/shared/PageHero'
import ContactForm from '../../components/shared/ContactForm'
import BrowserMockup from '../../components/shared/BrowserMockup'

/* ── SVG Icons ── */
const IconShoppingBag = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
  </svg>
)
const IconPackage = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
)
const IconTrendingUp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
)
const IconSmartphone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
)
const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
  </svg>
)
const IconLink = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
  </svg>
)
const IconStar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)
const IconCreditCard = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
)

const painPoints = [
  { icon: <IconShoppingBag />, text: '70%+ מהגולשים עוזבים את העגלה לפני הרכישה' },
  { icon: <IconSmartphone />, text: 'חנות שלא מותאמת למובייל — מאבדת 60% מהמכירות' },
  { icon: <IconSearch />,     text: 'לא נמצאים בגוגל כשאנשים מחפשים את המוצרים שלכם' },
  { icon: <IconStar />,       text: 'חנות שנראית "גנרית" — לא בונה אמון ולא מוכרת' },
]

const features = [
  { icon: <IconPackage />,    color: '#00d4b8', title: 'עיצוב Shopify מותאם אישית', desc: 'לא תבנית מדף. חנות שמשקפת את המותג שלכם ובנויה לפי קהל הקנייה הספציפי שלכם.' },
  { icon: <IconShoppingBag />,color: '#4d9fff', title: 'UX שמוריד נטישת עגלה',       desc: 'פלואו רכישה מינימליסטי, sticky CTA, ו-trust signals — יותר גולשים יסיימו לקנות.' },
  { icon: <IconStar />,       color: '#a07dff', title: 'Product Pages שמוכרות',      desc: 'תמונות, תיאורים שממירים, ו-social proof — כל דף מוצר הוא דף מכירה עצמאי.' },
  { icon: <IconSmartphone />, color: '#00c8ff', title: 'מהירות ומובייל',             desc: 'Shopify מותאם למובייל — אנחנו מוודאים 95+ ב-PageSpeed על כל מכשיר.' },
  { icon: <IconSearch />,     color: '#ffb347', title: 'SEO לאיקומרס',               desc: 'ארכיטקטורת URL נכונה, meta tags למוצרים, schema markup — הקטלוג שלכם בגוגל.' },
  { icon: <IconLink />,       color: '#00d478', title: 'אינטגרציות ואוטומציות',      desc: 'Klaviyo, Meta Pixel, Google Ads, WhatsApp — מערכת שמוכרת גם כשאתם ישנים.' },
]

const shopifyStats = [
  { metric: '4.7M+', label: 'חנויות פעילות בעולם' },
  { metric: '$444B', label: 'מחזור מכירות שנתי' },
  { metric: '99.99%', label: 'Uptime מובטח' },
]

const faqs = [
  { q: 'האם Shopify מתאים לכל גודל עסק?',  a: 'כן. מחנות קטנה בתחילת דרכה ועד מותגים גדולים עם אלפי מוצרים. Shopify scales איתכם.' },
  { q: 'כמה עולה ה-subscription של Shopify?', a: 'מ-$29 לחודש לתוכנית בסיסית. אנחנו מסייעים לבחור את התוכנית הנכונה לגודל שלכם.' },
  { q: 'כמה זמן לוקח להקים חנות?',          a: 'חנות בסיסית — 2-3 שבועות. חנות מורכבת עם אינטגרציות — 4-8 שבועות.' },
  { q: 'האם אתם מעלים את המוצרים?',         a: 'כן, עד כמות מוסכמת. לחנויות גדולות — מעבירים אתכם איך להעלות בצורה יעילה.' },
]

/* ── Zenora Jewelry Showcase ── */
function ZenoraShowcase() {
  return (
    <BrowserMockup url="zenorajewelry.com" accentColor="#c9a96e">
      <div style={{ height: 360, background: 'linear-gradient(160deg, #0d0905 0%, #1a1209 50%, #0f0d08 100%)', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle texture */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(201,169,110,0.06) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(201,169,110,0.04) 0%, transparent 50%)' }} />
        {/* Nav */}
        <div style={{ height: 48, display: 'flex', alignItems: 'center', padding: '0 24px', justifyContent: 'space-between', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
          <div style={{ color: 'rgba(201,169,110,0.7)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em', fontFamily: 'serif' }}>ZENORA</div>
          <div style={{ display: 'flex', gap: 20 }}>
            {[52, 44, 56, 36].map((w,i) => <div key={i} style={{ width: w, height: 7, borderRadius: 3, background: 'rgba(255,255,255,0.12)' }} />)}
          </div>
          <div style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid rgba(201,169,110,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(201,169,110,0.7)" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
          </div>
        </div>
        {/* Hero */}
        <div style={{ padding: '28px 24px', display: 'flex', gap: 20 }}>
          <div style={{ flex: 1 }}>
            <div style={{ width: 80, height: 7, borderRadius: 3, background: 'rgba(201,169,110,0.3)', marginBottom: 14 }} />
            <div style={{ width: '90%', height: 14, borderRadius: 3, background: 'rgba(255,255,255,0.18)', marginBottom: 8 }} />
            <div style={{ width: '70%', height: 14, borderRadius: 3, background: 'rgba(255,255,255,0.12)', marginBottom: 8 }} />
            <div style={{ width: '55%', height: 10, borderRadius: 3, background: 'rgba(255,255,255,0.07)', marginBottom: 20 }} />
            <div style={{ width: 110, height: 36, borderRadius: 4, background: 'linear-gradient(135deg, rgba(201,169,110,0.8), rgba(180,140,70,0.6))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 70, height: 8, borderRadius: 3, background: 'rgba(255,255,255,0.5)' }} />
            </div>
          </div>
          {/* Product grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, width: 180 }}>
            {[
              ['rgba(201,169,110,0.15)', 'rgba(201,169,110,0.25)'],
              ['rgba(180,140,70,0.1)', 'rgba(201,169,110,0.2)'],
              ['rgba(201,169,110,0.12)', 'rgba(160,120,60,0.2)'],
              ['rgba(180,150,80,0.1)', 'rgba(201,169,110,0.15)'],
            ].map(([bg1, bg2], i) => (
              <div key={i} style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(201,169,110,0.1)', background: '#1a1209' }}>
                <div style={{ height: 64, background: `radial-gradient(circle at 50% 60%, ${bg2} 0%, ${bg1} 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(201,169,110,0.4)" stroke="none"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                </div>
                <div style={{ padding: '6px 8px' }}>
                  <div style={{ width: '80%', height: 6, borderRadius: 2, background: 'rgba(255,255,255,0.12)', marginBottom: 4 }} />
                  <div style={{ width: '50%', height: 5, borderRadius: 2, background: 'rgba(201,169,110,0.3)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom badge */}
        <div style={{ position: 'absolute', bottom: 14, left: 24, right: 24 }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '8px 14px', background: 'rgba(201,169,110,0.08)', borderRadius: 8, border: '1px solid rgba(201,169,110,0.18)', width: 'fit-content' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#28c840' }} />
            <span style={{ color: 'rgba(201,169,110,0.75)', fontSize: '0.68rem', fontWeight: 600 }}>Shopify Plus — Live Store</span>
          </div>
        </div>
      </div>
    </BrowserMockup>
  )
}

export default function EcommercePage() {
  const [featuresRef, featuresVis] = useReveal()
  const [statsRef, statsVis] = useReveal()

  return (
    <>
      <Helmet>
        <title>בניית חנות Shopify | VELO Studio — חנות שמוכרת לא רק נראית טוב</title>
        <meta name="description" content="בניית חנות Shopify מקצועית לעסקים ישראלים — עיצוב מותאם אישית, UX שמוריד נטישת עגלה, ו-SEO לאיקומרס. VELO Studio מלווה מהגדרת החנות ועד הגדילה." />
        <meta name="keywords" content="Shopify ישראל, בניית חנות אינטרנטית, חנות Shopify מקצועית, עיצוב חנות אונליין, איקומרס ישראל" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/services/ecommerce" />
      </Helmet>

      <PageHero
        tag="חנויות Shopify"
        title="חנות שמוכרת — לא רק נראית טוב"
        accent="מוכרת"
        subtitle="Shopify עם עיצוב מותאם אישית, UX שמוריד נטישת עגלה, ואינטגרציות שמייצרות מכירות — גם כשאתם לא ליד המסך."
      />

      {/* Pain Points */}
      <section style={{ padding: 'clamp(48px,7vw,80px) 0', direction: 'rtl' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>הבעיה הנפוצה</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em' }}>
              למה החנות שלכם <span className="gradient-text">לא מגיעה לפוטנציאל?</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {painPoints.map((p, i) => (
              <div key={i} className="glass-card" style={{ padding: '22px 24px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(0,212,184,0.1)', border: '1px solid rgba(0,212,184,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00d4b8', flexShrink: 0 }}>
                  {p.icon}
                </div>
                <p style={{ color: '#8ba3c7', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zenora Project Showcase */}
      <section style={{ padding: 'clamp(32px,5vw,64px) 0', direction: 'rtl' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px', minWidth: 0 }}>
              <ZenoraShowcase />
            </div>
            <div style={{ flex: '1 1 320px', minWidth: 0 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20, background: 'rgba(201,169,110,0.08)', border: '1px solid rgba(201,169,110,0.2)', borderRadius: 100, padding: '5px 14px' }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#28c840' }} />
                <span style={{ color: 'rgba(201,169,110,0.85)', fontSize: '0.75rem', fontWeight: 600 }}>פרויקט אמיתי — zenorajewelry.com</span>
              </div>
              <h2 className="font-black" style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)', letterSpacing: '-0.02em', marginBottom: 14 }}>
                Zenora Jewelry —<br /><span className="gradient-text">מהקמה ועד מכירות</span>
              </h2>
              <p style={{ color: '#8ba3c7', fontSize: '0.92rem', lineHeight: 1.75, marginBottom: 24 }}>
                מותג תכשיטים שבנינו מהיסוד. עיצוב Shopify מותאם לקהל נשים, product pages שמכסים את כל ה-objections, ו-UX שמוריד נטישת עגלה מ-72% ל-38%.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
                {[
                  { label: 'ירידה בנטישת עגלה', value: '-47%', color: '#00d4b8' },
                  { label: 'עלייה בהכנסה חודשית', value: '+180%', color: '#4d9fff' },
                  { label: 'PageSpeed Mobile', value: '94/100', color: '#a07dff' },
                  { label: 'זמן עד להשקה', value: '21 יום', color: '#ffb347' },
                ].map((s, i) => (
                  <div key={i} style={{ padding: '14px 16px', background: 'rgba(255,255,255,0.03)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ color: s.color, fontWeight: 800, fontSize: '1.2rem', lineHeight: 1 }}>{s.value}</div>
                    <div style={{ color: '#6a88ad', fontSize: '0.75rem', marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20 }}>
                <a href="https://zenorajewelry.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, color: '#4d9fff', fontSize: '0.88rem', fontWeight: 600 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  צפו בחנות החיה
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shopify Why */}
      <section ref={statsRef} style={{ padding: 'clamp(32px,5vw,56px) 0', direction: 'rtl', background: 'rgba(0,212,184,0.03)', borderTop: '1px solid rgba(0,212,184,0.08)', borderBottom: '1px solid rgba(0,212,184,0.08)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', letterSpacing: '-0.02em' }}>
              למה <span className="gradient-text">Shopify?</span>
            </h2>
            <p style={{ color: '#6a88ad', fontSize: '0.88rem', marginTop: 8 }}>הפלטפורמה שמאחורי המותגים הגדולים בעולם</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {shopifyStats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '24px 20px', background: 'rgba(0,212,184,0.05)', borderRadius: 16, border: '1px solid rgba(0,212,184,0.12)', opacity: statsVis ? 1 : 0, transform: statsVis ? 'none' : 'translateY(12px)', transition: `opacity 0.5s ease ${i * 120}ms, transform 0.5s ease ${i * 120}ms` }}>
                <div style={{ color: '#00d4b8', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1 }}>{s.metric}</div>
                <div style={{ color: '#6a88ad', fontSize: '0.82rem', marginTop: 8 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} style={{ padding: 'clamp(48px,7vw,80px) 0', direction: 'rtl' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>מה כולל הפרויקט</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em' }}>
              חנות שבנויה <span className="gradient-text">לצמיחה</span>
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
              רוצים חנות שמוכרת <span className="gradient-text">ב-Autopilot?</span>
            </h2>
            <p style={{ color: '#8ba3c7', fontSize: '0.95rem', lineHeight: 1.65 }}>
              ספרו לנו על המוצרים שלכם — ונגיד לכם איך להפוך גולשים ללקוחות.
            </p>
          </div>
          <ContactForm source="ecommerce-page" />
        </div>
      </section>
    </>
  )
}
