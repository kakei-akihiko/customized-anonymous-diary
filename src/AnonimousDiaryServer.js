export default class AnonimousDiaryServer {
  async getReferJson(entryId) {
    const url = 'https://anond.hatelabo.jp/' + entryId + '?mode=json';
    const response = await fetch(url);
    return await response.json();
  }

  async getArticlesHtml(pageIndex) {
    const response = await fetch('https://anond.hatelabo.jp/?mode=top&page=' + pageIndex);
    return await response.text();
  }
}
