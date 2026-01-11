import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/ProjetPerso/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
