// 各記事のノード（.section）からヘッダーのデータを取得
export const parseHeader = sectionNode => {
  const title = getArticleTitle(sectionNode)

  const anchors = sectionNode.querySelectorAll(':scope a')

  const url = anchors?.length >= 1 ? anchors[0].href : null


  const refer = getReferencee(sectionNode)

  const idMatch = url == null ? null : url.match('[0-9]+$')

  const id = idMatch == null ? -1 : idMatch[0]

  return { id, title, url, refer }
}

// 各記事のノード（.section）からヘッダーの見出し文字列を取得
export const getArticleTitle = sectionNode => {
  /* 言及先がある場合 */
  if (sectionNode.querySelector(':scope button')) {
    return sectionNode.querySelector(':scope a:nth-of-type(2)')?.textContent
  }

  /* 言及先がない場合 */
  return Array.from(sectionNode.childNodes).map(child => {
    if (child.nodeName === '#text') {
      return child.nodeValue
    }
    if (child.nodeName === 'A' && child.className === 'keyword') {
      return child.textContent
    }
    return null;
  }).filter(child => child != null).join('').trim()
}

// 記事のノード（.section）から言及先を取得
export const getReferencee = sectionNode => {
  const anchors = sectionNode.querySelectorAll(':scope a')

  if (anchors.length < 2 || anchors[1].textContent.match('anond:[0-9]') == null) {
    return null
  }

  const reference = anchors[1].href

  const referMatch = reference?.match('[0-9]+$')

  if (referMatch == null) {
    return null
  }

  return {
    id: referMatch[0],
    visible: false,
    title: null,
    url: reference,
    paragraphs: null,
    loading: false
  }
}
