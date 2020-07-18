export default class ArticleSectionElement {
  constructor(node) {
    this._node = node;
  }

  getHeader() {
    const header = this._node.querySelector('h3');
    if (header == null) {
      console.warn('articleNode has not h3', this._node);
      return {};
    }

    const title = header.textContent.replace('■', '');
    const anchors = header.querySelectorAll(':scope a');
    const url = anchors.length >= 1 ? anchors[0].href : null;
    const reference = (anchors.length >= 2 && anchors[1].textContent.match('anond:[0-9]')) ? anchors[1].href : null;

    const idMatch = url == null ? null : url.match('[0-9]+$');
    const id = idMatch == null ? -1 : idMatch[0];

    return {id, title, url, reference};
  }

  getFooter() {
    const footerNode = this._node.querySelector(':scope .sectionfooter');
    if (footerNode == null) {
      return {};
    }

    const anchors = footerNode.getElementsByTagName('a');
    const refersText = anchors.length >= 2 ? anchors[1].textContent : '';
    const refersMatch = refersText.match(/\((\d+)\)/);
    const refersCount = refersMatch == null ? null : refersMatch[1];

    const children = footerNode.childNodes;
    const timeNode = children.length > 0 ? children[children.length - 1] : null;
    const timeText = timeNode == null ? '' : timeNode.textContent;
    const timeMatch = timeText.match(/\d\d:\d\d/);
    const time = timeMatch == null ? null : timeMatch[0];

    return {refersCount, time};
  }

  getArticleBody() {
    return Array.from(this._node.childNodes)
      .map(child => this.parseArticleBodyLine(child))
      .filter(item => item != null);
  }

  parseArticleBodyLine(articleChildNode) {
    const nodeName = articleChildNode.nodeName;
    switch (nodeName) {
      case 'P':
        if (articleChildNode.classList.length > 0) {
          return null;
        }
        return {text: articleChildNode.textContent, nodeName};
      case 'UL':
      case 'OL': {
        const items = articleChildNode.querySelectorAll('li');
        const texts = Array.from(items).map(node => node.textContent);
        return {texts, nodeName};
      }
      case 'BLOCKQUOTE':
      case 'H4':
        return {text: articleChildNode.textContent, nodeName};
      default:
        return null;
    }
  }
}
