// ==UserScript==
// @name         カスタマイズ版匿名日記
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      https://cdn.jsdelivr.net/npm/vue
// @require      http://localhost/files/js/dayjs.min.js
// @match        https://anond.hatelabo.jp/customized
// @grant        none
// ==/UserScript==

class DomNode {
  static createElement(elementName, {id, appendTo, ownerDocument, className, attributes} = {}) {
    const element = (ownerDocument || document).createElement(elementName);

    if (id !== undefined) {
      element.id = id;
    }

    if (className !== undefined) {
      element.className = className;
    }

    if (attributes !== undefined) {
      Object.keys(attributes).forEach(name => {
        element.setAttribute(name, attributes[name]);
      });
    }

    if (appendTo !== undefined) {
      appendTo.appendChild(element);
    }

    return element;
  }

  static fromId(id, targetDocument) {
    const _document = targetDocument || document;
    const node = _document.getElementById(id);
    if (node == null) {
      console.error('Id is not found. id:', id);
      throw new Error('Id is not found. id: ' + id);
    }
    return new DomNode(node);
  }

  constructor(node) {
    this.native = node;
  }

  get children() {
    const nodes = this.native.childNodes;
    return Array.apply(null, nodes).map(node => new DomNode(node));
  }

  get document() {
    return this.native.ownerDocument;
  }

  get parentNode() {
    return this.native.parentNode;
  }

  get text() {
    return this.native.textContent;
  }

  findByQuery(query) {
    const nodes = this.native.querySelectorAll(query);
    return Array.apply(null, nodes).map(node => new DomNode(node));
  }

  findByTagName(tagName) {
    const nodes = this.native.getElementsByTagName(tagName);
    return Array.apply(null, nodes).map(node => new DomNode(node));
  }

  findByPath(expression) {
    const x = this.document.evaluate(
      expression, this.native, null,
      XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

    const nodes = [];
    for(let i = 0; i < x.snapshotLength; i++) {
      nodes.push(x.snapshotItem(i));
    }
    return nodes.map(node => new DomNode(node));
  }

  removeChildren() {
    const nodes = this.native.childNodes;
    while(nodes.length > 0) {
      this.native.removeChild(nodes[nodes.length - 1]);
    }
  }

  remove() {
    this.native.parentNode.removeChild(this.native);
  }

  static addCssRules(cssRules) {
    Array.apply(null, document.getElementsByTagName('head')).forEach(head => {
      const styleElement = document.createElement('style');
      styleElement.type = "text/css";
      head.appendChild(styleElement);
      cssRules.forEach(rule => {
        styleElement.sheet.insertRule(rule, styleElement.sheet.cssRules.length);
      });
    });
  }
}

class AnonymousDiary {
  setup() {
    const head = document.getElementsByTagName('head')[0];

    DomNode.createElement('link', {
      attributes: {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://bootswatch.com/4/litera/bootstrap.min.css',
      },
      appendTo: head,
    });

    DomNode.addCssRules([
      'html, body {margin: 0; padding: 0; height: 100%}',
      '.h-100 {height: 100%}',
      '.h-0 {height: 0}',
      '.scroll {overflow-y: auto}',
      '.v-interval > *:nth-child(n+2) {margin-left: 0.5rem}',
      ':root {--font-family-sans-serif: sans-serif}',
      'body,pre,code,kbd,samp,.btn,p {font-family: sans-seif}',
      '.main-content {max-width: 550pt}',
      '.text-inconspicuous {color: rgb(100,100,100); font-size: small}',
    ]);

    ['original', 'app'].forEach(id => {
      DomNode.createElement('div', {id, appendTo: document.body});
    });
    
    document.body.className = 'd-flex flex-column h-100';
    
    const original = DomNode.fromId('original');
    
    Array.apply(null, document.body.childNodes)
      .filter(child => child.id != 'original' && child.id != 'app')
      .forEach(child => {original.native.appendChild(child);});
    
    original.findByPath([
      '//div[@id="hatena-anond"]',
      '//div[@id="original"]/p',
      '//div[@id="original"]/h1'
    ].join('|')).forEach(node => {
      node.native.style = 'display:none'
    });
  }

  getUrlFromEntryId(id) {
    return 'https://anond.hatelabo.jp/' + id + '?mode=json'
  }

  async getRefer(entryId) {
    const url = this.getUrlFromEntryId(entryId);
    const response = await fetch(url);
    const entry = await response.json();
    
    const titleDom = new DOMParser()
      .parseFromString('<body>' + entry.title + '</body>', 'text/html');
    const title = titleDom.body.textContent;

    const bodyDom = new DOMParser()
      .parseFromString('<body>' + entry.body + '</body>', 'text/html');

    const paragraphs = this.parseEntryBody(new DomNode(bodyDom.body));

    return {id: entryId, title, paragraphs};
  }

  async getItems({page}) {
    const response = await fetch('https://anond.hatelabo.jp/?mode=top&page=' + page);
    const html = await response.text();
    const dom = new DOMParser()
      .parseFromString(html, "text/html");

    return new DomNode(dom.body)
      .findByPath('//div[@class="body"]/div[@class="section"]')
      .map(node => this.getItemFromSectionNode(node));
  }

  getItemFromSectionNode(node) {
    const headers = node.findByPath('h3');
    const title = headers.length > 0 ? headers[0].text.replace('■', '') : '(no title)';

    const anchors = node.findByPath('h3/a');
    const url = anchors.length >= 1 ? anchors[0].native.href : null;
    const reference = (anchors.length >= 2 && anchors[1].native.textContent.match('anond:[0-9]')) ? anchors[1].native.href : null;

    const footerSectionNode = node.findByQuery('.sectionfooter')[0];
    const footerSection = footerSectionNode == null ? {} :  this.parseFooterSection(footerSectionNode);

    const paragraphs = this.parseEntryBody(node);

    const idMatch = url == null ? null : url.match('[0-9]+$');
    const id = idMatch == null ? -1 : idMatch[0];

    const referMatch = reference == null ? null : reference.match('[0-9]+$');
    let refer = null;
    if (referMatch != null) {
      refer = {
        id: referMatch[0],
        visible: false,
        title: null,
        url: reference,
        paragraphs: null,
        loading: false,
      }
    }

    return {id, title, url, paragraphs, refer, ...footerSection};
  }

  parseFooterSection(node) {
    return node.children
      .map(child => child.native)
      .map(native => native.nodeType == '#text' ? native.nodeValue : native.textContent)
      .map(text => {
        const timeMatch = text.match('\\d\\d:\\d\\d');
        const time = timeMatch == null ? null : timeMatch[0];

        const refersMatch = text.match('\\(\(d+)\\)');
        const refers = refersMatch == null ? null : refersMatch[1];
        return {time, refers};
      })
      .reduce((builder, item) => {
        return {...builder, ...item};
      }, {});
  }

  parseEntryBody(node) {
    return node.findByPath('p[not(@class)]|blockquote|h4|ul|ol').map(node => {
      const nodeName = node.native.nodeName;

      if (node.native.nodeName == 'UL') {
        const texts = node.findByQuery('li').map(li => li.text);
        return {texts, nodeName};
      } else if (node.native.nodeName == 'OL') {
        const texts = node.findByQuery('li').map(li => li.text);
        return {texts, nodeName};
      } else {
        const text = node.text;  
        return {text, nodeName};
      }
    });
  }
}

const site = new AnonymousDiary();
site.setup();

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

const ArticleSection = {
  template: `
    <div>
      <div v-for="item in items">
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
};

new Vue({
  el: '#app',
  template: `
    <div id="app" class="h-0 flex-grow-1">
      <div class="h-100 scroll" ref="scroll">
        <div class="container">
          <PagingBlock :page="page" @click="pagingClick($event)" class="main-content" />
          <div class="card main-content" v-for="entry in entries" :key="entry.url">
            <div class="card-body">
              <div class="card-title">
                <a :href="entry.url">■</a>
                <strong>{{ entry.title }}</strong>
                <button v-if="entry.refer != null"
                    class="btn btn-default btn-sm"
                    @click="referButtonClick(entry)">
                  言及先を開く
                </button> <span class="text-inconspicuous">{{ entry.time }}</span>
              </div>
              <div class="card-text">
                <div class="card pt-2 pl-2 pr-2 mb-2" v-if="entry.refer != null && entry.refer.loading">
                  ...
                </div>
                <div class="card pt-2 pl-2 pr-2 mb-2" v-if="entry.refer != null && entry.refer.visible"
                    style="background-color: honeydew">
                  <div class="card-title">
                    <a :href="entry.refer.url">■</a>
                    <strong>{{ entry.refer.title }}</strong>
                  </div>
                  <div class="card-text">
                    <ArticleSection :items="entry.refer.paragraphs"/>
                  </div>
                </div>
                <ArticleSection :items="entry.paragraphs"/>
              </div>
            </div>
          </div>
          <PagingBlock :page="page" @click="pagingClick($event)" class="main-content" />
        </div>
      </div>
    </div>`,
  components: {ArticleSection, PagingBlock},
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
      const item = await site.getRefer(entry.refer.id);
      entry.refer.loading = false;

      const {id, title, paragraphs} = item;
      entry.refer = {
        id, title, paragraphs, visible: true,
      };
    },
    async refresh() {
      const {page} = this;
      const entries = await site.getItems({page});
      if (this.reverse) {
        entries.sort((a, b) => b - a);
      }
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
