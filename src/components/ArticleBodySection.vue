<script>
import ArticleBodySectionItem from './ArticleBodySectionItem.vue';

export default {
  name: 'ArticleSection',
  components: { ArticleBodySectionItem },
  props: {
    items: { type: Array, required: true }
  }
}
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
        <div>
          <div
            v-for="child in item.children"
            :key="child.nodeIndex"
          >
            <ArticleBodySectionItem :item="child" />
          </div>
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
