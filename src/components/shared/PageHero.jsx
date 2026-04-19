import { useRef, useEffect, useState } from 'react'

export default function PageHero({ tag, title, accent, subtitle, children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(t)
  }, [])

  const renderTitle = () => {
    if (!accent || !title.includes(accent)) return <span>{title}</span>
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
        paddingTop: 'clamp(160px, 20vh, 220px)',
        paddingBottom: 'clamp(80px, 10vh, 120px)',
        textAlign: 'center',
        overflow: 'hidden',
        direction: 'rtl',
      }}
    >
      {/* Primary ambient glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 900, height: 500,
        background: 'radial-gradient(ellipse at 50% 10%, rgba(26,111,255,0.13) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Orb 1 — top left */}
      <div style={{
        position: 'absolute', top: '10%', left: '8%',
        width: 260, height: 260,
        background: 'radial-gradient(circle, rgba(26,111,255,0.09) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none', zIndex: 0,
        animation: 'heroOrb1 8s ease-in-out infinite',
      }} />

      {/* Orb 2 — bottom right */}
      <div style={{
        position: 'absolute', bottom: '5%', right: '6%',
        width: 320, height: 320,
        background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)',
        filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0,
        animation: 'heroOrb2 10s ease-in-out infinite',
      }} />

      {/* Dot grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(26,111,255,0.12) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
        opacity: 0.45,
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
      }} />

      {/* Animated corner line — top left */}
      <div style={{
        position: 'absolute', top: 32, left: 40, zIndex: 0, pointerEvents: 'none',
        opacity: visible ? 0.35 : 0, transition: 'opacity 1.2s ease 0.4s',
      }}>
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M80 0 L0 0 L0 80" stroke="url(#cornerGradTL)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <defs>
            <linearGradient id="cornerGradTL" x1="80" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1a6fff" stopOpacity="0.8" />
              <stop offset="1" stopColor="#00d4ff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Animated corner line — bottom right */}
      <div style={{
        position: 'absolute', bottom: 40, right: 40, zIndex: 0, pointerEvents: 'none',
        opacity: visible ? 0.35 : 0, transition: 'opacity 1.2s ease 0.5s',
      }}>
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M0 80 L80 80 L80 0" stroke="url(#cornerGradBR)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <defs>
            <linearGradient id="cornerGradBR" x1="0" y1="80" x2="80" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00d4ff" stopOpacity="0.8" />
              <stop offset="1" stopColor="#1a6fff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <style>{`
        @keyframes heroOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -15px) scale(1.08); }
        }
        @keyframes heroOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-18px, 12px) scale(1.06); }
        }
      `}</style>

      <div className="relative max-w-4xl mx-auto px-6" style={{ zIndex: 1 }}>
        {tag && (
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(12px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 24,
          }}>
            <div style={{ height: 1, width: 44, background: 'linear-gradient(90deg, transparent, #1a6fff)' }} />
            <div className="tag-pill">{tag}</div>
            <div style={{ height: 1, width: 44, background: 'linear-gradient(270deg, transparent, #1a6fff)' }} />
          </div>
        )}

        <h1
          className="font-black leading-tight"
          style={{
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            letterSpacing: '-0.03em',
            marginBottom: subtitle ? 24 : 0,
            color: '#0a0f1e',
            lineHeight: 1.18,
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(18px)',
            transition: 'opacity 0.6s ease 0.08s, transform 0.6s ease 0.08s',
          }}
        >
          {renderTitle()}
        </h1>

        {subtitle && (
          <p style={{
            color: '#4a5d7a',
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            lineHeight: 1.7,
            maxWidth: 680,
            margin: '0 auto',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(14px)',
            transition: 'opacity 0.6s ease 0.18s, transform 0.6s ease 0.18s',
          }}>
            {subtitle}
          </p>
        )}

        {children && (
          <div style={{
            marginTop: 36,
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(10px)',
            transition: 'opacity 0.6s ease 0.28s, transform 0.6s ease 0.28s',
          }}>
            {children}
          </div>
        )}
      </div>

      {/* Bottom gradient rule */}
      <div style={{
        position: 'absolute', bottom: 0, left: '5%', right: '5%',
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(26,111,255,0.22), rgba(0,212,255,0.18), transparent)',
      }} />
    </section>
  )
}
