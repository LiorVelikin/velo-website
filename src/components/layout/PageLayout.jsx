import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import MobileCtaBar from '../MobileCtaBar'

export default function PageLayout() {
  const { pathname, hash } = useLocation()

  // Scroll to top on route change (unless there's a hash)
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return (
    <div className="overflow-x-hidden font-heebo page-grid" style={{ color: '#E8F4FF' }}>
      {/* Film-grain noise texture — fixed, pointer-events-none, no GPU repaint */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9998,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
          opacity: 0.032,
          mixBlendMode: 'overlay',
        }}
      />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  )
}
