import ElementMethods from '../ElementMethods.js';

class StyleElementMethods {

  constructor(elementMethods) {
    this.elementMethods = elementMethods == null ? new ElementMethods() : elementMethods;
    this._document = elementMethods._document;
  }

  addCustom(css) {

    const element = this.elementMethods.create('style', {html: css});

    this._document.head.appendChild(element);

    return element;
  }

  addLink(href) {
    
    const element = this.elementMethods.create('link', {
      attributes: {
        rel: 'stylesheet',
        type: 'text/css',
        href
      },
    });
    
    this._document.head.appendChild(element);

    return this;
  }
}

StyleElementMethods.instance = new StyleElementMethods(
  ElementMethods.instance
);

export default StyleElementMethods;
