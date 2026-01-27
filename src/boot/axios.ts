import axios, { AxiosRequestConfig } from 'axios'
import { useAxios, UseAxiosOptions } from '@vueuse/integrations/useAxios'

const baseURL = import.meta.env.VITE_BASE_URL || 'https://localhost:8000'

const instance = axios.create({
    baseURL: `${baseURL}/api`,
})

export function useApi(url: string, config: AxiosRequestConfig = {}, options: Omit<UseAxiosOptions, 'instance'> = { immediate: false }) {
  return useAxios(url, config, instance, options)
}
