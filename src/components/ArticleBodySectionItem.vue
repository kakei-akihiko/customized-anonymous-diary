<script setup>
const props = defineProps({
  item: Object
})
</script>

<template>
  <p v-if="props.item.nodeName == 'P'">
    {{ props.item.text }}
  </p>
  <ul v-if="props.item.nodeName == 'UL'">
    <li
      v-for="text in props.item.texts"
      :key="text.index"
    >
      {{ text.text }}
    </li>
  </ul>
  <ol v-if="props.item.nodeName == 'OL'">
    <li
      v-for="text in props.item.texts"
      :key="text.index"
    >
      {{ text.text }}
    </li>
  </ol>
  <pre
    v-if="props.item.nodeName == 'PRE'"
    class="rounded p-1 masuda-pre"
  >
    {{ props.item.text }}
  </pre>
  <h4
    v-if="props.item.nodeName == 'H4'"
    class="h5 ml-0"
  >
    {{ props.item.text }}
  </h4>
  <h5
    v-if="props.item.nodeName == 'H5'"
    class="h6 ml-0"
  >
    {{ props.item.text }}
  </h5>
  <h6
    v-if="props.item.nodeName == 'H6'"
    class="h6 ml-0"
  >
    {{ props.item.text }}
  </h6>
  <details v-if="props.item.unknownType">
    <summary>{{ props.item.text }}</summary>
    {{ props.item.html }}
  </details>
</template>
