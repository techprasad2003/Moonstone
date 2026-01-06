import React, { useRef } from 'react';
import '../websitecss/GuideSection.css';

function GuideSection() {
  const videosCarouselRef = useRef(null);

  const scrollLeft = () => {
    if (videosCarouselRef.current) {
      videosCarouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (videosCarouselRef.current) {
      videosCarouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="guide" className="guide-section">
      <div className="guide-header">
        <h2>Guidance by Expert Teacher</h2>
        <p>Watch our expert teacher guide students for State Board and CBSE success.</p>
      </div>
      <div className="guide-videos" ref={videosCarouselRef}>
        {/* Video 1 */}
        <div className="guide-card">
          <iframe
            src="https://www.youtube.com/embed/GUZFpMsza6g"
            title="Understanding Core Concepts"
            className="guide-video"
            allowFullScreen
          ></iframe>
          <h4>Understanding Core Concepts</h4>
          <p>Learn the basics and build a strong foundation for academic excellence.</p>
        </div>

        {/* Video 2 */}
        <div className="guide-card">
          <iframe
            src="https://www.youtube.com/embed/vYecADsYwl8"
            title="Tips for Effective Study"
            className="guide-video"
            allowFullScreen
          ></iframe>
          <h4>Tips for Effective Study</h4>
          <p>Discover smart study techniques tailored for State Board and CBSE exams.</p>
        </div>

        {/* Video 3 */}
        <div className="guide-card">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_3"
            title="Exam Strategies"
            className="guide-video"
            allowFullScreen
          ></iframe>
          <h4>Exam Strategies</h4>
          <p>Master the art of answering questions to score maximum marks.</p>
        </div>

        {/* Video 4 */}
        <div className="guide-card">
          <iframe
            src="https://www.youtube.com/embed/8HyG3E3mzvY"
            title="Revision Techniques"
            className="guide-video"
            allowFullScreen
          ></iframe>
          <h4>Revision Techniques</h4>
          <p>Learn effective ways to revise and retain information for exams.</p>
        </div>

        {/* Video 5 */}
        <div className="guide-card">
          <iframe
            src="https://www.youtube.com/embed/eWP-pRO8pGU"
            title="Solving Doubts"
            className="guide-video"
            allowFullScreen
          ></iframe>
          <h4>Solving Doubts</h4>
          <p>Students interact with teachers to resolve study-related issues.</p>
        </div>
      </div>

      {/* Buttons for Carousel */}
      <div className="carousel-buttons">
        <button className="scroll-button" onClick={scrollLeft}>⬅</button>
        <button className="scroll-button" onClick={scrollRight}>➡</button>
      </div>
    </section>
  );
}

export default GuideSection;
