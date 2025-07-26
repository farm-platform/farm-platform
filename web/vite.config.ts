import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      onwarn(warning, defaultHandler) {
        // 添加空值检查
        if (warning.code && (warning.code.startsWith('TS_') || warning.code === 'UNUSED_EXTERNAL_IMPORT')) {
          return
        }
        defaultHandler(warning)
      }
    }
  }
})