import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../CSS/behandlingsside.css";
import "../CSS/button.css";

function Tilleggstjenester() {
  return (
    <>
      <h2 className="treat__sectionTitle">Tilleggstjenester</h2>

      <p className="treat__text">
        Hos oss kan du enkelt kombinere behandlingen din med små, effektive
        tilleggstjenester for et helhetlig og velstelt resultat.
      </p>

      <p className="treat__text">
        Vi tilbyr farging av vipper og bryn som tillegg til din behandling –
        perfekt for å fremheve ansiktstrekkene og gi et mer definert uttrykk.
      </p>

      <p className="treat__text">
        I forbindelse med time hos oss tilbyr vi også kostnadsfri voksing av
        mindre områder, som for eksempel:
      </p>

      <ul className="treat__list">
        <li>Overleppe</li>
        <li>Nese</li>
        <li>Bryn</li>
        <li>Andre små områder ved behov</li>
      </ul>

      <p className="treat__text">
        Dette gjelder ved booking av annen behandling, og tilpasses etter ønske.
        Ta gjerne kontakt dersom du ønsker å legge til en tilleggstjeneste til
        timen din.
      </p>
    </>
  );
}

export default function BehandlingPage({ page }) {
  return (
    <>
      <Header />

      <main className="treat">
        <div className="treat__container">
          <h1 className="treat__title">{page.title}</h1>

          {page.intro && <p className="treat__intro">{page.intro}</p>}

          <div className="treat__imageWrap">
            {page.imageSrc ? (
              <img
                className="treat__image"
                src={page.imageSrc}
                alt={page.imageAlt || page.title}
              />
            ) : (
              <div className="treat__image" aria-hidden="true" />
            )}
          </div>

          {page.sections?.map((s) => (
            <section key={s.heading}>
              <h2 className="treat__sectionTitle">{s.heading}</h2>

              {s.paragraphs?.map((p, i) => (
                <p key={i} className="treat__text">
                  {p}
                </p>
              ))}

              {s.list?.length ? (
                <ul className="treat__list">
                  {s.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <Tilleggstjenester />

          {/* CTA */}
          <div className="treat__cta">
            <Link to="/booking" className="primary-btn">
              Book her
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
