import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({ minify: true }),
    ViteImageOptimizer({
      png: {
        quality: 10,
      },
    }),

    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      // srcDir: 'src',
      // filename: 'sw.js',
      // outDir: 'dist',

      // includeAssets: ['**/*.{ttf,png,json}'],
      manifest: {
        name: 'el-Shamedan',
        short_name: 'el-Shamedan',
        description: 're-branding to el-shamedan wafer products',
        start_url: '/el-shamadan/',
        // scope: '/',
        display: 'standalone',
        theme_color: '#181a1B',
        // background_color: '#e8ebf2',
        orientation: 'portrait',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      // devOptions: {
      //   enabled: true,
      //   type: 'module'
      // },
    }),
  ],
  build: {
    emptyOutDir: true,
  },
  base: '/el-shamadan/',
});
