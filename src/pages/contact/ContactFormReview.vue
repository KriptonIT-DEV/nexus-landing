<script setup lang="ts">
import { object, string, type InferType } from 'yup';
import type { FormSubmitEvent } from '@nuxt/ui';
import { reactive, ref } from 'vue';
import type { CheckboxGroupItem } from '@nuxt/ui'

const items = ref<CheckboxGroupItem[]>([
    {
        label: 'Busqueda en Google',
        iconsvg: 'chrome.svg',
        id: 'websearch'
    },
    {
        label: 'Chat IA',
        iconsvg: 'chatia.svg',
        id: 'chatia'
    },
    {
        label: 'Video de YouTube',
        iconsvg: 'youtube.svg',
        id: 'videoyoutube'
    },
    {
        label: 'LinkedIn',
        iconsvg: 'linkedin.svg',
        id: 'linkedin'
    },
    {
        label: 'Por recomendación',
        iconsvg: 'byrecomendation.svg',
        id: 'byrecomendation'
    },
    {
        label: 'Redes sociales',
        iconsvg: 'social.svg',
        id: 'bysocial'
    }
]);

const schema = object({
    options: string().required('Seleccione canales correctamente'),
    notifications: string(),
})

type Schema = InferType<typeof schema>

const state = reactive({
    options: undefined,
    notifications: undefined,
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
    console.log(event);
}
function getImageUrl(name: string) {
    const url = new URL(`../../assets/svgs/${name}`, import.meta.url).href
    return url;
}
</script>
<template>
  <UForm
    :schema="schema"
    :state="state"
    class="grid grid-cols-6 gap-5 my-10"
    @submit="onSubmit"
  >
    <div class="col-span-6 grid grid-cols">
      <div class="col-span-3">
        <UFormField
          size="xl"
          label="Por que medio digital llegaste a Konnect :"
          name="website"
        >
          <UCheckboxGroup
            v-model="state.options"
            color="primary"
            size="xl"
            variant="card"
            orientation="horizontal"
            value-key="id"
            :items="items"
            :ui="{
              fieldset: 'grid items-center mt-5 grid-cols-3 gap-5',
              item: 'flex items-center space-x-2',
            }"
          >
            <template #label="{ item }">
              <article class="flex items-center space-x-2">
                <img
                  :src="`${getImageUrl(item.iconsvg)}`"
                  :alt="item.id"
                  width="30"
                >
                <span>{{ item.label }}</span>
              </article>
            </template>
          </UCheckboxGroup>
        </UFormField>
      </div>
    </div>
    <div class="col-span-6">
      <div class="flex flex-col space-y-6">
        <UFormField
          size="xl"
          label="Deseas recibir notificaciones de Konnect"
          name="website"
        >
          <UCheckbox
            v-model="state.notifications"
            label="Recibirás avisos de las nuevas funcionalidades de Konnect360 va integrando"
          />
        </UFormField>
      </div>
    </div>
  </UForm>
</template>