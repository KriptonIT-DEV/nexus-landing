<script setup lang="ts">
const whyUsFeatures = [
    { icon: 'i-lucide-brain', text: 'IA Chat' },
    { icon: 'i-lucide-message-circle', text: 'Tickets' },
    { icon: 'i-lucide-book', text: 'Datos' },
];

const services = [
    {
        icon: 'i-lucide-message-circle',
        title: 'Gestion de canales',
        description: 'Proveemos alrededor de 4 canales para maximizar el alcance de la atención al cliente en tu compñia.'
    },
    {
        icon: 'i-lucide-brain',
        title: 'IA Bot Chat',
        description: 'Integra tus chats con nuestro IA Bot, que te ayudara a recopilar informacion de los datos de tus clientes y proveer una atencion mas personalizada.'
    },
    {
        icon: 'i-lucide-book-key',
        title: 'Control de Gestión',
        description: 'Obten datos estadisticos de tus colaboradores y maximiza la atención sobre tickets de alta prioridad o rapida atención.'
    },
    {
        icon: 'i-lucide-webhook',
        title: 'Apis y Webhooks',
        description: 'Proveemos maximo control sobre el flujo de datos en tus tickets con la integración de REST - Apis y Webhooks de tus canales.'
    }
];
</script>

<template>
  <section
    class="bg-no-repeat bg-cover h-screen bg-[right_50%_bottom_0%]"
    style="background-image: url('/src/assets/imgs/banner-main.png'); "
  />
  <div class="max-w-[var(--ui-container)] mx-auto">
    <section class="absolute z-10 inset-0 justify-evenly size-full flex items-center">
      <div class="flex flex-col space-y-10">
        <div class="text-6xl flex-col space-y-4 font-bold text-white">
          <h1>
            El <span class="underline underline-offset-4 ">CRM</span> más fácil
          </h1>
          <h1>
            que hay.
          </h1>
        </div>
        <div class="flex space-x-3">
          <UButton
            size="xl"
            variant="subtle"
            color="neutral"
          >
            Nosotros
          </UButton>
          <UButton
            size="xl"
            color="primary"
            class="text-white"
            trailing-icon="i-lucide-arrow-right"
          >
            Agendar demo
          </UButton>
        </div>
        <!-- social -->
        <article class="flex-col space-y-2">
          <div class="font-bold text-white text-sm">
            Visitanos en:
          </div>
          <div class="flex space-x-2">
            <UButton
              size="xl"
              color="neutral"
              variant="link"
              class="bg-gradient-to-br from-blue-500 to-blue-400 text-white hover:text-white"
              icon="i-lucide-facebook"
            />
            <UButton
              size="xl"
              color="neutral"
              variant="link"
              class=" bg-gradient-to-br from-orange-500 to-orange-400 text-white hover:text-white"
              icon="i-lucide-instagram"
            />
            <UButton
              size="xl"
              color="neutral"
              variant="link"
              class="bg-gradient-to-br from-gray-500 to-gray-400 text-white hover:text-white"
              icon="i-lucide-link"
            />
          </div>
        </article>
      </div>
      <aside class="size-1/6" />
    </section>

    <!-- floating button home -->
    <div class="absolute bottom-10 z-10 left-0 right-0 flex justify-center">
      <UButton
        size="xl"
        variant="ghost"
        class="text-white scale-150 cursor-pointer size-5
        animate-fade-in-down animate-iteration-count-infinite animate-duration-[2.5s]
        "
        icon="i-lucide-arrow-down"
      />
    </div>
    <!-- floating button home -->

    <main class="mt-16">
      <!-- porque nosotros -->
      <section class="my-16 px-14 py-16 bg-muted/60 border border-muted rounded-3xl ">
        <div class="mb-10">
          <div class="text-center flex flex-col space-y-4">
            <h1 class="text-4xl underline underline-offset-10 decoration-primary-500">
              ¿Porque nosotros?
            </h1>
            <p class="text-dimmed">
              (Toma el control y provee atención personalizada)
            </p>
          </div>
        </div>
        <!-- Image and text for Services section -->
        <div class="grid grid-cols-4 gap-x-20 items-center">
          <picture class="col-span-2">
            <img
              src="@assets/imgs/image-laptop.png"
              alt="Services image"
            >
          </picture>
          <article class="col-span-2 space-y-9">
            <p class="text-2xl font-semibold">
              Bienvenido a <span class="bg-primary-600 px-2 pb-1  text-white">Konnect 360</span>
            </p>
            <p class="text-lg max-w-2xl">
              Konnect 360 cree que no se trata solo de tecnología o negocios,sino de liberar el
              potencial inherente en cada individuo y organización a través de la innovación.
              Konnect 360 no solo busca crear soluciones tecnológicas, sino también inspirar y
              habilitar a las personas y empresas para que descubran su propio poder oculto
              y lo utilicen para forjar un futuro mejor.
            </p>

            <div class="grid grid-cols-6">
              <div
                v-for="feature in whyUsFeatures"
                :key="feature.text"
                class="col-span-2 flex justify-center"
              >
                <div
                  class="p-2 shadow-md size-20 flex flex-col items-center justify-center bg-gradient-to-tl from-primary-500 via-primary-300 to-primary-500 text-white rounded-xl"
                >
                  <UIcon
                    :name="feature.icon"
                    class="size-5 mb-2"
                  />
                  <p>{{ feature.text }}</p>
                </div>
              </div>
            </div>

            <div class="text-center italic">
              <p>
                "Aumente sus leads y obtenga mas ventas con nuestra
              </p>
              <p>
                integración avanzada y personalizada"
              </p>
            </div>
          </article>
        </div>
      </section>

      <!-- servicios -->
      <section class="py-10">
        <div class="text-start flex flex-col space-y-7">
          <h1 class="text-4xl  underline underline-offset-10  decoration-primary">
            Servicios
          </h1>
          <p class="text-dimmed">
            (Estamos comprometidos con el emergente cambio en la industria)
          </p>
        </div>
      </section>
      <section class="mb-16">
        <!-- Image and text for Services section -->
        <div class="grid grid-cols-4 gap-x-20 items-center">
          <article class="col-span-2 space-y-9">
            <div class="grid grid-cols-6 gap-10">
              <div
                v-for="service in services"
                :key="service.title"
                class="col-span-3 flex justify-center"
              >
                <div
                  class="p-6 inset-shadow inset-2 border border-muted flex flex-col items-center justify-center bg-gradient-to-bl from-default to-muted rounded-xl"
                >
                  <UIcon
                    :name="service.icon"
                    class="size-15 mb-2 text-primary"
                  />
                  <p class="uppercase font-bold my-4 text-primary-gradient">
                    {{ service.title }}
                  </p>
                  <p>{{ service.description }}</p>
                </div>
              </div>
            </div>

            <div class="text-center italic">
              <p>
                "Toma el control toal de tu plataforma"
              </p>
            </div>
          </article>
          <picture class="col-span-2 relative flex justify-center">
            <img
              class="w-2/3"
              src="@assets/imgs/image-mobile.png"
              alt="Services image"
            >

            <div class="absolute left-0 space-y-7">
              <div
                class="translate-x-22 animate-iteration-count-infinite animate-bouncing animate-duration-[2s]"
              >
                <UIcon
                  name="i-lucide-message-square-share"
                  class="size-11 mb-2 text-white bg-gradient-to-bl from-primary-200 to-primary p-2.5 rounded-xl"
                />
              </div>

              <div
                class="translate-x-8 animate-iteration-count-infinite animate-horizontal-bounce animate-duration-[3s] animate-delay-150"
              >
                <UIcon
                  name="i-lucide-messages-square"
                  class="size-12 rotate-12 mb-2 text-white bg-gradient-to-bl from-primary-200 to-primary p-2.5 rounded-xl"
                />
              </div>

              <div
                class="translate-x-20 animate-iteration-count-infinite animate-bouncing animate-delay-150 animate-duration-[2.5s]"
              >
                <UIcon
                  name="i-lucide-blocks"
                  class="size-11 -rotate-12 mb-2 text-white bg-gradient-to-bl from-primary-200 to-primary p-2.5 rounded-xl"
                />

              </div>
            </div>
          </picture>
        </div>
      </section>

      <!-- contacto -->
      <section class="my-16 py-10 bg-gradient-to-tr from-primary-400 to-muted rounded-xl">
        <div class="text-center text-white text-3xl space-y-5 ">
          <div>
            <p>
              Ponte en contacto con nosotros
            </p>
            <p class="text-sm mt-3">
              (Nuestro equipo estará encantado de ayudarte)
            </p>
          </div>

          <UButton
            size="xl"
            variant="solid"
            class="text-primary bg-white hover:text-white p-3"
            icon="i-lucide-arrow-right"
          >
            Contacto
          </UButton>
        </div>
      </section>

      <!-- Nuestros clientes -->
      <section class="py-10">
        <div class="text-end flex flex-col space-y-7">
          <h1 class="text-4xl  underline underline-offset-10  decoration-primary">
            Konnect
          </h1>
          <p class="text-dimmed">
            (Nuestro compromiso y proyecciones)
          </p>
        </div>
        <!-- TODO: Add client logos or testimonials here -->
        <section class="grid grid-cols-4 gap-10 my-16">
          <div class="col-span-2 flex items-center">
            <img
              class="w-2/3"
              src="@assets/svgs/planning.svg"
              alt="Services planning"
            >
          </div>
          <div class="col-span-2 flex flex-col space-y-10">
            <div class="p-6 shadow-xl bg-muted rounded-xl text-center space-y-4 border border-primary-500">
              <div class="flex justify-center items-center gap-x-2">
                <UIcon
                  name="i-lucide-rocket"
                  class="size-7 text-primary"
                />
                <h2 class="text-2xl font-bold text-primary-gradient ">
                  Misión
                </h2>
              </div>
              <p>
                Nuestra visión es ser líderes
                reconocidos en la industria,
                distinguiéndonos por nuestra dedicación
                a la excelencia y la mejora continua.
              </p>

              <ul class="flex justify-center gap-5 text-primary-gradient ">
                <li>
                  - Experiencia
                </li>
                <li>
                  - Mejora continua
                </li>
                <li>
                  - Innovación
                </li>
              </ul>
            </div>

            <div class="p-6 shadow-xl bg-muted rounded-xl text-center space-y-4 border border-primary-500">
              <div class="flex justify-center items-center gap-x-2">
                <UIcon
                  name="i-lucide-bar-chart-4"
                  class="size-7 text-primary"
                />
                <h2 class="text-2xl font-bold text-primary-gradient ">
                  Visión
                </h2>
              </div>
              <p>
                Nuestra visión es ser líderes
                reconocidos en la industria,
                distinguiéndonos por nuestra dedicación
                a la excelencia y la mejora continua.
              </p>
              <ul class="flex justify-center gap-5 text-primary-gradient ">
                <li>
                  - Experiencia
                </li>
                <li>
                  - Mejora continua
                </li>
                <li>
                  - Innovación
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </main>
  </div>
</template>