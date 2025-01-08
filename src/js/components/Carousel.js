import React, { useState } from 'react';
import '../../css/components/Carousel.css';
import tvImage from '../../assets/images/CSMTVtemplate.png';
import leftArrow from '../../assets/images/LeftArrow.png';
import rightArrow from '../../assets/images/RightArrow.png';
import chancebulonImage from '../../assets/images/ChancebulonF.png'
import astronautImage from '../../assets/images/CSMAstronautWhiteStroke [Converted].png'
import metroidImage from '../../assets/images/MetroidVector.png'

// Image array
const images = [
  chancebulonImage,
  astronautImage,
  metroidImage, // Add more image paths here
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div id="carousel">
      <img className="arrows" src={leftArrow} alt="left arrow" onClick={handlePrev}/>
      <img id="tvImage" src={tvImage} alt="Blank tv screen template." />
      <div id="whiteBackground"></div>
      <img id="projectXImage" src={images[currentIndex]} alt={`Project image ${currentIndex + 1}`} />
      <img className="arrows" src={rightArrow} alt="right arrow" onClick={handleNext} />
    </div>
  );
};

export default Carousel;
