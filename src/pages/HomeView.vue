<template>
  <div class="home">
    <h1>Página de inicio</h1>
    <p>Bienvenido a tu aplicación Vue.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}
</style>
