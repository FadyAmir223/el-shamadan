import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
// import { ExpirationPlugin } from 'workbox-expiration';

declare const self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);

// const cacehExpire = 60 * 60 * 24 * 30;
const revision = '1';

const assets = [
  '/el-shamadan/favicon.ico',
  '/el-shamadan/images/logo.webp',

  '/el-shamadan/images/item/background.webp',
  '/el-shamadan/images/item/secret.webp',
  '/el-shamadan/images/item/face.webp',
  '/el-shamadan/images/item/belt.webp',
  '/el-shamadan/images/item/curtain-left.webp',
  '/el-shamadan/images/item/curtain-right.webp',
  '/el-shamadan/images/item/stick-left-64.webp',
  '/el-shamadan/images/item/thumbnail.webp',

  '/el-shamadan/images/character/king.webp',
  '/el-shamadan/images/character/magician.webp',
  '/el-shamadan/images/character/hero.webp',
  '/el-shamadan/images/character/joker.webp',
  '/el-shamadan/images/character/mafia.webp',
  '/el-shamadan/images/character/diva.webp',

  '/el-shamadan/images/packet/king.webp',
  '/el-shamadan/images/packet/magician.webp',
  '/el-shamadan/images/packet/hero.webp',
  '/el-shamadan/images/packet/joker.webp',
  '/el-shamadan/images/packet/mafia.webp',
  '/el-shamadan/images/packet/diva.webp',

  '/el-shamadan/images/bag/king.webp',
  '/el-shamadan/images/bag/magician.webp',
  '/el-shamadan/images/bag/hero.webp',
  '/el-shamadan/images/bag/joker.webp',
  '/el-shamadan/images/bag/mafia.webp',
  '/el-shamadan/images/bag/diva.webp',

  '/el-shamadan/images/notebook/king.webp',
  '/el-shamadan/images/notebook/magician.webp',
  '/el-shamadan/images/notebook/hero.webp',
  '/el-shamadan/images/notebook/joker.webp',
  '/el-shamadan/images/notebook/mafia.webp',
  '/el-shamadan/images/notebook/diva.webp',

  '/el-shamadan/images/mug/king.webp',
  '/el-shamadan/images/mug/magician.webp',
  '/el-shamadan/images/mug/hero.webp',
  '/el-shamadan/images/mug/joker.webp',
  '/el-shamadan/images/mug/mafia.webp',
  '/el-shamadan/images/mug/diva.webp',

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
  ({ request }) => request.destination === 'font',
  new CacheFirst({
    cacheName: 'fonts',
    plugins: [
      new CacheableResponsePlugin({ statuses: [200] }),
      // new ExpirationPlugin({
      //   maxEntries: 50,
      //   maxAgeSeconds: cacehExpire,
      // }),
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
