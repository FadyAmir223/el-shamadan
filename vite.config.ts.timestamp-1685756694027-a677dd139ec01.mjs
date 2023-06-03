// vite.config.ts
import { defineConfig } from "file:///E:/_PROGRAMMING/work/kero/client/node_modules/vite/dist/node/index.js";
import react from "file:///E:/_PROGRAMMING/work/kero/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { createHtmlPlugin } from "file:///E:/_PROGRAMMING/work/kero/client/node_modules/vite-plugin-html/dist/index.mjs";
import { VitePWA } from "file:///E:/_PROGRAMMING/work/kero/client/node_modules/vite-plugin-pwa/dist/index.js";
import Unfonts from "file:///E:/_PROGRAMMING/work/kero/client/node_modules/unplugin-fonts/dist/vite.mjs";
import { join } from "path";
import webp from "file:///E:/_PROGRAMMING/work/kero/client/node_modules/vite-plugin-webp/lib/vite-plugin-webp.esm.js";
var __vite_injected_original_dirname = "E:\\_PROGRAMMING\\work\\kero\\client";
var vite_config_default = defineConfig({
  base: "/el-shamadan/",
  build: {
    emptyOutDir: true
  },
  plugins: [
    react(),
    createHtmlPlugin({ minify: true }),
    // ViteImageOptimizer({
    //   png: {
    //     quality: 10,
    //   },
    // }),
    webp({
      onlyWebp: join(__vite_injected_original_dirname, "public/images"),
      sharpOptions: {
        quality: 70,
        force: true
      }
      // outputDir: join(__dirname, 'public/images'),
    }),
    // legacy({
    //   targets: ['defaults', 'not IE 11'],
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
        injectTo: "head-prepend",
        display: "swap"
      }
    }),
    VitePWA({
      registerType: "prompt",
      strategies: "injectManifest",
      srcDir: "src/assets",
      filename: "sw.ts",
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
            type: "image/png"
          }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxfUFJPR1JBTU1JTkdcXFxcd29ya1xcXFxrZXJvXFxcXGNsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcX1BST0dSQU1NSU5HXFxcXHdvcmtcXFxca2Vyb1xcXFxjbGllbnRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L19QUk9HUkFNTUlORy93b3JrL2tlcm8vY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1odG1sJztcclxuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XHJcbmltcG9ydCBVbmZvbnRzIGZyb20gJ3VucGx1Z2luLWZvbnRzL3ZpdGUnO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCB3ZWJwIGZyb20gJ3ZpdGUtcGx1Z2luLXdlYnAnO1xyXG4vLyBpbXBvcnQgeyBWaXRlSW1hZ2VPcHRpbWl6ZXIgfSBmcm9tICd2aXRlLXBsdWdpbi1pbWFnZS1vcHRpbWl6ZXInO1xyXG4vLyBpbXBvcnQgbGVnYWN5IGZyb20gJ0B2aXRlanMvcGx1Z2luLWxlZ2FjeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJhc2U6ICcvZWwtc2hhbWFkYW4vJyxcclxuICBidWlsZDoge1xyXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXHJcbiAgfSxcclxuXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuXHJcbiAgICBjcmVhdGVIdG1sUGx1Z2luKHsgbWluaWZ5OiB0cnVlIH0pLFxyXG5cclxuICAgIC8vIFZpdGVJbWFnZU9wdGltaXplcih7XHJcbiAgICAvLyAgIHBuZzoge1xyXG4gICAgLy8gICAgIHF1YWxpdHk6IDEwLFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gfSksXHJcblxyXG4gICAgd2VicCh7XHJcbiAgICAgIG9ubHlXZWJwOiBqb2luKF9fZGlybmFtZSwgJ3B1YmxpYy9pbWFnZXMnKSxcclxuICAgICAgc2hhcnBPcHRpb25zOiB7XHJcbiAgICAgICAgcXVhbGl0eTogNzAsXHJcbiAgICAgICAgZm9yY2U6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIG91dHB1dERpcjogam9pbihfX2Rpcm5hbWUsICdwdWJsaWMvaW1hZ2VzJyksXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBsZWdhY3koe1xyXG4gICAgLy8gICB0YXJnZXRzOiBbJ2RlZmF1bHRzJywgJ25vdCBJRSAxMSddLFxyXG4gICAgLy8gfSksXHJcblxyXG4gICAgVW5mb250cyh7XHJcbiAgICAgIGN1c3RvbToge1xyXG4gICAgICAgIGZhbWlsaWVzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdhYmRvJyxcclxuICAgICAgICAgICAgbG9jYWw6ICdhYmRvJyxcclxuICAgICAgICAgICAgc3JjOiAnLi9zcmMvYXNzZXRzL2ZvbnRzL2FiZG8udHRmJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBpbmplY3RUbzogJ2hlYWQtcHJlcGVuZCcsXHJcbiAgICAgICAgZGlzcGxheTogJ3N3YXAnLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcblxyXG4gICAgVml0ZVBXQSh7XHJcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ3Byb21wdCcsXHJcbiAgICAgIHN0cmF0ZWdpZXM6ICdpbmplY3RNYW5pZmVzdCcsXHJcbiAgICAgIHNyY0RpcjogJ3NyYy9hc3NldHMnLFxyXG4gICAgICBmaWxlbmFtZTogJ3N3LnRzJyxcclxuXHJcbiAgICAgIG1hbmlmZXN0OiB7XHJcbiAgICAgICAgbmFtZTogJ2VsLXNoYW1hZGFuJyxcclxuICAgICAgICBzaG9ydF9uYW1lOiAnZWwtc2hhbWFkYW4nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAncmUtYnJhbmRpbmcgdG8gZWwtc2hhbWFkYW4gd2FmZXIgcHJvZHVjdHMnLFxyXG4gICAgICAgIHN0YXJ0X3VybDogJy9lbC1zaGFtYWRhbi8nLFxyXG4gICAgICAgIGRpc3BsYXk6ICdzdGFuZGFsb25lJyxcclxuICAgICAgICBvcmllbnRhdGlvbjogJ3BvcnRyYWl0JyxcclxuICAgICAgICB0aGVtZV9jb2xvcjogJyMxODFhMUInLFxyXG4gICAgICAgIGJhY2tncm91bmRfY29sb3I6ICcjMTgxYTFCJyxcclxuICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICdwd2EtMTkyeDE5Mi5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJ3B3YS01MTJ4NTEyLnBuZycsXHJcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFIsU0FBUyxvQkFBb0I7QUFDelQsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsZUFBZTtBQUN4QixPQUFPLGFBQWE7QUFDcEIsU0FBUyxZQUFZO0FBQ3JCLE9BQU8sVUFBVTtBQU5qQixJQUFNLG1DQUFtQztBQVV6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBRU4saUJBQWlCLEVBQUUsUUFBUSxLQUFLLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFRakMsS0FBSztBQUFBLE1BQ0gsVUFBVSxLQUFLLGtDQUFXLGVBQWU7QUFBQSxNQUN6QyxjQUFjO0FBQUEsUUFDWixTQUFTO0FBQUEsUUFDVCxPQUFPO0FBQUEsTUFDVDtBQUFBO0FBQUEsSUFFRixDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNRCxRQUFRO0FBQUEsTUFDTixRQUFRO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDUjtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFlBQ1AsS0FBSztBQUFBLFVBQ1A7QUFBQSxRQUNGO0FBQUEsUUFDQSxVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsTUFDWDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBRUQsUUFBUTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BRVYsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsV0FBVztBQUFBLFFBQ1gsU0FBUztBQUFBLFFBQ1QsYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBQ2Isa0JBQWtCO0FBQUEsUUFDbEIsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=