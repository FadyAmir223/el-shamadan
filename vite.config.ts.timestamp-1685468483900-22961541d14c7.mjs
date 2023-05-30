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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxfUFJPR1JBTU1JTkdcXFxcd29ya1xcXFxrZXJvXFxcXGNsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcX1BST0dSQU1NSU5HXFxcXHdvcmtcXFxca2Vyb1xcXFxjbGllbnRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L19QUk9HUkFNTUlORy93b3JrL2tlcm8vY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1odG1sJztcclxuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XHJcbmltcG9ydCBVbmZvbnRzIGZyb20gJ3VucGx1Z2luLWZvbnRzL3ZpdGUnO1xyXG4vLyBpbXBvcnQgeyBWaXRlSW1hZ2VPcHRpbWl6ZXIgfSBmcm9tICd2aXRlLXBsdWdpbi1pbWFnZS1vcHRpbWl6ZXInO1xyXG5pbXBvcnQgd2VicCBmcm9tICd2aXRlLXBsdWdpbi13ZWJwJztcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgY3JlYXRlSHRtbFBsdWdpbih7IG1pbmlmeTogdHJ1ZSB9KSxcclxuXHJcbiAgICB3ZWJwKHtcclxuICAgICAgb25seVdlYnA6IGpvaW4oX19kaXJuYW1lLCAncHVibGljL2ltYWdlcycpLFxyXG4gICAgICBpbWFnZVR5cGU6IFsnLnBuZycsICcuanBnJ10sXHJcbiAgICAgIHNoYXJ0T3B0aW9uczoge1xyXG4gICAgICAgIHF1YWxpdHk6IDcwLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gVml0ZUltYWdlT3B0aW1pemVyKHtcclxuICAgIC8vICAgcG5nOiB7XHJcbiAgICAvLyAgICAgcXVhbGl0eTogMTAsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9KSxcclxuXHJcbiAgICBVbmZvbnRzKHtcclxuICAgICAgY3VzdG9tOiB7XHJcbiAgICAgICAgZmFtaWxpZXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2FiZG8nLFxyXG4gICAgICAgICAgICBsb2NhbDogJ2FiZG8nLFxyXG4gICAgICAgICAgICBzcmM6ICcuL3NyYy9hc3NldHMvZm9udHMvYWJkby50dGYnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGluamVjdFRvOiAnaGVhZC1wcmVwZW5kJyxcclxuICAgICAgICBkaXNwbGF5OiAnc3dhcCcsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuXHJcbiAgICBWaXRlUFdBKHtcclxuICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXHJcbiAgICAgIHN0cmF0ZWdpZXM6ICdpbmplY3RNYW5pZmVzdCcsXHJcbiAgICAgIGZpbGVuYW1lOiAnc3cudHMnLFxyXG4gICAgICBtYW5pZmVzdDoge1xyXG4gICAgICAgIG5hbWU6ICdlbC1zaGFtYWRhbicsXHJcbiAgICAgICAgc2hvcnRfbmFtZTogJ2VsLXNoYW1hZGFuJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ3JlLWJyYW5kaW5nIHRvIGVsLXNoYW1hZGFuIHdhZmVyIHByb2R1Y3RzJyxcclxuICAgICAgICBzdGFydF91cmw6ICcvZWwtc2hhbWFkYW4vJyxcclxuICAgICAgICBkaXNwbGF5OiAnc3RhbmRhbG9uZScsXHJcbiAgICAgICAgb3JpZW50YXRpb246ICdwb3J0cmFpdCcsXHJcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjMTgxYTFCJyxcclxuICAgICAgICBiYWNrZ3JvdW5kX2NvbG9yOiAnIzE4MWExQicsXHJcbiAgICAgICAgaWNvbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiAncHdhLTE5MngxOTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICdwd2EtNTEyeDUxMi5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxyXG4gIH0sXHJcbiAgYmFzZTogJy9lbC1zaGFtYWRhbi8nLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0UixTQUFTLG9CQUFvQjtBQUN6VCxPQUFPLFdBQVc7QUFDbEIsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sYUFBYTtBQUVwQixPQUFPLFVBQVU7QUFDakIsU0FBUyxZQUFZO0FBUHJCLElBQU0sbUNBQW1DO0FBU3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGlCQUFpQixFQUFFLFFBQVEsS0FBSyxDQUFDO0FBQUEsSUFFakMsS0FBSztBQUFBLE1BQ0gsVUFBVSxLQUFLLGtDQUFXLGVBQWU7QUFBQSxNQUN6QyxXQUFXLENBQUMsUUFBUSxNQUFNO0FBQUEsTUFDMUIsY0FBYztBQUFBLFFBQ1osU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFRRCxRQUFRO0FBQUEsTUFDTixRQUFRO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDUjtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sT0FBTztBQUFBLFlBQ1AsS0FBSztBQUFBLFVBQ1A7QUFBQSxRQUNGO0FBQUEsUUFDQSxVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsTUFDWDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBRUQsUUFBUTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsWUFBWTtBQUFBLE1BQ1osVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsV0FBVztBQUFBLFFBQ1gsU0FBUztBQUFBLFFBQ1QsYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBQ2Isa0JBQWtCO0FBQUEsUUFDbEIsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxNQUFNO0FBQ1IsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
