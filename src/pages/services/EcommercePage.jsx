import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/shared/PageHero'
import ContactForm from '../../components/shared/ContactForm'

const painPoints = [
  { icon: '🛒', text: '70%+ מהגולשים עוזבים את העגלה לפני הרכישה' },
  { icon: '📱', text: 'חנות שלא מותאמת למובייל — מאבדת 60% מהמכירות' },
  { icon: '🔍', text: 'לא נמצאים בגוגל כשאנשים מחפשים את המוצרים שלכם' },
  { icon: '😕', text: 'חנות שנראית "גנרית" — לא בונה אמון ולא מוכרת' },
]

const features = [
  { title: 'עיצוב Shopify מותאם אישית', desc: 'לא תבנית מדף. חנות שמשקפת את המותג שלכם ובנויה לפי הקהל הספציפי שלכם.' },
  { title: 'UX שמוריד נטישת עגלה', desc: 'פלואו רכישה מינימליסטי, sticky CTA, ו-trust signals — כדי שיותר גולשים יסיימו לקנות.' },
  { title: 'Product Pages שמוכרות', desc: 'תמונות מקצועיות, תיאורים שממירים, ו-social proof — כל דף מוצר הוא דף מכירה עצמאי.' },
  { title: 'מהירות ומובייל', desc: 'Shopify מותאם למובייל by default — אנחנו מוודאים שהחנות שלכם 95+ ב-PageSpeed.' },
  { title: 'SEO לאיקומרס', desc: 'ארכיטקטורת URL נכונה, meta tags למוצרים, ו-schema markup — כדי שגוגל יראה את הקטלוג שלכם.' },
  { title: 'אינטגרציות ואוטומציות', desc: 'חיבור ל-Klaviyo, Meta Pixel, Google Ads, ו-WhatsApp — מערכת שמוכרת גם כשאתם ישנים.' },
]

const shopifyWhy = [
  { title: 'האמין ביותר בעולם', desc: 'מיליוני חנויות. תשתית שלא קורסת בעומסים.' },
  { title: 'תשלומים מובנים', desc: 'Shopify Payments, PayPal, Apple Pay — מוכנים מהיום הראשון.' },
  { title: 'אפליקציות ל-כל צורך', desc: 'ביקורות, מנוי, upsell, loyalty — כל מה שצריך לצמיחה.' },
]

const faqs = [
  { q: 'האם Shopify מתאים לכל גודל עסק?', a: 'כן. מחנות קטנה בתחילת דרכה ועד מותגים גדולים עם אלפי מוצרים. Shopify scales איתכם.' },
  { q: 'כמה עולה ה-subscription של Shopify?', a: 'מ-$29 לחודש לתוכנית בסיסית. אנחנו מסייעים לבחור את התוכנית הנכונה לגודל שלכם.' },
  { q: 'כמה זמן לוקח להקים חנות?', a: 'חנות בסיסית — 2-3 שבועות. חנות מורכבת עם אינטגרציות — 4-8 שבועות.' },
  { q: 'האם אתם מעלים את המוצרים?', a: 'כן, עד כמות מוסכמת. לחנויות גדולות — מעבירים אתכם איך להעלות בצורה יעילה.' },
]

export default function EcommercePage() {
  const [ref, visible] = useReveal()

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
      <section style={{ padding: 'clamp(40px,6vw,72px) 0', direction: 'rtl' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em', marginBottom: 12 }}>
              למה החנות שלכם <span className="gradient-text">לא מגיעה לפוטנציאל?</span>
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

      {/* Why Shopify */}
      <section style={{ padding: 'clamp(32px,5vw,60px) 0', direction: 'rtl' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ padding: 'clamp(28px,4vw,48px)', borderRadius: 20, background: 'rgba(0,212,184,0.05)', border: '1px solid rgba(0,212,184,0.15)' }}>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>למה Shopify?</div>
              <h2 className="font-black" style={{ fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', letterSpacing: '-0.02em' }}>
                הפלטפורמה שמאחורי <span className="gradient-text">המותגים הגדולים</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
              {shopifyWhy.map((item, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '16px 12px' }}>
                  <h3 style={{ color: '#00d4b8', fontWeight: 700, fontSize: '0.95rem', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ color: '#8ba3c7', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={ref} style={{ padding: 'clamp(40px,6vw,72px) 0', direction: 'rtl' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>מה כולל הפרויקט</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em' }}>
              חנות שבנויה <span className="gradient-text">לצמיחה</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {features.map((f, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: '26px 24px',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'none' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                }}
              >
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(0,212,184,0.1)', border: '1px solid rgba(0,212,184,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00d4b8' }} />
                </div>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: '#8ba3c7', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
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
