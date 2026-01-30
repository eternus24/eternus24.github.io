import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages: 저장소 이름이 다르면 아래 값을 변경하세요 (예: '/my-portfolio/')
  base: '/eternus24/',
})
