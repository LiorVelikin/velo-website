import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/' || location.pathname === ''

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const buttonContent = (
    <button style={{ width: '100%', height: 60, background: 'transparent', border: 'none', color: '#fff', fontWeight: 800, fontSize: 15, letterSpacing: '-0.01em', cursor: 'pointer', fontFamily: 'inherit', direction: 'rtl' }}>
      קבלו אבחון חינם — ללא התחייבות
    </button>
  )

  return (
    <div
      className="md:hidden"
      style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200,
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: '0 -6px 32px rgba(0, 0, 0, 0.5)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        background: 'linear-gradient(135deg, #0055ff 0%, #00c8ff 100%)',
      }}
    >
      {isHome
        ? <a href="#contact" style={{ display: 'block' }}>{buttonContent}</a>
        : <Link to="/contact" style={{ display: 'block', textDecoration: 'none' }}>{buttonContent}</Link>
      }
    </div>
  )
}
