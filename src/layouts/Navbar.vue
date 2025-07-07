<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { ref, computed } from "vue";
import type { NavigationMenuItem } from '@nuxt/ui';

import { useRouter } from "vue-router";

// assets
import LogoSVG from "@assets/components/LogoSVG.vue";

interface PropItem {
    icon: string,
    id: string
    label: string
    to: string
}

const router = useRouter();

const mode = useColorMode()
const themeCom = computed(() => {
    const isDark = mode.value === 'dark';
    const icon = isDark ? 'i-lucide-moon' : 'i-lucide-sun'
    return {
        icon,
    }
})

function changeTheme(value: boolean) {
    mode.value = value ? 'light' : 'dark'
}

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


function redirectToScroll(value: PropItem) {
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

</script>

<template>
  <nav
    class="w-full bg-default flex items-center space-x-10 border-x border-b rounded-b-2xl border-default shadow-lg px-5"
  >
    <!-- logo -->
    <div class="overflow-hidden w-[22%] h-20">
      <LogoSVG class="w-full h-full scale-200" />
    </div>

    <UNavigationMenu
      color="neutral"
      class="w-full"
      :items="items"
      :ui="{
        list: 'space-x-3',
        link: 'p-0',
      }"
    >
      <template #item="{ item }">
        <div
          class="flex space-x-2 px-3 py-2 items-center"
          @click.prevent="redirectToScroll(item as PropItem)"
        >
          <UIcon
            :name="item.icon"
            class="size-5"
          />
          <span>
            {{ item.label }}
          </span>
        </div>
      </template>
    </UNavigationMenu>

    <div class="flex space-x-5 items-center">
      <!-- to the tennat app -->
      <UButton
        size="xl"
        color="primary"
        label="Inicia sesion"
        class="text-white"
      />

      <!-- theme -->
      <UButton
        size="xl"
        color="neutral"
        variant="ghost"
        :icon="themeCom.icon"
        @click="changeTheme(mode === 'dark')"
      />
    </div>
  </nav>
</template>
