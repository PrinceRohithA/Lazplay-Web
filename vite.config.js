import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // default, but make sure it's set
  },
  server: {
    port: 3000, // local dev server (optional)
  },
  base: '/', // 👈 important for custom domains
})
