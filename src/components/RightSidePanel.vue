<script setup>
import { computed, ref } from 'vue'
import { ngWordsRef, addNGWord, removeNGWord } from '../usecases/NGWord.js'

const collapsedRef = ref(false)

const newNGWordRef = ref('')

const addNGWordButtonDisabled = computed(() => {
  return newNGWordRef.value.length <= 0
})

const panelClassName = computed(() => {
  return {
    'panel-right-side': true,
    'collapsed': collapsedRef.value
  }
})

const ngWords = computed(() => ngWordsRef.value ?? [])

const toggleButtonClick = () => {
  collapsedRef.value = !collapsedRef.value
}

const addNGWordButtonClick = () => {
  addNGWord(newNGWordRef.value)
  newNGWordRef.value = ''
}

const deleteNGWordButtonClick = ngWord => {
  removeNGWord(ngWord)
}
</script>

<template>
  <div :class="panelClassName">
    <button
      class="btn btn-link btn-toggle"
      @click="toggleButtonClick"
    >
      ≡
    </button>
    <div class="panel-collapsed">
      <div v-if="ngWords.length > 0">
        <div
          v-for="ngWord in ngWords"
          :key="ngWord"
          class="ng-word-item"
        >
          <span>
            {{ ngWord }}
          </span>
          <button
            type="button"
            class="btn btn-link"
            @click="deleteNGWordButtonClick(ngWord)"
          >
            &times;
          </button>
        </div>
      </div>
      <div v-else>
        NGワードはありません。
      </div>
      <form>
        <fieldset>
          <input v-model="newNGWordRef"/>
          <button @click="addNGWordButtonClick" :disabled="addNGWordButtonDisabled" type="button">
            追加
          </button>
        </fieldset>
      </form>
    </div>
  </div>
</template>
