import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { VJ4, VJ7, VJ8, VJ9 } from '../assets/pictures';
import '../index.css';
import useAlert from '../hooks/useAlert';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const { alert, showAlert } = useAlert();

  return (
    <ParallaxProvider>
      <div className="about-page min-h-screen flex flex-col bg-white">
        <Navbar />
        {alert.show && (
          <div className={`alert alert-${alert.type}`} role="alert">
            {alert.text}
          </div>
        )}
        <div
          className="relative flex-grow w-full mx-auto my-8"
          style={{ minHeight: '500px', paddingTop: '300px' }} // Add padding to move the collage down
        >
          {/* Positioning the images in a collage-like fashion */}
          <div className="absolute body-0 left-1/4">
            <Parallax y={[-60, 40]}>
              <img
                src={VJ4}
                alt="VJ4"
                className="about-image hover-animate animate-fade-in"
                style={{ transform: 'rotate(-50deg)', maxWidth: '300px', maxHeight: '400px' }}
              />
            </Parallax>
          </div>

          <div className="absolute bottom-16 left-1/3">
            <Parallax y={[-80, 70]}>
              <img
                src={VJ7}
                alt="VJ7"
                className="about-image hover-animate animate-fade-in"
                style={{ transform: 'rotate(15deg)', maxWidth: '300px', maxHeight: '400px' }}
              />
            </Parallax>
          </div>

          <div className="absolute body-32 left-2/3">
            <Parallax y={[-10, 10]}>
              <img
                src={VJ8}
                alt="VJ8"
                className="about-image hover-animate animate-fade-in"
                style={{ transform: 'rotate(25deg)', maxWidth: '300px', maxHeight: '400px' }}
              />
            </Parallax>
          </div>

          <div className="body-80 left-1/2">
            <Parallax y={[-12, 12]}>
              <img
                src={VJ9}
                alt="VJ9"
                className="about-image hover-animate animate-fade-in"
                style={{ transform: 'rotate(10deg)', maxWidth: '300px', maxHeight: '400px' }}
              />
            </Parallax>
          </div>
        </div>
        <div className="about-content my-8 text-center">
          <button
            onClick={() =>
              showAlert({
                text: (
                  <span style={{ fontStyle: 'italic', color: 'black' }}>
                    <em></em>
                  </span>
                ),
              })
            }
            style={{
              fontFamily: 'Great Vibes, cursive',
              fontSize: '24px',
              padding: '10px 20px',
              backgroundColor: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Life is a journey, not a destination; embrace the twists and turns!
          </button>
        </div>
        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default About;
