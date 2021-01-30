import Vue from 'vue';
import VueRouter from 'vue-router';
//#region imports
import Client from '@/views/client/Client.vue';
import RegisterClient from '@/views/registerClient/RegisterClient.vue';
//#endregion

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'client',
    component: Client
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterClient
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

export default router;
