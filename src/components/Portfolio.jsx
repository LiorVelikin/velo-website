import { useEffect, useRef } from 'react'

const projects = [
  {
    id: '01',
    title: 'Zano — מותג אופנה',
    subtitle: 'בניית אתר + Brand Identity',
    description: 'אתר מותג אופנה מינימליסטי — עיצוב ויזואלי חזק, גלריית מוצרים, ו-UX שממיר גולשים לקונים.',
    tags: ['Web Design', 'E-Commerce', 'Branding'],
    result: 'Live',
    gradient: 'from-[#2a1a0f] to-[#0d0a05]',
    accent: '#c9a84c',
    url: 'https://liorvelikin.github.io/Zano-website/',
  },
  {
    id: '02',
    title: 'Lilach — עיצוב שיער',
    subtitle: 'אתר תדמית + עיצוב',
    description: 'אתר תדמית לסטודיו עיצוב שיער — לוק נשי ועדין, גלריית עבודות, וטופס פנייה ישיר.',
    tags: ['Web Design', 'Beauty', 'UX'],
    result: 'Live',
    gradient: 'from-[#2a0a1a] to-[#0d060d]',
    accent: '#e8a0bf',
    url: 'https://liorvelikin.github.io/Lilach-website/',
  },
  {
    id: '03',
    title: 'נווה הירוק — נדל"ן',
    subtitle: 'דף נחיתה לפרויקט יוקרה',
    description: 'דף נחיתה לפרויקט נדל"ן יוקרתי — מבנה CRO שמוביל לליד, גלריית הדמיות, וטופס פנייה מהיר.',
    tags: ['Landing Page', 'נדל"ן', 'CRO'],
    result: 'Demo',
    gradient: 'from-[#0a1a0a] to-[#060d06]',
    accent: '#c9a84c',
    url: 'https://liorvelikin.github.io/velo-website/mockups/landing/realestate/',
  },
]

function ProjectCard({ project, index }) {
  return (
    <div className={`reveal reveal-delay-${index + 1}`}>
      <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <div className="glass-card overflow-hidden group cursor-pointer h-full">
        {/* Visual preview */}
        <div
          className={`relative h-52 bg-gradient-to-br ${project.gradient} overflow-hidden`}
        >
          {/* Animated grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />
          {/* Orb */}
          <div
            className="absolute inset-0 flex items-center justify-center"
          >
            <div
              className="w-32 h-32 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"
              style={{ background: `radial-gradient(circle, ${project.accent} 0%, transparent 70%)` }}
            />
          </div>

          {/* Project number */}
          <div className="absolute top-4 right-4 glass rounded-lg px-3 py-1">
            <span className="text-xs font-mono" style={{ color: '#4a5d7a' }}>{project.id}</span>
          </div>

          {/* Result badge */}
          <div className="absolute bottom-4 left-4">
            <div className="text-xs font-bold px-3 py-1 rounded-full" style={{
              background: project.result === 'Live' ? 'rgba(0,212,120,0.15)' : 'rgba(26,111,255,0.15)',
              border: `1px solid ${project.result === 'Live' ? 'rgba(0,212,120,0.4)' : 'rgba(26,111,255,0.4)'}`,
              color: project.result === 'Live' ? '#00d478' : '#4d9fff',
            }}>{project.result}</div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(6,11,20,0.6) 100%)' }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-semibold text-[#4d9fff] bg-[rgba(26,111,255,0.1)] border border-[rgba(26,111,255,0.2)] px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
          <p className="text-[#4d9fff] text-sm font-medium mb-3">{project.subtitle}</p>
          <p className="text-[#8ba3c7] text-sm leading-relaxed">{project.description}</p>

          <div className="mt-5 flex items-center gap-2 text-[#4d9fff] text-sm font-semibold group-hover:gap-3 transition-all duration-200">
            <span>כניסה לאתר</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      </div>
      </a>
    </div>
  )
}

export default function Portfolio() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" ref={sectionRef} className="py-14 relative">
      <div className="orb orb-blue w-[500px] h-[500px] -bottom-20 -right-40 opacity-20" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 reveal">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-[#1a6fff] to-[#00d4ff]" />
              <span className="text-[#4d9fff] text-sm font-semibold tracking-widest uppercase">עבודות נבחרות</span>
            </div>
            <h2 className="font-black leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              פרויקטים{' '}
              <span className="gradient-text">שמדברים</span>
            </h2>
          </div>
          <a href="#contact" className="hidden md:block">
            <button className="btn-outline text-sm">
              <span>כל הפרויקטים</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </a>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-3 mt-10 reveal">
          <button className="glass glass-card p-3 rounded-xl hover:border-[rgba(26,111,255,0.4)] transition-all">
            <svg className="w-5 h-5" style={{ color: '#4a5d7a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="glass glass-card p-3 rounded-xl hover:border-[rgba(26,111,255,0.4)] transition-all">
            <svg className="w-5 h-5" style={{ color: '#4a5d7a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
