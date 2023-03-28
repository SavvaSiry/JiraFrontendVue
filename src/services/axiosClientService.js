import axios from "axios";
import {store} from "@/store";

export default function getClient() {

  const instance = axios.create({
    baseURL: 'https://d5dm09megqckrd48o48c.apigw.yandexcloud.net'
  })
  configurePreProcessing(instance)
  // configurePostProcessing(instance)
  return instance
}

function configurePreProcessing(instance) {

  instance.interceptors.request.use(
    config => {
      console.log('AXIOS: ' + localStorage.getItem('access_token'))
      if (store.getters.getAccessToken === undefined) {
        return config
      }
      config.headers['Authorization'] = 'Bearer ' + store.getters.getAccessToken
      return config
    });
}

// function configurePostProcessing(instance) {
//   instance.interceptors.response.use(
//     config => {
//       if (store.state.tokens === undefined) {
//         return config
//       }
//       const newHeaders = {
//         ...this.defaults.headers,
//         Authorization: 'Bearer ' + store.state.tokens
//       }
//       return {
//         ...config,
//         headers: newHeaders
//       }
//     });
// }
