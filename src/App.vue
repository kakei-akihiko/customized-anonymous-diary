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
  },
}
</script>

<template>
  <div class="h-100 scroll" ref="scroll">
    <div class="container">
      <PagingBlock :page="page" @change="pagingClick($event)" class="main-content" />
      <ArticleCard v-for="entry in entries" :key="entry.url" :entry="entry"
        @refer="referButtonClick(entry)" />
      <PagingBlock :page="page" @change="pagingClick($event)" class="main-content" />
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
.main-content {max-width: 550pt}
.text-inconspicuous {color: rgb(100,100,100); font-size: small}
#hatena-anond, #original > p, #original > h1 {display: none}
p {font-size: 1.6rem !important; font-family: 'BIZ UDPゴシック'}
.card-title {font-size: 1.7rem}
.text-refered { font-size: 80%; margin-left: .5rem }
#app .paging-block button { font-size: 1.5rem; }
#app blockquote { font-size: medium; }
#app p {line-height: 2.8rem;}
#app h4 { font-size: large; }
#app pre { font-size: 12pt; font-family: "源ノ角ゴシック Code JP"; }
</style>
