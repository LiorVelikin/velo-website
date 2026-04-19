const clients = [
  'Meta', 'Google', 'TikTok', 'Instagram', 'LinkedIn',
  'Wolt', 'Fiverr', 'Monday.com', 'Wix', 'Check Point',
  'Meta', 'Google', 'TikTok', 'Instagram', 'LinkedIn',
  'Wolt', 'Fiverr', 'Monday.com', 'Wix', 'Check Point',
]

export default function LogoBar() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="section-divider mb-10" />

      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-[#3d5070] text-sm font-medium tracking-widest uppercase">
          עובדים עם המותגים הטובים ביותר
        </p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {clients.map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-8 shrink-0"
            >
              <div className="glass rounded-xl px-6 py-3 flex items-center gap-2 group transition-all duration-300 hover:border-[rgba(26,111,255,0.3)]">
                <div className="w-1.5 h-1.5 rounded-full gradient-text-static opacity-60" style={{ background: 'linear-gradient(135deg,#1a6fff,#00d4ff)' }} />
                <span className="text-sm font-semibold tracking-wide transition-colors" style={{ color: '#4a5d7a' }}>
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-10" />
    </section>
  )
}
