import React, { useRef, useState } from 'react';
import '../websitecss/Achievements.css'; // Custom styles for Achievements section

function Achievements() {
  const photos = [
    'Image1.jpg', 'Image2.jpg', 'Image3.jpg', 'Image4.jpg',
    'Image5.jpg', 'Image6.jpg', 'Image7.jpg', 'Image8.jpg',
    'Image9.jpg', 'Image10.jpg', 'Image11.jpg', 'Image12.jpg',
    'Image13.jpg', 'Image14.jpg', 'Image15.jpg', 'Image16.jpg',
    'Image17.jpg', 'Image18.jpg', 'Image19.jpg', 'Image20.jpg',
    'Image21.jpg', 'Image22.jpg', 'Image23.jpg', 'Image24.jpg',
    'Image25.jpg', 'Image26.jpg', 'Image27.jpg', 'Image28.jpg',
    'Image29.jpg', 'Image30.jpg', 'Image31.jpg', 'Image32.jpg',
    'Image33.jpg', 'Image34.jpg', 'Image35.jpg', 'Image36.jpg',
    'Image37.jpg', 'Image38.jpg', 'Image39.jpg', 'Image40.jpg',
    'Image41.jpg', 'Image42.jpg', 'Image43.jpg', 'Image44.jpg',
  ];

  const descriptions = [
    "Moonstone Academy has transformed my child's learning experience. The teacher is dedicated and truly care about each student's success.",
    "Moonstone's diverse activities help students discover their true potential.",
    "Excellent facilities and highly engaging teaching methods at Moonstone Academy.",
  ];

  const [enlargedPhoto, setEnlargedPhoto] = useState(null); // State to manage enlarged photo
  const [currentDescription, setCurrentDescription] = useState(descriptions[0]); // State for dynamic description
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

  const handlePhotoClick = (photo, index) => {
    setEnlargedPhoto(photo); // Set the photo to be displayed in the modal
    setCurrentDescription(descriptions[index % descriptions.length]); // Rotate descriptions dynamically
  };

  const closeModal = () => {
    setEnlargedPhoto(null); // Close the modal
  };

  return (
    <section id="achievements" className="achievements-section">
      <h2>Our Achievements</h2>

      <h3 className="section-title">Photos</h3>
      <div className="achievements-carousel" ref={carouselRef}>
        {photos.map((photo, index) => (
          <div key={index} className="achievement-item">
            <img
              src={photo}
              alt={`Achievement ${index + 1}`}
              onClick={() => handlePhotoClick(photo, index)}
            />
          </div>
        ))}
      </div>

      <div className="carousel-buttons">
        <button className="scroll-button" onClick={scrollLeft}>⬅</button>
        <button className="scroll-button" onClick={scrollRight}>➡</button>
      </div>

      <p className="achievements-description">{currentDescription}</p>

      <div className="academy-logo">
        <img src="Logo.png" alt="Academy Logo" />
      </div>

      {/* Modal for enlarged image */}
      {enlargedPhoto && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={enlargedPhoto} alt="Enlarged Achievement" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Achievements;
