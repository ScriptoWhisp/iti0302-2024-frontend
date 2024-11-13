// src/routes/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Login from '@/views/Login.vue';
import UserPage from '@/views/UserPage.vue';
import UserProductsPage from '@/views/UserProductsPage.vue';
import ProductCreatePage from '@/views/ProductCreatePage.vue';
import ProductPage from '@/views/ProductPage.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/user',
        name: 'User',
        component: UserPage
    },
    {
      path: '/user/:id/products',
      name: 'UserProducts',
      component: UserProductsPage,
      props: true
    },
    // {
    //   path: '/user/products',
    //   name: 'UserOwnProducts',
    //   component: UserProductsPage
    //
    // },
    {
        path: '/user/createproduct',
        name: 'CreateProduct',
        component: ProductCreatePage
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: ProductPage,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;