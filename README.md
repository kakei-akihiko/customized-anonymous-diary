# カスタマイズ版匿名日記

## 使い方

1. Webブラウザーに[Tampermonkey](https://www.tampermonkey.net/)をインストールします。
2. JavaScriptファイルの内容をTampermonkeyに貼りつけて保存します。
3. https://anond.hatelabo.jp/customized にアクセスします。
4. 独自の画面が表示されます。

## スクリーンショット

上がユーザースクリプト適用版、下が通常の表示です。

![](./documents/Sample.png)

## 初期設定・ビルド方法

```powershell
# package.jsonと同じフォルダに移動
Set-Location Path\To\Project\masuda

# 依存関係のインストール
yarn

# distに出力
yarn build
```
