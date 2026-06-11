import { ScrollSection } from '@/components/core/scroll-section'
import { ScrollText } from '@/components/core/scroll-text'
import RadarCanvas from '@/components/core/radar-canvas'
import { COMPANY } from '../../data/content'
import { useLanguage } from '../layout/useLanguage'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="scroll-mt-20 relative overflow-hidden border-b border-line">
      <RadarCanvas originX={0.4} ringCount={16} ringSpeed={0.012} maxAlpha={0.16} blips={false} />
      <div className="relative z-[1] mx-auto max-w-[90rem]">
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
            className="whitespace-nowrap text-[clamp(1.5rem,4vw,3.5rem)] tracking-[-0.01em] text-accent transition-opacity hover:opacity-55 font-bold"
          >
            <ScrollText as="span" inline>
              {COMPANY.email}
            </ScrollText>
          </a>
        </ScrollSection>
      </div>
    </section>
  )
}
