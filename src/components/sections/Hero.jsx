import { useEffect, useRef } from 'react'
import { ScrollText } from '@/components/core/scroll-text'
import RadarCanvas from '@/components/core/radar-canvas'
import { useLanguage } from '../layout/useLanguage'

function useWordmarkFit() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function fit() {
      const vw = document.documentElement.clientWidth
      const maxContent = 1440
      const spacing = Math.min(72, Math.max(24, vw * 0.05))
      const marginLeft = vw < 541 ? 0 : Math.max(0, (vw - maxContent) / 2) + spacing
      const targetWidth = vw - marginLeft

      el.style.marginLeft = `${marginLeft}px`
      el.style.fontSize = '100px'
      const ratio = targetWidth / el.scrollWidth
      // Below 541px the wordmark shrinks to its content width (items-start),
      // so `ratio` already maps it to targetWidth — no extra multiplier needed.
      // From 541px up (items-stretch) the element fills the container, so
      // scrollWidth ≈ targetWidth and ratio ≈ 1; the 2.3x multiplier sets the
      // actual display size in that regime.
      const multiplier = vw < 541 ? 1 : 2.3
      el.style.fontSize = `${Math.floor(100 * ratio * multiplier)}px`
    }

    fit()
    window.addEventListener('resize', fit)
    document.fonts?.ready.then(fit)

    return () => window.removeEventListener('resize', fit)
  }, [])

  return ref
}

export default function Hero() {
  const { t } = useLanguage()
  const wordmarkRef = useWordmarkFit()

  return (
    <section
      id="hero"
      className="relative flex h-[100svh] min-h-[560px] flex-col justify-end overflow-hidden bg-bg pt-16"
    >
      <RadarCanvas />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[35%] bg-gradient-to-b from-transparent to-bg" />

      <div className="right-content absolute top-[calc(4rem+1.25rem)] z-[3] flex items-center gap-[0.4rem] text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-accent">
        <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-accent" />
        <span>{t('hero_status')}</span>
      </div>

      <div className="relative z-[2] flex shrink-0 flex-col items-start pb-11 min-[541px]:items-stretch">
        <h1
          ref={wordmarkRef}
          className="block select-none whitespace-nowrap pt-5 font-hero leading-[0.88] tracking-[-0.01em] text-cream"
          style={{ fontSize: 'clamp(80px, 25vw, 400px)' }}
        >
          UMBRIS
        </h1>
        <div className="h-px w-full bg-line" />
        <div className="w-full pt-5">
          <div className="mx-auto flex max-w-[90rem] flex-col gap-6 px-global sm:flex-row sm:items-end sm:justify-between">
            <div>
              <ScrollText
                as="p"
                className="mb-[0.55rem] text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-dim"
                amount={0.1}
                margin="0px"
              >
                {t('hero_label')}
              </ScrollText>
              <ScrollText
                as="p"
                className="max-w-[28ch] text-[clamp(0.9rem,1.8vw,1.15rem)] font-normal leading-[1.35] text-cream"
                amount={0.1}
                margin="0px"
              >
                {t('hero_tagline')}
              </ScrollText>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-accent px-[1.7rem] py-[0.8rem] text-[0.82rem] font-semibold text-bg transition-[opacity,transform] duration-200 hover:-translate-y-0.5 hover:opacity-[0.88] sm:self-auto"
            >
              {t('hero_cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
