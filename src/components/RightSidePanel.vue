<script setup>
import { computed, ref } from 'vue'
import { ngWordsRef, addNGWord, removeNGWord } from '../usecases/NGWord.js'

const rightSidePanelCollapsedRef = ref(false)

const newNGWordRef = ref('')

const addNGWordButtonDisabled = computed(() => {
  return newNGWordRef.value.length <= 0
})

const rightSidePanel = computed(() => {
  return {
    className: {
      'panel-right-side': true,
      'collapsed': rightSidePanelCollapsedRef.value
    },
    ngWords: ngWordsRef.value ?? []
  }
})

const rightSidePanelToggleButtonClick = () => {
  rightSidePanelCollapsedRef.value = !rightSidePanelCollapsedRef.value
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
      <div v-if="rightSidePanel.ngWords.length > 0">
        <div
          v-for="ngWord in rightSidePanel.ngWords"
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

<style>
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
