import { parseSectionNode } from "../html/sectionNode/SectionNode"

class DocumentParser {
  parse (document) {
    const entries = Array.from(document.body.querySelectorAll('.body > .section'))
      .map(node => parseSectionNode(node))

    const popularLinks = Array.from(document.body.querySelectorAll('#popularentriesblock li'))
      .map(node => parseLinks(node))

    const hotLinks = Array.from(document.body.querySelectorAll('#hotentriesblock li'))
      .map(node => parseLinks(node))

    return {entries, popularLinks, hotLinks}
  }
}

const parseLinks = node => {
  const anchor = node.querySelector(':scope > a')
  const id = anchor?.getAttribute('href')?.match('\\d+$')[0]
  const title = anchor?.textContent
  const referCount = parseInt(node.querySelector('a.trackback')?.textContent)
  return {id, title, referCount}
}

DocumentParser.instance = new DocumentParser()

export default DocumentParser
