<script setup>
import { computed } from 'vue';
import ArticleBodySectionItem from './ArticleBodySectionItem.vue';

const props = defineProps({
  items: { type: Array, required: true }
})

const items = computed(() => {
  let lineIndex = 0
  let results = []
  let readmoreItem = null

  for (const item of props.items) {
    if (lineIndex >= 10 && readmoreItem == null) {
      readmoreItem = { nodeName: '#readmore', children: [] }
      results.push(readmoreItem)
    }

    let currentItem = {...item, lineIndex}
    if (readmoreItem == null) {
      results.push(currentItem)
    } else {
      readmoreItem.children.push(currentItem)
    }

    lineIndex++
    if (item.children != null) {
      currentItem.children = []
      for (const child of item.children) {
        currentItem.children.push({...child, lineIndex })
        lineIndex++
      }
    }
  }
  return results
})
</script>

<template>
  <div class="article-body">
    <div
      v-for="item in items"
      :key="item.nodeIndex"
    >
      <ArticleBodySectionItem :item="item" />
      <blockquote
        v-if="item.nodeName == 'BLOCKQUOTE'"
        class="rounded p-1"
        style="background-color: rgb(220, 240, 255)"
      >
        <div
          v-for="child in item.children"
          :key="child.nodeIndex"
        >
          <details v-if="child.nodeName === '#readmore'">
            <summary>続きを読む</summary>
            <div
              v-for="grandchild in child.children"
              :key="grandchild.nodeIndex"
            >
              <ArticleBodySectionItem :item="grandchild" />
            </div>
          </details>
          <ArticleBodySectionItem v-else :item="child" />
        </div>
      </blockquote>
      <details v-if="item.nodeName === '#readmore'">
        <summary>続きを読む</summary>
        <div
          v-for="child in item.children"
          :key="child.nodeIndex"
        >
          <ArticleBodySectionItem :item="child" />
        </div>
      </details>
    </div>
  </div>
</template>
