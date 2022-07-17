import { createApp } from 'vue'
import App from './App.vue'
import pinia from './plugins/pinia'
import router from './plugins/router'

import './index.css'

const app = createApp(App)

app.use(pinia)

app.use(router)

app.mount('#app')
