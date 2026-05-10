import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // On Vercel: base = '/' | On GitHub Pages: base = '/velo-website/'
  base: process.env.VERCEL ? '/' : '/velo-website/',
})
