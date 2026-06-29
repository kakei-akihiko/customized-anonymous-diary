export const addCss = () => {
  document.getElementsByTagName('head')[0]?.insertAdjacentHTML('beforeend', `
<style>
body, pre, code, kbd, samp, .btn, .button, p {
  font-family: sans-seif;
}
.button {
  font-family: sans-seif;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
.button-refer {
  color: oklch(0.6 0 0);
  background-color: oklch(0.4 0 0);
  font-size: .9rem;
  padding: 0.15rem;
}
.button-link {
  border: 1px solid transparent;
  color: hsl(211, 100%, 50%);
  background-color: transparent;
}
.button-link:hover {
  color: hsl(211, 100%, 30%);
}

.article-card {
  margin-top: 1.5rem;
  padding: .5rem 1rem .5rem 1.5rem;
  border-radius: 10px;
  background: oklch(0.3 0 0);
}

.article-card:first-of-type {
  margin-top: .5rem;
}

.article-card:last-of-type {
  margin-bottom: 1rem;
}

.article-body {
  word-wrap: break-word;

  & p {
    line-height: 2.8rem;
    font-size: 1.8rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  & li {
    line-height: 2.8rem;
    font-size: 1.8rem;
  }

  & blockquote {
    font-size: medium;
  }

  & .masuda-h4 {
    margin-left: 0;
    font-size: 2rem;
    text-decoration: underline;
  }

  & .masuda-h5 {
    margin-left: 0;
    font-size: 1.9rem;
    text-decoration: underline;
  }

  & .masuda-h6 {
    font-size: 1.8rem;
    text-decoration: underline;
  }

  & pre {
    font-size: 1rem;
    font-family: "源ノ角ゴシック Code JP";
  }

  & > div > details {
    margin-bottom: 1rem;
  }

  & hr {
    border-color: oklch(.2 0 0);
  }
}

.main-content-title-bar {
  display: grid;
  grid-template-columns: 1fr auto;
  margin-top: .5rem;
}

.original-html {
  line-height: 2.8rem;

  & p {
    font-size: 1.8rem;
  }
  & .keyword,
  & a.keyword {
    color: black;
    border-bottom: none;
  }
}

.refer-entire {
  background-color: honeydew;
  margin-top: 1.5rem;
  margin-bottom: .5rem;
  padding: 1.2rem 1.5rem .1rem;
  border-radius: 5px;
}

.refer-title {
  font-size: 1.7rem
}

.paging-block {
  display: flex;
  justify-content: space-between;
}

.paging-buttons {
  display: block;
  min-inline-size: min-content;
  margin-inline: 2px;
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
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

.panel-right-side fieldset {
  border-width: 0;
}

/* 記事タイトルの日時 */
.text-inconspicuous {
  color: rgb(100,100,100); font-size: small
}

#hatena-anond, #original > p, #original > h1 {
  display: none;
}

/*
オリジナルページはヘッダーのみ表示する。
*/

#original {
  & > * {
    display: none;
  }
  
  & > #globalheader {
    display: block;
  }
}

/* HTML全体 */

html, body {
  margin: 0;
  padding: 0;
  height: 100%
}

#app {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 150pt auto;
  margin: 0;
  padding: 0;
  height: 100%;
  grid-template-areas:
    "header header"
    "sidebar main";
  gap: 0 1.3rem;

  & > #original {
    grid-area: header;
  }

  & > .panel-main {
    grid-area: main;
    overflow-y: auto;

    & > * {
      max-width: 500pt;
      margin: 0 auto 0 0;
    }
  }

  & > .panel-sidebar {
    grid-area: sidebar;
    overflow-y: auto;
    border-right: solid 1px oklch(.3 0 0);
  }
}

#app {
  text-align: left;
}

.panel-main {
  &:not(.articles-active) .panel-articles {
    display: none;
  }

  &:not(.ngwords-active) .panel-ng-words {
    display: none;
  }
}

.sidebar-item {
  &:hover,
  &.active {
    background: oklch(.3 0 0);
  }
  & .icon {
    display: inline-block;
    padding: 1.5rem;
  }
}

/* preタグ */
.masuda-pre {
  background-color: #e7ebff;
  padding: 0 .25rem .25rem 1rem;
  border-radius: .25rem;
  margin-left: 0;
  padding-left: 1rem;

  & p:first-of-type {
    margin-top: 0;
  }
}

@media (prefers-color-scheme: dark) {
  #app {
    background: black;
    color: rgb(150, 150, 150);
  }
  .card {
    background: rgb(50, 50, 50);
  }
  .refer-entire {
    background-color: oklch(0.35 0 0);
  }
  .masuda-pre {
    background-color: rgb(75, 75, 75);
  }
}
</style>
`)
}
