import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { VitePWA } from 'vite-plugin-pwa';
import Unfonts from 'unplugin-fonts/vite';
import svgr from 'vite-plugin-svgr';

// import webp from 'vite-plugin-webp';
// import { join } from 'path';

export default defineConfig({
  base: '/el-shamadan/',
  build: {
    emptyOutDir: true,
  },

  plugins: [
    react(),
    svgr(),

    createHtmlPlugin({ minify: true }),

    // "build": "tsc && vite build && rm dist/images/**/*.{jpg,png}",

    // webp({
    //   onlyWebp: join(__dirname, 'public/images'),
    //   sharpOptions: {
    //     quality: 70,
    //     force: true,
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
      registerType: 'prompt',
      strategies: 'injectManifest',
      srcDir: 'src/assets',
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

        // npx pwa-asset-generator ./logo.png icons
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
});
