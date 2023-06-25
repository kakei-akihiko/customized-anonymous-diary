class SetupWebPage {
  run () {
    document.head.insertAdjacentHTML('beforeend', `
      <link rel="stylesheet" type="text/css" href="https://bootswatch.com/4/litera/bootstrap.min.css">
    `)

    document.body.className = 'd-flex flex-column h-100'
  }
}

export default SetupWebPage
