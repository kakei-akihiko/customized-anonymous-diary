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
  <div class="refer-entire">
    <div class="refer-title">
      <a :href="url">■</a>
      <strong>{{ title }}</strong>
    </div>
    <div class="refer-text">
      <ArticleBodySection :items="paragraphs" />
    </div>
  </div>
</template>
