<script>
export default {
  name: 'ArticleSection',
  props: {
    items: { type: Array, required: true }
  }
}
</script>

<template>
  <div class="article-body">
    <div
      v-for="item in items"
      :key="item.nodeIndex"
    >
      <p v-if="item.nodeName == 'P'">
        {{ item.text }}
      </p>
      <ul v-if="item.nodeName == 'UL'">
        <li
          v-for="text in item.texts"
          :key="text.index"
        >
          {{ text.text }}
        </li>
      </ul>
      <ol v-if="item.nodeName == 'OL'">
        <li
          v-for="text in item.texts"
          :key="text.index"
        >
          {{ text.text }}
        </li>
      </ol>
      <pre
        v-if="item.nodeName == 'PRE'"
        class="rounded p-1"
        style="background-color: #e7ebff"
      >
        {{ item.text }}
      </pre>
      <blockquote
        v-if="item.nodeName == 'BLOCKQUOTE'"
        class="rounded p-1"
        style="background-color: rgb(220, 240, 255)"
      >
        <div>
          <div
            v-for="child in item.children"
            :key="child.nodeIndex"
          >
            <p v-if="child.nodeName == 'P'">
              {{ child.text }}
            </p>
            <ul v-if="child.nodeName == 'UL'">
              <li
                v-for="text in child.texts"
                :key="text.index"
              >
                {{ text.text }}
              </li>
            </ul>
            <ol v-if="child.nodeName == 'OL'">
              <li
                v-for="text in child.texts"
                :key="text.index"
              >
                {{ text.text }}
              </li>
            </ol>
            <pre
              v-if="child.nodeName == 'PRE'"
              class="rounded p-1"
              style="background-color: #e7ebff"
            >
              {{ child.text }}
            </pre>
            <h4
              v-if="child.nodeName == 'H4'"
              class="h5 ml-0"
            >
              {{ child.text }}
            </h4>
            <h5
              v-if="child.nodeName == 'H5'"
              class="h6 ml-0"
            >
              {{ child.text }}
            </h5>
            <h6
              v-if="child.nodeName == 'H6'"
              class="h6 ml-0"
            >
              {{ child.text }}
            </h6>
          </div>
        </div>
      </blockquote>
      <h4
        v-if="item.nodeName == 'H4'"
        class="h5 ml-0"
      >
        {{ item.text }}
      </h4>
      <h5
        v-if="item.nodeName == 'H5'"
        class="h6 ml-0"
      >
        {{ item.text }}
      </h5>
      <h6
        v-if="item.nodeName == 'H6'"
        class="h6 ml-0"
      >
        {{ item.text }}
      </h6>
      <details v-if="item.unknownType">
        <summary>{{ item.text }}</summary>
        {{ item.html }}
      </details>
    </div>
  </div>
</template>
