import { expect, test } from 'vitest'
import { parseDocument } from './ReferenceDocument'

test('parseDocument: 複数段落の引用', () => {
  const document = new DOMParser().parseFromString(`
    <html>
    <body>
      <h2>タイトル</h2>
      <div id="body">
        <p>最初の段落</p
        ><p>2番目の段落</p>
      </div>
    </body>
    </html>
  `, 'text/html')

  const { title, paragraphs } = parseDocument(document)

  expect(title).toStrictEqual('タイトル')

  expect(paragraphs).toStrictEqual([
    { className: null, nodeIndex: 1, nodeName: 'P', text: '最初の段落' },
    { className: null, nodeIndex: 2, nodeName: 'P', text: '2番目の段落' }
  ])
})
