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
    <div className="bg-[#060b14] text-white overflow-x-hidden font-heebo">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  )
}
