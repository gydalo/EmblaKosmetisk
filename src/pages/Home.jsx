import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeSplitSection from "../components/HomeSplitSection";
import "../css/home.css";
import Footer from "../components/Footer";
import Behandlinger from "../components/Behandlinger";
import Gavekort from "../components/Gavekort";

const LAST_SECTION_KEY = "home:lastSectionId";

export default function Home() {
  const scrollerRef = useRef(null);
  const location = useLocation();

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

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const hashId = window.location.hash?.replace("#", "");
    const savedId = sessionStorage.getItem(LAST_SECTION_KEY);
    const targetId = hashId || savedId || "top";

    requestAnimationFrame(() => {
      const el = document.getElementById(targetId);
      if (!el) return;

      scroller.classList.add("snap-disabled");
      el.scrollIntoView({ behavior: "auto", block: "start" });

      requestAnimationFrame(() => scroller.classList.remove("snap-disabled"));
    });
  }, [location.key]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const sections = Array.from(scroller.querySelectorAll("section[id]"));
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible?.target?.id) return;

        const id = visible.target.id;
        sessionStorage.setItem(LAST_SECTION_KEY, id);

        window.history.replaceState(window.history.state, "", `#${id}`);
      },
      {
        root: scroller,
        threshold: [0.55, 0.7],
      }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
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
