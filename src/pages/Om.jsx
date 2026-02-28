import Header from "../components/Header";
import "./om.css";
import Footer from "../components/Footer";
import "/src/index.css";

export default function Om() {
  return (
    <>
      <Header />

      <main className="about">
        <div className="about__container">
          <h1 className="about__title">Velkommen til Embla kosmetisk</h1>

          <div className="about__info">
            <p className="info__p">
              Hos oss er målet å tilby trygge, effektive og individuelt
              tilpassede behandlinger med fokus på naturlige resultater og god
              hudhelse. Vi legger vekt på kvalitet i alle ledd, og ønsker at du
              som kunde skal føle deg godt ivaretatt gjennom hele
              behandlingsforløpet. Med faglig kompetanse og en personlig
              tilnærming skreddersys behandlinger ut fra dine behov, ønsker og
              forutsetninger.
            </p>
          </div>

          <section className="about__section about__section--top">
            <div className="about__media about__media--left">
              <img
                className="about__img"
                src="/images/Embla-svart-frakk.jpg"
                alt="Embla Lofthus"
              />
            </div>

            <div className="about__text about__text--right">
              <h2 className="about__heading">Embla Lofthus</h2>

              <p className="about__p">
                Embla er utdannet sykepleier og har siden 2017 opparbeidet seg
                bred erfaring fra både somatisk og psykiatrisk arbeid, samt
                arbeid offshore. Hun videreutdannet seg ved Senzie Akademiet, og
                er utdannet kosmetisk dermatologisk sykepleier siden 2022. I
                tillegg til erfaring fra klinikk, startet hun sin egen
                virksomhet i 2024, hvor hun har fokus på trygge behandlinger og
                naturlige, harmoniske resultater. Embla er opptatt av en
                helhetlig og individuell tilnærming, hvor målet er å fremheve
                dine naturlige trekk og skape resultater som føles autentiske.
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

          <section className="about__section about__section--top about__section--responsible">
            <div className="about__media about__media--left">
              <img
                className="about__img"
                src="/images/irina.jpg"
                alt="Dr. Irina Magdalena Ibănescu"
              />
            </div>

            <div className="about__text about__text--right">
              <h2 className="about__heading">Faglig ansvar</h2>

              <p className="about__p">
                Klinikkens ansvarlige lege er Dr. Irina Magdalena Ibănescu.
              </p>
            </div>
          </section>

          <section className="about__notice" aria-label="Viktig informasjon">
            <h2 className="about__heading about__heading--center">
              Viktig informasjon
            </h2>

            <p className="about__p about__p--notice">
              Det gjøres alltid en faglig vurdering i forkant av behandling.
              Behandler forbeholder seg retten til å avstå fra behandling dersom
              dette vurderes som uegnet ut fra medisinske, praktiske eller
              etiske hensyn.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
