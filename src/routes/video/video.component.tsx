import { useRef } from 'react';
import Img from '../../components/img/img.component';
import { useTitle } from '../../hooks/useTitle';

const Video: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useTitle('video');

  return (
    <article className="relative min-h-[calc(100vh-66px)] py-6">
      <Img src="images/logo.png" alt="logo" className="pb-6 w-16 mx-auto" />
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
      <Img
        src="images/item/curtain-left.png"
        alt="curtain-left"
        className="absolute top-0 left-0 opacity-50 h-4/5 object-contain sm:hidden"
      />
      <Img
        src="images/item/curtain-right.png"
        alt="curtain-right"
        className="absolute top-0 right-0 opacity-50 h-4/5 object-contain sm:hidden"
      />
    </article>
  );
};

export default Video;
