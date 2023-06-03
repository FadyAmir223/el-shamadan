import { HashRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import '../i18n.js';
import App from './App.tsx';
import './index.css';
import 'unfonts.css';

import LoadingSpinnter from './components/loading-spinnter/loading-spinnter.component.tsx';
import { StaticProvider } from './context/static.context.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense fallback={<LoadingSpinnter />}>
    <HashRouter>
      <StaticProvider>
        <App />
      </StaticProvider>
    </HashRouter>
  </Suspense>
);
