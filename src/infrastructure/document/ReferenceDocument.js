import { getParagraphs } from "../html/sectionNode/Paragraphs"

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

export const parseDocument = document => {
  const title = document.querySelector('h2').textContent

  const bodyDiv = document.getElementById('body')

  const paragraphs = getParagraphs(bodyDiv)

  return {title, paragraphs}
}
