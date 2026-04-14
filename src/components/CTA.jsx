import { useEffect, useRef, useState } from 'react'
import portraitSrc from '../assets/portrait.webp'

/* ── Trust signal data ── */
const TRUST = [
  {
    title: 'ללא התחייבות',
    sub:   'האבחון הוא שלכם, תעשו איתו מה שתרצו',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4d9fff"
           strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'אבחון אמיתי',
    sub:   'אבחון וייעוץ, לא שיחת מכירה',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4d9fff"
           strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
]

/* ── Animated success check ── */
function SuccessState() {
  return (
    <div style={{ textAlign: 'center', padding: '48px 24px', direction: 'rtl' }}>
      {/* Animated circle + checkmark */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
        <div style={{
          width: 72, height: 72, borderRadius: '50%',
          background: 'rgba(26,111,255,0.1)',
          border: '2px solid rgba(26,111,255,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="36" height="36" viewBox="0 0 52 52" fill="none">
            <path
              className="check-draw"
              d="M14 27l9 9 15-18"
              stroke="#4d9fff"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '1.4rem', marginBottom: 10 }}>
        תודה! נחזור אליך בהקדם
      </h3>
      <p style={{ color: '#6a88ad', fontSize: '0.92rem' }}>
        בדרך כלל תוך כמה שעות
      </p>
    </div>
  )
}

/* ── Main CTA section ── */
export default function CTA() {
  const sectionRef  = useRef(null)
  const [visible,   setVisible]   = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [values,    setValues]    = useState({ name: '', phone: '', business: '' })
  const [errors,    setErrors]    = useState({})

  /* Entrance observer */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  /* Field change */
  const handleChange = (field) => (e) => {
    setValues(v => ({ ...v, [field]: e.target.value }))
    if (errors[field]) setErrors(er => ({ ...er, [field]: '' }))
  }

  /* Submit */
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
    { key: 'name',     label: 'שם מלא',        placeholder: 'איך קוראים לך?',           type: 'text' },
    { key: 'phone',    label: 'מספר טלפון',    placeholder: '054-4286018',               type: 'tel'  },
    { key: 'business', label: 'תחום עיסוק',    placeholder: 'מה תחום הפעילות שלך?',     type: 'text' },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-14 relative overflow-hidden"
      style={{ direction: 'rtl' }}
    >
      {/* Background radial bloom */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90vw', height: '80vh', maxWidth: 1100,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(26,80,255,0.13) 0%, rgba(80,0,255,0.05) 45%, transparent 72%)',
        filter: 'blur(60px)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="relative max-w-6xl mx-auto px-6" style={{ zIndex: 1 }}>

        {/* ── Two-column layout — wraps to single column on mobile ── */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'clamp(32px, 5vw, 56px)',
          alignItems: 'flex-start',
        }}>

          {/* ══ Left column — Form ══ */}
          <div style={{
            flex: '1 1 340px',
            minWidth: 0,
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateX(32px)',
            transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)',
          }}>
            {/* Form headline */}
            <div style={{ marginBottom: 32 }}>
              {/* Urgency badge B */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                border: '1px solid rgba(245,158,11,0.35)',
                background: 'rgba(245,158,11,0.06)',
                borderRadius: 100, padding: '5px 14px',
                marginBottom: 14,
              }}>
                <span className="urgency-dot" />
                <span style={{ color: '#f59e0b', fontSize: '0.78rem', fontWeight: 500, lineHeight: 1.5 }}>
                  מספר הפרויקטים בחודש מוגבל
                </span>
              </div>
              <div style={{ display: 'inline-flex', marginBottom: 16 }}>
                <div className="tag-pill">בואו נדבר</div>
              </div>
              <h2 className="font-black leading-tight" style={{
                fontSize: 'clamp(1.8rem,3.8vw,3rem)',
                letterSpacing: '-0.02em', marginBottom: 14,
              }}>
                רוצים להתקדם לשיווק שעובד{' '}
                <span className="gradient-text">בעידן החדש?</span>
              </h2>
              <p style={{ color: '#8ba3c7', fontSize: '1rem', lineHeight: 1.65, maxWidth: 460 }}>
                אנחנו כאן כדי לבנות עבורכם תהליך ברור ומחושב, שמייצר תוצאות וגדילה לאורך זמן.
              </p>
            </div>

            {/* Form card */}
            <div style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 18,
              overflow: 'hidden',
            }}>
              {submitted ? (
                <SuccessState />
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ padding: '32px 28px' }}>
                  {fields.map((f, i) => (
                    <div
                      key={f.key}
                      style={{
                        marginBottom: 20,
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'none' : 'translateY(12px)',
                        transition: `opacity 0.5s ease ${i * 80 + 200}ms, transform 0.5s ease ${i * 80 + 200}ms`,
                      }}
                    >
                      <label style={{
                        display: 'block',
                        color: 'rgba(160,190,220,0.65)',
                        fontSize: '0.78rem', fontWeight: 600,
                        marginBottom: 8, letterSpacing: '0.02em',
                      }}>
                        {f.label}
                      </label>
                      <input
                        className="cta-input"
                        type={f.type}
                        placeholder={f.placeholder}
                        value={values[f.key]}
                        onChange={handleChange(f.key)}
                        style={errors[f.key] ? { borderColor: 'rgba(255,80,80,0.7)' } : {}}
                      />
                      {errors[f.key] && (
                        <p style={{ color: 'rgba(255,100,100,0.8)', fontSize: '0.73rem', marginTop: 5 }}>
                          {errors[f.key]}
                        </p>
                      )}
                    </div>
                  ))}

                  {/* Submit button */}
                  <div style={{
                    marginTop: 28,
                    opacity: visible ? 1 : 0,
                    transition: 'opacity 0.5s ease 0.48s',
                  }}>
                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <path d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
                      </svg>
                      <span>קבעו שיחת ייעוץ עם ליאור עכשיו</span>
                    </button>
                    <p style={{
                      textAlign: 'center', marginTop: 12,
                      color: 'rgba(120,150,190,0.45)',
                      fontSize: '0.74rem',
                    }}>
                      חינם וללא התחייבות
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* ══ Right column — Trust signals ══ */}
          <div style={{
            flex: '1 1 240px',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            paddingTop: 8,
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.7s ease 0.25s',
          }}>

            {/* Portrait */}
            <div style={{
              marginBottom: 32,
              display: 'flex',
              justifyContent: 'center',
            }}>
              <div style={{
                position: 'relative',
                width: 'clamp(100px,45%,148px)',
              }}>
                {/* Glow behind portrait */}
                <div style={{
                  position: 'absolute', inset: -16,
                  background: 'radial-gradient(circle, rgba(26,111,255,0.2) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                }} />
                <img
                  src={portraitSrc}
                  alt="ליאור וליקין"
                  style={{
                    width: '100%',
                    aspectRatio: '3/4',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    borderRadius: 14,
                    position: 'relative',
                    display: 'block',
                    filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.5))',
                  }}
                />
              </div>
            </div>

            {/* Trust items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {TRUST.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 14,
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'none' : 'translateY(12px)',
                    transition: `opacity 0.5s ease ${i * 100 + 350}ms, transform 0.5s ease ${i * 100 + 350}ms`,
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                    background: 'rgba(26,111,255,0.1)',
                    border: '1px solid rgba(26,111,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {item.icon}
                  </div>
                  {/* Text */}
                  <div>
                    <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', marginBottom: 3 }}>
                      {item.title}
                    </p>
                    <p style={{ color: '#6a88ad', fontSize: '0.78rem', lineHeight: 1.5 }}>
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider + social proof */}
            <div style={{
              marginTop: 28,
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.5s ease 0.65s',
            }}>
              <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 14 }} />
              <p style={{
                color: 'rgba(120,150,190,0.5)',
                fontSize: '0.78rem',
                textAlign: 'center',
              }}>
                מעל 60 עסקים כבר קיבלו אבחון
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
