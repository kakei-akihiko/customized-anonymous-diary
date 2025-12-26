<script setup>
const props = defineProps(['entry', 'ngWords'])
const showHtml = defineModel('showHtml', {default: false})
</script>

<template>
  <div class="card-title main-content-title-bar">
    <div class="main-content-title">
      <a
        :href="props.entry.url"
        target="_blank"
      >■</a>
      <strong v-if="props.ngWords.length <= 0">{{ props.entry.title }}</strong>
      <strong v-else>NG</strong>
      <button
        v-if="props.entry.refer != null"
        class="btn btn-default btn-sm"
        @click="$emit('refer')"
      >
        言及先を開く
      </button>
      <span class="text-inconspicuous">{{ props.entry.time }}</span>
      <span
        v-if="entry.refersCount > 0"
        class="text-refered"
      >被言及：{{ props.entry.refersCount }}</span>
    </div>
    <div class="main-content-option">
      <input
        type="checkbox"
        v-model="showHtml"
      />
    </div>
  </div>
</template>
