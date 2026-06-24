import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
// Multi-page build: English at "/" (index.html) and Indonesian at "/id/" (id/index.html).
// Each is a real, separately crawlable HTML file with its own canonical + hreflang head,
// so both pages are indexable with no duplicate-content / canonical conflicts.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        id: path.resolve(__dirname, "id/index.html"),
        mp3: path.resolve(__dirname, "mp3/index.html"),
        idMp3: path.resolve(__dirname, "id/mp3/index.html"),
      },
    },
  },
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
