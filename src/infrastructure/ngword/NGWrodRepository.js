export class NGWordRepository {

  static instance = new NGWordRepository()

  constructor () {
    this.ngWords = null
  }

  get () {
    if (this.ngWords != null) {
      return this.ngWords
    }
    if (!window.localStorage) {
      console.warn('localStorageが無効であるためNGワードが適用されません。')
      this.ngWords = []
    }
    const json = localStorage.getItem('customized.ngWords')
    if (json == null) {
      console.warn('customized.ngWordsが保存されてないためNGワードが適用されません。')
      this.ngWords = []
    }
    try {
      this.ngWords = JSON.parse(json)
    } catch ($ex) {
      console.error('JSONの解析に失敗したためNGワードが適用されません。')
      this.ngWords = []
    }
    return this.ngWords
  }
}
