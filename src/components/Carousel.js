import React, { useState, useEffect } from 'react';
import './Carousel.scss';

const Carousel = ({ images, autoSlideInterval = 5000 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };
  useEffect(() => {
    const slideInterval = setInterval(goToNextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [currentImageIndex]);
  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentImageIndex ? 'active' : ''}`}
            style={{ transform: `translateX(${-currentImageIndex * 100}%)` }}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
        <button className="prev" onClick={goToPreviousSlide}>
          &#10094;
        </button>
        <button className="next" onClick={goToNextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
