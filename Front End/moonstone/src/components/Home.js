import React from 'react';
import { Link } from 'react-router-dom'; // You can also use React Router to navigate to a new page if necessary.
import '../websitecss/Home.css';

function HomeSection() {
  return (
    <section id="home" className="home-section">
      {/* Content Box Positioned Above the Image */}
      <div className="home-content-overlay">
        <h1>Moonstone Educational Academy</h1>
        <h2>"Journey From Ordinary to Extraordinary"</h2>
        <p className="home-description">
          At Moonstone Academy, we are dedicated to transforming education by providing
          personalized learning experiences that inspire and empower students. Our comprehensive
          programs and passionate tutors ensure every learner reaches their full potential.
        </p>
        <div className="home-buttons">
          {/* Button for scrolling to another section */}
          <Link to="/admission-details" className="learn-more-btn">
            Learn More
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="home-image-overlay">
        <img
          src={process.env.PUBLIC_URL + '/Home.jpeg'}
          alt="Educational Illustration"
          className="home-img-full"
        />
      </div>
    </section>
  );
}

export default HomeSection;
