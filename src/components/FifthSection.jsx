import "./FifthSection.css";

function FifthSection() {
  return (
    <div>
      <div className="fifth-section">
        <div>
          <p className="text">
            All the best brands
            <br /> already use us.
          </p>
        </div>
        <div className="logo-section">
          <div>
            <img src="/assets/Logo1.jpg" alt="last-knight-logo" />
          </div>
          <div>
            <img src="/assets/Logo2.jpg" alt="dragon-eye-logo" />
          </div>
          <div>
            <img src="/assets/Logo3.jpg" alt="Quest-al-logo" />
          </div>
          <div>
            <img src="/assets/Logo4.jpg" alt="radio-tee-logo" />
          </div>
          <div>
            <img src="/assets/Logo5.jpg" alt="game-commer-logo" />
          </div>
        </div>
      </div>
      <div className="campaign">
        <p className="desc">Get started today!</p>
        <a className="white-button" href="#">
          PICK A PLAN
        </a>
      </div>
    </div>
  );
}

export { FifthSection };
