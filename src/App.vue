<script setup>
import { ref, onMounted, computed } from 'vue'
import ArticleCard from './components/ArticleCard.vue'
import PagingBlock from './components/PagingBlock.vue'
import RightSidePanel from './components/RightSidePanel.vue'
import { updateReference } from './usecases/reference.js'
import { entriesRef, fetchEntries } from './usecases/data'

const scroll = ref(null)

// 現在選択しているサイドバーの項目
const activeSidebarItemRef = ref('articles')

// サイドバーの項目：記事
const articlesSidebarItem = computed(() => {
  const active = activeSidebarItemRef.value === 'articles'
  const className = {
    'sidebar-item': true,
    active
  }
  return {active, className}
})

// サイドバーの項目：NGワード
const ngWordsSidebarItem = computed(() => {
  const active = activeSidebarItemRef.value === 'ngWords'
  const className = {
    'sidebar-item': true,
    active
  }
  return {active, className}
})

// メインパネルの状態
const mainPanel = computed(() => {
  const className = {
    'panel-main': true,
    'articles-active': articlesSidebarItem.value.active,
    'ngwords-active': ngWordsSidebarItem.value.active
  }
  return {className}
})

// マウント時
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

// ページ番号クリックイベント
const pagingClick = async page => {
  console.log('paging change page:', page)
  await fetchEntries(page)
  scroll.value.scrollTop = 0
}

// 言及先を開くクリックイベント
const referButtonClick = entry => {
  updateReference(entry)
}

// 記事クリックイベント
const articlesSidebarItemClick = () => {
  activeSidebarItemRef.value = 'articles'
}

// NGワードクリックイベント
const ngWordsSidebarItemClick = () => {
  activeSidebarItemRef.value = 'ngWords'
}
</script>

<template>
  <div id="original"></div>
  <div :class="mainPanel.className" ref="scroll">
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
    <div
      :class="articlesSidebarItem.className"
      @click="articlesSidebarItemClick"
    >
      <span class="icon">📰</span>
      <span class="text">記事</span>
    </div>
    <div
      :class="ngWordsSidebarItem.className"
      @click="ngWordsSidebarItemClick"
    >
      <span class="icon">🚫</span>
      <span class="text">NGワード</span>
    </div>
  </div>
</template>
