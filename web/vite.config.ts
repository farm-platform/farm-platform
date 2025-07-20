import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,  // 监听所有地址
    port: 5173,  // 确保端口匹配
    strictPort: true // 严格端口模式
  }
})