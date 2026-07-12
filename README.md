# Sensoria - 五感で紡ぐ、美の旅路 -

美容・アート・旅をテーマにした「五感美容」コンセプトの個人ポートフォリオ／Webマガジンサイト。日経Webでの300本超の連載実績を持つ著者の Journal（世界観・実績紹介）/ Works（掲載実績アーカイブ）/ Media Kit（取材・寄稿向け資料）を1つのSPAに集約している。

詳細な仕様・運用ルールは [`docs/00-index.md`](docs/00-index.md) を入口とする `docs/` 配下のドキュメント群を参照すること。

## 技術スタック

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vitejs.dev/)（ビルド・開発サーバー）
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/)（アイコン）

外部 API・LLM への依存はなし（`GEMINI_API_KEY` 等の環境変数は不要）。

## 開発コマンド

```bash
npm install      # 依存関係のインストール
npm run dev      # 開発サーバー起動
npm run build    # 本番ビルド
npm run preview  # ビルド成果物のローカルプレビュー
```

## ディレクトリ構成（要点）

```
App.tsx              # ルーティング（hash ベース）とページ切り替え
index.tsx            # エントリポイント
components/          # ページ・セクション単位のコンポーネント
data/                # works・press など静的コンテンツデータ
lib/                 # 共通スタイル定義（buttonStyles / surfaces）
public/               # 静的アセット（favicon, OGP画像, robots.txt, sitemap.xml 等）
src/index.css         # グローバルスタイル / Tailwind エントリ
docs/                 # 仕様・設計・運用ドキュメント一式
specification.md      # デザイン・コンセプトの単票仕様
```

ルーティングは単一ページ（`/`）+ ハッシュルート構成。`/`（Home）、`/#/works`（Works Page）、`/#/media-kit`（Media Kit Page）が主要な公開ページで、詳細は [`docs/03-page-structure.md`](docs/03-page-structure.md) を参照。

## ドキュメント

作業前に必ず [`docs/00-index.md`](docs/00-index.md)（ドキュメント構成のルールブック）を確認すること。プロジェクト概要・デザイン指針・ページ構造・SEO/計測方針・公開前チェックリスト等はすべて `docs/` 配下の連番ドキュメントにまとまっている。

エージェント／コラボレーション運用ルールは [`AGENTS.md`](AGENTS.md) を参照。
