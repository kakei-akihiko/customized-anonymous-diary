class SetupWebPage {
  run() {
    document.head.insertAdjacentHTML('beforeend', `
      <link rel="stylesheet" type="text/css" href="https://bootswatch.com/4/litera/bootstrap.min.css">
    `);

    const element = document.createElement('style');
    element.textContent = `
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
      p {font-size: 1.6rem !important; font-family: 'BIZ UDPゴシック'}
      .card-title {font-size: 1.7rem}
      .text-refered { font-size: 80%; margin-left: .5rem }
      #app .paging-block button { font-size: 1.5rem; }
      #app blockquote { font-size: medium; }
      #app p {line-height: 2.8rem;}
      #app h4 { font-size: large; }
      #app pre { font-size: 12pt; font-family: "源ノ角ゴシック Code JP"; }
    `;
    document.head.appendChild(element);

    document.body.className = 'd-flex flex-column h-100';
  }  
}

export default SetupWebPage;
