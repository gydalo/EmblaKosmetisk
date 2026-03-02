import "../css/behandlinger.css";
import { Link } from "react-router-dom";
import "../css/button.css";

const DATA = [
  {
    title: "Injeksjonsbehandlinger",
    theme: "brown",
    items: [
      { label: "Profhilo", to: "/behandlinger/profhilo" },
      { label: "Botox / rynkebehandling", to: "/behandlinger/botox" },
    ],
  },
  {
    title: "Hudbehandlinger",
    theme: "green",
    items: [
      { label: "SkinPen microneedling", to: "/behandlinger/skinpen" },
      { label: "Kjemisk peel", to: "/behandlinger/kjemisk-peel" },
      { label: "Hvilepuls", to: "/behandlinger/hvilepuls" },
      { label: "Laser", to: "/behandlinger/laser" },
      { label: "Farging av vipper/ bryn", to: "/behandlinger/farging-av-vipper-bryn" },
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
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`behandlinger__btn behandlinger__btn--${cat.theme}`}
                  >
                    {item.label}
                  </Link>
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
