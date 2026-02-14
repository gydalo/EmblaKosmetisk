import "../pages/homesplitscreen.css";

export default function HomeSplitSection() {
  return (
    <section className="home-split" aria-label="Velkommen-seksjon">
      <div className="home-split__image" aria-hidden="true">
        <img
          src="/images/theskin.jpg"
          alt=""
          className="home-split__img"
        />
      </div>

      <div className="home-split__panel">
        <div className="home-split__panelInner">
          <h2 className="home-split__title">Velkommen til Embla kosmetisk</h2>

          <p className="home-split__text">
            Hudpleieklinikk i hjertet av Forus. Her finner du hudforbedrende
            behandlinger, med ro og naturlig velvære.
          </p>

          <a className="home-split__btn" href="/src/pages/Om.jsx">
            Om
          </a>
        </div>
      </div>
    </section>
  );
}
