import { defineConfig } from "vite";
import inspect from "vite-plugin-inspect";
import loader from "@honeyjs/vite-loader";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    minify: true,
    emptyOutDir: true,
    manifest: true
  },
  plugins: [
    inspect(),
    loader()
  ],
  server: {
    host: true,
    strictPort: 5173,
    origin: "http://127.0.0.1:8080"
  },
});