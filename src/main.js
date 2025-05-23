import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/style.css'

const app = createApp(App).use(store)

app.use(router)

app.mount('#app')
