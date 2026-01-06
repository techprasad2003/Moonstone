import React from "react";
import "../websitecss/Courses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faChalkboardTeacher, faAward } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <section id="courses" className="courses-section">
      <div className="courses-header">
        <p className="courses-subtitle">Empower</p>
        <h1 className="courses-title">Unlock Your Child's Potential with Us</h1>
        <p className="courses-description">
          At Moonstone Academy, we believe in nurturing each child's unique
          abilities. Our innovative approach to education fosters creativity and
          critical thinking.
        </p>
      </div>

      <div className="courses-features">
        <div className="feature-item">
          <FontAwesomeIcon icon={faBookOpen} className="feature-icon" />
          <h3>Why Choose Moonstone Academy?</h3>
          <p>
            We provide personalized learning experiences tailored to individual
            needs.
          </p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faChalkboardTeacher} className="feature-icon" />
          <h3>Our Dedicated Educator</h3>
          <p>
            Our tutors are passionate about inspiring students to excel.
          </p>
        </div>
        <div className="feature-item">
          <FontAwesomeIcon icon={faAward} className="feature-icon" />
          <h3>Celebrating Our Student Achievements</h3>
          <p>
            We take pride in our students' successes and milestones.
          </p>
        </div>
      </div>

      <div className="courses-buttons">
        <Link to="/course-details" className="btn learn-more">
          Learn More
        </Link>
        <Link to="/apply-now" className="btn join">
          Join
        </Link>
      </div>
    </section>
  );
};

export default Courses;
