<script>
export default {
  name: 'PagingBlock',
  props: {
    page: { type: Number, required: true }
  },
  emits: ['change']
}
</script>

<template>
  <div class="d-flex justify-content-between v-interval paging-block">
    <div class="v-interval">
      <button
        class="btn btn-link p-0"
        @click="$emit('change', page)"
      >
        再読み込み
      </button>
      <button
        v-if="page > 1"
        class="btn btn-link p-0"
        @click="$emit('change', 1)"
      >
        最新を取得
      </button>
      <button
        v-if="page > 1"
        class="btn btn-link p-0"
        @click="$emit('change', page - 1)"
      >
        ← 前の25件
      </button>
      <button
        class="btn btn-link p-0"
        @click="$emit('change', page + 1)"
      >
        → 次の25件
      </button>
      <button
        class="btn btn-link p-0"
        @click="$emit('change', page + 5)"
      >
        古い方へ+5p
      </button>
    </div>
    <div class="v-interval text-right text-inconspicuous">
      p.{{ page }}
    </div>
  </div>
</template>

<style scoped>
.paging-block button {
  font-size: 1.5rem;
}
</style>
