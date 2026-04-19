import { useRef, useEffect, useState } from 'react'

export default function PageHero({ tag, title, accent, subtitle, children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  // Split title around accent word
  const renderTitle = () => {
    if (!accent || !title.includes(accent)) {
      return <span>{title}</span>
    }
    const parts = title.split(accent)
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{accent}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        paddingTop: 'clamp(120px, 14vh, 160px)',
        paddingBottom: 'clamp(60px, 8vh, 96px)',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Subtle ambient top glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 340,
        background: 'radial-gradient(ellipse at 50% 20%, rgba(26,111,255,0.12) 0%, transparent 70%)',
        filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="relative max-w-4xl mx-auto px-6" style={{ zIndex: 1 }}>
        {tag && (
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(12px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20,
          }}>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(90deg,transparent,#1a6fff)' }} />
            <div className="tag-pill">{tag}</div>
            <div style={{ height: 1, width: 40, background: 'linear-gradient(270deg,transparent,#1a6fff)' }} />
          </div>
        )}

        <h1
          className="font-black leading-tight"
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.6rem)',
            letterSpacing: '-0.02em',
            marginBottom: subtitle ? 20 : 0,
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(16px)',
            transition: 'opacity 0.55s ease 0.08s, transform 0.55s ease 0.08s',
          }}
        >
          {renderTitle()}
        </h1>

        {subtitle && (
          <p style={{
            color: '#4a5d7a', fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            lineHeight: 1.65, maxWidth: 600, margin: '0 auto',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(14px)',
            transition: 'opacity 0.55s ease 0.16s, transform 0.55s ease 0.16s',
          }}>
            {subtitle}
          </p>
        )}

        {children && (
          <div style={{
            marginTop: 28,
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.55s ease 0.25s',
          }}>
            {children}
          </div>
        )}
      </div>

      {/* Bottom thin divider */}
      <div style={{
        position: 'absolute', bottom: 0, left: '10%', right: '10%',
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(26,111,255,0.18), transparent)',
      }} />
    </section>
  )
}
