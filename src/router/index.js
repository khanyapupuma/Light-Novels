import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ReachUsView from '@/views/ReachUsView.vue';
import AdminView from '@/views/AdminView.vue';
import ProductsView from '@/views/ProductsView.vue';
import ProductDetails from '@/views/ProductDetails.vue';



const routes = [
  {
    path: '/user-admin',
    name: 'UserAdmin',
    component: () => import('@/views/UserAdmin.vue')
  },
  {
    path: '/products-admin',
    name: 'ProductsAdmin',
    component: () => import('@/views/ProductAdmin.vue')
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUsView.vue'),
  },
  {
    path: '/reach-us',
    name: 'ReachUs',
    component: ReachUsView
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsView
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsView,
  },
  {
    path: '/products/:id',
    name: 'ProductDetails',
    component: ProductDetails,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
