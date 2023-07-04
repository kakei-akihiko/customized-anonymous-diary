<script setup>
import { ref, onMounted } from 'vue'
import ArticleCard from './components/ArticleCard.vue'
import PagingBlock from './components/PagingBlock.vue'
import { updateReference } from './usecases/reference.js'
import { entriesRef, fetchEntries } from './usecases/data'

const scroll = ref(null)

onMounted(async () => {
  await fetchEntries()
  scroll.scrollTop = 0
})

const pagingClick = page => {
  console.log('paging change page:', page)
  scroll.scrollTop = 0
}

const referButtonClick = entry => {
  updateReference(entry)
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
        v-for="entry in entriesRef"
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
