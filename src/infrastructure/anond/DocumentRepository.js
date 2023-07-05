export const getReferDocument = async id => {
  const url = 'https://anond.hatelabo.jp/' + id + '?mode=json'

  const response = await fetch(url)

  const json = await response.json()

  return new DOMParser().parseFromString(
    `<body>
      <h2>` + json.title + `</h2>
      <div id="body">` + json.body + `</div>
    </body>`,
    'text/html'
  )
}

export const getTopPageDocument = async pageIndex => {
  const response = await fetch('https://anond.hatelabo.jp/?mode=top&page=' + pageIndex)

  const html = await response.text()

  return new DOMParser().parseFromString(html, 'text/html')
}
