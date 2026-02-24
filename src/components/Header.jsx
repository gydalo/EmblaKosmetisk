import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../pages/header.css";

export default function Header({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const go = (id) => {
    if (!isHome) return;
    onNavigate?.(id);
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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

          {/* NAV only on Home */}
          {isHome && (
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
          )}

          <a href="/booking" className="booking-btn booking-btn--desktop">
            Booking
          </a>

          {/* Hamburger only on Home */}
          {isHome && (
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
          )}
        </div>

        {/* Mobile dropdown only on Home */}
        {isHome && (
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

            {/* Mobile booking inside dropdown */}
            <a
              href="/booking"
              className="booking-btn booking-btn--mobile"
              onClick={() => setOpen(false)}
            >
              Booking
            </a>
          </div>
        )}
      </div>

      {isHome && open && (
        <button
          className="menu-overlay"
          aria-label="Lukk meny"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
