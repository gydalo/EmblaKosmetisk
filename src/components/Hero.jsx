import "../CSS/header.css";
import "../CSS/button.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: 'url("/images/Header-rosa-rafael.jpg")',
      }}
    >
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-left">
          <img
            src="/images/Embla_Kosmetisk-01.png"
            alt="Embla Kosmetisk Sykepleier"
            className="hero-logo"
          />
        </div>

        <div className="hero-right">
          <div className="hero-right-text">
            <p>
              Klinikk i hjertet av Forus.
              <br />
              Sertifisert kosmetisk sykepleier.
            </p>
            <br />
            <p className="hero-lead">Få det lille ekstra!</p>
          </div>
          <div className="hero-right-cta">
            <Link to="/booking" className="primary-btn">
              Book time eller gratis konsultasjon
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
