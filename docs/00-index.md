# Docs Index & Rulebook

`docs/` の構成・命名規則・運用ルールを定義する。新規ドキュメントを追加する際は本書に従い、追加後はインデックス（§3）も更新する。

## 1. ドキュメントの分類

| 種別 | プレフィックス | 目的 | 寿命 |
|---|---|---|---|
| Core Spec | `NN-*.md`（連番） | プロジェクト全体に効く常設仕様・ガイド | 長期（コードと並走） |
| Issue Scoped | `NN-issueXX-*.md` | 特定 Issue の作業に紐づく仕様・ログ | Issue クローズ後も参照価値があれば残す |
| Working Notes | `NN-*-notes.md` | 設計検討・リファクタ時の判断メモ | 短〜中期（陳腐化したら §6 で整理） |
| Project Log | `project-log<YYYYMMDD>.md` | 日付付き作業ログ・意思決定記録 | 追記不可、新ログは新ファイル |
| Reference | 番号なし（例: `concept-spec.md`） | PoC 期の参考資料・凍結された世界観メモ | 凍結。改訂時は Core Spec へ昇格 |

## 2. 命名規則

- **連番**: `01-` から開始し、上位概念が小さい番号になるようテーマ順に採番。番号は再利用しない（削除しても番号は欠番のまま残す）。
- **言語**: ファイル名は英小文字＋ハイフン区切り。本文は日本語可。
- **Issue 紐付け**: 該当 Issue がある場合は `NN-issueXX-<topic>.md`（例: `08-issue15-data-collection-rules.md`）。
- **作業メモ**: 末尾に `-notes` を付ける（例: `10-works-page-redesign-notes.md`）。仕様確定後は `-notes` を外して Core Spec に昇格させてよい。
- **ログ**: `project-log<YYYYMMDD>.md`。日付は記録対象日ではなく作成日。

## 3. 現存ドキュメント一覧

連番は「上位概念 → 派生 → 運用 → 個別ノート」の順で並べる。

- [00-index.md](00-index.md) — 本書。docs 構成のルールブック。
- [01-project-overview.md](01-project-overview.md) — プロジェクト基本情報・目的・スコープ。
- [02-design-guide.md](02-design-guide.md) — ブランド方向性・カラー・タイポ等のデザイン指針。
- [03-page-structure.md](03-page-structure.md) — サイトマップ／URLポリシー／ページ単位の構造。
- [04-navigation-and-structure-spec.md](04-navigation-and-structure-spec.md) — ナビゲーション仕様・CTA ルール（**仕様**）。
- [05-site-flow-map.md](05-site-flow-map.md) — 全画面・全リンクの導線マップ（**実装スナップショット**）。
- [06-seo-and-measurement.md](06-seo-and-measurement.md) — SEO 設計・計測プラン。
- [07-release-checklist.md](07-release-checklist.md) — 公開前の確認項目・Known Gaps。
- [08-issue15-data-collection-rules.md](08-issue15-data-collection-rules.md) — Issue #15 のデータ収集ルール。
- [09-issue15-source-audit.md](09-issue15-source-audit.md) — Issue #15 の採用前確認ログ。
- [10-works-page-redesign-notes.md](10-works-page-redesign-notes.md) — Works Page リデザインの設計メモ（Notes）。

Reference / Log:

- [concept-spec.md](concept-spec.md) — PoC 期のコンセプト参考資料（凍結）。
- [project-log20260112.md](project-log20260112.md) — 2026-01-12 時点の作業ログ。

## 4. 棲み分けの原則

新規ドキュメントを書く前に、近接テーマの既存ドキュメントとの重複を避ける。代表例:

- **仕様 vs スナップショット**: 「あるべき姿（ルール）」は Core Spec、「現在の実装そのまま」は別ファイルに分離する。例: ナビの方針 → [04](04-navigation-and-structure-spec.md)、現在のリンク網 → [05](05-site-flow-map.md)。
- **常設 vs 一時的**: Issue や PR に紐づく一過性メモは `-notes` または `issueXX-` で区別し、Core Spec に混入させない。
- **ログ vs 仕様**: 「いつ何を決めたか」は `project-log*` に、「何が正しいか」は連番ドキュメントに書く。

## 5. 新規追加フロー

1. 既存ドキュメントで該当章を増やせないか先に検討する。増やせるなら新規追加しない。
2. §1 の分類に当てはめ、§2 の命名規則でファイル名を決める。
3. 連番は現存最大番号+1。番号の再利用・差し込みはしない（並びを大幅に乱す再採番は §6 を参照）。
4. ファイル冒頭に H1 と「目的」セクションを置く（既存ドキュメントの体裁を踏襲）。
5. 本書 §3 のリストに 1 行サマリを追加する（`- [ファイル名](リンク) — 1行説明`）。
6. 関連する既存ドキュメントから相互リンクを張る（特に [04](04-navigation-and-structure-spec.md) / [05](05-site-flow-map.md) のような対になるもの）。

## 6. 改訂・廃止ルール

- **改訂**: 大きな方針変更を行ったときは、ファイル先頭または変更セクションに日付付きで追記する（例: `## 2026-05-09 update`）。git 履歴で追えるため、軽微な修正は記録不要。
- **陳腐化したNotes**: Core Spec に内容が取り込まれたら Notes ファイルは削除可。削除した場合も連番は欠番のまま残す。
- **廃止**: ファイルを削除する場合は §3 のリストから外し、参照していた他ドキュメントのリンクを更新する。
- **一括再採番**: 体系を整理するために連番をまとめて振り直す場合は、(a) `git mv` で履歴を保つ、(b) 全ての相互リンクを同一コミットで更新する、(c) `project-log*` の過去エントリは書き換えない。直近の再採番: 2026-05-09（上位概念昇順への並び替え）。
- **Reference の扱い**: `concept-spec.md` のような Reference は内容を直接書き換えず、必要に応じて新しい Core Spec を起こして参照を移す。

## 7. ドキュメント外との関係

- ルートの [README.md](../README.md) — リポジトリの入口。実装者向けの起動手順等。
- ルートの [AGENTS.md](../AGENTS.md) — エージェント／コラボレーション運用ルール。
- ルートの [specification.md](../specification.md) — 全体仕様の単票。`docs/` 連番との整合は随時確認する（重複した場合は `docs/` 側に集約する方針）。
