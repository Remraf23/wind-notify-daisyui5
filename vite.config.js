import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from "@vitejs/plugin-vue"; //add this line


export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
