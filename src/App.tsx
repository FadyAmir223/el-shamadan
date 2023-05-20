import { lazy, Suspense } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';

const Home = lazy(() => import('./routes/home/home.component'));
const SingleProduct = lazy(
  () => import('./routes/single-product/single-product.component')
);
const AllProducts = lazy(
  () => import('./routes/all-products/all-products.component')
);

const waferProducts = [
  {
    name: 'king',
    coverUrl: 'images/king.png',
    characterUrl: 'images/king_.png',
  },
  {
    name: 'mafia',
    coverUrl: 'images/mafia.png',
    characterUrl: 'images/mafia_.png',
  },
  {
    name: 'magician',
    coverUrl: 'images/magician.png',
    characterUrl: 'images/magician_.png',
  },
  {
    name: 'hero',
    coverUrl: 'images/hero.png',
    characterUrl: 'images/hero_.png',
  },
  {
    name: 'joker',
    coverUrl: 'images/joker.png',
    characterUrl: 'images/joker_.png',
  },
  {
    name: 'diva',
    coverUrl: 'images/diva.png',
    characterUrl: 'images/diva_.png',
  },
];

const products = ['king', 'mafia', 'magician', 'hero', 'joker', 'diva'];

const App = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div
        className="min-h-screen relative"
        style={{
          cursor: 'url("images/stick-left-64.png"), auto',
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-[12%]"
          style={{
            backgroundImage: 'url("images/background.png")',
            backgroundSize: '100px',
          }}
        ></div>
        <HashRouter>
          <div className="relative">
            <Header products={products} />
            <div className="flex flex-col min-h-[calc(100vh-66px)]">
              <Routes>
                <Route
                  path="/"
                  element={<Home waferProducts={waferProducts} />}
                />
                <Route
                  path="/home"
                  element={<Home waferProducts={waferProducts} />}
                />
                <Route
                  path="/products"
                  element={<AllProducts waferProducts={waferProducts} />}
                />
                <Route
                  path="/products/:productName"
                  element={<SingleProduct waferProducts={waferProducts} />}
                />
              </Routes>

              <div className="flex-grow" />
              <Footer products={products} />
            </div>
          </div>
        </HashRouter>
      </div>
    </Suspense>
  );
};

export default App;
