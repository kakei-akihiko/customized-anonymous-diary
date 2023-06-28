<script>
import ArticleBodySection from './ArticleBodySection.vue'

export default {
  components: { ArticleBodySection },
  props: {
    title: String,
    url: String,
    paragraphs: Array
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

<style scoped>
.refer-entire {
  background-color: honeydew
}
.refer-title {
  font-size: 1.7rem
}
</style>
