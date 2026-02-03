export const addCss = () => {
  document.getElementsByTagName('head')[0]?.insertAdjacentHTML('beforeend', `
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
 integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<style>
body, pre, code, kbd, samp, .btn, p {
  font-family: sans-seif;
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

.main-content-title-bar {
    display: grid;
    grid-template-columns: 1fr auto;
}

.original-html {
  line-height: 2.8rem;
}

.original-html p {
  font-size: 1.8rem;
}

.original-html .keyword,
.original-html a.keyword {
  color: black;
  border-bottom: none;
}

.refer-entire {
  background-color: honeydew
}

.refer-title {
  font-size: 1.7rem
}

.paging-buttons button {
  font-size: 1.5rem;
  margin-right: 1rem;
}

.main-content-title {
  font-size: 1.7rem
}

.text-refered {
  font-size: 80%; margin-left: .5rem
}

/* 記事タイトルの内容同士の間隔 */
.main-content-title > *:nth-child(n+2) {
  margin-left: .5rem
}

/* 記事タイトルの日時 */
.text-inconspicuous {
  color: rgb(100,100,100); font-size: small
}

#hatena-anond, #original > p, #original > h1 {
  display: none;
}

/* オリジナルページHTML */

#original > * {
  display: none;
}

#original > #globalheader {
  display: block;
}

/* HTML全体 */

html {
  margin: 0;
  padding: 0;
  height: 100%
}

body {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  margin: 0;
  padding: 0;
  height: 100%;
}

:root {
  --main-panel-width: 733px;
}

@media (width >= 1000px) {
  #app {
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: calc(var(--main-panel-width) + (100% - var(--main-panel-width)) / 2)  1fr;
  }

  .panel-left {
    height: 100%;
    overflow-y: scroll;
    display: grid;
  }

  .panel-main {
    margin-left: auto;
    margin-right: 0;
    width: var(--main-panel-width);
  }
}

/* ≡ボタン */

.panel-right-side .btn-toggle {
  font-size: 1.8rem;
}

/* 右サイドバーの内容（非表示） */

.panel-right-side .panel-collapsed {
  display: none;
}

/* preタグ */
.masuda-pre {
  background-color: #e7ebff
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

@media (prefers-color-scheme: dark) {
  #app {
    background: black;
    color: rgb(150, 150, 150);
  }
  .card {
    background: rgb(50, 50, 50);
  }
  .card.refer-entire {
    background-color: oklch(0.35 0 0);
  }
  .masuda-pre {
    background-color: rgb(75, 75, 75);
  }
}
</style>
`)
}
