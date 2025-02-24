<script>
import ArticleBodySection from './ArticleBodySection.vue'
import ArticleReferenceCard from './ArticleReferenceCard.vue'
import { ngWordsRef } from '../usecases/NGWord'

function wordExistsIn (word, p) {
  if (p.text != null && p.text.indexOf(word) >= 0) {
    return true
  }
  if (p.children != null) {
    return p.children.filter(c => c.text != null && c.text.indexOf(word) >= 0).length > 0
  }
  return false
}

function getNGWords (entry) {
  if (entry == null) {
    return []
  }
  return ngWordsRef.value.filter(word => {
    return entry.paragraphs.filter(p => wordExistsIn(word, p)).length > 0
  })
}

export default {
  components: { ArticleBodySection, ArticleReferenceCard },
  props: {
    entry: {
      type: Object,
      default: null
    }
  },
  emits: ['refer'],
  computed: {
    filteredItems () {
      return this.entry.paragraphs.filter(item => {
        return item.nodeName !== 'P' || item.text !== 'link'
      })
    },
    headlines () {
      const length = Math.min(this.filteredItems.length, 10)
      return this.filteredItems.slice(0, length)
    },
    taillines () {
      return this.filteredItems.length < 10
        ? []
        : this.filteredItems.slice(10)
    },
    items () {
      if (this.taillines.length <= 0) {
        return this.headlines
      }
      return [
        ...this.headlines,
        {
          nodeName: '#readmore',
          children: this.taillines
        }
      ]
    },
    ngWords () {
      return getNGWords(this.entry)
    }
  }
}
</script>

<template>
  <div class="card py-2">
    <div class="card-body">
      <div class="card-title main-content-title">
        <a
          :href="entry.url"
          target="_blank"
        >■</a>
        <strong v-if="ngWords.length <= 0">{{ entry.title }}</strong>
        <strong v-else>NG</strong>
        <button
          v-if="entry.refer != null"
          class="btn btn-default btn-sm"
          @click="$emit('refer')"
        >
          言及先を開く
        </button>
        <span class="text-inconspicuous">{{ entry.time }}</span>
        <span
          v-if="entry.refersCount > 0"
          class="text-refered"
        >被言及：{{ entry.refersCount }}</span>
      </div>

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
          <ArticleBodySection :items="items" />
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
