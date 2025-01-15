import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { addCss } from './presenter/css'

addCss()

const bodyChildren = Array.from(document.body.childNodes)

document.body.insertAdjacentHTML(
  'beforeend',
  '<div id="original"></div><div id="app"></div>'
)

bodyChildren.forEach(node => {
  document.getElementById('original').appendChild(node)
})

createApp(App).mount('#app')
