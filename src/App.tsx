import { lazy, Suspense } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

import Header from './components/header/header.component';
const Home = lazy(() => import('./routes/home/home.component'));

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
        <div className="relative">
          <HashRouter>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
              </Route>
            </Routes>
          </HashRouter>
        </div>
      </div>
    </Suspense>
  );
};

export default App;
