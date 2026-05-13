import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import GlowCard from './GlowCard'
import veloLogo from '../assets/velo_logo.png'

const SPRING = { type: 'spring', stiffness: 220, damping: 28 }

const IconWebsite = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
  </svg>
)

const IconLanding = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
)

const IconEcomm = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
)

const IconAI = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
  </svg>
)

const IconAds = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
)

// Row 1: websites, landing, ecommerce
// Row 2: AI content, VELO card (center), paid ads
const ITEMS = [
  {
    icon: <IconWebsite />,
    he: 'בניית אתרים',
    desc: 'אתרי תדמית שמייצגים את המותג שלכם ומביאים לקוחות. מהירים, מרשימים, ועובדים בכל מסך.',
    path: '/services/web-design',
  },
  {
    icon: <IconLanding />,
    he: 'בניית דפי נחיתה',
    desc: 'דפי נחיתה ממוקדי המרה שמביאים לידים. כל אלמנט בנוי כדי להניע לפעולה — בלי הסחות דעת.',
    path: '/services/web-design',
  },
  {
    icon: <IconEcomm />,
    he: 'בניית חנויות איקומרס',
    desc: 'חנויות אונליין שמוכרות בשבילכם 24/7. עיצוב שמעורר אמון, חווית קנייה שמביאה לקוחות חזרה.',
    path: '/services/web-design',
  },
  {
    icon: <IconAI />,
    he: 'יצירת תוכן שיווקי ב AI',
    desc: 'סרטוני פרסומת, UGC ותוכן ויזואלי בעזרת בינה מלאכותית. איכות הפקה גדולה — בזמן ובמחיר שלא תאמינו.',
    path: '/services/ai-content',
  },
  { isVelo: true },
  {
    icon: <IconAds />,
    he: 'שיווק ממומן וניהול קמפיינים',
    desc: 'ניהול מלא של פייסבוק, אינסטגרם, טיקטוק וגוגל. בונים, מפרסמים ומנתחים — ואתם מקבלים תוצאות.',
    path: '/services/paid-ads',
  },
]

function ServiceCard({ s, index, inView }) {
  if (s.isVelo) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ ...SPRING, delay: index * 0.08 }}
        style={{ height: '100%' }}
      >
        <GlowCard
          radius={18}
          spotSize={400}
          bgOpacity={0.24}
          alwaysOnBorderTint="rgba(34,211,238,0.42)"
          alwaysOnFillTint="rgba(8,22,72,0.68)"
          style={{ padding: '36px 30px', direction: 'rtl', height: '100%' }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: 18,
            textAlign: 'center',
          }}>
            <img
              src={veloLogo}
              alt="VELO DIGITAL"
              style={{
                width: 110,
                opacity: 0.92,
                filter: 'brightness(1.15) drop-shadow(0 0 12px rgba(34,211,238,0.3))',
              }}
            />
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
              fontWeight: 800,
              color: 'var(--ink-100)',
              letterSpacing: '-0.025em',
              lineHeight: 1.3,
              margin: 0,
            }}>
              הכל תחת מעטפת אחת.
            </p>
          </div>
        </GlowCard>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...SPRING, delay: index * 0.08 }}
      whileHover={{ y: -4, transition: { type: 'spring', stiffness: 380, damping: 30 } }}
      style={{ height: '100%' }}
    >
      <GlowCard
        radius={18}
        spotSize={360}
        bgOpacity={0.13}
        alwaysOnBorderTint="rgba(34,211,238,0.16)"
        alwaysOnFillTint="rgba(15,16,20,0.55)"
        style={{ padding: '32px 28px 28px', direction: 'rtl', height: '100%' }}
      >
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 14,
          }}>
            <span style={{ color: 'var(--cyan)', flexShrink: 0 }}>{s.icon}</span>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.15rem, 2vw, 1.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--ink-100)',
              margin: 0,
              lineHeight: 1.2,
            }}>
              {s.he}
            </h3>
          </div>

          <p style={{
            color: 'var(--ink-300)',
            fontSize: '0.93rem',
            lineHeight: 1.72,
            marginBottom: 24,
            flex: 1,
          }}>
            {s.desc}
          </p>

          <Link
            to={s.path}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: 'var(--cyan)',
              fontSize: '0.9rem', fontWeight: 600,
              textDecoration: 'none',
              fontFamily: 'var(--font-body)',
              alignSelf: 'flex-start',
            }}
            onMouseEnter={(e) => e.currentTarget.querySelector('.arr').style.transform = 'translate(4px,-4px)'}
            onMouseLeave={(e) => e.currentTarget.querySelector('.arr').style.transform = 'none'}
          >
            <span>קראו עוד</span>
            <span className="arr" style={{ transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)' }}>↗</span>
          </Link>
        </div>
      </GlowCard>
    </motion.div>
  )
}

export default function ServicesGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="services"
      style={{ padding: 'clamp(60px, 8vw, 120px) 0', position: 'relative', direction: 'rtl' }}
    >
      <div ref={ref} style={{ maxWidth: 1180, margin: '0 auto', padding: '0 clamp(20px, 5vw, 48px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...SPRING }}
          style={{ marginBottom: 56, maxWidth: 760 }}
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4.8vw, 3.6rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            color: 'var(--ink-100)',
            marginBottom: 18,
          }}>
            כל מה שהעסק שלכם צריך. <br />
            <span className="gradient-accent">במקום אחד.</span>
          </h2>
          <p style={{ color: 'var(--ink-300)', fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', lineHeight: 1.7, maxWidth: 560 }}>
            אפשר לקחת שירות אחד או חבילה מלאה. בפגישת הייעוץ נבין יחד מה הכי מתאים לכם — ונבנה תוכנית שמביאה תוצאות שאפשר למדוד.
          </p>
        </motion.div>

        <div className="services-row" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 18,
          alignItems: 'stretch',
        }}>
          {ITEMS.map((s, i) => <ServiceCard key={i} s={s} index={i} inView={inView} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .services-row { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 680px)  { .services-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
