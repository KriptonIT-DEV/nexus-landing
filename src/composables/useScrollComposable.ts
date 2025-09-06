
import { useRouter } from "vue-router";
import { ref } from "vue";
import type { NavigationMenuItem } from '@nuxt/ui';

export interface PropItem {
    icon: string,
    id: string
    label: string
    to: string
}


function useScrollComposable() {
    const router = useRouter();
    const items = ref<NavigationMenuItem[][]>([
        [
            {
                label: 'Inicio',
                icon: 'i-lucide-house',
                id: 'home',
                to: '/',
                active: false
            },
            {
                label: '¿Porque nosotros?',
                icon: 'i-lucide-user-check',
                id: 'whyus',
                to: '/',
                active: false

            },
            {
                label: 'Servicios',
                icon: 'i-lucide-message-circle',
                id: 'services',
                to: '/',
                active: false
            },

            {
                label: 'Contacto',
                icon: 'i-lucide-phone',
                to: '/contacto',
                id: 'contact',
                active: false
            }
        ],
    ]);

    function toScrollRoute(value: PropItem) {

        for (let index = 0; index < items.value[0].length; index++) {
            const element = items.value[0][index];
            items.value[0][index].active = false

            if (element.id === value.id) {
                items.value[0][index].active = true
                router.push(value.to);
            }
        }

        if (value.id === 'home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        if (value.id === 'services') {
            window.scrollTo({
                top: 1600,
                behavior: 'smooth'
            });
        }


        if (value.id === 'whyus') {
            window.scrollTo({
                top: 800,
                behavior: 'smooth'
            });
        }

        if (value.id === 'contact') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }


    function toScrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }

    return { toScrollRoute, items, toScrollTop }
}

export { useScrollComposable }