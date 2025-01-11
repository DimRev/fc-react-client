/// <reference types="vitest" />
import path from "path";
import { defineConfig, type UserConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() as UserConfig["plugins"]],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true, // Enable global test APIs
    environment: "jsdom", // Set test environment to jsdom
    setupFiles: "./src/test/setup.ts", // Path to setup file (if any)
    css: true, // Enable processing of CSS
  },
});
