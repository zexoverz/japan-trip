import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Overview', href: '#overview', jp: '概要' },
  { label: 'Itinerary', href: '#itinerary', jp: '旅程' },
  { label: 'Stay', href: '#accommodation', jp: '宿泊' },
  { label: 'Budget', href: '#budget', jp: '予算' },
  { label: 'Tickets', href: '#tickets', jp: '切符' },
  { label: 'Hacks', href: '#transport-hacks', jp: '裏ワザ' },
  { label: 'Cards', href: '#cards', jp: 'カード' },
  { label: 'Fitness', href: '#fitness', jp: '筋トレ' },
  { label: 'Tips', href: '#tips', jp: 'ヒント' },
  { label: 'Packing', href: '#packing', jp: '荷物' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-heading font-bold text-xl text-sakura-dark flex items-center gap-2">
            🌸 <span className="hidden sm:inline">Japan 2026</span>
          </a>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 rounded-full text-sm font-medium text-dark-light hover:text-sakura-dark hover:bg-sakura/20 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-sakura/20 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-sakura/20 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-dark-light hover:text-sakura-dark hover:bg-sakura/10 transition-all"
              >
                {item.label} <span className="text-sakura/60 ml-2">{item.jp}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
