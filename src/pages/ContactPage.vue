<script setup lang="ts">
import type { StepperItem } from '@nuxt/ui';
import { useTemplateRef } from 'vue';

// components
import ContactForm from "./contact/ContactForm.vue";
import ContactFormConfig from "./contact/ContactFormConfig.vue";
import ContactFormReview from "./contact/ContactFormReview.vue";

const items: StepperItem[] = [
    {
        key: 'contact',
        title: 'Contacto',
        description: 'Provee tus datos de contacto',
        icon: 'i-lucide-contact-round'
    },
    {
        key: 'account',
        title: 'Configuracion',
        description: 'Configura tu cuenta de prueba',
        icon: 'i-lucide-layout-panel-top'
    },
    {
        key: 'finish',
        title: 'Envio',
        description: 'Revisa y confirma',
        icon: 'i-lucide-circle-check-big'
    }
];

const stepper = useTemplateRef('stepper');

</script>

<template>
  <main class="max-w-[var(--ui-container)] mx-auto my-[5%]">
    <div class="mt-30 mb-10 text-center ">
      <h1 class="text-3xl mb-5 underline-offset-8 underline decoration-primary font-semibold">
        Contacto
      </h1>
      <p>
        Estamos aquí para ayudarte dejanos tus datos y nos pondremos en contacto.
      </p>
    </div>

    <div class="w-full p-20 bg-default rounded-2xl">
      <UStepper
        ref="stepper"
        :items="items"
      >
        <template #content="{ item }">
          <div v-if="item.key === 'contact'">
            <ContactForm />
          </div>
          <div v-if="item.key === 'account'">
            <ContactFormConfig />
          </div>
          <div v-if="item.key === 'finish'">
            <ContactFormReview />
          </div>
        </template>
      </UStepper>

      <div class="flex gap-2 justify-between mx-20">
        <UButton
          size="lg"
          class="text-white"
          leading-icon="i-lucide-arrow-left"
          :disabled="!stepper?.hasPrev"
          @click="stepper?.prev()"
        >
          Anterior
        </UButton>

        <UButton
          size="lg"
          trailing-icon="i-lucide-arrow-right"
          class="text-white"
          :disabled="!stepper?.hasNext"
          @click="stepper?.next()"
        >
          Siguiente
        </UButton>
      </div>
    </div>
  </main>
</template>
