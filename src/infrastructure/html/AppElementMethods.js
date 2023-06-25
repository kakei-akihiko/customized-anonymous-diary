class AppElementMethods {
  setup () {
    document.body.insertAdjacentHTML('beforeend', `
      <div id="original"></div>
      <div id="app" class="h-0 flex-grow-1"></div>
    `)
    const originalElement = document.getElementById('original')

    Array.apply(null, document.body.childNodes)
      .filter(child => child.id !== 'original' && child.id !== 'app')
      .forEach(child => { originalElement.appendChild(child) })
  }
}

export default AppElementMethods
