import { ScrollText } from '@/components/core/scroll-text'
import SecTag from './SecTag'

export default function SectionHeader({ tag, title }) {
  return (
    <div className="border-b border-line px-global pt-14 pb-8">
      <SecTag className="mb-[1.2rem]">{tag}</SecTag>
      <ScrollText
        as="h2"
        className="font-hero text-[clamp(2rem,4.5vw,3.75rem)] uppercase leading-[0.92] tracking-[-0.01em]"
      >
        {title}
      </ScrollText>
    </div>
  )
}
