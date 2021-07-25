import "./MainPage.css";

function MainPage() {
  return (
    <div>
      <div className="header-container">
        <div className="brand">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-mail"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <div className="brand-name">MailVogel</div>
        </div>
        <div className="right-nav-menu">
          <nav>
            <li>FEATURES</li>
            <li>PRICING</li>
            <li>SERVICES</li>
            <li>PARTNERS</li>
          </nav>
          <button className="button-style">SIGN UP FREE</button>
        </div>
      </div>
      <div className="first-section">
        <div className="left">
          <p className="title">
            Create Stunning <br /> Email Campaigns
          </p>
          <p className="sub-title">
            Create and launch email campaigns that captivate <br />
            your customers in just a few clicks.
          </p>
          <div className="button-section">
            <button className="green-button">TRY NOW</button>
            <button className="white-button">GET A DEMO</button>
          </div>
        </div>
        <div className="right">
          <img
            src="/assets/woman-working-on-laptop.png"
            alt="woman working on laptop"
          />
        </div>
      </div>
      <div className="second-section">
        <img src="/assets/Video.jpg" alt="explains-how-to" />
      </div>
      <div className="third-section">
        <img src="/assets/thumb1.jpg" href="how-to-launch-campaigns" />
        <img
          className="element2"
          src="/assets/thumb2.jpg"
          href="how-to-build-and-share"
        />
        <div className="element3">
          <p className="heading">
            The source for proven, engaging email campaigns
          </p>
          <p className="para">
            Whether you're a startup, small <br />
            business, e-commerce store, or
            <br /> want to promote your app, MailVogel
            <br /> has the feature set tailored for
            <br /> your business.
          </p>
        </div>
      </div>
      <div className="fourth-section">
        <div class="image-section">
          <img src="/assets/CaseStudy1.jpg" alt="member-photo-1" />
          <img src="/assets/CaseStudy2.jpg" alt="member-photo-2" />
          <img src="/assets/CaseStudy3.jpg" alt="member-photo-3" />
        </div>
        <p className="text">
          Learn how others are reaching their
          <br /> audience easier than ever before.
        </p>
        <div className="join-list">
          <input type="email" placeholder="Enter your email" />
          <button className="join-button">JOIN OUR LIST</button>
        </div>
        <p className="green-text">Thanks! Email received.</p>
      </div>
      <div className="fifth-section">
        <div>
          <p className="text">
            All the best brands
            <br /> already use us.
          </p>
        </div>
        <div className="logo-section">
          <img src="/assets/Logo1.jpg" alt="last-knight-logo" />
          <img src="/assets/Logo2.jpg" alt="dragon-eye-logo" />
          <img src="/assets/Logo3.jpg" alt="Quest-al-logo" />
          <img src="/assets/Logo4.jpg" alt="radio-tee-logo" />
          <img src="/assets/Logo5.jpg" alt="game-commer-logo" />
        </div>
      </div>
      <div className="campaign">
        <p className="desc">Get started today!</p>
        <button className="white-button">PICK A PLAN</button>
      </div>
      <div className="sixth-section">
        <div className="brand">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-mail"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <div className="brand-name">MailVogel</div>
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
      <hr className="horizontal" />
      <div>
        <div className="copyright-info">
          <p className="link">
            MailVogel is a sample project of mine. © 2021, Yazhini Hariharan,
            All rights reserved.
          </p>
          <p className="link">Terms & Conditions</p>
          <p className="link">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export { MainPage };
