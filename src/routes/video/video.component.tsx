import React from 'react';
import { FiMaximize2 } from 'react-icons/fi';

const Video: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleFullScreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen)
      videoRef.current.requestFullscreen();
    else if (videoRef.current.mozRequestFullScreen)
      videoRef.current.mozRequestFullScreen();
    else if (videoRef.current.webkitRequestFullscreen)
      videoRef.current.webkitRequestFullscreen();
    else if (videoRef.current.msRequestFullscreen)
      videoRef.current.msRequestFullscreen();
  };

  return (
    <div className="relative">
      <img src="images/logo.png" alt="logo" className="py-6 w-20 mx-auto" />
      <video ref={videoRef} muted autoPlay>
        <source src="videos/shamdan.mp4" type="video/mp4" />
      </video>
      <button
        className="absolute bottom-2 right-2 text-black border-none focus:outline-none"
        onClick={handleFullScreen}
      >
        <FiMaximize2 size={24} />
      </button>
    </div>
  );
};

export default Video;
