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
        quality: 70,
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
        display: 'swap',
      },
    }),

    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      filename: 'sw.ts',
      manifest: {
        name: 'el-shamadan',
        short_name: 'el-shamadan',
        description: 're-branding to el-shamadan wafer products',
        start_url: '/el-shamadan/',
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
          },
        ],
      },
    }),
  ],
  build: {
    emptyOutDir: true,
  },
  base: '/el-shamadan/',
});
