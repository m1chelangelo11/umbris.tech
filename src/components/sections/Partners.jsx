import { SECTORS } from '../../data/content'

export default function Partners() {
  const loop = [...SECTORS, ...SECTORS]

  return (
    <section className="border-y border-white/15 bg-black py-4" aria-label="Branże">
      <div className="overflow-hidden">
        <div className="animate-marquee flex min-w-max items-center gap-12 px-global md:gap-24">
          {loop.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="font-mono text-[15px] uppercase tracking-[0.03em] text-cream/85"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
