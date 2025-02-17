export const addCss = () => {
  document.getElementsByTagName('head')[0]?.insertAdjacentHTML('beforeend', `
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
 integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<style>
#original > * {
  display: none;
}
#original > #globalheader {
  display: block;
}
body {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  margin: 0;
  padding: 0;
  height: 100%;
}
html {margin: 0; padding: 0; height: 100%}
.h-100 {height: 100%}
.h-0 {height: 0}
.scroll {overflow-y: auto}
.v-interval > *:nth-child(n+2) {margin-left: 0.5rem}
:root {--font-family-sans-serif: sans-serif}
body,pre,code,kbd,samp,.btn,p {font-family: sans-seif}
.text-inconspicuous {color: rgb(100,100,100); font-size: small}
#hatena-anond, #original > p, #original > h1 {display: none}
#app .container-main {
  max-width: 550pt;
}
.paging-buttons button {
  font-size: 1.5rem;
}
.main-content-title {
  font-size: 1.7rem
}
.text-refered {
  font-size: 80%; margin-left: .5rem
}
.article-body p, .article-body li {
  line-height: 2.8rem;
  font-size: 1.8rem;
}
.article-body blockquote {
  font-size: medium;
}
.article-body h4 {
  font-size: large;
}
.article-body pre {
  font-size: 1rem;
  font-family: "源ノ角ゴシック Code JP";
}
.refer-entire {
  background-color: honeydew
}
.refer-title {
  font-size: 1.7rem
}
.entire {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
}
.panel-main {
  overflow-y: scroll;
}
.panel-right-side {
  overflow-y: scroll;
}
/* ≡ボタン */
.panel-right-side .btn-toggle {
  font-size: 1.8rem;
}
/* 右サイドバーの内容（非表示） */
.panel-right-side .panel-collapsed {
  display: none;
}

/* 右サイドバーの内容（表示） */
.panel-right-side.collapsed .panel-collapsed {
  display: block;
  font-size: 1.8rem;
}
.btn-collapse {
  display: block;
  font-size: 1.8rem;
}
</style>
`)
}
