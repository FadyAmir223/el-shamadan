import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { VitePWA } from 'vite-plugin-pwa';
import Unfonts from 'unplugin-fonts/vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/el-shamadan/',
  build: {
    emptyOutDir: true,
  },

  plugins: [
    react(),
    svgr(),

    createHtmlPlugin({ minify: true }),

    Unfonts({
      custom: {
        families: [
          {
            name: 'abdo',
            local: 'abdo',
            src: './src/assets/fonts/abdo.woff2',
          },
        ],
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
            src: 'icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
