import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { VitePWA } from 'vite-plugin-pwa';
import Unfonts from 'unplugin-fonts/vite';
// import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import webp from 'vite-plugin-webp';
import { join } from 'path';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({ minify: true }),

    legacy({
      targets: ['Chrome >= 49', 'Firefox >= 78', 'Safari >= 14', 'Edge >= 88'],
      // 'defaults', 'not IE 11'
      // polyfills: ['es.promise', 'es.symbol'],
      // modernPolyfills: true,
    }),

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
    target: 'es2022',
  },
  base: '/el-shamadan/',
});
