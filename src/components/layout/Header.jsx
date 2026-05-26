import { useState } from 'react'
import { COMPANY, NAV_LINKS, SOLUTION_LINKS } from '../../data/content'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[2560px] items-center justify-between px-global">
        <a
          href="#top"
          className="max-w-[min(100%,28ch)] font-beausite-medium text-[13px] leading-tight tracking-tight-display text-cream md:text-[15px]"
        >
          {COMPANY.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-beausite-medium text-[18px] leading-none tracking-tight-display text-cream transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-6 border-l border-white/20 pl-8">
            {SOLUTION_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[14px] uppercase tracking-tight-nav text-cream/80 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#kontakt"
            className="rounded-full bg-cream px-5 py-2.5 font-beausite-medium text-[18px] leading-none tracking-tight-display text-black transition-opacity hover:opacity-90"
          >
            Skontaktuj się
          </a>
        </nav>

        <button
          type="button"
          className="font-beausite-medium text-[18px] text-cream lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Menu"
        >
          {menuOpen ? 'Zamknij' : 'Menu'}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-global py-6 lg:hidden">
          <p className="mb-4 font-mono text-[12px] uppercase text-cream/60">
            Rozwiązania
          </p>
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-beausite-medium text-[24px] tracking-tight-display"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {SOLUTION_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-beausite-medium text-[24px] tracking-tight-display"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="mt-2 inline-flex w-fit rounded-full bg-cream px-5 py-3 font-beausite-medium text-[18px] text-black"
              onClick={() => setMenuOpen(false)}
            >
              Skontaktuj się
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
