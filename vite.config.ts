import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src' // 如果使用 @ 别名，确保与 tsconfig 一致
    }
  },
  assetsInclude: ['**/*.svg'] // 明确包含 SVG 文件
});