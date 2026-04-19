/* ── Trust bar — slim 80px strip below hero ── */
const UsersIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
)
const TrendingUpIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
)
const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)
const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)
const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const trustItems = [
  { icon: <UsersIcon />,      text: '2000+ עסקים כבר עברו לתוכן AI' },
  { icon: <TrendingUpIcon />, text: 'ממוצע ROAS x4.2'                },
  { icon: <ClockIcon />,      text: 'תוצאות תוך 30 יום'              },
  { icon: <ShieldIcon />,     text: 'ללא חוזים ארוכים'               },
  { icon: <StarIcon />,       text: 'שירות מלא תחת קורת גג אחת'      },
]

export default function TrustBar() {
  return (
    <div
      role="region"
      aria-label="trust indicators"
      style={{
        height: 80,
        background: 'rgba(26,111,255,0.03)',
        borderTop:    '1px solid rgba(10,15,30,0.07)',
        borderBottom: '1px solid rgba(10,15,30,0.07)',
        display: 'flex',
        alignItems: 'center',
        overflowX: 'auto',
        overflowY: 'hidden',
        scrollbarWidth: 'none',
        WebkitOverflowScrolling: 'touch',
        direction: 'rtl',
      }}
    >
      <div style={{
        width: '100%',
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 clamp(16px, 4vw, 48px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(20px, 3.5vw, 60px)',
        whiteSpace: 'nowrap',
      }}>
        {trustItems.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 9,
            flexShrink: 0,
          }}>
            <span style={{ color: '#4d9fff', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              {item.icon}
            </span>
            <span style={{ color: '#4a5d7a', fontSize: 13, fontWeight: 500 }}>
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
