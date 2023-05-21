import { lazy, Suspense, useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

import Header from './components/header/header.component';
import { StaticProvider } from './context/static.context';
import { useTranslation } from 'react-i18next';

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
    setStickPosition({ x: clientX, y: clientY });

    setTimeout(() => {
      setStickPosition(null);
    }, 300);
  };

  return (
    <StaticProvider>
      <Suspense fallback={<div>loading...</div>}>
        <div
          dir={i18n.dir()}
          className="min-h-screen relative"
          style={
            {
              // cursor: 'url("images/stick-left-64.png"), auto',
            }
          }
          onClick={handleClick}
        >
          {stickPosition && (
            <img
              src="images/stick-left-64.png"
              alt="Stick"
              className="absolute z-30 -translate-x-3/4 -translate-y-3/4"
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
