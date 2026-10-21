import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig({
  base: '/Cambridge-Rentals/',
  plugins: [react(), eslint()],
  server: {
    port: 3001,
  }
})
