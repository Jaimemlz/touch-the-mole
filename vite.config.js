import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/touch-the-mole/",
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true,
  },
  plugins: [
    VitePWA({
      manifest: {
        name: "Touch the Mole",
        short_name: "Mole",
        description: "A fun game to touch the mole",
        theme_color: "#ae7b56",
        background_color: "#ae7b56",
        start_url: "/touch-the-mole/",
        display: "standalone",
        icons: [
          {
            src: "/touch-the-mole/images/icon_topo_medium.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/touch-the-mole/images/icon_topo_medium.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg}"],
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
            },
          },
        ],
      },
    }),
  ],
});
