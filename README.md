# TodoApp

React、TypeScript、Tailwind CSS を使用し、ローカルストレージでデータを永続化した「Todoアプリ」です。
軽く機能について説明します。
新しくタスクを追加したい場合、タスクの名前と期限、優先度を入力し、作成ボタンを押します。すると、タスク一覧に新しくタスク名、優先度、期限が出力されます。
タスクを削除したい場合はタスク名の横側の削除ボタンを押すと削除できます。
また、チェックボックスを埋めると完了済みとなり、タスク名に横線が引かれ文字が薄くなります。
もし期限を超過してしまった場合、タスク名や期限が赤文字となり、タスク名の横に💀マークが生まれます。
また、下の赤いボタンを押すと、完了済みになっているタスクを一括で削除することができます。

工夫点
なるべく使いやすくするため無駄な機能、視覚効果を限りなく減らした点。
常に期限を表示することで、先のことでもわかるようにできている点

開発にかかった時間：19.5時間
## 開発履歴

- 2024年10月24日：プロジェクト開始

## ライセンス

MIT License

Copyright (c) 2024 K.Kawachi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.