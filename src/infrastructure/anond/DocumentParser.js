import { parseSectionNode } from "../html/sectionNode/SectionNode"

class DocumentParser {
  parse (document) {
    return Array.from(document.body.querySelectorAll('.body > .section'))
      .map(node => parseSectionNode(node))
  }
}

DocumentParser.instance = new DocumentParser()

export default DocumentParser
