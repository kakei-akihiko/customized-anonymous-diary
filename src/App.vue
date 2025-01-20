<script setup>
import { computed, ref, onMounted } from 'vue'
import ArticleCard from './components/ArticleCard.vue'
import PagingBlock from './components/PagingBlock.vue'
import { updateReference } from './usecases/reference.js'
import { entriesRef, fetchEntries } from './usecases/data'

const scroll = ref(null)

const rightSidePanelCollapsedRef = ref(false)

onMounted(async () => {
  await fetchEntries()
  scroll.value.scrollTop = 0
})

const pagingClick = page => {
  console.log('paging change page:', page)
  scroll.value.scrollTop = 0
}

const referButtonClick = entry => {
  updateReference(entry)
}

const rightSidePanel = computed(() => {
  return {
    className: {
      'panel-right-side': true,
      'collapsed': rightSidePanelCollapsedRef.value
    }
  }
})

const rightSidePanelToggleButtonClick = () => {
  rightSidePanelCollapsedRef.value = !rightSidePanelCollapsedRef.value
}
</script>

<template>
  <div
    ref="scroll"
    class="h-100 entire"
  >
    <div>

    </div>
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
    <div :class="rightSidePanel.className">
      <button
        class="btn btn-link btn-open"
        @click="rightSidePanelToggleButtonClick"
      >
        ≡
      </button>
      <div class="panel-collapsed">
        <button
          class="btn btn-link btn-collapse"
          @click="rightSidePanelToggleButtonClick"
        >
          ≡
        </button>
        NGワード
      </div>
    </div>
  </div>
</template>

<style scoped>
.entire {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
}

/* ≡ボタン 右サイドバー非表示状態ではウインドウに対して固定表示される */
.panel-right-side .btn-open {
  position: absolute;
  font-size: 1.8rem;
}

/* ≡ボタン 右サイドバー表示状態では表示されない */
.panel-right-side.collapsed .btn-open {
  display: none;
}

/* 右サイドバーの内容（非表示） */
.panel-right-side .panel-collapsed {
  display: none;
}

/* 右サイドバーの内容（表示） */
.panel-right-side.collapsed .panel-collapsed {
  display: block;
  font-size: 1.8rem;
}
.btn-collapse {
  display: block;
  font-size: 1.8rem;
}
</style>
