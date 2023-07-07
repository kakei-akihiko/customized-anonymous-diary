<script setup>
import PagingButtons from './PagingButtons.vue'
import { pageIndexRef } from '../usecases/data'

const emits = defineEmits(['change'])

const pageChange = newPage => {
  emits('change', newPage)
}
</script>

<template>
  <div class="d-flex justify-content-between v-interval">
    <PagingButtons @change="pageChange($event)" />
    <div class="v-interval text-right text-inconspicuous">
      p.{{ pageIndexRef }}
    </div>
  </div>
</template>
