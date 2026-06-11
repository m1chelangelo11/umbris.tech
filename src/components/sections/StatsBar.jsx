import { ScrollSection } from '@/components/core/scroll-section'
import { ScrollText } from '@/components/core/scroll-text'
import { STATS } from '../../data/content'
import { useLanguage } from '../layout/LanguageProvider'
import SecTag from '../ui/SecTag'

export default function StatsBar() {
  const { lang, t } = useLanguage()

  return (
    <ScrollSection className="grid grid-cols-2 border-b border-line lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
      <div className="col-span-2 flex flex-row items-start gap-8 border-b border-line px-global py-10 lg:col-span-1 lg:flex-col lg:justify-between lg:gap-5 lg:border-b-0 lg:border-r">
        <div>
          <SecTag className="mb-[1.2rem]">{t('stat_tag')}</SecTag>
          <ScrollText
            as="h3"
            className="mt-3 font-hero text-[clamp(1.5rem,2.2vw,2rem)] uppercase leading-[0.93] tracking-[-0.01em]"
          >
            {t('stat_head')}
          </ScrollText>
        </div>
        <p className="max-w-[28ch] text-[0.78rem] leading-[1.65] text-dim">{t('stat_desc')}</p>
      </div>

      {STATS.map((stat, index) => {
        const mobileBorderR = index % 2 === 0
        const mobileBorderB = index < STATS.length - 2
        const desktopBorderR = index !== STATS.length - 1

        return (
          <div
            key={stat.value}
            className={`flex flex-col border-line px-global py-9 lg:border-b-0 ${mobileBorderR ? 'border-r' : ''} ${mobileBorderB ? 'border-b' : ''} ${desktopBorderR ? 'lg:border-r' : 'lg:border-r-0'}`}
          >
            <div className="font-hero text-[clamp(2.25rem,4vw,4rem)] leading-none tracking-[-0.02em] text-accent">
              {stat.value}
            </div>
            <div className="mt-[0.3rem] max-w-[22ch] text-[0.72rem] font-medium leading-[1.4] text-cream">
              {stat.label[lang]}
            </div>
            <p className="mt-3 flex-1 text-[0.75rem] leading-[1.6] text-dim">{stat.extra[lang]}</p>
          </div>
        )
      })}
    </ScrollSection>
  )
}
