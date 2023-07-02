import { ref } from 'vue'

import LoadEntriesService from './LoadEntriesService.js'

const loadEntriesService = LoadEntriesService.instance

export const pageIndexRef = ref(1)

export const entriesRef = ref([])

export const connectingRef = ref(false)

export const fetchEntries = async newPage => {
  connectingRef.value = true

  const page = newPage ?? pageIndexRef.value
  console.log('fetching... page:', page)

  const entries = await loadEntriesService.run({ page })

  console.log('fetched... entries:', entries.length)
  connectingRef.value = false

  pageIndexRef.value = page

  entriesRef.value = entries
}
