import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // eternus24.github.io 는 루트(/)에서 서비스되므로 base: '/'
  base: '/',
})
