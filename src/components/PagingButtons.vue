<script setup>
import { fetchEntries, pageIndexRef } from '../usecases/data';

const emits = defineEmits(['change'])

const buttonClick = async newPage => {
  console.log('buttonClick', newPage)
  await fetchEntries(newPage)
  emits('change', newPage)
}
</script>

<template>
  <div class="v-interval buttons">
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
  </div>
</template>

<style scoped>
.buttons button {
  font-size: 1.5rem;
}
</style>
