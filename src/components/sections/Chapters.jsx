import { Network, Radar, Zap } from 'lucide-react'
import { SOLUTIONS } from '../../data/content'
import { ScrollSection } from '@/components/core/scroll-section'
import { ScrollText } from '@/components/core/scroll-text'
import ArrowLink from '../ui/ArrowLink'

const SOLUTION_ICONS = {
  detection: Radar,
  neutralization: Zap,
  integration: Network,
}

function SolutionCard({ solution }) {
  const Icon = SOLUTION_ICONS[solution.id]

  return (
    <article
      id={solution.anchor}
      className="scroll-mt-[88px] overflow-hidden border border-white/15"
    >
      <div className={`h-1 w-full ${solution.accent}`} />
      <ScrollSection>
        <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
          <div className="border-b border-white/10 p-6 md:p-8 lg:border-b-0 lg:border-r">
            <ScrollText
              as="p"
              className="font-mono text-[12px] uppercase tracking-[0.08em] text-cream/60"
            >
              {solution.label}
            </ScrollText>
            <ScrollText
              as="h3"
              className="mt-4 max-w-[24ch] font-display text-[clamp(1.6rem,4vw,3rem)] leading-[0.98] tracking-tight-display text-cream"
            >
              {solution.title}
            </ScrollText>
            <ScrollText
              as="p"
              className="mt-8 font-beausite-medium text-[18px] text-cream"
            >
              W ramach modułu zapewniamy:
            </ScrollText>
            <ul className="mt-6 space-y-4">
              {solution.topics.map((topic) => (
                <li key={topic}>
                  <ScrollText
                    as="p"
                    className="font-beausite-regular text-[18px] leading-[1.25] tracking-tight-display text-cream/80"
                  >
                    {topic}
                  </ScrollText>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <ArrowLink href="#kontakt" className="text-cream">
                {solution.cta}
              </ArrowLink>
            </div>
          </div>

          {/* Placeholder visual — swap for solution footage/screenshots when available */}
          <div
            className={`flex h-[280px] items-center justify-center md:h-[360px] lg:h-auto ${solution.accent}`}
          >
            <Icon className="h-16 w-16 text-black/25" strokeWidth={1} aria-hidden="true" />
          </div>
        </div>
      </ScrollSection>
    </article>
  )
}

export default function Chapters() {
  return (
    <section id="rozwiazania" className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-[2560px] px-global">
        <ScrollSection className="mb-12 max-w-[28ch]">
          <ScrollText
            as="p"
            className="font-mono text-[12px] uppercase tracking-[0.08em] text-cream/60"
          >
            Nasze rozwiązania
          </ScrollText>
          <ScrollText
            as="h2"
            className="mt-5 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.97] tracking-tight-display text-cream"
          >
            Kompletna ochrona przed dronami
          </ScrollText>
        </ScrollSection>
        <div className="space-y-6">
          {SOLUTIONS.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  )
}
