import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

// ServiceWorkerGlobalScope
declare const self: any;

precacheAndRoute(self.__WB_MANIFEST);

// Forces the waiting service worker to become the active service worker
// Unregisters any previous service worker
self.addEventListener('install', () => {
  self.skipWaiting();
  self.registration.unregister();
});

self.addEventListener('activate', () => self.clients.claim());

const revision = 'el-shamadan-static-v23';
const repoName = '/el-shamadan';

const path_locale = (locale, file) =>
  `${repoName}/locales/${locale}/${file}.json`;

const path_img = (category, file) =>
  `${repoName}/images/${category}/${file}.webp`;

const path_img_ = (folder, char) =>
  assets_.folders.flatMap((folderItem) =>
    folderItem.key.includes(folder)
      ? folderItem.resolution.map(
          (resolution) =>
            `${repoName}/images/${folder}/${char}-${resolution}.webp`
        )
      : []
  );

const assets_ = {
  pages: ['contact', 'footer', 'header', 'home', 'products', 'giveaway'],
  locales: ['en', 'ar'],

  chars: ['king', 'magician', 'hero', 'joker', 'mafia', 'diva'],
  folders: [
    {
      key: ['t-shirt', 'bag', 'notebook', 'mug'],
      resolution: [180],
    },
    { key: ['character'], resolution: [80, 115, 320] },
    { key: ['packet'], resolution: [175, 300, 370, 425] },
  ],
  items: [
    'background-100',
    'secret-420',
    'secret-dark-420',
    'face-150',
    'belt-150',
    'curtain-left-145',
    'curtain-right-145',
    'stick-left-64',
    'thumbnail',
  ],
};

const assets = [
  `${repoName}/favicon.ico`,
  `${repoName}/images/logo-58.webp`,
  `${repoName}/images/logo-90.webp`,
  ...assets_.locales.flatMap((locale) =>
    assets_.pages.map((page) => path_locale(locale, page))
  ),
  ...assets_.items.map((item) => path_img('item', item)),
  ...assets_.folders.flatMap((folder) =>
    assets_.chars.flatMap((char) =>
      Object.keys(folder.key).flatMap((key) => path_img_(folder.key[key], char))
    )
  ),
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
