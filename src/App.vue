<script>
import ArticleCard from './components/ArticleCard.vue'
import PagingBlock from './components/PagingBlock.vue'

import LoadEntriesService from './usecases/LoadEntriesService.js'
import UpdateReferenceService from './usecases/UpdateReferenceService.js'

const loadEntriesService = LoadEntriesService.instance
const updateReferenceService = UpdateReferenceService.instance

export default {
  components: { ArticleCard, PagingBlock },
  data () {
    return {
      entries: [],
      page: 1,
      reverse: true
    }
  },
  mounted () {
    this.refresh()
  },
  methods: {
    pagingClick (page) {
      this.page = page
      console.log('paging change page:', page)
      this.refresh()
    },
    referButtonClick (entry) {
      updateReferenceService.run(entry)
    },
    async refresh () {
      const { page } = this
      this.entries = await loadEntriesService.run({ page })
      this.$refs.scroll.scrollTop = 0
    }
  }
}
</script>

<template>
  <div
    ref="scroll"
    class="h-100 scroll"
  >
    <div class="container">
      <PagingBlock
        :page="page"
        class="main-content"
        @change="pagingClick($event)"
      />
      <ArticleCard
        v-for="entry in entries"
        :key="entry.url"
        :entry="entry"
        @refer="referButtonClick(entry)"
      />
      <PagingBlock
        :page="page"
        class="main-content"
        @change="pagingClick($event)"
      />
    </div>
  </div>
</template>

<style>
html, body {margin: 0; padding: 0; height: 100%}
.h-100 {height: 100%}
.h-0 {height: 0}
.scroll {overflow-y: auto}
.v-interval > *:nth-child(n+2) {margin-left: 0.5rem}
:root {--font-family-sans-serif: sans-serif}
body,pre,code,kbd,samp,.btn,p {font-family: sans-seif}
.text-inconspicuous {color: rgb(100,100,100); font-size: small}
#hatena-anond, #original > p, #original > h1 {display: none}
</style>
