import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const WA_LINK = 'https://wa.me/972544286018?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9C%D7%99%D7%90%D7%95%D7%A8%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%94%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%D7%9D%20%D7%A9%D7%9C%D7%9A'

const SPRING = { type: 'spring', stiffness: 220, damping: 26 }

const TRUST = [
  {
    title: 'ללא התחייבות',
    sub: 'האבחון הוא שלכם — תעשו איתו מה שתרצו',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'אבחון אמיתי',
    sub: 'ייעוץ מקצועי — לא שיחת מכירה',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: 'תגובה מהירה',
    sub: 'חוזרים תוך כמה שעות בימי עבודה',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
]

function SuccessState() {
  return (
    <div style={{ textAlign: 'center', padding: '52px 24px', direction: 'rtl' }}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}
      >
        <div style={{
          width: 68, height: 68, borderRadius: '50%',
          background: 'rgba(0,212,255,0.08)',
          border: '1.5px solid rgba(0,212,255,0.28)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="32" height="32" viewBox="0 0 52 52" fill="none">
            <path
              className="check-draw"
              d="M14 27l9 9 15-18"
              stroke="#00d4ff"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>
      <h3 style={{ color: '#E8F4FF', fontWeight: 800, fontSize: '1.35rem', marginBottom: 10 }}>
        תודה! נחזור אליך בהקדם
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.36)', fontSize: '0.88rem' }}>
        בדרך כלל תוך כמה שעות
      </p>
    </div>
  )
}

export default function CTA() {
  const sectionRef = useRef(null)
  const sectionInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const trustRef = useRef(null)
  const trustInView = useInView(trustRef, { once: true, margin: '-60px' })

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

  const fields = [
    { key: 'name',     label: 'שם מלא',     placeholder: 'איך קוראים לך?',        type: 'text' },
    { key: 'phone',    label: 'מספר טלפון', placeholder: '054-0000000',            type: 'tel'  },
    { key: 'business', label: 'תחום עיסוק', placeholder: 'מה תחום הפעילות שלך?',  type: 'text' },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ padding: 'clamp(80px,10vh,120px) 0', direction: 'rtl', position: 'relative' }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80vw', height: '70vh', maxWidth: 1000,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(26,111,255,0.06) 0%, rgba(0,212,255,0.025) 45%, transparent 72%)',
        filter: 'blur(70px)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(16px,4vw,40px)', position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 18 }}>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(90deg, transparent, #00d4ff)' }} />
            <div className="tag-pill">בואו נדבר</div>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(270deg, transparent, #00d4ff)' }} />
          </div>

          {/* Availability badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            border: '1px solid rgba(0,212,255,0.22)',
            background: 'rgba(0,212,255,0.04)',
            borderRadius: 100, padding: '5px 14px',
            marginBottom: 20,
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#00d4ff',
              boxShadow: '0 0 6px #00d4ff',
              animation: 'orbPulse 2s ease-in-out infinite',
              flexShrink: 0,
            }} />
            <span style={{ color: '#00d4ff', fontSize: '0.76rem', fontWeight: 500 }}>
              מקומות פנויים לחודש הקרוב
            </span>
          </div>

          <h2 className="font-black leading-tight" style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            letterSpacing: '-0.03em', marginBottom: 14, color: '#E8F4FF',
          }}>
            רוצים לצמוח?{' '}
            <span className="gradient-text">נתחיל בשיחה</span>
          </h2>
          <p style={{ color: 'rgba(230,240,255,0.65)', fontSize: '1rem', lineHeight: 1.65, maxWidth: 460, margin: '0 auto' }}>
            20 דקות שיכולות לשנות את הכיוון של העסק שלכם. חינם, ללא התחייבות.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'clamp(24px, 4vw, 48px)',
          alignItems: 'flex-start',
        }}>

          {/* Form column */}
          <motion.div
            className="cta-form-col"
            initial={{ opacity: 0, y: 22 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...SPRING, delay: 0.12 }}
            style={{ flex: '1 1 300px', minWidth: 0 }}
          >
            <div style={{
              background: 'linear-gradient(160deg, rgba(13,22,44,0.96) 0%, rgba(7,11,24,0.99) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderTopColor: 'rgba(0,212,255,0.28)',
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(0,212,255,0.07)',
            }}>
              <div style={{
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.38), transparent)',
              }} />

              {submitted ? (
                <SuccessState />
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ padding: 'clamp(20px,4vw,32px) clamp(16px,4vw,28px)' }}>
                  {fields.map((f, i) => (
                    <motion.div
                      key={f.key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ ...SPRING, delay: i * 0.07 + 0.2 }}
                      style={{ marginBottom: 20 }}
                    >
                      <label style={{
                        display: 'block',
                        color: 'rgba(200,220,255,0.48)',
                        fontSize: '0.75rem', fontWeight: 600,
                        marginBottom: 8, letterSpacing: '0.03em',
                      }}>
                        {f.label}
                      </label>
                      <input
                        className="cta-input"
                        type={f.type}
                        placeholder={f.placeholder}
                        value={values[f.key]}
                        onChange={handleChange(f.key)}
                        style={errors[f.key] ? { borderColor: 'rgba(255,80,80,0.55)' } : {}}
                      />
                      {errors[f.key] && (
                        <p style={{ color: 'rgba(255,100,100,0.75)', fontSize: '0.72rem', marginTop: 5 }}>
                          {errors[f.key]}
                        </p>
                      )}
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={sectionInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.45, duration: 0.5 }}
                    style={{ marginTop: 26 }}
                  >
                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      <span>שלחו פרטים לשיחת ייעוץ</span>
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '16px 0' }}>
                      <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
                      <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: '0.71rem', fontWeight: 500, whiteSpace: 'nowrap' }}>
                        או דברו ישירות
                      </span>
                      <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
                    </div>

                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                      <button
                        type="button"
                        style={{
                          width: '100%',
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9,
                          padding: '13px 20px',
                          background: 'rgba(0,212,255,0.05)',
                          border: '1.5px solid rgba(0,212,255,0.22)',
                          borderRadius: 12,
                          color: '#00d4ff',
                          fontFamily: 'Heebo, sans-serif',
                          fontWeight: 700, fontSize: '0.9rem',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          letterSpacing: '-0.01em',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = 'rgba(0,212,255,0.1)'
                          e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'
                          e.currentTarget.style.boxShadow = '0 0 18px rgba(0,212,255,0.1)'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = 'rgba(0,212,255,0.05)'
                          e.currentTarget.style.borderColor = 'rgba(0,212,255,0.22)'
                          e.currentTarget.style.boxShadow = 'none'
                        }}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                        </svg>
                        <span>שלחו הודעה עכשיו</span>
                      </button>
                    </a>

                    <p style={{ textAlign: 'center', marginTop: 12, color: 'rgba(255,255,255,0.18)', fontSize: '0.72rem' }}>
                      חינם וללא התחייבות
                    </p>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>

          {/* Trust column */}
          <div
            ref={trustRef}
            className="cta-trust-col"
            style={{
              flex: '1 1 240px',
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
              paddingTop: 8,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {TRUST.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={trustInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ ...SPRING, delay: i * 0.1 + 0.15 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                    background: 'rgba(0,212,255,0.07)',
                    border: '1px solid rgba(0,212,255,0.16)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ color: '#E8F4FF', fontWeight: 700, fontSize: '0.88rem', marginBottom: 3 }}>
                      {item.title}
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.34)', fontSize: '0.77rem', lineHeight: 1.55 }}>
                      {item.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={trustInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.45, duration: 0.6 }}
              style={{ marginTop: 28 }}
            >
              <div style={{ height: 1, background: 'rgba(255,255,255,0.055)', marginBottom: 14 }} />
              <p style={{ color: 'rgba(200,220,255,0.38)', fontSize: '0.77rem', textAlign: 'center' }}>
                מעל 60 עסקים כבר קיבלו אבחון
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
