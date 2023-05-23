import { lazy, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import { useTranslation } from 'react-i18next';
import Error from './routes/error/error.component';

const Home = lazy(() => import('./routes/home/home.component'));
const AllProducts = lazy(
  () => import('./routes/all-products/all-products.component')
);
const SingleProduct = lazy(
  () => import('./routes/single-product/single-product.component')
);
const Video = lazy(() => import('./routes/video/video.component'));
const ContactUs = lazy(
  () => import('./routes/contact-us/contact-us.component')
);

const App = () => {
  const [, i18n] = useTranslation('header');
  const [stickPosition, setStickPosition] = useState(null);
  const [isSoundPlaying, setSoundPlaying] = useState(false);
  const [isMuted, setMuted] = useState(
    localStorage.isMuted === 'true' || false
  );
  const [isOpen, setOpen] = useState(false);
  const refHeader = useRef(null);

  const runAudio = () => {
    new Audio('sounds/magic.mp3').play();
    setSoundPlaying(true);
  };

  const handleClick = async (e) => {
    // mute toggle
    if (refHeader.current && refHeader.current.contains(e.target)) {
      if (isMuted) runAudio();
      setMuted((prevMuted) => {
        localStorage.isMuted = !prevMuted;
        return !prevMuted;
      });
    } else if (!isMuted) runAudio();

    // stick position
    const { clientX, clientY } = e;
    const { pageXOffset, pageYOffset } = window;
    setStickPosition({
      x: clientX + pageXOffset,
      y: clientY + pageYOffset,
    });

    setTimeout(() => {
      setStickPosition(null);
    }, 500);

    // dropdown menu
    if (isOpen) setOpen(false);
  };

  return (
    <div
      dir={i18n.dir()}
      className="relative bg-black/90 min-h-screen"
      onClick={handleClick}
    >
      {isSoundPlaying && !isMuted && (
        <audio autoPlay onEnded={() => setSoundPlaying(false)} />
      )}

      <div className="rtl:font-[abdo] ltr:font-[roboto]">
        {stickPosition && (
          <img
            src="images/stick-left-64.png"
            alt="stick"
            className="absolute z-30 will-change-transform animate-[stickRotation_ease-out_0.6s]"
            style={{
              top: stickPosition.y - 50,
              left: stickPosition.x - 72,
            }}
          />
        )}

        <div
          className="absolute top-0 left-0 w-full h-full opacity-[15%]"
          style={{
            backgroundImage: 'url("images/background.png")',
            backgroundSize: '100px',
          }}
        ></div>
        <div className="relative flex flex-col">
          <Header
            isOpen={isOpen}
            setIsOpen={setOpen}
            isMuted={isMuted}
            refHeader={refHeader}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/products/:productName" element={<SingleProduct />} />
            <Route path="/video" element={<Video />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
