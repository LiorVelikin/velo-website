import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/shared/PageHero'
import ContactForm from '../../components/shared/ContactForm'
import { serviceSchema, breadcrumbSchema } from '../../components/shared/SchemaOrg'

/* ── SVG Icons ── */
const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
  </svg>
)
const IconCode = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
)
const IconEdit = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
)
const IconMapPin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const IconZap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)
const IconCpu = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
  </svg>
)
const IconBarChart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
)
const IconEye = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
)

const painPoints = [
  { icon: <IconEye />,    text: 'אתם ב"עמוד שני" של גוגל — שם שאף אחד לא מגיע' },
  { icon: <IconZap />,    text: 'כל לקוח שמגיע עולה כסף — SEO נותן תנועה חינמית לצמיתות' },
  { icon: <IconBarChart />, text: 'המתחרים שלכם מופיעים מעליכם ומקבלים את הלידים האורגניים' },
  { icon: <IconCode />,   text: 'בעיות טכניות באתר שגוגל לא אוהב — בלי שאתם יודעים' },
]

const seoServices = [
  { icon: <IconSearch />, color: '#ffb347', title: 'מחקר מילות מפתח',  desc: 'מזהים את הביטויים שהלקוחות שלכם מחפשים — בפועל. לא מנחשים, מסתמכים על נתונים.' },
  { icon: <IconEdit />,   color: '#ffb347', title: 'On-Page SEO',       desc: 'כותרות, meta tags, תוכן, מבנה URL ו-internal linking — כל עמוד מותאם לביטוי הנכון.' },
  { icon: <IconCode />,   color: '#ffb347', title: 'SEO טכני',          desc: 'מהירות, Core Web Vitals, sitemap, robots.txt, structured data — הבסיס שגוגל צריך.' },
  { icon: <IconEdit />,   color: '#ffb347', title: 'תוכן SEO',          desc: 'כתבות ועמודי שירות שמדורגים לביטויים ספציפיים — ומביאים תנועה חודש אחרי חודש.' },
  { icon: <IconMapPin />, color: '#ffb347', title: 'Local SEO',         desc: 'Google Business Profile, ביקורות, ו-NAP consistency — להופיע בחיפוש המקומי.' },
  { icon: <IconCpu />,    color: '#ffb347', title: 'GEO — AI Search',   desc: 'לצוץ בתשובות של ChatGPT, Gemini ו-Perplexity. הדור הבא של קידום אורגני.' },
]

const stats = [
  { metric: '53%',  label: 'מהתנועה לאתרים מגיעה מחיפוש אורגני',   color: '#ffb347' },
  { metric: '75%',  label: 'מהגולשים לא עוברים לעמוד השני בגוגל',   color: '#ff9f47' },
  { metric: '14.6%', label: 'שיעור המרה אורגני לעומת 1.7% בפרסום קר', color: '#ffd347' },
  { metric: '3-6',  label: 'חודשים לתוצאות ראשוניות משמעותיות',     color: '#ffb347' },
]

const faqs = [
  { q: 'כמה זמן לוקח לראות תוצאות SEO?',    a: 'SEO הוא השקעה לטווח ארוך. תוצאות ראשוניות תוך 3-6 חודשים, תוצאות משמעותיות תוך 6-12 חודשים. אבל בניגוד לפרסום — התוצאות נשארות.' },
  { q: 'כמה כתבות צריך לכתוב בחודש?',       a: 'איכות על כמות. 2-4 כתבות מעמיקות בחודש עדיפות על 20 כתבות קצרות וגנריות.' },
  { q: 'האם SEO עובד גם לעסקים קטנים?',     a: 'בהחלט. לעסקים קטנים ומקומיים — Local SEO הוא המשחנגר הכי גדול. המתחרים הגדולים לרוב לא מתאמצים ב-Long tail.' },
  { q: 'מה ההבדל בין SEO ל-GEO?',           a: 'SEO מתמקד בדירוג בתוצאות החיפוש הרגילות של גוגל. GEO עוסק בהופעה בתשובות של מנועי AI כמו ChatGPT ו-Gemini — הדור הבא.' },
]

/* ── Google SERP mockup ── */
function SerpMockup() {
  return (
    <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,179,71,0.15)', background: '#0a0f1a', boxShadow: '0 24px 64px rgba(0,0,0,0.4), 0 0 80px rgba(255,179,71,0.06)' }}>
      {/* Search bar */}
      <div style={{ background: '#111622', padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: 10, alignItems: 'center' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 20, padding: '7px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ color: '#4d9fff', fontSize: '0.78rem', fontFamily: 'monospace', direction: 'ltr' }}>שירותי שיווק דיגיטלי ישראל</span>
          <div style={{ width: 1, height: 12, background: '#4d9fff', opacity: 0.7, animation: 'blink 1s step-end infinite' }} />
        </div>
      </div>
      {/* Results */}
      <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* #1 — our client */}
        <div style={{ padding: '14px 14px 12px', borderRadius: 10, background: 'rgba(255,179,71,0.05)', border: '1px solid rgba(255,179,71,0.14)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <div style={{ width: 16, height: 16, borderRadius: 3, background: 'rgba(255,179,71,0.3)' }} />
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.68rem', direction: 'ltr' }}>www.your-business.co.il</span>
            <div style={{ marginRight: 'auto', background: 'rgba(255,179,71,0.15)', border: '1px solid rgba(255,179,71,0.3)', borderRadius: 4, padding: '1px 7px', fontSize: '0.62rem', color: '#ffb347', fontWeight: 700 }}>מיקום #1</div>
          </div>
          <div style={{ width: '85%', height: 11, borderRadius: 3, background: '#4d9fff', opacity: 0.8, marginBottom: 6 }} />
          <div style={{ width: '95%', height: 8, borderRadius: 2, background: 'rgba(255,255,255,0.2)', marginBottom: 3 }} />
          <div style={{ width: '75%', height: 8, borderRadius: 2, background: 'rgba(255,255,255,0.13)' }} />
        </div>
        {/* #2 — competitor */}
        {[2, 3].map(num => (
          <div key={num} style={{ padding: '12px 14px', borderRadius: 8, opacity: 0.4 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <div style={{ width: 14, height: 14, borderRadius: 2, background: 'rgba(255,255,255,0.1)' }} />
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.65rem', direction: 'ltr' }}>www.competitor-{num}.co.il</span>
            </div>
            <div style={{ width: `${75 - num * 8}%`, height: 9, borderRadius: 2, background: 'rgba(255,255,255,0.1)', marginBottom: 5 }} />
            <div style={{ width: `${90 - num * 6}%`, height: 7, borderRadius: 2, background: 'rgba(255,255,255,0.07)' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SeoPage() {
  const [servicesRef, servicesVis] = useReveal()
  const [statsRef, statsVis] = useReveal()

  return (
    <>
      <Helmet>
        <title>קידום אתרים SEO | להופיע ראשון בגוגל בישראל | VELO Studio</title>
        <meta name="description" content="קידום אתרים אורגני SEO לעסקים בישראל — מחקר מילות מפתח, תוכן SEO, אופטימיזציה טכנית ו-GEO לאתרי AI. VELO Studio מביא תנועה אורגנית חינמית שממירה ללקוחות." />
        <meta name="keywords" content="קידום אתרים SEO, קידום בגוגל, SEO ישראל, קידום אורגני, מחקר מילות מפתח, אופטימיזציה לגוגל, SEO לעסקים, כתיבת תוכן SEO, קידום אתר חדש, GEO בינה מלאכותית, SEO טכני, לינק בילדינג ישראל" />
        <meta property="og:title" content="קידום אתרים SEO | VELO Studio" />
        <meta property="og:description" content="קידום אורגני SEO לעסקים בישראל — מחקר מילות מפתח, תוכן, SEO טכני ו-GEO. תנועה חינמית שממירה." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:url" content="https://liorvelikin.github.io/velo-website/services/seo" />
        <meta property="og:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="קידום אתרים SEO | VELO Studio" />
        <meta name="twitter:description" content="קידום אורגני SEO לעסקים — מחקר מילות מפתח, תוכן, SEO טכני ו-GEO. תנועה חינמית שממירה." />
        <meta name="twitter:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/services/seo" />
        <script type="application/ld+json">{serviceSchema('קידום אתרים SEO', 'קידום אורגני SEO לעסקים בישראל — מחקר מילות מפתח, תוכן SEO ואופטימיזציה טכנית.', '/services/seo')}</script>
        <script type="application/ld+json">{breadcrumbSchema([{name:'ראשי',path:'/'},{name:'שירותים',path:'/services'},{name:'קידום SEO',path:'/services/seo'}])}</script>
      </Helmet>

      <PageHero
        tag="SEO"
        title="להופיע ראשון — כשהלקוחות מחפשים"
        accent="להופיע ראשון"
        subtitle="קידום אורגני שמביא תנועה חינמית, ממוקדת, ונשארת לאורך זמן — בניגוד לפרסום שנעצר כשמפסיקים לשלם."
      />

      {/* Stats */}
      <section ref={statsRef} style={{ padding: 'clamp(24px,4vw,48px) 0', direction: 'rtl', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '20px 16px', borderLeft: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none', opacity: statsVis ? 1 : 0, transform: statsVis ? 'none' : 'translateY(12px)', transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms` }}>
                <div style={{ color: s.color, fontSize: 'clamp(1.4rem,3vw,2.2rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1 }}>{s.metric}</div>
                <div style={{ color: '#6a88ad', fontSize: '0.78rem', marginTop: 6, lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section style={{ padding: 'clamp(48px,7vw,80px) 0', direction: 'rtl' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>הבעיה</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em' }}>
              למה <span className="gradient-text">לקוחות לא מוצאים אתכם?</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {painPoints.map((p, i) => (
              <div key={i} className="glass-card" style={{ padding: '22px 24px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,179,71,0.1)', border: '1px solid rgba(255,179,71,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb347', flexShrink: 0 }}>
                  {p.icon}
                </div>
                <p style={{ color: '#8ba3c7', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERP showcase */}
      <section style={{ padding: 'clamp(32px,5vw,60px) 0', direction: 'rtl' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }}>
            <div style={{ flex: '1 1 340px', minWidth: 0 }}>
              <div className="tag-pill" style={{ marginBottom: 20, display: 'inline-flex' }}>המטרה שלנו</div>
              <h2 className="font-black" style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)', letterSpacing: '-0.02em', marginBottom: 16 }}>
                מיקום #1 בגוגל —<br /><span className="gradient-text">לא עוד תוצאה שנייה</span>
              </h2>
              <p style={{ color: '#8ba3c7', fontSize: '0.92rem', lineHeight: 1.75, marginBottom: 24 }}>
                91.5% מהגולשים לא עוברים לעמוד השני. זה אומר שאם אתם לא בעמוד הראשון — אתם פשוט לא קיימים מבחינת הלקוחות שמחפשים אתכם.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { label: 'מיקום 1', ctr: '28.5%', color: '#ffb347', width: '100%' },
                  { label: 'מיקום 2', ctr: '15.7%', color: '#ff9f47', width: '55%' },
                  { label: 'מיקום 3', ctr: '11%',   color: '#ffd347', width: '38%' },
                  { label: 'מיקום 4+', ctr: '< 5%', color: '#6a88ad', width: '17%' },
                ].map((item, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                      <span style={{ color: '#8ba3c7', fontSize: '0.82rem' }}>{item.label}</span>
                      <span style={{ color: item.color, fontWeight: 700, fontSize: '0.82rem' }}>CTR {item.ctr}</span>
                    </div>
                    <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.05)' }}>
                      <div style={{ width: item.width, height: '100%', borderRadius: 3, background: `linear-gradient(90deg, ${item.color}aa, ${item.color}44)`, transition: 'width 0.8s ease' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: '1 1 380px', minWidth: 0 }}>
              <SerpMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} style={{ padding: 'clamp(48px,7vw,80px) 0', direction: 'rtl', background: 'rgba(255,179,71,0.02)', borderTop: '1px solid rgba(255,179,71,0.08)', borderBottom: '1px solid rgba(255,179,71,0.08)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>מה כולל השירות</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em' }}>
              SEO מלא — <span className="gradient-text">מ-0 לדף ראשון</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {seoServices.map((s, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: '28px 26px', display: 'flex', gap: 18, alignItems: 'flex-start',
                  opacity: servicesVis ? 1 : 0,
                  transform: servicesVis ? 'none' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 70}ms, transform 0.5s ease ${i * 70}ms`,
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,179,71,0.1)', border: '1px solid rgba(255,179,71,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffb347', flexShrink: 0 }}>
                  {s.icon}
                </div>
                <div>
                  <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ color: '#8ba3c7', fontSize: '0.87rem', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEO callout */}
      <section style={{ padding: 'clamp(32px,5vw,56px) 0', direction: 'rtl' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div style={{ padding: 'clamp(28px,4vw,48px)', borderRadius: 20, background: 'rgba(255,179,71,0.05)', border: '1px solid rgba(255,179,71,0.2)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)', width: '60%', height: '100%', background: 'radial-gradient(ellipse at 50% 0%, rgba(255,179,71,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex', background: 'rgba(255,179,71,0.1)', border: '1px solid rgba(255,179,71,0.3)', color: '#ffb347' }}>
                <div className="tag-dot" style={{ background: '#ffb347' }} />
                חדש: GEO
              </div>
              <h2 className="font-black" style={{ fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', letterSpacing: '-0.02em', marginBottom: 16 }}>
                האם העסק שלכם מופיע <span className="gradient-text">בתשובות AI?</span>
              </h2>
              <p style={{ color: '#8ba3c7', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 24px' }}>
                ChatGPT, Gemini ו-Perplexity מחליפים חיפוש מסורתי. GEO מוודא שהעסק שלכם מופיע כשהלקוחות שואלים AI — זה SEO של 2025-2026.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                {['ChatGPT', 'Google Gemini', 'Perplexity', 'Claude'].map((tool, i) => (
                  <span key={i} style={{ background: 'rgba(255,179,71,0.08)', border: '1px solid rgba(255,179,71,0.2)', borderRadius: 100, padding: '5px 14px', fontSize: '0.78rem', color: '#ffb347', fontWeight: 600 }}>
                    {tool}
                  </span>
                ))}
              </div>
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
              רוצים להופיע ראשון <span className="gradient-text">בגוגל?</span>
            </h2>
            <p style={{ color: '#8ba3c7', fontSize: '0.95rem', lineHeight: 1.65 }}>
              נעשה ביקורת SEO חינמית ונגיד בדיוק מה חסר לאתר שלכם.
            </p>
          </div>
          <ContactForm source="seo-page" />
        </div>
      </section>
    </>
  )
}
