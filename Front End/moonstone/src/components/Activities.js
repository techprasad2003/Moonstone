import React, { useRef } from 'react';
import '../websitecss/Activities.css'; // Custom styles for Activities section

function Activities() {
  const photos = [
    'ActivitiesPhoto1.png', 'ActivitiesPhoto2.png', 'ActivitiesPhoto3.png', 
    'ActivitiesPhoto4.png', 'ActivitiesPhoto5.png'
  ];

  const photoDescription = "These Photos and videos highlight the various activities that Moonstone Educational Academy students engage in, Apart from academics we also focus extra curricular activities. Apart from studies we all celebrate the festivals like Ganesh Utsav, Ram Navami, Diwali, Rakshabandhan, Navratri and many more with each other, like a family, so that an academy does not remain just an academy, it becomes a family. Where the shining stars come front and show their inner potential.";

  const videoDescription = "These videos showcase the vibrant activities and events at Moonstone Educational Academy, where students come together to celebrate, learn, and grow as a family."; // Added description

  const videos = [
    'ActivitiesVideo1.mp4', 'ActivitiesVideo2.mp4', 'ActivitiesVideo3.mp4', 
    'ActivitiesVideo4.mp4', 'ActivitiesVideo5.mp4','ActivitiesVideo6.mp4','ActivitiesVideo7.mp4','ActivitiesVideo8.mp4'
  ];

  const photosCarouselRef = useRef(null);
  const videosCarouselRef = useRef(null);

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="activities" className="activities-section">
      <h2>Our Activities</h2>
      <p className="activities-description">{photoDescription}</p>

      {/* Photos Section */}
      <h3 className="section-title">Photos</h3>
      <div className="photos-carousel" ref={photosCarouselRef}>
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Highlight of activity ${index + 1}`} />
        ))}
      </div>
      <div className="carousel-buttons">
        <button className="scroll-button" onClick={() => scrollLeft(photosCarouselRef)}>⬅</button>
        <button className="scroll-button" onClick={() => scrollRight(photosCarouselRef)}>➡</button>
      </div>

      {/* Videos Section */}
      <h3 className="section-title">Videos</h3>
      <div className="videos-carousel" ref={videosCarouselRef}>
        {videos.map((video, index) => (
          <video key={index} src={video} controls />
        ))}
      </div>
      <div className="carousel-buttons">
        <button className="scroll-button" onClick={() => scrollLeft(videosCarouselRef)}>⬅</button>
        <button className="scroll-button" onClick={() => scrollRight(videosCarouselRef)}>➡</button>
      </div>

      {/* Single Description Below All Videos */}
      <p className="activities-description">{videoDescription}</p>
    </section>
  );
}

export default Activities;
