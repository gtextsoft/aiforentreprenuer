import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: (id) => {
        // Exclude large video files from the build bundle
        return id.includes('.mp4') || id.includes('.webm') || id.includes('.mov');
      },
    },
    // Increase memory limit for build
    chunkSizeWarningLimit: 1000,
    // Exclude large assets from processing
    assetsInlineLimit: 0,
  },
  // Don't include video files in assets processing
  assetsInclude: [],
}));
