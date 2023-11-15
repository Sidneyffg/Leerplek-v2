import { defineConfig } from "vite";
import path from "path";
import vike from "vike/plugin";
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
  resolve: {
    alias: {
      "#src": path.resolve("src")
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: 'import { h, Fragment } from "@honeyjs/dom/jsx-runtime"'
  },
  plugins: [
    vike(),
    inspect(),
    loader({
      effect: "import { createEffect } from '@honeyjs/dom'",
    })
  ],
  server: {
    host: true
  }
});