import { useState, useEffect, useCallback } from 'react'
import MediaPlaceholder from './MediaPlaceholder'
import './Carousel.css'

const slides = [
  {
    id: 1,
    title: 'Umbris',
    subtitle: 'Technologia w cieniu doskonałości',
    description:
      'Tworzymy rozwiązania, które łączą innowację z niezawodnością. Miejsce na główne zdjęcie lub wideo firmowe.',
    mediaType: 'video',
    mediaLabel: 'Wideo powitalne / hero',
  },
  {
    id: 2,
    title: 'Innowacja',
    subtitle: 'Projektujemy przyszłość',
    description:
      'Nasze produkty wspierają biznes na każdym etapie rozwoju. Dodaj zdjęcie zespołu lub realizacji.',
    mediaType: 'image',
    mediaLabel: 'Zdjęcie projektu #1',
  },
  {
    id: 3,
    title: 'Partnerstwo',
    subtitle: 'Razem osiągamy więcej',
    description:
      'Budujemy długotrwałe relacje z klientami. Galeria referencji lub case study.',
    mediaType: 'gallery',
    mediaLabel: 'Galeria referencji',
  },
]

const INTERVAL_MS = 6000

export default function Carousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((index) => {
    setActive((index + slides.length) % slides.length)
  }, [])

  const next = useCallback(() => goTo(active + 1), [active, goTo])
  const prev = useCallback(() => goTo(active - 1), [active, goTo])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [paused, next])

  return (
    <section
      id="hero"
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="karuzela"
      aria-label="Główna prezentacja"
    >
      <div className="carousel__slides">
        {slides.map((s, i) => (
          <article
            key={s.id}
            className={`carousel__slide ${i === active ? 'carousel__slide--active' : ''}`}
            aria-hidden={i !== active}
          >
            <div className="carousel__media">
              <MediaPlaceholder
                type={s.mediaType}
                label={s.mediaLabel}
                aspectRatio="21/9"
                className="carousel__placeholder"
              />
            </div>
            <div className="carousel__overlay" />
            <div className="carousel__content container">
              <p className="carousel__eyebrow">{s.subtitle}</p>
              <h1 className="carousel__title">{s.title}</h1>
              <p className="carousel__desc">{s.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="carousel__controls container">
        <button
          type="button"
          className="carousel__arrow carousel__arrow--prev"
          onClick={prev}
          aria-label="Poprzedni slajd"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="carousel__dots" role="tablist" aria-label="Slajdy karuzeli">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Slajd ${i + 1}: ${s.title}`}
              className={`carousel__dot ${i === active ? 'carousel__dot--active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <button
          type="button"
          className="carousel__arrow carousel__arrow--next"
          onClick={next}
          aria-label="Następny slajd"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="carousel__progress" aria-hidden="true">
        <div
          className="carousel__progress-bar"
          key={active}
          style={{ animationDuration: `${INTERVAL_MS}ms` }}
        />
      </div>
    </section>
  )
}
