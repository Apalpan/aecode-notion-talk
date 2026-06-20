import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path para GitHub Pages: https://apalpan.github.io/aecode-notion-talk/
export default defineConfig({
  base: '/aecode-notion-talk/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: { react: ['react', 'react-dom'] },
      },
    },
  },
})
