import { getParagraphs } from '../html/sectionNode/Paragraphs.js'
import { parseHeader } from '../html/parseHeader.js'
import { parseFooter } from '../html/parseFooter.js'

class DocumentParser {
  parse (document) {
    return Array.from(document.body.querySelectorAll('.body > .section'))
      .map(node => this.getItemFromSectionNode(node))
  }

  getItemFromSectionNode (node) {
    const { id, title, url, refer } = parseHeader(node) ?? {}

    const { refersCount, time } = parseFooter(node)

    const paragraphs = getParagraphs(node)

    const html = Array.from(node.childNodes)
      .filter(n => n.nodeType === Node.ELEMENT_NODE)
      .filter(n => n.className !== 'sectionfooter' && n.className !== 'share-button')
      .slice(1)
      .map(n => n.outerHTML)
      .join('')

    const japanese = this.isJapaneseEntry(node)

    return { id, title, url, html, japanese, paragraphs, refer, refersCount, time }
  }

  isJapaneseEntry (node) {
    const footer = node.querySelector('.sectionfooter')

    const pattern = /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/u

    for (const child of node.children) {
      if (child.nodeName === 'H3') {
        continue
      }
      if (child === footer) return false
      if (pattern.test(child.textContent)) {
        return true
      }
    }
    return false
  }
}

DocumentParser.instance = new DocumentParser()

export default DocumentParser
