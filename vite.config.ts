import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 强制指定绝对路径（确保路径正确）
      '@': path.resolve(__dirname, 'web/src')
    }
  },
  server: {
    port: 5173, // 确保端口一致
    strictPort: true // 端口被占用时直接失败，避免混淆
  }
})