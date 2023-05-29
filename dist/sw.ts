import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';

declare const self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);

const cacehExpire = 60 * 60 * 24 * 30;
const revision = '1';

const assets = [
  '/el-shamadan/favicon.ico',
  '/el-shamadan/images/background.webp',
  '/el-shamadan/images/belt.webp',
  '/el-shamadan/images/curtain-left.webp',
  '/el-shamadan/images/curtain-right.webp',
  '/el-shamadan/images/diva.webp',
  '/el-shamadan/images/diva_.webp',
  '/el-shamadan/images/face.webp',
  '/el-shamadan/images/hero.webp',
  '/el-shamadan/images/hero_.webp',
  '/el-shamadan/images/joker.webp',
  '/el-shamadan/images/joker_.webp',
  '/el-shamadan/images/king.webp',
  '/el-shamadan/images/king_.webp',
  '/el-shamadan/images/logo.webp',
  '/el-shamadan/images/mafia.webp',
  '/el-shamadan/images/mafia_.webp',
  '/el-shamadan/images/magician.webp',
  '/el-shamadan/images/magician_.webp',
  '/el-shamadan/images/secret.webp',
  '/el-shamadan/images/stick-left-64.webp',
  '/el-shamadan/images/thumbnail.webp',
  '/el-shamadan/locales/ar/contact.json',
  '/el-shamadan/locales/ar/footer.json',
  '/el-shamadan/locales/ar/header.json',
  '/el-shamadan/locales/ar/home.json',
  '/el-shamadan/locales/ar/products.json',
  '/el-shamadan/locales/en/contact.json',
  '/el-shamadan/locales/en/footer.json',
  '/el-shamadan/locales/en/header.json',
  '/el-shamadan/locales/en/home.json',
  '/el-shamadan/locales/en/products.json',
];

const assetsRevision = assets.map((url) => ({ url, revision }));

precacheAndRoute(assetsRevision);

registerRoute(
  ({ request }) => request.mode === 'navigate',
  new StaleWhileRevalidate({
    cacheName: 'navigate',
    plugins: [
      new CacheableResponsePlugin({ statuses: [200] }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: cacehExpire,
      }),
    ],
  })
);

registerRoute(
  ({ request }) => request.destination === 'script',
  new StaleWhileRevalidate({
    cacheName: 'scripts',
    plugins: [
      new CacheableResponsePlugin({ statuses: [200] }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: cacehExpire,
      }),
    ],
  })
);

registerRoute(
  ({ request }) => request.destination === 'font',
  new CacheFirst({
    cacheName: 'fonts',
    plugins: [
      new CacheableResponsePlugin({ statuses: [200] }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: cacehExpire,
      }),
    ],
  })
);

// registerRoute(
//   ({ request }) => request.destination === 'image',
//   new CacheFirst({
//     cacheName: 'image',
//     plugins: [
//       new CacheableResponsePlugin({ statuses: [200] }),
//       new ExpirationPlugin({
//         maxEntries: 50,
//         maxAgeSeconds: cacehExpire,
//       }),
//     ],
//   })
// );
