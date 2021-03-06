import AppElementMethods from '../html/AppElementMethods.js';
import StyleElementMethods from '../html/header/StyleElementMethods.js';

class SetupWebPage {

  constructor(appElementMethods, styleElementMethods, _document = document) {

    this.appElementMethods = appElementMethods == null
      ? AppElementMethods.instance
      : appElementMethods;

    this.styleElementMethods = styleElementMethods == null
      ? StyleElementMethods.instance
      : styleElementMethods;

    this._document = _document;
  }

  run() {

    this.styleElementMethods.addLink(
      'https://bootswatch.com/4/litera/bootstrap.min.css'
    );
    
    this.styleElementMethods.addCustom(`
      html, body {margin: 0; padding: 0; height: 100%}
      .h-100 {height: 100%}
      .h-0 {height: 0}
      .scroll {overflow-y: auto}
      .v-interval > *:nth-child(n+2) {margin-left: 0.5rem}
      :root {--font-family-sans-serif: sans-serif}
      body,pre,code,kbd,samp,.btn,p {font-family: sans-seif}
      .main-content {max-width: 550pt}
      .text-inconspicuous {color: rgb(100,100,100); font-size: small}
      #hatena-anond, #original > p, #original > h1 {display: none}
      p {font-size: 1.5rem !important; font-family: 'Meiryo'}
      .card-title {font-size: 1.7rem}
      .text-refered { font-size: 80%; margin-left: .5rem }
    `);

    this.appElementMethods.setup();

    this._document.body.className = 'd-flex flex-column h-100';
  }  
}

SetupWebPage.instance = new SetupWebPage();

export default SetupWebPage;
