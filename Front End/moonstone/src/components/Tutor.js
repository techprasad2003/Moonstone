import React from 'react';
import { Link } from 'react-router-dom';
import '../websitecss/Tutor.css'; // Ensure your styles are linked

function TutorSection() {
  return (
    <section id="tutor" className="tutor-section">
      <div className="tutor-header">
        <h2>Discover the transformative educational experience at Moonstone Academy for your child.</h2>
      </div>
      <div className="tutor-details">
        {/* Tutor Image */}
        <div className="tutor-image-container">
          <img
            src={process.env.PUBLIC_URL + '/Tutor.jpg'}
            alt="Tutor"
            className="tutor-image"
          />
        </div>
        {/* Tutor Qualifications */}
        <div className="tutor-qualifications">
          <h3>Meet Our Expert Tutor</h3>
          <ul>
            <li><strong>Name:</strong>Saurabh A.Aher</li>
            <li><strong>Qualification:</strong>ME design / BE mechanical / M.Sc. Mathematics / Diploma in Product design / Diploma in product analysis</li>
            <li><strong>Experience:</strong> 7+ years teaching CBSE and SSC students</li>
            <li><strong>Specialization:</strong> Advanced Mathematics, Science & English </li>
            <li><strong>Achievements:</strong> Mentor for 50+ board exam toppers</li>
          </ul>
          <div className="tutor-learn-button">
            <Link to="/tutor-details" className="learn-more-btn">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TutorSection;
