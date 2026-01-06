import React from 'react';
import { Link } from 'react-router-dom';
import '../websitecss/Admission.css';

function AdmissionSection() {
  return (
    <section id='admission' className="admission-section">
      <div className="admission-container">
        <div className="admission-content">
          <h1>Join Moonstone Educational Academy</h1>
          <p>
            Take the first step towards your extraordinary learning journey. At Moonstone Academy, 
            we provide world-class education, inspiring learners to achieve their fullest potential. 
            Admission is now open for the upcoming academic year!
          </p>
          <div className="admission-buttons">
            <Link to="/apply-now" className="apply-now-btn">Apply Now</Link>
            <Link to="/academy-details" className="learn-more-btn">Learn More</Link>
          </div>
        </div>
        <div className="admission-image">
          <img
            src={`${process.env.PUBLIC_URL}/Admission.png`}
            alt="Admission Illustration"
            className="admission-img"
          />
        </div>
      </div>
    </section>
  );
}

export default AdmissionSection;
