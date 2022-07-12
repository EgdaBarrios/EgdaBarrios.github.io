import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import PPEInspector from '../pages/PPEInspector.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/PPE-Inspector',
    name: 'PPEInspector',
    component: PPEInspector,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
