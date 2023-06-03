import { lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import { useTranslation } from 'react-i18next';

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
const Giveaway = lazy(() => import('./routes/giveaway/giveaway.component'));
const Error = lazy(() => import('./routes/error/error.component'));

const App = () => {
  const [stickPosition, setStickPosition] = useState(null);
  const [isSoundPlaying, setSoundPlaying] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isMuted, setMuted] = useState(
    localStorage.isMuted === 'true' || false
  );

  // console.log({ isMuted, isSoundPlaying });

  const [, i18n] = useTranslation('header');
  document.body.dir = i18n.dir();

  const handleClick = async (e) => {
    // mute toggle
    if (e.target.id === 'mute-btn' || e.target.parentNode.id === 'mute-btn') {
      if (isMuted) setSoundPlaying(true);
      setMuted((prevMuted) => {
        localStorage.isMuted = !prevMuted;
        return !prevMuted;
      });
    } else if (!isMuted) setSoundPlaying(true);

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

    // overlay or dropdown menu
    if (isOpen) setOpen(false);
  };

  const handleAudioEnded = () => {
    setSoundPlaying(false);
  };

  return (
    <div
      className="relative bg-black/90 min-h-screen overflow-hidden"
      onClick={handleClick}
    >
      {isSoundPlaying && !isMuted && (
        <audio src="sounds/magic.mp3" onEnded={handleAudioEnded} autoPlay />
      )}

      <div className="rtl:font-[abdo] ltr:font-[roboto]">
        {stickPosition && (
          <img
            src="images/item/stick-left-64.webp"
            alt="stick"
            className="absolute z-30 will-change-transform animate-[stickRotation_ease-out_0.6s] select-none"
            style={{
              top: stickPosition.y - 50,
              left: stickPosition.x - 72,
            }}
          />
        )}

        <div
          className="absolute top-0 left-0 w-full h-full opacity-[15%]"
          style={{
            backgroundImage: 'url("images/item/background.webp")',
            backgroundSize: '100px',
          }}
        ></div>

        <div className="relative flex flex-col">
          <Header isOpen={isOpen} setIsOpen={setOpen} isMuted={isMuted} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/products/:productName" element={<SingleProduct />} />
            <Route path="/video" element={<Video />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/giveaway" element={<Giveaway />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
