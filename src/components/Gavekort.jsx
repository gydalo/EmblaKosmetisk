import "../CSS/gavekort.css";
import { Link } from "react-router-dom";
import "../CSS/button.css";
import "../CSS/button.css";

export default function Gavekort() {
  return (
    <main className="gavekort-page" aria-label="Gavekort">

      <div className="gavekort-bg" aria-hidden="true" />

      <div className="gavekort-overlay" aria-hidden="true" />

      <section className="gavekort-content" aria-label="Gavekort innhold">
        <h1 className="gavekort-title">Gavekort</h1>

        <p className="gavekort-text">
          Overrask noen du bryr deg om med en gave som gir ro, glød og velvære.
          <br />
          Gavekortet kan brukes på behandlinger og produkter.
        </p>

     <Link to="/booking" className="primary-btn">
       Kjøp gavekort her
     </Link>
      </section>
    </main>
  );
}