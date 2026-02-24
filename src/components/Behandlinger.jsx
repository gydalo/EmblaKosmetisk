import "../pages/behandlinger.css";
import { Link } from "react-router-dom";
import "../pages/button.css";

const DATA = [
  {
    title: "Hudpleie",
    theme: "brown",
    items: [
      { label: "Microneedling med Skinpen", href: "/behandlinger/skinpen" },
      { label: "Kjemisk Peel", href: "/behandlinger/peel" },
      { label: "Hudkonsultasjon", href: "/behandlinger/hudkonsultasjon" },
    ],
  },
  {
    title: "Velvære & estetikk",
    theme: "green",
    items: [
      { label: "Rens og massasje", href: "/behandlinger/rens-massasje" },
      { label: "Vipper / bryn", href: "/behandlinger/vipper-bryn" },
      { label: "Botox / rynkebehandling", href: "/behandlinger/botox" },
    ],
  },
];

export default function Behandlinger() {
  return (
    <section className="behandlinger" aria-label="Behandlinger og priser">
      <div className="behandlinger__inner">
        <h2 className="behandlinger__title">Behandlinger og priser</h2>

        <div className="behandlinger__grid">
          {DATA.map((cat) => (
            <div key={cat.title} className="behandlinger__col">
              <h3 className="behandlinger__subtitle">{cat.title}</h3>

              <div className="behandlinger__buttons">
                {cat.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`behandlinger__btn behandlinger__btn--${cat.theme}`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="behandlinger__ctaWrap">
            <Link to="/booking" className="primary-btn">
              Book her
            </Link>
        </div>
      </div>
    </section>
  );
}
