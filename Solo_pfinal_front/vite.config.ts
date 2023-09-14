import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'components': path.resolve('src', 'components'),
      'pages': path.resolve('src', 'pages'),
      'assets': path.resolve('src', 'assets'),
      'theme': path.resolve('src', 'theme')
    }
  }
})
