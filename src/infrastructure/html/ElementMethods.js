class ElementMethods {
  constructor (_document = document) {
    this._document = _document
  }

  create (name, options = {}) {
    const element = this._document.createElement(name)

    if (options.html != null) {
      element.innerHTML = options.html
    }

    if (options.attributes != null) {
      Object.keys(options.attributes).forEach(name => {
        element.setAttribute(name, options.attributes[name])
      })
    }

    return element
  }
}

ElementMethods.instance = new ElementMethods()

export default ElementMethods
