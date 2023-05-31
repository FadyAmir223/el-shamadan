// vite.config.ts
import { defineConfig } from "file:///E:/_PROGRAMMING/work/kero/client/node_modules/vite/dist/node/index.js";
import react from "file:///E:/_PROGRAMMING/work/kero/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { createHtmlPlugin } from "file:///E:/_PROGRAMMING/work/kero/client/node_modules/vite-plugin-html/dist/index.mjs";
import { VitePWA } from "file:///E:/_PROGRAMMING/work/kero/client/node_modules/vite-plugin-pwa/dist/index.js";
import Unfonts from "file:///E:/_PROGRAMMING/work/kero/client/node_modules/unplugin-fonts/dist/vite.mjs";
import webp from "file:///E:/_PROGRAMMING/work/kero/client/node_modules/vite-plugin-webp/lib/vite-plugin-webp.esm.js";
import { join } from "path";
var __vite_injected_original_dirname = "E:\\_PROGRAMMING\\work\\kero\\client";
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
        injectTo: "head-prepend",
        display: "swap"
      }
    }),
    VitePWA({
      registerType: "autoUpdate",
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
    emptyOutDir: true
  },
  base: "/el-shamadan/"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxfUFJPR1JBTU1JTkdcXFxcd29ya1xcXFxrZXJvXFxcXGNsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcX1BST0dSQU1NSU5HXFxcXHdvcmtcXFxca2Vyb1xcXFxjbGllbnRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L19QUk9HUkFNTUlORy93b3JrL2tlcm8vY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1odG1sJztcclxuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XHJcbmltcG9ydCBVbmZvbnRzIGZyb20gJ3VucGx1Z2luLWZvbnRzL3ZpdGUnO1xyXG4vLyBpbXBvcnQgeyBWaXRlSW1hZ2VPcHRpbWl6ZXIgfSBmcm9tICd2aXRlLXBsdWdpbi1pbWFnZS1vcHRpbWl6ZXInO1xyXG5pbXBvcnQgd2VicCBmcm9tICd2aXRlLXBsdWdpbi13ZWJwJztcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgY3JlYXRlSHRtbFBsdWdpbih7IG1pbmlmeTogdHJ1ZSB9KSxcclxuXHJcbiAgICB3ZWJwKHtcclxuICAgICAgb25seVdlYnA6IGpvaW4oX19kaXJuYW1lLCAncHVibGljL2ltYWdlcycpLFxyXG4gICAgICBpbWFnZVR5cGU6IFsnLnBuZycsICcuanBnJ10sXHJcbiAgICAgIHNoYXJ0T3B0aW9uczoge1xyXG4gICAgICAgIHF1YWxpdHk6IDcwLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gVml0ZUltYWdlT3B0aW1pemVyKHtcclxuICAgIC8vICAgcG5nOiB7XHJcbiAgICAvLyAgICAgcXVhbGl0eTogMTAsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9KSxcclxuXHJcbiAgICBVbmZvbnRzKHtcclxuICAgICAgY3VzdG9tOiB7XHJcbiAgICAgICAgZmFtaWxpZXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2FiZG8nLFxyXG4gICAgICAgICAgICBsb2NhbDogJ2FiZG8nLFxyXG4gICAgICAgICAgICBzcmM6ICcuL3NyYy9hc3NldHMvZm9udHMvYWJkby50dGYnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGluamVjdFRvOiAnaGVhZC1wcmVwZW5kJyxcclxuICAgICAgICBkaXNwbGF5OiAnc3dhcCcsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuXHJcbiAgICBWaXRlUFdBKHtcclxuICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXHJcbiAgICAgIHN0cmF0ZWdpZXM6ICdpbmplY3RNYW5pZmVzdCcsXHJcbiAgICAgIHNyY0RpcjogJ3NyYy9hc3NldHMnLFxyXG4gICAgICBmaWxlbmFtZTogJ3N3LnRzJyxcclxuXHJcbiAgICAgIG1hbmlmZXN0OiB7XHJcbiAgICAgICAgbmFtZTogJ2VsLXNoYW1hZGFuJyxcclxuICAgICAgICBzaG9ydF9uYW1lOiAnZWwtc2hhbWFkYW4nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAncmUtYnJhbmRpbmcgdG8gZWwtc2hhbWFkYW4gd2FmZXIgcHJvZHVjdHMnLFxyXG4gICAgICAgIHN0YXJ0X3VybDogJy9lbC1zaGFtYWRhbi8nLFxyXG4gICAgICAgIGRpc3BsYXk6ICdzdGFuZGFsb25lJyxcclxuICAgICAgICBvcmllbnRhdGlvbjogJ3BvcnRyYWl0JyxcclxuICAgICAgICB0aGVtZV9jb2xvcjogJyMxODFhMUInLFxyXG4gICAgICAgIGJhY2tncm91bmRfY29sb3I6ICcjMTgxYTFCJyxcclxuICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICdwd2EtMTkyeDE5Mi5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJ3B3YS01MTJ4NTEyLnBuZycsXHJcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBidWlsZDoge1xyXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXHJcbiAgfSxcclxuICBiYXNlOiAnL2VsLXNoYW1hZGFuLycsXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRSLFNBQVMsb0JBQW9CO0FBQ3pULE9BQU8sV0FBVztBQUNsQixTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLGVBQWU7QUFDeEIsT0FBTyxhQUFhO0FBRXBCLE9BQU8sVUFBVTtBQUNqQixTQUFTLFlBQVk7QUFQckIsSUFBTSxtQ0FBbUM7QUFTekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04saUJBQWlCLEVBQUUsUUFBUSxLQUFLLENBQUM7QUFBQSxJQUVqQyxLQUFLO0FBQUEsTUFDSCxVQUFVLEtBQUssa0NBQVcsZUFBZTtBQUFBLE1BQ3pDLFdBQVcsQ0FBQyxRQUFRLE1BQU07QUFBQSxNQUMxQixjQUFjO0FBQUEsUUFDWixTQUFTO0FBQUEsTUFDWDtBQUFBLElBQ0YsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVFELFFBQVE7QUFBQSxNQUNOLFFBQVE7QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUCxLQUFLO0FBQUEsVUFDUDtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFVBQVU7QUFBQSxRQUNWLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFFRCxRQUFRO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFFVixVQUFVO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixhQUFhO0FBQUEsUUFDYixXQUFXO0FBQUEsUUFDWCxTQUFTO0FBQUEsUUFDVCxhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUEsUUFDYixrQkFBa0I7QUFBQSxRQUNsQixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLE1BQU07QUFDUixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
