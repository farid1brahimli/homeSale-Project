// components/Carousel.jsx
import { useState } from 'react';
import HomeCard from '../HomeCard/HomeCard';
import './Carousel.scss'; // stil faylın varsa

const dummyData = [
  {
    title: 'Spacious Modern Smart House',
    description: 'Lorem ipsum dolor sit amet...',
    price: '$345,000',
    // digər məlumatlar...
  },
  {
    title: 'Classic Villa',
    description: 'Aliquam vitae purus sed dolor...',
    price: '$400,000',
  },
  // istədiyin qədər card əlavə et
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % dummyData.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + dummyData.length) % dummyData.length);
  };

  return (
    <div className="carousel-container">
      <button className="arrow left" onClick={goPrev}>◀</button>
      <HomeCard data={dummyData[currentIndex]} />
      <button className="arrow right" onClick={goNext}>▶</button>
    </div>
  );
};

export default Carousel;
