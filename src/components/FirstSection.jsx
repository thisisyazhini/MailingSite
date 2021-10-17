import "./FirstSection.css";

function FirstSection() {
  return (
    <div className="first-section">
      <div className="left">
        <p className="title">
          Create Stunning <br /> Email Campaigns
        </p>
        <p className="sub-title">
          Create and launch email campaigns that captivate your customers in
          just a few clicks.
        </p>
        <div className="button-section">
          <button className="green-button">TRY NOW</button>
          <button className="white-button">GET A DEMO</button>
        </div>
      </div>
      <img
        src="/assets/woman-working-on-laptop.png"
        alt="woman working on laptop"
      />
    </div>
  );
}

export { FirstSection };
