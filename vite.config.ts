/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      include: ['src/**/*'],
      exclude: ['src/assets/*', 'src/const/*'],
      enabled: true,
      provider: 'istanbul',
      reporter: ['text'],
      all: true,
    },
  },
});
