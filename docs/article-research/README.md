# 記事分析の手順と保存

## 目的

既存記事の構成、視点、言葉遣い、リズム、間、本文と画像の関係を根拠付きで整理する。企画提案や執筆試作は別途依頼された場合だけ行う。

公開リポジトリにはこの手順、一般化したひな型、個別情報を含まない集計と検証用ツールだけを置く。出典本文、個別分析、入力、生成原稿をGitへ追加しない。

## 分析の単位

掲載版と独立原稿は区別し、再掲載や音声の再編集を原稿の本数へ自動換算しない。本人執筆と、本人が取材対象となる記事は分ける。主題、形式、導入・展開・結び、視点、画像数・配置を記録する。

表現比較の6軸は、語彙、語尾と距離、リズムと間、構成、視点、本文と画像の関係。観察には出典行と短い根拠を付け、機械計測と解釈を分ける。ゲストの回答や編集側の導入をすべて著者の文体と扱わない。

## ローカル用ツール

Python標準ライブラリーだけを使用する。ツール自体はネットワークアクセスもClaude呼び出しも行わない。CLIの `prepare` は本文を含む依頼をファイルに書き出すため、出力は承認された非公開保管先にする。

```text
python scripts/article_style.py prepare --corpus <local-corpus.json> --ids <selected-ids> --out <fresh-private-run-folder>
python scripts/article_style.py accept --corpus <local-corpus.json> --manifest <manifest.json> --result <reviewed-result.json> --out <fresh-private-result-folder>
python scripts/article_style.py query --run <private-result-folder> --axis rhythm_and_pause --text <search-text>
python -B -m unittest discover -s scripts -p test_article_style.py -v
```

入力には記事ID、本文と行ID、媒体・記事名・URL、画像メタデータが必要。実データは同梱しない。既存ローカル環境の入口は `article-analysis.local/PRESERVATION.md`。準備・結果フォルダーは新しい名前にし、原文変更、未知の根拠行、原文にない引用、対象の欠落を検出した場合は保存しない。機械検証の成功は解釈の正しさや原稿の完成を保証しない。

現行の依頼文には元の比較標本用の固定IDの組が残る。別の記事群で再利用する際は、`TASK`の同題材比較の指示が選択対象に合うか確認する。汎用化や自動的な素材投入は未実装。

## 素材の取り扱い

画像IDだけでは本文と対応づけられないため、キャプションを保持する。実画像を確認していない場合はその旨を残し、音・匂い・感情や構図を推定しない。抽出行は画面上の段落・余白ではなく、画像数は写真だけの枚数でもない。

入力や成果の外部送信は、元の素材の許諾と依頼範囲を確認してから別途行う。Claude Codeを使う場合の既定はOpus 5.5・medium以上。利用上限や失敗を成功と扱わず、追加の有料利用を勝手に行わない。

関連：[進捗と限界](progress.md)、[構成のひな型](templates.md)、[集計](statistics.json)、[保存区分](../18-article-research-preservation-notes.md)。
