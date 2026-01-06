// src/components/AcademyDetails.js
import React from 'react';
import '../websitecss/AcademyDetails.css';  // Optional, you can style this page however you like

function AcademyDetails() {
  return (
    <div className="academy-details-container">
      <h2>Academy Details</h2>
      <div className="academy-info">
        <h3>About Moonstone Academy</h3>
        <p>
          Moonstone Academy is committed to providing top-tier educational opportunities in a variety of fields. We offer both theoretical and practical learning experiences to help students excel in their careers. Our dedicated faculty and state-of-the-art facilities ensure a great learning environment.
        </p>
        
        <h3>Our Vision</h3>
        <p>
          Our goal is to create an inclusive, nurturing environment where students can thrive academically, personally, and professionally. We aim to be a leading institution in education, preparing students for real-world challenges.
        </p>

        <h3>Our Programs</h3>
        <p>
          We offer a variety of undergraduate and postgraduate programs in areas such as technology, business, arts, and sciences. Our programs are designed to cater to the diverse needs of our students and to equip them with the skills required in today's job market.
        </p>

        <h3>Why Choose Us?</h3>
        <ul>
          <li>Experienced and passionate faculty</li>
          <li>State-of-the-art campus and facilities</li>
          <li>Strong connections with industry leaders for internships and placements</li>
          <li>Personalized learning paths tailored to your goals</li>
        </ul>
      </div>
    </div>
  );
}

export default AcademyDetails;
