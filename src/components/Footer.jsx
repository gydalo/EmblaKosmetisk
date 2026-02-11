import "../pages/footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <img
          src="/public/images/Embla_Kosmetisk-Bakgrunn.jpg" 
          alt="Embla Kosmetisk"
          className="footer__logo"
        />

        <div className="footer__info">
          <p className="footer__name">Embla Kosmetisk</p>
          <p>Gamleveien 8, 4031 Stavanger</p>
          <p>
            <a href="mailto:emblakds@gmail.com">
              emblakds@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+4792666617">
              +47 926 66 617
            </a>
          </p>
        </div>

        <p className="footer__copyright">
          © Copyright {year} - Embla Lofthus. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
