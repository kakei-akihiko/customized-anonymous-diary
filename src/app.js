// ==UserScript==
// @name         カスタマイズ版匿名日記
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      https://cdn.jsdelivr.net/npm/vue
// @require      https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.8.24/dayjs.min.js
// @match        https://anond.hatelabo.jp/customized
// @grant        none
// ==/UserScript==

import AnonymousDiary from './AnonymousDiary.js';
import AnonimousDiaryServer from './AnonimousDiaryServer.js';
import PageWrapper from './PageWrapper.js';

import ArticleCard from './components/ArticleCard.js';
import PagingBlock from './components/PagingBlock.js';

const site = new AnonymousDiary(new PageWrapper()).setup();
const server = new AnonimousDiaryServer();

new Vue({
  el: '#app',
  template: `
    <div id="app" class="h-0 flex-grow-1">
      <div class="h-100 scroll" ref="scroll">
        <div class="container">
          <PagingBlock :page="page" @click="pagingClick($event)" class="main-content" />
          <ArticleCard v-for="entry in entries" :key="entry.url" :entry="entry"
            @refer="referButtonClick(entry)" />
          <PagingBlock :page="page" @click="pagingClick($event)" class="main-content" />
        </div>
      </div>
    </div>`,
  components: {ArticleCard, PagingBlock},
  computed: {
  },
  methods: {
    pagingClick(page) {
      this.page = page;
      this.refresh();
    },
    async referButtonClick(entry) {
      if (entry.refer.visible || entry.refer.title != null) {
        entry.refer.visible = !entry.refer.visible;
        return;
      }
      if (entry.refer.loading) {
        return;
      }
      entry.refer.loading = true;
      const json = await server.getReferJson(entry.refer.id);
      const item = site.parseRefer(entry.refer.id, json);
      entry.refer.loading = false;

      const {id, title, paragraphs} = item;
      entry.refer = {id, title, paragraphs, visible: true};
    },
    async refresh() {
      const html = await server.getArticlesHtml(this.page);
      const entries = site.parseItems(html);
      entries.sort((a, b) => a.time > b.time ? 1 : -1);
      this.entries = entries;
      this.$refs.scroll.scrollTop = 0;
    },
  },
  data() {
    return {
      entries: [],
      page: 1,
      reverse: true,
    };
  },
  mounted() {
    this.refresh();
  }
});
