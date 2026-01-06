import React from 'react';
import '../websitecss/TutorDetails.css';

function TutorDetails() {
  return (
    <section className="tutor-details">
      <div className="tutor-details-container">
        {/* Tutor Image */}
        <div className="tutor-details-image">
          <img
            src={`${process.env.PUBLIC_URL}/TutorDetailsImage.jpg`} // Use the tutor's detailed image
            alt="Tutor"
            className="tutor-details-img"
          />
        </div>

        {/* Tutor Information */}
        <div className="tutor-details-info">
          <h2>Saurabh Aher Sir - Expert in Mathematics, Science and English</h2>
          <p>
            Saurabh sir has over 7+ years of experience in teaching Mathematics, Science 
            and English to students from SSC, CBSE and he is passionate about helping students 
            excel in these subjects.
          </p>

          <h3>Qualifications:</h3>
          <ul>
            <li>ME design / BE mechanical / M.Sc. Mathematics / Diploma in Product design / Diploma in product analysis</li>
            <li>7+ Years of Experience Teaching Math and Science</li>
            <li>Specialization in SSC, CBSE Curriculum</li>
          </ul>

          <h3>Teaching Methodology:</h3>
          <p>
            Saurabh sir uses a blend of theoretical and practical approaches, making learning fun and interactive.
            He focuses on strengthening core concepts, enhancing problem-solving skills, and providing personalized
            guidance to each student.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TutorDetails;
