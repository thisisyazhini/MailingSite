import "./HeaderSection.css";
function HeaderSection() {
  return (
    <div className="header-container">
      <div className="brand">
        <img src="/assets/BrandLogo.svg" alt="brand-logo" />
        <span className="brand-name">MailVogel</span>
      </div>
      <div className="right-nav-menu">
        <nav>
          <ul>
            <li>FEATURES</li>
            <li>PRICING</li>
            <li>SERVICES</li>
            <li>PARTNERS</li>
          </ul>
        </nav>
        <a className="button-style" href="#">
          SIGN UP FREE
        </a>
      </div>
    </div>
  );
}

export { HeaderSection };
