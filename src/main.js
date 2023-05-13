import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import firebase auth service
import { projectAuth } from './firebase/config'

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    createApp(App).use(router).mount('#app')
  }
})
