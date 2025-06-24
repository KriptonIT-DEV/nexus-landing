import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

import { fileURLToPath, URL } from 'node:url'

import ui from "@nuxt/ui/vite"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        ui({
            ui: {
                colors: {
                    primary: "green",
                    neutral: "slate"
                }
            }
        })
    ],
    resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
          '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
          '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
          '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
          '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
          '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
          '@stores': fileURLToPath(new URL('./src/stores', import.meta.url))
        }
    }
})
