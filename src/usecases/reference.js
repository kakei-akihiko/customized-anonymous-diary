import { getReferDocument, parseDocument } from '../infrastructure/document/ReferenceDocument.js'

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

  const { title, paragraphs } = parseDocument(document)

  entry.refer = { ...entry.refer, id, title, paragraphs, visible: true, loading: false }
}
