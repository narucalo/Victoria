import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true, // Enable source maps for easier debugging
  },
  server: {
    hmr: {
      overlay: false, // Disable the overlay for HMR errors
    },
  },
});
