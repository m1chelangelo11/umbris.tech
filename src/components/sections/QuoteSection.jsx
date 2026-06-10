import { COMPANY } from '../../data/content'
import { ScrollSection } from '@/components/core/scroll-section'
import { ScrollText } from '@/components/core/scroll-text'

export default function QuoteSection() {
  return (
    <section className="bg-cream py-16 text-black md:py-24">
      <div className="mx-auto max-w-[2560px] px-global">
        <ScrollSection className="mx-auto max-w-[1100px]">
          <ScrollText
            as="p"
            className="font-display text-[clamp(1.9rem,4.2vw,3.5rem)] leading-[1.03] tracking-tight-display"
          >
            {COMPANY.missionQuote}
          </ScrollText>
          <div className="mt-10 flex items-center gap-4">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black font-display text-[20px] text-cream md:h-16 md:w-16 md:text-[22px]"
              aria-hidden
            >
              U
            </div>
            <div>
              <ScrollText
                as="p"
                className="font-beausite-medium text-[18px] leading-none tracking-tight-display"
              >
                {COMPANY.missionAuthor}
              </ScrollText>
              <ScrollText
                as="p"
                className="mt-2 font-mono text-[12px] uppercase tracking-[0.08em] text-black/70"
              >
                {COMPANY.missionRole}
              </ScrollText>
            </div>
          </div>
        </ScrollSection>
      </div>
    </section>
  )
}
