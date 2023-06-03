import { useRef } from 'react';
import { useTitle } from '../../hooks/useTitle';

const Video: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useTitle('video');

  return (
    <article className="relative min-h-[calc(100vh-66px)] py-6">
      <img src="images/logo.webp" alt="logo" className="pb-6 w-16 mx-auto" />
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
        src="images/item/curtain-left.webp"
        alt="curtain-left"
        className="absolute top-0 left-0 opacity-50 h-4/5 object-contain sm:hidden"
      />
      <img
        src="images/item/curtain-right.webp"
        alt="curtain-right"
        className="absolute top-0 right-0 opacity-50 h-4/5 object-contain sm:hidden"
      />
    </article>
  );
};

export default Video;
