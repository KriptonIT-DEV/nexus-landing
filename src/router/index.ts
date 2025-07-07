import { createRouter, createWebHistory } from 'vue-router';


import HomePage from '@pages/HomePage.vue';
import AboutPage from '@pages/AboutPage.vue';
import ServicesPage from '@pages/ServicesPage.vue';
import ContactPage from '@pages/ContactPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/nosotros',
            name: 'about',
            component: AboutPage,
        },
        {
            path: '/servicios',
            name: 'services',
            component: ServicesPage,
        },
        {
            path: '/contacto',
            name: 'contact',
            component: ContactPage,
        },
    ],
});

export default router;
