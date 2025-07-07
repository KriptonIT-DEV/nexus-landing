<script setup lang="ts">
import { object, string, type InferType } from 'yup';
import type { FormSubmitEvent } from '@nuxt/ui';
import { reactive, ref } from 'vue';
import type { CheckboxGroupItem } from '@nuxt/ui'

const items = ref<CheckboxGroupItem[]>(['WhatsApp', 'Messenger', 'Instagram', 'Web widget'])
const itemsSelect = ref<CheckboxGroupItem[]>(['1-5', '5-10', '+10'])

const schema = object({
    channels: string().required('Seleccione canales correctamente'),
    num_agents: string().required('Ingrese nro de agentes correctamente'),
    description: string().required('Ingrese descripcion correctamente'),
})

type Schema = InferType<typeof schema>

const state = reactive({
    channels: undefined,
    num_agents: undefined,
    description: undefined,
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
    <div class="col-span-3 grid grid-cols">
      <div class="col-span-3">
        <UFormField
          size="xl"
          label="Selecciona que canales deseas:"
          name="website"
        >
          <UCheckboxGroup
            color="primary"
            size="xl"
            variant="card"
            orientation="horizontal"
            :default-value="['WhatsApp']"
            :items="items"
            :ui="{
              fieldset: 'grid items-center mt-5 grid-cols-2 gap-5'
            }"
          >
            <template #description="{ item }">
              <span>{{ item }}</span>
            </template>
          </UCheckboxGroup>
        </UFormField>
      </div>
    </div>
    <div class="col-span-3">
      <div class="flex flex-col space-y-6">
        <UFormField
          size="xl"
          label="Nro de agentes"
          name="website"
        >
          <USelect
            v-model="state.num_agents"
            icon="i-lucide-users"
            size="xl"
            class="w-full"
            placeholder="Ejem: 1-5"
            :items="itemsSelect"
          />
        </UFormField>
        <UFormField
          size="xl"
          label="Cuéntanos, ¿cómo te ayudaran nuestras soluciones?"
          name="position"
        >
          <UTextarea
            v-model="state.description"
            placeholder="Ejem: Atender tickets de ventas en WhatsApp"
            size="xl"
            class="w-full"
          />
        </UFormField>
      </div>
    </div>
  </UForm>
</template>
