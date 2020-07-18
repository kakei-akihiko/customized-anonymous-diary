export default class PageWrapper {
  addCustomStyle() {
    const element = document.createElement('style');
    element.innerHTML = `
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
    `;
    document.head.appendChild(element);
    return this;
  }

  addBootstrap() {
    const head = document.querySelector('head');
    const element = document.createElement('link');
    element.setAttribute('rel', 'stylesheet');
    element.setAttribute('type', 'text/css');
    element.setAttribute('href', 'https://bootswatch.com/4/litera/bootstrap.min.css');
    head.appendChild(element);
    return this;
  }

  setupWrapperElements() {
    const originalElement = document.createElement('div');
    originalElement.setAttribute('id', 'original');
    document.body.appendChild(originalElement);

    Array.apply(null, document.body.childNodes)
      .filter(child => child.id != 'original')
      .forEach(child => {originalElement.appendChild(child);});

    const appElement = document.createElement('div');
    appElement.setAttribute('id', 'app');
    document.body.appendChild(appElement);

    return this;
  }
}