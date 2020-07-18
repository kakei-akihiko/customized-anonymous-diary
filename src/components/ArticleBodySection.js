export default {
  template: `
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
        <blockquote v-if="item.nodeName == 'BLOCKQUOTE'" class="rounded p-1"
          style="background-color: rgb(220, 240, 255)">
          {{ item.text }}
        </blockquote>
        <h4 v-if="item.nodeName == 'H4'" class="h5 ml-0">
          {{ item.text }}
        </h4>
      </div>
    </div>`,
  name: 'article-section',
  props: {
    items: {required: true},
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => {
        return item.nodeName != 'P' || item.text != 'link';
      });
    }
  },
};