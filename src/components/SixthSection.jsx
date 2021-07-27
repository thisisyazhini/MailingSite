import "./SixthSection.css";

function SixthSection() {
  return (
    <div className="sixth-section">
      <div className="brand">
        <img src="/assets/BrandLogo.svg" alt="brand-logo" />
        <span className="brand-name">MailVogel</span>
      </div>
      <div className="footer-section">
        <div className="footer-links">
          <p className="links">Features</p>
          <p className="links"> Pricing </p>
          <p className="links">Services</p>
          <p className="links"> Partners</p>
        </div>
        <div className="footer-links">
          <p className="links">About us</p>
          <p className="links"> Tutorials </p>
          <p className="links">Resources</p>
          <p className="links"> Help Center</p>
          <p className="links">Templates</p>
          <p className="links">Case Studies</p>
        </div>
        <div className="footer-links">
          <p className="links">Medium</p>
          <p className="links"> Twitter </p>
          <p className="links">Facebook</p>
          <p className="links"> Instagram</p>
          <p className="links">LinkedIn</p>
        </div>
        <div className="footer-links">
          <p className="links">Contact us</p>
          <p className="links"> Slack </p>
          <p className="links">Jobs</p>
        </div>
      </div>
    </div>
  );
}

export default SixthSection;
