# Site Flow Map (2026-05-09)

## 1. 目的
- 現行HPの全画面・全リンクを棚卸しし、訪問者がどのような順序で情報に到達するかを可視化する。
- ルーティング・アンカー・外部リンクの分布を踏まえ、導線の起点と終点を整理する。
- 既存の [04-navigation-and-structure-spec.md](04-navigation-and-structure-spec.md) を補完する「実装スナップショット」として扱う。

## 2. ルート一覧（[App.tsx](../App.tsx)）
| Route | 役割 | エントリ実装 |
|---|---|---|
| `#` / hashなし | Home（1ページ構成、メイン入口） | [App.tsx:51-62](../App.tsx#L51-L62) |
| `#/works` | 活動と実績の専用ページ | [components/WorksPage.tsx](../components/WorksPage.tsx) |
| `#/media-kit` | 取材・寄稿・紹介向けメディアキット | [components/MediaKitPage.tsx](../components/MediaKitPage.tsx) |
| `#/issue15-audit` | Issue #15 採用前の内部確認用 | [components/Issue15AuditPage.tsx](../components/Issue15AuditPage.tsx) |

ルート切替は `getRoute()` がハッシュを判定し、`hashchange` で再描画。遷移時に `window.scrollTo(0,0)` を実行する。

## 3. Home の縦構成と各セクションが担う役割
順序は [App.tsx:54-60](../App.tsx#L54-L60) のとおり。

| # | Section | アンカー | 主な役割 | 設置CTA / リンク |
|---|---|---|---|---|
| 1 | Header | `#top` | グローバル固定ナビ | About / Works / Contact、Instagram (外部) |
| 2 | Hero | – | コンセプトの第一印象（"五感美容"） | CTAなし（読み物導入） |
| 3 | Concept | `#concept` | 五感美容の世界観テキスト | CTAなし |
| 4 | Profile | `#about` | 人物像と実績サマリー（300+ / 10yr） | CTAなし（[04仕様](04-navigation-and-structure-spec.md#5-cta-rules-current)で明示的に置かない） |
| 5 | Works | `#works` | 活動概要＋実績ページへの主CTA | 「実績ページを見る」→ `#/works` |
| 6 | Contact | `#contact` | 相談・依頼の入口 | mail (`mailto:`) / Instagram 外部リンク |
| 7 | Footer | – | 再ナビ＋SNS終端 | About / Works / Contact、Instagram / Facebook / Mail |

## 4. ページ別 リンクマップ

### 4.1 Home
- 内部アンカー: `#top`, `#about`, `#works`, `#contact`
- ルート遷移: `#/works`（Works セクションのCTA）
- 外部: Instagram（Header / Footer）、Facebook（Footer）、`mailto:contact@sensoria.example`（Contact / Footer）

### 4.2 Works Page (`#/works`) — [WorksPage.tsx](../components/WorksPage.tsx)
- ページ内アンカー: `#featured-works`, `#link-library`, `#works-<slug>`（5カテゴリ：beauty-life / editorial / travel-blog / voicy / other）
- ルート遷移: `#/media-kit`（Heroチップと末尾Nextバナー）、`#`（ヘッダのTop）
- ページ内ジャンプ: Hero下のチップ "Featured" / "Link Library" / "Media Kit"
- Home戻り: ヘッダ左の Top（`href="#"`）
- Contact導線: ヘッダ右 `#contact`、末尾Nextバナー `#contact`
- 外部: Featured 3件 + 掲載リンク 5カテゴリ計 約30件（美的 / 日経xwoman / 楽活 / Voicy / Girls Art Talk / Yamaha など）すべて `target="_blank"`

### 4.3 Media Kit (`#/media-kit`) — [MediaKitPage.tsx](../components/MediaKitPage.tsx)
- ページ内アンカー: `#media-kit-profile`
- ルート遷移: `#/works`（ヘッダ左 / 末尾Assetsカード）
- Contact導線: ヘッダ右 `#contact`、依頼カード内 `#contact`
- 外部リンクなし（紹介資料のため掲載先はテキスト表示のみ）

### 4.4 Issue15 Audit (`#/issue15-audit`)
- 内部確認用。Home / グローバルナビからの導線は未設置（直接URLでのみ到達）。

## 5. ユーザー別 想定導線

### 5.1 初回訪問者（読者）
1. Home Hero → Concept でテーマを掴む
2. Profile で人物像と実績規模（300+ / 10yr）を確認
3. Works セクションの「実績ページを見る」で `#/works`
4. Works Page の Featured または Link Library から外部媒体へ離脱

### 5.2 編集者・取材依頼者
- ルート A（Home起点）: Header `Contact` → Contact セクション → mail / Instagram
- ルート B（実績確認後）: Works セクションCTA → Works Page → 末尾Nextバナー `Contact` または `Media Kit`
- ルート C（紹介資料起点）: 直接 `#/media-kit` を共有 → 概要・テーマ・掲載先 → 依頼カード `Contact`

### 5.3 SNS / 検索流入
- Header / Footer のグローバルナビでセクションへ即ジャンプ可能
- Footer の SNSアイコン（Instagram / Facebook / Mail）で別チャネルへ離脱

## 6. 導線上の特性メモ
- **Home に戻る経路が2系統**: Works Page / Media Kit Page のヘッダ左リンク（`href="#"` または `#/works`）。`hashchange` ベースのSPA遷移なのでフルリロードは発生しない。
- **CTAの収束先は2点に統一**: 「Contact (`#contact`)」と「Works Page (`#/works`)」。Profile に CTA を置かない方針は [04仕様 §5](04-navigation-and-structure-spec.md#5-cta-rules-current) で明文化済み。
- **外部リンクは Works Page に集約**: Home からの直接外部離脱は Header / Footer の SNS と Contact のメールのみ。実績系URLはすべて Works Page 経由。
- **アンカー越境**: Works Page / Media Kit Page から `#contact` へリンクしているが、これは Home のセクションIDなので、現在の実装ではルートを Home に戻したうえで該当セクションへスクロールする挙動が必要。`getRoute()` は `#/...` のみ専用ページ扱いするため、`#contact` は Home 描画 + アンカースクロールで成立する（ただし `useEffect` の `scrollTo(0,0)` がルート切替時に走るため、初回スクロール後に上書きされる可能性がある点は要確認）。

## 7. 図（テキスト）
```
                ┌─────────────── Header (global) ───────────────┐
                │  Logo→#top   About  Works  Contact   Instagram │
                └────────────────────────────────────────────────┘
Home (#)
  ├─ Hero
  ├─ Concept (#concept)
  ├─ Profile (#about)
  ├─ Works (#works) ──CTA──▶ Works Page (#/works)
  │                              ├─ #featured-works
  │                              ├─ Categories (5)
  │                              ├─ #link-library ──▶ 外部30+件
  │                              ├─ ──▶ Media Kit (#/media-kit)
  │                              └─ ──▶ #contact
  ├─ Contact (#contact) ──▶ mailto / Instagram
  └─ Footer ──▶ About / Works / Contact / SNS

Media Kit (#/media-kit)
  ├─ Header ──▶ #/works  /  #contact
  ├─ Profile / Topics / Press / 依頼カード
  └─ Assets ──▶ #/works

Issue15 Audit (#/issue15-audit)  ※外部導線なし、内部確認専用
```

## 8. 確認したい未解決ポイント
- 専用ページから `#contact` へ遷移したとき、`scrollTo(0,0)` とアンカースクロールの順序が意図どおりか（[App.tsx:35-37](../App.tsx#L35-L37)）。
- Home の Hero / Concept には CTA がなく、スクロール誘導のみ。離脱率が気になる場合は、Concept 末尾に Works への導線追加を検討する余地あり（[04仕様 §6](04-navigation-and-structure-spec.md#6-duplicate-cta-policy) の重複CTA判定を要確認）。
- Footer の Instagram / Facebook URL は現状ダミー（`example.com/...`）。本番公開前に差し替えが必要。
