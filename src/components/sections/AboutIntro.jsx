import { COMPANY } from '../../data/content'
import { ScrollSection } from '@/components/core/scroll-section'
import { ScrollText } from '@/components/core/scroll-text'
import ArrowLink from '../ui/ArrowLink'

export default function AboutIntro() {
  return (
    <section id="about" className="bg-black py-16 md:py-24">
      <ScrollSection className="mx-auto grid max-w-[2560px] gap-10 px-global lg:grid-cols-2 lg:gap-16">
        <div>
          <ScrollText
            as="p"
            className="font-mono text-[12px] uppercase tracking-[0.08em] text-cream/60"
          >
            O nas
          </ScrollText>
          <ScrollText
            as="h2"
            className="mt-5 max-w-[22ch] font-display text-[clamp(2rem,5vw,4rem)] leading-[0.97] tracking-tight-display text-cream"
          >
            Ochrona, zanim dron stanie się zagrożeniem
          </ScrollText>
        </div>

        <div>
          <ScrollText
            as="p"
            className="max-w-[50ch] font-beausite-regular text-[clamp(1rem,2.2vw,1.5rem)] leading-[1.2] tracking-tight-display text-cream"
          >
            {`${COMPANY.name} projektuje i wdraża systemy przeciwko dronom (C-UAS) dla obiektów, które nie mogą pozwolić sobie na niekontrolowany dostęp z powietrza.`}
          </ScrollText>
          <ScrollText
            as="p"
            className="mt-6 max-w-[52ch] font-beausite-regular text-[18px] leading-[1.3] tracking-tight-display text-cream/75"
          >
            Łączymy wykrywanie, analizę i neutralizację w spójną platformę
            dopasowaną do specyfiki terenu, regulacji i procedur ochrony klienta.
          </ScrollText>
          <ScrollText
            as="p"
            className="mt-6 max-w-[52ch] font-beausite-regular text-[18px] leading-[1.3] tracking-tight-display text-cream/75"
          >
            Od audytu ryzyka, przez integrację sensorów i efektorów, po szkolenie
            operatorów — prowadzimy projekt end-to-end jako jeden zespół.
          </ScrollText>
          <div className="mt-10">
            <ArrowLink href="#kontakt" className="text-cream">
              Umów konsultację
            </ArrowLink>
          </div>
        </div>
      </ScrollSection>
    </section>
  )
}
