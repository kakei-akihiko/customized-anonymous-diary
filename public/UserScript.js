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

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AnonimousDiaryServer.js":
/*!*************************************!*\
  !*** ./src/AnonimousDiaryServer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnonimousDiaryServer; });\nclass AnonimousDiaryServer {\r\n  async getReferJson(entryId) {\r\n    const url = 'https://anond.hatelabo.jp/' + entryId + '?mode=json';\r\n    const response = await fetch(url);\r\n    return await response.json();\r\n  }\r\n\r\n  async getArticlesHtml(pageIndex) {\r\n    const response = await fetch('https://anond.hatelabo.jp/?mode=top&page=' + pageIndex);\r\n    return await response.text();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/AnonimousDiaryServer.js?");

/***/ }),

/***/ "./src/AnonymousDiary.js":
/*!*******************************!*\
  !*** ./src/AnonymousDiary.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnonymousDiary; });\n/* harmony import */ var _ArticleSectionElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArticleSectionElement.js */ \"./src/ArticleSectionElement.js\");\n\r\n\r\nclass AnonymousDiary {\r\n  constructor(pageWrapper) {\r\n    this.pageWrapper = pageWrapper;\r\n  }\r\n\r\n  setup() {\r\n    this.pageWrapper\r\n      .addBootstrap()\r\n      .addCustomStyle()\r\n      .setupWrapperElements();\r\n\r\n    document.body.className = 'd-flex flex-column h-100';\r\n\r\n    return this;\r\n  }\r\n\r\n  parseRefer(entryId, entry) {\r\n    const titleDom = new DOMParser().parseFromString(\r\n      '<body>' + entry.title + '</body>', 'text/html'\r\n    );\r\n    const title = titleDom.body.textContent;\r\n\r\n    const bodyDom = new DOMParser().parseFromString(\r\n      '<body>' + entry.body + '</body>', 'text/html'\r\n    );\r\n\r\n    const element = new _ArticleSectionElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bodyDom.body);\r\n    const paragraphs = element.getArticleBody();\r\n\r\n    return {id: entryId, title, paragraphs};\r\n  }\r\n\r\n  parseItems(html) {\r\n    const dom = new DOMParser().parseFromString(html, \"text/html\");\r\n    const bodyDiv = dom.body.querySelector('.body');\r\n    return Array.from(bodyDiv.childNodes)\r\n      .filter(node => node.className == 'section')\r\n      .map(node => this.getItemFromSectionNode(node));\r\n  }\r\n\r\n  getItemFromSectionNode(node) {\r\n    const element = new _ArticleSectionElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](node);\r\n    const {id, title, url, reference} = element.getHeader();\r\n    const {refersCount, time} = element.getFooter();\r\n    const paragraphs = element.getArticleBody();\r\n\r\n    const referMatch = reference == null ? null : reference.match('[0-9]+$');\r\n    const refer = referMatch == null ? null : {\r\n      id: referMatch[0],\r\n      visible: false,\r\n      title: null,\r\n      url: reference,\r\n      paragraphs: null,\r\n      loading: false,\r\n    };\r\n    return {id, title, url, paragraphs, refer, refersCount, time};\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/AnonymousDiary.js?");

/***/ }),

/***/ "./src/ArticleSectionElement.js":
/*!**************************************!*\
  !*** ./src/ArticleSectionElement.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ArticleSectionElement; });\nclass ArticleSectionElement {\r\n  constructor(node) {\r\n    this._node = node;\r\n  }\r\n\r\n  getHeader() {\r\n    const header = this._node.querySelector('h3');\r\n    if (header == null) {\r\n      console.warn('articleNode has not h3', this._node);\r\n      return {};\r\n    }\r\n\r\n    const title = header.textContent.replace('■', '');\r\n    const anchors = header.querySelectorAll(':scope a');\r\n    const url = anchors.length >= 1 ? anchors[0].href : null;\r\n    const reference = (anchors.length >= 2 && anchors[1].textContent.match('anond:[0-9]')) ? anchors[1].href : null;\r\n\r\n    const idMatch = url == null ? null : url.match('[0-9]+$');\r\n    const id = idMatch == null ? -1 : idMatch[0];\r\n\r\n    return {id, title, url, reference};\r\n  }\r\n\r\n  getFooter() {\r\n    const footerNode = this._node.querySelector(':scope .sectionfooter');\r\n    if (footerNode == null) {\r\n      return {};\r\n    }\r\n\r\n    const anchors = footerNode.getElementsByTagName('a');\r\n    const refersText = anchors.length >= 2 ? anchors[1].textContent : '';\r\n    const refersMatch = refersText.match(/\\((\\d+)\\)/);\r\n    const refersCount = refersMatch == null ? null : refersMatch[1];\r\n\r\n    const children = footerNode.childNodes;\r\n    const timeNode = children.length > 0 ? children[children.length - 1] : null;\r\n    const timeText = timeNode == null ? '' : timeNode.textContent;\r\n    const timeMatch = timeText.match(/\\d\\d:\\d\\d/);\r\n    const time = timeMatch == null ? null : timeMatch[0];\r\n\r\n    return {refersCount, time};\r\n  }\r\n\r\n  getArticleBody() {\r\n    return Array.from(this._node.childNodes)\r\n      .map(child => this.parseArticleBodyLine(child))\r\n      .filter(item => item != null);\r\n  }\r\n\r\n  parseArticleBodyLine(articleChildNode) {\r\n    const nodeName = articleChildNode.nodeName;\r\n    switch (nodeName) {\r\n      case 'P':\r\n        if (articleChildNode.classList.length > 0) {\r\n          return null;\r\n        }\r\n        return {text: articleChildNode.textContent, nodeName};\r\n      case 'UL':\r\n      case 'OL': {\r\n        const items = articleChildNode.querySelectorAll('li');\r\n        const texts = Array.from(items).map(node => node.textContent);\r\n        return {texts, nodeName};\r\n      }\r\n      case 'BLOCKQUOTE':\r\n      case 'H4':\r\n        return {text: articleChildNode.textContent, nodeName};\r\n      default:\r\n        return null;\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/ArticleSectionElement.js?");

/***/ }),

/***/ "./src/PageWrapper.js":
/*!****************************!*\
  !*** ./src/PageWrapper.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PageWrapper; });\nclass PageWrapper {\r\n  addCustomStyle() {\r\n    const element = document.createElement('style');\r\n    element.innerHTML = `\r\n      html, body {margin: 0; padding: 0; height: 100%}\r\n      .h-100 {height: 100%}\r\n      .h-0 {height: 0}\r\n      .scroll {overflow-y: auto}\r\n      .v-interval > *:nth-child(n+2) {margin-left: 0.5rem}\r\n      :root {--font-family-sans-serif: sans-serif}\r\n      body,pre,code,kbd,samp,.btn,p {font-family: sans-seif}\r\n      .main-content {max-width: 550pt}\r\n      .text-inconspicuous {color: rgb(100,100,100); font-size: small}\r\n      #hatena-anond, #original > p, #original > h1 {display: none}\r\n      p {font-size: 1.5rem !important; font-family: 'Meiryo'}\r\n      .card-title {font-size: 1.7rem}\r\n      .text-refered { font-size: 80%; margin-left: .5rem }\r\n    `;\r\n    document.head.appendChild(element);\r\n    return this;\r\n  }\r\n\r\n  addBootstrap() {\r\n    const head = document.querySelector('head');\r\n    const element = document.createElement('link');\r\n    element.setAttribute('rel', 'stylesheet');\r\n    element.setAttribute('type', 'text/css');\r\n    element.setAttribute('href', 'https://bootswatch.com/4/litera/bootstrap.min.css');\r\n    head.appendChild(element);\r\n    return this;\r\n  }\r\n\r\n  setupWrapperElements() {\r\n    const originalElement = document.createElement('div');\r\n    originalElement.setAttribute('id', 'original');\r\n    document.body.appendChild(originalElement);\r\n\r\n    Array.apply(null, document.body.childNodes)\r\n      .filter(child => child.id != 'original')\r\n      .forEach(child => {originalElement.appendChild(child);});\r\n\r\n    const appElement = document.createElement('div');\r\n    appElement.setAttribute('id', 'app');\r\n    document.body.appendChild(appElement);\r\n\r\n    return this;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/PageWrapper.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AnonymousDiary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnonymousDiary.js */ \"./src/AnonymousDiary.js\");\n/* harmony import */ var _AnonimousDiaryServer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnonimousDiaryServer.js */ \"./src/AnonimousDiaryServer.js\");\n/* harmony import */ var _PageWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageWrapper.js */ \"./src/PageWrapper.js\");\n/* harmony import */ var _components_ArticleCard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ArticleCard.js */ \"./src/components/ArticleCard.js\");\n/* harmony import */ var _components_PagingBlock_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PagingBlock.js */ \"./src/components/PagingBlock.js\");\n// ==UserScript==\r\n// @name         カスタマイズ版匿名日記\r\n// @namespace    http://tampermonkey.net/\r\n// @version      0.1\r\n// @description  try to take over the world!\r\n// @author       You\r\n// @require      https://cdn.jsdelivr.net/npm/vue\r\n// @require      https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.8.24/dayjs.min.js\r\n// @match        https://anond.hatelabo.jp/customized\r\n// @grant        none\r\n// ==/UserScript==\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst site = new _AnonymousDiary_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](new _PageWrapper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()).setup();\r\nconst server = new _AnonimousDiaryServer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\nnew Vue({\r\n  el: '#app',\r\n  template: `\r\n    <div id=\"app\" class=\"h-0 flex-grow-1\">\r\n      <div class=\"h-100 scroll\" ref=\"scroll\">\r\n        <div class=\"container\">\r\n          <PagingBlock :page=\"page\" @click=\"pagingClick($event)\" class=\"main-content\" />\r\n          <ArticleCard v-for=\"entry in entries\" :key=\"entry.url\" :entry=\"entry\"\r\n            @refer=\"referButtonClick(entry)\" />\r\n          <PagingBlock :page=\"page\" @click=\"pagingClick($event)\" class=\"main-content\" />\r\n        </div>\r\n      </div>\r\n    </div>`,\r\n  components: {ArticleCard: _components_ArticleCard_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], PagingBlock: _components_PagingBlock_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]},\r\n  computed: {\r\n  },\r\n  methods: {\r\n    pagingClick(page) {\r\n      this.page = page;\r\n      this.refresh();\r\n    },\r\n    async referButtonClick(entry) {\r\n      if (entry.refer.visible || entry.refer.title != null) {\r\n        entry.refer.visible = !entry.refer.visible;\r\n        return;\r\n      }\r\n      if (entry.refer.loading) {\r\n        return;\r\n      }\r\n      entry.refer.loading = true;\r\n      const json = await server.getReferJson(entry.refer.id);\r\n      const item = site.parseRefer(entry.refer.id, json);\r\n      entry.refer.loading = false;\r\n\r\n      const {id, title, paragraphs} = item;\r\n      entry.refer = {id, title, paragraphs, visible: true};\r\n    },\r\n    async refresh() {\r\n      const html = await server.getArticlesHtml(this.page);\r\n      const entries = site.parseItems(html);\r\n      entries.sort((a, b) => a.time > b.time ? 1 : -1);\r\n      this.entries = entries;\r\n      this.$refs.scroll.scrollTop = 0;\r\n    },\r\n  },\r\n  data() {\r\n    return {\r\n      entries: [],\r\n      page: 1,\r\n      reverse: true,\r\n    };\r\n  },\r\n  mounted() {\r\n    this.refresh();\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/ArticleBodySection.js":
/*!**********************************************!*\
  !*** ./src/components/ArticleBodySection.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  template: `\r\n    <div>\r\n      <div v-for=\"item in filteredItems\">\r\n        <p v-if=\"item.nodeName == 'P'\">\r\n          {{ item.text }}\r\n        </p>\r\n        <p v-if=\"item.nodeName == 'UL'\">\r\n          <ul>\r\n            <li v-for=\"text in item.texts\">{{ text }}</li>\r\n          </ul>\r\n        </p>\r\n        <p v-if=\"item.nodeName == 'OL'\">\r\n          <ol>\r\n            <li v-for=\"text in item.texts\">{{ text }}</li>\r\n          </ol>\r\n        </p>\r\n        <blockquote v-if=\"item.nodeName == 'BLOCKQUOTE'\" class=\"rounded p-1\"\r\n          style=\"background-color: rgb(220, 240, 255)\">\r\n          {{ item.text }}\r\n        </blockquote>\r\n        <h4 v-if=\"item.nodeName == 'H4'\" class=\"h5 ml-0\">\r\n          {{ item.text }}\r\n        </h4>\r\n      </div>\r\n    </div>`,\r\n  name: 'article-section',\r\n  props: {\r\n    items: {required: true},\r\n  },\r\n  computed: {\r\n    filteredItems() {\r\n      return this.items.filter(item => {\r\n        return item.nodeName != 'P' || item.text != 'link';\r\n      });\r\n    }\r\n  },\r\n});\n\n//# sourceURL=webpack:///./src/components/ArticleBodySection.js?");

/***/ }),

/***/ "./src/components/ArticleCard.js":
/*!***************************************!*\
  !*** ./src/components/ArticleCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ArticleBodySection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArticleBodySection.js */ \"./src/components/ArticleBodySection.js\");\n/* harmony import */ var _ArticleReferenceCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleReferenceCard.js */ \"./src/components/ArticleReferenceCard.js\");\n\r\n\r\n\r\nfunction getNGWords(entry) {\r\n  if (entry == null) {\r\n    return [];\r\n  }\r\n  const words = [\r\n    '加藤純一',\r\n    'zendesk.com/hc/',\r\n    'xn--qckwaqj6a5l2ab.xyz',\r\n    '江畑諒真',\r\n  ];\r\n  const ngWords = words.filter(word => {\r\n    return entry.paragraphs.filter(p => {\r\n      return p.text != null && p.text.indexOf(word) >= 0\r\n    }).length > 0;\r\n  });\r\n  return ngWords;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  template: `\r\n    <div class=\"card main-content py-2\">\r\n      <div class=\"card-body\">\r\n        <div class=\"card-title\">\r\n          <a :href=\"entry.url\">■</a>\r\n          <strong v-if=\"ngWords.length <= 0\">{{ entry.title }}</strong>\r\n          <strong v-else>NG</strong>\r\n          <button v-if=\"entry.refer != null\" class=\"btn btn-default btn-sm\" @click=\"$emit('refer')\">\r\n            言及先を開く\r\n          </button>\r\n          <span class=\"text-inconspicuous\">{{ entry.time }}</span>\r\n          <span v-if=\"entry.refersCount > 0\" class=\"text-refered\">被言及：{{ entry.refersCount }}</span>\r\n        </div>\r\n\r\n        <div class=\"card-text\">\r\n          <div class=\"card pt-2 pl-2 pr-2 mb-2\" v-if=\"entry.refer != null && entry.refer.loading\">\r\n            ...\r\n          </div>\r\n          <ArticleReferenceCard\r\n            v-if=\"entry.refer != null && entry.refer.visible\"\r\n            :url=\"entry.refer.url\"\r\n            :title=\"entry.refer.title\"\r\n            :paragraphs=\"entry.refer.paragraphs\"\r\n            />\r\n          <div v-if=\"ngWords.length <= 0\">\r\n            <ArticleBodySection :items=\"entry.paragraphs\"/>\r\n          </div>\r\n          <div v-else>\r\n            <strong>NG</strong>: <span v-for=\"word in ngWords\" :key=\"word\">{{word}} </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  `,\r\n  components: {ArticleBodySection: _ArticleBodySection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], ArticleReferenceCard: _ArticleReferenceCard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]},\r\n  props: {\r\n    entry: Object,\r\n  },\r\n  computed: {\r\n    ngWords() {\r\n      return getNGWords(this.entry);\r\n    }\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack:///./src/components/ArticleCard.js?");

/***/ }),

/***/ "./src/components/ArticleReferenceCard.js":
/*!************************************************!*\
  !*** ./src/components/ArticleReferenceCard.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ArticleBodySection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArticleBodySection.js */ \"./src/components/ArticleBodySection.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  template: `\r\n    <div class=\"card pt-2 pl-2 pr-2 mb-2\" style=\"background-color: honeydew\">\r\n      <div class=\"card-title\">\r\n        <a :href=\"url\">■</a>\r\n        <strong>{{ title }}</strong>\r\n      </div>\r\n      <div class=\"card-text\">\r\n        <ArticleBodySection :items=\"paragraphs\"/>\r\n      </div>\r\n    </div>`,\r\n  props: {title: String, url: String, paragraphs: Array},\r\n  components: {ArticleBodySection: _ArticleBodySection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]},\r\n});\r\n\n\n//# sourceURL=webpack:///./src/components/ArticleReferenceCard.js?");

/***/ }),

/***/ "./src/components/PagingBlock.js":
/*!***************************************!*\
  !*** ./src/components/PagingBlock.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  template: `\r\n    <div class=\"d-flex justify-content-between v-interval\">\r\n      <div class=\"v-interval\">\r\n        <button class=\"btn btn-link p-0\" @click=\"$emit('click', page)\">再読み込み</button>\r\n        <button class=\"btn btn-link p-0\" @click=\"$emit('click', 1)\" v-if=\"page > 1\">最新を取得</button>\r\n        <button class=\"btn btn-link p-0\" @click=\"$emit('click', page - 1)\" v-if=\"page > 1\">← 前の25件</button>\r\n        <button class=\"btn btn-link p-0\" @click=\"$emit('click', page + 1)\">→ 次の25件</button>\r\n        <button class=\"btn btn-link p-0\" @click=\"$emit('click', page + 5)\">古い方へ+5p</button>\r\n      </div>\r\n      <div class=\"v-interval text-right text-inconspicuous\">\r\n        p.{{page}}\r\n      </div>\r\n    </div>\r\n  `,\r\n  name: 'paging-block',\r\n  props: {page: Number},\r\n});\r\n\n\n//# sourceURL=webpack:///./src/components/PagingBlock.js?");

/***/ })

/******/ });