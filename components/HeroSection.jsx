import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from '../assets/videos/background-video.mp4';

const HeroSection = () => {
  const [isCentered, setIsCentered] = useState(false);

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
      const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
      const centerAreaWidth = windowWidth * 0.2;
      const centerAreaHeight = windowHeight * 0.2;
      const centerXStart = (windowWidth - centerAreaWidth) / 2;
      const centerYStart = (windowHeight - centerAreaHeight) / 2;

      const isInsideCenterArea =
        clientX >= centerXStart &&
        clientX <= centerXStart + centerAreaWidth &&
        clientY >= centerYStart &&
        clientY <= centerYStart + centerAreaHeight;

      setIsCentered(isInsideCenterArea);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-white">
      <div className="video-container">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex items-center justify-center h-full">
          <Link to="/about" className={`hero-text ${isCentered ? 'visible' : 'hidden'}`}>
            <h1 className="hero-heading">
              {["Victoria", "Joseph"].map((word, index) => (
                <span key={index} className="flashing-word">{word} </span>
              ))}
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;