import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { addCss } from './presenter/css'

addCss()

document.body.insertAdjacentHTML(
  'beforeend',
  '<div id="original"></div><div id="app"></div>'
)

const originalParentNode = document.getElementById('original')

// #original, #app以外は#original配下に移動
Array.from(document.body.childNodes)
  .filter(node =>
    node.nodeName === '#text' || (
      node.getAttribute('id') !== 'original' &&
      node.getAttribute('id') !== 'app'
    )
  ).forEach(node => originalParentNode.appendChild(node))

createApp(App).mount('#app')
