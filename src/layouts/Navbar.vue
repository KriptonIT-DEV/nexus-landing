<script setup lang="ts">
// import { useColorMode } from '@vueuse/core'
import { ref, computed } from "vue";

// assets
import LogoSVG from "@assets/components/LogoSVG.vue";
// composables
import { useScrollComposable } from "@composables/useScrollComposable.ts";
import type { PropItem } from "@composables/useScrollComposable";

// const mode = useColorMode()
const mode = ref("light");

const themeCom = computed(() => {
	const isDark = mode.value === "dark";
	const icon = isDark ? "i-lucide-moon" : "i-lucide-sun";
	return {
		icon,
	};
});

const { items, toScrollRoute } = useScrollComposable();

function changeTheme(value: boolean) {
	mode.value = value ? "light" : "dark";
}

function redirectToLogin() {
	window.open(import.meta.env.VITE_URL_STATIC_APP_TENNANT, "_blank");
}
</script>

<template>
  <nav
    class="w-full bg-default flex items-center space-x-10 rounded-b-2xl px-5"
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
          @click.prevent="toScrollRoute(item as PropItem)"
        >
          <UIcon
            :name="item.icon || ''"
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
        @click="redirectToLogin"
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
