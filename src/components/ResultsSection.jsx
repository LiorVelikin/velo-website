import { useEffect, useRef, useState } from 'react'

function useCountUp(target, duration = 2200, shouldStart = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!shouldStart) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, shouldStart])
  return count
}

// Mini sparkline SVG
function Sparkline({ values, color = '#1a6fff', width = 120, height = 36 }) {
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * width
    const y = height - ((v - min) / range) * (height - 6) - 3
    return `${x},${y}`
  })
  const pathD = `M${pts.join(' L')}`
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
      <defs>
        <linearGradient id={`spark-fill-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={`${pathD} L${width},${height} L0,${height} Z`}
        fill={`url(#spark-fill-${color.replace('#', '')})`}
      />
      <path d={pathD} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BigStatCard({ prefix = '', value, suffix = '', label, sub, sparkValues, shouldStart }) {
  const count = useCountUp(value, 2200, shouldStart)
  return (
    <div className="glass-card p-8 md:p-10 relative overflow-hidden group h-full">
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'linear-gradient(0deg, rgba(26,111,255,0.06) 0%, transparent 100%)' }}
      />
      <div className="relative z-10">
        <div className="stat-line mb-6" />
        <div
          className="font-black gradient-text-static mb-2"
          style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: 1, letterSpacing: '-0.03em' }}
        >
          {prefix}{count}{suffix}
        </div>
        <div className="text-white font-bold text-lg mb-1">{label}</div>
        <div className="text-[#8ba3c7] text-sm mb-5">{sub}</div>
        {sparkValues && (
          <div className="opacity-60">
            <Sparkline values={sparkValues} color="#1a6fff" />
          </div>
        )}
      </div>
    </div>
  )
}

function WideTextCard() {
  return (
    <div className="glass-card p-8 md:p-10 relative overflow-hidden group h-full"
      style={{ background: 'linear-gradient(135deg, rgba(26,111,255,0.06) 0%, rgba(0,212,255,0.02) 100%)', borderColor: 'rgba(26,111,255,0.15)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(26,111,255,0.4), transparent)' }} />
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="tag-pill mb-5 inline-block">ביצועים מוכחים</div>
          <h3 className="text-white font-black text-2xl md:text-3xl leading-tight mb-4">
            שיווק זה לא<br />
            <span className="gradient-text">ניחוש — זה מדע</span>
          </h3>
          <p className="text-[#8ba3c7] text-sm leading-relaxed">
            כל קמפיין מבוסס על נתונים, A/B טסטים ואנליטיקה בזמן אמת.
            אנחנו לא מפרסמים ומקווים — אנחנו מודדים ומשפרים.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3">
          {[
            { label: 'ROI ממוצע', val: '×4.2' },
            { label: 'עלות לליד', val: '−61%' },
            { label: 'שיעור המרה', val: '+89%' },
            { label: 'זמן לתוצאה', val: '30 יום' },
          ].map((item) => (
            <div key={item.label} className="glass rounded-xl px-4 py-3 text-right">
              <div className="text-xl font-black gradient-text-static">{item.val}</div>
              <div className="text-[10px] text-[#8ba3c7] mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FollowersCard({ shouldStart }) {
  const count = useCountUp(50000, 2200, shouldStart)
  const k = count >= 1000 ? `${(count / 1000).toFixed(1)}K` : count
  return (
    <div className="glass-card p-8 relative overflow-hidden group h-full">
      <div
        className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)' }}
      />
      <div className="relative z-10">
        <div className="stat-line mb-6" style={{ background: 'linear-gradient(90deg, #00d4ff, #1a6fff)' }} />
        <div className="font-black text-white mb-1" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', lineHeight: 1, letterSpacing: '-0.03em' }}>
          {k}<span className="gradient-text text-[0.7em]">+</span>
        </div>
        <div className="text-white font-bold text-lg mb-1">עוקבים אורגניים</div>
        <div className="text-[#8ba3c7] text-sm mb-5">בנינו מאפס תוך 3 חודשים</div>
        <Sparkline values={[200, 800, 2200, 4500, 9000, 18000, 32000, 50000]} color="#00d4ff" />
      </div>
    </div>
  )
}

function CaseBadgeCard() {
  return (
    <div className="glass-card p-8 relative overflow-hidden group h-full"
      style={{ background: 'linear-gradient(160deg, rgba(10,22,52,0.96) 0%, rgba(6,11,24,0.98) 100%)', borderColor: 'rgba(26,111,255,0.22)' }}
    >
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, #1a6fff, transparent 60%)' }} />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1a6fff, #00d4ff)' }}>
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <div className="text-right">
            <div className="text-white font-bold text-sm">לקוח מרוצה</div>
            <div className="text-[#4d9fff] text-xs">TechFlow Israel</div>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { label: 'חשיפה', before: '2,400', after: '10,500', pct: '+340%', color: '#1a6fff' },
            { label: 'לידים', before: '12/mo', after: '48/mo', pct: '+300%', color: '#00d4ff' },
            { label: 'מכירות', before: '₪18K', after: '₪72K', pct: '+300%', color: '#4d9fff' },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between glass rounded-lg px-4 py-3">
              <div className="font-bold text-sm" style={{ color: row.color }}>{row.pct}</div>
              <div className="text-center">
                <div className="text-[10px] text-[#3d5070] mb-0.5">{row.before} → {row.after}</div>
                <div className="text-[11px] text-[#8ba3c7]">{row.label}</div>
              </div>
              <div className="w-8 h-1.5 rounded-full" style={{ background: `linear-gradient(90deg, ${row.color}, transparent)` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ResultsSection() {
  const sectionRef = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.classList.toggle('visible', e.isIntersecting)
          if (e.isIntersecting) setStarted(true)
        })
      },
      { threshold: 0.15 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="results" className="py-14 relative">
      <div className="orb orb-blue w-[600px] h-[600px] top-0 right-0 opacity-15" />
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-0 left-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-right mb-16 reveal">
          <div className="flex items-center justify-end gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-[#1a6fff] to-[#00d4ff]" />
            <span className="text-[#4d9fff] text-sm font-semibold tracking-widest uppercase">תוצאות</span>
          </div>
          <h2 className="font-black leading-tight mb-4" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
            ואלה התוצאות{' '}
            <span className="gradient-text">שהם מביאים</span>
          </h2>
          <p className="text-lg max-w-xl mr-auto" style={{ color: '#4a5d7a' }}>
            עיצוב זה סובייקטיבי. ביצועים — לא.
            המספרים מדברים בעד עצמם.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Row 1 */}
          <div className="md:col-span-4 reveal reveal-delay-1">
            <BigStatCard
              value={340}
              suffix="%+"
              label="עלייה בחשיפה"
              sub="ממוצע על לקוחות שיווק תוכן"
              sparkValues={[10, 25, 40, 70, 120, 190, 270, 340]}
              shouldStart={started}
            />
          </div>

          <div className="md:col-span-8 reveal reveal-delay-2">
            <WideTextCard />
          </div>

          {/* Row 2 */}
          <div className="md:col-span-5 reveal reveal-delay-2">
            <FollowersCard shouldStart={started} />
          </div>

          <div className="md:col-span-4 reveal reveal-delay-3">
            <BigStatCard
              value={100}
              suffix="+"
              label="לקוחות מרוצים"
              sub="עסקים שבחרו ב-VELO"
              sparkValues={[5, 12, 22, 38, 55, 72, 88, 100]}
              shouldStart={started}
            />
          </div>

          <div className="md:col-span-3 reveal reveal-delay-3">
            <CaseBadgeCard />
          </div>
        </div>
      </div>
    </section>
  )
}
