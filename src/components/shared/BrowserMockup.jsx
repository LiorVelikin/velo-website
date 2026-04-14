export default function BrowserMockup({ url, children, accentColor = '#1a6fff' }) {
  return (
    <div style={{
      borderRadius: 14,
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.08)',
      background: '#0a0f1a',
      boxShadow: `0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04), 0 0 80px ${accentColor}18`,
    }}>
      {/* Browser chrome */}
      <div style={{
        background: '#111622',
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ display: 'flex', gap: 5, flexShrink: 0 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
        </div>
        <div style={{
          flex: 1,
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 6,
          padding: '4px 12px',
          fontSize: '0.7rem',
          color: 'rgba(255,255,255,0.35)',
          textAlign: 'center',
          fontFamily: 'monospace',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
          direction: 'ltr',
        }}>
          <svg width="9" height="10" viewBox="0 0 9 10" fill="none" style={{ opacity: 0.38, flexShrink: 0 }}>
              <rect x="1" y="4" width="7" height="6" rx="1.5" stroke="white" strokeWidth="1.2"/>
              <path d="M2.5 4V3a2 2 0 014 0v1" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            {url}
        </div>
      </div>
      {children}
    </div>
  )
}
