import { ScrollSection } from '@/components/core/scroll-section'
import { ScrollText } from '@/components/core/scroll-text'
import { CASES } from '../../data/content'
import { useLanguage } from '../layout/useLanguage'
import SectionHeader from '../ui/SectionHeader'

export default function Cases() {
  const { lang, t } = useLanguage()

  return (
    <section id="cases" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-[90rem]">
        <SectionHeader tag={t('cases_tag')} title={t('cases_h')} />

        {CASES.map((item, index) => (
          <ScrollSection
            key={item.title[lang]}
            className="grid grid-cols-[3.5rem_1fr] gap-8 border-b border-line px-global py-8 transition-colors last:border-b-0 hover:bg-bg2 lg:grid-cols-[5rem_1fr_1.3fr]"
          >
            <ScrollText as="div" className="pt-[0.2rem] text-[0.82rem] tracking-[0.06em] text-dim font-bold">
              {String(index + 1).padStart(2, '0')}
            </ScrollText>
            <div>
              <ScrollText
                as="div"
                className="mb-[0.35rem] text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-accent"
              >
                {item.sector[lang]}
              </ScrollText>
              <ScrollText
                as="h3"
                className="text-[clamp(1.25rem,2.4vw,1.9rem)] leading-[0.95] tracking-[-0.01em] font-extrabold"
              >
                {item.title[lang]}
              </ScrollText>
            </div>
            <div className="col-start-2 mt-2 lg:col-start-auto lg:mt-0">
              <ScrollText as="p" className="text-[0.8rem] leading-[1.65] text-dim lg:pt-[0.2rem]">
                {item.description[lang]}
              </ScrollText>
            </div>
          </ScrollSection>
        ))}
      </div>
    </section>
  )
}
