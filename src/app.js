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

class PageWrapper {
  addCustomStyle() {
    const element = document.createElement('style');
    element.innerHTML = `
      html, body {margin: 0; padding: 0; height: 100%}
      .h-100 {height: 100%}
      .h-0 {height: 0}
      .scroll {overflow-y: auto}
      .v-interval > *:nth-child(n+2) {margin-left: 0.5rem}
      :root {--font-family-sans-serif: sans-serif}
      body,pre,code,kbd,samp,.btn,p {font-family: sans-seif}
      .main-content {max-width: 550pt}
      .text-inconspicuous {color: rgb(100,100,100); font-size: small}
      #hatena-anond, #original > p, #original > h1 {display: none}
      p {font-size: 1.5rem !important; font-family: 'Meiryo'}
      .card-title {font-size: 1.7rem}
      .text-refered { font-size: 80%; margin-left: .5rem }
    `;
    document.head.appendChild(element);
    return this;
  }

  addBootstrap() {
    const head = document.querySelector('head');
    const element = document.createElement('link');
    element.setAttribute('rel', 'stylesheet');
    element.setAttribute('type', 'text/css');
    element.setAttribute('href', 'https://bootswatch.com/4/litera/bootstrap.min.css');
    head.appendChild(element);
    return this;
  }

  setupWrapperElements() {
    const originalElement = document.createElement('div');
    originalElement.setAttribute('id', 'original');
    document.body.appendChild(originalElement);

    Array.apply(null, document.body.childNodes)
      .filter(child => child.id != 'original')
      .forEach(child => {originalElement.appendChild(child);});

    const appElement = document.createElement('div');
    appElement.setAttribute('id', 'app');
    document.body.appendChild(appElement);

    return this;
  }
}

class AnonimousDiaryServer {
  async getReferJson(entryId) {
    const url = 'https://anond.hatelabo.jp/' + entryId + '?mode=json';
    const response = await fetch(url);
    return await response.json();
  }

  async getArticlesHtml(pageIndex) {
    const response = await fetch('https://anond.hatelabo.jp/?mode=top&page=' + pageIndex);
    return await response.text();
  }
}

class ArticleSectionElement {
  constructor(node) {
    this._node = node;
  }

  getHeader() {
    const header = this._node.querySelector('h3');
    if (header == null) {
      console.warn('articleNode has not h3', this._node);
      return {};
    }

    const title = header.textContent.replace('■', '');
    const anchors = header.querySelectorAll(':scope a');
    const url = anchors.length >= 1 ? anchors[0].href : null;
    const reference = (anchors.length >= 2 && anchors[1].textContent.match('anond:[0-9]')) ? anchors[1].href : null;

    const idMatch = url == null ? null : url.match('[0-9]+$');
    const id = idMatch == null ? -1 : idMatch[0];

    return {id, title, url, reference};
  }

  getFooter() {
    const footerNode = this._node.querySelector(':scope .sectionfooter');
    if (footerNode == null) {
      return {};
    }

    const anchors = footerNode.getElementsByTagName('a');
    const refersText = anchors.length >= 2 ? anchors[1].textContent : '';
    const refersMatch = refersText.match(/\((\d+)\)/);
    const refersCount = refersMatch == null ? null : refersMatch[1];

    const children = footerNode.childNodes;
    const timeNode = children.length > 0 ? children[children.length - 1] : null;
    const timeText = timeNode == null ? '' : timeNode.textContent;
    const timeMatch = timeText.match(/\d\d:\d\d/);
    const time = timeMatch == null ? null : timeMatch[0];

    return {refersCount, time};
  }

  getArticleBody() {
    return Array.from(this._node.childNodes)
      .map(child => this.parseArticleBodyLine(child))
      .filter(item => item != null);
  }

  parseArticleBodyLine(articleChildNode) {
    const nodeName = articleChildNode.nodeName;
    switch (nodeName) {
      case 'P':
        if (articleChildNode.classList.length > 0) {
          return null;
        }
        return {text: articleChildNode.textContent, nodeName};
      case 'UL':
      case 'OL': {
        const items = articleChildNode.querySelectorAll('li');
        const texts = Array.from(items).map(node => node.textContent);
        return {texts, nodeName};
      }
      case 'BLOCKQUOTE':
      case 'H4':
        return {text: articleChildNode.textContent, nodeName};
      default:
        return null;
    }
  }
}

class AnonymousDiary {
  setup() {
    new PageWrapper()
      .addBootstrap()
      .addCustomStyle()
      .setupWrapperElements();

    document.body.className = 'd-flex flex-column h-100';

    return this;
  }

  parseRefer(entryId, entry) {
    const titleDom = new DOMParser().parseFromString(
      '<body>' + entry.title + '</body>', 'text/html'
    );
    const title = titleDom.body.textContent;

    const bodyDom = new DOMParser().parseFromString(
      '<body>' + entry.body + '</body>', 'text/html'
    );

    const element = new ArticleSectionElement(bodyDom.body);
    const paragraphs = element.getArticleBody();

    return {id: entryId, title, paragraphs};
  }

  parseItems(html) {
    const dom = new DOMParser().parseFromString(html, "text/html");
    const bodyDiv = dom.body.querySelector('.body');
    return Array.from(bodyDiv.childNodes)
      .filter(node => node.className == 'section')
      .map(node => this.getItemFromSectionNode(node));
  }

  getItemFromSectionNode(node) {
    const element = new ArticleSectionElement(node);
    const {id, title, url, reference} = element.getHeader();
    const {refersCount, time} = element.getFooter();
    const paragraphs = element.getArticleBody();

    const referMatch = reference == null ? null : reference.match('[0-9]+$');
    const refer = referMatch == null ? null : {
      id: referMatch[0],
      visible: false,
      title: null,
      url: reference,
      paragraphs: null,
      loading: false,
    };
    return {id, title, url, paragraphs, refer, refersCount, time};
  }

  getNGWords(entry) {
    if (entry == null) {
      return [];
    }
    const words = [
      '加藤純一',
      'zendesk.com/hc/',
      'xn--qckwaqj6a5l2ab.xyz',
      '江畑諒真',
    ];
    const ngWords = words.filter(word => {
      return entry.paragraphs.filter(p => {
        return p.text != null && p.text.indexOf(word) >= 0
      }).length > 0;
    });
    return ngWords;
  }
}

const site = new AnonymousDiary().setup();
const server = new AnonimousDiaryServer();

const PagingBlock = {
  template: `
    <div class="d-flex justify-content-between v-interval">
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
  `,
  name: 'paging-block',
  props: {page: Number},
};

const ArticleBodySection = {
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

const ArticleReferenceCard = {
  template: `
    <div class="card pt-2 pl-2 pr-2 mb-2" style="background-color: honeydew">
      <div class="card-title">
        <a :href="url">■</a>
        <strong>{{ title }}</strong>
      </div>
      <div class="card-text">
        <ArticleBodySection :items="paragraphs"/>
      </div>
    </div>`,
  props: {title: String, url: String, paragraphs: Array},
  components: {ArticleBodySection},
};

const ArticleCard = {
  template: `
    <div class="card main-content py-2">
      <div class="card-body">
        <div class="card-title">
          <a :href="entry.url">■</a>
          <strong v-if="ngWords.length <= 0">{{ entry.title }}</strong>
          <strong v-else>NG</strong>
          <button v-if="entry.refer != null" class="btn btn-default btn-sm" @click="$emit('refer')">
            言及先を開く
          </button>
          <span class="text-inconspicuous">{{ entry.time }}</span>
          <span v-if="entry.refersCount > 0" class="text-refered">被言及：{{ entry.refersCount }}</span>
        </div>

        <div class="card-text">
          <div class="card pt-2 pl-2 pr-2 mb-2" v-if="entry.refer != null && entry.refer.loading">
            ...
          </div>
          <ArticleReferenceCard
            v-if="entry.refer != null && entry.refer.visible"
            :url="entry.refer.url"
            :title="entry.refer.title"
            :paragraphs="entry.refer.paragraphs"
            />
          <div v-if="ngWords.length <= 0">
            <ArticleBodySection :items="entry.paragraphs"/>
          </div>
          <div v-else>
            <strong>NG</strong>: <span v-for="word in ngWords" :key="word">{{word}} </span>
          </div>
        </div>
      </div>
    </div>
  `,
  components: {ArticleBodySection, ArticleReferenceCard},
  props: {
    entry: Object,
  },
  computed: {
    ngWords() {
      return site.getNGWords(this.entry);
    }
  },
};

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
