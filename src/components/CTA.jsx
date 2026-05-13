import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const WA_LINK = 'https://wa.me/972544286018?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9C%D7%99%D7%90%D7%95%D7%A8%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%A4%D7%92%D7%99%D7%A9%D7%AA%20%D7%99%D7%99%D7%A2%D7%95%D7%A5'

const SPRING = { type: 'spring', stiffness: 220, damping: 26 }

const TRUST = ['חוזרים תוך 24 שעות', 'ללא עלות וללא התחייבות', 'תוכנית ברורה בסוף הפגישה']

function SuccessState() {
  return (
    <div style={{ textAlign: 'center', padding: '52px 24px', direction: 'rtl' }}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}
      >
        <div style={{
          width: 64, height: 64, borderRadius: '50%',
          background: 'rgba(34,211,238,0.08)',
          border: '1.5px solid rgba(34,211,238,0.32)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="30" height="30" viewBox="0 0 52 52" fill="none">
            <path className="check-draw" d="M14 27l9 9 15-18" stroke="#22D3EE" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </motion.div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        color: 'var(--ink-100)',
        fontWeight: 800, fontSize: '1.5rem',
        marginBottom: 10, letterSpacing: '-0.025em',
      }}>
        תודה! נחזור אליך בקרוב
      </h3>
      <p style={{ color: 'var(--ink-300)', fontSize: '0.94rem', margin: 0 }}>
        בדרך כלל תוך 24 שעות.
      </p>
    </div>
  )
}

export default function CTA() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  const [submitted, setSubmitted] = useState(false)
  const [values, setValues] = useState({ name: '', phone: '', business: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (field) => (e) => {
    setValues(v => ({ ...v, [field]: e.target.value }))
    if (errors[field]) setErrors(er => ({ ...er, [field]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!values.name.trim())     newErrors.name     = 'שדה חובה'
    if (!values.phone.trim())    newErrors.phone    = 'שדה חובה'
    if (!values.business.trim()) newErrors.business = 'שדה חובה'
    if (Object.keys(newErrors).length) { setErrors(newErrors); return }
    setSubmitted(true)
  }

  return (
    <section
      id="cta"
      ref={sectionRef}
      style={{ padding: 'clamp(60px,8vw,120px) 0', direction: 'rtl', position: 'relative', overflow: 'hidden' }}
    >
      <div className="aurora-glow" style={{ inset: '10% auto auto 10%' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(20px, 5vw, 48px)', position: 'relative', zIndex: 1 }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'right', marginBottom: 56, maxWidth: 720 }}
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4.8vw, 3.4rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            color: 'var(--ink-100)',
            marginBottom: 18,
          }}>
            בואו נדבר. <br />
            <span className="gradient-accent">בלי התחייבות, בלי שטויות.</span>
          </h2>

          <p style={{
            color: 'var(--ink-300)',
            fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
            lineHeight: 1.78,
            marginBottom: 24,
            maxWidth: 580,
          }}>
            פגישת ייעוץ של 20 דקות, חינם וללא התחייבות. בסוף הפגישה אתם יוצאים עם תוכנית ברורה לעסק שלכם — גם אם תחליטו לא לעבוד איתנו. ההפסד שלנו, הרווח שלכם.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
            {TRUST.map((lbl, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.86rem',
                  color: 'var(--ink-300)',
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {lbl}
                </span>
                {i < TRUST.length - 1 && (
                  <span style={{ color: 'rgba(245,245,247,0.2)' }}>·</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...SPRING, delay: 0.2 }}
          style={{
            maxWidth: 720,
            background: 'linear-gradient(160deg, rgba(15,16,20,0.92) 0%, rgba(7,8,16,0.97) 100%)',
            border: '1px solid var(--hairline)',
            borderTopColor: 'rgba(34,211,238,0.30)',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 8px 48px rgba(0,0,0,0.5)',
          }}
        >
          {submitted ? (
            <SuccessState />
          ) : (
            <form onSubmit={handleSubmit} noValidate style={{ padding: 'clamp(24px,4vw,38px)' }}>
              <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 18 }}>
                {[
                  { key: 'name',  label: 'איך קוראים לך?', placeholder: 'שם מלא',     type: 'text' },
                  { key: 'phone', label: 'מספר טלפון',     placeholder: '054-0000000', type: 'tel'  },
                ].map((f, i) => (
                  <motion.div
                    key={f.key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ ...SPRING, delay: i * 0.07 + 0.3 }}
                  >
                    <label className="mono-label" style={{ margin: 0, marginBottom: 8, display: 'block' }}>{f.label}</label>
                    <input
                      className="cta-input"
                      type={f.type}
                      placeholder={f.placeholder}
                      value={values[f.key]}
                      onChange={handleChange(f.key)}
                      style={errors[f.key] ? { borderColor: 'rgba(255,80,80,0.55)' } : {}}
                    />
                    {errors[f.key] && (
                      <p style={{ color: 'rgba(255,100,100,0.75)', fontSize: '0.72rem', marginTop: 5 }}>{errors[f.key]}</p>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...SPRING, delay: 0.44 }}
                style={{ marginBottom: 26 }}
              >
                <label className="mono-label" style={{ margin: 0, marginBottom: 8, display: 'block' }}>במה העסק שלכם עוסק?</label>
                <input
                  className="cta-input"
                  type="text"
                  placeholder="לדוגמה: חנות אופנה אונליין, מסעדה, נדל״ן…"
                  value={values.business}
                  onChange={handleChange('business')}
                  style={errors.business ? { borderColor: 'rgba(255,80,80,0.55)' } : {}}
                />
                {errors.business && (
                  <p style={{ color: 'rgba(255,100,100,0.75)', fontSize: '0.72rem', marginTop: 5 }}>{errors.business}</p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.55, duration: 0.5 }}
              >
                <button type="submit" className="btn-aurora" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>קבעו פגישת ייעוץ</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '18px 0' }}>
                  <div style={{ flex: 1, height: 1, background: 'var(--hairline)' }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--ink-500)' }}>או דברו איתנו ישירות</span>
                  <div style={{ flex: 1, height: 1, background: 'var(--hairline)' }} />
                </div>

                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                  </svg>
                  <span>שלחו הודעה בוואטסאפ</span>
                </a>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 560px) { .form-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
