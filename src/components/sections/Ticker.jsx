import { SECTORS } from '../../data/content'
import { useLanguage } from '../layout/useLanguage'

export default function Ticker() {
  const { lang } = useLanguage()
  const items = [...SECTORS[lang], ...SECTORS[lang]]

  return (
    <div className="overflow-hidden border-y border-line bg-bg2 py-[0.8rem]" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center gap-[2.75rem]">
        {items.map((sector, index) => (
          <span key={`${sector}-${index}`} className="flex items-center gap-[2.75rem]">
            <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-dim">
              {sector}
            </span>
            <span className="text-accent/60">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
