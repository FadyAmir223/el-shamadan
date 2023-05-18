import { lazy } from 'react';
// import { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const About = lazy(() => import('./routes/about/about.component'));
import Home from './routes/home/home.component';

const App = () => {
  return (
    // <Suspense fallback={<div>loading...</div>}>
    <>
      <div className="text-3xl uppercase bg-blue-600">text</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
    // </Suspense>
  );
};

export default App;
