class ArticleHeading3 {
  parse (node) {
    const title = this.parseTitle(node)

    const anchors = node.querySelectorAll(':scope a')

    const url = anchors.length >= 1 ? anchors[0].href : null

    const reference = (anchors.length >= 2 && anchors[1].textContent.match('anond:[0-9]'))
      ? anchors[1].href
      : null

    const idMatch = url == null ? null : url.match('[0-9]+$')

    const id = idMatch == null ? -1 : idMatch[0]

    return { id, title, url, reference }
  }

  parseTitle (node) {
    /* 言及先がある場合 */
    if (node.querySelector(':scope button')) {
      return node.querySelector(':scope a:nth-of-type(2)')?.textContent
    }

    /* 言及先がない場合 */
    return Array.from(node.childNodes).map(child => {
      if (child.nodeName === '#text') {
        return child.nodeValue
      }
      if (child.nodeName === 'A' && child.className === 'keyword') {
        return child.textContent
      }
      return null;
    }).filter(child => child != null).join('').trim()
  }
}

ArticleHeading3.instance = new ArticleHeading3()

export default ArticleHeading3
