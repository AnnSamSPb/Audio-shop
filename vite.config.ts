import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/Audio-shop/',
  
  server: {
    open: true,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@features': path.resolve(__dirname, './src/features'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@shared': path.resolve(__dirname, './src/shared'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css'],
  },
  
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  
  // build: {
  //   outDir: 'dist',
  //   sourcemap: false,
  //   rollupOptions: {
  //     input: path.resolve(__dirname, 'index.html'),
  //   },
  // },
})
