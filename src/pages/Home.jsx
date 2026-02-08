import { useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeSplitSection from "../components/HomeSplitSection";
import "./home.css";

export default function Home() {
  const scrollerRef = useRef(null);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
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
        {/* content later */}
      </section>
    </div>
  );
}
