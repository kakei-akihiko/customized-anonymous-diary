import { ref } from 'vue'

import { getDocument, parseDocument } from '../infrastructure/document/TopDocument.js'

export const pageIndexRef = ref(1)

export const entriesRef = ref([])

export const popularLinksRef = ref([])

export const hotLinksRef = ref([])

export const connectingRef = ref(false)

export const fetchEntries = async newPage => {
  connectingRef.value = true

  const page = newPage ?? pageIndexRef.value

  const document = await getDocument(page)

  const { entries, popularLinks, hotLinks } = parseDocument(document)

  connectingRef.value = false

  pageIndexRef.value = page

  entriesRef.value = entries
  popularLinksRef.value = popularLinks
  hotLinksRef.value = hotLinks
}
