import { ref } from 'vue'

export const ngWordsRef = ref([])

export const addNGWord = ngWord => {
  ngWordsRef.value.push(ngWord)
  saveNGWords()
}

export const removeNGWord = ngWord => {
  ngWordsRef.value = ngWordsRef.value.filter(w => w !== ngWord)
  saveNGWords()
}

const loadNGWords = () => {
  if (!window.localStorage) {
    console.warn('localStorageが無効であるためNGワードが適用されません。')
    ngWordsRef.value = []
    return
  }
  const json = localStorage.getItem('customized.ngWords')
  if (json == null) {
    console.warn('customized.ngWordsが保存されてないためNGワードが適用されません。')
    ngWordsRef.value = []
  }
  try {
    ngWordsRef.value = JSON.parse(json)
  } catch ($ex) {
    console.error('JSONの解析に失敗したためNGワードが適用されません。')
    ngWordsRef.value = []
  }
}
loadNGWords() //即実行する

const saveNGWords = () => {
  if (!window.localStorage) {
    console.error('localStorageが無効であるためNGワードが保存されませんでした。')
    return
  }
  const json = JSON.stringify(ngWordsRef.value)
  localStorage.setItem('customized.ngWords', json)
}
