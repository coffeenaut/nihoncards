import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url))
  },
  base: "/nihoncards",
  build: {
    outDir:"dist",
  }
})
