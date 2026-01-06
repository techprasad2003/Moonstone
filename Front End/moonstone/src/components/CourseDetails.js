import React from 'react';
import '../websitecss/CourseDetails.css'; // Import the CSS file

function CourseDetails() {
  return (
    <section className="course-details">
      <div className="course-details-container">
        {/* Course Overview */}
        <div className="course-header">
          <h2>Learn Mathematics, Science, and English with Expert Way</h2>
          <p>
            Unlock your potential with our meticulously designed courses tailored for SSC, CBSE, and ICSE boards.
            We focus on core concepts, problem-solving skills, and practical applications.
          </p>
        </div>

        {/* Course Highlights */}
        <div className="course-highlights">
          <h3>What You'll Learn:</h3>
          <ul>
            <li>Master core concepts of Mathematics and Science.</li>
            <li>Interactive lessons tailored to SSC, CBSE, and ICSE curriculums.</li>
            <li>Step-by-step problem-solving techniques.</li>
            <li>Personalized guidance for improved performance.</li>
            <li>Practical applications for real-world understanding.</li>
          </ul>
        </div>

        {/* Key Features */}
        <div className="course-features">
          <div className="feature-card">
            <iframe
              src="https://www.youtube.com/embed/d468XqOVcCg"
              className="feature-video"
              title="Practical Oriented Learning"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h4>Practical Oriented Learning</h4>
            <p>Learn practically for clear and better understanding of topics.</p>
          </div>
          <div className="feature-card">
            <iframe
              src="https://www.youtube.com/embed/8HyG3E3mzvY"
              className="feature-video"
              title="Personalized Learning"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h4>Personalized Learning</h4>
            <p>Customized lessons to meet your unique learning needs.</p>
          </div>
          <div className="feature-card">
            <iframe
              src="https://www.youtube.com/embed/3BY6lFJkIdk"
              className="feature-video"
              title="Interactive Sessions"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h4>Interactive Sessions</h4>
            <p>Engage with live demonstrations and hands-on activities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseDetails;
