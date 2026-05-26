import './Footer.css'

export default function Footer() {
  return (
    <footer id="kontakt" className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__logo">U</span>
            <div>
              <strong>Umbris Sp. z o.o.</strong>
              <p>Spółka z ograniczoną odpowiedzialnością</p>
            </div>
          </div>

          <div className="footer__contact">
            <h4>Kontakt</h4>
            <ul>
              <li>
                <span className="footer__label">E-mail</span>
                <a href="mailto:kontakt@umbris.pl">kontakt@umbris.pl</a>
              </li>
              <li>
                <span className="footer__label">Telefon</span>
                <a href="tel:+48000000000">+48 000 000 000</a>
              </li>
              <li>
                <span className="footer__label">Adres</span>
                <address>ul. Przykładowa 1, 00-000 Miasto</address>
              </li>
            </ul>
          </div>

          <div className="footer__legal">
            <h4>Dane firmowe</h4>
            <ul>
              <li>NIP: 0000000000</li>
              <li>REGON: 000000000</li>
              <li>KRS: 0000000000</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Umbris Sp. z o.o. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
