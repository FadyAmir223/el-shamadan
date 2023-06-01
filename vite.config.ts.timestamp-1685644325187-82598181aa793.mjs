// vite.config.ts
import { defineConfig } from "file:///E:/_PROGRAMMING/work/kero/client/node_modules/vite/dist/node/index.js";
import react from "file:///E:/_PROGRAMMING/work/kero/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { createHtmlPlugin } from "file:///E:/_PROGRAMMING/work/kero/client/node_modules/vite-plugin-html/dist/index.mjs";
import { VitePWA } from "file:///E:/_PROGRAMMING/work/kero/client/node_modules/vite-plugin-pwa/dist/index.js";
import Unfonts from "file:///E:/_PROGRAMMING/work/kero/client/node_modules/unplugin-fonts/dist/vite.mjs";
import webp from "file:///E:/_PROGRAMMING/work/kero/client/node_modules/vite-plugin-webp/lib/vite-plugin-webp.esm.js";
import { join } from "path";
import legacy from "file:///E:/_PROGRAMMING/work/kero/client/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\_PROGRAMMING\\work\\kero\\client";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({ minify: true }),
    legacy({
      targets: ["Chrome >= 49", "Firefox >= 78", "Safari >= 14", "Edge >= 88"]
      // 'defaults', 'not IE 11'
      // polyfills: ['es.promise', 'es.symbol'],
      // modernPolyfills: true,
    }),
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
  ],
  build: {
    emptyOutDir: true,
    target: "es2022"
  },
  base: "/el-shamadan/"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxfUFJPR1JBTU1JTkdcXFxcd29ya1xcXFxrZXJvXFxcXGNsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcX1BST0dSQU1NSU5HXFxcXHdvcmtcXFxca2Vyb1xcXFxjbGllbnRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L19QUk9HUkFNTUlORy93b3JrL2tlcm8vY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1odG1sJztcclxuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XHJcbmltcG9ydCBVbmZvbnRzIGZyb20gJ3VucGx1Z2luLWZvbnRzL3ZpdGUnO1xyXG4vLyBpbXBvcnQgeyBWaXRlSW1hZ2VPcHRpbWl6ZXIgfSBmcm9tICd2aXRlLXBsdWdpbi1pbWFnZS1vcHRpbWl6ZXInO1xyXG5pbXBvcnQgd2VicCBmcm9tICd2aXRlLXBsdWdpbi13ZWJwJztcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgbGVnYWN5IGZyb20gJ0B2aXRlanMvcGx1Z2luLWxlZ2FjeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBjcmVhdGVIdG1sUGx1Z2luKHsgbWluaWZ5OiB0cnVlIH0pLFxyXG5cclxuICAgIGxlZ2FjeSh7XHJcbiAgICAgIHRhcmdldHM6IFsnQ2hyb21lID49IDQ5JywgJ0ZpcmVmb3ggPj0gNzgnLCAnU2FmYXJpID49IDE0JywgJ0VkZ2UgPj0gODgnXSxcclxuICAgICAgLy8gJ2RlZmF1bHRzJywgJ25vdCBJRSAxMSdcclxuICAgICAgLy8gcG9seWZpbGxzOiBbJ2VzLnByb21pc2UnLCAnZXMuc3ltYm9sJ10sXHJcbiAgICAgIC8vIG1vZGVyblBvbHlmaWxsczogdHJ1ZSxcclxuICAgIH0pLFxyXG5cclxuICAgIHdlYnAoe1xyXG4gICAgICBvbmx5V2VicDogam9pbihfX2Rpcm5hbWUsICdwdWJsaWMvaW1hZ2VzJyksXHJcbiAgICAgIGltYWdlVHlwZTogWycucG5nJywgJy5qcGcnXSxcclxuICAgICAgc2hhcnRPcHRpb25zOiB7XHJcbiAgICAgICAgcXVhbGl0eTogNzAsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBWaXRlSW1hZ2VPcHRpbWl6ZXIoe1xyXG4gICAgLy8gICBwbmc6IHtcclxuICAgIC8vICAgICBxdWFsaXR5OiAxMCxcclxuICAgIC8vICAgfSxcclxuICAgIC8vIH0pLFxyXG5cclxuICAgIFVuZm9udHMoe1xyXG4gICAgICBjdXN0b206IHtcclxuICAgICAgICBmYW1pbGllczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnYWJkbycsXHJcbiAgICAgICAgICAgIGxvY2FsOiAnYWJkbycsXHJcbiAgICAgICAgICAgIHNyYzogJy4vc3JjL2Fzc2V0cy9mb250cy9hYmRvLnR0ZicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaW5qZWN0VG86ICdoZWFkLXByZXBlbmQnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdzd2FwJyxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG5cclxuICAgIFZpdGVQV0Eoe1xyXG4gICAgICByZWdpc3RlclR5cGU6ICdwcm9tcHQnLFxyXG4gICAgICBzdHJhdGVnaWVzOiAnaW5qZWN0TWFuaWZlc3QnLFxyXG4gICAgICBzcmNEaXI6ICdzcmMvYXNzZXRzJyxcclxuICAgICAgZmlsZW5hbWU6ICdzdy50cycsXHJcblxyXG4gICAgICBtYW5pZmVzdDoge1xyXG4gICAgICAgIG5hbWU6ICdlbC1zaGFtYWRhbicsXHJcbiAgICAgICAgc2hvcnRfbmFtZTogJ2VsLXNoYW1hZGFuJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ3JlLWJyYW5kaW5nIHRvIGVsLXNoYW1hZGFuIHdhZmVyIHByb2R1Y3RzJyxcclxuICAgICAgICBzdGFydF91cmw6ICcvZWwtc2hhbWFkYW4vJyxcclxuICAgICAgICBkaXNwbGF5OiAnc3RhbmRhbG9uZScsXHJcbiAgICAgICAgb3JpZW50YXRpb246ICdwb3J0cmFpdCcsXHJcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjMTgxYTFCJyxcclxuICAgICAgICBiYWNrZ3JvdW5kX2NvbG9yOiAnIzE4MWExQicsXHJcbiAgICAgICAgaWNvbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiAncHdhLTE5MngxOTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICdwd2EtNTEyeDUxMi5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxyXG4gICAgdGFyZ2V0OiAnZXMyMDIyJyxcclxuICB9LFxyXG4gIGJhc2U6ICcvZWwtc2hhbWFkYW4vJyxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFIsU0FBUyxvQkFBb0I7QUFDelQsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsZUFBZTtBQUN4QixPQUFPLGFBQWE7QUFFcEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsWUFBWTtBQUNyQixPQUFPLFlBQVk7QUFSbkIsSUFBTSxtQ0FBbUM7QUFVekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04saUJBQWlCLEVBQUUsUUFBUSxLQUFLLENBQUM7QUFBQSxJQUVqQyxPQUFPO0FBQUEsTUFDTCxTQUFTLENBQUMsZ0JBQWdCLGlCQUFpQixnQkFBZ0IsWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSXpFLENBQUM7QUFBQSxJQUVELEtBQUs7QUFBQSxNQUNILFVBQVUsS0FBSyxrQ0FBVyxlQUFlO0FBQUEsTUFDekMsV0FBVyxDQUFDLFFBQVEsTUFBTTtBQUFBLE1BQzFCLGNBQWM7QUFBQSxRQUNaLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUUQsUUFBUTtBQUFBLE1BQ04sUUFBUTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxZQUNQLEtBQUs7QUFBQSxVQUNQO0FBQUEsUUFDRjtBQUFBLFFBQ0EsVUFBVTtBQUFBLFFBQ1YsU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUVELFFBQVE7QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUVWLFVBQVU7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLFlBQVk7QUFBQSxRQUNaLGFBQWE7QUFBQSxRQUNiLFdBQVc7QUFBQSxRQUNYLFNBQVM7QUFBQSxRQUNULGFBQWE7QUFBQSxRQUNiLGFBQWE7QUFBQSxRQUNiLGtCQUFrQjtBQUFBLFFBQ2xCLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxhQUFhO0FBQUEsSUFDYixRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsTUFBTTtBQUNSLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
