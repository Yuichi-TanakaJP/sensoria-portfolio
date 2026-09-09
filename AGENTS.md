# AGENTS.md

このリポジトリでの Git 運用手順を固定する。
目的は「コミット、push、レビュー確認、マージ、pull/prune、branch delete」を毎回同じ手順で正確に実行すること。

## 黄金律（must）

1. **推測しない** — コードや既存ドキュメントで確認できないことは事実として書かない・変えない。不明点は「To verify」として残すか、ユーザーに確認する。
2. **変更は最小限・安全に** — 必要な箇所だけ変える。依頼されていない広範なリファクタをしない。
3. **秘密情報を出力しない** — `.env` の値・API キー・認証情報は表示・ログ出力・コミットのいずれもしない。

## 0. 基本ルール

- `main` へ直接コミットしない。必ず feature ブランチで作業する。
- 1 PR = 1 目的。無関係な差分は混ぜない。
- 変更前後で `git status --short` を確認する。
- PRマージ前に `git status --short` を確認し、未コミット差分が残っていないことを必ず確認する。
- Issue はタイトルだけで「何の話か」が分かるように書く（例: `feat(scope): ...`, `fix(scope): ...`）。
- `gh issue create` / `gh pr create` で複数行本文を渡すときは `--body-file` を使う。
- `.env` / `.env.local` は絶対にコミットしない。`.env.example` / `.env.local.example` のみコミット対象。
- コード変更では、リポジトリに定義済みの lint/test コマンドから変更範囲に必要なものを実行する。確認のためだけに依存を追加しない。
- `next-env.d.ts` などの環境起因ファイルは、意図がない限りコミットしない。

## Task Request Format

- 新しい依頼は、可能な限り先頭に次のヘッダー形式を付ける。

```text
[repo:sensoria-portfolio] [type:<report|fix|review|investigation|docs>] [target:<artifact_or_scope>] [action:<specific_work>]
```

## 1. 作業開始

```bash
git fetch --prune
git switch main
git merge --ff-only origin/main
git switch -c feature/<topic>
git status --short
```

## 2. 実装と確認

```bash
# 実装後、下記の品質ゲートに応じて必要なコマンドだけ実行する
git status --short
```

### リスク別品質ゲート（must）

変更の影響と可逆性で Tier を決める。迷った場合は1段階上を使う。既存のCIやリポ固有ルールがより厳しい場合はそちらを優先する。

| Tier | 変更例 | 必須確認 | AIレビュー / UAT |
|---|---|---|---|
| 0 非実行変更 | docs、コメント、文言、設定例 | diff、必要な構文・リンク確認 | 原則不要 |
| 1 低リスク | 局所的な内部ロジック、機械的変更 | 対象lint・対象テスト | 挙動変更時のみ簡易確認 |
| 2 中リスク | API/UI挙動、定期処理、外部入出力 | 対象lint・影響範囲テスト・必要なbuild | 独立レビュー1回、変更した挙動のUAT |
| 3 高リスク | 認証、課金、データ移行、公開、セキュリティ | 関連フルスイート、build、ロールバック確認 | 高強度レビュー、UAT/リリース確認必須 |

- バグ修正には原則として再発防止テストを付ける。新機能の異常系・境界値は、実装に存在するリスクに対応して追加する。
- 定期実行・公開物・外部送信を持つリポはテストを実体化し、実行コマンドを README に明記する。
- 形骸のテスト設定を置かない。テストを持たない判断は理由を README に記録する。
- 低リスクで可逆な変更に、無関係な全テスト・build・新規依存導入を追加しない。

### 動作確認・UAT（UI/公開物を持つリポ）

- Tier 2以上でユーザーが触れる挙動を追加・変更した場合、該当する `docs/uat/<機能名>.md` を**同じPR**で更新する。文言・コメント等のTier 0変更だけなら不要。
- UAT文書には、操作、入力、期待結果、異常時の挙動、確認環境を記載する。
- UATの実施結果は手順書ファイルにチェックを入れず、**PR本文に貼る**。

## 3. コミット

```bash
git branch --show-current
# `main` と表示されたらコミット禁止。feature ブランチへ切り直してからやり直す。
git add <file1> <file2>
git commit -m "feat(scope): summary"
git status --short
```

## 4. push

```bash
git push -u origin feature/<topic>
```

## 5. PR 作成

```bash
gh pr create --base main --head feature/<topic> --title "<title>" --body-file <tmpfile.md>
```

PR 本文に必ず記載する項目:

- 概要
- 変更内容
- 確認項目（lint/test/動作確認）
- 関連 Issue（例: `Closes #xx`）

## 6. レビュー確認と対応

```bash
# Tier 2以上は Codex CLI review を1回実施する
codex review --base main
gh pr view <PR番号> --comments
```

- P1/P0 指摘は優先対応する。
- 修正後は同じブランチで再コミットし push する。
- レビュー後の修正が小さく局所的なら再レビューは不要。スコープ拡大、重要な挙動変更、高リスク領域への波及がある場合だけ再実行する。

## 7. マージ

```bash
git status --short
gh pr merge <PR番号> --squash --delete-branch
```

## 8. ローカル同期（pull/prune）

```bash
git fetch --prune
git switch main
git merge --ff-only origin/main
```

## 9. ブランチ削除（local）

```bash
git branch --merged main
git branch -d feature/<topic>
```

## 10. トラブル時

- `index.lock` が残っている場合: 別 Git プロセスが無いことを確認して `.git/index.lock` を削除。
- 無関係差分がある場合: そのファイルは add しない。必要なら `git stash push -- <file>` で一時退避。

## リポ固有ルール

ここから下に、このリポジトリ固有の運用ルールを追記する。
上の共通部は repo-templates（`AGENTS.md.<種別>`）由来のコピー。共通的に有益な改善はテンプレ側にも反映すること。

- 現時点で追加の固有ルールなし。
