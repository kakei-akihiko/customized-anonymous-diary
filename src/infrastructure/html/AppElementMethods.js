import ElementMethods from './ElementMethods.js'

class AppElementMethods {
  constructor () {
    this.elementMethods = ElementMethods.instance
  }

  setup () {
    const originalElement = this.elementMethods.create('div', {
      attributes: {
        id: 'original'
      }
    })

    document.body.appendChild(originalElement)

    Array.apply(null, document.body.childNodes)
      .filter(child => child.id !== 'original')
      .forEach(child => { originalElement.appendChild(child) })

    const appElement = this.elementMethods.create('div', {
      attributes: {
        id: 'app'
      }
    })

    document.body.appendChild(appElement)
  }
}

export default AppElementMethods
