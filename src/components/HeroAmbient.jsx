import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/*
  Hero aurora effect — heavily blurred, slow-flowing, mouse-reactive.
  Reads as shader/aurora light, not noisy blobs.

  - Heavy blur (140-180px) for smoothness
  - Subtle scale animation (15-20s) for ambient drift
  - Mouse parallax with very slow springs (no jitter)
*/

const SPRING_SLOW   = { stiffness: 18, damping: 30, mass: 1.4 }
const SPRING_SLOWER = { stiffness: 12, damping: 32, mass: 1.6 }
const SPRING_GLACIAL = { stiffness: 8, damping: 34, mass: 1.8 }

export default function HeroAmbient({ containerRef }) {
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  const x1 = useSpring(useTransform(mx, [0, 1], [-90, 90]),  SPRING_SLOW)
  const y1 = useSpring(useTransform(my, [0, 1], [-60, 60]),  SPRING_SLOW)
  const x2 = useSpring(useTransform(mx, [0, 1], [70, -70]),  SPRING_SLOWER)
  const y2 = useSpring(useTransform(my, [0, 1], [50, -50]),  SPRING_SLOWER)
  const x3 = useSpring(useTransform(mx, [0, 1], [-40, 40]),  SPRING_GLACIAL)
  const y3 = useSpring(useTransform(my, [0, 1], [30, -30]),  SPRING_GLACIAL)

  useEffect(() => {
    const el = containerRef?.current
    if (!el) return

    const handler = (e) => {
      const rect = el.getBoundingClientRect()
      mx.set((e.clientX - rect.left) / rect.width)
      my.set((e.clientY - rect.top) / rect.height)
    }
    el.addEventListener('pointermove', handler, { passive: true })
    return () => el.removeEventListener('pointermove', handler)
  }, [mx, my, containerRef])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'visible',
        zIndex: 1,
      }}
    >
      {/* Cyan core — bottom center, gentle scale */}
      <motion.div
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          left: '50%', bottom: '-25%',
          width: 1100, height: 1100, marginLeft: -550,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.32) 0%, rgba(34,211,238,0) 55%)',
          filter: 'blur(140px)',
          x: x1, y: y1,
          willChange: 'transform',
        }}
      />

      {/* Blue mass — left, slower drift */}
      <motion.div
        animate={{ scale: [1.04, 0.96, 1.04] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '8%', left: '-15%',
          width: 900, height: 900,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(61,139,255,0.28) 0%, rgba(61,139,255,0) 60%)',
          filter: 'blur(160px)',
          x: x2, y: y2,
          willChange: 'transform',
        }}
      />

      {/* Deep blue accent — right */}
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '-8%', right: '-12%',
          width: 820, height: 820,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,111,255,0.24) 0%, rgba(26,111,255,0) 60%)',
          filter: 'blur(150px)',
          x: x3, y: y3,
          willChange: 'transform',
        }}
      />

      {/* Cyan secondary — top-center subtle */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '-20%', left: '40%',
          width: 700, height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.18) 0%, rgba(34,211,238,0) 65%)',
          filter: 'blur(160px)',
          x: x2, y: y2,
          willChange: 'transform',
        }}
      />
    </div>
  )
}
