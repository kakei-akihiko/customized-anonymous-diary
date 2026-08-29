import { getParagraphs } from './Paragraphs.js'
import { parseHeader } from './Header.js'
import { parseFooter } from './Footer.js'

export const parseSectionNode = node => {
  const { id, title, url, refer } = parseHeader(node) ?? {}

  const { refersCount, time } = parseFooter(node)

  const paragraphs = getParagraphs(node)

  const html = Array.from(node.childNodes)
    .filter(n => n.nodeType === Node.ELEMENT_NODE)
    .filter(n => n.className !== 'sectionfooter' && n.className !== 'share-button')
    .slice(1)
    .map(n => n.outerHTML)
    .join('')

  const japanese = isJapaneseEntry(node)

  return { id, title, url, html, japanese, paragraphs, refer, refersCount, time }
}

export const isJapaneseEntry = node => {
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
