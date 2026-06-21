<script setup>
import { ref, onMounted } from 'vue'
import ArticleCard from './components/ArticleCard.vue'
import PagingBlock from './components/PagingBlock.vue'
import RightSidePanel from './components/RightSidePanel.vue'
import { updateReference } from './usecases/reference.js'
import { entriesRef, fetchEntries } from './usecases/data'

const scroll = ref(null)

onMounted(async () => {
  const originalParentNode = document.getElementById('original')

  // #app以外は#original配下に移動
  Array.from(document.body.childNodes)
    .filter(node =>
      node.nodeName === '#text' || (
        node.getAttribute('id') !== 'app'
      )
    ).forEach(node => originalParentNode.appendChild(node))

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
  <div id="original"></div>
  <div class="panel-main" ref="scroll">
    <div class="panel-articles">
      <PagingBlock @change="pagingClick($event)" />
      <div class="articles">
        <ArticleCard
          v-for="entry in entriesRef"
          :key="entry.url"
          :entry="entry"
          @refer="referButtonClick(entry)"
        />
      </div>
      <PagingBlock @change="pagingClick($event)" />
    </div>
    <RightSidePanel class="panel-ng-words"/>
  </div>
  <div class="panel-sidebar">
    <div class="sidebar-item active">
      <span class="icon">📰</span>
      <span class="text">記事</span>
    </div>
    <div class="sidebar-item">
      <span class="icon">🚫</span>
      <span class="text">NGワード</span>
    </div>
  </div>
</template>
