import { ScrollSection } from '@/components/core/scroll-section'
import { ScrollText } from '@/components/core/scroll-text'
import { SYSTEM_LAYERS } from '../../data/content'
import { useLanguage } from '../layout/LanguageProvider'
import SectionHeader from '../ui/SectionHeader'

export default function SystemDiagram() {
  const { lang, t } = useLanguage()

  return (
    <section id="system" className="scroll-mt-20 border-b border-line bg-bg2">
      <SectionHeader tag={t('sys_tag')} title={t('sys_h')} />
      <ScrollSection className="flex flex-col items-stretch overflow-x-auto py-10 lg:flex-row lg:py-12">
        {SYSTEM_LAYERS.map((layer, index) => {
          const isLast = index === SYSTEM_LAYERS.length - 1
          return (
            <div
              key={layer.label[lang]}
              className={`relative flex-1 border-line px-global py-6 lg:py-0 ${
                isLast ? '' : 'border-b lg:border-b-0 lg:border-r'
              }`}
            >
              <ScrollText
                as="div"
                className="mb-5 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-dim"
              >
                {layer.label[lang]}
              </ScrollText>
              <div className="flex flex-col gap-[0.45rem]">
                {layer.nodes.map((node) => (
                  <div
                    key={node[lang]}
                    className="rounded-[3px] border border-line px-[0.85rem] py-[0.55rem] text-[0.75rem] font-medium text-cream transition-colors hover:border-accent"
                  >
                    {node[lang]}
                  </div>
                ))}
              </div>
              {!isLast && (
                <span
                  className="absolute bottom-[-0.9rem] left-[var(--spacing-global)] text-[1.4rem] font-bold text-accent lg:top-1/2 lg:right-[-0.65rem] lg:bottom-auto lg:left-auto lg:-translate-y-1/2"
                  aria-hidden="true"
                >
                  <span className="lg:hidden">↓</span>
                  <span className="hidden lg:inline">›</span>
                </span>
              )}
            </div>
          )
        })}
      </ScrollSection>
    </section>
  )
}
