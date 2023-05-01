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

import AppElementMethods from './infrastructure/html/AppElementMethods.js';
import SetupWebPage from './infrastructure/anond/SetupWebPage.js';

import ArticleCard from './components/ArticleCard.js';
import PagingBlock from './components/PagingBlock.js';

import LoadEntriesService from './usecases/LoadEntriesService.js';
import UpdateReferenceService from './usecases/UpdateReferenceService.js';

const loadEntriesService = LoadEntriesService.instance;
const updateReferenceService = UpdateReferenceService.instance;

new AppElementMethods().setup();
new SetupWebPage().run();

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
    referButtonClick(entry) {
      updateReferenceService.run(entry);
    },
    async refresh() {
      const {page} = this;
      this.entries = await loadEntriesService.run({page});
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
