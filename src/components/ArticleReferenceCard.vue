<script>
import ArticleBodySection from './ArticleBodySection.vue'

export default {
  props: {
    title: String,
    url: String,
    paragraphs: Array
  },
  components: { ArticleBodySection }
}
</script>

<template>
  <div class="card pt-2 pl-2 pr-2 mb-2" style="background-color: honeydew">
    <div class="card-title">
      <a :href="url">■</a>
      <strong>{{ title }}</strong>
    </div>
    <div class="card-text">
      <ArticleBodySection :items="paragraphs"/>
    </div>
  </div>
</template>
