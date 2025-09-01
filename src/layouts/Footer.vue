<script setup lang="ts">
import LogoSVG from "@assets/components/LogoSVG.vue";
// composables
import { useScrollComposable } from "@composables/useScrollComposable";
import type { PropItem } from "@composables/useScrollComposable";

const { toScrollRoute, items, toScrollTop } = useScrollComposable();

const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-gray-800 text-gray-300 py-12">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Logo y Sección de Derechos de Autor -->
      <div class="flex flex-col items-center md:items-start">
        <!-- Asumiendo que LogoSVG está en src/assets/components -->
        <div class="overflow-hidden w-[40%] h-20">
          <LogoSVG class="w-full h-full scale-200" />
        </div>
        <p class="text-sm">
          &copy; {{ year }} Konnect 360. Todos los derechos reservados.
        </p>
      </div>

      <!-- Sección de Enlaces de Navegación -->
      <div class="text-center md:text-left">
        <h4 class="text-lg font-semibold mb-4 text-primary-300">
          Enlaces rápidos
        </h4>
        <ul>
          <li
            v-for="(item, index) of items[0]"
            :key="index"
            class="mb-2"
          >
            <a
              href="#"
              class="hover:text-primary-300"
              @click.prevent="toScrollRoute(item as PropItem)"
            >{{ item.label }}</a>
          </li>
        </ul>
      </div>

      <!-- Sección de Enlaces de Navegación -->
      <div class="text-center md:text-left">
        <h4 class="text-lg font-semibold mb-4 text-primary-300">
          Datos y Privacidad
        </h4>
        <ul>
          <li class="mb-2">
            <ULink
              to="/privacidad"
              active-class="text-primary-300 underline"
              inactive-class="text-white"
              class="hover:text-primary-300"
              @click="toScrollTop"
            >
              Politicas de privacidad
            </ULink>
          </li>
          <li class="mb-2">
            <ULink
              to="/terminos"
              class="hover:text-primary-300"
              active-class="text-primary-300 underline"
              inactive-class="text-white"
              @click="toScrollTop"
            >
              Términos de uso
            </ULink>
          </li>
        </ul>
      </div>

      <!-- Sección de Redes Sociales/Contacto -->
      <div class="text-center md:text-left">
        <h4 class="text-lg font-semibold mb-4 text-primary-300">
          Síguenos
        </h4>
        <div class="flex justify-center md:justify-start space-x-4">
          <!-- Marcador de posición para iconos de redes sociales -->
          <a
            href="#"
            class="hover:text-primary"
          ><i class="fab fa-facebook" /></a>
          <a
            href="#"
            class="hover:text-primary"
          ><i class="fab fa-twitter" /></a>
          <a
            href="#"
            class="hover:text-primary"
          ><i class="fab fa-instagram" /></a>
        </div>
        <p class="mt-4 text-sm">
          Av.Mayor Andres Razuri N° 172<br>LIMA -SAN MIGUEL
        </p>
      </div>
    </div>
  </footer>
</template>

