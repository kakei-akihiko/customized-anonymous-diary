import { createApp } from 'vue'

import { setupWebPage } from './infrastructure/anond/SetupWebPage.js'

import App from './App.vue'

import './assets/css/bootstrap.css'

setupWebPage()

createApp(App)
  .mount('#app')
