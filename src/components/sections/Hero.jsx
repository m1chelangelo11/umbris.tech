import { ScrollText } from '@/components/core/scroll-text'
import { ASSETS, COMPANY } from '../../data/content'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden pt-[72px]"
    >
      <div className="absolute inset-0">
        <video
          src={ASSETS.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      </div>

      <div className="relative z-10 px-global pb-10 pt-32 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-[2560px]">
          <ScrollText
            as="p"
            className="font-label text-[12px] text-cream/60"
            amount={0.1}
            margin="0px"
          >
            {COMPANY.legalName}
          </ScrollText>
          <div className="mt-4 min-h-[clamp(10rem,32vw,20rem)]">
            <ScrollText
              as="h1"
              className="font-hero max-w-[20ch] text-[150px] leading-[0.9] tracking-tight-display text-cream"
              amount={0.1}
              margin="0px"
            >
              {COMPANY.heroTitle}
            </ScrollText>
          </div>
          <ScrollText
            as="p"
            className="mt-6 max-w-[40ch] font-beausite-regular text-[clamp(1rem,2.5vw,1.35rem)] leading-[1.2] tracking-tight-display text-cream/90"
            amount={0.15}
            margin="0px"
          >
            {COMPANY.heroSubtitle}
          </ScrollText>
          <ScrollText
            as="p"
            className="mt-4 max-w-[44ch] font-beausite-regular text-[clamp(0.9rem,2vw,1rem)] leading-[1.2] tracking-tight-display text-cream/70"
            amount={0.15}
            margin="0px"
          >
            {COMPANY.heroMeta}
          </ScrollText>

          <div className="mt-12 flex items-center gap-3 text-cream">
            <ScrollText
              as="span"
              className="font-beausite-medium text-[18px] leading-none tracking-tight-nav"
              amount={0.15}
              margin="0px"
            >
              {COMPANY.scrollLabel}
            </ScrollText>
            <svg
              width="19"
              height="21"
              viewBox="0 0 19 21"
              fill="none"
              className="rotate-90"
              aria-hidden
            >
              <path
                d="M2 10.5H16M16 10.5L10 4.5M16 10.5L10 16.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
