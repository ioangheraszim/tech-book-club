import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser', // switch from esbuild to terser for deeper compression
    terserOptions: {
      compress: {
        drop_console: true, // remove console.log
        drop_debugger: true, // remove debugger statements
      },
      format: {
        comments: false, // strip comments
      },
    },
    sourcemap: false, // optional: disable sourcemaps for smaller bundle
    chunkSizeWarningLimit: 600, // optional: raise warning threshold if needed
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.js', // or .ts if you're using TS
  },
})
