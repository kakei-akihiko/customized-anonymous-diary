<script setup>
import { computed } from 'vue'
import { connectingRef, fetchEntries, pageIndexRef } from '../usecases/data'

const emits = defineEmits(['change'])

const buttonDisabled = computed(() => {
  return connectingRef.value
})

const buttonClick = async newPage => {
  console.log('buttonClick', newPage)
  await fetchEntries(newPage)
  emits('change', newPage)
}
</script>

<template>
  <fieldset
    class="v-interval paging-buttons"
    :disabled="buttonDisabled"
  >
    <button
      class="btn btn-link p-0"
      @click="buttonClick(pageIndexRef)"
    >
      再読み込み
    </button>
    <button
      v-if="pageIndexRef > 1"
      class="btn btn-link p-0"
      @click="buttonClick(1)"
    >
      最新を取得
    </button>
    <button
      v-if="pageIndexRef > 1"
      class="btn btn-link p-0"
      @click="buttonClick(pageIndexRef - 1)"
    >
      ← 前の25件
    </button>
    <button
      class="btn btn-link p-0"
      @click="buttonClick(pageIndexRef + 1)"
    >
      → 次の25件
    </button>
    <button
      class="btn btn-link p-0"
      @click="buttonClick(pageIndexRef + 5)"
    >
      古い方へ+5p
    </button>
  </fieldset>
</template>
