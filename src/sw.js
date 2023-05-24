import { precacheAndRoute } from 'workbox-precaching';

// precacheAndRoute(self.__WB_MANIFEST);

precacheAndRoute([
  { url: 'favicon.ico', revision: null },
  { url: '/images/*', revision: null },
  { url: '/locales/*', revision: null },
  { url: '/fonts/*', revision: null },
  { url: '/sounds/*', revision: null },
  ...self.__WB_MANIFEST,
]);
