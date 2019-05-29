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

class Node {
  static fromId(id, targetDocument) {
    const _document = targetDocument || document;
    const node = _document.getElementById(id);
    if (node == null) {
      console.error('Id is not found. id:', id);
      throw new Error('Id is not found. id: ' + id);
    }
    return new Node(node);
  }

  constructor(node) {
    this.node = node;
  }

  get document() {
    return this.node.ownerDocument;
  }

  get parentNode() {
    return this.node.parentNode;
  }

  get text() {
    return this.node.textContent;
  }

  findByTagName(tagName) {
    const nodes = this.node.getElementsByTagName(tagName);
    return Array.apply(null, nodes).map(node => new Node(node));
  }

  findByPath(expression) {
    const x = this.document.evaluate(
      expression, this.node, null,
      XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

    const nodes = [];
    for(let i = 0; i < x.snapshotLength; i++) {
      nodes.push(x.snapshotItem(i));
    }
    return nodes.map(node => new Node(node));
  }

  removeChildren() {
    const nodes = this.node.childNodes;
    while(nodes.length > 0) {
      this.node.removeChild(nodes[nodes.length - 1]);
    }
  }

  remove() {
    this.node.parentNode.removeChild(this.node);
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

Node.addCssRules([
  'html, body {margin: 0; padding: 0; height: 100%}',
  '.h-100 {height: 100%}',
  '.h-0 {height: 0}',
  '.scroll {overflow-y: auto}',
]);

['original', 'app'].forEach(id => {
  const element = document.createElement('div');
  element.id = id;
  document.body.appendChild(element);
});

document.body.className = 'd-flex flex-column h-100';

const original = Node.fromId('original');

Array.apply(null, document.body.childNodes)
  .filter(child => child.id != 'original' && child.id != 'app')
  .forEach(child => {original.node.appendChild(child);});


original.findByPath([
  '//div[@id="hatena-anond"]',
  '//div[@id="original"]/p',
  '//div[@id="original"]/h1'
].join('|')).forEach(node => {
  node.node.style = 'display:none'
});

new Vue({
  el: '#app',
  components: {},
  template: `
    <div id="app" class="h-0 flex-grow-1">
      <div class="h-100 scroll">
        <div class="container">
          <div class="card" v-for="entry in entries" :key="entry.anchor">
            <div class="card-body">
              <div class="card-title">
                <a :href="entry.anchor">{{ entry.header }}</a>
              </div>
              <div class="card-text">
                <p v-for="p in entry.paragraphs">
                  {{ p }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`,
  computed: {
  },
  methods: {
    async refresh() {
      const response = await fetch('https://anond.hatelabo.jp/?mode=top&page=2');
      const html = await response.text();
      const dom = new DOMParser()
        .parseFromString(html, "text/html");

      const nodes = new Node(dom.body)
        .findByPath('//div[@class="body"]/div[@class="section"]');

      this.entries = nodes
        .map(node => {
          const headers = node.findByPath('h3');
          const header = headers.length > 0 ? headers[0].text : '(no title)';

          const anchors = node.findByPath('.//a');
          const anchor = anchors.length > 0 ? anchors[0].node.href : null;

          const paragraphs = node.findByPath('p[not(@class)]').map(node => {
            return node.text;
          });

          return {header, anchor, paragraphs};
        });
    },
  },
  data() {
    return {
      entries: [],
    };
  },
  mounted() {
    this.refresh();
  }
});
