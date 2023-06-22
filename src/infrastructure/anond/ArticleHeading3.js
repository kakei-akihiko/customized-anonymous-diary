class ArticleHeading3 {
  parse (node) {
    const title = node.textContent.replace('■', '')

    const anchors = node.querySelectorAll(':scope a')

    const url = anchors.length >= 1 ? anchors[0].href : null

    const reference = (anchors.length >= 2 && anchors[1].textContent.match('anond:[0-9]'))
      ? anchors[1].href
      : null

    const idMatch = url == null ? null : url.match('[0-9]+$')

    const id = idMatch == null ? -1 : idMatch[0]

    return { id, title, url, reference }
  }
}

ArticleHeading3.instance = new ArticleHeading3()

export default ArticleHeading3
