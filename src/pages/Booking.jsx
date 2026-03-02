import "../css/booking.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Booking() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <main>
      <div>
        <Header />
        <section className="booking" aria-label="Booking">
          <div className="booking__inner">
            <h2 className="booking__title">Book din neste time her!</h2>

            <div className="booking__frameWrap">
              <iframe
                className="booking__frame"
                src="https://bestill.timma.no/emblakosmetisk"
                title="Timma booking – Embla Kosmetisk"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allow="fullscreen; payment"
              />
            </div>
          </div>
        </section>
             <Footer />
      </div>
    </main>
  );
}
