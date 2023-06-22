export default {
  name: 'paging-block',
  props: {
    page: Number
  },
  template: `
    <div class="d-flex justify-content-between v-interval paging-block">
      <div class="v-interval">
        <button class="btn btn-link p-0" @click="$emit('click', page)">再読み込み</button>
        <button class="btn btn-link p-0" @click="$emit('click', 1)" v-if="page > 1">最新を取得</button>
        <button class="btn btn-link p-0" @click="$emit('click', page - 1)" v-if="page > 1">← 前の25件</button>
        <button class="btn btn-link p-0" @click="$emit('click', page + 1)">→ 次の25件</button>
        <button class="btn btn-link p-0" @click="$emit('click', page + 5)">古い方へ+5p</button>
      </div>
      <div class="v-interval text-right text-inconspicuous">
        p.{{page}}
      </div>
    </div>
  `
}
