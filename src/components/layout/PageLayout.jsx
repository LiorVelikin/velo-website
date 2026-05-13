import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import MobileCtaBar from '../MobileCtaBar'
import PageAmbient from '../PageAmbient'

export default function PageLayout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  // Global pointer tracker — drives glow buttons + glow cards via CSS vars
  useEffect(() => {
    const root = document.documentElement
    const sync = (e) => {
      root.style.setProperty('--x', e.clientX.toFixed(2))
      root.style.setProperty('--y', e.clientY.toFixed(2))
    }
    document.addEventListener('pointermove', sync, { passive: true })
    return () => document.removeEventListener('pointermove', sync)
  }, [])

  // Global GlowCard spotlight — applies to every .glass-card and .svc-card
  useEffect(() => {
    const spotMap = new Map()

    const initCard = (card) => {
      if (spotMap.has(card)) return
      const fill = document.createElement('div')
      fill.setAttribute('aria-hidden', 'true')
      Object.assign(fill.style, {
        position: 'absolute', inset: '0', borderRadius: 'inherit',
        pointerEvents: 'none', opacity: '0',
        transition: 'opacity 0.45s ease', zIndex: '-1',
      })
      card.prepend(fill)
      spotMap.set(card, fill)
      card.addEventListener('pointerenter', () => { fill.style.opacity = '1' })
      card.addEventListener('pointerleave', () => { fill.style.opacity = '0' })
    }

    const onMove = (e) => {
      spotMap.forEach((fill, card) => {
        const r = card.getBoundingClientRect()
        const x = e.clientX - r.left
        const y = e.clientY - r.top
        fill.style.background = `radial-gradient(360px circle at ${x}px ${y}px, rgba(34,211,238,0.10) 0%, rgba(26,111,255,0.05) 50%, transparent 72%)`
      })
    }

    const scan = () => {
      document.querySelectorAll('.glass-card:not([data-glow-init]), .svc-card:not([data-glow-init])').forEach(card => {
        card.dataset.glowInit = '1'
        initCard(card)
      })
    }

    const observer = new MutationObserver(scan)
    observer.observe(document.body, { childList: true, subtree: true })
    document.addEventListener('pointermove', onMove, { passive: true })
    scan()

    return () => {
      document.removeEventListener('pointermove', onMove)
      observer.disconnect()
      spotMap.forEach((fill) => fill.remove())
      spotMap.clear()
    }
  }, [])

  return (
    <div className="overflow-x-hidden font-heebo" style={{ color: 'var(--ink-100)', position: 'relative' }}>
      {/* Subtle film grain — fixed, doesn't reveal sticky scroll */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9998,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
          opacity: 0.02,
          mixBlendMode: 'overlay',
        }}
      />

      <Navbar />

      <main style={{ position: 'relative' }}>
        {/* Page-wide aurora — scrolls with content, scattered abstractly */}
        <PageAmbient />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <Outlet />
        </div>
      </main>

      <Footer />
      <MobileCtaBar />
    </div>
  )
}
