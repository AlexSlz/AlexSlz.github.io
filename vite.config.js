import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});

/*
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

  resolve: {
    alias: {
      '#components': resolve(dirname(fileURLToPath(import.meta.url)), 'src/components'),
    },
  },

*/
