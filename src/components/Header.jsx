import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/header.css";
import "../css/button.css";

export default function Header({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  const go = (id) => {
    setOpen(false);

    if (isHome) {
      onNavigate?.(id);

      window.history.replaceState(window.history.state, "", `#${id}`);
    } else {
      navigate(`/#${id}`);
    }
  };

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="logo" onClick={() => setOpen(false)}>
            <img
              src="/images/Embla_Kosmetisk-02.png"
              alt="Embla Kosmetisk Sykepleier"
            />
          </Link>

          {/* NAV on all pages */}
          <nav className="main-nav" aria-label="Hovedmeny">
            <button type="button" onClick={() => go("welcome")}>
              Om
            </button>
            <button type="button" onClick={() => go("behandlinger")}>
              Behandlinger
            </button>
            <button type="button" onClick={() => go("gavekort")}>
              Gavekort
            </button>
          </nav>

          <Link to="/booking" className="primary-btn booking-btn--desktop">
            Booking
          </Link>

          {/* Hamburger on all pages */}
          <button
            type="button"
            className={`hamburger ${open ? "is-open" : ""}`}
            aria-label={open ? "Lukk meny" : "Åpne meny"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="hamburger__bar" />
            <span className="hamburger__bar" />
            <span className="hamburger__bar" />
          </button>
        </div>

        {/* Mobile dropdown on all pages */}
        <div className={`mobile-nav ${open ? "is-open" : ""}`}>
          <button type="button" onClick={() => go("welcome")}>
            Om
          </button>
          <button type="button" onClick={() => go("behandlinger")}>
            Behandlinger
          </button>
          <button type="button" onClick={() => go("gavekort")}>
            Gavekort
          </button>

          <Link
            to="/booking"
            className="primary-btn booking-btn--mobile"
            onClick={() => setOpen(false)}
          >
            Booking
          </Link>
        </div>
      </div>

      {open && (
        <button
          className="menu-overlay"
          aria-label="Lukk meny"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
