import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // 示例组件
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});
export default router;
// (Removed duplicate ImportMeta declaration to avoid type conflicts with Vite)
