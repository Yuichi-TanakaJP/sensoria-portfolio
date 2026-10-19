# 記事分析の保存区分と再開手順

## 目的

記事分析・文章表現の比較・ひな型の試作を保存し、完了した範囲と未完了を分ける。サイトの復旧・配備や、呼び出せる執筆Skillの完成とは別の作業として扱う。

## Gitに記録するもの

- [分析手順](article-research/README.md)、[進捗と限界](article-research/progress.md)、[一般化した5種類の構成](article-research/templates.md)。
- [集計のみのJSON](article-research/statistics.json)。個別記事名、URL、引用、個人別の行は含めない。
- ローカルで準備・根拠検証・検索する `scripts/article_style.py` と合成データだけを使うテスト。

## ローカルに保持するもの

原記事本文、引用付き分類、取材メモ、Claudeへの個別入力・生回答、初稿と修正版、画像・画像URL、記事ごとの計測・原文ハッシュは外部送信しない。

既存の `article-analysis.local/`、`docs/article-analysis/`、詳細ノート13〜17をそのまま保持し、Git対象外とした。`article-analysis.local/PRESERVATION.md` が再開用の索引。`article-analysis.local/checkpoints/2026-10-19-preservation/manifest.json` に整理前の文書コピー、本文保管先、SHA-256、既存調査用scratchの存在確認を記録した。ファイルは移動・削除していない。

これらはこのPC上の保管で、別端末や外部ストレージへのバックアップは未確認。リポジトリをcloneするだけでは非公開成果は戻らない。再開には元のローカル保管先または承認されたバックアップを別途用意する。

## 再開と未完了

再開時はローカル索引を読み、入力本文のハッシュと保存した検証結果を確認する。過去の分析・試作を最初から再実行しない。Skill化、新しい取材素材の投入、外部送信・公開は、それぞれの依頼と許諾範囲で判断する。

現在の区切りは [進捗表](article-research/progress.md) を参照。著者の声の再現性、著者本人の判定、全写真の目視、Skillの実装は未完了。サイト復旧の完了条件へ追加しない。

## 2026-10-20の保存確認

担当はこの記事分析チャット。古い観測時の未整理差分は、`codex/article-research-preservation` の手順・集計保存、オフライン検証ツール、根拠行対応の修正、ローカル保持ルールの4コミットに分離済みだった。確認開始時の作業ツリーはクリーンで、同名remote branchとPRは未作成だった。

非公開inventoryの141ファイルは全件存在し保存ハッシュと一致。整理前の文書コピー50件も全件一致した。現在の文書との差はAGENTS・README・文書索引の3件で、Gitに記録された保存案内の更新に対応する。既存scratch保管先5か所も存在し、初稿3本・修正版3本のJSONを確認した。素材本文は今回外部送信していない。ローカル保持は外部バックアップ完了を意味しない。

検証コマンドは `python -B -m unittest discover -s scripts -p test_article_style.py -v`（13件成功）。集計JSONの5分類はそれぞれ383件。独立レビューで未知の根拠IDのハイフン接尾辞が検査をすり抜ける点を検出し、修正と回帰ケースを追加した。サイトのコード変更がないためサイトbuild/UATは未実行、hosted CIも未実行。新しい分析・原稿生成・Skill実装・マージ・配備は行っていない。
