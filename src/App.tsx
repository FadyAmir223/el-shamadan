import { lazy } from 'react';
// import { lazy, Suspense } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

const About = lazy(() => import('./routes/about/about.component'));
import Home from './routes/home/home.component';

const App = () => {
  return (
    // <Suspense fallback={<div>loading...</div>}>
    <>
      <div className="text-2xl uppercase bg-blue-600">root</div>
      {/* <BrowserRouter> */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </HashRouter>
      {/* </BrowserRouter> */}
    </>
    // </Suspense>
  );
};

export default App;
