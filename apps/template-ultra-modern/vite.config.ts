import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@smartbooking/booking': path.resolve(__dirname, '../../libs/booking/src'),
      '@smartbooking/sections': path.resolve(__dirname, '../../libs/sections/src'),
    },
  },
})
