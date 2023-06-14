import { useRef } from 'react';
import { useTitle } from '../hooks/useTitle';

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useTitle('video');

  return (
    <article className="relative min-h-[calc(100vh-66px)] py-6">
      <img src="images/logo-58.webp" alt="logo" className="pb-6 h-24 mx-auto" />
      <div className="contain">
        <video
          ref={videoRef}
          controls
          poster="images/item/thumbnail.webp"
          className="focus:outline-0 w-full relative z-10"
        >
          <source src="videos/shamdan.mp4" type="video/mp4" />
        </video>
      </div>
      <img
        src="images/item/curtain-left-95.webp"
        alt="curtain-left"
        className="absolute top-[-1px] left-0 dark:opacity-50 opacity-[85%] h-4/5 object-contain md:hidden"
      />
      <img
        src="images/item/curtain-right-95.webp"
        alt="curtain-right"
        className="absolute top-[-1px] right-0 dark:opacity-50 opacity-[85%] h-4/5 object-contain md:hidden"
      />
    </article>
  );
};

export default Video;
