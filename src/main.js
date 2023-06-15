import '@fontsource/roboto'
import '@fontsource/roboto/400.css'
import './styles/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

createApp(App).use(vuetify).mount('#app')