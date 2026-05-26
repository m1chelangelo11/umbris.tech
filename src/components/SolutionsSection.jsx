import MediaPlaceholder from './MediaPlaceholder'
import './SolutionsSection.css'

const solutions = [
  {
    id: 1,
    title: 'Rozwiązanie #1',
    description:
      'Krótki opis pierwszego produktu lub usługi. Dodaj zdjęcie, diagram lub krótkie wideo demonstracyjne.',
    mediaType: 'image',
    mediaLabel: 'Zdjęcie / mockup produktu',
  },
  {
    id: 2,
    title: 'Rozwiązanie #2',
    description:
      'Opis drugiego rozwiązania. Idealne miejsce na nagranie ekranu, tutorial lub infografikę.',
    mediaType: 'video',
    mediaLabel: 'Wideo demonstracyjne',
  },
  {
    id: 3,
    title: 'Rozwiązanie #3',
    description:
      'Trzecie rozwiązanie w portfolio. Możesz dodać galerię zrzutów ekranu lub zdjęć z wdrożenia.',
    mediaType: 'gallery',
    mediaLabel: 'Galeria wdrożenia',
  },
  {
    id: 4,
    title: 'Rozwiązanie #4',
    description:
      'Kolejny produkt lub usługa. Rozbuduj sekcję o dowolne multimedia.',
    mediaType: 'image',
    mediaLabel: 'Grafika techniczna',
  },
  {
    id: 5,
    title: 'Rozwiązanie #5',
    description:
      'Piąte rozwiązanie — np. konsulting, integracje lub wsparcie techniczne.',
    mediaType: 'video',
    mediaLabel: 'Case study wideo',
  },
  {
    id: 6,
    title: 'Rozwiązanie #6',
    description:
      'Szóste miejsce w siatce — gotowe na kolejny produkt z pełną oprawą wizualną.',
    mediaType: 'image',
    mediaLabel: 'Referencja klienta',
  },
]

export default function SolutionsSection() {
  return (
    <section id="rozwiazania" className="solutions">
      <div className="container">
        <header className="section-header section-header--center">
          <span className="section-header__tag">Nasze rozwiązania</span>
          <h2 className="section-header__title">Produkty i usługi</h2>
          <p className="section-header__lead">
            Poniżej prezentujemy nasze kluczowe rozwiązania. Każda karta zawiera
            dedykowane miejsce na zdjęcia, filmy i galerie — wystarczy podmienić
            komponenty placeholder na prawdziwe pliki multimedialne.
          </p>
        </header>

        <div className="solutions__grid">
          {solutions.map((item, index) => (
            <article
              key={item.id}
              className={`solution-card ${index === 0 ? 'solution-card--featured' : ''}`}
            >
              <div className="solution-card__media">
                <MediaPlaceholder
                  type={item.mediaType}
                  label={item.mediaLabel}
                  aspectRatio={index === 0 ? '21/9' : '16/10'}
                />
              </div>
              <div className="solution-card__body">
                <h3 className="solution-card__title">{item.title}</h3>
                <p className="solution-card__desc">{item.description}</p>
                <a href="#kontakt" className="solution-card__link">
                  Dowiedz się więcej
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="solutions__showcase">
          <h3 className="solutions__showcase-title">Strefa multimediów</h3>
          <p className="solutions__showcase-desc">
            Duże formaty na prezentacje, demo produktów i materiały promocyjne.
          </p>
          <div className="solutions__showcase-grid">
            <MediaPlaceholder
              type="video"
              label="Pełnoekranowe demo produktu"
              aspectRatio="21/9"
            />
            <MediaPlaceholder type="image" label="Infografika" aspectRatio="1/1" />
            <MediaPlaceholder type="image" label="Screenshot aplikacji" aspectRatio="1/1" />
            <MediaPlaceholder type="video" label="Webinar / nagranie" aspectRatio="1/1" />
          </div>
        </div>
      </div>
    </section>
  )
}
