import DocumentRepository from '../infrastructure/anond/DocumentRepository.js'
import TopPageDocumentParser from '../infrastructure/anond/TopPageDocumentParser.js'

const documentRepository = DocumentRepository.instance
const topPageDocumentParser = TopPageDocumentParser.instance

class UpdateReferenceService {
  async run (entry) {
    if (entry.refer.visible || entry.refer.title != null) {
      entry.refer.visible = !entry.refer.visible
      return
    }

    if (entry.refer.loading) {
      return
    }

    entry.refer.loading = true

    const id = entry.refer.id

    const document = await documentRepository.getReferDocument(id)

    const title = document.querySelector('h2').textContent

    const bodyDiv = document.getElementById('body')

    const paragraphs = topPageDocumentParser.getArticleBody(bodyDiv)

    entry.refer = { id, title, paragraphs, visible: true, loading: false }
  }
}

UpdateReferenceService.instance = new UpdateReferenceService()

export default UpdateReferenceService
