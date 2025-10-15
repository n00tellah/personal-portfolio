import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/personal-portfolio/', // Replace with your actual repository name
  plugins: [react()],
})
