import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dotenv from 'dotenv';

// Load environment variables from custom path
dotenv.config({ path: path.resolve(__dirname, 'config/.env') });

export default defineConfig({
  plugins: [react()],
  //to let vite recognizes the shared types
  resolve: {
    alias: {
      '@prodview/shared-types': path.resolve(__dirname, '../../packages/shared-types/src/index.ts'),
    },
  },
})
