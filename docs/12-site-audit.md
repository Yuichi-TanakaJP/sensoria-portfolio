# Site Audit (2026-05-10)

main ブランチ `99824e3` 時点でのサイト全体棚卸し。各ページの現状、横断的な課題、優先度付き改善案をまとめる。実装に着手する際は本書から個別 issue を起こす。

## 1. サイト構成（現状）

### ルート
| Route | Component | 公開状態 | 用途 |
|---|---|---|---|
| `#` (Home) | App.tsx → Hero / Concept / Profile / Works / Contact | 公開 | 1 ページ集約型ランディング |
| `#/works` | WorksPage | 公開 | 活動・実績の専用ページ |
| `#/media-kit` | MediaKitPage | 公開 | 取材・寄稿用の簡易資料 |
| `#/issue15-audit` | Issue15AuditPage | 内部用 | Issue #15 のソース監査 UI |

### 未使用コンポーネント（dead code）
- `FeaturedJournal.tsx`
- `FeaturedPage.tsx`
- `JournalPage.tsx`
- `LatestJournal.tsx`

→ App.tsx で import されておらず、画面には出ていない。Picsum / earth-terra 等を残しているが影響ゼロ。

## 2. ページ別 現状と気づき

### 2.1 Home `#`
**OK な点**
- Chapter 番号（01〜04）が章立てを作って "雑誌" 感を演出
- Hero タイポ路線、Concept のダーク帯、Profile pull-quote、Works 横長バンド、Contact のセカンダリ並列 → 各セクションが構造で差別化されている
- グローバルナビが全ページで同一

**気になる点**
- Hero の左右の編集記号（Cover / 2026 / Vol. 01）が **PC のみ表示**。スマホでは Hero がやや寂しい
- Profile のポートレート枠の「裏面ボーダー」（`-bottom-3 -right-3 border`）がイラストと噛み合っていない
- Works の "30+ Linked Pieces" の数値ラベルが Profile の "300+ / 10yr" と並んだ時に紛らわしい（300 系の数字がページ内に複数）
- Contact の Lead 文「通常 2 営業日以内」は記載できるが、現状運営実態と整合しているかは要確認

### 2.2 Works Page `#/works`
**OK な点**
- Editor's Note セクションが Hero と Featured の間に配置され、視覚的息継ぎ
- Featured 3 枚が 4:5 ビジュアル + 引用 + meta で雑誌的
- カテゴリ目次は sticky pill で常時参照可能
- タグフィルタ + URL 同期が実用的に動く
- Voicy が 4 件 + "View all" にまとまった

**気になる点**
- Featured のキービジュアルが seeded Picsum（暫定）。本番素材未投入
- Hero の "Vol." watermark と末尾の "For Editors / Partners" バナーがページの中で 2 回 "編集者向け" を語っており重複感
- Link Library の 30+ 件の中で、`美的`（媒体トップ）と `美的.com の各記事` が同列に並ぶ。媒体ハブとしての記事リンクの粒度が混在
- 件数表示の数字が複数あり（"5 Highlights" / "30 Links" / "{filtered} / {total}"）視線が散る

### 2.3 Media Kit Page `#/media-kit`
**OK な点**
- For Editors / Partners という用途宣言が冒頭で明確
- Profile / Topics / Press / 依頼カードの 4 ブロック構成

**気になる点**
- Press mentions が単なる文字チップ（`美的 / 日経xwoman / CREA / Hanako / シティリビング / Voicy`）で **媒体ロゴ画像が無い** ため信用補強が弱い
- Assets セクションの「素材と実績は段階的に整備中」が公開文として暫定の印象
- Hero に右肩 "Kit" watermark があるが、Works Hero の "Vol." と類似で差別化が弱い

### 2.4 Issue #15 Audit `#/issue15-audit`
**OK な点**
- 内部監査用として機能。Form / 候補追加 / リンク確認のフロー
- Pattern D のパレットが自動適用され、内部ツールでも統一感

**気になる点**
- グローバルから到達不可（直接 URL のみ）。意図通りだが、リンク忘れのリスクあり
- amber-* がここだけに残っているが、警告色として妥当

## 3. 横断的な課題

### 3.1 ダミー値・暫定資産
| 場所 | 内容 |
|---|---|
| `mailto:contact@sensoria.example` | Contact / Footer の 2 箇所 |
| canonical / OG / sitemap | `sensoria-portfolio.vercel.app` のまま（独自ドメインなら差し替え必要） |
| `og-image.svg` | placeholder の SVG。本番では適切な OGP 画像に |
| `data/works.ts` の Featured `keyVisual` | Picsum seeded URL（3 件）。本番素材投入待ち |
| Profile achievement「Themes」値 `Beauty / Travel / Editorial` | ユーザー監修要 |

### 3.2 SEO / メタデータ
- 各ページ共通の title / description（ハッシュルートのため変更不可、SPA の制約）
- `sitemap.xml` がトップ URL のみ。`#/works`, `#/media-kit` は記載なし（ハッシュルートは検索エンジンが拾わないため、現状はトップだけで妥当）
- 構造化データ（JSON-LD: Person / CreativeWork / Article）未導入
- `lang="ja"` は付与済み。OK
- Twitter Card は `summary_large_image` を指定済み

### 3.3 計測 / 分析
- Google Analytics / Plausible / Vercel Analytics 等の組み込み **なし**
- どこから来てどう離脱したかが追えない

### 3.4 アクセシビリティ
- focus-visible リング統一済（PR #50 以降）
- skip-to-categories 実装済（WorksPage）
- prefers-reduced-motion 対応済
- ※未対応: `aria-current="page"` などナビ現在位置の属性、ヘッダの `<nav>` のラベル付け

### 3.5 パフォーマンス
- Tailwind CDN 利用（本番運用としては build-in 化推奨）
- 画像最適化（WebP/AVIF、`<picture>`）未実装
- フォント `Zen Old Mincho` を Google Fonts から都度ロード
- `data/works.ts` などはバンドルに含まれるが軽量

### 3.6 モバイル UX
- ハンバーガー → 同一ページの anchor へ飛ぶ（Home 内）
- Works / Media Kit に飛ぶときも同じハンバーガーから OK
- ※確認したい: ハンバーガーを開いた状態で route 遷移したときに開いたままにならないか

### 3.7 ブランド一貫性
- Pattern D（Quiet Luxe）に統一済
- ボタン 4 バリアントに集約済
- earth-sage が唯一のカラーアクセント（Chapter ラベル）
- ※未統一: 数値表記（`300+` / `30+` / `5` / `10yr` の混在は OK だが、フォント統一の余地あり）

## 4. 改善案 — 優先度付き

### Tier 1: 公開準備の必須項目（即着手）
1. **連絡先の差し替え**: `mailto:contact@sensoria.example` を実メールに（**ユーザー入力必要**）
2. **OG 画像の正式化**: SVG placeholder を実画像 / 自作 OGP に差し替え
3. **Featured キービジュアル**: 暫定 Picsum を実画像 3 枚に（**ユーザー入力必要**）
4. **dead code 削除**: FeaturedJournal / FeaturedPage / JournalPage / LatestJournal を削除（小工数）
5. **canonical / sitemap / OG URL の確定**: 独自ドメイン取得有無の確定後、一括差し替え（**ユーザー入力必要**）

### Tier 2: 体験品質を上げる（1〜2 PR ずつ）
6. **JSON-LD 構造化データ**: Person / Organization / CreativeWork を Home に埋め込み（SEO 効果中）
7. **Hero の編集記号をスマホでも表示**: PC 限定の `lg:block` を改善し、モバイルにも縮小版を出す
8. **Profile ポートレートの裏面ボーダー除去**: イラストと整合しないため落とす
9. **Press mentions に媒体ロゴ**: MediaKit の権威性が向上
10. **計測導入**: Vercel Analytics か Plausible（GA4 より軽量）を選定して導入
11. **`aria-current` / ナビ a11y 改善**: 現在のページに `aria-current="page"` を付与
12. **モバイルメニューの route 遷移時の自動クローズ**: 既に対応済か再確認

### Tier 3: 余力で取り組むエンハンスメント
13. **Tailwind ビルドイン化**: CDN から PostCSS / Vite plugin 経由に。本番パフォーマンス改善
14. **画像最適化（WebP/AVIF）**: `<picture>` 化と `vite-plugin-image-presets` 等の導入
15. **Featured Editorial にホバー OG プレビュー**: PC のみ、外部記事のサムネを fetch して表示
16. **Issue #15 の取材実績データを WorksPage に統合**: 美術館 / ホテル / 伝統工芸の根拠 URL 付き実績を追加
17. **Journal 機能を削除 or 復活**: dead code を削除する選択 / Journal を復活させる選択を確定
18. **Search ボックス**: 30+ リンクの全文検索（提案 C3）

### Tier 4: ブランド方針の見直しが必要な検討
19. **モバイル Hero のリッチ化**: PC で出ている縦書き編集記号をモバイルでも見せる方針か、いっそ消すか
20. **Concept ダーク帯を全面ダーク採用に拡張**（Pattern A + G 混在）するか
21. **ダーク版テーマ切替**: ダーク好みの読者向けに dark mode を提供するか

## 5. ユーザー側で決めていただきたいこと

| 項目 | 状態 | 決まったら動けるもの |
|---|---|---|
| 連絡先メール（実値） | ダミー | Tier 1-1 |
| 独自ドメイン | 暫定 vercel.app | Tier 1-5（canonical/og/sitemap） |
| Featured 用画像 3 枚 | 暫定 Picsum | Tier 1-3（Editorial 完成度↑） |
| Hero / Profile に追加投入する画像の有無 | 未定 | Tier 2-7, 2-8 |
| 計測ツール選定 | 未導入 | Tier 2-10 |
| Featured カードに媒体ロゴ表示するか | 未定 | Tier 2-9 |
| Journal 機能を持たせるか | 未定 | Tier 3-17 |

## 6. 推奨される進め方

最小コストで "公開準備完了" に到達する道筋:

1. ダミー値棚卸し（Tier 1-1, 1-2, 1-3, 1-5）— ユーザー側決定後に 2 PR で完了
2. dead code 一掃（Tier 1-4）— 即 PR 化可能
3. JSON-LD 投入 + ナビ a11y（Tier 2-6, 2-11）— 即 PR 化可能
4. 計測導入（Tier 2-10）— ユーザーに選定を仰いでから 1 PR

これだけで "公開してよい状態" に達する。Tier 3 / 4 は公開後の継続改善として位置付ける。

## 7. 参考: 関連ドキュメント
- [01-project-overview.md](01-project-overview.md) — プロジェクト概要
- [02-design-guide.md](02-design-guide.md) — Pattern D の現行ルール
- [04-navigation-and-structure-spec.md](04-navigation-and-structure-spec.md) — ナビ仕様
- [05-site-flow-map.md](05-site-flow-map.md) — 全画面の導線マップ
- [07-release-checklist.md](07-release-checklist.md) — 公開前確認項目
- [11-color-palette-references.md](11-color-palette-references.md) — 配色パターン集
