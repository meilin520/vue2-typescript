import Vue from 'vue';
import VueRouter, { Route, RouteConfig } from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/shop-category-view',
    name: 'ShopCategoryView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ShopCategoryView.vue'),
  },
  {
    path: '/shop-cart-view',
    name: 'ShopCartView',
    component: () => import('../views/ShopCartView.vue'),
  },
  {
    path: '/user-view',
    name: 'UserView',
    component: () => import('../views/UserView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
