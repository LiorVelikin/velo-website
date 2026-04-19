import { useState } from 'react'
import emailjs from '@emailjs/browser'

function SuccessState() {
  return (
    <div style={{ textAlign: 'center', padding: '48px 24px', direction: 'rtl' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(26,111,255,0.1)', border: '2px solid rgba(26,111,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="36" height="36" viewBox="0 0 52 52" fill="none">
            <path className="check-draw" d="M14 27l9 9 15-18" stroke="#4d9fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <h3 style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.4rem', marginBottom: 10 }}>תודה! נחזור אליך בהקדם</h3>
      <p style={{ color: '#8ba3c7', fontSize: '0.92rem' }}>בדרך כלל תוך כמה שעות</p>
    </div>
  )
}

export default function ContactForm({ source = 'website' }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({ name: '', phone: '', business: '', message: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (field) => (e) => {
    setValues(v => ({ ...v, [field]: e.target.value }))
    if (errors[field]) setErrors(er => ({ ...er, [field]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}
    if (!values.name.trim())     newErrors.name     = 'שדה חובה'
    if (!values.phone.trim())    newErrors.phone    = 'שדה חובה'
    if (!values.business.trim()) newErrors.business = 'שדה חובה'
    if (Object.keys(newErrors).length) { setErrors(newErrors); return }

    setLoading(true)
    try {
      const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, {
          name:         values.name,
          phone:        values.phone,
          business:     values.business,
          message:      values.message || '',
          page_source:  source,
          from_page:    window.location.pathname,
        }, publicKey)
      }
      setSubmitted(true)
    } catch {
      setErrors({ submit: 'שגיאה בשליחה. נסו שוב או כתבו ישירות: hello@velo-studio.com' })
    } finally {
      setLoading(false)
    }
  }

  const fields = [
    { key: 'name',     label: 'שם מלא',     placeholder: 'איך קוראים לך?',       type: 'text' },
    { key: 'phone',    label: 'טלפון',       placeholder: '054-4286018',           type: 'tel'  },
    { key: 'business', label: 'תחום עיסוק',  placeholder: 'מה תחום הפעילות שלך?', type: 'text' },
  ]

  return (
    <div style={{ background: 'linear-gradient(160deg, rgba(13,22,44,0.96) 0%, rgba(7,11,24,0.98) 100%)', border: '1px solid rgba(255,255,255,0.09)', borderTopColor: 'rgba(77,159,255,0.22)', borderRadius: 18, overflow: 'hidden', boxShadow: '0 8px 48px rgba(0,0,0,0.4)' }}>
      {submitted ? <SuccessState /> : (
        <form onSubmit={handleSubmit} noValidate style={{ padding: '32px 28px' }}>
          {fields.map((f) => (
            <div key={f.key} style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', color: 'rgba(160,190,220,0.65)', fontSize: '0.78rem', fontWeight: 600, marginBottom: 8, letterSpacing: '0.02em' }}>
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
              {errors[f.key] && <p style={{ color: 'rgba(255,100,100,0.8)', fontSize: '0.73rem', marginTop: 5 }}>{errors[f.key]}</p>}
            </div>
          ))}

          {/* Optional message */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: 'block', color: '#4a5d7a', fontSize: '0.78rem', fontWeight: 600, marginBottom: 8, letterSpacing: '0.02em' }}>
              הערות (לא חובה)
            </label>
            <textarea
              className="cta-input"
              placeholder="ספרו לנו קצת על העסק ועל המטרות שלכם..."
              value={values.message}
              onChange={handleChange('message')}
              rows={3}
              style={{ resize: 'vertical', minHeight: 80 }}
            />
          </div>

          {errors.submit && (
            <p style={{ color: 'rgba(255,100,100,0.85)', fontSize: '0.8rem', marginBottom: 12, textAlign: 'center' }}>{errors.submit}</p>
          )}

          {/* Honeypot */}
          <input type="text" name="_honeypot" style={{ display: 'none' }} tabIndex={-1} />

          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
            </svg>
            <span>{loading ? 'שולח...' : 'קבעו שיחת ייעוץ חינם עם ליאור'}</span>
          </button>
          <p style={{ textAlign: 'center', marginTop: 12, color: 'rgba(255,255,255,0.25)', fontSize: '0.74rem' }}>
            חינם וללא התחייבות · בדרך כלל מחזירים תוך כמה שעות
          </p>
        </form>
      )}
    </div>
  )
}
