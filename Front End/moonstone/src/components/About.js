import React from 'react';
import '../websitecss/About.css'; // Ensure the correct path for the CSS file

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="text-content">
          <h1>Empowering Learners Through Innovative Education</h1>
          <p>
            At Moonstone Academy, we provide a transformative educational experience that empowers students to excel. Our dedicated tutors and innovative curriculum foster a love for learning and personal growth.
          </p>
          <div className="features">
            <div className="feature">
              <span className="icon">🎯</span>
              <h3>Our Mission</h3>
              <p>To inspire and nurture students to achieve their fullest potential in a supportive environment.</p>
            </div>
            <div className="feature">
              <span className="icon">📚</span>
              <h3>Why Choose Us</h3>
              <p>Experience personalized learning with expert tutors dedicated to student success and engagement.</p>
            </div>
          </div>
        </div>
        <div className="image-content">
          <img src={process.env.PUBLIC_URL + '/AboutImage.jpg'} alt="About Us" />
        </div>
      </div>
    </section>
  );
}

export default About;
