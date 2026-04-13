import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/shared/PageHero'
import ContactForm from '../../components/shared/ContactForm'

const painPoints = [
  { icon: '😤', text: 'יש לכם אתר שנראה טוב — אבל לא מביא לקוחות' },
  { icon: '💸', text: 'שילמתם הרבה לעיצוב שכבר לא מייצג אתכם' },
  { icon: '🐌', text: 'האתר שלכם איטי, לא מותאם למובייל, ולא נמצא בגוגל' },
  { icon: '🤷', text: 'אין לכם מושג כמה גולשים מגיעים ומה הם עושים שם' },
]

const features = [
  { title: 'עיצוב ממוקד המרות', desc: 'כל עמוד נבנה עם מסלול ברור לפעולה — מהכניסה ועד ליצירת הקשר. לא רק יפה, אלא עובד.' },
  { title: 'מותאם לכל מכשיר', desc: 'מובייל-פירסט. 70% מהגולשים שלכם מגיעים מהטלפון — האתר שלכם חייב להיראות מושלם שם.' },
  { title: 'מהיר כמו ברק', desc: 'זמן טעינה מתחת ל-2 שניות. כל שנייה שהאתר לוקח — אתם מאבדים לקוחות לטובת המתחרים.' },
  { title: 'SEO מובנה מהיסוד', desc: 'מבנה נכון, מטא-תגים, ומהירות — כדי שגוגל יאהב אתכם מהיום הראשון.' },
  { title: 'מחובר לכלי ניתוח', desc: 'Google Analytics, הפיקסל של Meta, וכלי חום (heatmaps) — כדי שתדעו בדיוק מה עובד.' },
  { title: 'מוכן לצמיחה', desc: 'אתר שאפשר להוסיף לו דפים, שפות ופיצ\'רים בלי לבנות מחדש.' },
]

const processSteps = [
  { num: '01', title: 'גילוי ואסטרטגיה', desc: 'מבינים את הקהל שלכם, המתחרים, ומה שמייחד אתכם. בונים אסטרטגיה לפני שנוגעים בעיצוב.' },
  { num: '02', title: 'ארכיטקטורה ו-Wireframes', desc: 'מגדירים את המבנה, הפלואו, וה-CTA לפי שיטת CRO — לפני שמשקיעים בעיצוב.' },
  { num: '03', title: 'עיצוב ויזואלי', desc: 'עיצוב שמשקף את המותג שלכם ויוצר אמון מהשנייה הראשונה.' },
  { num: '04', title: 'פיתוח ואינטגרציות', desc: 'קוד נקי, אופטימיזציית מהירות, וחיבור לכל הכלים שאתם צריכים.' },
  { num: '05', title: 'השקה ומעקב', desc: 'השקה מבוקרת, בדיקות ב-A/B, ומדידה — כי לא עוצרים בהשקה.' },
]

const faqs = [
  { q: 'כמה זמן לוקח לבנות אתר?', a: 'בדרך כלל 3-6 שבועות, תלוי בגודל הפרויקט. דפי נחיתה פשוטים יכולים להיות מוכנים תוך שבוע.' },
  { q: 'מה ההבדל בין אתר "רגיל" לאתר שמביא לקוחות?', a: 'אתר "רגיל" מציג מידע. אתר שמביא לקוחות בנוי עם מסלול שמוביל את הגולש לפעולה — יצירת קשר, קנייה, או הרשמה.' },
  { q: 'מה הפלטפורמות שאתם עובדים איתן?', a: 'React/Next.js לאתרים מתקדמים, WordPress עם Elementor לאתרי תוכן, Shopify לאיקומרס.' },
  { q: 'האם תעזרו לנו גם לאחר ההשקה?', a: 'כן. מציעים חבילות תחזוקה חודשיות — עדכונים, שינויים, ומעקב על הביצועים.' },
]

export default function WebDesignPage() {
  const [ref, visible] = useReveal()
  const [processRef, processVisible] = useReveal()

  return (
    <>
      <Helmet>
        <title>עיצוב אתרים לעסקים | VELO Studio — בניית אתר שמביא לקוחות</title>
        <meta name="description" content="בניית אתרים לעסקים שמביאים לקוחות — לא סתם אתרים יפים. עיצוב ממוקד המרות, מהיר, מותאם למובייל ו-SEO. VELO Studio מלווה עסקים בישראל מהאסטרטגיה ועד ההשקה." />
        <meta name="keywords" content="בניית אתר לעסק, עיצוב אתרים ישראל, אתר שמביא לקוחות, בניית אתר מקצועי, עיצוב אתרים ממוקד המרות" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/services/web-design" />
      </Helmet>

      <PageHero
        tag="עיצוב אתרים"
        title="אתר שעובד בשבילכם — 24/7"
        accent="עובד בשבילכם"
        subtitle="לא רק אתר יפה. אתר שמבין את הלקוח שלכם, מוביל אותו לפעולה, ומדיד מהיום הראשון."
      />

      {/* Pain Points */}
      <section style={{ padding: 'clamp(40px,6vw,72px) 0', direction: 'rtl' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em', marginBottom: 12 }}>
              מכירים את <span className="gradient-text">התסכול הזה?</span>
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

      {/* Features */}
      <section
        ref={ref}
        style={{ padding: 'clamp(40px,6vw,72px) 0', direction: 'rtl' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>מה כולל הפרויקט</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em' }}>
              אתר שבנוי <span className="gradient-text">לתוצאות</span>
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
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(26,111,255,0.12)', border: '1px solid rgba(26,111,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4d9fff' }} />
                </div>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: '#8ba3c7', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
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
              איך זה <span className="gradient-text">עובד?</span>
            </h2>
            <p style={{ color: '#8ba3c7', fontSize: '0.95rem' }}>5 שלבים מוכחים מהאסטרטגיה ועד השקה</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {processSteps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start',
                  opacity: processVisible ? 1 : 0,
                  transform: processVisible ? 'none' : 'translateX(16px)',
                  transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`,
                }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(26,111,255,0.1)', border: '1px solid rgba(26,111,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', color: '#4d9fff', flexShrink: 0 }}>
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
              מוכנים לאתר שמביא <span className="gradient-text">תוצאות אמיתיות?</span>
            </h2>
            <p style={{ color: '#8ba3c7', fontSize: '0.95rem', lineHeight: 1.65 }}>
              ספרו לנו על העסק — ונגיד לכם בדיוק מה האתר שלכם צריך לשנות.
            </p>
          </div>
          <ContactForm source="web-design-page" />
        </div>
      </section>
    </>
  )
}
