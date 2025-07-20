// router/index.ts
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Fields from '../views/Fields.vue';
import Predict from '../views/Predict.vue';
import Logistics from '../views/Logistics.vue';
import Alert from '../views/Alert.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/fields'
  },
  {
    path: '/fields',
    name: 'Fields',
    component: Fields
  },
  {
    path: '/predict',
    name: 'Predict',
    component: Predict
  },
  {
    path: '/logistics',
    name: 'Logistics',
    component: Logistics
  },
  {
    path: '/alert',
    name: 'Alert',
    component: Alert
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router; // 确保默认导出