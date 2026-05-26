import { COMPANY } from '../../data/content'
import { ScrollSection } from '@/components/core/scroll-section'
import { ScrollText } from '@/components/core/scroll-text'

export default function FooterSimple() {
  return (
    <footer className="border-t border-black/20 bg-cream py-6 text-black">
      <ScrollSection className="mx-auto flex max-w-[2560px] flex-col justify-between gap-4 px-global md:flex-row md:items-center">
        <ScrollText
          as="p"
          className="font-beausite-regular text-[14px] leading-[1.2] text-black/70"
        >
          {`© ${new Date().getFullYear()} ${COMPANY.legalName}. Wszelkie prawa zastrzeżone.`}
        </ScrollText>
        <ScrollText
          as="p"
          className="font-mono text-[12px] uppercase tracking-[0.08em] text-black/60"
        >
          C-UAS · antydrone
        </ScrollText>
      </ScrollSection>
    </footer>
  )
}
