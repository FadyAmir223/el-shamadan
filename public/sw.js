import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

precacheAndRoute(self.__WB_MANIFEST);

const revision = '1';

const assets = [
  '/shamedan/favicon.ico',
  '/shamedan/images/background.webp',
  '/shamedan/images/belt.webp',
  '/shamedan/images/curtain-left.webp',
  '/shamedan/images/curtain-right.webp',
  '/shamedan/images/diva.webp',
  '/shamedan/images/diva_.webp',
  '/shamedan/images/face.webp',
  '/shamedan/images/hero.webp',
  '/shamedan/images/hero_.webp',
  '/shamedan/images/joker.webp',
  '/shamedan/images/joker_.webp',
  '/shamedan/images/king.webp',
  '/shamedan/images/king_.webp',
  '/shamedan/images/logo.webp',
  '/shamedan/images/mafia.webp',
  '/shamedan/images/mafia_.webp',
  '/shamedan/images/magician.webp',
  '/shamedan/images/magician_.webp',
  '/shamedan/images/secret.webp',
  '/shamedan/images/stick-left-64.webp',
  '/shamedan/images/thumbnail.webp',
  '/shamedan/locales/ar/contact.json',
  '/shamedan/locales/ar/footer.json',
  '/shamedan/locales/ar/header.json',
  '/shamedan/locales/ar/home.json',
  '/shamedan/locales/ar/products.json',
  '/shamedan/locales/en/contact.json',
  '/shamedan/locales/en/footer.json',
  '/shamedan/locales/en/header.json',
  '/shamedan/locales/en/home.json',
  '/shamedan/locales/en/products.json',
];

const assetsRevision = assets.map((url) => ({ url, revision }));

precacheAndRoute(assetsRevision);

registerRoute(
  ({ request }) => request.mode === 'navigate',
  new StaleWhileRevalidate({
    cacheName: 'navigate',
    plugins: [new CacheableResponsePlugin({ statuses: [200] })],
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
