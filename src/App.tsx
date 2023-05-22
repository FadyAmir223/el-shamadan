import { lazy, Suspense, useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

import Header from './components/header/header.component';
import { StaticProvider } from './context/static.context';
import { useTranslation } from 'react-i18next';
import LoadingSpinnter from './components/loading-spinnter/loading-spinnter.component';

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
  const [isMagicSoundPlaying, setMagicSoundPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    new Audio('sounds/magic.mp3').play();
    setMagicSoundPlaying(true);

    const { clientX, clientY } = e;
    const { pageXOffset, pageYOffset } = window;

    setStickPosition({
      x: clientX + pageXOffset,
      y: clientY + pageYOffset,
    });

    setTimeout(() => {
      setStickPosition(null);
    }, 500);

    if (isOpen) setIsOpen(false);
  };

  return (
    <StaticProvider>
      <Suspense fallback={<LoadingSpinnter />}>
        <div
          dir={i18n.dir()}
          className="relative bg-black/90"
          onClick={handleClick}
        >
          {isMagicSoundPlaying && (
            <audio autoPlay onEnded={() => setMagicSoundPlaying(false)} />
          )}

          <div className="rtl:font-[abdo] ltr:font-[roboto]">
            {stickPosition && (
              <img
                src="images/stick-left-64.png"
                alt="stick"
                className="absolute z-30 will-change-transform stick-animation"
                // -translate-x-3/4 -translate-y-3/4
                style={{
                  top: stickPosition.y - 35,
                  left: stickPosition.x - 55,
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
            <div className="relative min-h-screen flex flex-col">
              <HashRouter>
                <Header isOpen={isOpen} setIsOpen={setIsOpen} />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/products" element={<AllProducts />} />
                  <Route
                    path="/products/:productName"
                    element={<SingleProduct />}
                  />
                  <Route path="/video" element={<Video />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                </Routes>
              </HashRouter>
            </div>
          </div>
        </div>
      </Suspense>
    </StaticProvider>
  );
};

export default App;
