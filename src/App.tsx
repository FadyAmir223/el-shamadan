import { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('./routes/home/home.component'));

const App = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
