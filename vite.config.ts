import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'react', test: /node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/ },
            { name: 'ui', test: /node_modules[\\/](@base-ui|@floating-ui|cmdk|lucide-react)[\\/]/ },
            { name: 'charts', test: /node_modules[\\/](recharts|d3-.*|victory-vendor)[\\/]/ },
          ],
        },
      },
    },
  },
})
