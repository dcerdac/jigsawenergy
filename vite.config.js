import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        team: resolve(__dirname, 'team.html'),
        climatebase: resolve(__dirname, 'climatebase.html'),
      },
    },
  },
  server: {
    open: true
  }
});
