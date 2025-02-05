export const getReferDocument = async id => {
  let refer

  if (import.meta.env.MODE === 'development') {
    refer = {
      title: 'テストタイトル',
      body: 'テスト本文'
    }
  } else {
    const response = await fetch('/' + id + '?mode=json')
  
    refer = await response.json()
  }

  return new DOMParser().parseFromString(
    `<body>
      <h2>` + refer.title + `</h2>
      <div id="body">` + refer.body + `</div>
    </body>`,
    'text/html'
  )
}

export const getTopPageDocument = async pageIndex => {
  const url = import.meta.env.MODE === 'development'
    ? '/'
    : '/?mode=top&page=' + pageIndex

  const response = await fetch(url)

  const html = await response.text()

  return new DOMParser().parseFromString(html, 'text/html')
}
