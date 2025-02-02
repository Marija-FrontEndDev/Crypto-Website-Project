import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  resolve: {
    alias: [
      { find: "@styles/", replacement: "/src/styles/"},
      { find: "@components/", replacement: "/src/components/"},
      { find: "@helpers/", replacement: "/src/helpers/"},
      { find: "@pages/", replacement: "/src/pages/"},
      { find: "@assets/", replacement: "/src/assets/"},
    ]
  }
})
