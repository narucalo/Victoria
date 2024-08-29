// src/components/HeroSection.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isCentered, setIsCentered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const centerAreaWidth = windowWidth * 0.2; // 20% of the screen width
      const centerAreaHeight = windowHeight * 0.2; // 20% of the screen height

      const centerXStart = (windowWidth - centerAreaWidth) / 2;
      const centerYStart = (windowHeight - centerAreaHeight) / 2;

      if (
        e.clientX >= centerXStart &&
        e.clientX <= centerXStart + centerAreaWidth &&
        e.clientY >= centerYStart &&
        e.clientY <= centerYStart + centerAreaHeight
      ) {
        setIsCentered(true);
      } else {
        setIsCentered(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="hero-container">
      <Link to="/about" className={`hero-text ${isCentered ? 'visible' : 'hidden'}`}>
        Explore
      </Link>
    </div>
  );
};

export default HeroSection;
