import MediaPlaceholder from './MediaPlaceholder'
import './AboutSection.css'

export default function AboutSection() {
  return (
    <section id="o-nas" className="about">
      <div className="container">
        <header className="section-header">
          <span className="section-header__tag">O nas</span>
          <h2 className="section-header__title">
            Umbris Spółka z ograniczoną odpowiedzialnością
          </h2>
          <p className="section-header__lead">
            Jesteśmy zespołem specjalistów, którzy dostarczają nowoczesne rozwiązania
            technologiczne. Poniżej znajdziesz miejsce na opis firmy oraz bogatą
            oprawę multimedialną — zdjęcia biura, zespołu, wydarzeń i materiały wideo.
          </p>
        </header>

        <div className="about__grid">
          <div className="about__main-media">
            <MediaPlaceholder
              type="video"
              label="Film o firmie"
              aspectRatio="16/9"
              tall
            />
          </div>

          <div className="about__text">
            <div className="about__block">
              <h3>Nasza misja</h3>
              <p>
                Dostarczamy rozwiązania, które realnie wspierają rozwój biznesu naszych
                klientów. Łączymy wiedzę techniczną z zrozumieniem potrzeb rynku.
              </p>
            </div>
            <div className="about__block">
              <h3>Doświadczenie</h3>
              <p>
                Wieloletnie doświadczenie w branży IT pozwala nam realizować projekty
                o różnej skali — od koncepcji po wdrożenie i utrzymanie.
              </p>
            </div>
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-value">—</span>
                <span className="about__stat-label">Lat na rynku</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-value">—</span>
                <span className="about__stat-label">Zrealizowanych projektów</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-value">—</span>
                <span className="about__stat-label">Zadowolonych klientów</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about__gallery">
          <h3 className="about__gallery-title">Galeria multimediów</h3>
          <div className="about__gallery-grid">
            <MediaPlaceholder type="image" label="Zdjęcie zespołu" aspectRatio="4/3" />
            <MediaPlaceholder type="image" label="Biuro / siedziba" aspectRatio="4/3" />
            <MediaPlaceholder type="image" label="Wydarzenie #1" aspectRatio="4/3" />
            <MediaPlaceholder type="image" label="Wydarzenie #2" aspectRatio="4/3" />
            <MediaPlaceholder type="video" label="Wywiad / prezentacja" aspectRatio="4/3" />
            <MediaPlaceholder type="gallery" label="Album zdjęć" aspectRatio="4/3" />
          </div>
        </div>
      </div>
    </section>
  )
}
