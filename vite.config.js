import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@styles': '/src/styles',
      '@pages': '/src/pages',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@assets': '/src/assets',
      '@utils' : '/src/utils'
    }
  }, 
  server: {
    port: 21334
  }
})
