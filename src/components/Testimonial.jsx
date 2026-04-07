import { useEffect, useRef } from 'react'

export default function Testimonial() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.2 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-14 relative overflow-hidden">

      <div className="orb orb-blue w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Stars */}
        <div className="reveal flex justify-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill="url(#star-grad)">
              <defs>
                <linearGradient id="star-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1a6fff" />
                  <stop offset="100%" stopColor="#00d4ff" />
                </linearGradient>
              </defs>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Glass card wrapping the quote */}
        <div className="reveal reveal-delay-1 glass-card p-10 md:p-14 mb-10 relative overflow-hidden"
          style={{ borderColor: 'rgba(26,111,255,0.15)' }}
        >
          {/* Inner shimmer line */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }}
          />
          {/* Big quote mark */}
          <span
            className="absolute -top-6 right-6 text-[120px] font-black leading-none pointer-events-none select-none"
            style={{
              background: 'linear-gradient(135deg,rgba(26,111,255,0.2),rgba(0,212,255,0.1))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            "
          </span>
          <p className="relative z-10 text-xl md:text-2xl font-semibold text-white/90 leading-relaxed">
            "VELO הביאה לנו תוצאות שלא האמנו שאפשריות כל כך מהר.
            הם הבינו את הקהל שלנו, יצרו תוכן שמדבר אליו,
            וכל הקמפיין הרגיש כמו שותף אמיתי ולא סוכנות."
          </p>
        </div>

        {/* Author */}
        <div className="reveal reveal-delay-2 flex items-center justify-center gap-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 glass-card"
            style={{ background: 'linear-gradient(135deg, rgba(26,111,255,0.4), rgba(0,212,255,0.3))' }}
          >
            א
          </div>
          <div className="text-right">
            <div className="font-bold text-white">אלון כהן</div>
            <div className="text-[#8ba3c7] text-sm">מנכ״ל, TechFlow Israel</div>
          </div>
        </div>

        {/* Dots */}
        <div className="reveal reveal-delay-3 flex justify-center gap-2 mt-10">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              className={`rounded-full transition-all duration-300 ${
                i === 0
                  ? 'w-6 h-2 bg-gradient-to-r from-[#1a6fff] to-[#00d4ff]'
                  : 'w-2 h-2 bg-white/15 hover:bg-white/35'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
