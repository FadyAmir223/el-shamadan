import { lazy, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header.component';
import { useTranslation } from 'react-i18next';

const Home = lazy(() => import('./routes/home.component'));
const AllProducts = lazy(() => import('./routes/all-products.component'));
const SingleProduct = lazy(() => import('./routes/single-product.component'));
const Video = lazy(() => import('./routes/video.component'));
const ContactUs = lazy(() => import('./routes/contact-us.component'));
const Giveaway = lazy(() => import('./routes/giveaway.component'));
const Error = lazy(() => import('./routes/error.component'));

const App = () => {
  const [stickPosition, setStickPosition] = useState(null);
  const [isSoundPlaying, setSoundPlaying] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isMuted, setMuted] = useState(localStorage.muted === 'true' || false);
  const [isLight, setLight] = useState(localStorage.dark === 'true' || false);

  const [, i18n] = useTranslation('header');

  document.body.dir = i18n.dir();

  useEffect(() => {
    isLight
      ? document.body.classList.remove('dark')
      : document.body.classList.add('dark');
  }, [isLight]);

  const handleClick = async (e) => {
    // overlay or dropdown menu
    if (isOpen && !e.target?.closest('#install')) setOpen(false);

    // mute toggle
    if (e.target.closest('[id]').id === 'mute-btn') {
      if (isMuted) setSoundPlaying(true);
      setMuted((prevMuted) => {
        localStorage.muted = !prevMuted;
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
  };

  const handleAudioEnded = () => {
    setSoundPlaying(false);
  };

  return (
    <div
      className={`relative dark:bg-black/90 bg-black/[23%] min-h-screen overflow-hidden overscroll-y-contain ${
        isOpen ? 'h-screen' : ''
      }`}
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
          className="absolute top-0 left-0 w-full h-full dark:opacity-[15%] opacity-70"
          style={{
            backgroundImage: 'url("images/item/background.webp")',
            backgroundSize: '100px',
          }}
        ></div>

        <div className="relative flex flex-col">
          <Header
            isOpen={isOpen}
            setOpen={setOpen}
            isMuted={isMuted}
            isLight={isLight}
            setLight={setLight}
          />
          <Routes>
            <Route path="/" element={<Home />} />
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
