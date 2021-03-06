import ArticleHeading3 from './ArticleHeading3.js';
import ArticleSectionFooter from './ArticleSectionFooter.js';


class TopPageDocumentParser {

  parse(document) {
    const bodyDiv = document.body.querySelector('.body');

    return Array.from(bodyDiv.childNodes)
      .filter(node => node.className == 'section')
      .map(node => this.getItemFromSectionNode(node));
  }

  getItemFromSectionNode(node) {
    const {id, title, url, reference} = this.getHeader(node);

    const {refersCount, time} = this.getFooter(node);

    const paragraphs = this.getArticleBody(node);

    const referMatch = reference == null ? null : reference.match('[0-9]+$');
    const refer = referMatch == null ? null : {
      id: referMatch[0],
      visible: false,
      title: null,
      url: reference,
      paragraphs: null,
      loading: false,
    };
    return {id, title, url, paragraphs, refer, refersCount, time};
  }

  getHeader(node) {
    const header = node.querySelector('h3');

    if (header == null) {
      console.warn('articleNode has not h3', this._node);
      return {};
    }

    return ArticleHeading3.instance.parse(header);
  }

  getFooter(node) {
    const footerNode = node.querySelector(':scope .sectionfooter');
    if (footerNode == null) {
      return {};
    }
    return ArticleSectionFooter.instance.parse(footerNode);
  }

  getArticleBody(node) {
    return Array.from(node.childNodes)
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

TopPageDocumentParser.instance = new TopPageDocumentParser();

export default TopPageDocumentParser;
