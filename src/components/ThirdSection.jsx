import "./ThirdSection.css";

function ThirdSection() {
  return (
    <div className="third-section">
      <img src="/assets/thumb1.jpg" alt="how-to-launch-campaigns" />
      <img
        className="img-placement"
        src="/assets/thumb2.jpg"
        alt="how-to-build-and-share"
      />
      <div>
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
  );
}

export default ThirdSection;
