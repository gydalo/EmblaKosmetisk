import { useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeSplitSection from "../components/HomeSplitSection";
import "./home.css";
import Footer from "../components/Footer";
import Behandlinger from "../components/Behandlinger";

export default function Home() {
  const scrollerRef = useRef(null);

  const scrollToId = (id) => {
    const scroller = scrollerRef.current;
    const el = document.getElementById(id);
    if (!scroller || !el) return;

    scroller.classList.add("snap-disabled");

    const header = document.querySelector(".site-header");
    const headerH = header ? header.offsetHeight : 0;

    const y =
      el.getBoundingClientRect().top -
      scroller.getBoundingClientRect().top +
      scroller.scrollTop;

    scroller.scrollTo({
      top: Math.max(0, y - headerH),
      behavior: "smooth",
    });

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

      <Footer />
    </div>
  );
}
