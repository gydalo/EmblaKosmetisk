import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeSplitSection from "../components/HomeSplitSection";
import "./home.css";
import Footer from "../components/Footer";
import Behandlinger from "../components/Behandlinger";
import Gavekort from "../components/Gavekort";

export default function Home() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const setHeaderH = () => {
      const header = document.querySelector(".site-header");
      const h = header ? header.offsetHeight : 0;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };

    setHeaderH();

    window.addEventListener("resize", setHeaderH);

    const t1 = window.setTimeout(setHeaderH, 50);
    const t2 = window.setTimeout(setHeaderH, 300);

    return () => {
      window.removeEventListener("resize", setHeaderH);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  const scrollToId = (id) => {
    const scroller = scrollerRef.current;
    const el = document.getElementById(id);
    if (!scroller || !el) return;

    scroller.classList.add("snap-disabled");

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    window.setTimeout(() => {
      scroller.classList.remove("snap-disabled");
    }, 450);
  };

  return (
    <div className="home-snap" ref={scrollerRef}>
      <Header onNavigate={scrollToId} />

      <section className="snap" id="top">
        <Hero />
      </section>

      <section className="snap" id="welcome">
        <HomeSplitSection />
      </section>

      <section className="snap" id="behandlinger">
        <Behandlinger />
      </section>

            <section className="snap" id="gavekort">
        <Gavekort />
      </section>

      <section className="snap-footer" id="footer">
        <Footer />
      </section>
    </div>
  );
}
