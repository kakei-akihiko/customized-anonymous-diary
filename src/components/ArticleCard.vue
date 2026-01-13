<script setup>
import { computed, ref } from 'vue'
import { ngWordsRef } from '../usecases/NGWord'
import ArticleBodySection from './ArticleBodySection.vue'
import ArticleCardTitle from './ArticleCardTitle.vue'
import ArticleReferenceCard from './ArticleReferenceCard.vue'

const showHtmlRef = ref(false)

const emits = defineEmits(['refer'])

const props = defineProps({
  entry: {
    type: Object,
    required: true
  }
})

const readmoreCount = computed(() => {
  return props.entry.japanese ? 10 : 0
})

function wordExistsIn (word, p) {
  if (p.text != null && p.text.indexOf(word) >= 0) {
    return true
  }
  if (p.children != null) {
    return p.children.filter(c => c.text != null && c.text.indexOf(word) >= 0).length > 0
  }
  return false
}

const ngWords = computed(() => {
  if (props.entry == null) {
    return []
  }
  return ngWordsRef.value.filter(word => {
    const titleNg = props.entry.title != null && props.entry.title.indexOf(word) >= 0
    const bodyNg = props.entry.paragraphs.filter(p => wordExistsIn(word, p)).length > 0
    return titleNg || bodyNg
  })
})

const filteredItems = computed(() => {
  return props.entry.paragraphs.filter(item => {
    return item.nodeName !== 'P' || item.text !== 'link'
  })
})
</script>

<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="card py-2">
    <div class="card-body">
      <ArticleCardTitle
        v-model:show-html="showHtmlRef"
        :entry="props.entry"
        :ng-words="ngWords"
        @refer="emits('refer')"
      />

      <div class="card-text">
        <div
          v-if="entry.refer != null && entry.refer.loading"
          class="card pt-2 pl-2 pr-2 mb-2"
        >
          ...
        </div>
        <ArticleReferenceCard
          v-if="entry.refer != null && entry.refer.visible"
          :url="entry.refer.url"
          :title="entry.refer.title"
          :paragraphs="entry.refer.paragraphs"
        />
        <!-- 本文（正常） -->
        <div v-if="ngWords.length <= 0">
          <div
            v-if="showHtmlRef"
            class="original-html"
            v-html="entry.html"
          />
          <ArticleBodySection
            v-else
            :items="filteredItems"
            :readmore-count="readmoreCount"
          />
        </div>
        <!-- 本文（NGワード） -->
        <div v-else>
          <strong>NG</strong>: <span
            v-for="word in ngWords"
            :key="word"
          >{{ word }} </span>
        </div>
      </div>
    </div>
  </div>
</template>
