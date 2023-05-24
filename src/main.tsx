import { HashRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import '../i18n.js';
import App from './App.tsx';
import './index.css';
import LoadingSpinnter from './components/loading-spinnter/loading-spinnter.component.tsx';
import { StaticProvider } from './context/static.context.tsx';

// import { registerSW } from "virtual:pwa-register";

// const updateSW = registerSW({
//   onNeedRefresh() {
//     if (confirm("New content available. Reload?")) {
//       updateSW(true);
//     }
//   },
//   onOfflineReady() {
//     console.log("offline ready");
//   },
// });

createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense fallback={<LoadingSpinnter />}>
    <HashRouter>
      <StaticProvider>
        <App />
      </StaticProvider>
    </HashRouter>
  </Suspense>
);
