import { createApp } from 'vue'

import AppElementMethods from './infrastructure/html/AppElementMethods.js'
import SetupWebPage from './infrastructure/anond/SetupWebPage.js'

import App from './App.vue'

new AppElementMethods().setup()
new SetupWebPage().run()

createApp(App)
  .mount('#app')
