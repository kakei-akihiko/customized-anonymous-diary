<script>
export default {
  name: 'article-section',
  props: {
    items: { required: true }
  },
  computed: {
    filteredItems () {
      return this.items.filter(item => {
        return item.nodeName !== 'P' || item.text !== 'link'
      })
    }
  }
}
</script>

<template>
  <div>
    <div v-for="item in filteredItems">
      <p v-if="item.nodeName == 'P'">
        {{ item.text }}
      </p>
      <p v-if="item.nodeName == 'UL'">
        <ul>
          <li v-for="text in item.texts">{{ text }}</li>
        </ul>
      </p>
      <p v-if="item.nodeName == 'OL'">
        <ol>
          <li v-for="text in item.texts">{{ text }}</li>
        </ol>
      </p>
      <pre v-if="item.nodeName == 'PRE'" class="rounded p-1"
        style="background-color: #e7ebff">
        {{ item.text }}
      </pre>
      <blockquote v-if="item.nodeName == 'BLOCKQUOTE'" class="rounded p-1"
        style="background-color: rgb(220, 240, 255)">
        <div>
          <div v-for="child in item.children">
            <p v-if="child.nodeName == 'P'">
              {{ child.text }}
            </p>
            <p v-if="child.nodeName == 'UL'">
              <ul>
                <li v-for="text in child.texts">{{ text }}</li>
              </ul>
            </p>
            <p v-if="child.nodeName == 'OL'">
              <ol>
                <li v-for="text in child.texts">{{ text }}</li>
              </ol>
            </p>
            <pre v-if="child.nodeName == 'PRE'" class="rounded p-1"
              style="background-color: #e7ebff">
              {{ child.text }}
            </pre>
            <h4 v-if="child.nodeName == 'H4'" class="h5 ml-0">
              {{ child.text }}
            </h4>
            <h5 v-if="child.nodeName == 'H5'" class="h6 ml-0">
              {{ child.text }}
            </h5>
            <h6 v-if="child.nodeName == 'H6'" class="h6 ml-0">
              {{ child.text }}
            </h6>
            <h7 v-if="child.nodeName == 'H7'" class="h6 ml-0">
              {{ child.text }}
            </h7>
          </div>
        </div>
      </blockquote>
      <h4 v-if="item.nodeName == 'H4'" class="h5 ml-0">
        {{ item.text }}
      </h4>
      <h5 v-if="item.nodeName == 'H5'" class="h6 ml-0">
        {{ item.text }}
      </h5>
      <h6 v-if="item.nodeName == 'H6'" class="h6 ml-0">
        {{ item.text }}
      </h6>
      <h7 v-if="item.nodeName == 'H7'" class="h6 ml-0">
        {{ item.text }}
      </h7>
    </div>
  </div>
</template>

