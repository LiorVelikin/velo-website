import { useEffect, useRef } from 'react'

export default function HeroGradientAnimation() {
  const interactiveRef = useRef(null)
  const curX = useRef(window.innerWidth * 0.5)
  const curY = useRef(window.innerHeight * 0.5)
  const tgX  = useRef(window.innerWidth * 0.5)
  const tgY  = useRef(window.innerHeight * 0.5)

  useEffect(() => {
    const onMove = (e) => { tgX.current = e.clientX; tgY.current = e.clientY }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    let raf
    const tick = () => {
      curX.current += (tgX.current - curX.current) / 20
      curY.current += (tgY.current - curY.current) / 20
      if (interactiveRef.current) {
        interactiveRef.current.style.transform =
          `translate(${Math.round(curX.current)}px, ${Math.round(curY.current)}px)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
        // Mask fades all the way to the bottom edge so it merges with PageAmbient
        maskImage: 'linear-gradient(to bottom, black 45%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 45%, transparent 100%)',
      }}
    >
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="hero-goo" colorInterpolationFilters="linearRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="28" result="blur" />
            <feColorMatrix
              in="blur" mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 16 -6"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div
        style={{
          filter: 'url(#hero-goo) blur(38px)',
          width: '100%', height: '100%',
          position: 'absolute', inset: 0,
          opacity: 0.46,
        }}
      >
        {/* Top-right — large cyan, sweeps toward center */}
        <div style={{
          position: 'absolute',
          width: '54%', height: '54%',
          top: '-10%', right: '-8%',
          background: 'radial-gradient(circle at 45% 55%, rgba(34,211,238,1) 0%, rgba(26,111,255,0.5) 45%, rgba(34,211,238,0) 68%)',
          mixBlendMode: 'hard-light',
          animation: 'hfloat0 10s ease-in-out infinite',
        }} />

        {/* Bottom-left — electric blue, large, drifts right-up */}
        <div style={{
          position: 'absolute',
          width: '44%', height: '44%',
          bottom: '-12%', left: '-10%',
          background: 'radial-gradient(circle at 55% 45%, rgba(26,111,255,1) 0%, rgba(34,211,238,0.4) 50%, rgba(26,111,255,0) 68%)',
          mixBlendMode: 'hard-light',
          animation: 'hfloat1 12s ease-in-out infinite',
        }} />

        {/* Top-left — small blue-light, quick drift */}
        <div style={{
          position: 'absolute',
          width: '30%', height: '30%',
          top: '-5%', left: '-5%',
          background: 'radial-gradient(circle at 55% 60%, rgba(61,139,255,1) 0%, rgba(61,139,255,0) 65%)',
          mixBlendMode: 'hard-light',
          animation: 'hfloat2 15s ease-in-out infinite',
        }} />

        {/* Bottom-right — large deep blue, sweeps up-left */}
        <div style={{
          position: 'absolute',
          width: '50%', height: '50%',
          bottom: '-10%', right: '-8%',
          background: 'radial-gradient(circle at 42% 42%, rgba(10,80,255,1) 0%, rgba(34,211,238,0.3) 45%, rgba(10,80,255,0) 68%)',
          mixBlendMode: 'hard-light',
          animation: 'hfloat3 13s ease-in-out infinite',
        }} />

        {/* Left mid — small soft cyan, fast vertical */}
        <div style={{
          position: 'absolute',
          width: '20%', height: '20%',
          top: '30%', left: '-3%',
          background: 'radial-gradient(circle at 70% 50%, rgba(0,200,240,1) 0%, rgba(0,200,240,0) 60%)',
          mixBlendMode: 'hard-light',
          animation: 'hfloat4 8s ease-in-out infinite',
        }} />

        {/* Right mid — medium blue, vertical drift */}
        <div style={{
          position: 'absolute',
          width: '38%', height: '38%',
          top: '18%', right: '-5%',
          background: 'radial-gradient(circle at 30% 50%, rgba(61,139,255,1) 0%, rgba(34,211,238,0.3) 45%, rgba(61,139,255,0) 65%)',
          mixBlendMode: 'hard-light',
          animation: 'hfloat5 11s ease-in-out infinite',
        }} />

        {/* Center bleed — large soft blob that anchors the center mix */}
        <div style={{
          position: 'absolute',
          width: '60%', height: '50%',
          top: '15%', left: '20%',
          background: 'radial-gradient(circle at 50% 50%, rgba(26,111,255,0.5) 0%, rgba(34,211,238,0.2) 50%, rgba(26,111,255,0) 70%)',
          mixBlendMode: 'hard-light',
          animation: 'hfloat6 18s ease-in-out infinite',
        }} />

        {/* Interactive pointer blob */}
        <div
          ref={interactiveRef}
          style={{
            position: 'absolute',
            width: '28%', height: '28%',
            top: '-14%', left: '-14%',
            background: 'radial-gradient(circle at center, rgba(34,211,238,0.80) 0%, rgba(26,111,255,0.3) 45%, rgba(34,211,238,0) 65%)',
            mixBlendMode: 'hard-light',
            opacity: 0.40,
          }}
        />
      </div>

      <style>{`
        @keyframes hfloat0 {
          0%   { transform: translate(0px, 0px) scale(1); }
          25%  { transform: translate(-130px, 90px) scale(1.08); }
          50%  { transform: translate(-200px, 160px) scale(1.02); }
          75%  { transform: translate(-100px, 80px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes hfloat1 {
          0%   { transform: translate(0px, 0px) scale(1); }
          25%  { transform: translate(150px, -100px) scale(1.10); }
          50%  { transform: translate(210px, -180px) scale(1.04); }
          75%  { transform: translate(110px, -90px) scale(0.96); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes hfloat2 {
          0%   { transform: translate(0px, 0px) scale(1.02); }
          33%  { transform: translate(90px, 110px) scale(0.94); }
          66%  { transform: translate(160px, 60px) scale(1.06); }
          100% { transform: translate(0px, 0px) scale(1.02); }
        }
        @keyframes hfloat3 {
          0%   { transform: translate(0px, 0px) scale(0.98); }
          33%  { transform: translate(-120px, -100px) scale(1.08); }
          66%  { transform: translate(-180px, -70px) scale(1.02); }
          100% { transform: translate(0px, 0px) scale(0.98); }
        }
        @keyframes hfloat4 {
          0%,100% { transform: translateY(0px) scale(1); }
          50%     { transform: translateY(-110px) scale(1.08); }
        }
        @keyframes hfloat5 {
          0%,100% { transform: translateY(0px) scale(1.02); }
          50%     { transform: translateY(100px) scale(0.95); }
        }
        @keyframes hfloat6 {
          0%,100% { transform: translate(0px, 0px) scale(1); }
          33%     { transform: translate(40px, -30px) scale(1.04); }
          66%     { transform: translate(-30px, 20px) scale(0.97); }
        }
      `}</style>
    </div>
  )
}
