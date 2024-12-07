import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Gera sourcemaps para produção
  },
  server: {
    sourcemap: true, // Mantém sourcemaps durante o desenvolvimento
  },
})


