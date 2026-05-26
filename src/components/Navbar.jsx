import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { href: '#hero', label: 'Start' },
  { href: '#o-nas', label: 'O nas' },
  { href: '#rozwiazania', label: 'Rozwiązania' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__brand" onClick={handleNavClick}>
          <span className="navbar__logo">U</span>
          <span className="navbar__name">
            <strong>Umbris</strong>
            <small>Sp. z o.o.</small>
          </span>
        </a>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
