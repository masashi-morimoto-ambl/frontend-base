/// <reference types="vitest" />
// @vitest-environment jsdom
import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    environment: 'happy-dom',
    setupFiles: './vitest.setup.ts',
    testTimeout: 10000,
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './'),
    },
  },
})
