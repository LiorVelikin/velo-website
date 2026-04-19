import { useEffect, useRef } from 'react'

const projects = [
  {
    id: '01',
    title: 'קמפיין השקת מוצר',
    subtitle: 'אסטרטגיה + תוכן + וידאו',
    description: 'תכנון וביצוע קמפיין שלם לחברת טק ישראלית — ממחקר שוק, דרך יצירת תוכן AI ועד קמפיין פרסום ממומן.',
    tags: ['Social Media', 'Video', 'AI Content'],
    result: '+340% חשיפה',
    gradient: 'from-[#1a3a6f] to-[#0d1829]',
    accent: '#1a6fff',
  },
  {
    id: '02',
    title: 'מיתוג מחדש',
    subtitle: 'Brand Identity + Design System',
    description: 'בניית זהות מותגית מלאה לסטארטאפ פינטק — לוגו, פלטת צבעים, טיפוגרפיה וכל הנכסים הדיגיטליים.',
    tags: ['Branding', 'UI/UX', 'Motion'],
    result: 'גיוס סבב A',
    gradient: 'from-[#0d2a4f] to-[#060b14]',
    accent: '#00d4ff',
  },
  {
    id: '03',
    title: 'נוכחות TikTok',
    subtitle: 'Reels Strategy + Production',
    description: 'בניית ערוץ טיקטוק מאפס ל-50K עוקבים תוך 3 חודשים, עם תוכן וירלי מבוסס אלגוריתם.',
    tags: ['TikTok', 'Reels', 'Growth'],
    result: '50K+ עוקבים',
    gradient: 'from-[#1a1a4f] to-[#060b14]',
    accent: '#4d9fff',
  },
]

function ProjectCard({ project, index }) {
  return (
    <div className={`reveal reveal-delay-${index + 1}`}>
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
            <div className="tag-pill text-xs">{project.result}</div>
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
            <span>קרא עוד</span>
            <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
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
