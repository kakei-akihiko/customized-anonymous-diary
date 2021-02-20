import ArticleSectionElement from './ArticleSectionElement.js';

export default class AnonymousDiary {

  parseRefer(entryId, entry) {
    const titleDom = new DOMParser().parseFromString(
      '<body>' + entry.title + '</body>', 'text/html'
    );
    const title = titleDom.body.textContent;

    const bodyDom = new DOMParser().parseFromString(
      '<body>' + entry.body + '</body>', 'text/html'
    );

    const element = new ArticleSectionElement(bodyDom.body);
    const paragraphs = element.getArticleBody();

    return {id: entryId, title, paragraphs};
  }

  parseItems(html) {
    const dom = new DOMParser().parseFromString(html, "text/html");
    const bodyDiv = dom.body.querySelector('.body');
    return Array.from(bodyDiv.childNodes)
      .filter(node => node.className == 'section')
      .map(node => this.getItemFromSectionNode(node));
  }

  getItemFromSectionNode(node) {
    const element = new ArticleSectionElement(node);
    const {id, title, url, reference} = element.getHeader();
    const {refersCount, time} = element.getFooter();
    const paragraphs = element.getArticleBody();

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
}
