// src/components/AdmissionDetails.js
import React from 'react';
import '../websitecss/AdmissionDetails.css'; // Make sure to include the CSS file for styling

function AdmissionDetails() {
  return (
    <section id="admission" className="admission-details-container">
      {/* First Section */}
      <div className="admission-details-section">
        <div className="admission-details-image">
          <img
            src={`${process.env.PUBLIC_URL}/Felicitation.png`}
            alt="Students Collaborating"
            className="admission-details-img"
          />
        </div>
        <div className="admission-details-description">
          <h2>Why Choose Moonstone Academy?</h2>
          <p>
            Thank you to Sanskruti foundation (Hon. Suresh Tanpure sir & Abhijeet Tanpure sir)
            for appreciating our Moonstone Educational Academy.
          </p>
          <p>
            At Moonstone Academy, we provide a nurturing and inspiring environment where students
            are encouraged to excel in their academic and personal lives. With a focus on holistic
            education, we empower students to become leaders in their fields. Our state-of-the-art
            facilities, experienced faculty, and personalized learning paths ensure every student
            thrives. Join a community committed to excellence and innovation.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="admission-details-section reverse">
        <div className="admission-details-description">
          <h2>Many More Memories of Moonstone Academy</h2>
          <p>
            Thank You Sir for Felicitating Moonstone Educational Academy as the best academy in Rahuri
          </p>
          
        </div>
        <div className="admission-details-image">
          <img
            src={`${process.env.PUBLIC_URL}/Felicitation2.png`}
            alt="Student Admission"
            className="admission-details-img"
          />
        </div>
      </div>
    </section>
  );
}

export default AdmissionDetails;
