import { ScrollSection } from '@/components/core/scroll-section'
import { ScrollText } from '@/components/core/scroll-text'
import { SOLUTIONS } from '../../data/content'
import { useLanguage } from '../layout/useLanguage'
import SectionHeader from '../ui/SectionHeader'

export default function Solutions() {
  const { lang, t } = useLanguage()

  return (
    <section id="solutions" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-[90rem]">
        <SectionHeader tag={t('sol_tag')} title={t('sol_h')} />

        {SOLUTIONS.map((solution, index) => (
          <ScrollSection
            key={solution.id}
            className="grid grid-cols-[3.5rem_1fr] gap-8 border-b border-line px-global py-10 transition-colors last:border-b-0 hover:bg-bg2 lg:grid-cols-[5rem_1fr_1fr]"
          >
            <ScrollText as="div" className="pt-[0.3rem] text-[0.82rem] tracking-[0.06em] text-dim font-bold">
              {String(index + 1).padStart(2, '0')}
            </ScrollText>
            <div>
              <ScrollText
                as="h3"
                className="font-extrabold text-[clamp(1.75rem,3.5vw,2.9rem)] uppercase leading-[0.92] tracking-[-0.01em] text-accent"
              >
                {solution.name[lang]}
              </ScrollText>
              <ScrollText
                as="p"
                className="mt-[0.45rem] max-w-[30ch] text-[0.75rem] leading-[1.45] tracking-[0.01em] text-dim"
              >
                {solution.subtitle[lang]}
              </ScrollText>
            </div>
            <ul className="col-start-2 mt-2 flex flex-col gap-[0.42rem] lg:col-start-auto lg:mt-0">
              {solution.topics.map((topic) => (
                <li
                  key={topic[lang]}
                  className="flex gap-[0.5rem] text-[0.78rem] leading-[1.45] text-dim"
                >
                  <span className="text-accent">—</span>
                  <ScrollText as="span" inline>
                    {topic[lang]}
                  </ScrollText>
                </li>
              ))}
            </ul>
          </ScrollSection>
        ))}
      </div>
    </section>
  )
}
