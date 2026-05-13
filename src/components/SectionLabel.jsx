export default function SectionLabel({ num, name, sub, align = 'right' }) {
  return (
    <div
      className="mono-label"
      style={{
        textAlign: align,
        marginBottom: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        justifyContent: align === 'center' ? 'center' : align === 'right' ? 'flex-start' : 'flex-end',
        direction: 'ltr',
      }}
    >
      <span className="num">({num})</span>
      <span style={{ color: 'rgba(220,235,255,0.55)' }}>{name}</span>
      {sub && (
        <>
          <span style={{ color: 'rgba(180,200,235,0.25)' }}>·</span>
          <span>{sub}</span>
        </>
      )}
    </div>
  )
}
