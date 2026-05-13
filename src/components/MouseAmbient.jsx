import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/*
  Page-wide ambient gradient layer.
  Soft cyan/blue blobs scattered across the viewport.
  4 blobs follow mouse with parallax (different damping each).
  4 stationary blobs for fill behind imagery.
  All blobs have an autonomous slow drift loop so the bg breathes.

  Uses motion values + RAF — no React re-renders on mouse move.
*/

const SPRING       = { stiffness: 38, damping: 22, mass: 1.2 }
const SPRING_SLOW  = { stiffness: 22, damping: 26, mass: 1.4 }
const SPRING_SLOWEST = { stiffness: 14, damping: 28, mass: 1.6 }

export default function MouseAmbient() {
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  // 4 reactive layers — each moves a different fraction
  const x1 = useSpring(useTransform(mx, [0, 1], [-90, 90]),  SPRING)
  const y1 = useSpring(useTransform(my, [0, 1], [-70, 70]),  SPRING)
  const x2 = useSpring(useTransform(mx, [0, 1], [60, -60]),  SPRING_SLOW)
  const y2 = useSpring(useTransform(my, [0, 1], [50, -50]),  SPRING_SLOW)
  const x3 = useSpring(useTransform(mx, [0, 1], [-40, 40]),  SPRING_SLOWEST)
  const y3 = useSpring(useTransform(my, [0, 1], [40, -40]),  SPRING_SLOWEST)
  const x4 = useSpring(useTransform(mx, [0, 1], [30, -30]),  SPRING_SLOWEST)
  const y4 = useSpring(useTransform(my, [0, 1], [-30, 30]),  SPRING_SLOWEST)

  useEffect(() => {
    const handler = (e) => {
      mx.set(e.clientX / window.innerWidth)
      my.set(e.clientY / window.innerHeight)
    }
    window.addEventListener('pointermove', handler, { passive: true })
    return () => window.removeEventListener('pointermove', handler)
  }, [mx, my])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* ─── Reactive layer ─── */}

      {/* Big cyan, top-right */}
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '-12%', right: '-8%',
          width: 820, height: 820,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.22) 0%, rgba(34,211,238,0) 60%)',
          filter: 'blur(70px)',
          x: x1, y: y1,
        }}
      />

      {/* Big blue, bottom-left */}
      <motion.div
        animate={{ scale: [1.06, 1, 1.06] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '-18%', left: '-10%',
          width: 760, height: 760,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(61,139,255,0.24) 0%, rgba(61,139,255,0) 60%)',
          filter: 'blur(80px)',
          x: x2, y: y2,
        }}
      />

      {/* Mid-right cyan accent */}
      <motion.div
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '38%', right: '12%',
          width: 480, height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.16) 0%, rgba(34,211,238,0) 65%)',
          filter: 'blur(60px)',
          x: x3, y: y3,
        }}
      />

      {/* Mid-left blue accent */}
      <motion.div
        animate={{ scale: [1.05, 0.95, 1.05] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '55%', left: '15%',
          width: 540, height: 540,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,111,255,0.18) 0%, rgba(26,111,255,0) 65%)',
          filter: 'blur(70px)',
          x: x4, y: y4,
        }}
      />

      {/* ─── Stationary fill layer ─── */}

      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '12%', left: '22%',
          width: 520, height: 520,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,111,255,0.14) 0%, rgba(0,0,0,0) 65%)',
          filter: 'blur(70px)',
        }}
      />

      <motion.div
        animate={{ scale: [1.08, 1, 1.08], opacity: [1, 0.85, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '70%', left: '55%',
          width: 600, height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(0,0,0,0) 65%)',
          filter: 'blur(80px)',
        }}
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '92%', right: '20%',
          width: 480, height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(61,139,255,0.16) 0%, rgba(0,0,0,0) 65%)',
          filter: 'blur(70px)',
        }}
      />

      <motion.div
        animate={{ scale: [1.05, 0.96, 1.05] }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '28%', left: '48%',
          width: 420, height: 420,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.10) 0%, rgba(0,0,0,0) 65%)',
          filter: 'blur(60px)',
        }}
      />
    </div>
  )
}
