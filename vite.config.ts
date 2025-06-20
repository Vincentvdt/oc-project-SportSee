import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import vercel from "vite-plugin-vercel"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vercel()],
  vercel: {
    defaultMaxDuration: 30,
    expiration: 43200,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
  },
})
