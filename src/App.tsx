import { lazy, Suspense } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

const Home = lazy(() => import('./routes/home/home.component'));
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';

const App = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div
        className="min-h-screen relative"
        style={{
          cursor: 'url("/images/stick-left-64.png"), auto',
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-20"
          style={{
            backgroundImage: 'url("/images/background.png")',
            backgroundSize: '100px',
          }}
        ></div>
        <HashRouter>
          <div className="relative">
            <Header />
            <div className="flex flex-col min-h-[calc(100vh-66px)]">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
              <div className="flex-grow" />
              <Footer />
            </div>
          </div>
        </HashRouter>
      </div>
    </Suspense>
  );
};

export default App;
