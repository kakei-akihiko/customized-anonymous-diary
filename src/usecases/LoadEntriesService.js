import DocumentRepository from '../infrastructure/anond/DocumentRepository.js'
import TopPageDocumentParser from '../infrastructure/anond/TopPageDocumentParser.js'

const documentRepository = DocumentRepository.instance
const topPageDocumentParser = TopPageDocumentParser.instance

class LoadEntriesService {
  async run ({ page }) {
    const document = await documentRepository.getTopPageDocument(page)

    const entries = topPageDocumentParser.parse(document)

    entries.sort((a, b) => a.time > b.time ? 1 : -1)

    return entries
  }
}

LoadEntriesService.instance = new LoadEntriesService()

export default LoadEntriesService
