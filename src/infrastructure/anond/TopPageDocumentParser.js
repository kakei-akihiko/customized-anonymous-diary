import ArticleHeading3 from './ArticleHeading3.js'
import ArticleSectionFooter from './ArticleSectionFooter.js'

class TopPageDocumentParser {
  parse (document) {
    const bodyDiv = document.body.querySelector('.body')

    return Array.from(bodyDiv.childNodes)
      .filter(node => node.className === 'section')
      .map(node => this.getItemFromSectionNode(node))
  }

  getItemFromSectionNode (node) {
    const { id, title, url, reference } = this.getHeader(node)

    const { refersCount, time } = this.getFooter(node)

    const paragraphs = this.getArticleBody(node)

    const referMatch = reference == null ? null : reference.match('[0-9]+$')
    const refer = referMatch == null
      ? null
      : {
          id: referMatch[0],
          visible: false,
          title: null,
          url: reference,
          paragraphs: null,
          loading: false
        }
    return { id, title, url, paragraphs, refer, refersCount, time }
  }

  getHeader (node) {
    const header = node.querySelector('h3')

    if (header == null) {
      console.warn('articleNode has not h3', this._node)
      return {}
    }

    return ArticleHeading3.instance.parse(header)
  }

  getFooter (node) {
    const footerNode = node.querySelector(':scope .sectionfooter')
    if (footerNode == null) {
      return {}
    }
    return ArticleSectionFooter.instance.parse(footerNode)
  }

  getArticleBody (node) {
    return Array.from(node.childNodes)
      .map((child, index) => this.parseArticleBodyLine(index, child))
      .filter(item => item != null)
  }

  parseArticleBodyLine (nodeIndex, articleChildNode) {
    const nodeName = articleChildNode.nodeName
    switch (nodeName) {
      case 'P':
        if (articleChildNode.classList.length > 0) {
          return null
        }
        return { nodeIndex, text: articleChildNode.textContent, nodeName }
      case 'UL':
      case 'OL': {
        const items = articleChildNode.querySelectorAll('li')
        const texts = Array.from(items).map((node, index) => {
          const text = node.textContent
          return { index, text }
        })
        return { nodeIndex, texts, nodeName }
      }
      case 'BLOCKQUOTE':
        return {
          nodeIndex,
          children: this.getArticleBody(articleChildNode),
          nodeName
        }
      case 'PRE':
      case 'H4':
      case 'H5':
      case 'H6':
      case 'H7':
        return { nodeIndex, text: articleChildNode.textContent, nodeName }
      default:
        return null
    }
  }
}

TopPageDocumentParser.instance = new TopPageDocumentParser()

export default TopPageDocumentParser
