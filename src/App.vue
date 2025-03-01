<script setup>
import { ref, onMounted } from 'vue'
import ArticleCard from './components/ArticleCard.vue'
import PagingBlock from './components/PagingBlock.vue'
import RightSidePanel from './components/RightSidePanel.vue'
import { updateReference } from './usecases/reference.js'
import { entriesRef, fetchEntries } from './usecases/data'

const scroll = ref(null)

onMounted(async () => {
  await fetchEntries()
  scroll.value.scrollTop = 0
})

const pagingClick = async page => {
  console.log('paging change page:', page)
  await fetchEntries(page)
  scroll.value.scrollTop = 0
}

const referButtonClick = entry => {
  updateReference(entry)
}
</script>

<template>
  <div class="panel-left">
    <div
      ref="scroll"
      class="container panel-main"
    >
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
  <div class="panel-right">
    <RightSidePanel />
  </div>
</template>
