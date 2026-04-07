import { useEffect, useRef } from 'react'
import { BeamsBackground } from './ui/beams-background'

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <BeamsBackground className="w-full" style={{ direction: 'rtl' }}>
      <section
        id="hero"
        ref={sectionRef}
        className="relative flex flex-col items-center text-center"
        style={{ minHeight: '100svh', paddingTop: 'clamp(80px, 10vh, 110px)', paddingBottom: 'clamp(60px, 8vh, 100px)', overflow: 'visible', justifyContent: 'center' }}
      >
        {/* Top fade for navbar readability */}
        <div className="absolute inset-x-0 top-0 pointer-events-none" style={{
          height: '160px',
          background: 'linear-gradient(to bottom, rgba(6,11,20,0.55) 0%, transparent 100%)',
          zIndex: 4,
        }} />

        {/* Hero text */}
        <div className="relative w-full max-w-5xl mx-auto px-6" style={{ zIndex: 10 }}>
          <h1 className="reveal font-black leading-[1.13] mb-6"
              style={{ fontSize: 'clamp(2rem, 4.8vw, 4rem)', letterSpacing: '-0.03em' }}>
            אנחנו עוזרים לעסקים לבנות נוכחות חזקה שמביאה תוצאות{' '}
            <span className="gradient-text">בעידן השיווק החדש</span>{' '}
            בשיטת Velocity
          </h1>
          <p className="reveal reveal-delay-1 text-[#8ba3c7] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            במקום פעולות שיווק מנותקות, אנחנו בונים זרימה בין תוכן, AI, אתר ותהליכים למערכת אחת שעובדת בצורה מדויקת, ומייצרת יותר פניות, יותר לקוחות ותהליך צמיחה יציב — מבלי להגדיל תקציבי שיווק.
          </p>
          <div className="reveal reveal-delay-2 flex items-center justify-center gap-4 flex-wrap">
            <a href="#contact">
              <button className="btn-primary">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span>קבעו שיחת ייעוץ חינם</span>
              </button>
            </a>
            <a href="#process">
              <button className="btn-outline"><span>איך זה עובד</span></button>
            </a>
          </div>
        </div>
      </section>
    </BeamsBackground>
  )
}
