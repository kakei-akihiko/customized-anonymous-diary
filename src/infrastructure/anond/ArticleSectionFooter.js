class ArticleSectionFooter {
  parse (footerNode) {
    const anchors = footerNode.getElementsByTagName('a')
    const refersText = anchors.length >= 2 ? anchors[1].textContent : ''
    const refersMatch = refersText.match(/\((\d+)\)/)
    const refersCount = refersMatch == null ? null : refersMatch[1]

    const children = footerNode.childNodes
    const timeNode = children.length > 0 ? children[children.length - 1] : null
    const timeText = timeNode == null ? '' : timeNode.textContent
    const timeMatch = timeText.match(/\d\d:\d\d/)
    const time = timeMatch == null ? null : timeMatch[0]

    return { refersCount, time }
  }
}

ArticleSectionFooter.instance = new ArticleSectionFooter()

export default ArticleSectionFooter
