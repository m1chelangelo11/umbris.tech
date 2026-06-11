import { ScrollSection } from '@/components/core/scroll-section'
import { ScrollText } from '@/components/core/scroll-text'
import { PROCESS_STEPS } from '../../data/content'
import { useLanguage } from '../layout/LanguageProvider'
import SectionHeader from '../ui/SectionHeader'

export default function Process() {
  const { lang, t } = useLanguage()

  return (
    <section id="process" className="scroll-mt-20 border-b border-line">
      <SectionHeader tag={t('proc_tag')} title={t('proc_h')} />
      <div className="grid grid-cols-2 border-t border-line lg:grid-cols-4">
        {PROCESS_STEPS.map((step, index) => (
          <ScrollSection
            key={step.name[lang]}
            className={`flex flex-col gap-[0.65rem] border-line px-global py-10 ${
              index !== PROCESS_STEPS.length - 1 ? 'border-r' : ''
            }`}
          >
            <div className="font-hero text-[clamp(2.5rem,4vw,3.5rem)] leading-none tracking-[-0.02em] text-accent">
              {String(index + 1).padStart(2, '0')}
            </div>
            <ScrollText
              as="h3"
              className="text-[1.4rem] uppercase leading-[0.95] tracking-[-0.01em] [font-family:var(--font-hero)] font-extrabold"
            >
              {step.name[lang]}
            </ScrollText>
            <p className="text-[0.8rem] leading-[1.65] text-dim">{step.description[lang]}</p>
          </ScrollSection>
        ))}
      </div>
    </section>
  )
}
