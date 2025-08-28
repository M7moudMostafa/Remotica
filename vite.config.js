import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 50,
      },
    }),
  ],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.js$/,
    exclude: [],
  },
  server: {
    port: 3000,
    host: true,
    open: true,
    strictPort: true,
  },
  build: {
    outDir: "build",
    sourcemap: true,
    assetsDir: "assets",
    target: "es2015",
    chunkSizeWarningLimit: 500,
  },
});
