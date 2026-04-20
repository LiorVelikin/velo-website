import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/shared/PageHero'
import ContactForm from '../../components/shared/ContactForm'
import { serviceSchema, breadcrumbSchema } from '../../components/shared/SchemaOrg'

/* ── Icons ── */
const IconSearch = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
  </svg>
)
const IconEdit = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
)
const IconCode = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
)
const IconMapPin = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const seoServices = [
  {
    icon: <IconSearch />,
    color: '#ffb347',
    title: 'מחקר מילות מפתח',
    desc: 'מזהים את הביטויים שהלקוחות שלכם מחפשים — בפועל. לא מנחשים, מסתמכים על נתונים אמיתיים מגוגל.',
  },
  {
    icon: <IconEdit />,
    color: '#ffd347',
    title: 'SEO On-Page',
    desc: 'כותרות, תוכן, מבנה URL, ו-internal links — כל עמוד מותאם לביטוי הנכון ולכוונת המחפש.',
  },
  {
    icon: <IconCode />,
    color: '#ff9f47',
    title: 'SEO טכני',
    desc: 'Core Web Vitals, מהירות, sitemap, schema markup — הבסיס הטכני שגוגל צריך כדי לסמוך עליכם.',
  },
  {
    icon: <IconMapPin />,
    color: '#ffb347',
    title: 'Local SEO',
    desc: 'Google Business Profile, ציטוטים מקומיים, ביקורות — להופיע בחיפוש המקומי בישראל.',
  },
]

const processSteps = [
  { num: '01', title: 'אבחון ואודיט',                    desc: 'בודקים את מצב האתר הנוכחי — מה עובד, מה לא, ומה מונע מגוגל לדרג אתכם.' },
  { num: '02', title: 'מחקר מילות מפתח לשוק הישראלי',   desc: 'מוצאים את הביטויים שהקהל שלכם מחפש — בעברית, בערבית, ואנגלית לפי הצורך.' },
  { num: '03', title: 'תיקונים טכניים ו-On-Page',        desc: 'מתקנים בעיות טכניות ומבצעים אופטימיזציה על עמודים קיימים.' },
  { num: '04', title: 'כתיבת תוכן SEO',                  desc: 'כותבים כתבות ועמודי שירות שמדורגים לביטויים ספציפיים ומביאים תנועה.' },
  { num: '05', title: 'בניית סמכות ומעקב חודשי',         desc: 'בניית קישורים, מעקב דירוגים, ודוח חודשי על ביצועים ושיפורים.' },
]

const projects = [
  { niche: 'מותג אופנה', title: 'Zano — מותג אופנה', url: 'https://liorvelikin.github.io/Zano-website/', accent: '#c9a84c', live: true },
  { niche: 'שירותי יופי', title: 'Lilach — עיצוב שיער', url: 'https://liorvelikin.github.io/Lilach-website/', accent: '#e8a0bf', live: true },
  { niche: 'קליניקת שיניים', title: 'VisualDent — רפואת שיניים', url: 'https://liorvelikin.github.io/velo-website/mockups/websites/dental/', accent: '#00b4a0', live: false },
]

const faqs = [
  { q: 'כמה זמן עד לתוצאות SEO?', a: 'SEO הוא השקעה לטווח ארוך. תוצאות ראשוניות תוך 3-4 חודשים, תוצאות משמעותיות תוך 6-12 חודשים. אבל בניגוד לפרסום — התוצאות נשארות לאחר שהפסקתם לשלם.' },
  { q: 'האם אתם מבטיחים דירוג?', a: 'לא. אף גורם לא יכול להבטיח דירוג ספציפי בגוגל — זה לא אתי ולא אמיתי. מה שאנחנו מבטיחים הוא תהליך מוכח, שקיפות מלאה, ועבודה מתמשכת לשיפור.' },
  { q: 'מה ההבדל בין SEO לפרסום ממומן?', a: 'פרסום ממומן נותן תוצאות מיידיות אבל נעצר כשמפסיקים לשלם. SEO לוקח זמן אבל בונה נכס — תנועה שממשיכה להגיע ללא תשלום שוטף לגוגל.' },
  { q: 'האם צריך תוכן בעברית לצרכי SEO?', a: 'בהחלט. גוגל ישראל מדרג תוכן בעברית גבוה לחיפושים בעברית. תוכן באיכות גבוהה בשפה שהקהל מחפש בה — זה הבסיס.' },
  { q: 'האם SEO מקומי שונה?', a: 'כן. Local SEO מתמקד בחיפושים "קרובים אליי" ובגוגל מפות. כולל אופטימיזציית Google Business Profile, ציטוטים מקומיים, ותוכן שמזכיר עיר ואזור.' },
]

export default function SeoPage() {
  const [servicesRef, servicesVis] = useReveal()
  const [processRef, processVis] = useReveal()

  return (
    <>
      <Helmet>
        <title>קידום אתרים בגוגל | SEO לעסקים בישראל | VELO DIGITAL</title>
        <meta name="description" content="קידום אורגני לעסקים בישראל — מחקר מילות מפתח, SEO טכני, On-Page ובניית קישורים. מגיעים לעמוד הראשון של גוגל ומביאים לקוחות בלי לשלם על כל קליק." />
        <meta property="og:title" content="קידום אתרים בגוגל | SEO לעסקים בישראל | VELO DIGITAL" />
        <meta property="og:description" content="קידום אורגני לעסקים בישראל — מחקר מילות מפתח, SEO טכני ו-On-Page. תנועה שמגיעה ללא תקציב פרסום." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:url" content="https://liorvelikin.github.io/velo-website/services/seo" />
        <meta property="og:image" content="https://liorvelikin.github.io/velo-website/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://liorvelikin.github.io/velo-website/services/seo" />
        <script type="application/ld+json">{serviceSchema('קידום אתרים SEO', 'קידום אורגני לעסקים בישראל — מחקר מילות מפתח, SEO טכני, On-Page ובניית קישורים.', '/services/seo')}</script>
        <script type="application/ld+json">{breadcrumbSchema([{ name: 'ראשי', path: '/' }, { name: 'שירותים', path: '/services' }, { name: 'קידום SEO', path: '/services/seo' }])}</script>
      </Helmet>

      <PageHero
        tag="קידום אורגני SEO"
        title="עמוד ראשון בגוגל — לקוחות בלי לשלם על קליקים"
        accent="עמוד ראשון בגוגל"
        subtitle="קידום אתרים אורגני לעסקים ישראלים — מחקר מילות מפתח, SEO טכני ותוכן שגוגל אוהב. תנועה שמגיעה אליכם כל חודש, בלי תקציב פרסום."
      />

      {/* על השירות */}
      <section style={{ padding: 'clamp(56px,8vw,96px) 0', direction: 'rtl' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.02em', color: '#0a0f1e', marginBottom: 24 }}>
            קידום אתרים בגוגל לעסקים בישראל
          </h2>
          <p style={{ color: '#4a5d7a', fontSize: '1rem', lineHeight: 1.9, marginBottom: 32 }}>
            חיפוש אורגני הוא הערוץ שמביא את התנועה האיכותית ביותר לאתר — אנשים שמחפשים בעצמם את מה שאתם מציעים. בישראל, מרבית האנשים מחפשים בעברית ובגוגל ישראל, ולכן קידום אתרים ממוקד לשוק הישראלי הוא שונה מ-SEO בינלאומי. צריך להבין מה הלקוח הישראלי כותב בשדה החיפוש, איך אלגוריתם גוגל מתייחס לתוכן בעברית, ומה נדרש מבחינת SEO טכני כדי שגוגל יסמוך על האתר שלכם. קידום בגוגל הוא לא קסם — הוא תהליך שלוקח זמן, אבל התוצאות נשארות לאורך זמן.
          </p>
          <h3 className="font-black" style={{ fontSize: 'clamp(1.2rem,2.2vw,1.7rem)', letterSpacing: '-0.02em', color: '#0a0f1e', marginBottom: 16 }}>
            SEO זה לא קסם — זה תהליך מדויק שלוקח זמן
          </h3>
          <p style={{ color: '#4a5d7a', fontSize: '1rem', lineHeight: 1.9 }}>
            קידום אורגני מוצלח עומד על שלושה עמודים: SEO טכני (האתר מהיר, ללא שגיאות, עם מבנה נכון), תוכן (כתבות ועמודים שעונים בדיוק מה שהקהל מחפש), ובניית סמכות (קישורים מאתרים אחרים שמראים לגוגל שאתם מקור אמין). אנחנו לא מבטיחים דירוגים ספציפיים — אף אחד ישר לא יכול לעשות את זה. אנחנו מבטיחים תהליך מוכח, שקיפות מלאה, ועבודה מתמשכת שמביאה תוצאות לאורך זמן.
          </p>
        </div>
      </section>

      {/* SEO Services — 4 larger cards */}
      <section ref={servicesRef} style={{ padding: 'clamp(56px,8vw,96px) 0', direction: 'rtl', background: 'rgba(255,179,71,0.02)', borderTop: '1px solid rgba(255,179,71,0.08)', borderBottom: '1px solid rgba(255,179,71,0.08)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>שירותי SEO</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.6rem,3.2vw,2.4rem)', letterSpacing: '-0.02em', color: '#0a0f1e' }}>
              מה כולל <span className="gradient-text">קידום אתרים</span>
            </h2>
            <p style={{ color: '#4a5d7a', fontSize: '0.98rem', lineHeight: 1.75, maxWidth: 580, margin: '16px auto 0' }}>
              גישה הוליסטית — SEO שמכסה את כל הזוויות
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {seoServices.map((s, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: '32px 28px',
                  opacity: servicesVis ? 1 : 0,
                  transform: servicesVis ? 'none' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                }}
              >
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${s.color}18`, border: `1px solid ${s.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color, marginBottom: 20 }}>
                  {s.icon}
                </div>
                <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.1rem', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: '#8ba3c7', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
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
              מהאודיט <span className="gradient-text">לדף הראשון</span>
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
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,179,71,0.12)', border: '1px solid rgba(255,179,71,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.82rem', color: '#ffb347', flexShrink: 0 }}>
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

      {/* פרויקטים נבחרים */}
      <section style={{ padding: 'clamp(56px,8vw,96px) 0', direction: 'rtl', background: 'rgba(255,179,71,0.02)', borderTop: '1px solid rgba(255,179,71,0.06)', borderBottom: '1px solid rgba(255,179,71,0.06)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="tag-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>עבודות</div>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.6rem,3.2vw,2.4rem)', letterSpacing: '-0.02em', color: '#0a0f1e' }}>
              פרויקטים <span className="gradient-text">נבחרים</span>
            </h2>
            <p style={{ color: '#4a5d7a', fontSize: '0.98rem', lineHeight: 1.75, maxWidth: 580, margin: '16px auto 0' }}>
              לחצו על כל פרויקט לצפייה
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {projects.map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                <div
                  className="glass-card"
                  style={{ padding: '28px 26px', cursor: 'pointer' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                    <div className="tag-pill">{p.niche}</div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: 100, background: p.live ? 'rgba(0,212,120,0.12)' : 'rgba(26,111,255,0.1)', border: `1px solid ${p.live ? 'rgba(0,212,120,0.3)' : 'rgba(26,111,255,0.2)'}`, color: p.live ? '#00d478' : '#4d9fff' }}>
                      {p.live ? 'Live' : 'Demo'}
                    </span>
                  </div>
                  <div style={{ height: 120, borderRadius: 10, background: `linear-gradient(135deg, ${p.accent}18 0%, ${p.accent}08 100%)`, border: `1px solid ${p.accent}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={p.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                      <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                  </div>
                  <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.98rem', marginBottom: 10 }}>{p.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#4d9fff', fontSize: '0.82rem', fontWeight: 600 }}>
                    <span>כניסה לאתר</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
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
              רוצים להופיע ראשון <span className="gradient-text">בגוגל?</span>
            </h2>
            <p style={{ color: '#4a5d7a', fontSize: '0.95rem', lineHeight: 1.65 }}>
              נעשה אבחון SEO חינמי ונגיד לכם בדיוק מה חסר לאתר שלכם.
            </p>
          </div>
          <ContactForm source="seo-page" />
        </div>
      </section>
    </>
  )
}
