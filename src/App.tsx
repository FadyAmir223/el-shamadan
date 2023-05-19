import { lazy, Suspense } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

const Home = lazy(() => import('./routes/home/home.component'));
const About = lazy(() => import('./routes/about/about.component'));

const App = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className="text-2xl uppercase">el-shamadan</div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </HashRouter>
    </Suspense>
  );
};

export default App;
