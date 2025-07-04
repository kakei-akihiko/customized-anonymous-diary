import ArticleHeading3 from './ArticleHeading3.js'
import ArticleSectionFooter from './ArticleSectionFooter.js'

class DocumentParser {
  parse (document) {
    return Array.from(document.body.querySelectorAll('.body > .section'))
      .map(node => this.getItemFromSectionNode(node))
  }

  getItemFromSectionNode (node) {
    const { id, title, url, reference } = this.getHeader(node)

    const { refersCount, time } = this.getFooter(node)

    const paragraphs = this.getArticleBody(node)

    const html = Array.from(node.childNodes)
      .filter(n => n.nodeType === Node.ELEMENT_NODE)
      .filter(n => n.className !== 'sectionfooter' && n.className !== 'share-button')
      .slice(1)
      .map(n => n.outerHTML)
      .join('')

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

    const japanese = /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/u.test(node.textContent)

    return { id, title, url, html, japanese, paragraphs, refer, refersCount, time }
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
      .reduce((results, item) => {
        // 連続する解析エラーを1つにまとめる
        const lastItem = results.length > 0 ? results[results.length - 1] : null
        const unknownTypeProcessing = lastItem?.unknownType ?? false
        if (item.unknownType && unknownTypeProcessing) {
          lastItem.html += item.html
        } else {
          results.push(item)
        }
        return results
      }, [])
  }

  parseArticleBodyLine (nodeIndex, articleChildNode) {
    const nodeName = articleChildNode.nodeName
    switch (nodeName) {
      case 'BR': return null
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
        return { nodeIndex, text: articleChildNode.textContent, nodeName }
      case 'H3':
      case '#text':
        return null
      default:
        if (nodeName === 'DIV' && articleChildNode.id === 'rectangle-middle') {
          return null
        }
        return {
          nodeIndex,
          text: '解析エラー',
          nodeName,
          unknownType: true,
          html: articleChildNode.outerHTML
        }
    }
  }
}

DocumentParser.instance = new DocumentParser()

export default DocumentParser
