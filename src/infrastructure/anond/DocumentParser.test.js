import { expect, test } from 'vitest'
import DocumentParser from './DocumentParser'

test('getArticleBody: 複数件取得・エラーなし', () => {
  const document = new DOMParser().parseFromString(`
    <html>
    <body>
      <div class="day">
        <div class="body">
          <div class="section"
            ><h3>
              <a href="/20250110000039"><span class="sanchor">■</span></a>
              <a href="/20250110000029">anond:20250110000029</a>
              <button class="optimize-get-reference-button">言及先エントリを開く</button>
            </h3
            ><p>最初の段落</p
            ><p>2番目の段落</p
            >
          </div>
        </div>
      </div>
    </body>
    </html>
  `, 'text/html')

  const documentParser = new DocumentParser()

  const sectionNode = document.querySelector('.section')

  const results = documentParser.getArticleBody(sectionNode)

  expect(results).toStrictEqual([
    { nodeIndex: 1, nodeName: 'P', text: '最初の段落' },
    { nodeIndex: 2, nodeName: 'P', text: '2番目の段落' }
  ])
})

test('getArticleBody: 未知のタグエラー', () => {
  const document = new DOMParser().parseFromString(`
    <html>
    <body>
      <div class="day">
        <div class="body">
          <div class="section"
            ><h3>
              <a href="/20250110000039"><span class="sanchor">■</span></a>
              <a href="/20250110000029">anond:20250110000029</a>
              <button class="optimize-get-reference-button">言及先エントリを開く</button>
            </h3
            ><dummy>エラー1件目</dummy
            ><p>最初の段落</p
            ><dummy>エラー2件目</dummy
            >
          </div>
        </div>
      </div>
    </body>
    </html>
  `, 'text/html')

  const documentParser = new DocumentParser()

  const sectionNode = document.querySelector('.section')

  const results = documentParser.getArticleBody(sectionNode)

  expect(results).toStrictEqual([
    { nodeIndex: 1, nodeName: 'DUMMY', text: '解析エラー', html: '<dummy>エラー1件目</dummy>', unknownType: true },
    { nodeIndex: 2, nodeName: 'P', text: '最初の段落' },
    { nodeIndex: 3, nodeName: 'DUMMY', text: '解析エラー', html: '<dummy>エラー2件目</dummy>', unknownType: true },
  ])
})
