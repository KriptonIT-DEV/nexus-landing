<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'; // Import ref, onMounted, onBeforeUnmount, computed
import Navbar from "@layouts/Navbar.vue";
import Footer from "@layouts/Footer.vue";

const showScrollButton = ref(false); // Reactive variable to track scroll position indirectly

const handleScroll = () => {
    showScrollButton.value = window.scrollY > 350;
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling animation
    });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
  <UApp>
    <!-- class="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 h-screen" -->
    <div class="fixed inset-x-0 top-0 z-20 w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8  gap-3 ">
      <Navbar />
    </div>
    <!-- {{ showScrollButton }} -->
    <RouterView />

    <Footer />

    <!-- Scroll to Top Button -->
    <UButton
      icon="i-lucide-arrow-up"
      class="fixed text-white bottom-20 right-20 z-50 animate-duration-100"
      :class="showScrollButton ? 'animate-fade-in-left opacity-100' : 'animate-fade-out-right opacity-0'"
      color="primary"
      size="xl"
      @click="scrollToTop"
    />
  </UApp>
</template>

<style scoped>
/* Puedes añadir estilos globales o de layout aquí */
</style>