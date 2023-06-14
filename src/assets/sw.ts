import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

// const cacehExpire = 60 * 60 * 24 * 3;

declare const self: any; // ServiceWorkerGlobalScope

precacheAndRoute(self.__WB_MANIFEST);

// Forces the waiting service worker to become the active service worker
// Unregisters any previous service worker
self.addEventListener('install', () => {
  self.skipWaiting();
  self.registration.unregister();
});

self.addEventListener('activate', () => self.clients.claim());

const revision = 'el-shamadan-static-v3';
const repoName = '/el-shamadan';

const path_locale = (locale, file) =>
  `${repoName}/locales/${locale}/${file}.json`;

const path_img = (category, file) =>
  `${repoName}/images/${category}/${file}.webp`;

function path_img_(folder, char) {
  return assets_.folders.flatMap((folderItem) => {
    return folderItem.key.includes(folder)
      ? folderItem.resolution.map(
          (resolution) =>
            `${repoName}/images/${folder}/${char}-${resolution}.webp`
        )
      : [];
  });
}

const assets_ = {
  pages: ['contact', 'footer', 'header', 'home', 'products', 'giveaway'],
  locales: ['en', 'ar'],

  chars: ['king', 'magician', 'hero', 'joker', 'mafia', 'diva'],
  folders: [
    {
      key: ['bag', 'notebook', 'mug', 't-shirt'],
      resolution: [120, 180],
    },
    { key: ['character'], resolution: [80, 320] },
    { key: ['packet'], resolution: [175, 300] },
  ],
  items: [
    'background-100',
    'secret-420',
    'secret-dark-420',
    'face-150',
    'belt-150',
    'curtain-left-95',
    'curtain-right-95',
    'stick-left-64',
    'thumbnail',
  ],
};

const assets = [
  `${repoName}/favicon.ico`,
  `${repoName}/images/logo-32.webp`,
  `${repoName}/images/logo-58.webp`,

  ...assets_.locales.flatMap((locale) =>
    assets_.pages.map((page) => path_locale(locale, page))
  ),

  ...assets_.items.map((item) => path_img('item', item)),

  ...assets_.folders.flatMap((folder) =>
    assets_.chars.flatMap((char) => path_img_(folder.key[0], char))
  ),
];

console.log(assets);

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
