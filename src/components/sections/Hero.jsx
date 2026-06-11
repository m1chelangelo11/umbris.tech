import { useEffect, useRef } from 'react'
import { ScrollText } from '@/components/core/scroll-text'
import { useLanguage } from '../layout/LanguageProvider'

const ACCENT_RGB = '254,113,65'
const RING_COUNT = 30
const RING_SPEED = 0.042

function RadarCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    function resize() {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)

    const blips = []
    let nextSpawn = 0
    let rafId

    function spawnBlip(t, W, H) {
      blips.push({
        x: W * 0.05 + Math.random() * W * 0.9,
        y: H * 0.05 + Math.random() * H * 0.9,
        born: t,
        life: 2 + Math.random() * 3.5,
        size: 1.2 + Math.random() * 2,
        maxAlpha: 0.22 + Math.random() * 0.45,
      })
    }

    function frame(ts) {
      const t = ts * 0.001
      const W = canvas.width
      const H = canvas.height
      ctx.clearRect(0, 0, W, H)
      const ox = W * 0.78
      const oy = H * 0.5
      const maxR = Math.hypot(W, H) * 1.1

      for (let i = 0; i < RING_COUNT; i++) {
        const phase = (i / RING_COUNT + t * RING_SPEED) % 1
        const r = phase * maxR
        const alpha = (1 - phase) ** 1.6 * 0.52
        ctx.beginPath()
        ctx.arc(ox, oy, r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(${ACCENT_RGB},${alpha.toFixed(3)})`
        ctx.lineWidth = 1.1
        ctx.stroke()
      }

      if (t > nextSpawn) {
        spawnBlip(t, W, H)
        nextSpawn = t + 0.35 + Math.random() * 0.7
      }

      for (let i = blips.length - 1; i >= 0; i--) {
        const b = blips[i]
        const prog = (t - b.born) / b.life
        if (prog >= 1) {
          blips.splice(i, 1)
          continue
        }
        let a
        if (prog < 0.15) a = b.maxAlpha * (prog / 0.15)
        else if (prog > 0.75) a = b.maxAlpha * (1 - (prog - 0.75) / 0.25)
        else a = b.maxAlpha

        ctx.beginPath()
        ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${ACCENT_RGB},${a.toFixed(3)})`
        ctx.fill()
      }

      rafId = requestAnimationFrame(frame)
    }
    rafId = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(rafId)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" />
  )
}

function useWordmarkFit() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function fit() {
      el.style.fontSize = '100px'
      const ratio = document.documentElement.clientWidth / el.scrollWidth
      el.style.fontSize = `${Math.floor(100 * ratio * 2.3)}px`
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

      <div className="absolute right-[var(--spacing-global)] top-[calc(4rem+1.25rem)] z-[3] flex items-center gap-[0.4rem] text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-accent">
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
        <div className="h-px bg-line" />
        <div className="flex flex-col gap-6 px-global pt-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-[0.55rem] text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-dim">
              {t('hero_label')}
            </p>
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
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-[1.7rem] py-[0.8rem] text-[0.82rem] font-semibold text-bg transition-[opacity,transform] duration-200 hover:-translate-y-0.5 hover:opacity-[0.88]"
          >
            {t('hero_cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
