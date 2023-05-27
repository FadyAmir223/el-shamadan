import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

precacheAndRoute(self.__WB_MANIFEST);

const revision = '1';

const assets = [
  '/el-shamedan/favicon.ico',
  '/el-shamedan/images/background.webp',
  '/el-shamedan/images/belt.webp',
  '/el-shamedan/images/curtain-left.webp',
  '/el-shamedan/images/curtain-right.webp',
  '/el-shamedan/images/diva.webp',
  '/el-shamedan/images/diva_.webp',
  '/el-shamedan/images/face.webp',
  '/el-shamedan/images/hero.webp',
  '/el-shamedan/images/hero_.webp',
  '/el-shamedan/images/joker.webp',
  '/el-shamedan/images/joker_.webp',
  '/el-shamedan/images/king.webp',
  '/el-shamedan/images/king_.webp',
  '/el-shamedan/images/logo.webp',
  '/el-shamedan/images/mafia.webp',
  '/el-shamedan/images/mafia_.webp',
  '/el-shamedan/images/magician.webp',
  '/el-shamedan/images/magician_.webp',
  '/el-shamedan/images/secret.webp',
  '/el-shamedan/images/stick-left-64.webp',
  '/el-shamedan/images/thumbnail.webp',
  '/el-shamedan/locales/ar/contact.json',
  '/el-shamedan/locales/ar/footer.json',
  '/el-shamedan/locales/ar/header.json',
  '/el-shamedan/locales/ar/home.json',
  '/el-shamedan/locales/ar/products.json',
  '/el-shamedan/locales/en/contact.json',
  '/el-shamedan/locales/en/footer.json',
  '/el-shamedan/locales/en/header.json',
  '/el-shamedan/locales/en/home.json',
  '/el-shamedan/locales/en/products.json',
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
