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
    <article className="relative min-h-[calc(100vh-66px)]">
      <img src="images/logo.png" alt="logo" className="py-6 w-16 mx-auto" />
      <video
        ref={videoRef}
        controls
        poster="images/thumbnail.jpg"
        className="focus:outline-0 w-full relative z-10"
      >
        <source src="videos/shamdan.mp4" type="video/mp4" />
      </video>
      <img
        src="images/curtain-left.png"
        alt="curtain-left"
        className="absolute top-0 left-0 opacity-20 h-4/5 object-contain sm:hidden"
      />
      <img
        src="images/curtain-right.png"
        alt="curtain-right"
        className="absolute top-0 right-0 opacity-20 h-4/5 object-contain sm:hidden"
      />
    </article>
  );
};

export default Video;
