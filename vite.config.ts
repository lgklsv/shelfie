/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import mdx from '@mdx-js/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['istanbul']],
      },
    }),
    mdx(),
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    css: true,
    coverage: {
      include: ['src/**/*'],
      exclude: [
        'src/const/*',
        '**/*/@(index|config).@(tsx|ts)',
        '**/*/*.@(icon|asset|d|test).@(tsx|ts)',
        'src/entry-client.tsx',
        'src/entry-server.tsx',
      ],
      enabled: true,
      provider: 'c8',
      reporter: ['text'],
      all: true,
    },
  },
});
