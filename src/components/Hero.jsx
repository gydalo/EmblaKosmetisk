import "../pages/header.css";

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
              Medisinsk hudpleie i en kombinasjon av velvære.
              <br />
              Høy kompetanse sans for det naturlige resultat.
            </p>
            <br />
            <p className="hero-lead">Få det lille ekstra!</p>
          </div>
          <div className="hero-right-cta">
            <a href="/booking" className="hero-btn">
              Book time eller gratis konsultasjon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
