import Header from "../components/Header";
import "../css/om.css";
import Footer from "../components/Footer";

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
                src="/images/Embla-hvit-frakk.jpg"
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

          <section className="about__section about__section--top about__section--responsible">
            <div className="about__text about__text--left">
              <h2 className="about__heading">Faglig ansvar</h2>

              <p className="about__p">
                Klinikkens ansvarlige lege er Dr. Irina Magdalena Ibănescu.
              </p>
            </div>

            <div className="about__media about__media--right">
              <img
                className="about__img"
                src="/images/irina.jpg"
                alt="Dr. Irina Magdalena Ibănescu"
              />
            </div>
          </section>

          <section className="about__section about__section--bottom about__section--top">
            <div className="about__media about__media--left">
              <img
                className="about__img"
                src="/images/sapiens.jpg"
                alt="Klinikken"
              />
            </div>

            <div className="about__text about__text--right">
              <h2 className="about__heading">Klinikken</h2>
              <p className="about__p">
                Lokalet holder til i Sapiens sine lokaler på Gamle Forusveien 8.
                Sapiens er et moderne skjønnhets- og velvære-konsept hvor flere
                fagpersoner innen skjønnhets- og hudbehandlinger holder til
                under samme tak.
              </p>
              <p className="about__p">
                Lokalet er lyst, moderne og innbydende, med en egen resepsjon
                hvor du kan sette deg ned og hente deg noe å drikke mens du
                venter på timen din.
              </p>
            </div>
          </section>

          <section className="about__location">
            <div className="about__locationCard">
              <div className="about__locationText">
                <h2 className="about__heading">Hvor finner du oss?</h2>

                <p className="about__p about__p--wide">
                  Klinikken finner du på Gamle Forusveien 8, i bygget sammen med
                  Farstad Profilsystemer. Parker på parkering merket med Tibnor.
                  På høyre siden av inngangen merket med Farstad, kan du finne
                  inngangen til Sapiens. Følg trappene opp og til venstre for
                  resepsjonen.
                </p>
              </div>

              <div className="about__locationGallery">
                <img
                  className="about__locationImg"
                  src="/images/klinikk-ute-1.jpg"
                  alt="Området utenfor klinikken"
                />
                <img
                  className="about__locationImg"
                  src="/images/klinikk-ute-2.jpg"
                  alt="Inngang til klinikken"
                />
                <img
                  className="about__locationImg"
                  src="/images/klinikk-ute-3.jpg"
                  alt="Inngang til klinikken"
                />
                <img
                  className="about__locationImg"
                  src="/images/klinikk-hovedinngang.jpg"
                  alt="Inngang til klinikken"
                />
              </div>
            </div>
          </section>

          <section className="about__notice">
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
