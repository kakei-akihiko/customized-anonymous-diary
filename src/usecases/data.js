import { ref } from 'vue'

import { getTopPageDocument } from '../infrastructure/anond/DocumentRepository.js'
import TopPageDocumentParser from '../infrastructure/anond/TopPageDocumentParser.js'

const topPageDocumentParser = TopPageDocumentParser.instance

export const pageIndexRef = ref(1)

export const entriesRef = ref([])

export const connectingRef = ref(false)

export const loadEntries = async ({ page }) => {
  const document = await getTopPageDocument(page)

  const entries = topPageDocumentParser.parse(document)

  entries.sort((a, b) => a.time > b.time ? 1 : -1)

  return entries
}

export const fetchEntries = async newPage => {
  connectingRef.value = true

  const page = newPage ?? pageIndexRef.value
  console.log('fetching... page:', page)

  const entries = await loadEntries({ page })

  console.log('fetched... entries:', entries.length)
  connectingRef.value = false

  pageIndexRef.value = page

  entriesRef.value = entries
}
