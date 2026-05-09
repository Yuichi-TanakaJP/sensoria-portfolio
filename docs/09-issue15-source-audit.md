# Issue #15 Source Audit Log

## Purpose
- 本ドキュメントは Issue #15 の採用前確認ログを残すためのもの。
- URLの生存確認、本人記事確認、抽出候補、採用判断を分けて管理する。
- 採用判定が終わるまで、Works本番表示データには反映しない。

## Temporary Audit Page
- Route: `#/issue15-audit`
- Data source: `data/issue15SourceCandidates.ts`
- Page component: `components/Issue15AuditPage.tsx`
- Edited audit state is saved in browser `localStorage` under `issue15-source-audit-state-v1`.
- The audit page can export/import the current state as JSON.

## Check Run Order
1. URL生存確認
2. 本人記事確認
3. 抽出候補作成
4. 正規化・重複排除
5. 採用 / 保留 / 除外の判定

## Status Policy
- `unchecked`: まだ確認していない。
- `valid`: URLが現在も有効。
- `redirected`: リダイレクト先確認が必要。
- `blocked`: 403、会員制、bot対策などで通常確認できない。
- `invalid`: 404、削除、明確な無効URL。
- `needs_manual_check`: 自動・軽量確認だけでは判断できない。

## Author Policy
- `confirmed`: 本人記事、著者ページ、本人掲載として確認できた。
- `unclear`: 本人との紐づきが弱い、または確認材料が不足している。
- `not_author`: 本人記事ではないと判断した。

## Decision Policy
- `approved`: 本番表示データへ入れてよい。
- `keep_candidate`: 候補として保持し、次チェックへ進める。
- `hold`: 判断保留。追加確認が必要。
- `exclude`: 表示データには採用しない。
- `unreviewed`: まだ判定していない。

## Current Starter State
- 候補URLを `data/issue15SourceCandidates.ts` に登録済み。
- すべて未確認状態から開始する。
- 次の作業は URL生存確認のみ。本人記事確認や抽出・採用判定にはまだ進まない。
- 確認ページ上で URL / AUTHOR / EXTRACTION / DECISION / CHECKED AT / MEMO を変更できる。
- 画面上の変更はブラウザ内に保存されるため、正式反映時は内容をデータファイルへ転記する。
- `JSONをコピー` または `JSONを保存` で確認結果を取り出し、次回作業時は `JSONを取り込む` で復元できる。
