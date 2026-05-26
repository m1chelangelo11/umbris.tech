import { USE_CASES } from '../../data/content'
import { ScrollSection } from '@/components/core/scroll-section'
import { ScrollText } from '@/components/core/scroll-text'
import ArrowLink from '../ui/ArrowLink'

export default function CaseStudies() {
  return (
    <section id="zastosowania" className="bg-orange py-16 text-black md:py-24">
      <div className="mx-auto max-w-[2560px] px-global">
        <ScrollSection className="grid gap-10 lg:grid-cols-2">
          <div>
            <ScrollText
              as="p"
              className="font-mono text-[12px] uppercase tracking-[0.08em] text-black/70"
            >
              Zastosowania
            </ScrollText>
            <ScrollText
              as="h2"
              className="mt-5 max-w-[20ch] font-display text-[clamp(2rem,5vw,4rem)] leading-[0.97] tracking-tight-display"
            >
              Gdzie wdrażamy nasze systemy
            </ScrollText>
          </div>
          <div className="self-end">
            <ArrowLink href="#kontakt" className="text-black">
              Porozmawiaj z ekspertem
            </ArrowLink>
          </div>
        </ScrollSection>

        <div className="mt-12 grid gap-px bg-black/20 md:grid-cols-2">
          {USE_CASES.map((item) => (
            <article key={item.title} className="bg-orange p-6 md:p-8">
              <ScrollSection>
                <ScrollText
                  as="p"
                  className="font-mono text-[12px] uppercase tracking-[0.08em] text-black/65"
                >
                  {item.sector}
                </ScrollText>
                <ScrollText
                  as="h3"
                  className="mt-4 max-w-[23ch] font-display text-[clamp(1.45rem,3vw,2.3rem)] leading-[0.98] tracking-tight-display"
                >
                  {item.title}
                </ScrollText>
                <ScrollText
                  as="p"
                  className="mt-5 max-w-[44ch] font-beausite-regular text-[18px] leading-[1.25] tracking-tight-display text-black/80"
                >
                  {item.description}
                </ScrollText>
                <div className="mt-8">
                  <ArrowLink href="#kontakt" className="text-black">
                    {item.status}
                  </ArrowLink>
                </div>
              </ScrollSection>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
