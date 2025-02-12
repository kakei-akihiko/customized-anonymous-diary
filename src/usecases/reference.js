import { getReferDocument } from '../infrastructure/anond/DocumentRepository.js'
import DocumentParser from '../infrastructure/anond/DocumentParser.js'

const documentParser = DocumentParser.instance

export const updateReference = async entry => {
  if (entry.refer.visible || entry.refer.title != null) {
    entry.refer.visible = !entry.refer.visible
    return
  }

  if (entry.refer.loading) {
    return
  }

  entry.refer.loading = true

  const id = entry.refer.id

  const document = await getReferDocument(id)

  const title = document.querySelector('h2').textContent

  const bodyDiv = document.getElementById('body')

  const paragraphs = documentParser.getArticleBody(bodyDiv)

  entry.refer = { id, title, paragraphs, visible: true, loading: false }
}
