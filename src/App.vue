<script>
import ArticleCard from './components/ArticleCard.vue'
import PagingBlock from './components/PagingBlock.vue'
import UpdateReferenceService from './usecases/UpdateReferenceService.js'
import { entriesRef, fetchEntries } from './usecases/data'

const updateReferenceService = UpdateReferenceService.instance

export default {
  components: { ArticleCard, PagingBlock },
  computed: {
    entries () {
      return entriesRef.value
    }
  },
  async mounted () {
    await fetchEntries()

    this.$refs.scroll.scrollTop = 0
  },
  methods: {
    async pagingClick (page) {
      console.log('paging change page:', page)

      this.$refs.scroll.scrollTop = 0
    },
    referButtonClick (entry) {
      updateReferenceService.run(entry)
    }
  }
}
</script>

<template>
  <div
    ref="scroll"
    class="h-100 scroll"
  >
    <div class="container container-main">
      <PagingBlock @change="pagingClick($event)" />
      <ArticleCard
        v-for="entry in entries"
        :key="entry.url"
        :entry="entry"
        @refer="referButtonClick(entry)"
      />
      <PagingBlock @change="pagingClick($event)" />
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
#app .container-main {
  max-width: 550pt;
}
</style>
