import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { addCss } from './presenter/css'

addCss()

document.body.insertAdjacentHTML('beforeend', '<div id="app"></div>')

createApp(App).mount('#app')
