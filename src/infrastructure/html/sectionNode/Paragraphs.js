export const getParagraphs = sectionNode => {
  return Array.from(sectionNode.childNodes)
    .map((child, index) => parseArticleBodyLine(index, child))
    .filter(item => item != null)
    .reduce((results, item) => {
      // 連続する解析エラーを1つにまとめる
      const lastItem = results.length > 0 ? results[results.length - 1] : null
      const unknownTypeProcessing = lastItem?.unknownType ?? false
      if (item.unknownType && unknownTypeProcessing) {
        lastItem.html += item.html
      } else {
        results.push(item)
      }
      return results
    }, [])
}

export const parseArticleBodyLine = (nodeIndex, articleChildNode) => {
  const nodeName = articleChildNode.nodeName
  switch (nodeName) {
    case 'BR': return null
    case 'P': {
      const classes = Array.from(articleChildNode.classList)
      if (classes.includes('sectionfooter') || classes.includes('share-button')) {
        return null
      }
      return {
        className: articleChildNode.className === '' ? null : articleChildNode.className,
        nodeIndex,
        text: articleChildNode.textContent,
        nodeName
      }
    }
    case 'UL':
    case 'OL': {
      const items = articleChildNode.querySelectorAll('li')
      const texts = Array.from(items).map((node, index) => {
        const text = node.textContent
        return { index, text }
      })
      return { nodeIndex, texts, nodeName }
    }
    case 'BLOCKQUOTE':
      return {
        nodeIndex,
        children: getParagraphs(articleChildNode),
        nodeName
      }
    case 'HR':
      return {
        nodeIndex,
        nodeName
      }
    case 'PRE':
    case 'H4':
    case 'H5':
    case 'H6':
      return { nodeIndex, text: articleChildNode.textContent, nodeName }
    case 'H3':
    case '#text':
      return null
    default:
      if (nodeName === 'DIV' && articleChildNode.id === 'rectangle-middle') {
        return null
      }
      return {
        nodeIndex,
        text: '解析エラー',
        nodeName,
        unknownType: true,
        html: articleChildNode.outerHTML
      }
  }
}
