/*
  Boundary-only ambient hints — just enough to prevent hard section cuts.
  Text areas stay dark. Heavy color only appears in section-local blobs
  (WebsitesSection, AiContentReel) positioned over media, not over text.
  Very low opacity + very large blur = colour wash, not spotlight.
*/

const BOUNDS = [
  { top: '93vh',  left: '38%' },   // hero → services
  { top: '198vh', left: '62%' },   // services → websites
  { top: '298vh', left: '35%' },   // websites → AI
  { top: '398vh', left: '65%' },   // AI → process
  { top: '478vh', left: '32%' },   // process → agency
  { top: '562vh', left: '68%' },   // agency → cases
  { top: '648vh', left: '30%' },   // cases → testimonials
  { top: '728vh', left: '60%' },   // testimonials → FAQ
  { top: '813vh', left: '40%' },   // FAQ → CTA
]

const COLORS = [
  'rgba(26,111,255,0.10)',
  'rgba(34,211,238,0.09)',
  'rgba(61,139,255,0.10)',
]

export default function PageAmbient() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {BOUNDS.map((b, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: b.top,
            left: b.left,
            transform: 'translate(-50%, -50%)',
            width: 1600,
            height: 1200,
            borderRadius: '50%',
            background: `radial-gradient(ellipse, ${COLORS[i % 3]} 0%, transparent 68%)`,
            filter: 'blur(140px)',
          }}
        />
      ))}
    </div>
  )
}
