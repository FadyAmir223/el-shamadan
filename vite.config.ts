import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { VitePWA } from 'vite-plugin-pwa';
import Unfonts from 'unplugin-fonts/vite';
// import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import webp from 'vite-plugin-webp';
import { join } from 'path';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({ minify: true }),

    webp({
      onlyWebp: join(__dirname, 'public/images'),
      imageType: ['.png', '.jpg'],
      shartOptions: {
        quality: 80,
      },
    }),

    // ViteImageOptimizer({
    //   png: {
    //     quality: 10,
    //   },
    // }),

    Unfonts({
      custom: {
        families: [
          {
            name: 'abdo',
            local: 'abdo',
            src: './src/assets/fonts/abdo.ttf',
          },
        ],
        injectTo: 'head-prepend',
      },
    }),

    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      manifest: {
        name: 'el-shamedan',
        short_name: 'el-shamedan',
        description: 're-branding to el-shamedan wafer products',
        start_url: '/el-shamedan/',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#181a1B',
        background_color: '#181a1B',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  build: {
    emptyOutDir: true,
  },
  optimizeDeps: {
    exclude: ['images/*.png', 'images/*.jpg'],
  },
  base: '/el-shamedan/',
});
