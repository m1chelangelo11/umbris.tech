import { COMPANY, COMPANY_STATS } from '../../data/content'
import { ScrollSection } from '@/components/core/scroll-section'
import { ScrollText } from '@/components/core/scroll-text'

export default function SubscribeSection() {
  return (
    <section id="kontakt" className="bg-cream py-16 text-black md:py-24">
      <div className="mx-auto max-w-[2560px] px-global">
        <ScrollSection className="grid gap-12 border border-black/20 p-6 md:p-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <ScrollText
              as="h2"
              className="max-w-[24ch] font-display text-[clamp(1.8rem,4vw,3.3rem)] leading-[1] tracking-tight-display"
            >
              Porozmawiajmy o ochronie Twojego obiektu
            </ScrollText>
            <ScrollText
              as="p"
              className="mt-5 max-w-[56ch] font-beausite-regular text-[18px] leading-[1.3] tracking-tight-display text-black/80"
            >
              Opisz obiekt i wyzwanie — przygotujemy wstępną koncepcję systemu
              antydrone dopasowaną do Twojej infrastruktury i wymogów prawnych.
            </ScrollText>

            <form className="mt-8 flex w-full max-w-[620px] flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">
                Adres e-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Twój adres e-mail"
                className="h-12 flex-1 border border-black/30 bg-transparent px-4 font-beausite-regular text-[16px] outline-none placeholder:text-black/45 focus:border-black"
              />
              <button
                type="submit"
                className="h-12 whitespace-nowrap bg-black px-6 font-beausite-medium text-[16px] text-cream transition-opacity hover:opacity-90"
              >
                Wyślij
              </button>
            </form>

            <ScrollText
              as="p"
              className="mt-4 max-w-[70ch] font-beausite-regular text-[14px] leading-[1.3] text-black/60"
            >
              {`Wysyłając formularz, wyrażasz zgodę na kontakt w sprawie oferty ${COMPANY.legalName}. Dane przetwarzamy zgodnie z RODO.`}
            </ScrollText>
          </div>

          <div className="grid border border-black/20 sm:grid-cols-3 lg:grid-cols-1">
            {COMPANY_STATS.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-black/20 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:border-r-0 lg:border-b lg:last:border-b-0"
              >
                <ScrollText
                  as="p"
                  className="font-display text-[48px] leading-none tracking-tight-display"
                >
                  {stat.value}
                </ScrollText>
                <ScrollText
                  as="p"
                  className="mt-3 max-w-[24ch] font-beausite-regular text-[15px] leading-[1.2] tracking-tight-display text-black/70"
                >
                  {stat.label}
                </ScrollText>
              </div>
            ))}
          </div>
        </ScrollSection>
      </div>
    </section>
  )
}
