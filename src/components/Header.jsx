import { useEffect, useState } from "react";
import "../pages/header.css";

export default function Header({ onNavigate }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    onNavigate?.(id);
    setOpen(false);
  };

  // Close with Escape
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
          <a href="/" className="logo" onClick={() => setOpen(false)}>
            <img
              src="/images/Embla_Kosmetisk-02.png"
              alt="Embla Kosmetisk Sykepleier"
            />
          </a>

          {/* Desktop nav */}
          <nav className="main-nav">
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

          {/* Desktop booking */}
          <a href="/booking" className="booking-btn booking-btn--desktop">
            Booking
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`hamburger ${open ? "is-open" : ""}`}
            aria-label="Åpne meny"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="hamburger__bar" />
            <span className="hamburger__bar" />
            <span className="hamburger__bar" />
          </button>
        </div>

        {/* Mobile dropdown */}
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

          <a
            href="/booking"
            className="booking-btn booking-btn--mobile"
            onClick={() => setOpen(false)}
          >
            Booking
          </a>
        </div>
      </div>

      {/* Click-outside overlay (mobile) */}
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
