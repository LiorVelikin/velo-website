import { useEffect, useRef } from 'react'

/*
  GlowCard — cursor-tracked spotlight card.

  WHY card-relative coords instead of background-attachment: fixed:
  `background-attachment: fixed` is silently broken inside any element
  that has a CSS transform applied (Framer Motion uses transforms for
  all animations). Switching to card-relative coords via getBoundingClientRect
  fixes the spotlight for all transformed cards.

  Structure:
  - Outer card div: border, bg, backdrop-blur, overflow:hidden (clips spotlight)
  - fillRef div: absolute spotlight fill — JS-managed radial-gradient
  - content wrapper: position:relative z-index:1 so content renders above glow
*/

export default function GlowCard({
  children,
  className = '',
  style = {},
  radius = 18,
  spotSize = 360,
  bgOpacity = 0.13,
  alwaysOnBorderTint = 'rgba(34,211,238,0.16)',
  alwaysOnFillTint   = 'rgba(15,16,20,0.55)',
}) {
  const cardRef = useRef(null)
  const fillRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    const fill = fillRef.current
    if (!card || !fill) return

    let inside = false

    const onMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Update CSS vars for the ::before border glow (card-relative)
      card.style.setProperty('--mx', x + 'px')
      card.style.setProperty('--my', y + 'px')

      // Update body spotlight only when cursor is inside
      if (inside) {
        fill.style.background = [
          `radial-gradient(`,
          `  ${spotSize}px circle at ${x}px ${y}px,`,
          `  rgba(34,211,238,${bgOpacity}) 0%,`,
          `  rgba(26,111,255,${(bgOpacity * 0.45).toFixed(3)}) 50%,`,
          `  transparent 72%`,
          `)`,
        ].join('')
      }
    }

    const onEnter = () => { inside = true;  fill.style.opacity = '1' }
    const onLeave = () => { inside = false; fill.style.opacity = '0' }

    document.addEventListener('pointermove', onMove, { passive: true })
    card.addEventListener('pointerenter', onEnter)
    card.addEventListener('pointerleave', onLeave)

    return () => {
      document.removeEventListener('pointermove', onMove)
      card.removeEventListener('pointerenter', onEnter)
      card.removeEventListener('pointerleave', onLeave)
    }
  }, [spotSize, bgOpacity])

  return (
    <div
      ref={cardRef}
      data-glow-card
      className={className}
      style={{
        position: 'relative',
        borderRadius: radius,
        border: `1px solid ${alwaysOnBorderTint}`,
        background: alwaysOnFillTint,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        overflow: 'hidden',
        '--radius': radius,
        '--mx': '-400px',
        '--my': '-400px',
        '--spot-size': spotSize + 'px',
        ...style,
      }}
    >
      {/* Body spotlight — JS-managed, transition opacity */}
      <div
        ref={fillRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 0.45s ease',
          zIndex: 0,
        }}
      />

      {/* Content above glow layers — flex:1 fills available space in flex parents */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          minHeight: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </div>
    </div>
  )
}
