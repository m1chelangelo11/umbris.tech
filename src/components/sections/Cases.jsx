import { ScrollSection } from '@/components/core/scroll-section'
import { ScrollText } from '@/components/core/scroll-text'
import { CASES } from '../../data/content'
import { useLanguage } from '../layout/LanguageProvider'
import SectionHeader from '../ui/SectionHeader'

export default function Cases() {
  const { lang, t } = useLanguage()

  return (
    <section id="cases" className="scroll-mt-20 border-b border-line">
      <SectionHeader tag={t('cases_tag')} title={t('cases_h')} />

      {CASES.map((item, index) => (
        <ScrollSection
          key={item.title[lang]}
          className="grid grid-cols-[3.5rem_1fr] gap-8 border-b border-line px-global py-8 transition-colors last:border-b-0 hover:bg-bg2 lg:grid-cols-[5rem_1fr_1.3fr]"
        >
          <span className="pt-[0.2rem] text-[0.82rem] tracking-[0.06em] text-dim [font-family:var(--font-display)] font-bold">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <div className="mb-[0.35rem] text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-accent">
              {item.sector[lang]}
            </div>
            <ScrollText
              as="h3"
              className="text-[clamp(1.25rem,2.4vw,1.9rem)] leading-[0.95] tracking-[-0.01em] [font-family:var(--font-hero)] font-extrabold"
            >
              {item.title[lang]}
            </ScrollText>
          </div>
          <p className="hidden pt-[0.2rem] text-[0.8rem] leading-[1.65] text-dim lg:block">
            {item.description[lang]}
          </p>
        </ScrollSection>
      ))}
    </section>
  )
}
