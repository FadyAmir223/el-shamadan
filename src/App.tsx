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

const App = () => {
  const [, i18n] = useTranslation('header');
  const [stickPosition, setStickPosition] = useState(null);

  const handleClick = (event) => {
    const { clientX, clientY } = event;
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;
    const x = clientX + scrollX;
    const y = clientY + scrollY;

    setStickPosition({ x, y });

    setTimeout(() => {
      setStickPosition(null);
    }, 500);
  };

  return (
    <StaticProvider>
      <Suspense fallback={<LoadingSpinnter />}>
        <div
          dir={i18n.dir()}
          className="min-h-screen relative"
          // style={{
          //   cursor: 'url("images/stick-left-64.png"), auto',
          // }}
          onClick={handleClick}
        >
          {stickPosition && (
            <img
              src="images/stick-left-64.png"
              alt="Stick"
              className="absolute z-30 -translate-x-[60%] -translate-y-[56%]"
              style={{
                top: stickPosition.y,
                left: stickPosition.x,
              }}
            />
          )}
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-[15%]"
            style={{
              backgroundImage: 'url("images/background.png")',
              backgroundSize: '100px',
            }}
          ></div>
          <HashRouter>
            <div className="relative">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<AllProducts />} />
                <Route
                  path="/products/:productName"
                  element={<SingleProduct />}
                />
                <Route path="/video" element={<Video />} />
              </Routes>
            </div>
          </HashRouter>
        </div>
      </Suspense>
    </StaticProvider>
  );
};

export default App;
