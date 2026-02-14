import Header from "../components/Header";
import "./om.css";
import Footer from "../components/Footer";

export default function Om() {
  return (
    <>
      <Header />

      <main className="about">
        <div className="about__container">
          <h1 className="about__title">Velkommen til Embla kosmetisk</h1>

          <section className="about__section about__section--top">
            <div className="about__media about__media--left">
              <img
                className="about__img"
                src="/images/embla-svart-frakk.jpg"
                alt="Embla Lofthus"
              />
            </div>

            <div className="about__text about__text--right">
              <h2 className="about__heading">Embla Lofthus</h2>

              <p className="about__p">
                Embla er en dyktig kosmetisk dermatologisk sykepleier med en
                lidenskap for å hjelpe mennesker med å føle seg vel i egen hud.
                Hun fullførte sin bachelor i sykepleie i 2017 og videreutdannet
                seg ved Senzie Akademiet i 2022, hvor hun spesialiserte seg
                innen kosmetisk dermatologi og estetiske behandlinger.
              </p>

              <p className="about__p">
                Hun har tidligere jobbet på The Skinmedispa i Skien og Rein
                Klinikken i Sandnes, før hun startet for seg selv i 2026.
              </p>
            </div>
          </section>

          <section className="about__section about__section--bottom">
            <div className="about__text about__text--left">
              <h2 className="about__heading">Klinikken</h2>

              <p className="about__p">
                Klinikken holder til et av lokalene til Sapiens, på Gamleveien
                8. Sapiens er et moderne skjønnhets- og velvære-konsept der
                flere fagpersoner innen skjønnhetsbransjen samles under ett tak.
                Her er det lagt vekt på et behagelig miljø, med fokus på
                kvalitet og velvære.
              </p>

              <p className="about__p">
                Lokalet er lyst, moderne og innbydende, med en egen resepsjon
                hvor du kan sette deg ned og hente deg noe å drikke mens du
                venter på timen din.
              </p>
            </div>

            <div className="about__media about__media--right">
              <img
                className="about__img"
                src="/images/theskin.jpg"
                alt="Klinikken"
              />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
