// src/components/VideoPlayer.jsx

import React, { useRef, useState } from 'react';
import videoSource from '../assets/videos/background-video.mp4';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="background-video"
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className="video-control-button" onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default VideoPlayer;
