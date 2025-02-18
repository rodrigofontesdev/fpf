import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@static': path.resolve(__dirname, './src/static'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
})
