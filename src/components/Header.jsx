import "../pages/header.css";

export default function Header({ onNavigate }) {
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="topbar-inner">
          <a href="/" className="logo">
            <img
              src="/images/Embla_Kosmetisk-02.png"
              alt="Embla Kosmetisk Sykepleier"
            />
          </a>

          <nav className="main-nav">
            <button type="button" onClick={() => onNavigate?.("welcome")}>
              Om
            </button>
            <button type="button" onClick={() => onNavigate?.("behandlinger")}>
              Behandlinger
            </button>
            <button type="button" onClick={() => onNavigate?.("gavekort")}>
              Gavekort
            </button>
          </nav>

          <a href="/booking" className="booking-btn">
            Booking
          </a>
        </div>
      </div>
    </header>
  );
}
