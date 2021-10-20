import { NuxtAxiosInstance } from '@nuxtjs/axios'

/* eslint-disable import/no-mutable-exports */
let $axios: NuxtAxiosInstance

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
}

export { $axios }