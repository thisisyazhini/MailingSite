import "./FourthSection.css";

function FourthSection() {
  return (
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
      <form className="join-list">
        <input type="email" placeholder="Enter your email" />
        <button type="submit" className="join-button">
          JOIN OUR LIST
        </button>
      </form>
      <p className="green-text">Thanks! Email received.</p>
    </div>
  );
}

export { FourthSection };
