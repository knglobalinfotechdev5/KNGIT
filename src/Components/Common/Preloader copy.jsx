import React from 'react';
import { IntroLogo } from '../../Assets/data';

const Preloader = ({ onVideoEnd }) => {
  // When the video ends, trigger the callback to hide the preloader
  const handleVideoEnd = () => {
    setTimeout(() => {
      onVideoEnd();
    }, 100); // Delay slightly to match the video end
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <video
        autoPlay
        muted
        onEnded={handleVideoEnd} // Trigger when video ends
        className="hidden sm:block w-full h-full max-w-full max-h-full object-cover"
      >
        <source src={IntroLogo} type="video/mp4" />
      </video>

      {/* Mobile version */}
      {/* <video
        autoPlay
        muted
        onEnded={handleVideoEnd}
        className="block sm:hidden w-full h-full max-w-full max-h-full object-cover"
      >
        <source src={logovediomob} type="video/mp4" />
      </video> */}
    </div>
  );
};

export default Preloader;
