// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Mini_InstaPay_Frontend/" // 👈 this is ESSENTIAL for GitHub Pages
});
