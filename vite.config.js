import { defineConfig } from "vite";
import path from "path";
import inspect from "vite-plugin-inspect";
import honey from "@honeyjs/core/plugin";
import loader from "@honeyjs/vite-loader";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    minify: true,
    emptyOutDir: true,
    manifest: true
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve("src") }
    ],
  },
  plugins: [
    inspect(),
    honey({
      addHMRAccept: true,
      transformCached: false
    }),
    loader({
      effect: "import { createEffect } from '@honeyjs/core'",
    })
  ],
  server: {
    host: true,
    strictPort: 5173,
    origin: "http://127.0.0.1:8080"
  }
});