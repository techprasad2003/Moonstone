import React, { useRef } from 'react';
import '../websitecss/StudentsSection.css';

function StudentsSection() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="students" className="students-section">
      <div className="students-header">
        <h2>Hear from Our Students</h2>
        <p>
          Real feedback from our students sharing their transformative experiences at Moonstone Academy.
        </p>
      </div>

      <div className="students-carousel" ref={carouselRef}>
        <div className="video-slide">
          <iframe
            src="https://www.youtube.com/embed/fpIjPVKe7B8"
            title="Student Feedback 1"
            className="youtube-video"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-slide">
          {/* Local Video */}
          <video
            className="local-video"
            controls
            width="100%"
            title="Student Feedback 2"
          >
            <source src="/student3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-slide">
          <iframe
            src="https://www.youtube.com/embed/7ogIpOh-_O0"
            title="Student Feedback 3"
            className="youtube-video"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-slide">
          <iframe
            src="https://www.youtube.com/embed/HtkJDKVvAt8"
            title="Student Feedback 4"
            className="youtube-video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Buttons for scrolling */}
      <div className="carousel-buttons">
        <button className="scroll-button" onClick={scrollLeft}>⬅</button>
        <button className="scroll-button" onClick={scrollRight}>➡</button>
      </div>

      <div className="students-description">
        <p>
          At Moonstone Academy, we believe that the best testimony to our success comes from the
          students themselves. Our students’ achievements, growth, and heartfelt feedback inspire us
          every day.
        </p>
      </div>
    </section>
  );
}

export default StudentsSection;
