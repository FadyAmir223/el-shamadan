import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
// import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({ minify: true }),
    // svgr(),
    ViteImageOptimizer({
      png: {
        quality: 10,
      },
      jpg: {
        quality: 10,
      },
      jpeg: {
        quality: 10,
      },
      webp: {
        quality: 10,
      },
    }),
  ],
  build: {
    // outDir: '../server/public',
    emptyOutDir: true,
  },
  base: '/el-shamadan/',
});
