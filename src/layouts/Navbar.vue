<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { ref, computed } from "vue";
import type { NavigationMenuItem } from '@nuxt/ui';

// assets
import LogoSVG from "@assets/components/LogoSVG.vue";

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
            to: '/',
        },
        {
            label: 'Servicios',
            icon: 'i-lucide-message-circle',
            to: '/servicios',
        },
        {
            label: '¿Porque nosotros?',
            icon: 'i-lucide-user-check',
            to: '/nosotros',
        },
        {
            label: 'Contacto',
            icon: 'i-lucide-phone',
            to: '/contacto',
        }
    ],
])
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
        link: 'px-4 py-2'
      }"
    />

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
