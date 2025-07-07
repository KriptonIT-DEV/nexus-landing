<script setup lang="ts">
import { object, string, type InferType } from 'yup';
import type { FormSubmitEvent } from '@nuxt/ui';
import { reactive } from 'vue';

const schema = object({
    name: string().required('Ingrese nombre correctamente'),
    lastname: string().required('Ingrese apellido correctamente'),
    phone: string().required('Ingrese telefono correctamente'),
    email: string().email('Ingrese email correctamente').required('Ingrese email correctamente'),
    website: string()
        .required('Ingrese pagina web correctamente'),
    position: string()
        .required('Ingrese puesto correctamente')

})

type Schema = InferType<typeof schema>

const state = reactive({
    name: undefined,
    lastname: undefined,
    phone: undefined,
    website: undefined,
    position: undefined,
    email: undefined,
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
    console.log(event);
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="grid grid-cols-6 gap-5 my-10"
    @submit="onSubmit"
  >
    <div class="col-span-3">
      <UFormField
        size="xl"
        label="Nombres"
        name="name"
      >
        <UInput
          v-model="state.name"
          placeholder="Ejem: Diego Antoni"
          size="xl"
          class="w-full"
        />
      </UFormField>
    </div>
    <div class="col-span-3">
      <UFormField
        size="xl"
        label="Apellidos"
        name="lastname"
      >
        <UInput
          v-model="state.lastname"
          placeholder="Ejem: Devivanco Ganoza"
          size="xl"
          class="w-full"
        />
      </UFormField>
    </div>

    <div class="col-span-3">
      <UFormField
        label="Email corporativo"
        name="email"
      >
        <UInput
          v-model="state.email"
          placeholder="Ejem: transportes@12horas.com"
          trailing-icon="i-lucide-at-sign"
          size="xl"
          class="w-full"
        />
      </UFormField>
    </div>

    <div class="col-span-3">
      <UFormField
        size="xl"
        label="Nro de telefono (cel/tel)"
        name="phone"
      >
        <UInput
          v-model="state.phone"
          placeholder="Ejem: 999-777-666"
          size="xl"
          class="w-full"
        />
      </UFormField>
    </div>

    <div class="col-span-3">
      <UFormField
        size="xl"
        label="Web de la empresa"
        name="website"
      >
        <UInput
          v-model="state.website"
          placeholder="Ejem: www.transportes12horas.com"
          icon="i-lucide-home"
          size="xl"
          class="w-full"
        />
      </UFormField>
    </div>
    <div class="col-span-3">
      <UFormField
        size="xl"
        label="Puesto en la empresa"
        name="position"
      >
        <UInput
          v-model="state.position"
          placeholder="Ejem: Supervisor de logistica"
          size="xl"
          class="w-full"
        />
      </UFormField>
    </div>
  </UForm>
</template>
