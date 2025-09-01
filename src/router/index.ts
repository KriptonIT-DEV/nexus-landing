import { createRouter, createWebHistory } from 'vue-router';


import HomePage from '@pages/HomePage.vue';
import AboutPage from '@pages/AboutPage.vue';
import ServicesPage from '@pages/ServicesPage.vue';
import ContactPage from '@pages/ContactPage.vue';
import TermsPage from "@pages/TermsPage.vue";
import PrivacyPage from "@pages/PrivacyPage.vue";

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
        {
            path: '/terminos',
            name: 'terms',
            component: TermsPage,
        },
        {
            path: '/privacidad',
            name: 'privacy',
            component: PrivacyPage,
        }
    ],
});

export default router;
