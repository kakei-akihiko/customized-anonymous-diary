// ==UserScript==
// @name         カスタマイズ版匿名日記
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://anond.hatelabo.jp/customized
// @grant        none
// ==/UserScript==
/******/(()=>{// webpackBootstrap
/******/var n={
/***/902:
/***/(n,t,e)=>{"use strict";e.r(t),
/* harmony export */e.d(t,{
/* harmony export */default:()=>l
/* harmony export */});
/* harmony import */var o=e(601),r=e.n(o),a=e(314),i=e.n(a)()(r());
/* harmony import */
// Module
i.push([n.id,"\nhtml, body {margin: 0; padding: 0; height: 100%}\n.h-100 {height: 100%}\n.h-0 {height: 0}\n.scroll {overflow-y: auto}\n.v-interval > *:nth-child(n+2) {margin-left: 0.5rem}\n:root {--font-family-sans-serif: sans-serif}\nbody,pre,code,kbd,samp,.btn,p {font-family: sans-seif}\n.text-inconspicuous {color: rgb(100,100,100); font-size: small}\n#hatena-anond, #original > p, #original > h1 {display: none}\n#app .container-main {\n  max-width: 550pt;\n}\n",""])
;
// Exports
/* harmony default export */const l=i;
/***/},
/***/394:
/***/(n,t,e)=>{"use strict";e.r(t),
/* harmony export */e.d(t,{
/* harmony export */default:()=>l
/* harmony export */});
/* harmony import */var o=e(601),r=e.n(o),a=e(314),i=e.n(a)()(r());
/* harmony import */
// Module
i.push([n.id,'\n.article-body p[data-v-f7c01858] {\n  line-height: 2.8rem;\n  font-size: 1.8rem;\n}\n.article-body blockquote[data-v-f7c01858] {\n  font-size: medium;\n}\n.article-body h4[data-v-f7c01858] {\n  font-size: large;\n}\n.article-body pre[data-v-f7c01858] {\n  font-size: 1rem;\n  font-family: "源ノ角ゴシック Code JP";\n}\n',""])
;
// Exports
/* harmony default export */const l=i;
/***/},
/***/437:
/***/(n,t,e)=>{"use strict";e.r(t),
/* harmony export */e.d(t,{
/* harmony export */default:()=>l
/* harmony export */});
/* harmony import */var o=e(601),r=e.n(o),a=e(314),i=e.n(a)()(r());
/* harmony import */
// Module
i.push([n.id,"\n.main-content-title[data-v-1cd24d60] {\n  font-size: 1.7rem\n}\n.text-refered[data-v-1cd24d60] {\n  font-size: 80%; margin-left: .5rem\n}\n",""])
;
// Exports
/* harmony default export */const l=i;
/***/},
/***/178:
/***/(n,t,e)=>{"use strict";e.r(t),
/* harmony export */e.d(t,{
/* harmony export */default:()=>l
/* harmony export */});
/* harmony import */var o=e(601),r=e.n(o),a=e(314),i=e.n(a)()(r());
/* harmony import */
// Module
i.push([n.id,"\n.refer-entire[data-v-8cc9b702] {\n  background-color: honeydew\n}\n.refer-title[data-v-8cc9b702] {\n  font-size: 1.7rem\n}\n",""])
;
// Exports
/* harmony default export */const l=i;
/***/},
/***/36:
/***/(n,t,e)=>{"use strict";e.r(t),
/* harmony export */e.d(t,{
/* harmony export */default:()=>l
/* harmony export */});
/* harmony import */var o=e(601),r=e.n(o),a=e(314),i=e.n(a)()(r());
/* harmony import */
// Module
i.push([n.id,"\n.buttons button[data-v-50022ed0] {\n  font-size: 1.5rem;\n}\n",""]);
// Exports
/* harmony default export */const l=i;
/***/},
/***/23:
/***/(n,t,e)=>{"use strict";e.r(t),
/* harmony export */e.d(t,{
/* harmony export */default:()=>A
/* harmony export */});
/* harmony import */var o=e(601),r=e.n(o),a=e(314),i=e.n(a),l=e(417),s=e.n(l),d=new URL(/* asset import */e(682),e.b),m=new URL(/* asset import */e(512),e.b),c=new URL(/* asset import */e(526),e.b),p=new URL(/* asset import */e(792),e.b),f=new URL(/* asset import */e(285),e.b),g=new URL(/* asset import */e(969),e.b),b=new URL(/* asset import */e(6),e.b),u=new URL(/* asset import */e(499),e.b),h=new URL(/* asset import */e(226),e.b),x=new URL(/* asset import */e(886),e.b),v=i()(r()),w=s()(d),y=s()(m),k=s()(c),_=s()(p),z=s()(f),S=s()(g),C=s()(b),j=s()(u),O=s()(h),E=s()(x);
/* harmony import */
// Module
v.push([n.id,`/*!\n * Bootswatch v4.6.2\n * Homepage: https://bootswatch.com\n * Copyright 2012-2022 Thomas Park\n * Licensed under MIT\n * Based on Bootstrap\n*/\n/*!\n * Bootstrap v4.6.2 (https://getbootstrap.com/)\n * Copyright 2011-2022 The Bootstrap Authors\n * Copyright 2011-2022 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n:root {\n  --blue: #4582ec;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #d9534f;\n  --orange: #fd7e14;\n  --yellow: #f0ad4e;\n  --green: #02b875;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #868e96;\n  --gray-dark: #343a40;\n  --primary: #4582ec;\n  --secondary: #adb5bd;\n  --success: #02b875;\n  --info: #17a2b8;\n  --warning: #f0ad4e;\n  --danger: #d9534f;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size: 1.063rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #343a40;\n  text-align: left;\n  background-color: #fff;\n}\n\n[tabindex="-1"]:focus:not(:focus-visible) {\n  outline: 0 !important;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n  -webkit-text-decoration-skip-ink: none;\n  text-decoration-skip-ink: none;\n}\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: 700;\n}\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0;\n}\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -.25em;\n}\n\nsup {\n  top: -.5em;\n}\n\na {\n  color: #4582ec;\n  text-decoration: none;\n  background-color: transparent;\n}\n\na:hover {\n  color: #1559cf;\n  text-decoration: underline;\n}\n\na:not([href]):not([class]) {\n  color: inherit;\n  text-decoration: none;\n}\n\na:not([href]):not([class]):hover {\n  color: inherit;\n  text-decoration: none;\n}\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size: 1em;\n}\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar;\n}\n\nfigure {\n  margin: 0 0 1rem;\n}\n\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\n\nsvg {\n  overflow: hidden;\n  vertical-align: middle;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #868e96;\n  text-align: left;\n  caption-side: bottom;\n}\n\nth {\n  text-align: inherit;\n  text-align: -webkit-match-parent;\n}\n\nlabel {\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n\nbutton {\n  border-radius: 0;\n}\n\nbutton:focus:not(:focus-visible) {\n  outline: 0;\n}\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nbutton,\ninput {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n[role="button"] {\n  cursor: pointer;\n}\n\nselect {\n  word-wrap: normal;\n}\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\nbutton:not(:disabled),\n[type="button"]:not(:disabled),\n[type="reset"]:not(:disabled),\n[type="submit"]:not(:disabled) {\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ninput[type="radio"],\ninput[type="checkbox"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type="search"] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n\noutput {\n  display: inline-block;\n}\n\nsummary {\n  display: list-item;\n  cursor: pointer;\n}\n\ntemplate {\n  display: none;\n}\n\n[hidden] {\n  display: none !important;\n}\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1, .h1 {\n  font-size: 2.6575rem;\n}\n\nh2, .h2 {\n  font-size: 2.126rem;\n}\n\nh3, .h3 {\n  font-size: 1.86025rem;\n}\n\nh4, .h4 {\n  font-size: 1.5945rem;\n}\n\nh5, .h5 {\n  font-size: 1.32875rem;\n}\n\nh6, .h6 {\n  font-size: 1.063rem;\n}\n\n.lead {\n  font-size: 1.32875rem;\n  font-weight: 300;\n}\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\nsmall,\n.small {\n  font-size: 0.875em;\n  font-weight: 400;\n}\n\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline-item {\n  display: inline-block;\n}\n\n.list-inline-item:not(:last-child) {\n  margin-right: 0.5rem;\n}\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.32875rem;\n}\n\n.blockquote-footer {\n  display: block;\n  font-size: 0.875em;\n  color: #868e96;\n}\n\n.blockquote-footer::before {\n  content: "\\2014\\00A0";\n}\n\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto;\n}\n\n.figure {\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n\n.figure-caption {\n  font-size: 90%;\n  color: #868e96;\n}\n\ncode {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-wrap: break-word;\n}\n\na > code {\n  color: inherit;\n}\n\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem;\n}\n\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: 700;\n}\n\npre {\n  display: block;\n  font-size: 87.5%;\n  color: #212529;\n}\n\npre code {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n\n.container,\n.container-fluid,\n.container-sm,\n.container-md,\n.container-lg,\n.container-xl {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  .container, .container-sm {\n    max-width: 540px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container, .container-sm, .container-md {\n    max-width: 720px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container, .container-sm, .container-md, .container-lg {\n    max-width: 960px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container, .container-sm, .container-md, .container-lg, .container-xl {\n    max-width: 1140px;\n  }\n}\n\n.row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.no-gutters > .col,\n.no-gutters > [class*="col-"] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col {\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.row-cols-1 > * {\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.row-cols-2 > * {\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.row-cols-3 > * {\n  -ms-flex: 0 0 33.333333%;\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\n.row-cols-4 > * {\n  -ms-flex: 0 0 25%;\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.row-cols-5 > * {\n  -ms-flex: 0 0 20%;\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n\n.row-cols-6 > * {\n  -ms-flex: 0 0 16.666667%;\n  flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n\n.col-auto {\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%;\n}\n\n.col-1 {\n  -ms-flex: 0 0 8.333333%;\n  flex: 0 0 8.333333%;\n  max-width: 8.333333%;\n}\n\n.col-2 {\n  -ms-flex: 0 0 16.666667%;\n  flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n\n.col-3 {\n  -ms-flex: 0 0 25%;\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.col-4 {\n  -ms-flex: 0 0 33.333333%;\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\n.col-5 {\n  -ms-flex: 0 0 41.666667%;\n  flex: 0 0 41.666667%;\n  max-width: 41.666667%;\n}\n\n.col-6 {\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.col-7 {\n  -ms-flex: 0 0 58.333333%;\n  flex: 0 0 58.333333%;\n  max-width: 58.333333%;\n}\n\n.col-8 {\n  -ms-flex: 0 0 66.666667%;\n  flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n\n.col-9 {\n  -ms-flex: 0 0 75%;\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.col-10 {\n  -ms-flex: 0 0 83.333333%;\n  flex: 0 0 83.333333%;\n  max-width: 83.333333%;\n}\n\n.col-11 {\n  -ms-flex: 0 0 91.666667%;\n  flex: 0 0 91.666667%;\n  max-width: 91.666667%;\n}\n\n.col-12 {\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.order-first {\n  -ms-flex-order: -1;\n  order: -1;\n}\n\n.order-last {\n  -ms-flex-order: 13;\n  order: 13;\n}\n\n.order-0 {\n  -ms-flex-order: 0;\n  order: 0;\n}\n\n.order-1 {\n  -ms-flex-order: 1;\n  order: 1;\n}\n\n.order-2 {\n  -ms-flex-order: 2;\n  order: 2;\n}\n\n.order-3 {\n  -ms-flex-order: 3;\n  order: 3;\n}\n\n.order-4 {\n  -ms-flex-order: 4;\n  order: 4;\n}\n\n.order-5 {\n  -ms-flex-order: 5;\n  order: 5;\n}\n\n.order-6 {\n  -ms-flex-order: 6;\n  order: 6;\n}\n\n.order-7 {\n  -ms-flex-order: 7;\n  order: 7;\n}\n\n.order-8 {\n  -ms-flex-order: 8;\n  order: 8;\n}\n\n.order-9 {\n  -ms-flex-order: 9;\n  order: 9;\n}\n\n.order-10 {\n  -ms-flex-order: 10;\n  order: 10;\n}\n\n.order-11 {\n  -ms-flex-order: 11;\n  order: 11;\n}\n\n.order-12 {\n  -ms-flex-order: 12;\n  order: 12;\n}\n\n.offset-1 {\n  margin-left: 8.333333%;\n}\n\n.offset-2 {\n  margin-left: 16.666667%;\n}\n\n.offset-3 {\n  margin-left: 25%;\n}\n\n.offset-4 {\n  margin-left: 33.333333%;\n}\n\n.offset-5 {\n  margin-left: 41.666667%;\n}\n\n.offset-6 {\n  margin-left: 50%;\n}\n\n.offset-7 {\n  margin-left: 58.333333%;\n}\n\n.offset-8 {\n  margin-left: 66.666667%;\n}\n\n.offset-9 {\n  margin-left: 75%;\n}\n\n.offset-10 {\n  margin-left: 83.333333%;\n}\n\n.offset-11 {\n  margin-left: 91.666667%;\n}\n\n@media (min-width: 576px) {\n  .col-sm {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .row-cols-sm-1 > * {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .row-cols-sm-2 > * {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .row-cols-sm-3 > * {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .row-cols-sm-4 > * {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .row-cols-sm-5 > * {\n    -ms-flex: 0 0 20%;\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .row-cols-sm-6 > * {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-sm-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .col-sm-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-sm-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-sm-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-sm-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-sm-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-sm-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-sm-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-sm-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-sm-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-sm-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-sm-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-sm-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-sm-first {\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-sm-last {\n    -ms-flex-order: 13;\n    order: 13;\n  }\n  .order-sm-0 {\n    -ms-flex-order: 0;\n    order: 0;\n  }\n  .order-sm-1 {\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-sm-2 {\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-sm-3 {\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-sm-4 {\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-sm-5 {\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-sm-6 {\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-sm-7 {\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-sm-8 {\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-sm-9 {\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-sm-10 {\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-sm-11 {\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-sm-12 {\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n  .offset-sm-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-sm-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n  .offset-sm-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-sm-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n  .offset-sm-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-sm-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n  .offset-sm-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-sm-11 {\n    margin-left: 91.666667%;\n  }\n}\n\n@media (min-width: 768px) {\n  .col-md {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .row-cols-md-1 > * {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .row-cols-md-2 > * {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .row-cols-md-3 > * {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .row-cols-md-4 > * {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .row-cols-md-5 > * {\n    -ms-flex: 0 0 20%;\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .row-cols-md-6 > * {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-md-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .col-md-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-md-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-md-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-md-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-md-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-md-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-md-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-md-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-md-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-md-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-md-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-md-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-md-first {\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-md-last {\n    -ms-flex-order: 13;\n    order: 13;\n  }\n  .order-md-0 {\n    -ms-flex-order: 0;\n    order: 0;\n  }\n  .order-md-1 {\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-md-2 {\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-md-3 {\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-md-4 {\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-md-5 {\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-md-6 {\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-md-7 {\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-md-8 {\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-md-9 {\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-md-10 {\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-md-11 {\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-md-12 {\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-md-0 {\n    margin-left: 0;\n  }\n  .offset-md-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-md-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n  .offset-md-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-md-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n  .offset-md-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-md-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n  .offset-md-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-md-11 {\n    margin-left: 91.666667%;\n  }\n}\n\n@media (min-width: 992px) {\n  .col-lg {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .row-cols-lg-1 > * {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .row-cols-lg-2 > * {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .row-cols-lg-3 > * {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .row-cols-lg-4 > * {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .row-cols-lg-5 > * {\n    -ms-flex: 0 0 20%;\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .row-cols-lg-6 > * {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-lg-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .col-lg-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-lg-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-lg-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-lg-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-lg-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-lg-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-lg-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-lg-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-lg-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-lg-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-lg-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-lg-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-lg-first {\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-lg-last {\n    -ms-flex-order: 13;\n    order: 13;\n  }\n  .order-lg-0 {\n    -ms-flex-order: 0;\n    order: 0;\n  }\n  .order-lg-1 {\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-lg-2 {\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-lg-3 {\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-lg-4 {\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-lg-5 {\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-lg-6 {\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-lg-7 {\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-lg-8 {\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-lg-9 {\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-lg-10 {\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-lg-11 {\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-lg-12 {\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-lg-0 {\n    margin-left: 0;\n  }\n  .offset-lg-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-lg-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n  .offset-lg-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-lg-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n  .offset-lg-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-lg-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n  .offset-lg-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-lg-11 {\n    margin-left: 91.666667%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-xl {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .row-cols-xl-1 > * {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .row-cols-xl-2 > * {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .row-cols-xl-3 > * {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .row-cols-xl-4 > * {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .row-cols-xl-5 > * {\n    -ms-flex: 0 0 20%;\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .row-cols-xl-6 > * {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-xl-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .col-xl-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-xl-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-xl-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-xl-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-xl-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-xl-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-xl-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-xl-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-xl-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-xl-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-xl-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-xl-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-xl-first {\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-xl-last {\n    -ms-flex-order: 13;\n    order: 13;\n  }\n  .order-xl-0 {\n    -ms-flex-order: 0;\n    order: 0;\n  }\n  .order-xl-1 {\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-xl-2 {\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-xl-3 {\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-xl-4 {\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-xl-5 {\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-xl-6 {\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-xl-7 {\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-xl-8 {\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-xl-9 {\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-xl-10 {\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-xl-11 {\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-xl-12 {\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-xl-0 {\n    margin-left: 0;\n  }\n  .offset-xl-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-xl-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-xl-3 {\n    margin-left: 25%;\n  }\n  .offset-xl-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-xl-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-xl-6 {\n    margin-left: 50%;\n  }\n  .offset-xl-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-xl-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-xl-9 {\n    margin-left: 75%;\n  }\n  .offset-xl-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-xl-11 {\n    margin-left: 91.666667%;\n  }\n}\n\n.table {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #343a40;\n}\n\n.table th,\n.table td {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.table thead th {\n  vertical-align: bottom;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.1);\n}\n\n.table tbody + tbody {\n  border-top: 2px solid rgba(0, 0, 0, 0.1);\n}\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem;\n}\n\n.table-bordered {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.table-bordered th,\n.table-bordered td {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.table-bordered thead th,\n.table-bordered thead td {\n  border-bottom-width: 2px;\n}\n\n.table-borderless th,\n.table-borderless td,\n.table-borderless thead th,\n.table-borderless tbody + tbody {\n  border: 0;\n}\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.table-hover tbody tr:hover {\n  color: #343a40;\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #cbdcfa;\n}\n\n.table-primary th,\n.table-primary td,\n.table-primary thead th,\n.table-primary tbody + tbody {\n  border-color: #9ebef5;\n}\n\n.table-hover .table-primary:hover {\n  background-color: #b4ccf8;\n}\n\n.table-hover .table-primary:hover > td,\n.table-hover .table-primary:hover > th {\n  background-color: #b4ccf8;\n}\n\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #e8eaed;\n}\n\n.table-secondary th,\n.table-secondary td,\n.table-secondary thead th,\n.table-secondary tbody + tbody {\n  border-color: #d4d9dd;\n}\n\n.table-hover .table-secondary:hover {\n  background-color: #dadde2;\n}\n\n.table-hover .table-secondary:hover > td,\n.table-hover .table-secondary:hover > th {\n  background-color: #dadde2;\n}\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #b8ebd8;\n}\n\n.table-success th,\n.table-success td,\n.table-success thead th,\n.table-success tbody + tbody {\n  border-color: #7bdab7;\n}\n\n.table-hover .table-success:hover {\n  background-color: #a4e5cd;\n}\n\n.table-hover .table-success:hover > td,\n.table-hover .table-success:hover > th {\n  background-color: #a4e5cd;\n}\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #bee5eb;\n}\n\n.table-info th,\n.table-info td,\n.table-info thead th,\n.table-info tbody + tbody {\n  border-color: #86cfda;\n}\n\n.table-hover .table-info:hover {\n  background-color: #abdde5;\n}\n\n.table-hover .table-info:hover > td,\n.table-hover .table-info:hover > th {\n  background-color: #abdde5;\n}\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #fbe8cd;\n}\n\n.table-warning th,\n.table-warning td,\n.table-warning thead th,\n.table-warning tbody + tbody {\n  border-color: #f7d4a3;\n}\n\n.table-hover .table-warning:hover {\n  background-color: #f9ddb5;\n}\n\n.table-hover .table-warning:hover > td,\n.table-hover .table-warning:hover > th {\n  background-color: #f9ddb5;\n}\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f4cfce;\n}\n\n.table-danger th,\n.table-danger td,\n.table-danger thead th,\n.table-danger tbody + tbody {\n  border-color: #eba6a3;\n}\n\n.table-hover .table-danger:hover {\n  background-color: #efbbb9;\n}\n\n.table-hover .table-danger:hover > td,\n.table-hover .table-danger:hover > th {\n  background-color: #efbbb9;\n}\n\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe;\n}\n\n.table-light th,\n.table-light td,\n.table-light thead th,\n.table-light tbody + tbody {\n  border-color: #fbfcfc;\n}\n\n.table-hover .table-light:hover {\n  background-color: #ececf6;\n}\n\n.table-hover .table-light:hover > td,\n.table-hover .table-light:hover > th {\n  background-color: #ececf6;\n}\n\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca;\n}\n\n.table-dark th,\n.table-dark td,\n.table-dark thead th,\n.table-dark tbody + tbody {\n  border-color: #95999c;\n}\n\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe;\n}\n\n.table-hover .table-dark:hover > td,\n.table-hover .table-dark:hover > th {\n  background-color: #b9bbbe;\n}\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-hover .table-active:hover > td,\n.table-hover .table-active:hover > th {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table .thead-dark th {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #454d55;\n}\n\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: rgba(0, 0, 0, 0.1);\n}\n\n.table-dark {\n  color: #fff;\n  background-color: #343a40;\n}\n\n.table-dark th,\n.table-dark td,\n.table-dark thead th {\n  border-color: #454d55;\n}\n\n.table-dark.table-bordered {\n  border: 0;\n}\n\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n\n.table-dark.table-hover tbody tr:hover {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.075);\n}\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-sm > .table-bordered {\n    border: 0;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-md > .table-bordered {\n    border: 0;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-lg > .table-bordered {\n    border: 0;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-xl > .table-bordered {\n    border: 0;\n  }\n}\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.table-responsive > .table-bordered {\n  border: 0;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1.1rem;\n  font-size: 1.063rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .form-control {\n    transition: none;\n  }\n}\n\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n\n.form-control:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #b9d0f8;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(69, 130, 236, 0.25);\n}\n\n.form-control::-webkit-input-placeholder {\n  color: #868e96;\n  opacity: 1;\n}\n\n.form-control::-moz-placeholder {\n  color: #868e96;\n  opacity: 1;\n}\n\n.form-control:-ms-input-placeholder {\n  color: #868e96;\n  opacity: 1;\n}\n\n.form-control::-ms-input-placeholder {\n  color: #868e96;\n  opacity: 1;\n}\n\n.form-control::placeholder {\n  color: #868e96;\n  opacity: 1;\n}\n\n.form-control:disabled, .form-control[readonly] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n\ninput[type="date"].form-control,\ninput[type="time"].form-control,\ninput[type="datetime-local"].form-control,\ninput[type="month"].form-control {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\nselect.form-control:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #495057;\n}\n\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n\n.form-control-file,\n.form-control-range {\n  display: block;\n  width: 100%;\n}\n\n.col-form-label {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.32875rem;\n  line-height: 1.5;\n}\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.930125rem;\n  line-height: 1.5;\n}\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: 0.5rem 0;\n  margin-bottom: 0;\n  font-size: 1.063rem;\n  line-height: 1.5;\n  color: #343a40;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n\n.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.form-control-sm {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.930125rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.form-control-lg {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.32875rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\nselect.form-control[size], select.form-control[multiple] {\n  height: auto;\n}\n\ntextarea.form-control {\n  height: auto;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\n.form-text {\n  display: block;\n  margin-top: 0.25rem;\n}\n\n.form-row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px;\n}\n\n.form-row > .col,\n.form-row > [class*="col-"] {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem;\n}\n\n.form-check-input {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem;\n}\n\n.form-check-input[disabled] ~ .form-check-label,\n.form-check-input:disabled ~ .form-check-label {\n  color: #868e96;\n}\n\n.form-check-label {\n  margin-bottom: 0;\n}\n\n.form-check-inline {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n\n.form-check-inline .form-check-input {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n}\n\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #02b875;\n}\n\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.6875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(2, 184, 117, 0.9);\n  border-radius: 0.25rem;\n}\n\n.form-row > .col > .valid-tooltip,\n.form-row > [class*="col-"] > .valid-tooltip {\n  left: 5px;\n}\n\n.was-validated :valid ~ .valid-feedback,\n.was-validated :valid ~ .valid-tooltip,\n.is-valid ~ .valid-feedback,\n.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control:valid, .form-control.is-valid {\n  border-color: #02b875;\n  padding-right: calc(1.5em + 1rem) !important;\n  background-image: url(${w});\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.25rem) center;\n  background-size: calc(0.75em + 0.5rem) calc(0.75em + 0.5rem);\n}\n\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus {\n  border-color: #02b875;\n  box-shadow: 0 0 0 0.2rem rgba(2, 184, 117, 0.25);\n}\n\n.was-validated select.form-control:valid, select.form-control.is-valid {\n  padding-right: 4.4rem !important;\n  background-position: right 2.2rem center;\n}\n\n.was-validated textarea.form-control:valid, textarea.form-control.is-valid {\n  padding-right: calc(1.5em + 1rem);\n  background-position: top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem);\n}\n\n.was-validated .custom-select:valid, .custom-select.is-valid {\n  border-color: #02b875;\n  padding-right: calc(0.75em + 2.85rem) !important;\n  background: url(${y}) right 1.1rem center/8px 10px no-repeat, #fff url(${w}) center right 2.1rem/calc(0.75em + 0.5rem) calc(0.75em + 0.5rem) no-repeat;\n}\n\n.was-validated .custom-select:valid:focus, .custom-select.is-valid:focus {\n  border-color: #02b875;\n  box-shadow: 0 0 0 0.2rem rgba(2, 184, 117, 0.25);\n}\n\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #02b875;\n}\n\n.was-validated .form-check-input:valid ~ .valid-feedback,\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\n.form-check-input.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color: #02b875;\n}\n\n.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n  border-color: #02b875;\n}\n\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  border-color: #03ea95;\n  background-color: #03ea95;\n}\n\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(2, 184, 117, 0.25);\n}\n\n.was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #02b875;\n}\n\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\n  border-color: #02b875;\n}\n\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\n  border-color: #02b875;\n  box-shadow: 0 0 0 0.2rem rgba(2, 184, 117, 0.25);\n}\n\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #d9534f;\n}\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.6875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(217, 83, 79, 0.9);\n  border-radius: 0.25rem;\n}\n\n.form-row > .col > .invalid-tooltip,\n.form-row > [class*="col-"] > .invalid-tooltip {\n  left: 5px;\n}\n\n.was-validated :invalid ~ .invalid-feedback,\n.was-validated :invalid ~ .invalid-tooltip,\n.is-invalid ~ .invalid-feedback,\n.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  border-color: #d9534f;\n  padding-right: calc(1.5em + 1rem) !important;\n  background-image: url(${k});\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.25rem) center;\n  background-size: calc(0.75em + 0.5rem) calc(0.75em + 0.5rem);\n}\n\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\n  border-color: #d9534f;\n  box-shadow: 0 0 0 0.2rem rgba(217, 83, 79, 0.25);\n}\n\n.was-validated select.form-control:invalid, select.form-control.is-invalid {\n  padding-right: 4.4rem !important;\n  background-position: right 2.2rem center;\n}\n\n.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\n  padding-right: calc(1.5em + 1rem);\n  background-position: top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem);\n}\n\n.was-validated .custom-select:invalid, .custom-select.is-invalid {\n  border-color: #d9534f;\n  padding-right: calc(0.75em + 2.85rem) !important;\n  background: url(${y}) right 1.1rem center/8px 10px no-repeat, #fff url(${k}) center right 2.1rem/calc(0.75em + 0.5rem) calc(0.75em + 0.5rem) no-repeat;\n}\n\n.was-validated .custom-select:invalid:focus, .custom-select.is-invalid:focus {\n  border-color: #d9534f;\n  box-shadow: 0 0 0 0.2rem rgba(217, 83, 79, 0.25);\n}\n\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #d9534f;\n}\n\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\n.form-check-input.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\n  color: #d9534f;\n}\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\n  border-color: #d9534f;\n}\n\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n  border-color: #e27c79;\n  background-color: #e27c79;\n}\n\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(217, 83, 79, 0.25);\n}\n\n.was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #d9534f;\n}\n\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\n  border-color: #d9534f;\n}\n\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\n  border-color: #d9534f;\n  box-shadow: 0 0 0 0.2rem rgba(217, 83, 79, 0.25);\n}\n\n.form-inline {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row wrap;\n  flex-flow: row wrap;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.form-inline .form-check {\n  width: 100%;\n}\n\n@media (min-width: 576px) {\n  .form-inline label {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    margin-bottom: 0;\n  }\n  .form-inline .form-group {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    -ms-flex-flow: row wrap;\n    flex-flow: row wrap;\n    -ms-flex-align: center;\n    align-items: center;\n    margin-bottom: 0;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-plaintext {\n    display: inline-block;\n  }\n  .form-inline .input-group,\n  .form-inline .custom-select {\n    width: auto;\n  }\n  .form-inline .form-check {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    width: auto;\n    padding-left: 0;\n  }\n  .form-inline .form-check-input {\n    position: relative;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    margin-top: 0;\n    margin-right: 0.25rem;\n    margin-left: 0;\n  }\n  .form-inline .custom-control {\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n  }\n  .form-inline .custom-control-label {\n    margin-bottom: 0;\n  }\n}\n\n.btn {\n  display: inline-block;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-weight: 400;\n  color: #343a40;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.5rem 1.1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 1.078em;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .btn {\n    transition: none;\n  }\n}\n\n.btn:hover {\n  color: #343a40;\n  text-decoration: none;\n}\n\n.btn:focus, .btn.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(69, 130, 236, 0.25);\n}\n\n.btn.disabled, .btn:disabled {\n  opacity: 0.65;\n}\n\n.btn:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\na.btn.disabled,\nfieldset:disabled a.btn {\n  pointer-events: none;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #4582ec;\n  border-color: #4582ec;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background-color: #226be8;\n  border-color: #1863e6;\n}\n\n.btn-primary:focus, .btn-primary.focus {\n  color: #fff;\n  background-color: #226be8;\n  border-color: #1863e6;\n  box-shadow: 0 0 0 0.2rem rgba(97, 149, 239, 0.5);\n}\n\n.btn-primary.disabled, .btn-primary:disabled {\n  color: #fff;\n  background-color: #4582ec;\n  border-color: #4582ec;\n}\n\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,\n.show > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #1863e6;\n  border-color: #165edb;\n}\n\n.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(97, 149, 239, 0.5);\n}\n\n.btn-secondary {\n  color: #fff;\n  background-color: #adb5bd;\n  border-color: #adb5bd;\n}\n\n.btn-secondary:hover {\n  color: #fff;\n  background-color: #98a2ac;\n  border-color: #919ca6;\n}\n\n.btn-secondary:focus, .btn-secondary.focus {\n  color: #fff;\n  background-color: #98a2ac;\n  border-color: #919ca6;\n  box-shadow: 0 0 0 0.2rem rgba(185, 192, 199, 0.5);\n}\n\n.btn-secondary.disabled, .btn-secondary:disabled {\n  color: #fff;\n  background-color: #adb5bd;\n  border-color: #adb5bd;\n}\n\n.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\n.show > .btn-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #919ca6;\n  border-color: #8a95a1;\n}\n\n.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-secondary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(185, 192, 199, 0.5);\n}\n\n.btn-success {\n  color: #fff;\n  background-color: #02b875;\n  border-color: #02b875;\n}\n\n.btn-success:hover {\n  color: #fff;\n  background-color: #02925d;\n  border-color: #018655;\n}\n\n.btn-success:focus, .btn-success.focus {\n  color: #fff;\n  background-color: #02925d;\n  border-color: #018655;\n  box-shadow: 0 0 0 0.2rem rgba(40, 195, 138, 0.5);\n}\n\n.btn-success.disabled, .btn-success:disabled {\n  color: #fff;\n  background-color: #02b875;\n  border-color: #02b875;\n}\n\n.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,\n.show > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #018655;\n  border-color: #01794d;\n}\n\n.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 195, 138, 0.5);\n}\n\n.btn-info {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-info:hover {\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b;\n}\n\n.btn-info:focus, .btn-info.focus {\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b;\n  box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\n}\n\n.btn-info.disabled, .btn-info:disabled {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,\n.show > .btn-info.dropdown-toggle {\n  color: #fff;\n  background-color: #117a8b;\n  border-color: #10707f;\n}\n\n.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,\n.show > .btn-info.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\n}\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.btn-warning:hover {\n  color: #fff;\n  background-color: #ed9d2b;\n  border-color: #ec971f;\n}\n\n.btn-warning:focus, .btn-warning.focus {\n  color: #fff;\n  background-color: #ed9d2b;\n  border-color: #ec971f;\n  box-shadow: 0 0 0 0.2rem rgba(242, 185, 105, 0.5);\n}\n\n.btn-warning.disabled, .btn-warning:disabled {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,\n.show > .btn-warning.dropdown-toggle {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #ea9214;\n}\n\n.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,\n.show > .btn-warning.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(242, 185, 105, 0.5);\n}\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.btn-danger:hover {\n  color: #fff;\n  background-color: #d23430;\n  border-color: #c9302c;\n}\n\n.btn-danger:focus, .btn-danger.focus {\n  color: #fff;\n  background-color: #d23430;\n  border-color: #c9302c;\n  box-shadow: 0 0 0 0.2rem rgba(223, 109, 105, 0.5);\n}\n\n.btn-danger.disabled, .btn-danger:disabled {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,\n.show > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #bf2e29;\n}\n\n.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,\n.show > .btn-danger.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(223, 109, 105, 0.5);\n}\n\n.btn-light {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-light:hover {\n  color: #212529;\n  background-color: #e2e6ea;\n  border-color: #dae0e5;\n}\n\n.btn-light:focus, .btn-light.focus {\n  color: #212529;\n  background-color: #e2e6ea;\n  border-color: #dae0e5;\n  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\n}\n\n.btn-light.disabled, .btn-light:disabled {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,\n.show > .btn-light.dropdown-toggle {\n  color: #212529;\n  background-color: #dae0e5;\n  border-color: #d3d9df;\n}\n\n.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,\n.show > .btn-light.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\n}\n\n.btn-dark {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-dark:hover {\n  color: #fff;\n  background-color: #23272b;\n  border-color: #1d2124;\n}\n\n.btn-dark:focus, .btn-dark.focus {\n  color: #fff;\n  background-color: #23272b;\n  border-color: #1d2124;\n  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\n}\n\n.btn-dark.disabled, .btn-dark:disabled {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,\n.show > .btn-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #1d2124;\n  border-color: #171a1d;\n}\n\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,\n.show > .btn-dark.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\n}\n\n.btn-outline-primary {\n  color: #4582ec;\n  border-color: #4582ec;\n}\n\n.btn-outline-primary:hover {\n  color: #fff;\n  background-color: #4582ec;\n  border-color: #4582ec;\n}\n\n.btn-outline-primary:focus, .btn-outline-primary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(69, 130, 236, 0.5);\n}\n\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\n  color: #4582ec;\n  background-color: transparent;\n}\n\n.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,\n.show > .btn-outline-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #4582ec;\n  border-color: #4582ec;\n}\n\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(69, 130, 236, 0.5);\n}\n\n.btn-outline-secondary {\n  color: #adb5bd;\n  border-color: #adb5bd;\n}\n\n.btn-outline-secondary:hover {\n  color: #fff;\n  background-color: #adb5bd;\n  border-color: #adb5bd;\n}\n\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(173, 181, 189, 0.5);\n}\n\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n  color: #adb5bd;\n  background-color: transparent;\n}\n\n.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,\n.show > .btn-outline-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #adb5bd;\n  border-color: #adb5bd;\n}\n\n.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-secondary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(173, 181, 189, 0.5);\n}\n\n.btn-outline-success {\n  color: #02b875;\n  border-color: #02b875;\n}\n\n.btn-outline-success:hover {\n  color: #fff;\n  background-color: #02b875;\n  border-color: #02b875;\n}\n\n.btn-outline-success:focus, .btn-outline-success.focus {\n  box-shadow: 0 0 0 0.2rem rgba(2, 184, 117, 0.5);\n}\n\n.btn-outline-success.disabled, .btn-outline-success:disabled {\n  color: #02b875;\n  background-color: transparent;\n}\n\n.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,\n.show > .btn-outline-success.dropdown-toggle {\n  color: #fff;\n  background-color: #02b875;\n  border-color: #02b875;\n}\n\n.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(2, 184, 117, 0.5);\n}\n\n.btn-outline-info {\n  color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info:hover {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info:focus, .btn-outline-info.focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-outline-info.disabled, .btn-outline-info:disabled {\n  color: #17a2b8;\n  background-color: transparent;\n}\n\n.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,\n.show > .btn-outline-info.dropdown-toggle {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-info.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-outline-warning {\n  color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.btn-outline-warning:hover {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.btn-outline-warning:focus, .btn-outline-warning.focus {\n  box-shadow: 0 0 0 0.2rem rgba(240, 173, 78, 0.5);\n}\n\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\n  color: #f0ad4e;\n  background-color: transparent;\n}\n\n.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,\n.show > .btn-outline-warning.dropdown-toggle {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-warning.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(240, 173, 78, 0.5);\n}\n\n.btn-outline-danger {\n  color: #d9534f;\n  border-color: #d9534f;\n}\n\n.btn-outline-danger:hover {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.btn-outline-danger:focus, .btn-outline-danger.focus {\n  box-shadow: 0 0 0 0.2rem rgba(217, 83, 79, 0.5);\n}\n\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\n  color: #d9534f;\n  background-color: transparent;\n}\n\n.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,\n.show > .btn-outline-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-danger.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(217, 83, 79, 0.5);\n}\n\n.btn-outline-light {\n  color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light:hover {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light:focus, .btn-outline-light.focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-outline-light.disabled, .btn-outline-light:disabled {\n  color: #f8f9fa;\n  background-color: transparent;\n}\n\n.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,\n.show > .btn-outline-light.dropdown-toggle {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-light.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-outline-dark {\n  color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-outline-dark:hover {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-outline-dark:focus, .btn-outline-dark.focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\n  color: #343a40;\n  background-color: transparent;\n}\n\n.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,\n.show > .btn-outline-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-dark.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-link {\n  font-weight: 400;\n  color: #4582ec;\n  text-decoration: none;\n}\n\n.btn-link:hover {\n  color: #1559cf;\n  text-decoration: underline;\n}\n\n.btn-link:focus, .btn-link.focus {\n  text-decoration: underline;\n}\n\n.btn-link:disabled, .btn-link.disabled {\n  color: #868e96;\n  pointer-events: none;\n}\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.32875rem;\n  line-height: 1.5;\n  border-radius: 2.688em;\n}\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.688rem;\n  line-height: 1.5;\n  border-radius: 0.844em;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n.btn-block + .btn-block {\n  margin-top: 0.5rem;\n}\n\ninput[type="submit"].btn-block,\ninput[type="reset"].btn-block,\ninput[type="button"].btn-block {\n  width: 100%;\n}\n\n.fade {\n  transition: opacity 0.15s linear;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fade {\n    transition: none;\n  }\n}\n\n.fade:not(.show) {\n  opacity: 0;\n}\n\n.collapse:not(.show) {\n  display: none;\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .collapsing {\n    transition: none;\n  }\n}\n\n.collapsing.width {\n  width: 0;\n  height: auto;\n  transition: width 0.35s ease;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .collapsing.width {\n    transition: none;\n  }\n}\n\n.dropup,\n.dropright,\n.dropdown,\n.dropleft {\n  position: relative;\n}\n\n.dropdown-toggle {\n  white-space: nowrap;\n}\n\n.dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: "";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n\n.dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1.063rem;\n  color: #343a40;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n\n.dropdown-menu-left {\n  right: auto;\n  left: 0;\n}\n\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n\n@media (min-width: 576px) {\n  .dropdown-menu-sm-left {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-sm-right {\n    right: 0;\n    left: auto;\n  }\n}\n\n@media (min-width: 768px) {\n  .dropdown-menu-md-left {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-md-right {\n    right: 0;\n    left: auto;\n  }\n}\n\n@media (min-width: 992px) {\n  .dropdown-menu-lg-left {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-lg-right {\n    right: 0;\n    left: auto;\n  }\n}\n\n@media (min-width: 1200px) {\n  .dropdown-menu-xl-left {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-xl-right {\n    right: 0;\n    left: auto;\n  }\n}\n\n.dropup .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n}\n\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: "";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropright .dropdown-menu {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem;\n}\n\n.dropright .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: "";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n\n.dropright .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropright .dropdown-toggle::after {\n  vertical-align: 0;\n}\n\n.dropleft .dropdown-menu {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem;\n}\n\n.dropleft .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: "";\n}\n\n.dropleft .dropdown-toggle::after {\n  display: none;\n}\n\n.dropleft .dropdown-toggle::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: "";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n\n.dropleft .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropleft .dropdown-toggle::before {\n  vertical-align: 0;\n}\n\n.dropdown-menu[x-placement^="top"], .dropdown-menu[x-placement^="right"], .dropdown-menu[x-placement^="bottom"], .dropdown-menu[x-placement^="left"] {\n  right: auto;\n  bottom: auto;\n}\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef;\n}\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n\n.dropdown-item:hover, .dropdown-item:focus {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #e9ecef;\n}\n\n.dropdown-item.active, .dropdown-item:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #4582ec;\n}\n\n.dropdown-item.disabled, .dropdown-item:disabled {\n  color: #adb5bd;\n  pointer-events: none;\n  background-color: transparent;\n}\n\n.dropdown-menu.show {\n  display: block;\n}\n\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.930125rem;\n  color: #868e96;\n  white-space: nowrap;\n}\n\n.dropdown-item-text {\n  display: block;\n  padding: 0.25rem 1.5rem;\n  color: #212529;\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n}\n\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover {\n  z-index: 1;\n}\n\n.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 1;\n}\n\n.btn-toolbar {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n}\n\n.btn-toolbar .input-group {\n  width: auto;\n}\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) {\n  margin-left: -1px;\n}\n\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.dropdown-toggle-split {\n  padding-right: 0.825rem;\n  padding-left: 0.825rem;\n}\n\n.dropdown-toggle-split::after,\n.dropup .dropdown-toggle-split::after,\n.dropright .dropdown-toggle-split::after {\n  margin-left: 0;\n}\n\n.dropleft .dropdown-toggle-split::before {\n  margin-right: 0;\n}\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n\n.btn-group-vertical {\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group {\n  width: 100%;\n}\n\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) {\n  margin-top: -1px;\n}\n\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group-vertical > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group-toggle > .btn,\n.btn-group-toggle > .btn-group > .btn {\n  margin-bottom: 0;\n}\n\n.btn-group-toggle > .btn input[type="radio"],\n.btn-group-toggle > .btn input[type="checkbox"],\n.btn-group-toggle > .btn-group > .btn input[type="radio"],\n.btn-group-toggle > .btn-group > .btn input[type="checkbox"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n\n.input-group {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  width: 100%;\n}\n\n.input-group > .form-control,\n.input-group > .form-control-plaintext,\n.input-group > .custom-select,\n.input-group > .custom-file {\n  position: relative;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  width: 1%;\n  min-width: 0;\n  margin-bottom: 0;\n}\n\n.input-group > .form-control + .form-control,\n.input-group > .form-control + .custom-select,\n.input-group > .form-control + .custom-file,\n.input-group > .form-control-plaintext + .form-control,\n.input-group > .form-control-plaintext + .custom-select,\n.input-group > .form-control-plaintext + .custom-file,\n.input-group > .custom-select + .form-control,\n.input-group > .custom-select + .custom-select,\n.input-group > .custom-select + .custom-file,\n.input-group > .custom-file + .form-control,\n.input-group > .custom-file + .custom-select,\n.input-group > .custom-file + .custom-file {\n  margin-left: -1px;\n}\n\n.input-group > .form-control:focus,\n.input-group > .custom-select:focus,\n.input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {\n  z-index: 3;\n}\n\n.input-group > .custom-file .custom-file-input:focus {\n  z-index: 4;\n}\n\n.input-group > .form-control:not(:first-child),\n.input-group > .custom-select:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group > .custom-file {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.input-group > .custom-file:not(:last-child) .custom-file-label,\n.input-group > .custom-file:not(:last-child) .custom-file-label::after {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group > .custom-file:not(:first-child) .custom-file-label {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group:not(.has-validation) > .form-control:not(:last-child),\n.input-group:not(.has-validation) > .custom-select:not(:last-child),\n.input-group:not(.has-validation) > .custom-file:not(:last-child) .custom-file-label,\n.input-group:not(.has-validation) > .custom-file:not(:last-child) .custom-file-label::after {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group.has-validation > .form-control:nth-last-child(n + 3),\n.input-group.has-validation > .custom-select:nth-last-child(n + 3),\n.input-group.has-validation > .custom-file:nth-last-child(n + 3) .custom-file-label,\n.input-group.has-validation > .custom-file:nth-last-child(n + 3) .custom-file-label::after {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group-prepend,\n.input-group-append {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.input-group-prepend .btn,\n.input-group-append .btn {\n  position: relative;\n  z-index: 2;\n}\n\n.input-group-prepend .btn:focus,\n.input-group-append .btn:focus {\n  z-index: 3;\n}\n\n.input-group-prepend .btn + .btn,\n.input-group-prepend .btn + .input-group-text,\n.input-group-prepend .input-group-text + .input-group-text,\n.input-group-prepend .input-group-text + .btn,\n.input-group-append .btn + .btn,\n.input-group-append .btn + .input-group-text,\n.input-group-append .input-group-text + .input-group-text,\n.input-group-append .input-group-text + .btn {\n  margin-left: -1px;\n}\n\n.input-group-prepend {\n  margin-right: -1px;\n}\n\n.input-group-append {\n  margin-left: -1px;\n}\n\n.input-group-text {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0.5rem 1.1rem;\n  margin-bottom: 0;\n  font-size: 1.063rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0.25rem;\n}\n\n.input-group-text input[type="radio"],\n.input-group-text input[type="checkbox"] {\n  margin-top: 0;\n}\n\n.input-group-lg > .form-control:not(textarea),\n.input-group-lg > .custom-select {\n  height: calc(1.5em + 1rem + 2px);\n}\n\n.input-group-lg > .form-control,\n.input-group-lg > .custom-select,\n.input-group-lg > .input-group-prepend > .input-group-text,\n.input-group-lg > .input-group-append > .input-group-text,\n.input-group-lg > .input-group-prepend > .btn,\n.input-group-lg > .input-group-append > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.32875rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\n.input-group-sm > .form-control:not(textarea),\n.input-group-sm > .custom-select {\n  height: calc(1.5em + 0.5rem + 2px);\n}\n\n.input-group-sm > .form-control,\n.input-group-sm > .custom-select,\n.input-group-sm > .input-group-prepend > .input-group-text,\n.input-group-sm > .input-group-append > .input-group-text,\n.input-group-sm > .input-group-prepend > .btn,\n.input-group-sm > .input-group-append > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.930125rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.input-group-lg > .custom-select,\n.input-group-sm > .custom-select {\n  padding-right: 2.1rem;\n}\n\n.input-group > .input-group-prepend > .btn,\n.input-group > .input-group-prepend > .input-group-text,\n.input-group:not(.has-validation) > .input-group-append:not(:last-child) > .btn,\n.input-group:not(.has-validation) > .input-group-append:not(:last-child) > .input-group-text,\n.input-group.has-validation > .input-group-append:nth-last-child(n + 3) > .btn,\n.input-group.has-validation > .input-group-append:nth-last-child(n + 3) > .input-group-text,\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group > .input-group-append > .btn,\n.input-group > .input-group-append > .input-group-text,\n.input-group > .input-group-prepend:not(:first-child) > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.custom-control {\n  position: relative;\n  z-index: 1;\n  display: block;\n  min-height: 1.5945rem;\n  padding-left: 1.5rem;\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n  print-color-adjust: exact;\n}\n\n.custom-control-inline {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-right: 1rem;\n}\n\n.custom-control-input {\n  position: absolute;\n  left: 0;\n  z-index: -1;\n  width: 1rem;\n  height: 1.29725rem;\n  opacity: 0;\n}\n\n.custom-control-input:checked ~ .custom-control-label::before {\n  color: #fff;\n  border-color: #4582ec;\n  background-color: #4582ec;\n}\n\n.custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(69, 130, 236, 0.25);\n}\n\n.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #b9d0f8;\n}\n\n.custom-control-input:not(:disabled):active ~ .custom-control-label::before {\n  color: #fff;\n  background-color: #e7effd;\n  border-color: #e7effd;\n}\n\n.custom-control-input[disabled] ~ .custom-control-label, .custom-control-input:disabled ~ .custom-control-label {\n  color: #868e96;\n}\n\n.custom-control-input[disabled] ~ .custom-control-label::before, .custom-control-input:disabled ~ .custom-control-label::before {\n  background-color: #e9ecef;\n}\n\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0;\n  vertical-align: top;\n}\n\n.custom-control-label::before {\n  position: absolute;\n  top: 0.29725rem;\n  left: -1.5rem;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  content: "";\n  background-color: #fff;\n  border: 1px solid #adb5bd;\n}\n\n.custom-control-label::after {\n  position: absolute;\n  top: 0.29725rem;\n  left: -1.5rem;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  content: "";\n  background: 50% / 50% 50% no-repeat;\n}\n\n.custom-checkbox .custom-control-label::before {\n  border-radius: 0.25rem;\n}\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(${_});\n}\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  border-color: #4582ec;\n  background-color: #4582ec;\n}\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image: url(${z});\n}\n\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(69, 130, 236, 0.5);\n}\n\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\n  background-color: rgba(69, 130, 236, 0.5);\n}\n\n.custom-radio .custom-control-label::before {\n  border-radius: 50%;\n}\n\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(${S});\n}\n\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(69, 130, 236, 0.5);\n}\n\n.custom-switch {\n  padding-left: 2.25rem;\n}\n\n.custom-switch .custom-control-label::before {\n  left: -2.25rem;\n  width: 1.75rem;\n  pointer-events: all;\n  border-radius: 0.5rem;\n}\n\n.custom-switch .custom-control-label::after {\n  top: calc(0.29725rem + 2px);\n  left: calc(-2.25rem + 2px);\n  width: calc(1rem - 4px);\n  height: calc(1rem - 4px);\n  background-color: #adb5bd;\n  border-radius: 0.5rem;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;\n  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-switch .custom-control-label::after {\n    transition: none;\n  }\n}\n\n.custom-switch .custom-control-input:checked ~ .custom-control-label::after {\n  background-color: #fff;\n  -webkit-transform: translateX(0.75rem);\n  transform: translateX(0.75rem);\n}\n\n.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(69, 130, 236, 0.5);\n}\n\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 2.1rem 0.5rem 1.1rem;\n  font-size: 1.063rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(${y}) right 1.1rem center/8px 10px no-repeat;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0.25rem;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.custom-select:focus {\n  border-color: #b9d0f8;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(69, 130, 236, 0.25);\n}\n\n.custom-select:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n\n.custom-select[multiple], .custom-select[size]:not([size="1"]) {\n  height: auto;\n  padding-right: 1.1rem;\n  background-image: none;\n}\n\n.custom-select:disabled {\n  color: #868e96;\n  background-color: #e9ecef;\n}\n\n.custom-select::-ms-expand {\n  display: none;\n}\n\n.custom-select:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #495057;\n}\n\n.custom-select-sm {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 0.930125rem;\n}\n\n.custom-select-lg {\n  height: calc(1.5em + 1rem + 2px);\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 1.32875rem;\n}\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 1rem + 2px);\n  margin-bottom: 0;\n}\n\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(1.5em + 1rem + 2px);\n  margin: 0;\n  overflow: hidden;\n  opacity: 0;\n}\n\n.custom-file-input:focus ~ .custom-file-label {\n  border-color: #b9d0f8;\n  box-shadow: 0 0 0 0.2rem rgba(69, 130, 236, 0.25);\n}\n\n.custom-file-input[disabled] ~ .custom-file-label,\n.custom-file-input:disabled ~ .custom-file-label {\n  background-color: #e9ecef;\n}\n\n.custom-file-input:lang(en) ~ .custom-file-label::after {\n  content: "Browse";\n}\n\n.custom-file-input ~ .custom-file-label[data-browse]::after {\n  content: attr(data-browse);\n}\n\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1.1rem;\n  overflow: hidden;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0.25rem;\n}\n\n.custom-file-label::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3;\n  display: block;\n  height: calc(1.5em + 1rem);\n  padding: 0.5rem 1.1rem;\n  line-height: 1.5;\n  color: #495057;\n  content: "Browse";\n  background-color: #e9ecef;\n  border-left: inherit;\n  border-radius: 0 0.25rem 0.25rem 0;\n}\n\n.custom-range {\n  width: 100%;\n  height: 1.4rem;\n  padding: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.custom-range:focus {\n  outline: 0;\n}\n\n.custom-range:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(69, 130, 236, 0.25);\n}\n\n.custom-range:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(69, 130, 236, 0.25);\n}\n\n.custom-range:focus::-ms-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(69, 130, 236, 0.25);\n}\n\n.custom-range::-moz-focus-outer {\n  border: 0;\n}\n\n.custom-range::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.25rem;\n  background-color: #4582ec;\n  border: 0;\n  border-radius: 1rem;\n  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-range::-webkit-slider-thumb {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n\n.custom-range::-webkit-slider-thumb:active {\n  background-color: #e7effd;\n}\n\n.custom-range::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #ddd;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n\n.custom-range::-moz-range-thumb {\n  width: 1rem;\n  height: 1rem;\n  background-color: #4582ec;\n  border: 0;\n  border-radius: 1rem;\n  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-range::-moz-range-thumb {\n    -moz-transition: none;\n    transition: none;\n  }\n}\n\n.custom-range::-moz-range-thumb:active {\n  background-color: #e7effd;\n}\n\n.custom-range::-moz-range-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #ddd;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n\n.custom-range::-ms-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: 0;\n  margin-right: 0.2rem;\n  margin-left: 0.2rem;\n  background-color: #4582ec;\n  border: 0;\n  border-radius: 1rem;\n  -ms-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  appearance: none;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-range::-ms-thumb {\n    -ms-transition: none;\n    transition: none;\n  }\n}\n\n.custom-range::-ms-thumb:active {\n  background-color: #e7effd;\n}\n\n.custom-range::-ms-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 0.5rem;\n}\n\n.custom-range::-ms-fill-lower {\n  background-color: #ddd;\n  border-radius: 1rem;\n}\n\n.custom-range::-ms-fill-upper {\n  margin-right: 15px;\n  background-color: #ddd;\n  border-radius: 1rem;\n}\n\n.custom-range:disabled::-webkit-slider-thumb {\n  background-color: #adb5bd;\n}\n\n.custom-range:disabled::-webkit-slider-runnable-track {\n  cursor: default;\n}\n\n.custom-range:disabled::-moz-range-thumb {\n  background-color: #adb5bd;\n}\n\n.custom-range:disabled::-moz-range-track {\n  cursor: default;\n}\n\n.custom-range:disabled::-ms-thumb {\n  background-color: #adb5bd;\n}\n\n.custom-control-label::before,\n.custom-file-label,\n.custom-select {\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-control-label::before,\n  .custom-file-label,\n  .custom-select {\n    transition: none;\n  }\n}\n\n.nav {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem;\n}\n\n.nav-link:hover, .nav-link:focus {\n  text-decoration: none;\n}\n\n.nav-link.disabled {\n  color: #868e96;\n  pointer-events: none;\n  cursor: default;\n}\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n\n.nav-tabs .nav-link {\n  margin-bottom: -1px;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n  isolation: isolate;\n  border-color: #e9ecef #e9ecef #ddd;\n}\n\n.nav-tabs .nav-link.disabled {\n  color: #868e96;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.nav-tabs .nav-link.active,\n.nav-tabs .nav-item.show .nav-link {\n  color: #495057;\n  background-color: #fff;\n  border-color: #ddd #ddd #fff;\n}\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.nav-pills .nav-link {\n  background: none;\n  border: 0;\n  border-radius: 0.25rem;\n}\n\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #4582ec;\n}\n\n.nav-fill > .nav-link,\n.nav-fill .nav-item {\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  text-align: center;\n}\n\n.nav-justified > .nav-link,\n.nav-justified .nav-item {\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  text-align: center;\n}\n\n.tab-content > .tab-pane {\n  display: none;\n}\n\n.tab-content > .active {\n  display: block;\n}\n\n.navbar {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n}\n\n.navbar .container,\n.navbar .container-fluid, .navbar .container-sm, .navbar .container-md, .navbar .container-lg, .navbar .container-xl {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.300688rem;\n  padding-bottom: 0.300688rem;\n  margin-right: 1rem;\n  font-size: 1.32875rem;\n  line-height: inherit;\n  white-space: nowrap;\n}\n\n.navbar-brand:hover, .navbar-brand:focus {\n  text-decoration: none;\n}\n\n.navbar-nav {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.navbar-nav .nav-link {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.navbar-nav .dropdown-menu {\n  position: static;\n  float: none;\n}\n\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.navbar-collapse {\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.32875rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 1.078em;\n}\n\n.navbar-toggler:hover, .navbar-toggler:focus {\n  text-decoration: none;\n}\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: "";\n  background: 50% / 100% 100% no-repeat;\n}\n\n.navbar-nav-scroll {\n  max-height: 75vh;\n  overflow-y: auto;\n}\n\n@media (max-width: 575.98px) {\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid, .navbar-expand-sm > .container-sm, .navbar-expand-sm > .container-md, .navbar-expand-sm > .container-lg, .navbar-expand-sm > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n  .navbar-expand-sm .navbar-nav {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .navbar-expand-sm .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-sm .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid, .navbar-expand-sm > .container-sm, .navbar-expand-sm > .container-md, .navbar-expand-sm > .container-lg, .navbar-expand-sm > .container-xl {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-sm .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-sm .navbar-collapse {\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto;\n  }\n  .navbar-expand-sm .navbar-toggler {\n    display: none;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid, .navbar-expand-md > .container-sm, .navbar-expand-md > .container-md, .navbar-expand-md > .container-lg, .navbar-expand-md > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n  .navbar-expand-md .navbar-nav {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .navbar-expand-md .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-md .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid, .navbar-expand-md > .container-sm, .navbar-expand-md > .container-md, .navbar-expand-md > .container-lg, .navbar-expand-md > .container-xl {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-md .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-md .navbar-collapse {\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto;\n  }\n  .navbar-expand-md .navbar-toggler {\n    display: none;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid, .navbar-expand-lg > .container-sm, .navbar-expand-lg > .container-md, .navbar-expand-lg > .container-lg, .navbar-expand-lg > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n  .navbar-expand-lg .navbar-nav {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .navbar-expand-lg .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid, .navbar-expand-lg > .container-sm, .navbar-expand-lg > .container-md, .navbar-expand-lg > .container-lg, .navbar-expand-lg > .container-xl {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-lg .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-lg .navbar-collapse {\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto;\n  }\n  .navbar-expand-lg .navbar-toggler {\n    display: none;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid, .navbar-expand-xl > .container-sm, .navbar-expand-xl > .container-md, .navbar-expand-xl > .container-lg, .navbar-expand-xl > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n  .navbar-expand-xl .navbar-nav {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .navbar-expand-xl .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-xl .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid, .navbar-expand-xl > .container-sm, .navbar-expand-xl > .container-md, .navbar-expand-xl > .container-lg, .navbar-expand-xl > .container-xl {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-xl .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-xl .navbar-collapse {\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto;\n  }\n  .navbar-expand-xl .navbar-toggler {\n    display: none;\n  }\n}\n\n.navbar-expand {\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n}\n\n.navbar-expand > .container,\n.navbar-expand > .container-fluid, .navbar-expand > .container-sm, .navbar-expand > .container-md, .navbar-expand > .container-lg, .navbar-expand > .container-xl {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.navbar-expand .navbar-nav {\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n\n.navbar-expand .navbar-nav .dropdown-menu {\n  position: absolute;\n}\n\n.navbar-expand .navbar-nav .nav-link {\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n}\n\n.navbar-expand > .container,\n.navbar-expand > .container-fluid, .navbar-expand > .container-sm, .navbar-expand > .container-md, .navbar-expand > .container-lg, .navbar-expand > .container-xl {\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n}\n\n.navbar-expand .navbar-nav-scroll {\n  overflow: visible;\n}\n\n.navbar-expand .navbar-collapse {\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -ms-flex-preferred-size: auto;\n  flex-basis: auto;\n}\n\n.navbar-expand .navbar-toggler {\n  display: none;\n}\n\n.navbar-light .navbar-brand {\n  color: #343a40;\n}\n\n.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n  color: #343a40;\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n  color: #343a40;\n}\n\n.navbar-light .navbar-nav .nav-link.disabled {\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: #343a40;\n}\n\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url(${C});\n}\n\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.navbar-light .navbar-text a {\n  color: #343a40;\n}\n\n.navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {\n  color: #343a40;\n}\n\n.navbar-dark .navbar-brand {\n  color: #fff;\n}\n\n.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n  color: #fff;\n}\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n  color: #fff;\n}\n\n.navbar-dark .navbar-nav .nav-link.disabled {\n  color: rgba(255, 255, 255, 0.25);\n}\n\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff;\n}\n\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.6);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(${j});\n}\n\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.navbar-dark .navbar-text a {\n  color: #fff;\n}\n\n.navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {\n  color: #fff;\n}\n\n.card {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n\n.card > hr {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.card > .list-group {\n  border-top: inherit;\n  border-bottom: inherit;\n}\n\n.card > .list-group:first-child {\n  border-top-width: 0;\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n\n.card > .list-group:last-child {\n  border-bottom-width: 0;\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n\n.card > .card-header + .list-group,\n.card > .list-group + .card-footer {\n  border-top: 0;\n}\n\n.card-body {\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 1.25rem;\n}\n\n.card-title {\n  margin-bottom: 0.75rem;\n}\n\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0;\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n.card-link:hover {\n  text-decoration: none;\n}\n\n.card-link + .card-link {\n  margin-left: 1.25rem;\n}\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.card-header:first-child {\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\n}\n\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.card-footer:last-child {\n  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\n}\n\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0;\n}\n\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem;\n}\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem;\n  border-radius: calc(0.25rem - 1px);\n}\n\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  width: 100%;\n}\n\n.card-img,\n.card-img-top {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n\n.card-img,\n.card-img-bottom {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n\n.card-deck .card {\n  margin-bottom: 15px;\n}\n\n@media (min-width: 576px) {\n  .card-deck {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: row wrap;\n    flex-flow: row wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n  }\n  .card-deck .card {\n    -ms-flex: 1 0 0%;\n    flex: 1 0 0%;\n    margin-right: 15px;\n    margin-bottom: 0;\n    margin-left: 15px;\n  }\n}\n\n.card-group > .card {\n  margin-bottom: 15px;\n}\n\n@media (min-width: 576px) {\n  .card-group {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: row wrap;\n    flex-flow: row wrap;\n  }\n  .card-group > .card {\n    -ms-flex: 1 0 0%;\n    flex: 1 0 0%;\n    margin-bottom: 0;\n  }\n  .card-group > .card + .card {\n    margin-left: 0;\n    border-left: 0;\n  }\n  .card-group > .card:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:not(:last-child) .card-img-top,\n  .card-group > .card:not(:last-child) .card-header {\n    border-top-right-radius: 0;\n  }\n  .card-group > .card:not(:last-child) .card-img-bottom,\n  .card-group > .card:not(:last-child) .card-footer {\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .card-group > .card:not(:first-child) .card-img-top,\n  .card-group > .card:not(:first-child) .card-header {\n    border-top-left-radius: 0;\n  }\n  .card-group > .card:not(:first-child) .card-img-bottom,\n  .card-group > .card:not(:first-child) .card-footer {\n    border-bottom-left-radius: 0;\n  }\n}\n\n.card-columns .card {\n  margin-bottom: 0.75rem;\n}\n\n@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 3;\n    -moz-column-count: 3;\n    column-count: 3;\n    -webkit-column-gap: 1.25rem;\n    -moz-column-gap: 1.25rem;\n    column-gap: 1.25rem;\n    orphans: 1;\n    widows: 1;\n  }\n  .card-columns .card {\n    display: inline-block;\n    width: 100%;\n  }\n}\n\n.accordion {\n  overflow-anchor: none;\n}\n\n.accordion > .card {\n  overflow: hidden;\n}\n\n.accordion > .card:not(:last-of-type) {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.accordion > .card:not(:first-of-type) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.accordion > .card > .card-header {\n  border-radius: 0;\n  margin-bottom: -1px;\n}\n\n.breadcrumb {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n\n.breadcrumb-item + .breadcrumb-item {\n  padding-left: 0.5rem;\n}\n\n.breadcrumb-item + .breadcrumb-item::before {\n  float: left;\n  padding-right: 0.5rem;\n  color: #868e96;\n  content: "/";\n}\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline;\n}\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none;\n}\n\n.breadcrumb-item.active {\n  color: #868e96;\n}\n\n.pagination {\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n}\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #4582ec;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n\n.page-link:hover {\n  z-index: 2;\n  color: #1559cf;\n  text-decoration: none;\n  background-color: #e9ecef;\n  border-color: #ddd;\n}\n\n.page-link:focus {\n  z-index: 3;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(69, 130, 236, 0.25);\n}\n\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.page-item.active .page-link {\n  z-index: 3;\n  color: #fff;\n  background-color: #4582ec;\n  border-color: #4582ec;\n}\n\n.page-item.disabled .page-link {\n  color: #868e96;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #ddd;\n}\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.32875rem;\n  line-height: 1.5;\n}\n\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n}\n\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.930125rem;\n  line-height: 1.5;\n}\n\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem;\n}\n\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem;\n}\n\n.badge {\n  display: inline-block;\n  padding: 0.6em 1.2em;\n  font-size: 75%;\n  font-weight: 400;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .badge {\n    transition: none;\n  }\n}\n\na.badge:hover, a.badge:focus {\n  text-decoration: none;\n}\n\n.badge:empty {\n  display: none;\n}\n\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem;\n}\n\n.badge-primary {\n  color: #fff;\n  background-color: #4582ec;\n}\n\na.badge-primary:hover, a.badge-primary:focus {\n  color: #fff;\n  background-color: #1863e6;\n}\n\na.badge-primary:focus, a.badge-primary.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(69, 130, 236, 0.5);\n}\n\n.badge-secondary {\n  color: #fff;\n  background-color: #adb5bd;\n}\n\na.badge-secondary:hover, a.badge-secondary:focus {\n  color: #fff;\n  background-color: #919ca6;\n}\n\na.badge-secondary:focus, a.badge-secondary.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(173, 181, 189, 0.5);\n}\n\n.badge-success {\n  color: #fff;\n  background-color: #02b875;\n}\n\na.badge-success:hover, a.badge-success:focus {\n  color: #fff;\n  background-color: #018655;\n}\n\na.badge-success:focus, a.badge-success.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(2, 184, 117, 0.5);\n}\n\n.badge-info {\n  color: #fff;\n  background-color: #17a2b8;\n}\n\na.badge-info:hover, a.badge-info:focus {\n  color: #fff;\n  background-color: #117a8b;\n}\n\na.badge-info:focus, a.badge-info.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.badge-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n}\n\na.badge-warning:hover, a.badge-warning:focus {\n  color: #fff;\n  background-color: #ec971f;\n}\n\na.badge-warning:focus, a.badge-warning.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(240, 173, 78, 0.5);\n}\n\n.badge-danger {\n  color: #fff;\n  background-color: #d9534f;\n}\n\na.badge-danger:hover, a.badge-danger:focus {\n  color: #fff;\n  background-color: #c9302c;\n}\n\na.badge-danger:focus, a.badge-danger.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(217, 83, 79, 0.5);\n}\n\n.badge-light {\n  color: #212529;\n  background-color: #f8f9fa;\n}\n\na.badge-light:hover, a.badge-light:focus {\n  color: #212529;\n  background-color: #dae0e5;\n}\n\na.badge-light:focus, a.badge-light.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.badge-dark {\n  color: #fff;\n  background-color: #343a40;\n}\n\na.badge-dark:hover, a.badge-dark:focus {\n  color: #fff;\n  background-color: #1d2124;\n}\n\na.badge-dark:focus, a.badge-dark.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem;\n}\n\n@media (min-width: 576px) {\n  .jumbotron {\n    padding: 4rem 2rem;\n  }\n}\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0;\n}\n\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 0 solid transparent;\n  border-radius: 0.25rem;\n}\n\n.alert-heading {\n  color: inherit;\n}\n\n.alert-link {\n  font-weight: 700;\n}\n\n.alert-dismissible {\n  padding-right: 4.0945rem;\n}\n\n.alert-dismissible .close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  padding: 0.75rem 1.25rem;\n  color: inherit;\n}\n\n.alert-primary {\n  color: #24447b;\n  background-color: #dae6fb;\n  border-color: #cbdcfa;\n}\n\n.alert-primary hr {\n  border-top-color: #b4ccf8;\n}\n\n.alert-primary .alert-link {\n  color: #182e54;\n}\n\n.alert-secondary {\n  color: #5a5e62;\n  background-color: #eff0f2;\n  border-color: #e8eaed;\n}\n\n.alert-secondary hr {\n  border-top-color: #dadde2;\n}\n\n.alert-secondary .alert-link {\n  color: #424547;\n}\n\n.alert-success {\n  color: #01603d;\n  background-color: #ccf1e3;\n  border-color: #b8ebd8;\n}\n\n.alert-success hr {\n  border-top-color: #a4e5cd;\n}\n\n.alert-success .alert-link {\n  color: #002e1d;\n}\n\n.alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n\n.alert-info hr {\n  border-top-color: #abdde5;\n}\n\n.alert-info .alert-link {\n  color: #062c33;\n}\n\n.alert-warning {\n  color: #7d5a29;\n  background-color: #fcefdc;\n  border-color: #fbe8cd;\n}\n\n.alert-warning hr {\n  border-top-color: #f9ddb5;\n}\n\n.alert-warning .alert-link {\n  color: #573e1c;\n}\n\n.alert-danger {\n  color: #712b29;\n  background-color: #f7dddc;\n  border-color: #f4cfce;\n}\n\n.alert-danger hr {\n  border-top-color: #efbbb9;\n}\n\n.alert-danger .alert-link {\n  color: #4c1d1b;\n}\n\n.alert-light {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n\n.alert-light hr {\n  border-top-color: #ececf6;\n}\n\n.alert-light .alert-link {\n  color: #686868;\n}\n\n.alert-dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca;\n}\n\n.alert-dark hr {\n  border-top-color: #b9bbbe;\n}\n\n.alert-dark .alert-link {\n  color: #040505;\n}\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n\n.progress {\n  display: -ms-flexbox;\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  line-height: 0;\n  font-size: 0.79725rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n\n.progress-bar {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-pack: center;\n  justify-content: center;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #4582ec;\n  transition: width 0.6s ease;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar {\n    transition: none;\n  }\n}\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n\n.progress-bar-animated {\n  -webkit-animation: 1s linear infinite progress-bar-stripes;\n  animation: 1s linear infinite progress-bar-stripes;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar-animated {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n\n.media {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n\n.media-body {\n  -ms-flex: 1;\n  flex: 1;\n}\n\n.list-group {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  border-radius: 0.25rem;\n}\n\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit;\n}\n\n.list-group-item-action:hover, .list-group-item-action:focus {\n  z-index: 1;\n  color: #495057;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n\n.list-group-item-action:active {\n  color: #343a40;\n  background-color: #e9ecef;\n}\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.list-group-item:first-child {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n\n.list-group-item:last-child {\n  border-bottom-right-radius: inherit;\n  border-bottom-left-radius: inherit;\n}\n\n.list-group-item.disabled, .list-group-item:disabled {\n  color: #868e96;\n  pointer-events: none;\n  background-color: #fff;\n}\n\n.list-group-item.active {\n  z-index: 2;\n  color: #fff;\n  background-color: #4582ec;\n  border-color: #4582ec;\n}\n\n.list-group-item + .list-group-item {\n  border-top-width: 0;\n}\n\n.list-group-item + .list-group-item.active {\n  margin-top: -1px;\n  border-top-width: 1px;\n}\n\n.list-group-horizontal {\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n\n.list-group-horizontal > .list-group-item:first-child {\n  border-bottom-left-radius: 0.25rem;\n  border-top-right-radius: 0;\n}\n\n.list-group-horizontal > .list-group-item:last-child {\n  border-top-right-radius: 0.25rem;\n  border-bottom-left-radius: 0;\n}\n\n.list-group-horizontal > .list-group-item.active {\n  margin-top: 0;\n}\n\n.list-group-horizontal > .list-group-item + .list-group-item {\n  border-top-width: 1px;\n  border-left-width: 0;\n}\n\n.list-group-horizontal > .list-group-item + .list-group-item.active {\n  margin-left: -1px;\n  border-left-width: 1px;\n}\n\n@media (min-width: 576px) {\n  .list-group-horizontal-sm {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .list-group-horizontal-sm > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n\n@media (min-width: 768px) {\n  .list-group-horizontal-md {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .list-group-horizontal-md > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-md > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-md > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-md > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-md > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n\n@media (min-width: 992px) {\n  .list-group-horizontal-lg {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .list-group-horizontal-lg > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .list-group-horizontal-xl {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .list-group-horizontal-xl > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n\n.list-group-flush {\n  border-radius: 0;\n}\n\n.list-group-flush > .list-group-item {\n  border-width: 0 0 1px;\n}\n\n.list-group-flush > .list-group-item:last-child {\n  border-bottom-width: 0;\n}\n\n.list-group-item-primary {\n  color: #24447b;\n  background-color: #cbdcfa;\n}\n\n.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n  color: #24447b;\n  background-color: #b4ccf8;\n}\n\n.list-group-item-primary.list-group-item-action.active {\n  color: #fff;\n  background-color: #24447b;\n  border-color: #24447b;\n}\n\n.list-group-item-secondary {\n  color: #5a5e62;\n  background-color: #e8eaed;\n}\n\n.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n  color: #5a5e62;\n  background-color: #dadde2;\n}\n\n.list-group-item-secondary.list-group-item-action.active {\n  color: #fff;\n  background-color: #5a5e62;\n  border-color: #5a5e62;\n}\n\n.list-group-item-success {\n  color: #01603d;\n  background-color: #b8ebd8;\n}\n\n.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n  color: #01603d;\n  background-color: #a4e5cd;\n}\n\n.list-group-item-success.list-group-item-action.active {\n  color: #fff;\n  background-color: #01603d;\n  border-color: #01603d;\n}\n\n.list-group-item-info {\n  color: #0c5460;\n  background-color: #bee5eb;\n}\n\n.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n  color: #0c5460;\n  background-color: #abdde5;\n}\n\n.list-group-item-info.list-group-item-action.active {\n  color: #fff;\n  background-color: #0c5460;\n  border-color: #0c5460;\n}\n\n.list-group-item-warning {\n  color: #7d5a29;\n  background-color: #fbe8cd;\n}\n\n.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n  color: #7d5a29;\n  background-color: #f9ddb5;\n}\n\n.list-group-item-warning.list-group-item-action.active {\n  color: #fff;\n  background-color: #7d5a29;\n  border-color: #7d5a29;\n}\n\n.list-group-item-danger {\n  color: #712b29;\n  background-color: #f4cfce;\n}\n\n.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n  color: #712b29;\n  background-color: #efbbb9;\n}\n\n.list-group-item-danger.list-group-item-action.active {\n  color: #fff;\n  background-color: #712b29;\n  border-color: #712b29;\n}\n\n.list-group-item-light {\n  color: #818182;\n  background-color: #fdfdfe;\n}\n\n.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n  color: #818182;\n  background-color: #ececf6;\n}\n\n.list-group-item-light.list-group-item-action.active {\n  color: #fff;\n  background-color: #818182;\n  border-color: #818182;\n}\n\n.list-group-item-dark {\n  color: #1b1e21;\n  background-color: #c6c8ca;\n}\n\n.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n  color: #1b1e21;\n  background-color: #b9bbbe;\n}\n\n.list-group-item-dark.list-group-item-action.active {\n  color: #fff;\n  background-color: #1b1e21;\n  border-color: #1b1e21;\n}\n\n.close {\n  float: right;\n  font-size: 1.5945rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5;\n}\n\n.close:hover {\n  color: #000;\n  text-decoration: none;\n}\n\n.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {\n  opacity: .75;\n}\n\nbutton.close {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n}\n\na.close.disabled {\n  pointer-events: none;\n}\n\n.toast {\n  -ms-flex-preferred-size: 350px;\n  flex-basis: 350px;\n  max-width: 350px;\n  font-size: 0.875rem;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  border-radius: 0.25rem;\n}\n\n.toast:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n\n.toast.showing {\n  opacity: 1;\n}\n\n.toast.show {\n  display: block;\n  opacity: 1;\n}\n\n.toast.hide {\n  display: none;\n}\n\n.toast-header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  color: #868e96;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n\n.toast-body {\n  padding: 0.75rem;\n}\n\n.modal-open {\n  overflow: hidden;\n}\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n}\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none;\n}\n\n.modal.fade .modal-dialog {\n  transition: -webkit-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\n  -webkit-transform: translate(0, -50px);\n  transform: translate(0, -50px);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .modal.fade .modal-dialog {\n    transition: none;\n  }\n}\n\n.modal.show .modal-dialog {\n  -webkit-transform: none;\n  transform: none;\n}\n\n.modal.modal-static .modal-dialog {\n  -webkit-transform: scale(1.02);\n  transform: scale(1.02);\n}\n\n.modal-dialog-scrollable {\n  display: -ms-flexbox;\n  display: flex;\n  max-height: calc(100% - 1rem);\n}\n\n.modal-dialog-scrollable .modal-content {\n  max-height: calc(100vh - 1rem);\n  overflow: hidden;\n}\n\n.modal-dialog-scrollable .modal-header,\n.modal-dialog-scrollable .modal-footer {\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n}\n\n.modal-dialog-scrollable .modal-body {\n  overflow-y: auto;\n}\n\n.modal-dialog-centered {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  min-height: calc(100% - 1rem);\n}\n\n.modal-dialog-centered::before {\n  display: block;\n  height: calc(100vh - 1rem);\n  height: -webkit-min-content;\n  height: -moz-min-content;\n  height: min-content;\n  content: "";\n}\n\n.modal-dialog-centered.modal-dialog-scrollable {\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-pack: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.modal-dialog-centered.modal-dialog-scrollable .modal-content {\n  max-height: none;\n}\n\n.modal-dialog-centered.modal-dialog-scrollable::before {\n  content: none;\n}\n\n.modal-content {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n}\n\n.modal-backdrop.fade {\n  opacity: 0;\n}\n\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n\n.modal-header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #ddd;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n\n.modal-header .close {\n  padding: 1rem 1rem;\n  margin: -1rem -1rem -1rem auto;\n}\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n\n.modal-body {\n  position: relative;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  padding: 1rem;\n}\n\n.modal-footer {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  padding: 0.75rem;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: calc(0.3rem - 1px);\n  border-bottom-left-radius: calc(0.3rem - 1px);\n}\n\n.modal-footer > * {\n  margin: 0.25rem;\n}\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto;\n  }\n  .modal-dialog-scrollable {\n    max-height: calc(100% - 3.5rem);\n  }\n  .modal-dialog-scrollable .modal-content {\n    max-height: calc(100vh - 3.5rem);\n  }\n  .modal-dialog-centered {\n    min-height: calc(100% - 3.5rem);\n  }\n  .modal-dialog-centered::before {\n    height: calc(100vh - 3.5rem);\n    height: -webkit-min-content;\n    height: -moz-min-content;\n    height: min-content;\n  }\n  .modal-sm {\n    max-width: 300px;\n  }\n}\n\n@media (min-width: 992px) {\n  .modal-lg,\n  .modal-xl {\n    max-width: 800px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 1140px;\n  }\n}\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  white-space: normal;\n  word-spacing: normal;\n  line-break: auto;\n  font-size: 0.6875rem;\n  word-wrap: break-word;\n  opacity: 0;\n}\n\n.tooltip.show {\n  opacity: 0.9;\n}\n\n.tooltip .arrow {\n  position: absolute;\n  display: block;\n  width: 0.8rem;\n  height: 0.4rem;\n}\n\n.tooltip .arrow::before {\n  position: absolute;\n  content: "";\n  border-color: transparent;\n  border-style: solid;\n}\n\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^="top"] {\n  padding: 0.4rem 0;\n}\n\n.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^="top"] .arrow {\n  bottom: 0;\n}\n\n.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^="top"] .arrow::before {\n  top: 0;\n  border-width: 0.4rem 0.4rem 0;\n  border-top-color: #000;\n}\n\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^="right"] {\n  padding: 0 0.4rem;\n}\n\n.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^="right"] .arrow {\n  left: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n\n.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^="right"] .arrow::before {\n  right: 0;\n  border-width: 0.4rem 0.4rem 0.4rem 0;\n  border-right-color: #000;\n}\n\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^="bottom"] {\n  padding: 0.4rem 0;\n}\n\n.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^="bottom"] .arrow {\n  top: 0;\n}\n\n.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^="bottom"] .arrow::before {\n  bottom: 0;\n  border-width: 0 0.4rem 0.4rem;\n  border-bottom-color: #000;\n}\n\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^="left"] {\n  padding: 0 0.4rem;\n}\n\n.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^="left"] .arrow {\n  right: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n\n.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^="left"] .arrow::before {\n  left: 0;\n  border-width: 0.4rem 0 0.4rem 0.4rem;\n  border-left-color: #000;\n}\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem;\n}\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  white-space: normal;\n  word-spacing: normal;\n  line-break: auto;\n  font-size: 0.930125rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n}\n\n.popover .arrow {\n  position: absolute;\n  display: block;\n  width: 1rem;\n  height: 0.5rem;\n  margin: 0 0.3rem;\n}\n\n.popover .arrow::before, .popover .arrow::after {\n  position: absolute;\n  display: block;\n  content: "";\n  border-color: transparent;\n  border-style: solid;\n}\n\n.bs-popover-top, .bs-popover-auto[x-placement^="top"] {\n  margin-bottom: 0.5rem;\n}\n\n.bs-popover-top > .arrow, .bs-popover-auto[x-placement^="top"] > .arrow {\n  bottom: calc(-0.5rem - 1px);\n}\n\n.bs-popover-top > .arrow::before, .bs-popover-auto[x-placement^="top"] > .arrow::before {\n  bottom: 0;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: rgba(0, 0, 0, 0.25);\n}\n\n.bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^="top"] > .arrow::after {\n  bottom: 1px;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: #fff;\n}\n\n.bs-popover-right, .bs-popover-auto[x-placement^="right"] {\n  margin-left: 0.5rem;\n}\n\n.bs-popover-right > .arrow, .bs-popover-auto[x-placement^="right"] > .arrow {\n  left: calc(-0.5rem - 1px);\n  width: 0.5rem;\n  height: 1rem;\n  margin: 0.3rem 0;\n}\n\n.bs-popover-right > .arrow::before, .bs-popover-auto[x-placement^="right"] > .arrow::before {\n  left: 0;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n\n.bs-popover-right > .arrow::after, .bs-popover-auto[x-placement^="right"] > .arrow::after {\n  left: 1px;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: #fff;\n}\n\n.bs-popover-bottom, .bs-popover-auto[x-placement^="bottom"] {\n  margin-top: 0.5rem;\n}\n\n.bs-popover-bottom > .arrow, .bs-popover-auto[x-placement^="bottom"] > .arrow {\n  top: calc(-0.5rem - 1px);\n}\n\n.bs-popover-bottom > .arrow::before, .bs-popover-auto[x-placement^="bottom"] > .arrow::before {\n  top: 0;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n}\n\n.bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^="bottom"] > .arrow::after {\n  top: 1px;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: #fff;\n}\n\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^="bottom"] .popover-header::before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: block;\n  width: 1rem;\n  margin-left: -0.5rem;\n  content: "";\n  border-bottom: 1px solid #f7f7f7;\n}\n\n.bs-popover-left, .bs-popover-auto[x-placement^="left"] {\n  margin-right: 0.5rem;\n}\n\n.bs-popover-left > .arrow, .bs-popover-auto[x-placement^="left"] > .arrow {\n  right: calc(-0.5rem - 1px);\n  width: 0.5rem;\n  height: 1rem;\n  margin: 0.3rem 0;\n}\n\n.bs-popover-left > .arrow::before, .bs-popover-auto[x-placement^="left"] > .arrow::before {\n  right: 0;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n\n.bs-popover-left > .arrow::after, .bs-popover-auto[x-placement^="left"] > .arrow::after {\n  right: 1px;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: #fff;\n}\n\n.popover-header {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1.063rem;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n\n.popover-header:empty {\n  display: none;\n}\n\n.popover-body {\n  padding: 0.5rem 0.75rem;\n  color: #343a40;\n}\n\n.carousel {\n  position: relative;\n}\n\n.carousel.pointer-event {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.carousel-inner::after {\n  display: block;\n  clear: both;\n  content: "";\n}\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: -webkit-transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .carousel-item {\n    transition: none;\n  }\n}\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n\n.carousel-item-next:not(.carousel-item-left),\n.active.carousel-item-right {\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n}\n\n.carousel-item-prev:not(.carousel-item-right),\n.active.carousel-item-left {\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n}\n\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-property: opacity;\n  -webkit-transform: none;\n  transform: none;\n}\n\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-left,\n.carousel-fade .carousel-item-prev.carousel-item-right {\n  z-index: 1;\n  opacity: 1;\n}\n\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right {\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 0s 0.6s;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .carousel-fade .active.carousel-item-left,\n  .carousel-fade .active.carousel-item-right {\n    transition: none;\n  }\n}\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 15%;\n  padding: 0;\n  color: #fff;\n  text-align: center;\n  background: none;\n  border: 0;\n  opacity: 0.5;\n  transition: opacity 0.15s ease;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .carousel-control-prev,\n  .carousel-control-next {\n    transition: none;\n  }\n}\n\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n.carousel-control-next:hover,\n.carousel-control-next:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: 0.9;\n}\n\n.carousel-control-prev {\n  left: 0;\n}\n\n.carousel-control-next {\n  right: 0;\n}\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: 50% / 100% 100% no-repeat;\n}\n\n.carousel-control-prev-icon {\n  background-image: url(${O});\n}\n\n.carousel-control-next-icon {\n  background-image: url(${E});\n}\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 15;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none;\n}\n\n.carousel-indicators li {\n  box-sizing: content-box;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  width: 30px;\n  height: 3px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  opacity: .5;\n  transition: opacity 0.6s ease;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .carousel-indicators li {\n    transition: none;\n  }\n}\n\n.carousel-indicators .active {\n  opacity: 1;\n}\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n}\n\n@-webkit-keyframes spinner-border {\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spinner-border {\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n.spinner-border {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: -0.125em;\n  border: 0.25em solid currentcolor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  -webkit-animation: .75s linear infinite spinner-border;\n  animation: .75s linear infinite spinner-border;\n}\n\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.2em;\n}\n\n@-webkit-keyframes spinner-grow {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes spinner-grow {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.spinner-grow {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: -0.125em;\n  background-color: currentcolor;\n  border-radius: 50%;\n  opacity: 0;\n  -webkit-animation: .75s linear infinite spinner-grow;\n  animation: .75s linear infinite spinner-grow;\n}\n\n.spinner-grow-sm {\n  width: 1rem;\n  height: 1rem;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .spinner-border,\n  .spinner-grow {\n    -webkit-animation-duration: 1.5s;\n    animation-duration: 1.5s;\n  }\n}\n\n.align-baseline {\n  vertical-align: baseline !important;\n}\n\n.align-top {\n  vertical-align: top !important;\n}\n\n.align-middle {\n  vertical-align: middle !important;\n}\n\n.align-bottom {\n  vertical-align: bottom !important;\n}\n\n.align-text-bottom {\n  vertical-align: text-bottom !important;\n}\n\n.align-text-top {\n  vertical-align: text-top !important;\n}\n\n.bg-primary {\n  background-color: #4582ec !important;\n}\n\na.bg-primary:hover, a.bg-primary:focus,\nbutton.bg-primary:hover,\nbutton.bg-primary:focus {\n  background-color: #1863e6 !important;\n}\n\n.bg-secondary {\n  background-color: #adb5bd !important;\n}\n\na.bg-secondary:hover, a.bg-secondary:focus,\nbutton.bg-secondary:hover,\nbutton.bg-secondary:focus {\n  background-color: #919ca6 !important;\n}\n\n.bg-success {\n  background-color: #02b875 !important;\n}\n\na.bg-success:hover, a.bg-success:focus,\nbutton.bg-success:hover,\nbutton.bg-success:focus {\n  background-color: #018655 !important;\n}\n\n.bg-info {\n  background-color: #17a2b8 !important;\n}\n\na.bg-info:hover, a.bg-info:focus,\nbutton.bg-info:hover,\nbutton.bg-info:focus {\n  background-color: #117a8b !important;\n}\n\n.bg-warning {\n  background-color: #f0ad4e !important;\n}\n\na.bg-warning:hover, a.bg-warning:focus,\nbutton.bg-warning:hover,\nbutton.bg-warning:focus {\n  background-color: #ec971f !important;\n}\n\n.bg-danger {\n  background-color: #d9534f !important;\n}\n\na.bg-danger:hover, a.bg-danger:focus,\nbutton.bg-danger:hover,\nbutton.bg-danger:focus {\n  background-color: #c9302c !important;\n}\n\n.bg-light {\n  background-color: #f8f9fa !important;\n}\n\na.bg-light:hover, a.bg-light:focus,\nbutton.bg-light:hover,\nbutton.bg-light:focus {\n  background-color: #dae0e5 !important;\n}\n\n.bg-dark {\n  background-color: #343a40 !important;\n}\n\na.bg-dark:hover, a.bg-dark:focus,\nbutton.bg-dark:hover,\nbutton.bg-dark:focus {\n  background-color: #1d2124 !important;\n}\n\n.bg-white {\n  background-color: #fff !important;\n}\n\n.bg-transparent {\n  background-color: transparent !important;\n}\n\n.border {\n  border: 1px solid #ddd !important;\n}\n\n.border-top {\n  border-top: 1px solid #ddd !important;\n}\n\n.border-right {\n  border-right: 1px solid #ddd !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #ddd !important;\n}\n\n.border-left {\n  border-left: 1px solid #ddd !important;\n}\n\n.border-0 {\n  border: 0 !important;\n}\n\n.border-top-0 {\n  border-top: 0 !important;\n}\n\n.border-right-0 {\n  border-right: 0 !important;\n}\n\n.border-bottom-0 {\n  border-bottom: 0 !important;\n}\n\n.border-left-0 {\n  border-left: 0 !important;\n}\n\n.border-primary {\n  border-color: #4582ec !important;\n}\n\n.border-secondary {\n  border-color: #adb5bd !important;\n}\n\n.border-success {\n  border-color: #02b875 !important;\n}\n\n.border-info {\n  border-color: #17a2b8 !important;\n}\n\n.border-warning {\n  border-color: #f0ad4e !important;\n}\n\n.border-danger {\n  border-color: #d9534f !important;\n}\n\n.border-light {\n  border-color: #f8f9fa !important;\n}\n\n.border-dark {\n  border-color: #343a40 !important;\n}\n\n.border-white {\n  border-color: #fff !important;\n}\n\n.rounded-sm {\n  border-radius: 0.2rem !important;\n}\n\n.rounded {\n  border-radius: 0.25rem !important;\n}\n\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important;\n}\n\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important;\n}\n\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n\n.rounded-lg {\n  border-radius: 0.3rem !important;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n}\n\n.rounded-pill {\n  border-radius: 50rem !important;\n}\n\n.rounded-0 {\n  border-radius: 0 !important;\n}\n\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: "";\n}\n\n.d-none {\n  display: none !important;\n}\n\n.d-inline {\n  display: inline !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-table {\n  display: table !important;\n}\n\n.d-table-row {\n  display: table-row !important;\n}\n\n.d-table-cell {\n  display: table-cell !important;\n}\n\n.d-flex {\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important;\n}\n\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important;\n  }\n  .d-sm-inline {\n    display: inline !important;\n  }\n  .d-sm-inline-block {\n    display: inline-block !important;\n  }\n  .d-sm-block {\n    display: block !important;\n  }\n  .d-sm-table {\n    display: table !important;\n  }\n  .d-sm-table-row {\n    display: table-row !important;\n  }\n  .d-sm-table-cell {\n    display: table-cell !important;\n  }\n  .d-sm-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-sm-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important;\n  }\n  .d-md-inline {\n    display: inline !important;\n  }\n  .d-md-inline-block {\n    display: inline-block !important;\n  }\n  .d-md-block {\n    display: block !important;\n  }\n  .d-md-table {\n    display: table !important;\n  }\n  .d-md-table-row {\n    display: table-row !important;\n  }\n  .d-md-table-cell {\n    display: table-cell !important;\n  }\n  .d-md-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-md-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important;\n  }\n  .d-lg-inline {\n    display: inline !important;\n  }\n  .d-lg-inline-block {\n    display: inline-block !important;\n  }\n  .d-lg-block {\n    display: block !important;\n  }\n  .d-lg-table {\n    display: table !important;\n  }\n  .d-lg-table-row {\n    display: table-row !important;\n  }\n  .d-lg-table-cell {\n    display: table-cell !important;\n  }\n  .d-lg-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-lg-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important;\n  }\n  .d-xl-inline {\n    display: inline !important;\n  }\n  .d-xl-inline-block {\n    display: inline-block !important;\n  }\n  .d-xl-block {\n    display: block !important;\n  }\n  .d-xl-table {\n    display: table !important;\n  }\n  .d-xl-table-row {\n    display: table-row !important;\n  }\n  .d-xl-table-cell {\n    display: table-cell !important;\n  }\n  .d-xl-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-xl-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n\n@media print {\n  .d-print-none {\n    display: none !important;\n  }\n  .d-print-inline {\n    display: inline !important;\n  }\n  .d-print-inline-block {\n    display: inline-block !important;\n  }\n  .d-print-block {\n    display: block !important;\n  }\n  .d-print-table {\n    display: table !important;\n  }\n  .d-print-table-row {\n    display: table-row !important;\n  }\n  .d-print-table-cell {\n    display: table-cell !important;\n  }\n  .d-print-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-print-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden;\n}\n\n.embed-responsive::before {\n  display: block;\n  content: "";\n}\n\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.embed-responsive-21by9::before {\n  padding-top: 42.857143%;\n}\n\n.embed-responsive-16by9::before {\n  padding-top: 56.25%;\n}\n\n.embed-responsive-4by3::before {\n  padding-top: 75%;\n}\n\n.embed-responsive-1by1::before {\n  padding-top: 100%;\n}\n\n.flex-row {\n  -ms-flex-direction: row !important;\n  flex-direction: row !important;\n}\n\n.flex-column {\n  -ms-flex-direction: column !important;\n  flex-direction: column !important;\n}\n\n.flex-row-reverse {\n  -ms-flex-direction: row-reverse !important;\n  flex-direction: row-reverse !important;\n}\n\n.flex-column-reverse {\n  -ms-flex-direction: column-reverse !important;\n  flex-direction: column-reverse !important;\n}\n\n.flex-wrap {\n  -ms-flex-wrap: wrap !important;\n  flex-wrap: wrap !important;\n}\n\n.flex-nowrap {\n  -ms-flex-wrap: nowrap !important;\n  flex-wrap: nowrap !important;\n}\n\n.flex-wrap-reverse {\n  -ms-flex-wrap: wrap-reverse !important;\n  flex-wrap: wrap-reverse !important;\n}\n\n.flex-fill {\n  -ms-flex: 1 1 auto !important;\n  flex: 1 1 auto !important;\n}\n\n.flex-grow-0 {\n  -ms-flex-positive: 0 !important;\n  flex-grow: 0 !important;\n}\n\n.flex-grow-1 {\n  -ms-flex-positive: 1 !important;\n  flex-grow: 1 !important;\n}\n\n.flex-shrink-0 {\n  -ms-flex-negative: 0 !important;\n  flex-shrink: 0 !important;\n}\n\n.flex-shrink-1 {\n  -ms-flex-negative: 1 !important;\n  flex-shrink: 1 !important;\n}\n\n.justify-content-start {\n  -ms-flex-pack: start !important;\n  justify-content: flex-start !important;\n}\n\n.justify-content-end {\n  -ms-flex-pack: end !important;\n  justify-content: flex-end !important;\n}\n\n.justify-content-center {\n  -ms-flex-pack: center !important;\n  justify-content: center !important;\n}\n\n.justify-content-between {\n  -ms-flex-pack: justify !important;\n  justify-content: space-between !important;\n}\n\n.justify-content-around {\n  -ms-flex-pack: distribute !important;\n  justify-content: space-around !important;\n}\n\n.align-items-start {\n  -ms-flex-align: start !important;\n  align-items: flex-start !important;\n}\n\n.align-items-end {\n  -ms-flex-align: end !important;\n  align-items: flex-end !important;\n}\n\n.align-items-center {\n  -ms-flex-align: center !important;\n  align-items: center !important;\n}\n\n.align-items-baseline {\n  -ms-flex-align: baseline !important;\n  align-items: baseline !important;\n}\n\n.align-items-stretch {\n  -ms-flex-align: stretch !important;\n  align-items: stretch !important;\n}\n\n.align-content-start {\n  -ms-flex-line-pack: start !important;\n  align-content: flex-start !important;\n}\n\n.align-content-end {\n  -ms-flex-line-pack: end !important;\n  align-content: flex-end !important;\n}\n\n.align-content-center {\n  -ms-flex-line-pack: center !important;\n  align-content: center !important;\n}\n\n.align-content-between {\n  -ms-flex-line-pack: justify !important;\n  align-content: space-between !important;\n}\n\n.align-content-around {\n  -ms-flex-line-pack: distribute !important;\n  align-content: space-around !important;\n}\n\n.align-content-stretch {\n  -ms-flex-line-pack: stretch !important;\n  align-content: stretch !important;\n}\n\n.align-self-auto {\n  -ms-flex-item-align: auto !important;\n  align-self: auto !important;\n}\n\n.align-self-start {\n  -ms-flex-item-align: start !important;\n  align-self: flex-start !important;\n}\n\n.align-self-end {\n  -ms-flex-item-align: end !important;\n  align-self: flex-end !important;\n}\n\n.align-self-center {\n  -ms-flex-item-align: center !important;\n  align-self: center !important;\n}\n\n.align-self-baseline {\n  -ms-flex-item-align: baseline !important;\n  align-self: baseline !important;\n}\n\n.align-self-stretch {\n  -ms-flex-item-align: stretch !important;\n  align-self: stretch !important;\n}\n\n@media (min-width: 576px) {\n  .flex-sm-row {\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-sm-column {\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-sm-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-sm-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-sm-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-sm-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-sm-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-sm-fill {\n    -ms-flex: 1 1 auto !important;\n    flex: 1 1 auto !important;\n  }\n  .flex-sm-grow-0 {\n    -ms-flex-positive: 0 !important;\n    flex-grow: 0 !important;\n  }\n  .flex-sm-grow-1 {\n    -ms-flex-positive: 1 !important;\n    flex-grow: 1 !important;\n  }\n  .flex-sm-shrink-0 {\n    -ms-flex-negative: 0 !important;\n    flex-shrink: 0 !important;\n  }\n  .flex-sm-shrink-1 {\n    -ms-flex-negative: 1 !important;\n    flex-shrink: 1 !important;\n  }\n  .justify-content-sm-start {\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-sm-end {\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-sm-center {\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-sm-between {\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-sm-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-sm-start {\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-sm-end {\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-sm-center {\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-sm-baseline {\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-sm-stretch {\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-sm-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-sm-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-sm-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-sm-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-sm-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-sm-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-sm-auto {\n    -ms-flex-item-align: auto !important;\n    align-self: auto !important;\n  }\n  .align-self-sm-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-sm-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-sm-center {\n    -ms-flex-item-align: center !important;\n    align-self: center !important;\n  }\n  .align-self-sm-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-sm-stretch {\n    -ms-flex-item-align: stretch !important;\n    align-self: stretch !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .flex-md-row {\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-md-column {\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-md-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-md-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-md-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-md-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-md-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-md-fill {\n    -ms-flex: 1 1 auto !important;\n    flex: 1 1 auto !important;\n  }\n  .flex-md-grow-0 {\n    -ms-flex-positive: 0 !important;\n    flex-grow: 0 !important;\n  }\n  .flex-md-grow-1 {\n    -ms-flex-positive: 1 !important;\n    flex-grow: 1 !important;\n  }\n  .flex-md-shrink-0 {\n    -ms-flex-negative: 0 !important;\n    flex-shrink: 0 !important;\n  }\n  .flex-md-shrink-1 {\n    -ms-flex-negative: 1 !important;\n    flex-shrink: 1 !important;\n  }\n  .justify-content-md-start {\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-md-end {\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-md-center {\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-md-between {\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-md-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-md-start {\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-md-end {\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-md-center {\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-md-baseline {\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-md-stretch {\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-md-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-md-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-md-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-md-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-md-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-md-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-md-auto {\n    -ms-flex-item-align: auto !important;\n    align-self: auto !important;\n  }\n  .align-self-md-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-md-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-md-center {\n    -ms-flex-item-align: center !important;\n    align-self: center !important;\n  }\n  .align-self-md-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-md-stretch {\n    -ms-flex-item-align: stretch !important;\n    align-self: stretch !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .flex-lg-row {\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-lg-column {\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-lg-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-lg-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-lg-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-lg-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-lg-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-lg-fill {\n    -ms-flex: 1 1 auto !important;\n    flex: 1 1 auto !important;\n  }\n  .flex-lg-grow-0 {\n    -ms-flex-positive: 0 !important;\n    flex-grow: 0 !important;\n  }\n  .flex-lg-grow-1 {\n    -ms-flex-positive: 1 !important;\n    flex-grow: 1 !important;\n  }\n  .flex-lg-shrink-0 {\n    -ms-flex-negative: 0 !important;\n    flex-shrink: 0 !important;\n  }\n  .flex-lg-shrink-1 {\n    -ms-flex-negative: 1 !important;\n    flex-shrink: 1 !important;\n  }\n  .justify-content-lg-start {\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-lg-end {\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-lg-center {\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-lg-between {\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-lg-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-lg-start {\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-lg-end {\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-lg-center {\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-lg-baseline {\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-lg-stretch {\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-lg-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-lg-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-lg-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-lg-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-lg-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-lg-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-lg-auto {\n    -ms-flex-item-align: auto !important;\n    align-self: auto !important;\n  }\n  .align-self-lg-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-lg-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-lg-center {\n    -ms-flex-item-align: center !important;\n    align-self: center !important;\n  }\n  .align-self-lg-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-lg-stretch {\n    -ms-flex-item-align: stretch !important;\n    align-self: stretch !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-xl-column {\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-xl-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-xl-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-xl-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-xl-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-xl-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-xl-fill {\n    -ms-flex: 1 1 auto !important;\n    flex: 1 1 auto !important;\n  }\n  .flex-xl-grow-0 {\n    -ms-flex-positive: 0 !important;\n    flex-grow: 0 !important;\n  }\n  .flex-xl-grow-1 {\n    -ms-flex-positive: 1 !important;\n    flex-grow: 1 !important;\n  }\n  .flex-xl-shrink-0 {\n    -ms-flex-negative: 0 !important;\n    flex-shrink: 0 !important;\n  }\n  .flex-xl-shrink-1 {\n    -ms-flex-negative: 1 !important;\n    flex-shrink: 1 !important;\n  }\n  .justify-content-xl-start {\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-xl-end {\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-xl-center {\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-xl-between {\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-xl-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-xl-start {\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-xl-end {\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-xl-center {\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-xl-baseline {\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-xl-stretch {\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-xl-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-xl-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-xl-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-xl-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-xl-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-xl-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-xl-auto {\n    -ms-flex-item-align: auto !important;\n    align-self: auto !important;\n  }\n  .align-self-xl-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-xl-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-xl-center {\n    -ms-flex-item-align: center !important;\n    align-self: center !important;\n  }\n  .align-self-xl-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-xl-stretch {\n    -ms-flex-item-align: stretch !important;\n    align-self: stretch !important;\n  }\n}\n\n.float-left {\n  float: left !important;\n}\n\n.float-right {\n  float: right !important;\n}\n\n.float-none {\n  float: none !important;\n}\n\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important;\n  }\n  .float-sm-right {\n    float: right !important;\n  }\n  .float-sm-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important;\n  }\n  .float-md-right {\n    float: right !important;\n  }\n  .float-md-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important;\n  }\n  .float-lg-right {\n    float: right !important;\n  }\n  .float-lg-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important;\n  }\n  .float-xl-right {\n    float: right !important;\n  }\n  .float-xl-none {\n    float: none !important;\n  }\n}\n\n.user-select-all {\n  -webkit-user-select: all !important;\n  -moz-user-select: all !important;\n  user-select: all !important;\n}\n\n.user-select-auto {\n  -webkit-user-select: auto !important;\n  -moz-user-select: auto !important;\n  -ms-user-select: auto !important;\n  user-select: auto !important;\n}\n\n.user-select-none {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n}\n\n.overflow-auto {\n  overflow: auto !important;\n}\n\n.overflow-hidden {\n  overflow: hidden !important;\n}\n\n.position-static {\n  position: static !important;\n}\n\n.position-relative {\n  position: relative !important;\n}\n\n.position-absolute {\n  position: absolute !important;\n}\n\n.position-fixed {\n  position: fixed !important;\n}\n\n.position-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n}\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sticky-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n}\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n\n.shadow {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n}\n\n.shadow-none {\n  box-shadow: none !important;\n}\n\n.w-25 {\n  width: 25% !important;\n}\n\n.w-50 {\n  width: 50% !important;\n}\n\n.w-75 {\n  width: 75% !important;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.w-auto {\n  width: auto !important;\n}\n\n.h-25 {\n  height: 25% !important;\n}\n\n.h-50 {\n  height: 50% !important;\n}\n\n.h-75 {\n  height: 75% !important;\n}\n\n.h-100 {\n  height: 100% !important;\n}\n\n.h-auto {\n  height: auto !important;\n}\n\n.mw-100 {\n  max-width: 100% !important;\n}\n\n.mh-100 {\n  max-height: 100% !important;\n}\n\n.min-vw-100 {\n  min-width: 100vw !important;\n}\n\n.min-vh-100 {\n  min-height: 100vh !important;\n}\n\n.vw-100 {\n  width: 100vw !important;\n}\n\n.vh-100 {\n  height: 100vh !important;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 1rem !important;\n}\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n\n.m-4 {\n  margin: 1.5rem !important;\n}\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n\n.m-5 {\n  margin: 3rem !important;\n}\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important;\n}\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important;\n}\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n\n.p-5 {\n  padding: 3rem !important;\n}\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\n\n.m-n1 {\n  margin: -0.25rem !important;\n}\n\n.mt-n1,\n.my-n1 {\n  margin-top: -0.25rem !important;\n}\n\n.mr-n1,\n.mx-n1 {\n  margin-right: -0.25rem !important;\n}\n\n.mb-n1,\n.my-n1 {\n  margin-bottom: -0.25rem !important;\n}\n\n.ml-n1,\n.mx-n1 {\n  margin-left: -0.25rem !important;\n}\n\n.m-n2 {\n  margin: -0.5rem !important;\n}\n\n.mt-n2,\n.my-n2 {\n  margin-top: -0.5rem !important;\n}\n\n.mr-n2,\n.mx-n2 {\n  margin-right: -0.5rem !important;\n}\n\n.mb-n2,\n.my-n2 {\n  margin-bottom: -0.5rem !important;\n}\n\n.ml-n2,\n.mx-n2 {\n  margin-left: -0.5rem !important;\n}\n\n.m-n3 {\n  margin: -1rem !important;\n}\n\n.mt-n3,\n.my-n3 {\n  margin-top: -1rem !important;\n}\n\n.mr-n3,\n.mx-n3 {\n  margin-right: -1rem !important;\n}\n\n.mb-n3,\n.my-n3 {\n  margin-bottom: -1rem !important;\n}\n\n.ml-n3,\n.mx-n3 {\n  margin-left: -1rem !important;\n}\n\n.m-n4 {\n  margin: -1.5rem !important;\n}\n\n.mt-n4,\n.my-n4 {\n  margin-top: -1.5rem !important;\n}\n\n.mr-n4,\n.mx-n4 {\n  margin-right: -1.5rem !important;\n}\n\n.mb-n4,\n.my-n4 {\n  margin-bottom: -1.5rem !important;\n}\n\n.ml-n4,\n.mx-n4 {\n  margin-left: -1.5rem !important;\n}\n\n.m-n5 {\n  margin: -3rem !important;\n}\n\n.mt-n5,\n.my-n5 {\n  margin-top: -3rem !important;\n}\n\n.mr-n5,\n.mx-n5 {\n  margin-right: -3rem !important;\n}\n\n.mb-n5,\n.my-n5 {\n  margin-bottom: -3rem !important;\n}\n\n.ml-n5,\n.mx-n5 {\n  margin-left: -3rem !important;\n}\n\n.m-auto {\n  margin: auto !important;\n}\n\n.mt-auto,\n.my-auto {\n  margin-top: auto !important;\n}\n\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important;\n}\n\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important;\n}\n\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important;\n}\n\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important;\n  }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important;\n  }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important;\n  }\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important;\n  }\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important;\n  }\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important;\n  }\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important;\n  }\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important;\n  }\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important;\n  }\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important;\n  }\n  .m-sm-n1 {\n    margin: -0.25rem !important;\n  }\n  .mt-sm-n1,\n  .my-sm-n1 {\n    margin-top: -0.25rem !important;\n  }\n  .mr-sm-n1,\n  .mx-sm-n1 {\n    margin-right: -0.25rem !important;\n  }\n  .mb-sm-n1,\n  .my-sm-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n  .ml-sm-n1,\n  .mx-sm-n1 {\n    margin-left: -0.25rem !important;\n  }\n  .m-sm-n2 {\n    margin: -0.5rem !important;\n  }\n  .mt-sm-n2,\n  .my-sm-n2 {\n    margin-top: -0.5rem !important;\n  }\n  .mr-sm-n2,\n  .mx-sm-n2 {\n    margin-right: -0.5rem !important;\n  }\n  .mb-sm-n2,\n  .my-sm-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n  .ml-sm-n2,\n  .mx-sm-n2 {\n    margin-left: -0.5rem !important;\n  }\n  .m-sm-n3 {\n    margin: -1rem !important;\n  }\n  .mt-sm-n3,\n  .my-sm-n3 {\n    margin-top: -1rem !important;\n  }\n  .mr-sm-n3,\n  .mx-sm-n3 {\n    margin-right: -1rem !important;\n  }\n  .mb-sm-n3,\n  .my-sm-n3 {\n    margin-bottom: -1rem !important;\n  }\n  .ml-sm-n3,\n  .mx-sm-n3 {\n    margin-left: -1rem !important;\n  }\n  .m-sm-n4 {\n    margin: -1.5rem !important;\n  }\n  .mt-sm-n4,\n  .my-sm-n4 {\n    margin-top: -1.5rem !important;\n  }\n  .mr-sm-n4,\n  .mx-sm-n4 {\n    margin-right: -1.5rem !important;\n  }\n  .mb-sm-n4,\n  .my-sm-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n  .ml-sm-n4,\n  .mx-sm-n4 {\n    margin-left: -1.5rem !important;\n  }\n  .m-sm-n5 {\n    margin: -3rem !important;\n  }\n  .mt-sm-n5,\n  .my-sm-n5 {\n    margin-top: -3rem !important;\n  }\n  .mr-sm-n5,\n  .mx-sm-n5 {\n    margin-right: -3rem !important;\n  }\n  .mb-sm-n5,\n  .my-sm-n5 {\n    margin-bottom: -3rem !important;\n  }\n  .ml-sm-n5,\n  .mx-sm-n5 {\n    margin-left: -3rem !important;\n  }\n  .m-sm-auto {\n    margin: auto !important;\n  }\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important;\n  }\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important;\n  }\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important;\n  }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important;\n  }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important;\n  }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important;\n  }\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important;\n  }\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important;\n  }\n  .p-md-0 {\n    padding: 0 !important;\n  }\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important;\n  }\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important;\n  }\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important;\n  }\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important;\n  }\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important;\n  }\n  .m-md-n1 {\n    margin: -0.25rem !important;\n  }\n  .mt-md-n1,\n  .my-md-n1 {\n    margin-top: -0.25rem !important;\n  }\n  .mr-md-n1,\n  .mx-md-n1 {\n    margin-right: -0.25rem !important;\n  }\n  .mb-md-n1,\n  .my-md-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n  .ml-md-n1,\n  .mx-md-n1 {\n    margin-left: -0.25rem !important;\n  }\n  .m-md-n2 {\n    margin: -0.5rem !important;\n  }\n  .mt-md-n2,\n  .my-md-n2 {\n    margin-top: -0.5rem !important;\n  }\n  .mr-md-n2,\n  .mx-md-n2 {\n    margin-right: -0.5rem !important;\n  }\n  .mb-md-n2,\n  .my-md-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n  .ml-md-n2,\n  .mx-md-n2 {\n    margin-left: -0.5rem !important;\n  }\n  .m-md-n3 {\n    margin: -1rem !important;\n  }\n  .mt-md-n3,\n  .my-md-n3 {\n    margin-top: -1rem !important;\n  }\n  .mr-md-n3,\n  .mx-md-n3 {\n    margin-right: -1rem !important;\n  }\n  .mb-md-n3,\n  .my-md-n3 {\n    margin-bottom: -1rem !important;\n  }\n  .ml-md-n3,\n  .mx-md-n3 {\n    margin-left: -1rem !important;\n  }\n  .m-md-n4 {\n    margin: -1.5rem !important;\n  }\n  .mt-md-n4,\n  .my-md-n4 {\n    margin-top: -1.5rem !important;\n  }\n  .mr-md-n4,\n  .mx-md-n4 {\n    margin-right: -1.5rem !important;\n  }\n  .mb-md-n4,\n  .my-md-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n  .ml-md-n4,\n  .mx-md-n4 {\n    margin-left: -1.5rem !important;\n  }\n  .m-md-n5 {\n    margin: -3rem !important;\n  }\n  .mt-md-n5,\n  .my-md-n5 {\n    margin-top: -3rem !important;\n  }\n  .mr-md-n5,\n  .mx-md-n5 {\n    margin-right: -3rem !important;\n  }\n  .mb-md-n5,\n  .my-md-n5 {\n    margin-bottom: -3rem !important;\n  }\n  .ml-md-n5,\n  .mx-md-n5 {\n    margin-left: -3rem !important;\n  }\n  .m-md-auto {\n    margin: auto !important;\n  }\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important;\n  }\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important;\n  }\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important;\n  }\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important;\n  }\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important;\n  }\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important;\n  }\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important;\n  }\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important;\n  }\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important;\n  }\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important;\n  }\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important;\n  }\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important;\n  }\n  .m-lg-n1 {\n    margin: -0.25rem !important;\n  }\n  .mt-lg-n1,\n  .my-lg-n1 {\n    margin-top: -0.25rem !important;\n  }\n  .mr-lg-n1,\n  .mx-lg-n1 {\n    margin-right: -0.25rem !important;\n  }\n  .mb-lg-n1,\n  .my-lg-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n  .ml-lg-n1,\n  .mx-lg-n1 {\n    margin-left: -0.25rem !important;\n  }\n  .m-lg-n2 {\n    margin: -0.5rem !important;\n  }\n  .mt-lg-n2,\n  .my-lg-n2 {\n    margin-top: -0.5rem !important;\n  }\n  .mr-lg-n2,\n  .mx-lg-n2 {\n    margin-right: -0.5rem !important;\n  }\n  .mb-lg-n2,\n  .my-lg-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n  .ml-lg-n2,\n  .mx-lg-n2 {\n    margin-left: -0.5rem !important;\n  }\n  .m-lg-n3 {\n    margin: -1rem !important;\n  }\n  .mt-lg-n3,\n  .my-lg-n3 {\n    margin-top: -1rem !important;\n  }\n  .mr-lg-n3,\n  .mx-lg-n3 {\n    margin-right: -1rem !important;\n  }\n  .mb-lg-n3,\n  .my-lg-n3 {\n    margin-bottom: -1rem !important;\n  }\n  .ml-lg-n3,\n  .mx-lg-n3 {\n    margin-left: -1rem !important;\n  }\n  .m-lg-n4 {\n    margin: -1.5rem !important;\n  }\n  .mt-lg-n4,\n  .my-lg-n4 {\n    margin-top: -1.5rem !important;\n  }\n  .mr-lg-n4,\n  .mx-lg-n4 {\n    margin-right: -1.5rem !important;\n  }\n  .mb-lg-n4,\n  .my-lg-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n  .ml-lg-n4,\n  .mx-lg-n4 {\n    margin-left: -1.5rem !important;\n  }\n  .m-lg-n5 {\n    margin: -3rem !important;\n  }\n  .mt-lg-n5,\n  .my-lg-n5 {\n    margin-top: -3rem !important;\n  }\n  .mr-lg-n5,\n  .mx-lg-n5 {\n    margin-right: -3rem !important;\n  }\n  .mb-lg-n5,\n  .my-lg-n5 {\n    margin-bottom: -3rem !important;\n  }\n  .ml-lg-n5,\n  .mx-lg-n5 {\n    margin-left: -3rem !important;\n  }\n  .m-lg-auto {\n    margin: auto !important;\n  }\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important;\n  }\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important;\n  }\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important;\n  }\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important;\n  }\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important;\n  }\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important;\n  }\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important;\n  }\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important;\n  }\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important;\n  }\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important;\n  }\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important;\n  }\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important;\n  }\n  .m-xl-n1 {\n    margin: -0.25rem !important;\n  }\n  .mt-xl-n1,\n  .my-xl-n1 {\n    margin-top: -0.25rem !important;\n  }\n  .mr-xl-n1,\n  .mx-xl-n1 {\n    margin-right: -0.25rem !important;\n  }\n  .mb-xl-n1,\n  .my-xl-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n  .ml-xl-n1,\n  .mx-xl-n1 {\n    margin-left: -0.25rem !important;\n  }\n  .m-xl-n2 {\n    margin: -0.5rem !important;\n  }\n  .mt-xl-n2,\n  .my-xl-n2 {\n    margin-top: -0.5rem !important;\n  }\n  .mr-xl-n2,\n  .mx-xl-n2 {\n    margin-right: -0.5rem !important;\n  }\n  .mb-xl-n2,\n  .my-xl-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n  .ml-xl-n2,\n  .mx-xl-n2 {\n    margin-left: -0.5rem !important;\n  }\n  .m-xl-n3 {\n    margin: -1rem !important;\n  }\n  .mt-xl-n3,\n  .my-xl-n3 {\n    margin-top: -1rem !important;\n  }\n  .mr-xl-n3,\n  .mx-xl-n3 {\n    margin-right: -1rem !important;\n  }\n  .mb-xl-n3,\n  .my-xl-n3 {\n    margin-bottom: -1rem !important;\n  }\n  .ml-xl-n3,\n  .mx-xl-n3 {\n    margin-left: -1rem !important;\n  }\n  .m-xl-n4 {\n    margin: -1.5rem !important;\n  }\n  .mt-xl-n4,\n  .my-xl-n4 {\n    margin-top: -1.5rem !important;\n  }\n  .mr-xl-n4,\n  .mx-xl-n4 {\n    margin-right: -1.5rem !important;\n  }\n  .mb-xl-n4,\n  .my-xl-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n  .ml-xl-n4,\n  .mx-xl-n4 {\n    margin-left: -1.5rem !important;\n  }\n  .m-xl-n5 {\n    margin: -3rem !important;\n  }\n  .mt-xl-n5,\n  .my-xl-n5 {\n    margin-top: -3rem !important;\n  }\n  .mr-xl-n5,\n  .mx-xl-n5 {\n    margin-right: -3rem !important;\n  }\n  .mb-xl-n5,\n  .my-xl-n5 {\n    margin-bottom: -3rem !important;\n  }\n  .ml-xl-n5,\n  .mx-xl-n5 {\n    margin-left: -3rem !important;\n  }\n  .m-xl-auto {\n    margin: auto !important;\n  }\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important;\n  }\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important;\n  }\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important;\n  }\n}\n\n.stretched-link::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  pointer-events: auto;\n  content: "";\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;\n}\n\n.text-justify {\n  text-align: justify !important;\n}\n\n.text-wrap {\n  white-space: normal !important;\n}\n\n.text-nowrap {\n  white-space: nowrap !important;\n}\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.text-left {\n  text-align: left !important;\n}\n\n.text-right {\n  text-align: right !important;\n}\n\n.text-center {\n  text-align: center !important;\n}\n\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important;\n  }\n  .text-sm-right {\n    text-align: right !important;\n  }\n  .text-sm-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important;\n  }\n  .text-md-right {\n    text-align: right !important;\n  }\n  .text-md-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important;\n  }\n  .text-lg-right {\n    text-align: right !important;\n  }\n  .text-lg-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important;\n  }\n  .text-xl-right {\n    text-align: right !important;\n  }\n  .text-xl-center {\n    text-align: center !important;\n  }\n}\n\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n\n.font-weight-light {\n  font-weight: 300 !important;\n}\n\n.font-weight-lighter {\n  font-weight: lighter !important;\n}\n\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n\n.font-weight-bolder {\n  font-weight: bolder !important;\n}\n\n.font-italic {\n  font-style: italic !important;\n}\n\n.text-white {\n  color: #fff !important;\n}\n\n.text-primary {\n  color: #4582ec !important;\n}\n\na.text-primary:hover, a.text-primary:focus {\n  color: #1559cf !important;\n}\n\n.text-secondary {\n  color: #adb5bd !important;\n}\n\na.text-secondary:hover, a.text-secondary:focus {\n  color: #838f9b !important;\n}\n\n.text-success {\n  color: #02b875 !important;\n}\n\na.text-success:hover, a.text-success:focus {\n  color: #016c45 !important;\n}\n\n.text-info {\n  color: #17a2b8 !important;\n}\n\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important;\n}\n\n.text-warning {\n  color: #f0ad4e !important;\n}\n\na.text-warning:hover, a.text-warning:focus {\n  color: #df8a13 !important;\n}\n\n.text-danger {\n  color: #d9534f !important;\n}\n\na.text-danger:hover, a.text-danger:focus {\n  color: #b52b27 !important;\n}\n\n.text-light {\n  color: #f8f9fa !important;\n}\n\na.text-light:hover, a.text-light:focus {\n  color: #cbd3da !important;\n}\n\n.text-dark {\n  color: #343a40 !important;\n}\n\na.text-dark:hover, a.text-dark:focus {\n  color: #121416 !important;\n}\n\n.text-body {\n  color: #343a40 !important;\n}\n\n.text-muted {\n  color: #868e96 !important;\n}\n\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n.text-decoration-none {\n  text-decoration: none !important;\n}\n\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n\n.text-reset {\n  color: inherit !important;\n}\n\n.visible {\n  visibility: visible !important;\n}\n\n.invisible {\n  visibility: hidden !important;\n}\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important;\n  }\n  a:not(.btn) {\n    text-decoration: underline;\n  }\n  abbr[title]::after {\n    content: " (" attr(title) ")";\n  }\n  pre {\n    white-space: pre-wrap !important;\n  }\n  pre,\n  blockquote {\n    border: 1px solid #adb5bd;\n    page-break-inside: avoid;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  @page {\n    size: a3;\n  }\n  body {\n    min-width: 992px !important;\n  }\n  .container {\n    min-width: 992px !important;\n  }\n  .navbar {\n    display: none;\n  }\n  .badge {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n  .table-dark {\n    color: inherit;\n  }\n  .table-dark th,\n  .table-dark td,\n  .table-dark thead th,\n  .table-dark tbody + tbody {\n    border-color: rgba(0, 0, 0, 0.1);\n  }\n  .table .thead-dark th {\n    color: inherit;\n    border-color: rgba(0, 0, 0, 0.1);\n  }\n}\n\n.navbar {\n  font-size: 0.930125rem;\n}\n\n.navbar.bg-dark {\n  background-color: #02b875 !important;\n}\n\n.navbar.bg-light {\n  background-color: #fff !important;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.navbar.bg-light.navbar-fixed-top {\n  border-width: 0 0 1px;\n}\n\n.navbar.bg-light.navbar-fixed-bottom {\n  border-width: 1px 0 0;\n}\n\np {\n  font-family: Georgia, Cambria, "Times New Roman", Times, serif;\n}\n\nblockquote {\n  font-style: italic;\n}\n\nfooter {\n  font-size: 0.930125rem;\n}\n\n.lead {\n  color: #868e96;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n}\n\ntable,\n.table {\n  font-size: 0.930125rem;\n}\n\ntable-primary, table-secondary, table-success, table-info, table-warning, table-danger,\n.table-primary,\n.table-secondary,\n.table-success,\n.table-info,\n.table-warning,\n.table-danger {\n  color: #fff;\n}\n\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #4582ec;\n}\n\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #adb5bd;\n}\n\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #f8f9fa;\n}\n\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #343a40;\n}\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #02b875;\n}\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #17a2b8;\n}\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #d9534f;\n}\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #f0ad4e;\n}\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-hover .table-primary:hover,\n.table-hover .table-primary:hover > th,\n.table-hover .table-primary:hover > td {\n  background-color: #2e72ea;\n}\n\n.table-hover .table-secondary:hover,\n.table-hover .table-secondary:hover > th,\n.table-hover .table-secondary:hover > td {\n  background-color: #9fa8b2;\n}\n\n.table-hover .table-light:hover,\n.table-hover .table-light:hover > th,\n.table-hover .table-light:hover > td {\n  background-color: #e9ecef;\n}\n\n.table-hover .table-dark:hover,\n.table-hover .table-dark:hover > th,\n.table-hover .table-dark:hover > td {\n  background-color: #292d32;\n}\n\n.table-hover .table-success:hover,\n.table-hover .table-success:hover > th,\n.table-hover .table-success:hover > td {\n  background-color: #029f65;\n}\n\n.table-hover .table-info:hover,\n.table-hover .table-info:hover > th,\n.table-hover .table-info:hover > td {\n  background-color: #148ea1;\n}\n\n.table-hover .table-danger:hover,\n.table-hover .table-danger:hover > th,\n.table-hover .table-danger:hover > td {\n  background-color: #d43f3a;\n}\n\n.table-hover .table-warning:hover,\n.table-hover .table-warning:hover > th,\n.table-hover .table-warning:hover > td {\n  background-color: #eea236;\n}\n\n.table-hover .table-active:hover,\n.table-hover .table-active:hover > th,\n.table-hover .table-active:hover > td {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.nav,\n.breadcrumb,\n.pagination {\n  font-size: 0.930125rem;\n}\n\n.dropdown-menu {\n  font-size: 0.930125rem;\n}\n\n.alert {\n  color: #fff;\n  font-size: 0.930125rem;\n}\n\n.alert,\n.alert p {\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n}\n\n.alert a,\n.alert .alert-link {\n  color: #fff;\n  font-weight: 400;\n  text-decoration: underline;\n}\n\n.alert-primary {\n  background-color: #4582ec;\n}\n\n.alert-secondary {\n  background-color: #adb5bd;\n}\n\n.alert-success {\n  background-color: #02b875;\n}\n\n.alert-info {\n  background-color: #17a2b8;\n}\n\n.alert-warning {\n  background-color: #f0ad4e;\n}\n\n.alert-danger {\n  background-color: #d9534f;\n}\n\n.alert-light {\n  background-color: #f8f9fa;\n}\n\n.alert-dark {\n  background-color: #343a40;\n}\n\n.alert-light,\n.alert-light a,\n.alert-light .alert-link {\n  color: #343a40;\n}\n\n.badge {\n  vertical-align: bottom;\n}\n\n.list-group {\n  font-size: 0.930125rem;\n}\n`,""])
;
// Exports
/* harmony default export */const A=v;
/***/},
/***/314:
/***/n=>{"use strict";
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/n.exports=function(n){var t=[];
// return the list of modules as css string
return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5]
;return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),
o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e
})).join("")},
// import a list of modules into the list
t.i=function(n,e,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var l=0;l<this.length;l++){
var s=this[l][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var m=[].concat(n[d])
;o&&i[m[0]]||(void 0!==a&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),
m[5]=a),e&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=e):m[2]=e),
r&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=r):m[4]="".concat(r)),t.push(m))}},t}}
/***/,
/***/417:
/***/n=>{"use strict";n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),
// If url is already wrapped in quotes, remove them
/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),
// Should url be wrapped?
// See https://drafts.csswg.org/css-values-3/#urls
/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}}
/***/,
/***/601:
/***/n=>{"use strict";n.exports=function(n){return n[1]}}
/***/,
/***/262:
/***/(n,t)=>{"use strict";
// runtime helper for setting properties on components
// in a tree-shakable way
t.A=(n,t)=>{const e=n.__vccOpts||n;for(const[n,o]of t)e[n]=o;return e}}
/***/,
/***/529:
/***/(n,t,e)=>{
// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var o=e(902);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);
// add the styles to the DOM
(0,e(534)/* ["default"] */.A)("3090a77c",o,!1,{})}
/***/,
/***/513:
/***/(n,t,e)=>{
// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var o=e(394);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);
// add the styles to the DOM
(0,e(534)/* ["default"] */.A)("1bbdab96",o,!1,{})}
/***/,
/***/28:
/***/(n,t,e)=>{
// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var o=e(437);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);
// add the styles to the DOM
(0,e(534)/* ["default"] */.A)("8133236a",o,!1,{})}
/***/,
/***/85:
/***/(n,t,e)=>{
// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var o=e(178);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);
// add the styles to the DOM
(0,e(534)/* ["default"] */.A)("28d6d316",o,!1,{})}
/***/,
/***/325:
/***/(n,t,e)=>{
// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var o=e(36);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);
// add the styles to the DOM
(0,e(534)/* ["default"] */.A)("9ac38506",o,!1,{})}
/***/,
/***/26:
/***/(n,t,e)=>{
// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var o=e(23);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals);
// add the styles to the DOM
(0,e(534)/* ["default"] */.A)("dbabf35a",o,!1,{})}
/***/,
/***/534:
/***/(n,t,e)=>{"use strict";
// EXPORTS
// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function o(n,t){for(var e=[],o={},r=0;r<t.length;r++){var a=t[r],i=a[0],l={id:n+":"+r,css:a[1],media:a[2],sourceMap:a[3]
};o[i]?o[i].parts.push(l):e.push(o[i]={id:i,parts:[l]})}return e}e.d(t,{A:()=>/* binding */g})
;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/
var r="undefined"!=typeof document
;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/var a={
/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/},i=r&&(document.head||document.getElementsByTagName("head")[0]),l=null,s=0,d=!1,m=function(){},c=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase())
;function g(n,t,e,r){d=e,c=r||{};var i=o(n,t);return b(i),function(t){for(var e=[],r=0;r<i.length;r++){var l=i[r]
;(s=a[l.id]).refs--,e.push(s)}t?b(i=o(n,t)):i=[];for(r=0;r<e.length;r++){var s;if(0===(s=e[r]).refs){
for(var d=0;d<s.parts.length;d++)s.parts[d]();delete a[s.id]}}}}function b(n/* Array<StyleObject> */){
for(var t=0;t<n.length;t++){var e=n[t],o=a[e.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](e.parts[r])
;for(;r<e.parts.length;r++)o.parts.push(h(e.parts[r]));o.parts.length>e.parts.length&&(o.parts.length=e.parts.length)
}else{var i=[];for(r=0;r<e.parts.length;r++)i.push(h(e.parts[r]));a[e.id]={id:e.id,refs:1,parts:i}}}}function u(){
var n=document.createElement("style");return n.type="text/css",i.appendChild(n),n}function h(n/* StyleObjectPart */){
var t,e,o=document.querySelector("style["+p+'~="'+n.id+'"]');if(o){if(d)
// has SSR styles and in production mode.
// simply do nothing.
return m;
// has SSR styles but in dev mode.
// for some reason Chrome can't handle source map in server-rendered
// style tags - source maps in <style> only works if the style tag is
// created and inserted dynamically. So we remove the server rendered
// styles and inject new ones.
o.parentNode.removeChild(o)}if(f){
// use singleton mode for IE9.
var r=s++;o=l||(l=u()),t=w.bind(null,o,r,!1),e=w.bind(null,o,r,!0)}else
// use multi-style-tag mode in all other cases
o=u(),t=y.bind(null,o),e=function(){o.parentNode.removeChild(o)};return t(n),function(o/* StyleObjectPart */){if(o){
if(o.css===n.css&&o.media===n.media&&o.sourceMap===n.sourceMap)return;t(n=o)}else e()}}var x,v=(x=[],function(n,t){
return x[n]=t,x.filter(Boolean).join("\n")});function w(n,t,e,o){var r=e?"":o.css
;if(n.styleSheet)n.styleSheet.cssText=v(t,r);else{var a=document.createTextNode(r),i=n.childNodes
;i[t]&&n.removeChild(i[t]),i.length?n.insertBefore(a,i[t]):n.appendChild(a)}}function y(n,t){
var e=t.css,o=t.media,r=t.sourceMap;if(o&&n.setAttribute("media",o),c.ssrId&&n.setAttribute(p,t.id),r&&(
// https://developer.chrome.com/devtools/docs/javascript-debugging
// this makes source maps inside style tags work properly in Chrome
e+="\n/*# sourceURL="+r.sources[0]+" */",
// http://stackoverflow.com/a/26603875
e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),
n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild)
;n.appendChild(document.createTextNode(e))}}
/***/},
/***/886:
/***/n=>{"use strict"
;n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath d=%27M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z%27/%3e%3c/svg%3e"
}
/***/,
/***/226:
/***/n=>{"use strict"
;n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath d=%27M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z%27/%3e%3c/svg%3e"
}
/***/,
/***/526:
/***/n=>{"use strict"
;n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23d9534f%27 viewBox=%270 0 12 12%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23d9534f%27 stroke=%27none%27/%3e%3c/svg%3e"
}
/***/,
/***/969:
/***/n=>{"use strict"
;n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e"
}
/***/,
/***/6:
/***/n=>{"use strict"
;n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2730%27 height=%2730%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.5%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"
}
/***/,
/***/499:
/***/n=>{"use strict"
;n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2730%27 height=%2730%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.6%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"
}
/***/,
/***/285:
/***/n=>{"use strict"
;n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%274%27 height=%274%27 viewBox=%270 0 4 4%27%3e%3cpath stroke=%27%23fff%27 d=%27M0 2h4%27/%3e%3c/svg%3e"
}
/***/,
/***/512:
/***/n=>{"use strict"
;n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%274%27 height=%275%27 viewBox=%270 0 4 5%27%3e%3cpath fill=%27%23343a40%27 d=%27M2 0L0 2h4zm0 5L0 3h4z%27/%3e%3c/svg%3e"
}
/***/,
/***/682:
/***/n=>{"use strict"
;n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%2302b875%27 d=%27M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e"
}
/***/,
/***/792:
/***/n=>{"use strict"
;n.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23fff%27 d=%27M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z%27/%3e%3c/svg%3e"
}
/***/
/******/},t={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function e(o){
/******/ // Check if module is in cache
/******/var r=t[o];
/******/if(void 0!==r)
/******/return r.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var a=t[o]={
/******/id:o,
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return n[o](a,a.exports,e),a.exports;
/******/}
/******/
/******/ // expose the modules object (__webpack_modules__)
/******/e.m=n,
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/e.n=n=>{
/******/var t=n&&n.__esModule?
/******/()=>n.default
/******/:()=>n
/******/;
/******/return e.d(t,{a:t}),t;
/******/},
/******/ // define getter functions for harmony exports
/******/e.d=(n,t)=>{
/******/for(var o in t)
/******/e.o(t,o)&&!e.o(n,o)&&
/******/Object.defineProperty(n,o,{enumerable:!0,get:t[o]})
/******/;
/******/},
/******/e.g=function(){
/******/if("object"==typeof globalThis)return globalThis;
/******/try{
/******/return this||new Function("return this")();
/******/}catch(n){
/******/if("object"==typeof window)return window;
/******/}
/******/}(),
/******/e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t)
/******/,
/******/ // define __esModule on exports
/******/e.r=n=>{
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(n,"__esModule",{value:!0})}
/******/,
/******/e.b=document.baseURI||self.location.href,
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(()=>{"use strict";// CONCATENATED MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function n(n,t){const e=Object.create(null),o=n.split(",");for(let n=0;n<o.length;n++)e[o[n]]=!0
;return t?n=>!!e[n.toLowerCase()]:n=>!!e[n]}
/**
 * dev only flag -> name mapping
 */
/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */
const t="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",o=n(t);
/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. `<select multiple>` compiles to `{ multiple: '' }`
 */
function r(n){return!!n||""===n}function a(n){if(_(n)){const t={};for(let e=0;e<n.length;e++){
const o=n[e],r=j(o)?s(o):a(o);if(r)for(const n in r)t[n]=r[n]}return t}return j(n)||E(n)?n:void 0}
const i=/;(?![^(]*\))/g,l=/:(.+)/;function s(n){const t={};return n.split(i).forEach((n=>{if(n){const e=n.split(l)
;e.length>1&&(t[e[0].trim()]=e[1].trim())}})),t}function d(n){let t=""
;if(j(n))t=n;else if(_(n))for(let e=0;e<n.length;e++){const o=d(n[e]);o&&(t+=o+" ")
}else if(E(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}
/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */
const m=n=>j(n)?n:null==n?"":_(n)||E(n)&&(n.toString===N||!C(n.toString))?JSON.stringify(n,c,2):String(n),c=(n,t)=>
// can't use isRef here since @vue/shared has no deps
t&&t.__v_isRef?c(n,t.value):z(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((n,[t,e])=>(n[`${t} =>`]=e,n)),{})}:S(t)?{
[`Set(${t.size})`]:[...t.values()]
}:!E(t)||_(t)||M(t)?t:String(t),p={},f=[],g=()=>{},b=()=>!1,u=/^on[^a-z]/,h=n=>u.test(n),x=n=>n.startsWith("onUpdate:"),v=Object.assign,w=(n,t)=>{
const e=n.indexOf(t);e>-1&&n.splice(e,1)
},y=Object.prototype.hasOwnProperty,k=(n,t)=>y.call(n,t),_=Array.isArray,z=n=>"[object Map]"===L(n),S=n=>"[object Set]"===L(n),C=n=>"function"==typeof n,j=n=>"string"==typeof n,O=n=>"symbol"==typeof n,E=n=>null!==n&&"object"==typeof n,A=n=>E(n)&&C(n.then)&&C(n.catch),N=Object.prototype.toString,L=n=>N.call(n),T=n=>L(n).slice(8,-1),M=n=>"[object Object]"===L(n),U=n=>j(n)&&"NaN"!==n&&"-"!==n[0]&&""+parseInt(n,10)===n,P=n(
// the leading comma is intentional so empty string "" is also included
",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),I=n=>{
const t=Object.create(null);return e=>t[e]||(t[e]=n(e))
},R=/-(\w)/g,F=I((n=>n.replace(R,((n,t)=>t?t.toUpperCase():"")))),B=/\B([A-Z])/g,V=I((n=>n.replace(B,"-$1").toLowerCase())),$=I((n=>n.charAt(0).toUpperCase()+n.slice(1))),D=I((n=>n?`on${$(n)}`:"")),H=(n,t)=>!Object.is(n,t),W=(n,t)=>{
for(let e=0;e<n.length;e++)n[e](t)},q=(n,t,e)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:e})
},K=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let G
;const X=()=>G||(G="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e.g?e.g:{})
;let J;class Q{constructor(n=!1){
/**
         * @internal
         */
this.active=!0,
/**
         * @internal
         */
this.effects=[],
/**
         * @internal
         */
this.cleanups=[],!n&&J&&(this.parent=J,this.index=(J.scopes||(J.scopes=[])).push(this)-1)}run(n){if(this.active){
const t=J;try{return J=this,n()}finally{J=t}}else 0}
/**
     * This should only be called on non-detached scopes
     * @internal
     */on(){J=this}
/**
     * This should only be called on non-detached scopes
     * @internal
     */off(){J=this.parent}stop(n){if(this.active){let t,e;for(t=0,e=this.effects.length;t<e;t++)this.effects[t].stop()
;for(t=0,e=this.cleanups.length;t<e;t++)this.cleanups[t]();if(this.scopes)for(t=0,
e=this.scopes.length;t<e;t++)this.scopes[t].stop(!0);
// nested scope, dereference from parent to avoid memory leaks
if(this.parent&&!n){
// optimized O(1) removal
const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}
function Y(n,t=J){t&&t.active&&t.effects.push(n)}const Z=n=>{const t=new Set(n);return t.w=0,t.n=0,t
},nn=n=>(n.w&rn)>0,tn=n=>(n.n&rn)>0,en=new WeakMap;
// The number of effects currently being tracked recursively.
let on=0,rn=1;
/**
 * The bitwise track markers support at most 30 levels of recursion.
 * This value is chosen to enable modern JS engines to use a SMI on all platforms.
 * When recursion depth is greater, fall back to using a full cleanup.
 */
const an=30;let ln;const sn=Symbol(""),dn=Symbol("");class mn{constructor(n,t=null,e){this.fn=n,this.scheduler=t,
this.active=!0,this.deps=[],this.parent=void 0,Y(this,e)}run(){if(!this.active)return this.fn();let n=ln,t=pn;for(;n;){
if(n===this)return;n=n.parent}try{return this.parent=ln,ln=this,pn=!0,rn=1<<++on,on<=an?(({deps:n})=>{
if(n.length)for(let t=0;t<n.length;t++)n[t].w|=rn;// set was tracked
})(this):cn(this),this.fn()}finally{on<=an&&(n=>{const{deps:t}=n;if(t.length){let e=0;for(let o=0;o<t.length;o++){
const r=t[o];nn(r)&&!tn(r)?r.delete(n):t[e++]=r,
// clear bits
r.w&=~rn,r.n&=~rn}t.length=e}})(this),rn=1<<--on,ln=this.parent,pn=t,this.parent=void 0,this.deferStop&&this.stop()}}
stop(){
// stopped while running itself - defer the cleanup
ln===this?this.deferStop=!0:this.active&&(cn(this),this.onStop&&this.onStop(),this.active=!1)}}function cn(n){
const{deps:t}=n;if(t.length){for(let e=0;e<t.length;e++)t[e].delete(n);t.length=0}}let pn=!0;const fn=[];function gn(){
fn.push(pn),pn=!1}function bn(){const n=fn.pop();pn=void 0===n||n}function un(n,t,e){if(pn&&ln){let t=en.get(n)
;t||en.set(n,t=new Map);let o=t.get(e);o||t.set(e,o=Z());hn(o,void 0)}}function hn(n,t){let e=!1;on<=an?tn(n)||(n.n|=rn,
// set newly tracked
e=!nn(n)):
// Full cleanup mode.
e=!n.has(ln),e&&(n.add(ln),ln.deps.push(n))}function xn(n,t,e,o,r,a){const i=en.get(n);if(!i)
// never been tracked
return;let l=[];if("clear"/* CLEAR */===t)
// collection being cleared
// trigger all effects for target
l=[...i.values()];else if("length"===e&&_(n))i.forEach(((n,t)=>{("length"===t||t>=o)&&l.push(n)}));else
// also run for iteration key on ADD | DELETE | Map.SET
switch(
// schedule runs for SET | ADD | DELETE
void 0!==e&&l.push(i.get(e)),t){case"add"/* ADD */:_(n)?U(e)&&
// new index added to array -> length changes
l.push(i.get("length")):(l.push(i.get(sn)),z(n)&&l.push(i.get(dn)));break;case"delete"/* DELETE */:
_(n)||(l.push(i.get(sn)),z(n)&&l.push(i.get(dn)));break;case"set"/* SET */:z(n)&&l.push(i.get(sn))}
if(1===l.length)l[0]&&vn(l[0]);else{const n=[];for(const t of l)t&&n.push(...t);vn(Z(n))}}function vn(n,t){
// spread into array for stabilization
const e=_(n)?n:[...n];for(const n of e)n.computed&&wn(n,t);for(const n of e)n.computed||wn(n,t)}function wn(n,t){
(n!==ln||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const yn=n("__proto__,__v_isRef,__isVue"),kn=new Set(

Object.getOwnPropertyNames(Symbol).filter((n=>"arguments"!==n&&"caller"!==n)).map((n=>Symbol[n])).filter(O)),_n=On(),zn=On(!1,!0),Sn=On(!0),Cn=jn()
;function jn(){const n={};return["includes","indexOf","lastIndexOf"].forEach((t=>{n[t]=function(...n){const e=ct(this)
;for(let n=0,t=this.length;n<t;n++)un(e,0/* GET */,n+"");
// we run the method using the original args first (which may be reactive)
const o=e[t](...n);return-1===o||!1===o?e[t](...n.map(ct)):o}})),["push","pop","shift","unshift","splice"].forEach((t=>{
n[t]=function(...n){gn();const e=ct(this)[t].apply(this,n);return bn(),e}})),n}function On(n=!1,t=!1){
return function(e,o,r){if("__v_isReactive"/* IS_REACTIVE */===o)return!n
;if("__v_isReadonly"/* IS_READONLY */===o)return n;if("__v_isShallow"/* IS_SHALLOW */===o)return t
;if("__v_raw"/* RAW */===o&&r===(n?t?ot:et:t?tt:nt).get(e))return e;const a=_(e)
;if(!n&&a&&k(Cn,o))return Reflect.get(Cn,o,r);const i=Reflect.get(e,o,r)
;return(O(o)?kn.has(o):yn(o))?i:(n||un(e,0/* GET */,o),t?i:ht(i)?a&&U(o)?i:i.value:E(i)?n?at(i):rt(i):i)}}
function En(n=!1){return function(t,e,o,r){let a=t[e];if(st(a)&&ht(a)&&!ht(o))return!1;if(!n&&!st(o)&&(dt(o)||(o=ct(o),
a=ct(a)),!_(t)&&ht(a)&&!ht(o)))return a.value=o,!0;const i=_(t)&&U(e)?Number(e)<t.length:k(t,e),l=Reflect.set(t,e,o,r);
// don't trigger if target is something up in the prototype chain of original
return t===ct(r)&&(i?H(o,a)&&xn(t,"set"/* SET */,e,o):xn(t,"add"/* ADD */,e,o)),l}}const An={get:_n,set:En(),
deleteProperty:function(n,t){const e=k(n,t),o=(n[t],Reflect.deleteProperty(n,t))
;return o&&e&&xn(n,"delete"/* DELETE */,t,void 0),o},has:function(n,t){const e=Reflect.has(n,t)
;return O(t)&&kn.has(t)||un(n,0/* HAS */,t),e},ownKeys:function(n){return un(n,0/* ITERATE */,_(n)?"length":sn),
Reflect.ownKeys(n)}},Nn={get:Sn,set:(n,t)=>!0,deleteProperty:(n,t)=>!0},Ln=v({},An,{get:zn,set:En(!0)
}),Tn=n=>n,Mn=n=>Reflect.getPrototypeOf(n);function Un(n,t,e=!1,o=!1){const r=ct(
// #1772: readonly(reactive(Map)) should return readonly + reactive version
// of the value
n=n.__v_raw),a=ct(t);e||(t!==a&&un(r,0/* GET */,t),un(r,0/* GET */,a));const{has:i}=Mn(r),l=o?Tn:e?gt:ft
;return i.call(r,t)?l(n.get(t)):i.call(r,a)?l(n.get(a)):void(n!==r&&
// #3602 readonly(reactive(Map))
// ensure that the nested reactive `Map` can do tracking for itself
n.get(t))}function Pn(n,t=!1){const e=this.__v_raw,o=ct(e),r=ct(n);return t||(n!==r&&un(o,0/* HAS */,n),
un(o,0/* HAS */,r)),n===r?e.has(n):e.has(n)||e.has(r)}function In(n,t=!1){return n=n.__v_raw,
!t&&un(ct(n),0/* ITERATE */,sn),Reflect.get(n,"size",n)}function Rn(n){n=ct(n);const t=ct(this)
;return Mn(t).has.call(t,n)||(t.add(n),xn(t,"add"/* ADD */,n,n)),this}function Fn(n,t){t=ct(t)
;const e=ct(this),{has:o,get:r}=Mn(e);let a=o.call(e,n);a||(n=ct(n),a=o.call(e,n));const i=r.call(e,n)
;return e.set(n,t),a?H(t,i)&&xn(e,"set"/* SET */,n,t):xn(e,"add"/* ADD */,n,t),this}function Bn(n){
const t=ct(this),{has:e,get:o}=Mn(t);let r=e.call(t,n);r||(n=ct(n),r=e.call(t,n));o&&o.call(t,n);
// forward the operation before queueing reactions
const a=t.delete(n);return r&&xn(t,"delete"/* DELETE */,n,void 0),a}function Vn(){
const n=ct(this),t=0!==n.size,e=n.clear();return t&&xn(n,"clear"/* CLEAR */,void 0,void 0),e}function $n(n,t){
return function(e,o){const r=this,a=r.__v_raw,i=ct(a),l=t?Tn:n?gt:ft;return!n&&un(i,0/* ITERATE */,sn),
a.forEach(((n,t)=>e.call(o,l(n),l(t),r)))}}function Dn(n,t,e){return function(...o){
const r=this.__v_raw,a=ct(r),i=z(a),l="entries"===n||n===Symbol.iterator&&i,s="keys"===n&&i,d=r[n](...o),m=e?Tn:t?gt:ft;
// return a wrapped iterator which returns observed versions of the
// values emitted from the real iterator
return!t&&un(a,0/* ITERATE */,s?dn:sn),{
// iterator protocol
next(){const{value:n,done:t}=d.next();return t?{value:n,done:t}:{value:l?[m(n[0]),m(n[1])]:m(n),done:t}},
// iterable protocol
[Symbol.iterator](){return this}}}}function Hn(n){return function(...t){return"delete"/* DELETE */!==n&&this}}
function Wn(){const n={get(n){return Un(this,n)},get size(){return In(this)},has:Pn,add:Rn,set:Fn,delete:Bn,clear:Vn,
forEach:$n(!1,!1)},t={get(n){return Un(this,n,!1,!0)},get size(){return In(this)},has:Pn,add:Rn,set:Fn,delete:Bn,
clear:Vn,forEach:$n(!1,!0)},e={get(n){return Un(this,n,!0)},get size(){return In(this,!0)},has(n){
return Pn.call(this,n,!0)},add:Hn("add"/* ADD */),set:Hn("set"/* SET */),delete:Hn("delete"/* DELETE */),
clear:Hn("clear"/* CLEAR */),forEach:$n(!0,!1)},o={get(n){return Un(this,n,!0,!0)},get size(){return In(this,!0)},
has(n){return Pn.call(this,n,!0)},add:Hn("add"/* ADD */),set:Hn("set"/* SET */),delete:Hn("delete"/* DELETE */),
clear:Hn("clear"/* CLEAR */),forEach:$n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((r=>{
n[r]=Dn(r,!1,!1),e[r]=Dn(r,!0,!1),t[r]=Dn(r,!1,!0),o[r]=Dn(r,!0,!0)})),[n,e,t,o]}const[qn,Kn,Gn,Xn]=Wn()
;function Jn(n,t){const e=t?n?Xn:Gn:n?Kn:qn
;return(t,o,r)=>"__v_isReactive"/* IS_REACTIVE */===o?!n:"__v_isReadonly"/* IS_READONLY */===o?n:"__v_raw"/* RAW */===o?t:Reflect.get(k(e,o)&&o in t?e:t,o,r)
}const Qn={get:Jn(!1,!1)},Yn={get:Jn(!1,!0)},Zn={get:Jn(!0,!1)}
;const nt=new WeakMap,tt=new WeakMap,et=new WeakMap,ot=new WeakMap;function rt(n){
// if trying to observe a readonly proxy, return the readonly version.
return st(n)?n:it(n,!1,An,Qn,nt)}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */
function at(n){return it(n,!0,Nn,Zn,et)}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */function it(n,t,e,o,r){if(!E(n))return n;
// target is already a Proxy, return it.
// exception: calling readonly() on a reactive object
if(n.__v_raw&&(!t||!n.__v_isReactive))return n;
// target already has corresponding Proxy
const a=r.get(n);if(a)return a;
// only specific value types can be observed.
const i=(l=n).__v_skip||!Object.isExtensible(l)?0/* INVALID */:function(n){switch(n){case"Object":case"Array":
return 1/* COMMON */;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2/* COLLECTION */;default:
return 0/* INVALID */}}(T(l));var l;if(0/* INVALID */===i)return n;const s=new Proxy(n,2/* COLLECTION */===i?o:e)
;return r.set(n,s),s}function lt(n){return st(n)?lt(n.__v_raw):!(!n||!n.__v_isReactive)}function st(n){
return!(!n||!n.__v_isReadonly)}function dt(n){return!(!n||!n.__v_isShallow)}function mt(n){return lt(n)||st(n)}
function ct(n){const t=n&&n.__v_raw;return t?ct(t):n}function pt(n){return q(n,"__v_skip"/* SKIP */,!0),n}
const ft=n=>E(n)?rt(n):n,gt=n=>E(n)?at(n):n;function bt(n){pn&&ln&&hn((n=ct(n)).dep||(n.dep=Z()))}function ut(n,t){
(n=ct(n)).dep&&vn(n.dep)}function ht(n){return!(!n||!0!==n.__v_isRef)}function xt(n){return vt(n,!1)}function vt(n,t){
return ht(n)?n:new wt(n,t)}class wt{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,
this._rawValue=t?n:ct(n),this._value=t?n:ft(n)}get value(){return bt(this),this._value}set value(n){
n=this.__v_isShallow?n:ct(n),H(n,this._rawValue)&&(this._rawValue=n,this._value=this.__v_isShallow?n:ft(n),ut(this))}}
function yt(n){return ht(n)?n.value:n}const kt={get:(n,t,e)=>yt(Reflect.get(n,t,e)),set:(n,t,e,o)=>{const r=n[t]
;return ht(r)&&!ht(e)?(r.value=e,!0):Reflect.set(n,t,e,o)}};function _t(n){return lt(n)?n:new Proxy(n,kt)}class zt{
constructor(n,t,e,o){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new mn(n,(()=>{
this._dirty||(this._dirty=!0,ut(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!o,
this.__v_isReadonly=e}get value(){
// the computed ref may get wrapped by other proxies e.g. readonly() #3376
const n=ct(this);return bt(n),!n._dirty&&n._cacheable||(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){
this._setter(n)}}function St(n,t,e,o){let r;try{r=o?n(...o):n()}catch(n){jt(n,t,e)}return r}function Ct(n,t,e,o){
if(C(n)){const r=St(n,t,e,o);return r&&A(r)&&r.catch((n=>{jt(n,t,e)})),r}const r=[]
;for(let a=0;a<n.length;a++)r.push(Ct(n[a],t,e,o));return r}function jt(n,t,e,o=!0){t&&t.vnode;if(t){let o=t.parent;
// the exposed instance is the render proxy to keep it consistent with 2.x
const r=t.proxy,a=e;
// in production the hook receives only the error code
for(;o;){const t=o.ec;if(t)for(let e=0;e<t.length;e++)if(!1===t[e](n,r,a))return;o=o.parent}
// app-level handling
const i=t.appContext.config.errorHandler;if(i)return void St(i,null,10/* APP_ERROR_HANDLER */,[n,r,a])}!function(n){
// recover in prod to reduce the impact on end-user
console.error(n)}(n,0,0,o)}let Ot=!1,Et=!1;const At=[];let Nt=0;const Lt=[];let Tt=null,Mt=0;const Ut=[]
;let Pt=null,It=0;const Rt=Promise.resolve();let Ft=null,Bt=null;function Vt(n){const t=Ft||Rt
;return n?t.then(this?n.bind(this):n):t}
// #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.
function $t(n){
// the dedupe search uses the startIndex argument of Array.includes()
// by default the search index includes the current job that is being run
// so it cannot recursively trigger itself again.
// if the job is a watch() callback, the search will start with a +1 index to
// allow it recursively trigger itself - it is the user's responsibility to
// ensure it doesn't end up in an infinite loop.
At.length&&At.includes(n,Ot&&n.allowRecurse?Nt+1:Nt)||n===Bt||(null==n.id?At.push(n):At.splice(function(n){
// the start index should be `flushIndex + 1`
let t=Nt+1,e=At.length;for(;t<e;){const o=t+e>>>1;Gt(At[o])<n?t=o+1:e=o}return t}(n.id),0,n),Dt())}function Dt(){
Ot||Et||(Et=!0,Ft=Rt.then(Xt))}function Ht(n,t,e,o){_(n)?
// if cb is an array, it is a component lifecycle hook which can only be
// triggered by a job, which is already deduped in the main queue, so
// we can skip duplicate check here to improve perf
e.push(...n):t&&t.includes(n,n.allowRecurse?o+1:o)||e.push(n),Dt()}function Wt(n){Ht(n,Pt,Ut,It)}function qt(n,t=null){
if(Lt.length){for(Bt=t,Tt=[...new Set(Lt)],Lt.length=0,Mt=0;Mt<Tt.length;Mt++)Tt[Mt]();Tt=null,Mt=0,Bt=null,
// recursively flush until it drains
qt(n,t)}}function Kt(n){if(
// flush any pre cbs queued during the flush (e.g. pre watchers)
qt(),Ut.length){const n=[...new Set(Ut)];
// #1947 already has active queue, nested flushPostFlushCbs call
if(Ut.length=0,Pt)return void Pt.push(...n);for(Pt=n,Pt.sort(((n,t)=>Gt(n)-Gt(t))),It=0;It<Pt.length;It++)Pt[It]()
;Pt=null,It=0}}const Gt=n=>null==n.id?1/0:n.id;function Xt(n){Et=!1,Ot=!0,qt(n),
// Sort queue before flush.
// This ensures that:
// 1. Components are updated from parent to child. (because parent is always
//    created before the child so its render effect will have smaller
//    priority number)
// 2. If a component is unmounted during a parent component's update,
//    its update can be skipped.
At.sort(((n,t)=>Gt(n)-Gt(t)));try{for(Nt=0;Nt<At.length;Nt++){const n=At[Nt];n&&!1!==n.active&&
// console.log(`running:`, job.id)
St(n,null,14/* SCHEDULER */)}}finally{Nt=0,At.length=0,Kt(),Ot=!1,Ft=null,
// some postFlushCb queued jobs!
// keep flushing until it drains.
(At.length||Lt.length||Ut.length)&&Xt(n)}}new Set;
// Expose the HMR runtime on the global object
// This makes it entirely tree-shakable without polluting the exports and makes
// it easier to be used in toolings like vue-loader
// Note: for a component to be eligible for HMR it also needs the __hmrId option
// to be set so that its instances can be registered / removed.
new Map;let Jt,Qt=[],Yt=!1;function Zt(n,...t){Jt?Jt.emit(n,...t):Yt||Qt.push({event:n,args:t})}function ne(n,t){var e,o
;if(Jt=n,Jt)Jt.enabled=!0,Qt.forEach((({event:n,args:t})=>Jt.emit(n,...t))),Qt=[];else if(
// handle late devtools injection - only do this if we are in an actual
// browser environment to avoid the timer handle stalling test runner exit
// (#4815)
"undefined"!=typeof window&&
// some envs mock window but not fully
window.HTMLElement&&
// also exclude jsdom
!(null===(o=null===(e=window.navigator)||void 0===e?void 0:e.userAgent)||void 0===o?void 0:o.includes("jsdom"))){
(t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push((n=>{ne(n,t)})),
// clear buffer after 3s - the user probably doesn't have devtools installed
// at all, and keeping the buffer will cause memory leaks (#4738)
setTimeout((()=>{Jt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Yt=!0,Qt=[])}),3e3)}else
// non-browser env, assume not installed
Yt=!0,Qt=[]}const te=re("component:added"/* COMPONENT_ADDED */),ee=
re("component:updated"/* COMPONENT_UPDATED */),oe=
re("component:removed"/* COMPONENT_REMOVED */);function re(n){return t=>{
Zt(n,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}function ae(n,t,...e){if(n.isUnmounted)return
;const o=n.vnode.props||p;let r=e;const a=t.startsWith("update:"),i=a&&t.slice(7);
// for v-model update:xxx events, apply modifiers on args
if(i&&i in o){const n=`${"modelValue"===i?"model":i}Modifiers`,{number:t,trim:a}=o[n]||p;a&&(r=e.map((n=>n.trim()))),
t&&(r=e.map(K))}let l;__VUE_PROD_DEVTOOLS__&&function(n,t,e){
Zt("component:emit"/* COMPONENT_EMIT */,n.appContext.app,n,t,e)}(n,t,r);let s=o[l=D(t)]||
// also try camelCase event handler (#2249)
o[l=D(F(t))];
// for v-model update:xxx events, also trigger kebab-case equivalent
// for props passed via kebab-case
!s&&a&&(s=o[l=D(V(t))]),s&&Ct(s,n,6/* COMPONENT_EVENT_HANDLER */,r);const d=o[l+"Once"];if(d){if(n.emitted){
if(n.emitted[l])return}else n.emitted={};n.emitted[l]=!0,Ct(d,n,6/* COMPONENT_EVENT_HANDLER */,r)}}
function ie(n,t,e=!1){const o=t.emitsCache,r=o.get(n);if(void 0!==r)return r;const a=n.emits;let i={},l=!1;
// apply mixin/extends props
if(__VUE_OPTIONS_API__&&!C(n)){const o=n=>{const e=ie(n,t,!0);e&&(l=!0,v(i,e))}
;!e&&t.mixins.length&&t.mixins.forEach(o),n.extends&&o(n.extends),n.mixins&&n.mixins.forEach(o)}
return a||l?(_(a)?a.forEach((n=>i[n]=null)):v(i,a),o.set(n,i),i):(o.set(n,null),null)}
// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function le(n,t){
return!(!n||!h(t))&&(t=t.slice(2).replace(/Once$/,""),k(n,t[0].toLowerCase()+t.slice(1))||k(n,V(t))||k(n,t))}
/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */let se=null,de=null;
/**
 * Note: rendering calls maybe nested. The function returns the parent rendering
 * instance if present, which should be restored after the render is done:
 *
 * ```js
 * const prev = setCurrentRenderingInstance(i)
 * // ...render
 * setCurrentRenderingInstance(prev)
 * ```
 */
function me(n){const t=se;return se=n,de=n&&n.type.__scopeId||null,t}
/**
 * Set scope id when creating hoisted vnodes.
 * @private compiler helper
 */
/**
 * Wrap a slot function to memoize current rendering instance
 * @private compiler helper
 */
function ce(n,t=se,e){if(!t)return n;
// already normalized
if(n._n)return n;const o=(...e)=>{
// If a user calls a compiled slot inside a template expression (#1745), it
// can mess up block tracking, so by default we disable block tracking and
// force bail out when invoking a compiled slot (indicated by the ._d flag).
// This isn't necessary if rendering a compiled `<slot>`, so we flip the
// ._d flag off when invoking the wrapped fn inside `renderSlot`.
o._d&&er(-1);const r=me(t),a=n(...e);return me(r),o._d&&er(1),__VUE_PROD_DEVTOOLS__&&ee(t),a};
// mark normalized to avoid duplicated wrapping
return o._n=!0,
// mark this as compiled by default
// this is used in vnode.ts -> normalizeChildren() to set the slot
// rendering flag.
o._c=!0,
// disable block tracking by default
o._d=!0,o}
/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */function pe(n){
const{type:t,vnode:e,proxy:o,withProxy:r,props:a,propsOptions:[i],slots:l,attrs:s,emit:d,render:m,renderCache:c,data:p,setupState:f,ctx:g,inheritAttrs:b}=n
;let u,h;const v=me(n);try{if(4/* STATEFUL_COMPONENT */&e.shapeFlag){
// withProxy is a proxy with a different `has` trap only for
// runtime-compiled render functions using `with` block.
const n=r||o;u=hr(m.call(n,n,c,a,f,p,g)),h=s}else{
// functional
const n=t;
// in dev, mark attrs accessed if optional props (attrs === props)
0,u=hr(n.length>1?n(a,{attrs:s,slots:l,emit:d}):n(a,null/* we know it doesn't need it */)),h=t.props?s:fe(s)}}catch(t){
Qo.length=0,jt(t,n,1/* RENDER_FUNCTION */),u=pr(Xo)}
// attr merging
// in dev mode, comments are preserved, and it's possible for a template
// to have comments along side the root element which makes it a fragment
let w=u;if(h&&!1!==b){const n=Object.keys(h),{shapeFlag:t}=w;n.length&&7/* COMPONENT */&t&&(i&&n.some(x)&&(
// If a v-model listener (onUpdate:xxx) has a corresponding declared
// prop, it indicates this component expects to handle v-model and
// it should not fallthrough.
// related: #1543, #1643, #1989
h=ge(h,i)),w=gr(w,h))}
// inherit directives
return e.dirs&&(
// clone before mutating since the root may be a hoisted vnode
w=gr(w),w.dirs=w.dirs?w.dirs.concat(e.dirs):e.dirs),
// inherit transition data
e.transition&&(w.transition=e.transition),u=w,me(v),u}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */const fe=n=>{let t;for(const e in n)("class"===e||"style"===e||h(e))&&((t||(t={}))[e]=n[e]);return t},ge=(n,t)=>{
const e={};for(const o in n)x(o)&&o.slice(9)in t||(e[o]=n[o]);return e};function be(n,t,e){const o=Object.keys(t)
;if(o.length!==Object.keys(n).length)return!0;for(let r=0;r<o.length;r++){const a=o[r];if(t[a]!==n[a]&&!le(e,a))return!0
}return!1}function ue({vnode:n,parent:t},e){for(;t&&t.subTree===n;)(n=t.vnode).el=e,t=t.parent}
const he=n=>n.__isSuspense
// Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.;
function xe(n,t){t&&t.pendingBranch?_(n)?t.effects.push(...n):t.effects.push(n):Wt(n)}function ve(n,t,e=!1){
// fallback to `currentRenderingInstance` so that this can be called in
// a functional component
const o=zr||se;if(o){
// #2400
// to support `app.use` plugins,
// fallback to appContext's `provides` if the instance is at root
const r=null==o.parent?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&n in r)
// TS doesn't allow symbol as index type
return r[n];if(arguments.length>1)return e&&C(t)?t.call(o.proxy):t}else 0}
// Simple effect.
// initial value for watchers to trigger on undefined initial values
const we={};
// implementation
function ye(n,t,e){return ke(n,t,e)}function ke(n,t,{immediate:e,deep:o,flush:r,onTrack:a,onTrigger:i}=p){const l=zr
;let s,d,m=!1,c=!1;if(ht(n)?(s=()=>n.value,m=dt(n)):lt(n)?(s=()=>n,o=!0):_(n)?(c=!0,m=n.some((n=>lt(n)||dt(n))),
s=()=>n.map((n=>ht(n)?n.value:lt(n)?Se(n):C(n)?St(n,l,2/* WATCH_GETTER */):void 0))):
// getter with cb
s=C(n)?t?()=>St(n,l,2/* WATCH_GETTER */):()=>{if(!l||!l.isUnmounted)return d&&d(),Ct(n,l,3/* WATCH_CALLBACK */,[f])}:g,
t&&o){const n=s;s=()=>Se(n())}let f=n=>{d=x.onStop=()=>{St(n,l,4/* WATCH_CLEANUP */)}};
// in SSR there is no need to setup an actual effect, and it should be noop
// unless it's eager
if(Nr)
// we will also not call the invalidate callback (+ runner is not set up)
return f=g,t?e&&Ct(t,l,3/* WATCH_CALLBACK */,[s(),c?[]:void 0,f]):s(),g;let b=c?[]:we;const u=()=>{if(x.active)if(t){
// watch(source, cb)
const n=x.run();(o||m||(c?n.some(((n,t)=>H(n,b[t]))):H(n,b)))&&(
// cleanup before running cb again
d&&d(),Ct(t,l,3/* WATCH_CALLBACK */,[n,
// pass undefined as the old value when it's changed for the first time
b===we?void 0:b,f]),b=n)}else
// watchEffect
x.run()};
// important: mark the job as a watcher callback so that scheduler knows
// it is allowed to self-trigger (#1727)
let h;u.allowRecurse=!!t,h="sync"===r?u:"post"===r?()=>Do(u,l&&l.suspense):()=>function(n){Ht(n,Tt,Lt,Mt)}(u)
;const x=new mn(s,h);
// initial run
return t?e?u():b=x.run():"post"===r?Do(x.run.bind(x),l&&l.suspense):x.run(),()=>{x.stop(),
l&&l.scope&&w(l.scope.effects,x)}}
// this.$watch
function _e(n,t,e){const o=this.proxy,r=j(n)?n.includes(".")?ze(o,n):()=>o[n]:n.bind(o,o);let a;C(t)?a=t:(a=t.handler,
e=t);const i=zr;Cr(this);const l=ke(r,a.bind(o),e);return i?Cr(i):jr(),l}function ze(n,t){const e=t.split(".")
;return()=>{let t=n;for(let n=0;n<e.length&&t;n++)t=t[e[n]];return t}}function Se(n,t){if(!E(n)||n.__v_skip)return n
;if((t=t||new Set).has(n))return n
;if(t.add(n),ht(n))Se(n.value,t);else if(_(n))for(let e=0;e<n.length;e++)Se(n[e],t);else if(S(n)||z(n))n.forEach((n=>{
Se(n,t)}));else if(M(n))for(const e in n)Se(n[e],t);return n}function Ce(){const n={isMounted:!1,isLeaving:!1,
isUnmounting:!1,leavingVNodes:new Map};return Ke((()=>{n.isMounted=!0})),Je((()=>{n.isUnmounting=!0})),n}
const je=[Function,Array],Oe={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,
// enter
onBeforeEnter:je,onEnter:je,onAfterEnter:je,onEnterCancelled:je,
// leave
onBeforeLeave:je,onLeave:je,onAfterLeave:je,onLeaveCancelled:je,
// appear
onBeforeAppear:je,onAppear:je,onAfterAppear:je,onAppearCancelled:je},setup(n,{slots:t}){const e=Sr(),o=Ce();let r
;return()=>{const a=t.default&&Me(t.default(),!0);if(!a||!a.length)return;let i=a[0];if(a.length>1){let n=!1;
// locate first non-comment child
for(const t of a)if(t.type!==Xo){0,i=t,n=!0;break}}
// there's no need to track reactivity for these props so use the raw
// props for a bit better perf
const l=ct(n),{mode:s}=l;if(o.isLeaving)return Ne(i);
// in the case of <transition><keep-alive/></transition>, we need to
// compare the type of the kept-alive children.
const d=Le(i);if(!d)return Ne(i);const m=Ae(d,l,o,e);Te(d,m);const c=e.subTree,p=c&&Le(c);let f=!1
;const{getTransitionKey:g}=d.type;if(g){const n=g();void 0===r?r=n:n!==r&&(r=n,f=!0)}
// handle mode
if(p&&p.type!==Xo&&(!lr(d,p)||f)){const n=Ae(p,l,o,e);
// update old tree's hooks in case of dynamic transition
// switching between different views
if(Te(p,n),"out-in"===s)return o.isLeaving=!0,
// return placeholder node and queue update when leave finishes
n.afterLeave=()=>{o.isLeaving=!1,e.update()},Ne(i);"in-out"===s&&d.type!==Xo&&(n.delayLeave=(n,t,e)=>{
Ee(o,p)[String(p.key)]=p,
// early removal callback
n._leaveCb=()=>{t(),n._leaveCb=void 0,delete m.delayedLeave},m.delayedLeave=e})}return i}}};function Ee(n,t){
const{leavingVNodes:e}=n;let o=e.get(t.type);return o||(o=Object.create(null),e.set(t.type,o)),o}
// The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.
function Ae(n,t,e,o){
const{appear:r,mode:a,persisted:i=!1,onBeforeEnter:l,onEnter:s,onAfterEnter:d,onEnterCancelled:m,onBeforeLeave:c,onLeave:p,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:b,onAppear:u,onAfterAppear:h,onAppearCancelled:x}=t,v=String(n.key),w=Ee(e,n),y=(n,t)=>{
n&&Ct(n,o,9/* TRANSITION_HOOK */,t)},k=(n,t)=>{const e=t[1];y(n,t),_(n)?n.every((n=>n.length<=1))&&e():n.length<=1&&e()
},z={mode:a,persisted:i,beforeEnter(t){let o=l;if(!e.isMounted){if(!r)return;o=b||l}
// for same element (v-show)
t._leaveCb&&t._leaveCb(!0/* cancelled */);
// for toggled element with same key (v-if)
const a=w[v];a&&lr(n,a)&&a.el._leaveCb&&
// force early removal (not cancelled)
a.el._leaveCb(),y(o,[t])},enter(n){let t=s,o=d,a=m;if(!e.isMounted){if(!r)return;t=u||s,o=h||d,a=x||m}let i=!1
;const l=n._enterCb=t=>{i||(i=!0,y(t?a:o,[n]),z.delayedLeave&&z.delayedLeave(),n._enterCb=void 0)};t?k(t,[n,l]):l()},
leave(t,o){const r=String(n.key);if(t._enterCb&&t._enterCb(!0/* cancelled */),e.isUnmounting)return o();y(c,[t])
;let a=!1;const i=t._leaveCb=e=>{a||(a=!0,o(),y(e?g:f,[t]),t._leaveCb=void 0,w[r]===n&&delete w[r])};w[r]=n,
p?k(p,[t,i]):i()},clone:n=>Ae(n,t,e,o)};return z}
// the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.
function Ne(n){if(Pe(n))return(n=gr(n)).children=null,n}function Le(n){return Pe(n)?n.children?n.children[0]:void 0:n}
function Te(n,t){
6/* COMPONENT */&n.shapeFlag&&n.component?Te(n.component.subTree,t):128/* SUSPENSE */&n.shapeFlag?(n.ssContent.transition=t.clone(n.ssContent),
n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Me(n,t=!1,e){let o=[],r=0
;for(let a=0;a<n.length;a++){let i=n[a];
// #5360 inherit parent key in case of <template v-for>
const l=null==e?i.key:String(e)+String(null!=i.key?i.key:a);
// handle fragment children case, e.g. v-for
i.type===Ko?(128/* KEYED_FRAGMENT */&i.patchFlag&&r++,o=o.concat(Me(i.children,t,l))):(t||i.type!==Xo)&&o.push(null!=l?gr(i,{
key:l}):i)}
// #1126 if a transition children list contains multiple sub fragments, these
// fragments will be merged into a flat children array. Since each v-for
// fragment may contain different static bindings inside, we need to de-op
// these children to force full diffs to ensure correct behavior.
if(r>1)for(let n=0;n<o.length;n++)o[n].patchFlag=-2/* BAIL */;return o}
// implementation, close to no-op
const Ue=n=>!!n.type.__asyncLoader;const Pe=n=>n.type.__isKeepAlive;RegExp,RegExp;function Ie(n,t){
return _(n)?n.some((n=>Ie(n,t))):j(n)?n.split(",").includes(t):!!n.test&&n.test(t)
/* istanbul ignore next */}function Re(n,t){Be(n,"a"/* ACTIVATED */,t)}function Fe(n,t){Be(n,"da"/* DEACTIVATED */,t)}
function Be(n,t,e=zr){
// cache the deactivate branch check wrapper for injected hooks so the same
// hook can be properly deduped by the scheduler. "__wdc" stands for "with
// deactivation check".
const o=n.__wdc||(n.__wdc=()=>{
// only fire the hook if the target instance is NOT in a deactivated branch.
let t=e;for(;t;){if(t.isDeactivated)return;t=t.parent}return n()});
// In addition to registering it on the target instance, we walk up the parent
// chain and register it on all ancestor instances that are keep-alive roots.
// This avoids the need to walk the entire component tree when invoking these
// hooks, and more importantly, avoids the need to track child components in
// arrays.
if(He(t,o,e),e){let n=e.parent;for(;n&&n.parent;)Pe(n.parent.vnode)&&Ve(o,t,e,n),n=n.parent}}function Ve(n,t,e,o){
// injectHook wraps the original for error handling, so make sure to remove
// the wrapped version.
const r=He(t,n,o,!0/* prepend */);Qe((()=>{w(o[t],r)}),e)}function $e(n){let t=n.shapeFlag
;256/* COMPONENT_SHOULD_KEEP_ALIVE */&t&&256/* COMPONENT_SHOULD_KEEP_ALIVE */,
512/* COMPONENT_KEPT_ALIVE */&t&&512/* COMPONENT_KEPT_ALIVE */,n.shapeFlag=t}function De(n){
return 128/* SUSPENSE */&n.shapeFlag?n.ssContent:n}function He(n,t,e=zr,o=!1){if(e){
const r=e[n]||(e[n]=[]),a=t.__weh||(t.__weh=(...o)=>{if(e.isUnmounted)return;
// disable tracking inside all lifecycle hooks
// since they can potentially be called inside effects.
gn(),
// Set currentInstance during hook invocation.
// This assumes the hook does not synchronously trigger other hooks, which
// can only be false when the user does something really funky.
Cr(e);const r=Ct(t,e,n,o);return jr(),bn(),r});
// cache the error handling wrapper for injected hooks so the same hook
// can be properly deduped by the scheduler. "__weh" stands for "with error
// handling".
return o?r.unshift(a):r.push(a),a}}const We=n=>(t,e=zr)=>
// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
(!Nr||"sp"/* SERVER_PREFETCH */===n)&&He(n,t,e),qe=We("bm"/* BEFORE_MOUNT */),Ke=We("m"/* MOUNTED */),Ge=We("bu"/* BEFORE_UPDATE */),Xe=We("u"/* UPDATED */),Je=We("bum"/* BEFORE_UNMOUNT */),Qe=We("um"/* UNMOUNTED */),Ye=We("sp"/* SERVER_PREFETCH */),Ze=We("rtg"/* RENDER_TRIGGERED */),no=We("rtc"/* RENDER_TRACKED */)
;function to(n,t=zr){He("ec"/* ERROR_CAPTURED */,n,t)}
/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/function eo(n,t,e,o){const r=n.dirs,a=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];a&&(l.oldValue=a[i].value)
;let s=l.dir[o];s&&(
// disable tracking inside all lifecycle hooks
// since they can potentially be called inside effects.
gn(),Ct(s,e,8/* DIRECTIVE_HOOK */,[n.el,l,n,t]),bn())}}const oo="components";
/**
 * @private
 */
function ro(n,t){return io(oo,n,!0,t)||n}const ao=Symbol();
/**
 * @private
 */
// implementation
function io(n,t,e=!0,o=!1){const r=se||zr;if(r){const e=r.type;
// explicit self name has highest priority
if(n===oo){const n=Ir(e);if(n&&(n===t||n===F(t)||n===$(F(t))))return e}const a=
// local registration
// check instance[type] first which is resolved for options API
lo(r[n]||e[n],t)||
// global registration
lo(r.appContext[n],t);return!a&&o?e:a}}function lo(n,t){return n&&(n[t]||n[F(t)]||n[$(F(t))])}
/**
 * Actual implementation
 */function so(n,t,e,o){let r;const a=e&&e[o];if(_(n)||j(n)){r=new Array(n.length)
;for(let e=0,o=n.length;e<o;e++)r[e]=t(n[e],e,void 0,a&&a[e])}else if("number"==typeof n){0,r=new Array(n)
;for(let e=0;e<n;e++)r[e]=t(e+1,e,void 0,a&&a[e])
}else if(E(n))if(n[Symbol.iterator])r=Array.from(n,((n,e)=>t(n,e,void 0,a&&a[e])));else{const e=Object.keys(n)
;r=new Array(e.length);for(let o=0,i=e.length;o<i;o++){const i=e[o];r[o]=t(n[i],i,o,a&&a[o])}}else r=[]
;return e&&(e[o]=r),r}
/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */
/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */
const mo=n=>n?Or(n)?Pr(n)||n.proxy:mo(n.parent):null,co=
// Move PURE marker to new line to workaround compiler discarding it
// due to type annotation
v(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,
$refs:n=>n.refs,$parent:n=>mo(n.parent),$root:n=>mo(n.root),$emit:n=>n.emit,
$options:n=>__VUE_OPTIONS_API__?ho(n):n.type,$forceUpdate:n=>n.f||(n.f=()=>$t(n.update)),
$nextTick:n=>n.n||(n.n=Vt.bind(n.proxy)),$watch:n=>__VUE_OPTIONS_API__?_e.bind(n):g}),po={get({_:n},t){
const{ctx:e,setupState:o,data:r,props:a,accessCache:i,type:l,appContext:s}=n;
// for internal formatters to know that this is a Vue instance
// data / props / ctx
// This getter gets called for every property access on the render context
// during render and is a major hotspot. The most expensive part of this
// is the multiple hasOwn() calls. It's much faster to do a simple property
// access on a plain object, so we use an accessCache object (with null
// prototype) to memoize what access type a key corresponds to.
let d;if("$"!==t[0]){const l=i[t];if(void 0!==l)switch(l){case 1/* SETUP */:return o[t];case 2/* DATA */:return r[t]
;case 4/* CONTEXT */:return e[t];case 3/* PROPS */:return a[t];
// default: just fallthrough
}else{if(o!==p&&k(o,t))return i[t]=1/* SETUP */,o[t];if(r!==p&&k(r,t))return i[t]=2/* DATA */,r[t];if(
// only cache other properties when instance has declared (thus stable)
// props
(d=n.propsOptions[0])&&k(d,t))return i[t]=3/* PROPS */,a[t];if(e!==p&&k(e,t))return i[t]=4/* CONTEXT */,e[t]
;__VUE_OPTIONS_API__&&!fo||(i[t]=0/* OTHER */)}}const m=co[t];let c,f;
// public $xxx properties
return m?("$attrs"===t&&un(n,0/* GET */,t),m(n)):
// css module (injected by vue-loader)
(c=l.__cssModules)&&(c=c[t])?c:e!==p&&k(e,t)?(
// user may set custom properties to `this` that start with `$`
i[t]=4/* CONTEXT */,e[t]):(f=s.config.globalProperties,k(f,t)?f[t]:void 0)},set({_:n},t,e){
const{data:o,setupState:r,ctx:a}=n;return r!==p&&k(r,t)?(r[t]=e,!0):o!==p&&k(o,t)?(o[t]=e,
!0):!k(n.props,t)&&(("$"!==t[0]||!(t.slice(1)in n))&&(a[t]=e,!0))},
has({_:{data:n,setupState:t,accessCache:e,ctx:o,appContext:r,propsOptions:a}},i){let l
;return!!e[i]||n!==p&&k(n,i)||t!==p&&k(t,i)||(l=a[0])&&k(l,i)||k(o,i)||k(co,i)||k(r.config.globalProperties,i)},
defineProperty(n,t,e){return null!=e.get?
// invalidate key cache of a getter based property #5417
n._.accessCache[t]=0:k(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};let fo=!0;function go(n){
const t=ho(n),e=n.proxy,o=n.ctx;
// do not cache property access on public proxy during state initialization
fo=!1,
// call beforeCreate first before accessing other options since
// the hook may mutate resolved options (#2791)
t.beforeCreate&&bo(t.beforeCreate,n,"bc"/* BEFORE_CREATE */);const{
// state
data:r,computed:a,methods:i,watch:l,provide:s,inject:d,created:
// lifecycle
m,beforeMount:c,mounted:p,beforeUpdate:f,updated:b,activated:u,deactivated:h,beforeDestroy:x,beforeUnmount:v,destroyed:w,unmounted:y,render:k,renderTracked:z,renderTriggered:S,errorCaptured:j,serverPrefetch:O,expose:
// public API
A,inheritAttrs:N,components:
// assets
L,directives:T,filters:M}=t;if(
// options initialization order (to be consistent with Vue 2):
// - props (already done outside of this function)
// - inject
// - methods
// - data (deferred since it relies on `this` access)
// - computed
// - watch (deferred since it relies on `this` access)
d&&function(n,t,e=g,o=!1){_(n)&&(n=yo(n));for(const e in n){const r=n[e];let a
;a=E(r)?"default"in r?ve(r.from||e,r.default,!0/* treat default function as factory */):ve(r.from||e):ve(r),
ht(a)&&o?Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:n=>a.value=n}):t[e]=a}
}(d,o,null,n.appContext.config.unwrapInjectedRef),i)for(const n in i){const t=i[n];C(t)&&(o[n]=t.bind(e))}if(r){0
;const t=r.call(e,e);0,E(t)&&(n.data=rt(t))}
// state initialization complete at this point - start caching access
if(fo=!0,a)for(const n in a){const t=a[n],r=C(t)?t.bind(e,e):C(t.get)?t.get.bind(e,e):g;0
;const i=!C(t)&&C(t.set)?t.set.bind(e):g,l=Fr({get:r,set:i});Object.defineProperty(o,n,{enumerable:!0,configurable:!0,
get:()=>l.value,set:n=>l.value=n})}if(l)for(const n in l)uo(l[n],o,e,n);if(s){const n=C(s)?s.call(e):s
;Reflect.ownKeys(n).forEach((t=>{!function(n,t){if(zr){let e=zr.provides;
// by default an instance inherits its parent's provides object
// but when it needs to provide values of its own, it creates its
// own provides object using parent provides object as prototype.
// this way in `inject` we can simply look up injections from direct
// parent and let the prototype chain do the work.
const o=zr.parent&&zr.parent.provides;o===e&&(e=zr.provides=Object.create(o)),
// TS doesn't allow symbol as index type
e[n]=t}}(t,n[t])}))}function U(n,t){_(t)?t.forEach((t=>n(t.bind(e)))):t&&n(t.bind(e))}if(m&&bo(m,n,"c"/* CREATED */),
U(qe,c),U(Ke,p),U(Ge,f),U(Xe,b),U(Re,u),U(Fe,h),U(to,j),U(no,z),U(Ze,S),U(Je,v),U(Qe,y),U(Ye,O),_(A))if(A.length){
const t=n.exposed||(n.exposed={});A.forEach((n=>{Object.defineProperty(t,n,{get:()=>e[n],set:t=>e[n]=t})}))
}else n.exposed||(n.exposed={});
// options that are handled when creating the instance but also need to be
// applied from mixins
k&&n.render===g&&(n.render=k),null!=N&&(n.inheritAttrs=N),
// asset options.
L&&(n.components=L),T&&(n.directives=T)}function bo(n,t,e){Ct(_(n)?n.map((n=>n.bind(t.proxy))):n.bind(t.proxy),t,e)}
function uo(n,t,e,o){const r=o.includes(".")?ze(e,o):()=>e[o];if(j(n)){const e=t[n];C(e)&&ye(r,e)
}else if(C(n))ye(r,n.bind(e));else if(E(n))if(_(n))n.forEach((n=>uo(n,t,e,o)));else{
const o=C(n.handler)?n.handler.bind(e):t[n.handler];C(o)&&ye(r,o,n)}else 0}
/**
 * Resolve merged options and cache it on the component.
 * This is done only once per-component since the merging does not involve
 * instances.
 */function ho(n){
const t=n.type,{mixins:e,extends:o}=t,{mixins:r,optionsCache:a,config:{optionMergeStrategies:i}}=n.appContext,l=a.get(t)
;let s;return l?s=l:r.length||e||o?(s={},r.length&&r.forEach((n=>xo(s,n,i,!0))),xo(s,t,i)):s=t,a.set(t,s),s}
function xo(n,t,e,o=!1){const{mixins:r,extends:a}=t;a&&xo(n,a,e,!0),r&&r.forEach((t=>xo(n,t,e,!0)))
;for(const r in t)if(o&&"expose"===r);else{const o=vo[r]||e&&e[r];n[r]=o?o(n[r],t[r]):t[r]}return n}const vo={data:wo,
props:_o,emits:_o,
// objects
methods:_o,computed:_o,
// lifecycle
beforeCreate:ko,created:ko,beforeMount:ko,mounted:ko,beforeUpdate:ko,updated:ko,beforeDestroy:ko,beforeUnmount:ko,
destroyed:ko,unmounted:ko,activated:ko,deactivated:ko,errorCaptured:ko,serverPrefetch:ko,
// assets
components:_o,directives:_o,
// watch
watch:function(n,t){if(!n)return t;if(!t)return n;const e=v(Object.create(null),n);for(const o in t)e[o]=ko(n[o],t[o])
;return e},
// provide / inject
provide:wo,inject:function(n,t){return _o(yo(n),yo(t))}};function wo(n,t){return t?n?function(){
return v(C(n)?n.call(this,this):n,C(t)?t.call(this,this):t)}:t:n}function yo(n){if(_(n)){const t={}
;for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function ko(n,t){return n?[...new Set([].concat(n,t))]:t}
function _o(n,t){return n?v(v(Object.create(null),n),t):t}function zo(n,t,e,// result of bitwise flag comparison
o=!1){const r={},a={};q(a,sr,1),n.propsDefaults=Object.create(null),So(n,t,r,a);
// ensure all declared prop keys are present
for(const t in n.propsOptions[0])t in r||(r[t]=void 0);
// validation
e?
// stateful
n.props=o?r:it(r,!1,Ln,Yn,tt):n.type.props?
// functional w/ declared props
n.props=r:
// functional w/ optional props, props === attrs
n.props=a,n.attrs=a}function So(n,t,e,o){const[r,a]=n.propsOptions;let i,l=!1;if(t)for(let s in t){
// key, ref are reserved and never passed down
if(P(s))continue;const d=t[s];
// prop option names are camelized during normalization, so to support
// kebab -> camel conversion here we need to camelize the key.
let m;r&&k(r,m=F(s))?a&&a.includes(m)?(i||(i={}))[m]=d:e[m]=d:le(n.emitsOptions,s)||s in o&&d===o[s]||(o[s]=d,l=!0)}
if(a){const t=ct(e),o=i||p;for(let i=0;i<a.length;i++){const l=a[i];e[l]=Co(r,t,l,o[l],n,!k(o,l))}}return l}
function Co(n,t,e,o,r,a){const i=n[e];if(null!=i){const n=k(i,"default");
// default values
if(n&&void 0===o){const n=i.default;if(i.type!==Function&&C(n)){const{propsDefaults:a}=r;e in a?o=a[e]:(Cr(r),
o=a[e]=n.call(null,t),jr())}else o=n}
// boolean casting
i[0/* shouldCast */]&&(a&&!n?o=!1:!i[1/* shouldCastTrue */]||""!==o&&o!==V(e)||(o=!0))}return o}function jo(n,t,e=!1){
const o=t.propsCache,r=o.get(n);if(r)return r;const a=n.props,i={},l=[];
// apply mixin/extends props
let s=!1;if(__VUE_OPTIONS_API__&&!C(n)){const o=n=>{s=!0;const[e,o]=jo(n,t,!0);v(i,e),o&&l.push(...o)}
;!e&&t.mixins.length&&t.mixins.forEach(o),n.extends&&o(n.extends),n.mixins&&n.mixins.forEach(o)}
if(!a&&!s)return o.set(n,f),f;if(_(a))for(let n=0;n<a.length;n++){0;const t=F(a[n]);Oo(t)&&(i[t]=p)}else if(a){0
;for(const n in a){const t=F(n);if(Oo(t)){const e=a[n],o=i[t]=_(e)||C(e)?{type:e}:e;if(o){
const n=No(Boolean,o.type),e=No(String,o.type);o[0/* shouldCast */]=n>-1,o[1/* shouldCastTrue */]=e<0||n<e,
// if the prop needs boolean casting or default value
(n>-1||k(o,"default"))&&l.push(t)}}}}const d=[i,l];return o.set(n,d),d}function Oo(n){return"$"!==n[0]}
// use function string name to check type constructors
// so that it works across vms / iframes.
function Eo(n){const t=n&&n.toString().match(/^\s*function (\w+)/);return t?t[1]:null===n?"null":""}function Ao(n,t){
return Eo(n)===Eo(t)}function No(n,t){return _(t)?t.findIndex((t=>Ao(t,n))):C(t)&&Ao(t,n)?0:-1}
/**
 * dev only
 */const Lo=n=>"_"===n[0]||"$stable"===n,To=n=>_(n)?n.map(hr):[hr(n)],Mo=(n,t,e)=>{if(t._n)
// already normalized - #5353
return t;const o=ce(((...n)=>To(t(...n))),e);return o._c=!1,o},Uo=(n,t,e)=>{const o=n._ctx;for(const e in n){
if(Lo(e))continue;const r=n[e];if(C(r))t[e]=Mo(0,r,o);else if(null!=r){0;const n=To(r);t[e]=()=>n}}},Po=(n,t)=>{
const e=To(t);n.slots.default=()=>e},Io=(n,t)=>{if(32/* SLOTS_CHILDREN */&n.vnode.shapeFlag){const e=t._;e?(
// users can get the shallow readonly version of the slots object through `this.$slots`,
// we should avoid the proxy object polluting the slots of the internal instance
n.slots=ct(t),
// make compiler marker non-enumerable
q(t,"_",e)):Uo(t,n.slots={})}else n.slots={},t&&Po(n,t);q(n.slots,sr,1)},Ro=(n,t,e)=>{const{vnode:o,slots:r}=n
;let a=!0,i=p;if(32/* SLOTS_CHILDREN */&o.shapeFlag){const n=t._;n?e&&1/* STABLE */===n?
// compiled AND stable.
// no need to update, and skip stale slots removal.
a=!1:(
// compiled but dynamic (v-if/v-for on slots) - update slots, but skip
// normalization.
v(r,t),
// #2893
// when rendering the optimized slots by manually written render function,
// we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
// i.e. let the `renderSlot` create the bailed Fragment
e||1/* STABLE */!==n||delete r._):(a=!t.$stable,Uo(t,r)),i=t}else t&&(
// non slot object children (direct value) passed to a component
Po(n,t),i={default:1});
// delete stale slots
if(a)for(const n in r)Lo(n)||n in i||delete r[n]};function Fo(){return{app:null,config:{isNativeTag:b,performance:!1,
globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],
components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,
emitsCache:new WeakMap}}let Bo=0;function Vo(n,t){return function(e,o=null){C(e)||(e=Object.assign({},e)),
null==o||E(o)||(o=null);const r=Fo(),a=new Set;let i=!1;const l=r.app={_uid:Bo++,_component:e,_props:o,_container:null,
_context:r,_instance:null,version:Br,get config(){return r.config},set config(n){0},
use:(n,...t)=>(a.has(n)||(n&&C(n.install)?(a.add(n),n.install(l,...t)):C(n)&&(a.add(n),n(l,...t))),l),
mixin:n=>(__VUE_OPTIONS_API__&&(r.mixins.includes(n)||r.mixins.push(n)),l),component:(n,t)=>t?(r.components[n]=t,
l):r.components[n],directive:(n,t)=>t?(r.directives[n]=t,l):r.directives[n],mount(a,s,d){if(!i){0;const m=pr(e,o);
// store app context on the root VNode.
// this will be set on the root instance on initial mount.
return m.appContext=r,s&&t?t(m,a):n(m,a,d),i=!0,l._container=a,a.__vue_app__=l,__VUE_PROD_DEVTOOLS__&&(l._instance=m.component,
function(n,t){Zt("app:init"/* APP_INIT */,n,t,{Fragment:Ko,Text:Go,Comment:Xo,Static:Jo})}(l,Br)),
Pr(m.component)||m.component.proxy}},unmount(){i&&(n(null,l._container),__VUE_PROD_DEVTOOLS__&&(l._instance=null,
function(n){Zt("app:unmount"/* APP_UNMOUNT */,n)}(l)),delete l._container.__vue_app__)},provide:(n,t)=>(r.provides[n]=t,
l)};return l}}
/**
 * Function for handling a template ref
 */function $o(n,t,e,o,r=!1){if(_(n))return void n.forEach(((n,a)=>$o(n,t&&(_(t)?t[a]:t),e,o,r)));if(Ue(o)&&!r)
// when mounting async components, nothing needs to be done,
// because the template ref is forwarded to inner component
return;const a=4/* STATEFUL_COMPONENT */&o.shapeFlag?Pr(o.component)||o.component.proxy:o.el,i=r?null:a,{i:l,r:s}=n
;const d=t&&t.r,m=l.refs===p?l.refs={}:l.refs,c=l.setupState;if(
// dynamic ref changed. unset old ref
null!=d&&d!==s&&(j(d)?(m[d]=null,k(c,d)&&(c[d]=null)):ht(d)&&(d.value=null)),C(s))St(s,l,12/* FUNCTION_REF */,[i,m]);else{
const t=j(s),o=ht(s);if(t||o){const o=()=>{if(n.f){const e=t?m[s]:s.value
;r?_(e)&&w(e,a):_(e)?e.includes(a)||e.push(a):t?(m[s]=[a],k(c,s)&&(c[s]=m[s])):(s.value=[a],n.k&&(m[n.k]=s.value))
}else t?(m[s]=i,k(c,s)&&(c[s]=i)):ht(s)&&(s.value=i,n.k&&(m[n.k]=i))};i?(o.id=-1,Do(o,e)):o()}else 0}}const Do=xe;
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */
// implementation
function Ho(n,t){"boolean"!=typeof __VUE_OPTIONS_API__&&(X().__VUE_OPTIONS_API__=!0),
"boolean"!=typeof __VUE_PROD_DEVTOOLS__&&(X().__VUE_PROD_DEVTOOLS__=!1);const e=X();e.__VUE__=!0,
__VUE_PROD_DEVTOOLS__&&ne(e.__VUE_DEVTOOLS_GLOBAL_HOOK__,e)
;const{insert:o,remove:r,patchProp:a,createElement:i,createText:l,createComment:s,setText:d,setElementText:m,parentNode:c,nextSibling:b,setScopeId:u=g,cloneNode:h,insertStaticContent:x}=n,v=(n,t,e,o=null,r=null,a=null,i=!1,l=null,s=!!t.dynamicChildren)=>{
if(n===t)return;
// patching & not same type, unmount old tree
n&&!lr(n,t)&&(o=Y(n),q(n,r,a,!0),n=null),-2/* BAIL */===t.patchFlag&&(s=!1,t.dynamicChildren=null)
;const{type:d,ref:m,shapeFlag:c}=t;switch(d){case Go:w(n,t,e,o);break;case Xo:y(n,t,e,o);break;case Jo:
null==n&&_(t,e,o,i);break;case Ko:L(n,t,e,o,r,a,i,l,s);break;default:
1/* ELEMENT */&c?S(n,t,e,o,r,a,i,l,s):6/* COMPONENT */&c?T(n,t,e,o,r,a,i,l,s):(64/* TELEPORT */&c||128/* SUSPENSE */&c)&&d.process(n,t,e,o,r,a,i,l,s,nn)
}
// set ref
null!=m&&r&&$o(m,n&&n.ref,a,t||n,!t)},w=(n,t,e,r)=>{if(null==n)o(t.el=l(t.children),e,r);else{const e=t.el=n.el
;t.children!==n.children&&d(e,t.children)}},y=(n,t,e,r)=>{null==n?o(t.el=s(t.children||""),e,r):
// there's no support for dynamic comments
t.el=n.el},_=(n,t,e,o)=>{[n.el,n.anchor]=x(n.children,t,e,o,n.el,n.anchor)},z=({el:n,anchor:t})=>{let e
;for(;n&&n!==t;)e=b(n),r(n),n=e;r(t)},S=(n,t,e,o,r,a,i,l,s)=>{i=i||"svg"===t.type,
null==n?C(t,e,o,r,a,i,l,s):E(n,t,r,a,i,l,s)},C=(n,t,e,r,l,s,d,c)=>{let p,f
;const{type:g,props:b,shapeFlag:u,transition:x,patchFlag:v,dirs:w}=n;if(n.el&&void 0!==h&&-1/* HOISTED */===v)
// If a vnode has non-null el, it means it's being reused.
// Only static vnodes can be reused, so its mounted DOM nodes should be
// exactly the same, and we can simply do a clone here.
// only do this in production since cloned trees cannot be HMR updated.
p=n.el=h(n.el);else{
// props
if(p=n.el=i(n.type,s,b&&b.is,b),
// mount children first, since some props may rely on child content
// being already rendered, e.g. `<select value>`
8/* TEXT_CHILDREN */&u?m(p,n.children):16/* ARRAY_CHILDREN */&u&&O(n.children,p,null,r,l,s&&"foreignObject"!==g,d,c),
w&&eo(n,null,r,"created"),b){for(const t in b)"value"===t||P(t)||a(p,t,null,b[t],s,n.children,r,l,Q);
/**
                 * Special case for setting value on DOM elements:
                 * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
                 * - it needs to be forced (#1471)
                 * #2353 proposes adding another renderer option to configure this, but
                 * the properties affects are so finite it is worth special casing it
                 * here to reduce the complexity. (Special casing it also should not
                 * affect non-DOM renderers)
                 */"value"in b&&a(p,"value",null,b.value),(f=b.onVnodeBeforeMount)&&wr(f,r,n)}
// scopeId
j(p,n,n.scopeId,d,r)}__VUE_PROD_DEVTOOLS__&&(Object.defineProperty(p,"__vnode",{value:n,enumerable:!1}),
Object.defineProperty(p,"__vueParentComponent",{value:r,enumerable:!1})),w&&eo(n,null,r,"beforeMount");
// #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
// #1689 For inside suspense + suspense resolved case, just call it
const y=(!l||l&&!l.pendingBranch)&&x&&!x.persisted;y&&x.beforeEnter(p),o(p,t,e),
((f=b&&b.onVnodeMounted)||y||w)&&Do((()=>{f&&wr(f,r,n),y&&x.enter(p),w&&eo(n,null,r,"mounted")}),l)},j=(n,t,e,o,r)=>{
if(e&&u(n,e),o)for(let t=0;t<o.length;t++)u(n,o[t]);if(r){if(t===r.subTree){const t=r.vnode
;j(n,t,t.scopeId,t.slotScopeIds,r.parent)}}},O=(n,t,e,o,r,a,i,l,s=0)=>{for(let d=s;d<n.length;d++){
const s=n[d]=l?xr(n[d]):hr(n[d]);v(null,s,t,e,o,r,a,i,l)}},E=(n,t,e,o,r,i,l)=>{const s=t.el=n.el
;let{patchFlag:d,dynamicChildren:c,dirs:f}=t;
// #1426 take the old vnode's patch flag into account since user may clone a
// compiler-generated vnode, which de-opts to FULL_PROPS
d|=16/* FULL_PROPS */&n.patchFlag;const g=n.props||p,b=t.props||p;let u;
// disable recurse in beforeUpdate hooks
e&&Wo(e,!1),(u=b.onVnodeBeforeUpdate)&&wr(u,e,t,n),f&&eo(t,n,e,"beforeUpdate"),e&&Wo(e,!0)
;const h=r&&"foreignObject"!==t.type;if(c?A(n.dynamicChildren,c,s,e,o,h,i):l||
// full diff
B(n,t,s,null,e,o,h,i,!1),d>0){
// the presence of a patchFlag means this element's render code was
// generated by the compiler and can take the fast path.
// in this path old node and new node are guaranteed to have the same shape
// (i.e. at the exact same position in the source template)
if(16/* FULL_PROPS */&d)
// element props contain dynamic keys, full diff needed
N(s,t,g,b,e,o,r);else
// props
// This flag is matched when the element has dynamic prop/attr bindings
// other than class and style. The keys of dynamic prop/attrs are saved for
// faster iteration.
// Note dynamic keys like :[foo]="bar" will cause this optimization to
// bail out and go through a full diff because we need to unset the old key
if(
// class
// this flag is matched when the element has dynamic class bindings.
2/* CLASS */&d&&g.class!==b.class&&a(s,"class",null,b.class,r),
// style
// this flag is matched when the element has dynamic style bindings
4/* STYLE */&d&&a(s,"style",g.style,b.style,r),8/* PROPS */&d){
// if the flag is present then dynamicProps must be non-null
const i=t.dynamicProps;for(let t=0;t<i.length;t++){const l=i[t],d=g[l],m=b[l];
// #1471 force patch value
m===d&&"value"!==l||a(s,l,d,m,r,n.children,e,o,Q)}}
// text
// This flag is matched when the element has only dynamic text children.
1/* TEXT */&d&&n.children!==t.children&&m(s,t.children)}else l||null!=c||
// unoptimized, full diff
N(s,t,g,b,e,o,r);((u=b.onVnodeUpdated)||f)&&Do((()=>{u&&wr(u,e,t,n),f&&eo(t,n,e,"updated")}),o)},A=(n,t,e,o,r,a,i)=>{
for(let l=0;l<t.length;l++){const s=n[l],d=t[l],m=
// oldVNode may be an errored async setup() component inside Suspense
// which will not have a mounted element
s.el&&(
// - In the case of a Fragment, we need to provide the actual parent
// of the Fragment itself so it can move its children.
s.type===Ko||
// - In the case of different nodes, there is going to be a replacement
// which also requires the correct parent container
!lr(s,d)||
// - In the case of a component, it could contain anything.
70/* TELEPORT */&s.shapeFlag)?c(s.el):// In other cases, the parent container is not actually used so we
// just pass the block element here to avoid a DOM parentNode call.
e;v(s,d,m,null,o,r,a,i,!0)}},N=(n,t,e,o,r,i,l)=>{if(e!==o){for(const s in o){
// empty string is not valid prop
if(P(s))continue;const d=o[s],m=e[s];
// defer patching value
d!==m&&"value"!==s&&a(n,s,m,d,l,t.children,r,i,Q)}
if(e!==p)for(const s in e)P(s)||s in o||a(n,s,e[s],null,l,t.children,r,i,Q);"value"in o&&a(n,"value",e.value,o.value)}
},L=(n,t,e,r,a,i,s,d,m)=>{const c=t.el=n?n.el:l(""),p=t.anchor=n?n.anchor:l("")
;let{patchFlag:f,dynamicChildren:g,slotScopeIds:b}=t;
// check if this is a slot fragment with :slotted scope ids
b&&(d=d?d.concat(b):b),null==n?(o(c,e,r),o(p,e,r),
// a fragment can only have array children
// since they are either generated by the compiler, or implicitly created
// from arrays.
O(t.children,e,p,a,i,s,d,m)):f>0&&64/* STABLE_FRAGMENT */&f&&g&&
// #2715 the previous fragment could've been a BAILed one as a result
// of renderSlot() with no valid children
n.dynamicChildren?(
// a stable fragment (template root or <template v-for>) doesn't need to
// patch children order, but it may contain dynamicChildren.
A(n.dynamicChildren,g,e,a,i,s,d),(
// #2080 if the stable fragment has a key, it's a <template v-for> that may
//  get moved around. Make sure all root level vnodes inherit el.
// #2134 or if it's a component root, it may also get moved around
// as the component is being moved.
null!=t.key||a&&t===a.subTree)&&qo(n,t,!0/* shallow */)):
// keyed / unkeyed, or manual fragments.
// for keyed & unkeyed, since they are compiler generated from v-for,
// each child is guaranteed to be a block so the fragment will never
// have dynamicChildren.
B(n,t,e,p,a,i,s,d,m)},T=(n,t,e,o,r,a,i,l,s)=>{
t.slotScopeIds=l,null==n?512/* COMPONENT_KEPT_ALIVE */&t.shapeFlag?r.ctx.activate(t,e,o,i,s):M(t,e,o,r,a,i,s):U(n,t,s)
},M=(n,t,e,o,r,a,i)=>{const l=n.component=_r(n,o,r);
// setup() is async. This component relies on async logic to be resolved
// before proceeding
if(
// inject renderer internals for keepAlive
Pe(n)&&(l.ctx.renderer=nn),Lr(l),l.asyncDep){
// Give it a placeholder if this is not hydration
// TODO handle self-defined fallback
if(r&&r.registerDep(l,I),!n.el){const n=l.subTree=pr(Xo);y(null,n,t,e)}}else I(l,n,t,e,r,a,i)},U=(n,t,e)=>{
const o=t.component=n.component;if(function(n,t,e){
const{props:o,children:r,component:a}=n,{props:i,children:l,patchFlag:s}=t,d=a.emitsOptions;
// force child update for runtime directive or transition on component vnode.
if(t.dirs||t.transition)return!0;if(!(e&&s>=0))
// this path is only taken by manually written render functions
// so presence of any children leads to a forced update
return!(!r&&!l||l&&l.$stable)||o!==i&&(o?!i||be(o,i,d):!!i);if(1024/* DYNAMIC_SLOTS */&s)
// slot content that references values that might have changed,
// e.g. in a v-for
return!0;if(16/* FULL_PROPS */&s)return o?be(o,i,d):!!i;
// presence of this flag indicates props are always non-null
if(8/* PROPS */&s){const n=t.dynamicProps;for(let t=0;t<n.length;t++){const e=n[t];if(i[e]!==o[e]&&!le(d,e))return!0}}
return!1}(n,t,e)){if(o.asyncDep&&!o.asyncResolved)return void R(o,t,e);
// normal update
o.next=t,
// in case the child component is also queued, remove it to avoid
// double updating the same child component in the same flush.
function(n){const t=At.indexOf(n);t>Nt&&At.splice(t,1)}(o.update),
// instance.update is the reactive effect.
o.update()}else
// no update needed. just copy over properties
t.el=n.el,o.vnode=t},I=(n,t,e,o,r,a,i)=>{const l=n.effect=new mn((()=>{if(n.isMounted){
// updateComponent
// This is triggered by mutation of component's own state (next: null)
// OR parent calling processComponent (next: VNode)
let t,{next:e,bu:o,u:l,parent:s,vnode:d}=n,m=e;0,
// Disallow component effect recursion during pre-lifecycle hooks.
Wo(n,!1),e?(e.el=d.el,R(n,e,i)):e=d,
// beforeUpdate hook
o&&W(o),
// onVnodeBeforeUpdate
(t=e.props&&e.props.onVnodeBeforeUpdate)&&wr(t,s,e,d),Wo(n,!0);const p=pe(n);0;const f=n.subTree;n.subTree=p,v(f,p,
// parent may have changed if it's in a teleport
c(f.el),
// anchor may have changed if it's in a fragment
Y(f),n,r,a),e.el=p.el,null===m&&
// self-triggered update. In case of HOC, update parent component
// vnode el. HOC is indicated by parent instance's subTree pointing
// to child component's vnode
ue(n,p.el),
// updated hook
l&&Do(l,r),
// onVnodeUpdated
(t=e.props&&e.props.onVnodeUpdated)&&Do((()=>wr(t,s,e,d)),r),__VUE_PROD_DEVTOOLS__&&ee(n)}else{let i
;const{el:l,props:s}=t,{bm:d,m,parent:c}=n,p=Ue(t);if(Wo(n,!1),
// beforeMount hook
d&&W(d),
// onVnodeBeforeMount
!p&&(i=s&&s.onVnodeBeforeMount)&&wr(i,c,t),Wo(n,!0),l&&en){
// vnode has adopted host node - perform hydration instead of mount.
const e=()=>{n.subTree=pe(n),en(l,n.subTree,n,r,null)};p?t.type.__asyncLoader().then((
// note: we are moving the render call into an async callback,
// which means it won't track dependencies - but it's ok because
// a server-rendered async wrapper is already in resolved state
// and it will never need to change.
()=>!n.isUnmounted&&e())):e()}else{0;const i=n.subTree=pe(n);0,v(null,i,e,o,n,r,a),t.el=i.el}
// mounted hook
// onVnodeMounted
if(m&&Do(m,r),!p&&(i=s&&s.onVnodeMounted)){const n=t;Do((()=>wr(i,c,n)),r)}
// activated hook for keep-alive roots.
// #1742 activated hook must be accessed after first render
// since the hook may be injected by a child keep-alive
(256/* COMPONENT_SHOULD_KEEP_ALIVE */&t.shapeFlag||c&&Ue(c.vnode)&&256/* COMPONENT_SHOULD_KEEP_ALIVE */&c.vnode.shapeFlag)&&n.a&&Do(n.a,r),
n.isMounted=!0,__VUE_PROD_DEVTOOLS__&&te(n),
// #2458: deference mount-only object parameters to prevent memleaks
t=e=o=null}}),(()=>$t(s)),n.scope),s=n.update=()=>l.run();
// create reactive effect for rendering
s.id=n.uid,
// allowRecurse
// #1801, #2043 component render effects should allow recursive updates
Wo(n,!0),s()},R=(n,t,e)=>{t.component=n;const o=n.vnode.props;n.vnode=t,n.next=null,function(n,t,e,o){
const{props:r,attrs:a,vnode:{patchFlag:i}}=n,l=ct(r),[s]=n.propsOptions;let d=!1;if(
// always force full diff in dev
// - #1942 if hmr is enabled with sfc component
// - vite#872 non-sfc component used by sfc component
!(o||i>0)||16/* FULL_PROPS */&i){
// in case of dynamic props, check if we need to delete keys from
// the props object
let o;
// full props update.
So(n,t,r,a)&&(d=!0);for(const a in l)t&&(
// for camelCase
k(t,a)||
// it's possible the original props was passed in as kebab-case
// and converted to camelCase (#955)
(o=V(a))!==a&&k(t,o))||(s?!e||
// for camelCase
void 0===e[a]&&
// for kebab-case
void 0===e[o]||(r[a]=Co(s,l,a,void 0,n,!0/* isAbsent */)):delete r[a]);
// in the case of functional component w/o props declaration, props and
// attrs point to the same object so it should already have been updated.
if(a!==l)for(const n in a)t&&k(t,n)||(delete a[n],d=!0)}
// trigger updates for $attrs in case it's used in component slots
else if(8/* PROPS */&i){
// Compiler-generated props & no keys change, just set the updated
// the props.
const e=n.vnode.dynamicProps;for(let o=0;o<e.length;o++){let i=e[o];
// skip if the prop key is a declared emit event listener
if(le(n.emitsOptions,i))continue;
// PROPS flag guarantees rawProps to be non-null
const m=t[i];if(s)
// attr / props separation was done on init and will be consistent
// in this code path, so just check if attrs have it.
if(k(a,i))m!==a[i]&&(a[i]=m,d=!0);else{const t=F(i);r[t]=Co(s,l,t,m,n,!1/* isAbsent */)}else m!==a[i]&&(a[i]=m,d=!0)}}
d&&xn(n,"set"/* SET */,"$attrs")}(n,t.props,o,e),Ro(n,t.children,e),gn(),
// props update may have triggered pre-flush watchers.
// flush them before the render update.
qt(void 0,n.update),bn()},B=(n,t,e,o,r,a,i,l,s=!1)=>{
const d=n&&n.children,c=n?n.shapeFlag:0,p=t.children,{patchFlag:f,shapeFlag:g}=t;
// fast path
if(f>0){if(128/* KEYED_FRAGMENT */&f)
// this could be either fully-keyed or mixed (some keyed some not)
// presence of patchFlag means children are guaranteed to be arrays
return void D(d,p,e,o,r,a,i,l,s);if(256/* UNKEYED_FRAGMENT */&f)
// unkeyed
return void $(d,p,e,o,r,a,i,l,s)}
// children has 3 possibilities: text, array or no children.
8/* TEXT_CHILDREN */&g?(
// text children fast path
16/* ARRAY_CHILDREN */&c&&Q(d,r,a),p!==d&&m(e,p)):16/* ARRAY_CHILDREN */&c?
// prev children was array
16/* ARRAY_CHILDREN */&g?
// two arrays, cannot assume anything, do full diff
D(d,p,e,o,r,a,i,l,s):
// no new children, just unmount old
Q(d,r,a,!0):(
// prev children was text OR null
// new children is array OR null
8/* TEXT_CHILDREN */&c&&m(e,""),
// mount new if array
16/* ARRAY_CHILDREN */&g&&O(p,e,o,r,a,i,l,s))},$=(n,t,e,o,r,a,i,l,s)=>{t=t||f
;const d=(n=n||f).length,m=t.length,c=Math.min(d,m);let p;for(p=0;p<c;p++){const o=t[p]=s?xr(t[p]):hr(t[p])
;v(n[p],o,e,null,r,a,i,l,s)}d>m?
// remove old
Q(n,r,a,!0,!1,c):
// mount new
O(t,e,o,r,a,i,l,s,c)},D=(n,t,e,o,r,a,i,l,s)=>{let d=0;const m=t.length;let c=n.length-1,p=m-1;// prev ending index
// next ending index
// 1. sync from start
// (a b) c
// (a b) d e
for(;d<=c&&d<=p;){const o=n[d],m=t[d]=s?xr(t[d]):hr(t[d]);if(!lr(o,m))break;v(o,m,e,null,r,a,i,l,s),d++}
// 2. sync from end
// a (b c)
// d e (b c)
for(;d<=c&&d<=p;){const o=n[c],d=t[p]=s?xr(t[p]):hr(t[p]);if(!lr(o,d))break;v(o,d,e,null,r,a,i,l,s),c--,p--}
// 3. common sequence + mount
// (a b)
// (a b) c
// i = 2, e1 = 1, e2 = 2
// (a b)
// c (a b)
// i = 0, e1 = -1, e2 = 0
if(d>c){if(d<=p){const n=p+1,c=n<m?t[n].el:o;for(;d<=p;)v(null,t[d]=s?xr(t[d]):hr(t[d]),e,c,r,a,i,l,s),d++}
}else if(d>p)for(;d<=c;)q(n[d],r,a,!0),d++;else{const g=d,b=d,u=new Map;// prev starting index
for(d=b;d<=p;d++){const n=t[d]=s?xr(t[d]):hr(t[d]);null!=n.key&&u.set(n.key,d)}
// 5.2 loop through old children left to be patched and try to patch
// matching nodes & remove nodes that are no longer present
let h,x=0;const w=p-b+1;let y=!1,k=0;
// used to track whether any node has moved
// works as Map<newIndex, oldIndex>
// Note that oldIndex is offset by +1
// and oldIndex = 0 is a special value indicating the new node has
// no corresponding old node.
// used for determining longest stable subsequence
const _=new Array(w);for(d=0;d<w;d++)_[d]=0;for(d=g;d<=c;d++){const o=n[d];if(x>=w){
// all new children have been patched so this can only be a removal
q(o,r,a,!0);continue}let m;if(null!=o.key)m=u.get(o.key);else
// key-less node, try to locate a key-less node of the same type
for(h=b;h<=p;h++)if(0===_[h-b]&&lr(o,t[h])){m=h;break}void 0===m?q(o,r,a,!0):(_[m-b]=d+1,m>=k?k=m:y=!0,
v(o,t[m],e,null,r,a,i,l,s),x++)}
// 5.3 move and mount
// generate longest stable subsequence only when nodes have moved
const z=y?
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function(n){const t=n.slice(),e=[0];let o,r,a,i,l;const s=n.length;for(o=0;o<s;o++){const s=n[o];if(0!==s){
if(r=e[e.length-1],n[r]<s){t[o]=r,e.push(o);continue}for(a=0,i=e.length-1;a<i;)l=a+i>>1,n[e[l]]<s?a=l+1:i=l
;s<n[e[a]]&&(a>0&&(t[o]=e[a-1]),e[a]=o)}}a=e.length,i=e[a-1];for(;a-- >0;)e[a]=i,i=t[i];return e}(_):f;
// looping backwards so that we can use last patched node as anchor
for(h=z.length-1,d=w-1;d>=0;d--){const n=b+d,c=t[n],p=n+1<m?t[n+1].el:o;0===_[d]?
// mount new
v(null,c,e,p,r,a,i,l,s):y&&(
// move if:
// There is no stable subsequence (e.g. a reverse)
// OR current node is not among the stable sequence
h<0||d!==z[h]?H(c,e,p,2/* REORDER */):h--)}}},H=(n,t,e,r,a=null)=>{
const{el:i,type:l,transition:s,children:d,shapeFlag:m}=n;if(6/* COMPONENT */&m)return void H(n.component.subTree,t,e,r)
;if(128/* SUSPENSE */&m)return void n.suspense.move(t,e,r);if(64/* TELEPORT */&m)return void l.move(n,t,e,nn)
;if(l===Ko){o(i,t,e);for(let n=0;n<d.length;n++)H(d[n],t,e,r);return void o(n.anchor,t,e)}
if(l===Jo)return void(({el:n,anchor:t},e,r)=>{let a;for(;n&&n!==t;)a=b(n),o(n,e,r),n=a;o(t,e,r)})(n,t,e);
// single nodes
if(2/* REORDER */!==r&&1/* ELEMENT */&m&&s)if(0/* ENTER */===r)s.beforeEnter(i),o(i,t,e),Do((()=>s.enter(i)),a);else{
const{leave:n,delayLeave:r,afterLeave:a}=s,l=()=>o(i,t,e),d=()=>{n(i,(()=>{l(),a&&a()}))};r?r(i,l,d):d()}else o(i,t,e)
},q=(n,t,e,o=!1,r=!1)=>{const{type:a,props:i,ref:l,children:s,dynamicChildren:d,shapeFlag:m,patchFlag:c,dirs:p}=n;
// unset ref
if(null!=l&&$o(l,null,e,n,!0),256/* COMPONENT_SHOULD_KEEP_ALIVE */&m)return void t.ctx.deactivate(n)
;const f=1/* ELEMENT */&m&&p,g=!Ue(n);let b;if(g&&(b=i&&i.onVnodeBeforeUnmount)&&wr(b,t,n),
6/* COMPONENT */&m)J(n.component,e,o);else{if(128/* SUSPENSE */&m)return void n.suspense.unmount(e,o)
;f&&eo(n,null,t,"beforeUnmount"),64/* TELEPORT */&m?n.type.remove(n,t,e,r,nn,o):d&&(
// #1153: fast path should not be taken for non-stable (v-for) fragments
a!==Ko||c>0&&64/* STABLE_FRAGMENT */&c)?
// fast path for block nodes: only need to unmount dynamic children.
Q(d,t,e,!1,!0):(a===Ko&&384/* UNKEYED_FRAGMENT */&c||!r&&16/* ARRAY_CHILDREN */&m)&&Q(s,t,e),o&&K(n)}
(g&&(b=i&&i.onVnodeUnmounted)||f)&&Do((()=>{b&&wr(b,t,n),f&&eo(n,null,t,"unmounted")}),e)},K=n=>{
const{type:t,el:e,anchor:o,transition:a}=n;if(t===Ko)return void G(e,o);if(t===Jo)return void z(n);const i=()=>{r(e),
a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(1/* ELEMENT */&n.shapeFlag&&a&&!a.persisted){
const{leave:t,delayLeave:o}=a,r=()=>t(e,i);o?o(n.el,i,r):r()}else i()},G=(n,t)=>{
// For fragments, directly remove all contained DOM nodes.
// (fragment child nodes cannot have transition)
let e;for(;n!==t;)e=b(n),r(n),n=e;r(t)},J=(n,t,e)=>{const{bum:o,scope:r,update:a,subTree:i,um:l}=n;
// beforeUnmount hook
o&&W(o),
// stop effects in component scope
r.stop(),
// update may be null if a component is unmounted before its async
// setup has resolved.
a&&(
// so that scheduler will no longer invoke it
a.active=!1,q(i,n,t,e)),
// unmounted hook
l&&Do(l,t),Do((()=>{n.isUnmounted=!0}),t),
// A component with async dep inside a pending suspense is unmounted before
// its async dep resolves. This should remove the dep from the suspense, and
// cause the suspense to resolve immediately if that was the last dep.
t&&t.pendingBranch&&!t.isUnmounted&&n.asyncDep&&!n.asyncResolved&&n.suspenseId===t.pendingId&&(t.deps--,
0===t.deps&&t.resolve()),__VUE_PROD_DEVTOOLS__&&oe(n)},Q=(n,t,e,o=!1,r=!1,a=0)=>{
for(let i=a;i<n.length;i++)q(n[i],t,e,o,r)
},Y=n=>6/* COMPONENT */&n.shapeFlag?Y(n.component.subTree):128/* SUSPENSE */&n.shapeFlag?n.suspense.next():b(n.anchor||n.el),Z=(n,t,e)=>{
null==n?t._vnode&&q(t._vnode,null,null,!0):v(t._vnode||null,n,t,null,null,null,e),Kt(),t._vnode=n},nn={p:v,um:q,m:H,r:K,
mt:M,mc:O,pc:B,pbc:A,n:Y,o:n};
// Note: functions inside this closure should use `const xxx = () => {}`
// style in order to prevent being inlined by minifiers.
let tn,en;return t&&([tn,en]=t(nn)),{render:Z,hydrate:tn,createApp:Vo(Z,tn)}}function Wo({effect:n,update:t},e){
n.allowRecurse=t.allowRecurse=e}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always be moved. Therefore, in order to ensure correct move
 * position, el should be inherited from previous nodes.
 */function qo(n,t,e=!1){const o=n.children,r=t.children;if(_(o)&&_(r))for(let n=0;n<o.length;n++){
// this is only called in the optimized path so array children are
// guaranteed to be vnodes
const t=o[n];let a=r[n]
;1/* ELEMENT */&a.shapeFlag&&!a.dynamicChildren&&((a.patchFlag<=0||32/* HYDRATE_EVENTS */===a.patchFlag)&&(a=r[n]=xr(r[n]),
a.el=t.el),e||qo(t,a));
// also inherit for comment nodes, but not placeholders (e.g. v-if which
// would have received .el during block patch)
}}
// Force-casted public typing for h and TSX props inference
const Ko=Symbol(void 0),Go=Symbol(void 0),Xo=Symbol(void 0),Jo=Symbol(void 0),Qo=[];let Yo=null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */function Zo(n=!1){Qo.push(Yo=n?null:[])}function nr(){Qo.pop(),Yo=Qo[Qo.length-1]||null}
// Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)
let tr=1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */function er(n){tr+=n}function or(n){
// save current block children on the block vnode
return n.dynamicChildren=tr>0?Yo||f:null,
// close block
nr(),
// a block is always going to be patched, so track it as a child of its
// parent block
tr>0&&Yo&&Yo.push(n),n}
/**
 * @private
 */function rr(n,t,e,o,r,a){return or(cr(n,t,e,o,r,a,!0/* isBlock */))}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */function ar(n,t,e,o,r){return or(pr(n,t,e,o,r,!0/* isBlock: prevent a block from tracking itself */))}function ir(n){
return!!n&&!0===n.__v_isVNode}function lr(n,t){return n.type===t.type&&n.key===t.key}
const sr="__vInternal",dr=({key:n})=>null!=n?n:null,mr=({ref:n,ref_key:t,ref_for:e})=>null!=n?j(n)||ht(n)||C(n)?{i:se,
r:n,k:t,f:!!e}:n:null;function cr(n,t=null,e=null,o=0,r=null,a=(n===Ko?0:1/* ELEMENT */),i=!1,l=!1){const s={
__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&dr(t),ref:t&&mr(t),scopeId:de,slotScopeIds:null,children:e,
component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,
targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null}
;return l?(vr(s,e),
// normalize suspense children
128/* SUSPENSE */&a&&n.normalize(s)):e&&(
// compiled element vnode - if children is passed, only possible types are
// string or Array.
s.shapeFlag|=j(e)?8/* TEXT_CHILDREN */:16/* ARRAY_CHILDREN */),
// track vnode for block tree
tr>0&&
// avoid a block node from tracking itself
!i&&
// has current parent block
Yo&&(
// presence of a patch flag indicates this node needs patching on updates.
// component nodes also should always be patched, because even if the
// component doesn't need to update, it needs to persist the instance on to
// the next vnode so that it can be properly unmounted later.
s.patchFlag>0||6/* COMPONENT */&a)&&
// the EVENTS flag is only for hydration and if it is the only flag, the
// vnode should not be considered dynamic due to handler caching.
32/* HYDRATE_EVENTS */!==s.patchFlag&&Yo.push(s),s}const pr=fr;function fr(n,t=null,e=null,o=0,r=null,i=!1){
if(n&&n!==ao||(n=Xo),ir(n)){
// createVNode receiving an existing vnode. This happens in cases like
// <component :is="vnode"/>
// #2078 make sure to merge refs during the clone instead of overwriting it
const o=gr(n,t,!0/* mergeRef: true */)
;return e&&vr(o,e),tr>0&&!i&&Yo&&(6/* COMPONENT */&o.shapeFlag?Yo[Yo.indexOf(n)]=o:Yo.push(o)),
o.patchFlag|=-2/* BAIL */,o}
// class component normalization.
// class & style normalization.
if(Rr(n)&&(n=n.__vccOpts),t){
// for reactive or proxy objects, we need to clone it to enable mutation.
t=function(n){return n?mt(n)||sr in n?v({},n):n:null}(t);let{class:n,style:e}=t;n&&!j(n)&&(t.class=d(n)),E(e)&&(
// reactive state objects need to be cloned since they are likely to be
// mutated
mt(e)&&!_(e)&&(e=v({},e)),t.style=a(e))}
// encode the vnode type information into a bitmap
return cr(n,t,e,o,r,j(n)?1/* ELEMENT */:he(n)?128/* SUSPENSE */:(n=>n.__isTeleport)(n)?64/* TELEPORT */:E(n)?4/* STATEFUL_COMPONENT */:C(n)?2/* FUNCTIONAL_COMPONENT */:0,i,!0)
}function gr(n,t,e=!1){
// This is intentionally NOT using spread or extend to avoid the runtime
// key enumeration cost.
const{props:o,ref:r,patchFlag:i,children:l}=n,s=t?function(...n){const t={};for(let e=0;e<n.length;e++){const o=n[e]
;for(const n in o)if("class"===n)t.class!==o.class&&(t.class=d([t.class,o.class]));else if("style"===n)t.style=a([t.style,o.style]);else if(h(n)){
const e=t[n],r=o[n];!r||e===r||_(e)&&e.includes(r)||(t[n]=e?[].concat(e,r):r)}else""!==n&&(t[n]=o[n])}return t
}(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:s,key:s&&dr(s),
ref:t&&t.ref?// #2078 in the case of <component :is="vnode" ref="extra"/>
// if the vnode itself already has a ref, cloneVNode will need to merge
// the refs so the single vnode can be set on multiple refs
e&&r?_(r)?r.concat(mr(t)):[r,mr(t)]:mr(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,
targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,
// if the vnode is cloned with extra props, we can no longer assume its
// existing patch flag to be reliable and need to add the FULL_PROPS flag.
// note: preserve flag for fragments since they use the flag for children
// fast paths only.
patchFlag:t&&n.type!==Ko?-1===i?16/* FULL_PROPS */:16/* FULL_PROPS */|i:i,dynamicProps:n.dynamicProps,
dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,
// These should technically only be non-null on mounted VNodes. However,
// they *should* be copied for kept-alive vnodes. So we just always copy
// them since them being non-null during a mount doesn't affect the logic as
// they will simply be overwritten.
component:n.component,suspense:n.suspense,ssContent:n.ssContent&&gr(n.ssContent),
ssFallback:n.ssFallback&&gr(n.ssFallback),el:n.el,anchor:n.anchor}}
/**
 * Dev only, for HMR of hoisted vnodes reused in v-for
 * https://github.com/vitejs/vite/issues/2022
 */
/**
 * @private
 */
function br(n=" ",t=0){return pr(Go,null,n,t)}
/**
 * @private
 */
/**
 * @private
 */
function ur(n="",
// when used as the v-else branch, the comment node must be created as a
// block to ensure correct updates.
t=!1){return t?(Zo(),ar(Xo,null,n)):pr(Xo,null,n)}function hr(n){
return null==n||"boolean"==typeof n?pr(Xo):_(n)?pr(Ko,null,
// #3666, avoid reference pollution when reusing vnode
n.slice()):"object"==typeof n?xr(n):pr(Go,null,String(n))}
// optimized normalization for template-compiled render fns
function xr(n){return null===n.el||n.memo?n:gr(n)}function vr(n,t){let e=0;const{shapeFlag:o}=n
;if(null==t)t=null;else if(_(t))e=16/* ARRAY_CHILDREN */;else if("object"==typeof t){if(65/* TELEPORT */&o){
// Normalize slot to plain children for plain element and Teleport
const e=t.default;return void(e&&(
// _c marker is added by withCtx() indicating this is a compiled slot
e._c&&(e._d=!1),vr(n,e()),e._c&&(e._d=!0)))}{e=32/* SLOTS_CHILDREN */;const o=t._;o||sr in t?3/* FORWARDED */===o&&se&&(
// a child component receives forwarded slots from the parent.
// its slot type is determined by its parent's slot type.
1/* STABLE */===se.slots._?t._=1/* STABLE */:(t._=2/* DYNAMIC */,n.patchFlag|=1024/* DYNAMIC_SLOTS */)):t._ctx=se}
}else C(t)?(t={default:t,_ctx:se},e=32/* SLOTS_CHILDREN */):(t=String(t),
// force teleport children to array so it can be moved around
64/* TELEPORT */&o?(e=16/* ARRAY_CHILDREN */,t=[br(t)]):e=8/* TEXT_CHILDREN */);n.children=t,n.shapeFlag|=e}
function wr(n,t,e,o=null){Ct(n,t,7/* VNODE_HOOK */,[e,o])}const yr=Fo();let kr=0;function _r(n,t,e){
const o=n.type,r=(t?t.appContext:n.appContext)||yr,a={uid:kr++,vnode:n,type:o,parent:t,appContext:r,root:null,next:null,
subTree:null,effect:null,update:null,scope:new Q(!0/* detached */),render:null,proxy:null,exposed:null,exposeProxy:null,
withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],
// local resolved assets
components:null,directives:null,
// resolved props and emits options
propsOptions:jo(o,r),emitsOptions:ie(o,r),
// emit
emit:null,emitted:null,
// props default value
propsDefaults:p,
// inheritAttrs
inheritAttrs:o.inheritAttrs,
// state
ctx:p,data:p,props:p,attrs:p,slots:p,refs:p,setupState:p,setupContext:null,
// suspense related
suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,
// lifecycle hooks
// not using enums here because it results in computed properties
isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,
a:null,rtg:null,rtc:null,ec:null,sp:null};
// inherit parent app context - or - if root, adopt from root vnode
return a.ctx={_:a},a.root=t?t.root:a,a.emit=ae.bind(null,a),
// apply custom element special handling
n.ce&&n.ce(a),a}let zr=null;const Sr=()=>zr||se,Cr=n=>{zr=n,n.scope.on()},jr=()=>{zr&&zr.scope.off(),zr=null}
;function Or(n){return 4/* STATEFUL_COMPONENT */&n.vnode.shapeFlag}let Er,Ar,Nr=!1;function Lr(n,t=!1){Nr=t
;const{props:e,children:o}=n.vnode,r=Or(n);zo(n,e,r,t),Io(n,o);const a=r?function(n,t){const e=n.type;0;
// 0. create render proxy property access cache
n.accessCache=Object.create(null),
// 1. create public instance / render proxy
// also mark it raw so it's never observed
n.proxy=pt(new Proxy(n.ctx,po)),!1;
// 2. call setup()
const{setup:o}=e;if(o){const e=n.setupContext=o.length>1?Ur(n):null;Cr(n),gn()
;const r=St(o,n,0/* SETUP_FUNCTION */,[n.props,e]);if(bn(),jr(),A(r)){if(r.then(jr,jr),t)
// return the promise so server-renderer can wait on it
return r.then((e=>{Tr(n,e,t)})).catch((t=>{jt(t,n,0/* SETUP_FUNCTION */)}));
// async setup returned Promise.
// bail here and wait for re-entry.
n.asyncDep=r}else Tr(n,r,t)}else Mr(n,t)}(n,t):void 0;return Nr=!1,a}function Tr(n,t,e){C(t)?
// setup returned an inline render function
n.type.__ssrInlineRender?
// when the function's name is `ssrRender` (compiled by SFC inline mode),
// set it as ssrRender instead.
n.ssrRender=t:n.render=t:E(t)&&(
// setup returned bindings.
// assuming a render function compiled from template is present.
__VUE_PROD_DEVTOOLS__&&(n.devtoolsRawSetupState=t),n.setupState=_t(t)),Mr(n,e)}function Mr(n,t,e){const o=n.type;
// template / render function normalization
// could be already set when returned from setup()
if(!n.render){
// only do on-the-fly compile if not in SSR - SSR on-the-fly compilation
// is done by server-renderer
if(!t&&Er&&!o.render){const t=o.template;if(t){0
;const{isCustomElement:e,compilerOptions:r}=n.appContext.config,{delimiters:a,compilerOptions:i}=o,l=v(v({
isCustomElement:e,delimiters:a},r),i);o.render=Er(t,l)}}n.render=o.render||g,
// for runtime-compiled render functions using `with` blocks, the render
// proxy used needs a different `has` handler which is more performant and
// also only allows a whitelist of globals to fallthrough.
Ar&&Ar(n)}
// support for 2.x options
__VUE_OPTIONS_API__&&(Cr(n),gn(),go(n),bn(),jr());
// warn missing template/render
// the runtime compilation of template in SSR is done by server-render
}function Ur(n){const t=t=>{n.exposed=t||{}};let e;return{get attrs(){return e||(e=function(n){
return new Proxy(n.attrs,{get:(t,e)=>(un(n,0/* GET */,"$attrs"),t[e])})}(n))},slots:n.slots,emit:n.emit,expose:t}}
function Pr(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(_t(pt(n.exposed)),{
get:(t,e)=>e in t?t[e]:e in co?co[e](n):void 0}))}function Ir(n){return C(n)&&n.displayName||n.name}
/* istanbul ignore next */function Rr(n){return C(n)&&"__vccOpts"in n}const Fr=(n,t)=>function(n,t,e=!1){let o,r
;const a=C(n);return a?(o=n,r=g):(o=n.get,r=n.set),new zt(o,r,a||!r,e)}(n,0,Nr);
// dev only
Symbol("");
// Core API ------------------------------------------------------------------
const Br="3.2.36",Vr="undefined"!=typeof document?document:null,$r=Vr&&Vr.createElement("template"),Dr={
insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},
createElement:(n,t,e,o)=>{const r=t?Vr.createElementNS("http://www.w3.org/2000/svg",n):Vr.createElement(n,e?{is:e
}:void 0);return"select"===n&&o&&null!=o.multiple&&r.setAttribute("multiple",o.multiple),r},
createText:n=>Vr.createTextNode(n),createComment:n=>Vr.createComment(n),setText:(n,t)=>{n.nodeValue=t},
setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,
querySelector:n=>Vr.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},cloneNode(n){const t=n.cloneNode(!0);
// #3072
// - in `patchDOMProp`, we store the actual value in the `el._value` property.
// - normally, elements using `:value` bindings will not be hoisted, but if
//   the bound value is a constant, e.g. `:value="true"` - they do get
//   hoisted.
// - in production, hoisted nodes are cloned when subsequent inserts, but
//   cloneNode() does not copy the custom property we attached.
// - This may need to account for other custom DOM properties we attach to
//   elements in addition to `_value` in the future.
return"_value"in n&&(t._value=n._value),t},
// __UNSAFE__
// Reason: innerHTML.
// Static content here can only come from compiled templates.
// As long as the user only uses trusted templates, this is safe.
insertStaticContent(n,t,e,o,r,a){
// <parent> before | first ... last | anchor </parent>
const i=e?e.previousSibling:t.lastChild;
// #5308 can only take cached path if:
// - has a single root node
// - nextSibling info is still available
if(r&&(r===a||r.nextSibling))
// cached
for(;t.insertBefore(r.cloneNode(!0),e),r!==a&&(r=r.nextSibling););else{
// fresh insert
$r.innerHTML=o?`<svg>${n}</svg>`:n;const r=$r.content;if(o){
// remove outer svg wrapper
const n=r.firstChild;for(;n.firstChild;)r.appendChild(n.firstChild);r.removeChild(n)}t.insertBefore(r,e)}return[
// first
i?i.nextSibling:t.firstChild,
// last
e?e.previousSibling:t.lastChild]}};const Hr=/\s*!important$/;function Wr(n,t,e){
if(_(e))e.forEach((e=>Wr(n,t,e)));else if(null==e&&(e=""),t.startsWith("--"))
// custom property definition
n.setProperty(t,e);else{const o=function(n,t){const e=Kr[t];if(e)return e;let o=F(t)
;if("filter"!==o&&o in n)return Kr[t]=o;o=$(o);for(let e=0;e<qr.length;e++){const r=qr[e]+o;if(r in n)return Kr[t]=r}
return t}(n,t);Hr.test(e)?
// !important
n.setProperty(V(o),e.replace(Hr,""),"important"):n[o]=e}}const qr=["Webkit","Moz","ms"],Kr={}
;const Gr="http://www.w3.org/1999/xlink";
// Async edge case fix requires storing an event listener's attach timestamp.
const[Xr,Jr]=(()=>{let n=Date.now,t=!1;if("undefined"!=typeof window){
// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
Date.now()>document.createEvent("Event").timeStamp&&(
// if the low-res timestamp which is bigger than the event timestamp
// (which is evaluated AFTER) it means the event is using a hi-res timestamp,
// and we need to use the hi-res version for event listeners as well.
n=performance.now.bind(performance));
// #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
// and does not fire microtasks in between event propagation, so safe to exclude.
const e=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(e&&Number(e[1])<=53)}return[n,t]})();
// To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
let Qr=0;const Yr=Promise.resolve(),Zr=()=>{Qr=0},na=()=>Qr||(Yr.then(Zr),Qr=Xr());function ta(n,t,e,o){
n.addEventListener(t,e,o)}function ea(n,t,e,o,r=null){
// vei = vue event invokers
const a=n._vei||(n._vei={}),i=a[t];if(o&&i)
// patch
i.value=o;else{const[e,l]=function(n){let t;if(oa.test(n)){let e
;for(t={};e=n.match(oa);)n=n.slice(0,n.length-e[0].length),t[e[0].toLowerCase()]=!0}return[V(n.slice(2)),t]}(t);if(o){
// add
const i=a[t]=function(n,t){const e=n=>{
// async edge case #6566: inner click event triggers patch, event handler
// attached to outer element during patch, and triggered again. This
// happens because browsers fire microtask ticks between event propagation.
// the solution is simple: we save the timestamp when a handler is attached,
// and the handler would only fire if the event passed to it was fired
// AFTER it was attached.
const o=n.timeStamp||Xr();(Jr||o>=e.attached-1)&&Ct(function(n,t){if(_(t)){const e=n.stopImmediatePropagation
;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map((n=>t=>!t._stopped&&n&&n(t)))}return t
}(n,e.value),t,5/* NATIVE_EVENT_HANDLER */,[n])};return e.value=n,e.attached=na(),e}(o,r);ta(n,e,i,l)}else i&&(
// remove
!function(n,t,e,o){n.removeEventListener(t,e,o)}(n,e,i,l),a[t]=void 0)}}const oa=/(?:Once|Passive|Capture)$/
;const ra=/^on[a-z]/;"undefined"!=typeof HTMLElement&&HTMLElement
;const aa="transition",ia="animation",la=(n,{slots:t})=>
// Actual implementation
function(n,t,e){const o=arguments.length;return 2===o?E(t)&&!_(t)?
// single vnode without props
ir(t)?pr(n,null,[t]):pr(n,t):pr(n,null,t):(o>3?e=Array.prototype.slice.call(arguments,2):3===o&&ir(e)&&(e=[e]),
pr(n,t,e))}(Oe,ca(n),t);la.displayName="Transition";const sa={name:String,type:String,css:{type:Boolean,default:!0},
duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,
appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,
leaveToClass:String},da=(la.props=
v({},Oe.props,sa),(n,t=[])=>{_(n)?n.forEach((n=>n(...t))):n&&n(...t)
}),ma=n=>!!n&&(_(n)?n.some((n=>n.length>1)):n.length>1);function ca(n){const t={};for(const e in n)e in sa||(t[e]=n[e])
;if(!1===n.css)return t
;const{name:e="v",type:o,duration:r,enterFromClass:a=`${e}-enter-from`,enterActiveClass:i=`${e}-enter-active`,enterToClass:l=`${e}-enter-to`,appearFromClass:s=a,appearActiveClass:d=i,appearToClass:m=l,leaveFromClass:c=`${e}-leave-from`,leaveActiveClass:p=`${e}-leave-active`,leaveToClass:f=`${e}-leave-to`}=n,g=function(n){
if(null==n)return null;if(E(n))return[pa(n.enter),pa(n.leave)];{const t=pa(n);return[t,t]}
}(r),b=g&&g[0],u=g&&g[1],{onBeforeEnter:h,onEnter:x,onEnterCancelled:w,onLeave:y,onLeaveCancelled:k,onBeforeAppear:_=h,onAppear:z=x,onAppearCancelled:S=w}=t,C=(n,t,e)=>{
ga(n,t?m:l),ga(n,t?d:i),e&&e()},j=(n,t)=>{n._isLeaving=!1,ga(n,c),ga(n,f),ga(n,p),t&&t()},O=n=>(t,e)=>{
const r=n?z:x,i=()=>C(t,n,e);da(r,[t,i]),ba((()=>{ga(t,n?s:a),fa(t,n?m:l),ma(r)||ha(t,o,b,i)}))};return v(t,{
onBeforeEnter(n){da(h,[n]),fa(n,a),fa(n,i)},onBeforeAppear(n){da(_,[n]),fa(n,s),fa(n,d)},onEnter:O(!1),onAppear:O(!0),
onLeave(n,t){n._isLeaving=!0;const e=()=>j(n,t);fa(n,c),
// force reflow so *-leave-from classes immediately take effect (#2593)
ya(),fa(n,p),ba((()=>{n._isLeaving&&(ga(n,c),fa(n,f),ma(y)||ha(n,o,u,e))})),da(y,[n,e])},onEnterCancelled(n){C(n,!1),
da(w,[n])},onAppearCancelled(n){C(n,!0),da(S,[n])},onLeaveCancelled(n){j(n),da(k,[n])}})}function pa(n){return K(n)}
function fa(n,t){t.split(/\s+/).forEach((t=>t&&n.classList.add(t))),(n._vtc||(n._vtc=new Set)).add(t)}function ga(n,t){
t.split(/\s+/).forEach((t=>t&&n.classList.remove(t)));const{_vtc:e}=n;e&&(e.delete(t),e.size||(n._vtc=void 0))}
function ba(n){requestAnimationFrame((()=>{requestAnimationFrame(n)}))}let ua=0;function ha(n,t,e,o){
const r=n._endId=++ua,a=()=>{r===n._endId&&o()};if(e)return setTimeout(a,e);const{type:i,timeout:l,propCount:s}=xa(n,t)
;if(!i)return o();const d=i+"end";let m=0;const c=()=>{n.removeEventListener(d,p),a()},p=t=>{t.target===n&&++m>=s&&c()}
;setTimeout((()=>{m<s&&c()}),l+1),n.addEventListener(d,p)}function xa(n,t){
const e=window.getComputedStyle(n),o=n=>(e[n]||"").split(", "),r=o(aa+"Delay"),a=o(aa+"Duration"),i=va(r,a),l=o(ia+"Delay"),s=o(ia+"Duration"),d=va(l,s);
// JSDOM may return undefined for transition properties
let m=null,c=0,p=0;
/* istanbul ignore if */
t===aa?i>0&&(m=aa,c=i,p=a.length):t===ia?d>0&&(m=ia,c=d,p=s.length):(c=Math.max(i,d),m=c>0?i>d?aa:ia:null,
p=m?m===aa?a.length:s.length:0);return{type:m,timeout:c,propCount:p,
hasTransform:m===aa&&/\b(transform|all)(,|$)/.test(e[aa+"Property"])}}function va(n,t){
for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map(((t,e)=>wa(t)+wa(n[e]))))}
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors
function wa(n){return 1e3*Number(n.slice(0,-1).replace(",","."))}
// synchronously force layout to put elements into a certain state
function ya(){return document.body.offsetHeight}new WeakMap,new WeakMap;const ka=v({patchProp:(n,t,e,a,i=!1,l,s,d,m)=>{
"class"===t?
// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function(n,t,e){
// directly setting className should be faster than setAttribute in theory
// if this is an element during a transition, take the temporary transition
// classes into account.
const o=n._vtc
;o&&(t=(t?[t,...o]:[...o]).join(" ")),null==t?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t
}(n,a,i):"style"===t?function(n,t,e){const o=n.style,r=j(e);if(e&&!r){for(const n in e)Wr(o,n,e[n])
;if(t&&!j(t))for(const n in t)null==e[n]&&Wr(o,n,"")}else{const a=o.display
;r?t!==e&&(o.cssText=e):t&&n.removeAttribute("style"),
// indicates that the `display` of the element is controlled by `v-show`,
// so we always keep the current `display` value regardless of the `style`
// value, thus handing over control to `v-show`.
"_vod"in n&&(o.display=a)}}(n,e,a):h(t)?
// ignore v-model listeners
x(t)||ea(n,t,0,a,s):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):function(n,t,e,o){if(o)
// most keys must be set as attribute on svg elements to work
// ...except innerHTML & textContent
return"innerHTML"===t||"textContent"===t||!!(t in n&&ra.test(t)&&C(e));
// or native onclick with function values
// these are enumerated attrs, however their corresponding DOM properties
// are actually booleans - this leads to setting it with a string "false"
// value leading it to be coerced to `true`, so we need to always treat
// them as attributes.
// Note that `contentEditable` doesn't have this problem: its DOM
// property is also enumerated string values.
if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;
// #1787, #2840 form property on form elements is readonly and must be set as
// attribute.
if("form"===t)return!1;
// #1526 <input list> must be set as attribute
if("list"===t&&"INPUT"===n.tagName)return!1;
// #2766 <textarea type> must be set as attribute
if("type"===t&&"TEXTAREA"===n.tagName)return!1;
// native onclick with string value, must be set as attribute
if(ra.test(t)&&j(e))return!1;return t in n}(n,t,a,i))?
// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function(n,t,e,
// the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
o,a,i,l){if("innerHTML"===t||"textContent"===t)return o&&l(o,a,i),void(n[t]=null==e?"":e)
;if("value"===t&&"PROGRESS"!==n.tagName&&
// custom elements may use _value internally
!n.tagName.includes("-")){
// store value as _value as well since
// non-string values will be stringified.
n._value=e;const o=null==e?"":e;return n.value===o&&
// #4956: always set for OPTION elements because its value falls back to
// textContent if no value attribute is present. And setting .value for
// OPTION has no side effect
"OPTION"!==n.tagName||(n.value=o),void(null==e&&n.removeAttribute(t))}let s=!1;if(""===e||null==e){const o=typeof n[t]
;"boolean"===o?
// e.g. <select multiple> compiles to { multiple: '' }
e=r(e):null==e&&"string"===o?(
// e.g. <div :id="null">
e="",s=!0):"number"===o&&(
// e.g. <img :width="null">
// the value of some IDL attr must be greater than 0, e.g. input.size = 0 -> error
e=0,s=!0)}
// some properties perform value validation and throw,
// some properties has getter, no setter, will error in 'use strict'
// eg. <select :type="null"></select> <select :willValidate="null"></select>
try{n[t]=e}catch(n){}s&&n.removeAttribute(t)}(n,t,a,l,s,d,m):(
// special case for <input v-model type="checkbox"> with
// :true-value & :false-value
// store value as dom properties since non-string values will be
// stringified.
"true-value"===t?n._trueValue=a:"false-value"===t&&(n._falseValue=a),function(n,t,e,a){
if(a&&t.startsWith("xlink:"))null==e?n.removeAttributeNS(Gr,t.slice(6,t.length)):n.setAttributeNS(Gr,t,e);else{
// note we are only checking boolean attributes that don't have a
// corresponding dom prop of the same name here.
const a=o(t);null==e||a&&!r(e)?n.removeAttribute(t):n.setAttribute(t,a?"":e)}}(n,t,a,i))}},Dr);
// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let _a;function za(){return _a||(_a=Ho(ka))}function Sa(n){if(j(n)){return document.querySelector(n)}return n}
/**
 * @internal
 */
const Ca=n=>(de="data-v-1cd24d60",n=n(),de=null,n),ja={class:"card py-2"},Oa={class:"card-body"},Ea={
class:"card-title main-content-title"},Aa=["href"],Na={key:0},La={key:1},Ta={class:"text-inconspicuous"},Ma={key:3,
class:"text-refered"},Ua={class:"card-text"},Pa={key:0,class:"card pt-2 pl-2 pr-2 mb-2"},Ia={key:2},Ra={key:0
},Fa=Ca((()=>cr("summary",null,"続きを読む",-1/* HOISTED */))),Ba={key:3
},Va=Ca((()=>cr("strong",null,"NG",-1/* HOISTED */))),$a=br(": ")
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/ArticleBodySection.vue?vue&type=template&id=f7c01858&scoped=true
const Da={class:"article-body"},Ha={key:0},Wa={key:1},qa={key:2},Ka={key:3,class:"rounded p-1",style:{
"background-color":"#e7ebff"}},Ga={key:4,class:"rounded p-1",style:{"background-color":"rgb(220, 240, 255)"}},Xa={key:0
},Ja={key:1},Qa={key:2},Ya={key:3,class:"rounded p-1",style:{"background-color":"#e7ebff"}},Za={key:4,class:"h5 ml-0"
},ni={key:5,class:"h6 ml-0"},ti={key:6,class:"h6 ml-0"},ei={key:5,class:"h5 ml-0"},oi={key:6,class:"h6 ml-0"},ri={key:7,
class:"h6 ml-0"}
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/ArticleBodySection.vue?vue&type=script&lang=js
/* harmony default export */const ai={name:"ArticleSection",props:{items:{type:Array,required:!0}}}
;// CONCATENATED MODULE: ./src/components/ArticleBodySection.vue?vue&type=script&lang=js
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/ArticleBodySection.vue?vue&type=style&index=0&id=f7c01858&scoped=true&lang=css
e(513);var ii=e(262);const li=(0,ii/* default */.A)(ai,[["render",function(n,t,e,o,r,a){return Zo(),
rr("div",Da,[(Zo(!0),rr(Ko,null,so(e.items,(n=>(Zo(),rr("div",{key:n.nodeIndex},["P"==n.nodeName?(Zo(),
rr("p",Ha,m(n.text),1/* TEXT */)):ur("v-if",!0),"UL"==n.nodeName?(Zo(),rr("p",Wa,[cr("ul",null,[(Zo(!0),
rr(Ko,null,so(n.texts,(n=>(Zo(),rr("li",{key:n.index
},m(n.text),1/* TEXT */)))),128/* KEYED_FRAGMENT */))])])):ur("v-if",!0),"OL"==n.nodeName?(Zo(),
rr("p",qa,[cr("ol",null,[(Zo(!0),rr(Ko,null,so(n.texts,(n=>(Zo(),rr("li",{key:n.index
},m(n.text),1/* TEXT */)))),128/* KEYED_FRAGMENT */))])])):ur("v-if",!0),"PRE"==n.nodeName?(Zo(),
rr("pre",Ka,"        "+m(n.text)+"\r\n      ",1/* TEXT */)):ur("v-if",!0),"BLOCKQUOTE"==n.nodeName?(Zo(),
rr("blockquote",Ga,[cr("div",null,[(Zo(!0),rr(Ko,null,so(n.children,(n=>(Zo(),rr("div",{key:n.nodeIndex
},["P"==n.nodeName?(Zo(),rr("p",Xa,m(n.text),1/* TEXT */)):ur("v-if",!0),"UL"==n.nodeName?(Zo(),rr("ul",Ja,[(Zo(!0),
rr(Ko,null,so(n.texts,(n=>(Zo(),rr("li",{key:n.index
},m(n.text),1/* TEXT */)))),128/* KEYED_FRAGMENT */))])):ur("v-if",!0),"OL"==n.nodeName?(Zo(),rr("ol",Qa,[(Zo(!0),
rr(Ko,null,so(n.texts,(n=>(Zo(),rr("li",{key:n.index
},m(n.text),1/* TEXT */)))),128/* KEYED_FRAGMENT */))])):ur("v-if",!0),"PRE"==n.nodeName?(Zo(),
rr("pre",Ya,"              "+m(n.text)+"\r\n            ",1/* TEXT */)):ur("v-if",!0),"H4"==n.nodeName?(Zo(),
rr("h4",Za,m(n.text),1/* TEXT */)):ur("v-if",!0),"H5"==n.nodeName?(Zo(),
rr("h5",ni,m(n.text),1/* TEXT */)):ur("v-if",!0),"H6"==n.nodeName?(Zo(),
rr("h6",ti,m(n.text),1/* TEXT */)):ur("v-if",!0)])))),128/* KEYED_FRAGMENT */))])])):ur("v-if",!0),"H4"==n.nodeName?(Zo(),
rr("h4",ei,m(n.text),1/* TEXT */)):ur("v-if",!0),"H5"==n.nodeName?(Zo(),
rr("h5",oi,m(n.text),1/* TEXT */)):ur("v-if",!0),"H6"==n.nodeName?(Zo(),
rr("h6",ri,m(n.text),1/* TEXT */)):ur("v-if",!0)])))),128/* KEYED_FRAGMENT */))]);// CONCATENATED MODULE: ./src/components/ArticleBodySection.vue?vue&type=template&id=f7c01858&scoped=true

}],["__scopeId","data-v-f7c01858"]])
/* harmony default export */,si={class:"card pt-2 pl-2 pr-2 mb-2 refer-entire"},di={class:"card-title refer-title"
},mi=["href"],ci={class:"card-text"}
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/ArticleReferenceCard.vue?vue&type=script&lang=js
/* harmony default export */const pi={components:{ArticleBodySection:li},props:{title:{type:String,required:!0},url:{
type:String,required:!0},paragraphs:{type:Array,required:!0}}}
;// CONCATENATED MODULE: ./src/components/ArticleReferenceCard.vue?vue&type=script&lang=js
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/ArticleReferenceCard.vue?vue&type=style&index=0&id=8cc9b702&scoped=true&lang=css
e(85);const fi=(0,ii/* default */.A)(pi,[["render",function(n,t,e,o,r,a){const i=ro("ArticleBodySection");return Zo(),
rr("div",si,[cr("div",di,[cr("a",{href:e.url
},"■",8/* PROPS */,mi),cr("strong",null,m(e.title),1/* TEXT */)]),cr("div",ci,[pr(i,{items:e.paragraphs
},null,8/* PROPS */,["items"])])]);// CONCATENATED MODULE: ./src/components/ArticleReferenceCard.vue?vue&type=template&id=8cc9b702&scoped=true

}],["__scopeId","data-v-8cc9b702"]])
/* harmony default export */;// CONCATENATED MODULE: ./src/infrastructure/ngword/NGWrodRepository.js
class gi{constructor(){this.ngWords=["サイト上の私のニックネーム","加藤純一","zendesk.com/hc/","xn--qckwaqj6a5l2ab.xyz","江畑諒真"]}get(){
if(!window.localStorage)return this.ngWords;const n=localStorage.getItem("customized.ngWords")
;return null==n?this.ngWords:JSON.parse(n)}save(){
window.localStorage?(localStorage.setItem("customized.ngWords",JSON.stringify(this.ngWords)),
console.log("localStorage saved.")):console.error("localStorage error!")}}
/* harmony default export */const bi={components:{ArticleBodySection:li,ArticleReferenceCard:fi},props:{entry:{
type:Object,default:null}},emits:["refer"],computed:{filteredItems(){
return this.entry.paragraphs.filter((n=>"P"!==n.nodeName||"link"!==n.text))},headlines(){
const n=Math.min(this.filteredItems.length,10);return this.filteredItems.slice(0,n)},taillines(){
return this.filteredItems.length<10?[]:this.filteredItems.slice(10)},ngWords(){
return null==(n=this.entry)?[]:(new gi).get().filter((t=>n.paragraphs.filter((n=>null!=n.text&&n.text.indexOf(t)>=0)).length>0))
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/ArticleCard.vue?vue&type=script&lang=js
var n}}};// CONCATENATED MODULE: ./src/components/ArticleCard.vue?vue&type=script&lang=js
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/ArticleCard.vue?vue&type=style&index=0&id=1cd24d60&scoped=true&lang=css
e(28);const ui=(0,ii/* default */.A)(bi,[["render",function(n,t,e,o,r,a){
const i=ro("ArticleReferenceCard"),l=ro("ArticleBodySection")
;return Zo(),rr("div",ja,[cr("div",Oa,[cr("div",Ea,[cr("a",{href:e.entry.url
},"■",8/* PROPS */,Aa),a.ngWords.length<=0?(Zo(),rr("strong",Na,m(e.entry.title),1/* TEXT */)):(Zo(),
rr("strong",La,"NG")),null!=e.entry.refer?(Zo(),rr("button",{key:2,class:"btn btn-default btn-sm",
onClick:t[0]||(t[0]=t=>n.$emit("refer"))
}," 言及先を開く ")):ur("v-if",!0),cr("span",Ta,m(e.entry.time),1/* TEXT */),e.entry.refersCount>0?(Zo(),
rr("span",Ma,"被言及："+m(e.entry.refersCount),1/* TEXT */)):ur("v-if",!0)]),cr("div",Ua,[null!=e.entry.refer&&e.entry.refer.loading?(Zo(),
rr("div",Pa," ... ")):ur("v-if",!0),null!=e.entry.refer&&e.entry.refer.visible?(Zo(),ar(i,{key:1,url:e.entry.refer.url,
title:e.entry.refer.title,paragraphs:e.entry.refer.paragraphs
},null,8/* PROPS */,["url","title","paragraphs"])):ur("v-if",!0),a.ngWords.length<=0?(Zo(),rr("div",Ia,[pr(l,{
items:a.headlines},null,8/* PROPS */,["items"]),a.taillines.length>0?(Zo(),rr("details",Ra,[Fa,pr(l,{items:a.taillines
},null,8/* PROPS */,["items"])])):ur("v-if",!0)])):(Zo(),rr("div",Ba,[Va,$a,(Zo(!0),rr(Ko,null,so(a.ngWords,(n=>(Zo(),
rr("span",{key:n
},m(n),1/* TEXT */)))),128/* KEYED_FRAGMENT */))]))])])]);// CONCATENATED MODULE: ./src/components/ArticleCard.vue?vue&type=template&id=1cd24d60&scoped=true

}],["__scopeId","data-v-1cd24d60"]])
/* harmony default export */;// CONCATENATED MODULE: ./src/infrastructure/anond/ArticleHeading3.js
class hi{parse(n){
const t=n.textContent.replace("■",""),e=n.querySelectorAll(":scope a"),o=e.length>=1?e[0].href:null,r=e.length>=2&&e[1].textContent.match("anond:[0-9]")?e[1].href:null,a=null==o?null:o.match("[0-9]+$")
;return{id:null==a?-1:a[0],title:t,url:o,reference:r}}}hi.instance=new hi
/* harmony default export */;const xi=hi;// CONCATENATED MODULE: ./src/infrastructure/anond/ArticleSectionFooter.js
class vi{parse(n){
const t=n.getElementsByTagName("a"),e=(t.length>=2?t[1].textContent:"").match(/\((\d+)\)/),o=null==e?null:e[1],r=n.childNodes,a=r.length>0?r[r.length-1]:null,i=(null==a?"":a.textContent).match(/\d\d:\d\d/)
;return{refersCount:o,time:null==i?null:i[0]}}}vi.instance=new vi
/* harmony default export */;const wi=vi;// CONCATENATED MODULE: ./src/infrastructure/anond/TopPageDocumentParser.js
class yi{parse(n){const t=n.body.querySelector(".body")
;return Array.from(t.childNodes).filter((n=>"section"===n.className)).map((n=>this.getItemFromSectionNode(n)))}
getItemFromSectionNode(n){
const{id:t,title:e,url:o,reference:r}=this.getHeader(n),{refersCount:a,time:i}=this.getFooter(n),l=this.getArticleBody(n),s=null==r?null:r.match("[0-9]+$")
;return{id:t,title:e,url:o,paragraphs:l,refer:null==s?null:{id:s[0],visible:!1,title:null,url:r,paragraphs:null,
loading:!1},refersCount:a,time:i}}getHeader(n){const t=n.querySelector("h3")
;return null==t?(console.warn("articleNode has not h3",this._node),{}):xi.instance.parse(t)}getFooter(n){
const t=n.querySelector(":scope .sectionfooter");return null==t?{}:wi.instance.parse(t)}getArticleBody(n){
return Array.from(n.childNodes).map(((n,t)=>this.parseArticleBodyLine(t,n))).filter((n=>null!=n))}
parseArticleBodyLine(n,t){const e=t.nodeName;switch(e){case"P":return t.classList.length>0?null:{nodeIndex:n,
text:t.textContent,nodeName:e};case"UL":case"OL":{const o=t.querySelectorAll("li");return{nodeIndex:n,
texts:Array.from(o).map(((n,t)=>({index:t,text:n.textContent}))),nodeName:e}}case"BLOCKQUOTE":return{nodeIndex:n,
children:this.getArticleBody(t),nodeName:e};case"PRE":case"H4":case"H5":case"H6":return{nodeIndex:n,text:t.textContent,
nodeName:e};default:return null}}}yi.instance=new yi
/* harmony default export */;const ki=yi,_i=ki.instance,zi=xt(1),Si=xt([]),Ci=xt(!1),ji=async({page:n})=>{
const t=await(async n=>{const t=await fetch("https://anond.hatelabo.jp/?mode=top&page="+n),e=await t.text()
;return(new DOMParser).parseFromString(e,"text/html")})(n),e=_i.parse(t);return e.sort(((n,t)=>n.time>t.time?1:-1)),e
},Oi=async n=>{Ci.value=!0;const t=n??zi.value;console.log("fetching... page:",t);const e=await ji({page:t})
;console.log("fetched... entries:",e.length),Ci.value=!1,zi.value=t,Si.value=e},Ei=["disabled"],Ai={
name:"PagingButtons",emits:["change"],setup(n,{emit:t}){const e=Fr((()=>Ci.value)),o=async n=>{
console.log("buttonClick",n),await Oi(n),t("change",n)};return(n,t)=>(Zo(),rr("fieldset",{class:"v-interval buttons",
disabled:yt(e)},[cr("button",{class:"btn btn-link p-0",onClick:t[0]||(t[0]=n=>o(yt(zi)))}," 再読み込み "),yt(zi)>1?(Zo(),
rr("button",{key:0,class:"btn btn-link p-0",onClick:t[1]||(t[1]=n=>o(1))}," 最新を取得 ")):ur("v-if",!0),yt(zi)>1?(Zo(),
rr("button",{key:1,class:"btn btn-link p-0",onClick:t[2]||(t[2]=n=>o(yt(zi)-1))
}," ← 前の25件 ")):ur("v-if",!0),cr("button",{class:"btn btn-link p-0",onClick:t[3]||(t[3]=n=>o(yt(zi)+1))
}," → 次の25件 "),cr("button",{class:"btn btn-link p-0",onClick:t[4]||(t[4]=n=>o(yt(zi)+5))
}," 古い方へ+5p ")],8/* PROPS */,Ei))}}
;// CONCATENATED MODULE: ./src/components/PagingButtons.vue?vue&type=script&setup=true&lang=js
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/components/PagingButtons.vue?vue&type=style&index=0&id=50022ed0&scoped=true&lang=css
e(325);const Ni=(0,ii/* default */.A)(Ai,[["__scopeId","data-v-50022ed0"]])
/* harmony default export */,Li={class:"d-flex justify-content-between v-interval"},Ti={
class:"v-interval text-right text-inconspicuous"},Mi={name:"PagingBlock",emits:["change"],
setup:(n,{emit:t})=>(n,e)=>(Zo(),rr("div",Li,[pr(Ni,{onChange:e[0]||(e[0]=n=>{t("change",n)})
}),cr("div",Ti," p."+m(yt(zi)),1/* TEXT */)]))},Ui=ki.instance,Pi=async n=>{
if(n.refer.visible||null!=n.refer.title)return void(n.refer.visible=!n.refer.visible);if(n.refer.loading)return
;n.refer.loading=!0;const t=n.refer.id,e=await(async n=>{
const t="https://anond.hatelabo.jp/"+n+"?mode=json",e=await fetch(t),o=await e.json()
;return(new DOMParser).parseFromString("<body>\n      <h2>"+o.title+'</h2>\n      <div id="body">'+o.body+"</div>\n    </body>","text/html")
})(t),o=e.querySelector("h2").textContent,r=e.getElementById("body"),a=Ui.getArticleBody(r);n.refer={id:t,title:o,
paragraphs:a,visible:!0,loading:!1}},Ii={class:"container container-main"},Ri={name:"App",setup(n){const t=xt(null)
;Ke((async()=>{await Oi(),t.value.scrollTop=0}));const e=n=>{console.log("paging change page:",n),t.value.scrollTop=0}
;return(n,o)=>(Zo(),rr("div",{ref_key:"scroll",ref:t,class:"h-100 scroll"},[cr("div",Ii,[pr(Mi,{
onChange:o[0]||(o[0]=n=>e(n))}),(Zo(!0),rr(Ko,null,so(yt(Si),(n=>(Zo(),ar(ui,{key:n.url,entry:n,onRefer:t=>(n=>{Pi(n)
})(n)},null,8/* PROPS */,["entry","onRefer"])))),128/* KEYED_FRAGMENT */)),pr(Mi,{onChange:o[1]||(o[1]=n=>e(n))
})])],512/* NEED_PATCH */))}};// CONCATENATED MODULE: ./src/App.vue?vue&type=script&setup=true&lang=js
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/App.vue?vue&type=style&index=0&id=06e103f5&lang=css
e(529);const Fi=Ri;
/* harmony default export */
// EXTERNAL MODULE: ./src/assets/css/bootstrap.css
e(26);// CONCATENATED MODULE: ./src/app.js
(()=>{
document.body.insertAdjacentHTML("beforeend",'\n    <div id="original"></div>\n    <div id="app" class="h-0 flex-grow-1"></div>\n  ')
;const n=document.getElementById("original")
;Array.apply(null,document.body.childNodes).filter((n=>"original"!==n.id&&"app"!==n.id)).forEach((t=>{n.appendChild(t)
})),document.body.className="d-flex flex-column h-100"})(),((...n)=>{const t=za().createApp(...n);const{mount:e}=t
;return t.mount=n=>{const o=Sa(n);if(!o)return;const r=t._component;C(r)||r.render||r.template||(
// __UNSAFE__
// Reason: potential execution of JS expressions in in-DOM template.
// The user must make sure the in-DOM template is trusted. If it's
// rendered by the server, the template should not contain any user data.
r.template=o.innerHTML),
// clear content before mounting
o.innerHTML="";const a=e(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),
o.setAttribute("data-v-app","")),a},t})(Fi).mount("#app")})()})
/******/();