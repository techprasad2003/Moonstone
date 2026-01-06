import React from 'react';
import { Link } from 'react-router-dom';
import '../websitecss/LearningSection.css';

function LearningSection() {
  return (
    <section id="learning" className="learning-section">
      <div className="learning-header">
        <h2>Expand Knowledge with Our Comprehensive Learning Programs</h2>
      </div>
      <div className="learning-cards-wrapper">
        <div className="learning-cards">
          <div className="learning-card">
            <iframe
              src="https://www.youtube.com/embed/8aKEI9ALvSE"
              title="Interactive Sessions That Bring Subjects to Life"
              className="learning-video"
              allowFullScreen
            ></iframe>
            <div className="card-content">
              <h4>Interactive Sessions That Bring Subjects to Life</h4>
              <p>
                Engage with interactive lessons designed to make learning an enjoyable experience.
              </p>
              <Link to="/signup" className="card-link">
                Sign Up &rarr;
              </Link>
            </div>
          </div>

          <div className="learning-card">
            <iframe
              src="https://www.youtube.com/embed/d468XqOVcCg"
              title="Engaging Interactive Learning Methods"
              className="learning-video"
              allowFullScreen
            ></iframe>
            <div className="card-content">
              <h4>Engaging Interactive Learning Methods</h4>
              <p>Our unique approach fosters critical thinking and a love for learning.</p>
              <Link to="/signup" className="card-link">
                Sign Up &rarr;
              </Link>
            </div>
          </div>

          <div className="learning-card">
            <iframe
              src="https://www.youtube.com/embed/6R0u1vd5FrI"
              title="Building Lifelong Learning Habits"
              className="learning-video"
              allowFullScreen
            ></iframe>
            <div className="card-content">
              <h4>Building Lifelong Learning Habits</h4>
              <p>Join Moonstone Academy to foster a culture of continuous growth and learning.</p>
              <Link to="/get-started" className="card-link">
                Get Started &rarr;
              </Link>
            </div>
          </div>

          <div className="learning-card">
            <iframe
              src="https://www.youtube.com/embed/dBCKJoGbTdk"
              title="Tailored Interactive Learning Methods"
              className="learning-video"
              allowFullScreen
            ></iframe>
            <div className="card-content">
              <h4>Tailored Interactive Learning Methods</h4>
              <p>Our practical approach develops critical thinking and a love for learning.</p>
              <Link to="/signup" className="card-link">
                Sign Up &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningSection;
