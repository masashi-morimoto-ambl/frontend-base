import { defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: [
      { find: '@/', replacement: `${__dirname}/src/` },
      { find: '~/', replacement: `${__dirname}/` },
    ],
  },
})
