import { parseSectionNode } from "../html/sectionNode/SectionNode"

class DocumentParser {
  parse (document) {
    const entries = Array.from(document.body.querySelectorAll('.body > .section'))
      .map(node => parseSectionNode(node))
    return {entries}
  }
}

DocumentParser.instance = new DocumentParser()

export default DocumentParser
