console.log("script chargé")

import './assets/main.css'

import { createApp, toValue } from 'vue'
import { createPinia } from 'pinia'

import App from '../src/App.vue'
import router from './router'

const app = createApp(App)



app.use(router)

app.mount('#app')