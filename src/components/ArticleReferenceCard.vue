<script>
import ArticleBodySection from './ArticleBodySection.vue'

export default {
  components: { ArticleBodySection },
  props: {
    title: { type: String, required: true },
    url: { type: String, required: true },
    paragraphs: { type: Array, required: true }
  }
}
</script>

<template>
  <div class="card pt-2 pl-2 pr-2 mb-2 refer-entire">
    <div class="card-title refer-title">
      <a :href="url">■</a>
      <strong>{{ title }}</strong>
    </div>
    <div class="card-text">
      <ArticleBodySection :items="paragraphs" />
    </div>
  </div>
</template>
