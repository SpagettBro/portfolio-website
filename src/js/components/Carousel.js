import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../../css/components/Carousel.css';
import tvImage from '../../assets/images/CSMTVtemplate.webp';
import leftArrow from '../../assets/images/LeftArrow.webp';
import rightArrow from '../../assets/images/RightArrow.webp';
import chancebulonImage from '../../assets/images/ChancebulonF.webp';
import aimTodayImage from '../../assets/svgs/AIM-Today-Black-01.svg';
import upendoImage from '../../assets/svgs/Upendo.svg';

const projects = [
  {
    image: chancebulonImage,
    link: '/upendo',
    alt: 'Chancebulon Project',
    width: '200px',
    top: '16%',
  },
  {
    image: upendoImage,
    link: '/upendo',
    alt: 'Upendo Project',
    width: '175px',
    top: '25%',
  },
  {
    image: aimTodayImage,
    link: '/upendo',
    alt: 'AIM Today Project',
    width: '300px',
    top: '5%',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div id="carousel">
      <img className="arrows" src={leftArrow} alt="left arrow" onClick={handlePrev} />
      
      <img id="tvImage" src={tvImage} alt="Blank TV screen template." />
      <div id="whiteBackground"></div>

      <Link id="projectLink" to={projects[currentIndex].link} style={{ width: projects[currentIndex].width, top: projects[currentIndex].top }} >
        <img id="projectXImage" src={projects[currentIndex].image} alt={`Project image ${currentIndex + 1}`} />
      </Link>

      <img className="arrows" src={rightArrow} alt="right arrow" onClick={handleNext} />
    </div>
  );
};

export default Carousel;
