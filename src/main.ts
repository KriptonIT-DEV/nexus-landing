import "./assets/main.css"

import { createApp } from "vue"
import uiPlugin from "@nuxt/ui/vue-plugin"

import App from "./App.vue"
import router from './router' // Importamos la instancia del router desde src/router/index.ts

const app = createApp(App)

app.use(uiPlugin)
app.use(router) // Usamos la instancia del router importada

app.mount("#app")