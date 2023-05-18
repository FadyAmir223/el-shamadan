// import { lazy, Suspense } from 'react';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';

// const Home = lazy(() => import('./routes/home/home.component'));

const App = () => {
  return (
    <div className="text-3xl uppercase bg-red-600">text</div>
    // <Suspense fallback={<div>loading...</div>}>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Home />}></Route>
    //     </Routes>
    //   </BrowserRouter>
    // </Suspense>
  );
};

export default App;
