import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: update this base path to your GitHub repo name, e.g. '/nvr-constructions/'
  base: '/nvr/',
  build: {
    sourcemap: false,
  },
})
