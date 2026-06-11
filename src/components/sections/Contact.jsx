import { ScrollSection } from '@/components/core/scroll-section'
import { ScrollText } from '@/components/core/scroll-text'
import { COMPANY } from '../../data/content'
import { useLanguage } from '../layout/LanguageProvider'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="scroll-mt-20 border-b border-line">
      <ScrollSection className="grid grid-cols-1 items-center gap-12 px-global py-16 sm:py-28 lg:grid-cols-[1fr_auto]">
        <div>
          <ScrollText
            as="h2"
            className="font-hero text-[clamp(2.5rem,7vw,6rem)] uppercase leading-[0.9] tracking-[-0.02em]"
          >
            {t('ct_h')}
          </ScrollText>
          <ScrollText as="p" className="mt-6 max-w-[42ch] text-[0.87rem] leading-[1.7] text-dim">
            {t('ct_p')}
          </ScrollText>
        </div>
        <a
          href={`mailto:${COMPANY.email}`}
          className="whitespace-nowrap text-[clamp(1.5rem,4vw,3.5rem)] tracking-[-0.01em] text-accent transition-opacity hover:opacity-55 [font-family:var(--font-display)] font-bold"
        >
          {COMPANY.email}
        </a>
      </ScrollSection>
    </section>
  )
}
