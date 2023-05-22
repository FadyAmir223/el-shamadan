import { useEffect, useRef } from 'react';

const Video: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.title = 'video';
    return () => {
      document.title = 'el-shamedan';
    };
  }, []);

  return (
    <div className="relative">
      <img src="images/logo.png" alt="logo" className="py-6 w-20 mx-auto" />
      <video
        ref={videoRef}
        controls
        // autoPlay
        poster="images/thumbnail.jpg"
        className="focus:outline-0"
      >
        <source src="videos/shamdan.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
