import { ScrollSection } from '@/components/core/scroll-section'
import { ScrollText } from '@/components/core/scroll-text'
import { useLanguage } from '../layout/LanguageProvider'
import SecTag from '../ui/SecTag'

const ADV_KEYS = ['about_adv1', 'about_adv2', 'about_adv3', 'about_adv4', 'about_adv5']

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="scroll-mt-20 border-b border-line bg-bg2 px-global py-20">
      <ScrollSection>
        <SecTag className="mb-[1.2rem]">{t('about_tag')}</SecTag>
        <ScrollText
          as="blockquote"
          className="my-6 max-w-[38ch] text-balance text-[clamp(1.9rem,4.2vw,4.2rem)] leading-[1.07] tracking-[-0.02em] text-cream [font-family:var(--font-display)] font-bold"
        >
          {t('about_q')}
        </ScrollText>

        <div className="grid grid-cols-1 gap-8 border-t border-line pt-10 lg:grid-cols-2 lg:gap-16">
          <ScrollText as="p" className="text-[0.87rem] leading-[1.78] text-dim">
            {t('about_p')}
          </ScrollText>
          <div>
            <SecTag className="mb-[1.2rem]">{t('about_adv_hd')}</SecTag>
            <ul className="mt-1 flex flex-col gap-[0.65rem]">
              {ADV_KEYS.map((key) => (
                <li key={key} className="flex gap-[0.6rem] text-[0.82rem] leading-[1.5] text-cream">
                  <span className="text-accent">—</span>
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollSection>
    </section>
  )
}
