export class NGWordRepository {
  constructor () {
    this.ngWords = [
      'サイト上の私のニックネーム',
      '加藤純一',
      'zendesk.com/hc/',
      'xn--qckwaqj6a5l2ab.xyz',
      '江畑諒真'
    ]
  }

  get () {
    if (!window.localStorage) {
      return this.ngWords
    }
    const json = localStorage.getItem('customized.ngWords')
    if (json == null) {
      return this.ngWords
    }
    return JSON.parse(json)
  }

  save () {
    if (window.localStorage) {
      localStorage.setItem('customized.ngWords', JSON.stringify(this.ngWords))
      console.log('localStorage saved.')
    } else {
      console.error('localStorage error!')
    }
  }
}
