// vite.config.ts
import { defineConfig } from "file:///E:/_PROGRAMMING/work/kero/el-shamadan%20-%20dev/node_modules/vite/dist/node/index.js";
import react from "file:///E:/_PROGRAMMING/work/kero/el-shamadan%20-%20dev/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { createHtmlPlugin } from "file:///E:/_PROGRAMMING/work/kero/el-shamadan%20-%20dev/node_modules/vite-plugin-html/dist/index.mjs";
import { VitePWA } from "file:///E:/_PROGRAMMING/work/kero/el-shamadan%20-%20dev/node_modules/vite-plugin-pwa/dist/index.js";
import Unfonts from "file:///E:/_PROGRAMMING/work/kero/el-shamadan%20-%20dev/node_modules/unplugin-fonts/dist/vite.mjs";
import webp from "file:///E:/_PROGRAMMING/work/kero/el-shamadan%20-%20dev/node_modules/vite-plugin-webp/lib/vite-plugin-webp.esm.js";
import { join } from "path";
var __vite_injected_original_dirname = "E:\\_PROGRAMMING\\work\\kero\\el-shamadan - dev";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({ minify: true }),
    webp({
      onlyWebp: join(__vite_injected_original_dirname, "public/images"),
      imageType: [".png", ".jpg"],
      shartOptions: {
        quality: 70
      }
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
            name: "abdo",
            local: "abdo",
            src: "./src/assets/fonts/abdo.ttf"
          }
        ],
        injectTo: "head-prepend"
      }
    }),
    VitePWA({
      registerType: "autoUpdate",
      strategies: "injectManifest",
      manifest: {
        name: "el-shamadan",
        short_name: "el-shamadan",
        description: "re-branding to el-shamadan wafer products",
        start_url: "/el-shamadan/",
        display: "standalone",
        orientation: "portrait",
        theme_color: "#181a1B",
        background_color: "#181a1B",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ],
  build: {
    emptyOutDir: true
  },
  optimizeDeps: {
    exclude: ["images/*.png", "images/*.jpg"]
  },
  base: "/el-shamadan/"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxfUFJPR1JBTU1JTkdcXFxcd29ya1xcXFxrZXJvXFxcXGVsLXNoYW1hZGFuIC0gZGV2XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxfUFJPR1JBTU1JTkdcXFxcd29ya1xcXFxrZXJvXFxcXGVsLXNoYW1hZGFuIC0gZGV2XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9fUFJPR1JBTU1JTkcvd29yay9rZXJvL2VsLXNoYW1hZGFuJTIwLSUyMGRldi92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVIdG1sUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4taHRtbCc7XHJcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnO1xyXG5pbXBvcnQgVW5mb250cyBmcm9tICd1bnBsdWdpbi1mb250cy92aXRlJztcclxuLy8gaW1wb3J0IHsgVml0ZUltYWdlT3B0aW1pemVyIH0gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2Utb3B0aW1pemVyJztcclxuaW1wb3J0IHdlYnAgZnJvbSAndml0ZS1wbHVnaW4td2VicCc7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIGNyZWF0ZUh0bWxQbHVnaW4oeyBtaW5pZnk6IHRydWUgfSksXHJcblxyXG4gICAgd2VicCh7XHJcbiAgICAgIG9ubHlXZWJwOiBqb2luKF9fZGlybmFtZSwgJ3B1YmxpYy9pbWFnZXMnKSxcclxuICAgICAgaW1hZ2VUeXBlOiBbJy5wbmcnLCAnLmpwZyddLFxyXG4gICAgICBzaGFydE9wdGlvbnM6IHtcclxuICAgICAgICBxdWFsaXR5OiA3MCxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIFZpdGVJbWFnZU9wdGltaXplcih7XHJcbiAgICAvLyAgIHBuZzoge1xyXG4gICAgLy8gICAgIHF1YWxpdHk6IDEwLFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gfSksXHJcblxyXG4gICAgVW5mb250cyh7XHJcbiAgICAgIGN1c3RvbToge1xyXG4gICAgICAgIGZhbWlsaWVzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdhYmRvJyxcclxuICAgICAgICAgICAgbG9jYWw6ICdhYmRvJyxcclxuICAgICAgICAgICAgc3JjOiAnLi9zcmMvYXNzZXRzL2ZvbnRzL2FiZG8udHRmJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBpbmplY3RUbzogJ2hlYWQtcHJlcGVuZCcsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuXHJcbiAgICBWaXRlUFdBKHtcclxuICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXHJcbiAgICAgIHN0cmF0ZWdpZXM6ICdpbmplY3RNYW5pZmVzdCcsXHJcbiAgICAgIG1hbmlmZXN0OiB7XHJcbiAgICAgICAgbmFtZTogJ2VsLXNoYW1hZGFuJyxcclxuICAgICAgICBzaG9ydF9uYW1lOiAnZWwtc2hhbWFkYW4nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAncmUtYnJhbmRpbmcgdG8gZWwtc2hhbWFkYW4gd2FmZXIgcHJvZHVjdHMnLFxyXG4gICAgICAgIHN0YXJ0X3VybDogJy9lbC1zaGFtYWRhbi8nLFxyXG4gICAgICAgIGRpc3BsYXk6ICdzdGFuZGFsb25lJyxcclxuICAgICAgICBvcmllbnRhdGlvbjogJ3BvcnRyYWl0JyxcclxuICAgICAgICB0aGVtZV9jb2xvcjogJyMxODFhMUInLFxyXG4gICAgICAgIGJhY2tncm91bmRfY29sb3I6ICcjMTgxYTFCJyxcclxuICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICdwd2EtMTkyeDE5Mi5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJ3B3YS01MTJ4NTEyLnBuZycsXHJcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxyXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55IG1hc2thYmxlJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxyXG4gIH0sXHJcbiAgb3B0aW1pemVEZXBzOiB7XHJcbiAgICBleGNsdWRlOiBbJ2ltYWdlcy8qLnBuZycsICdpbWFnZXMvKi5qcGcnXSxcclxuICB9LFxyXG4gIGJhc2U6ICcvZWwtc2hhbWFkYW4vJyxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVUsU0FBUyxvQkFBb0I7QUFDOVYsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsZUFBZTtBQUN4QixPQUFPLGFBQWE7QUFFcEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsWUFBWTtBQVByQixJQUFNLG1DQUFtQztBQVN6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixpQkFBaUIsRUFBRSxRQUFRLEtBQUssQ0FBQztBQUFBLElBRWpDLEtBQUs7QUFBQSxNQUNILFVBQVUsS0FBSyxrQ0FBVyxlQUFlO0FBQUEsTUFDekMsV0FBVyxDQUFDLFFBQVEsTUFBTTtBQUFBLE1BQzFCLGNBQWM7QUFBQSxRQUNaLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUUQsUUFBUTtBQUFBLE1BQ04sUUFBUTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxZQUNQLEtBQUs7QUFBQSxVQUNQO0FBQUEsUUFDRjtBQUFBLFFBQ0EsVUFBVTtBQUFBLE1BQ1o7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUVELFFBQVE7QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFlBQVk7QUFBQSxNQUNaLFVBQVU7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLFlBQVk7QUFBQSxRQUNaLGFBQWE7QUFBQSxRQUNiLFdBQVc7QUFBQSxRQUNYLFNBQVM7QUFBQSxRQUNULGFBQWE7QUFBQSxRQUNiLGFBQWE7QUFBQSxRQUNiLGtCQUFrQjtBQUFBLFFBQ2xCLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGdCQUFnQixjQUFjO0FBQUEsRUFDMUM7QUFBQSxFQUNBLE1BQU07QUFDUixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
