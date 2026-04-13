import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/shared/PageHero'
import ContactForm from '../../components/shared/ContactForm'

const painPoints = [
  { icon: '👻', text: 'אתם ב"עמוד שני" של גוגל — שם שאף אחד לא מגיע' },
  { icon: '💸', text: 'כל לקוח שמגיע עולה כסף — SEO נותן תנועה חינמית' },
  { icon: '🏃', text: 'המתחרים שלכם נמצאים מעליכם בתוצאות — ומקבלים את הלידים' },
  { icon: '🔧', text: 'אתר עם בעיות טכניות שגוגל לא אוהב — בלי שאתם יודעים' },
]

const seoServices = [
  {
    title: 'מחקר מילות מפתח',
    desc: 'מזהים את הביטויים שהלקוחות שלכם מחפשים — בפועל. לא מנחשים, מסתמכים על נתונים.',
    color: '#ffb347',
  },
  {
    title: 'On-Page SEO',
    desc: 'כותרות, meta tags, תוכן, מבנה URL ו-internal linking — כל עמוד מותאם לביטוי שרלוונטי לו.',
    color: '#ffb347',
  },
  {
    title: 'SEO טכני',
    desc: 'מהירות, Core Web Vitals, sitemap, robots.txt, structured data — הבסיס שגוגל צריך לסרוק אתכם.',
    color: '#ffb347',
  },
  {
    title: 'תוכן SEO',
    desc: 'כתבות ועמודי שירות שמדורגים לביטויים ספציפיים — ומביאים תנועה אורגנית חודש אחרי חודש.',
    color: '#ffb347',
  },
  {
    title: 'Local SEO',
    desc: 'Google Business Profile, ביקורות, ו-NAP consistency — לעסקים שרוצים להופיע בחיפוש המקומי.',
    color: '#ffb347',
  },
  {
    title: 'GEO — AI Search Optimization',
    desc: 'האופטימיזציה של 2025-2026: להופיע בתשובות של ChatGPT, Gemini ו-Perplexity. הדור הבא של SEO.',
    color: '#ffb347',
  },
]

const stats = [
  { metric: '53%', label: 'מהתנועה לאתרים מגיעה מחיפוש אורגני' },
  { metric: '75%', label: 'מהגולשים לא עוברים לעמוד השני בגוגל' },
  { metric: '14.6%', label: 'שיעור המרה ממוצע לתנועה אורגנית לעומת 1.7% בפרסום קר' },
]

const faqs = [
  { q: 'כמה זמן לוקח לראות תוצאות SEO?', a: 'SEO הוא השקעה לטווח ארוך. תוצאות ראשוניות תוך 3-6 חודשים, תוצאות משמעותיות תוך 6-12 חודשים. אבל בניגוד לפרסום — התוצאות נשארות.' },
  { q: 'כמה פוסטים/כתבות צריך לכתוב?', a: 'איכות על כמות. 2-4 כתבות מעמיקות בחודש עדיפות על 20 כתבות קצרות וגנריות.' },
  { q: 'האם SEO עובד גם לעסקים קטנים?', a: 'בהחלט. לעסקים קטנים ומקומיים — Local SEO הוא המשחנגר הכי גדול. המתחרים הגדולים לרוב לא מתאמצים ב-Long tail.' },
  { q: 'מה ההבדל בין SEO ל-GEO?', a: 'SEO מתמקד בדירוג בתוצאות החיפוש הרגילות של גוגל. GEO (Generative Engine Optimization) עוסק בהופעה בתשובות של מנועי AI כמו ChatGPT ו-Gemini.' },
]

export default function SeoPage() {
  const [ref, visible] = useReveal()
  const [statsRef, statsVisible] = useReveal()

  return (
    <>
      <Helmet>
        <title>קידום אתרים SEO | VELO Studio — להופיע ראשון בגוגל</title>
        <meta name="description" content="קידום אתרים אורגני SEO לעסקים בישראל — מחקר מילות מפתח, תוכן SEO, אופטימיזציה טכנית ו-GEO לאתרי AI. VELO Studio מביא תנועה אורגנית שממירה ללקוחות." />
        <meta name="keywords" content="קידום אתרים SEO, קידום בגוגל, SEO ישראל, קידום אורגני, מחקר מילות מפתח" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/services/seo" />
      </Helmet>

      <PageHero
        tag="SEO"
        title="להופיע ראשון — כשהלקוחות מחפשים"
        accent="להופיע ראשון"
        subtitle="קידום אורגני שמביא תנועה חינמית, ממוקדת, ונשארת לאורך זמן — בניגוד לפרסום שנעצר כשמפסיקים לשלם."
      />

      {/* Pain Points */}
      <section style={{ padding: 'clamp(40px,6vw,72px) 0', direction: 'rtl' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em', marginBottom: 12 }}>
              למה <span className="gradient-text">לקוחות לא מוצאים אתכם?</span>
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

      {/* Stats */}
      <section ref={statsRef} style={{ padding: 'clamp(32px,5vw,60px) 0', direction: 'rtl' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, textAlign: 'center' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ opacity: statsVisible ? 1 : 0, transform: statsVisible ? 'none' : 'translateY(16px)', transition: `opacity 0.5s ease ${i * 120}ms, transform 0.5s ease ${i * 120}ms` }}>
                <div style={{ color: '#ffb347', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1 }}>{s.metric}</div>
                <div style={{ color: '#8ba3c7', fontSize: '0.85rem', marginTop: 10, lineHeight: 1.5 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} style={{ padding: 'clamp(40px,6vw,72px) 0', direction: 'rtl' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>מה כולל השירות</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em' }}>
              SEO מלא — <span className="gradient-text">מ-0 לדף ראשון</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {seoServices.map((s, i) => (
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
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,179,71,0.1)', border: '1px solid rgba(255,179,71,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffb347' }} />
                </div>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: '#8ba3c7', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEO highlight */}
      <section style={{ padding: 'clamp(32px,5vw,56px) 0', direction: 'rtl' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div style={{ padding: 'clamp(28px,4vw,48px)', borderRadius: 20, background: 'rgba(255,179,71,0.05)', border: '1px solid rgba(255,179,71,0.2)', textAlign: 'center' }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>חדש: GEO</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              האם העסק שלכם מופיע <span className="gradient-text">בתשובות AI?</span>
            </h2>
            <p style={{ color: '#8ba3c7', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
              ChatGPT, Gemini, ו-Perplexity מחליפים חיפוש מסורתי. GEO — Generative Engine Optimization — מוודא שהעסק שלכם מופיע בתשובות שהם נותנים ללקוחות. זה SEO של 2025-2026.
            </p>
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
              רוצים להופיע ראשון <span className="gradient-text">בגוגל?</span>
            </h2>
            <p style={{ color: '#8ba3c7', fontSize: '0.95rem', lineHeight: 1.65 }}>
              ספרו לנו על העסק — ונעשה ביקורת SEO חינמית ונגיד בדיוק מה חסר.
            </p>
          </div>
          <ContactForm source="seo-page" />
        </div>
      </section>
    </>
  )
}
