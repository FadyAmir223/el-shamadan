import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
// import { ExpirationPlugin } from 'workbox-expiration';

// declare const self: ServiceWorkerGlobalScope;
declare const self: any;

precacheAndRoute(self.__WB_MANIFEST);

const revision = 'el-shamadan-static-v8';

self.addEventListener('install', () => {
  // Forces the waiting service worker to become the active service worker
  self.skipWaiting();
  // Unregisters any previous service worker
  self.registration.unregister();
});

// self.addEventListener('activate', (e) => {
//   e.waitUntil(
//     caches.keys().then((cacheNames) =>
//       Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheName !== revision) return caches.delete(cacheName);
//         })
//       )
//     )
//   );
// });

const repoName = '/el-shamadan';
// const cacehExpire = 60 * 60 * 24 * 30;

const path_img = (category, file) =>
  `${repoName}/images/${category}/${file}.webp`;

const path_locale = (locale, file) =>
  `${repoName}/locales/${locale}/${file}.json`;

const assets_ = {
  pages: ['contact', 'footer', 'header', 'home', 'products', 'giveaway'],
  chars: ['king', 'magician', 'hero', 'joker', 'mafia', 'diva'],
  folders: ['character', 'packet', 'bag', 'notebook', 'mug'],
  locales: ['en', 'ar'],
  items: [
    'background',
    'secret',
    'face',
    'belt',
    'curtain-left',
    'curtain-right',
    'stick-left-64',
    'thumbnail',
  ],
};

const assets = [
  `${repoName}/favicon.ico`,
  `${repoName}/images/logo.webp`,

  ...assets_.items.map((item) => path_img('item', item)),
  ...assets_.folders.flatMap((folder) =>
    assets_.chars.map((char) => path_img(folder, char))
  ),
  ...assets_.locales.flatMap((locale) =>
    assets_.pages.map((page) => path_locale(locale, page))
  ),
];

const assetsRevision = assets.map((url) => ({ url, revision }));

precacheAndRoute(assetsRevision);

registerRoute(
  ({ request }) => request.mode === 'navigate',
  new StaleWhileRevalidate({
    cacheName: 'navigate',
    plugins: [
      new CacheableResponsePlugin({ statuses: [200] }),
      // new ExpirationPlugin({
      //   maxEntries: 50,
      //   maxAgeSeconds: cacehExpire,
      // }),
    ],
  })
);

registerRoute(
  ({ request }) => request.destination === 'script',
  new StaleWhileRevalidate({
    cacheName: 'scripts',
    plugins: [new CacheableResponsePlugin({ statuses: [200] })],
  })
);

registerRoute(
  ({ request }) => request.destination === 'font',
  new CacheFirst({
    cacheName: 'fonts',
    plugins: [new CacheableResponsePlugin({ statuses: [200] })],
  })
);
