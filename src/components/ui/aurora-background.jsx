/**
 * Aurora background — adapted for the Velo dark site (#060b14).
 * Two aurora layers animate in opposite directions for depth.
 * Extends below the hero so it blends seamlessly into the next section.
 */
export function AuroraBackground({ children, className = '', showRadialGradient = true, style, ...props }) {
  const auroraGradient = [
    'repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%)',
    'repeating-linear-gradient(100deg, #3b82f6 10%, #818cf8 15%, #93c5fd 20%, #c4b5fd 25%, #60a5fa 30%)',
  ].join(', ')

  const mask = showRadialGradient
    ? 'radial-gradient(ellipse at 60% 0%, black 10%, transparent 70%)'
    : undefined

  return (
    <div className={`relative ${className}`} style={style} {...props}>
      {/* Aurora container — bleeds 30vh below so next section blends */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        {/* Primary aurora layer */}
        <div
          style={{
            position: 'absolute',
            inset: '-10px',
            backgroundImage: auroraGradient,
            backgroundSize: '300%, 200%',
            backgroundPosition: '50% 50%, 50% 50%',
            filter: 'blur(12px)',
            opacity: 0.5,
            animation: 'aurora 60s linear infinite',
            maskImage: mask,
            WebkitMaskImage: mask,
          }}
        />
        {/* Secondary layer — offset start, slightly faster, mix-blend for depth */}
        <div
          style={{
            position: 'absolute',
            inset: '-10px',
            backgroundImage: auroraGradient,
            backgroundSize: '200%, 100%',
            backgroundPosition: '50% 50%, 50% 50%',
            filter: 'blur(12px)',
            opacity: 0.3,
            animation: 'aurora 40s linear infinite reverse',
            mixBlendMode: 'difference',
            maskImage: mask,
            WebkitMaskImage: mask,
          }}
        />
      </div>
      {children}
    </div>
  )
}
