import { useEffect, useState } from 'react'
import { COMPANY, NAV_LINKS } from '../../data/content'
import { useLanguage } from './LanguageProvider'

function useScrolled(threshold = 30) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

export default function Header() {
  const { lang, setLang, t } = useLanguage()
  const scrolled = useScrolled(30)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-8 border-b border-line px-global transition-colors duration-300 ${
        scrolled ? 'bg-bg/93 backdrop-blur-lg' : ''
      }`}
    >
      <a href="#hero" className="font-hero text-[1.35rem] tracking-[0.06em] text-cream">
        {COMPANY.name}
      </a>

      <nav className="hidden items-center gap-6 lg:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.key}
            href={link.href}
            className="text-[0.78rem] font-medium tracking-[0.025em] text-dim transition-colors hover:text-cream"
          >
            {t(link.key)}
          </a>
        ))}
      </nav>

      <div className="flex items-center justify-end gap-5">
        <div className="flex items-center gap-1 font-mono text-[0.68rem] font-semibold tracking-[0.08em]">
          <button
            type="button"
            onClick={() => setLang('pl')}
            className={`rounded-[2px] px-[0.35rem] py-[0.15rem] transition-colors ${
              lang === 'pl' ? 'text-accent' : 'text-dim hover:text-cream'
            }`}
          >
            PL
          </button>
          <span className="text-line">/</span>
          <button
            type="button"
            onClick={() => setLang('en')}
            className={`rounded-[2px] px-[0.35rem] py-[0.15rem] transition-colors ${
              lang === 'en' ? 'text-accent' : 'text-dim hover:text-cream'
            }`}
          >
            EN
          </button>
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-line px-[1.1rem] py-[0.45rem] text-[0.78rem] font-medium text-cream transition-colors hover:border-accent lg:inline-block"
        >
          {t('nav_cta')}
        </a>

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center text-cream lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Menu"
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" aria-hidden="true">
              <path d="M0 0.5H18M0 6.5H18M0 12.5H18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute inset-x-0 top-16 flex flex-col gap-1 border-t border-line bg-bg px-global py-6 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="py-2 font-hero text-[1.5rem] uppercase tracking-[-0.01em] text-cream"
              onClick={() => setMenuOpen(false)}
            >
              {t(link.key)}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 inline-flex w-fit rounded-full border border-line px-[1.1rem] py-[0.45rem] text-[0.78rem] font-medium text-cream transition-colors hover:border-accent"
            onClick={() => setMenuOpen(false)}
          >
            {t('nav_cta')}
          </a>
        </div>
      )}
    </header>
  )
}
