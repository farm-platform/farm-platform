// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 使用默认导入
import './style.css';

const app = createApp(App);
app.use(router);
app.mount('#app');