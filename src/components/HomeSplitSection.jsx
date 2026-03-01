import "../css/homesplitscreen.css";
import { Link } from "react-router-dom";
import "../css/button.css";

export default function HomeSplitSection() {
  return (
    <section className="home-split" aria-label="Velkommen-seksjon">
      <div className="home-split__image" aria-hidden="true">
        <img src="/images/theskin.jpg" alt="" className="home-split__img" />
      </div>

      <div className="home-split__panel">
        <div className="home-split__panelInner">
          <h2 className="home-split__title">Velkommen til Embla kosmetisk</h2>

          <p className="home-split__text">
            Vi tilbyr individuelt tilpassede hudprogram og behandlinger, for
            alle hudtyper.
          </p>
          <Link className="primary-btn" to="/om">
            Om
          </Link>
        </div>
      </div>
    </section>
  );
}
