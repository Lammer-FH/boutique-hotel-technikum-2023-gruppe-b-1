import './assets/main.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import '@/assets/custom.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BootstrapVueNext from 'bootstrap-vue-next'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BootstrapVueNext)

app.mount('#app')
