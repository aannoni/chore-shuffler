import './assets/main.css'
import 'element-plus/dist/index.css' // 1. Add Element Plus Styles

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus' // 2. Add Element Plus Library

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus) // 3. Tell Vue to use Element Plus

app.mount('#app')
