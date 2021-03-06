import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'HomeView',
    meta: {
      switch: true,
    },
    component: HomeView,
  },
  {
    path: '/shop-category-view',
    name: 'ShopCategoryView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ShopCategoryView.vue'),
    children: [
      {
        path: '',
        meta: {
          switch: true,
        },
        name: 'ShopCategoryListVeiw',
        component: () => import('../views/ShopCategoryListView.vue'),
      },
    ],
  },
  {
    path: '/shop-goods-details-view',
    name: 'ShopGoodsDetailsView',
    meta: {
      switch: false,
    },
    component: () => import('../views/ShopGoodsDetailsView.vue'),
  },
  {
    path: '/shop-cart-view',
    name: 'ShopCartView',
    meta: {
      switch: true,
    },
    component: () => import('../views/ShopCartView.vue'),
  },
  {
    path: '/address-list-view',
    name: 'AddressListView',
    meta: {
      switch: false,
    },
    component: () => import('../views/AddressListView.vue'),
  },
  {
    path: '/address-list-edit-view/:type',
    name: 'AddressListEditView',
    meta: {
      switch: false,
    },
    component: () => import('../views/AddressListEditView.vue'),
  },
  {
    path: '/user-view',
    name: 'UserView',
    meta: {
      switch: true,
    },
    component: () => import('../views/UserView.vue'),
  },
  {
    path: '/user-edit-view',
    name: 'UserEditView',
    meta: {
      switch: true,
    },
    component: () => import('../views/UserEditView.vue'),
  },
  {
    path: '/coupon-list-view',
    name: 'CouponListView',
    meta: {
      switch: false,
    },
    component: () => import('../views/CouponListView.vue'),
  },
  {
    path: '/feedback-view',
    name: 'FeedbackView',
    meta: {
      switch: false,
    },
    component: () => import('../views/FeedbackView.vue'),
  },
  {
    path: '/setting-view',
    name: 'SettingView',
    meta: {
      switch: false,
    },
    component: () => import('../views/SettingView.vue'),
  },
  {
    path: '/setting-account-safe-view',
    name: 'SettingAccountSafeView',
    meta: {
      switch: false,
    },
    component: () => import('../views/SettingAccountSafeView.vue'),
  },
  {
    path: '/account-safe-view',
    name: 'AccountSafeView',
    meta: {
      switch: false,
    },
    component: () => import('../views/AccountSafeView.vue'),
  },
];

// ?????????????????????????????????tabBar??????vue-router???3.0????????????????????????????????????????????????
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location: string): any {
  return originalPush.call(this, location);
};

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
