# Navigation and Structure Spec (2026-03-11)

## 1. Purpose
- 本ドキュメントは、現行実装の画面構造と導線を整理し、重複CTAの判断基準を明文化する。
- 対象は `App.tsx` で描画される Home と、ハッシュルーティングで切り替える専用ページ。

## 2. Route Map
- `#` or no hash: Home（1ページ構成）
- `#/works`: 活動と実績の専用ページ
- `#/media-kit`: 取材・寄稿・紹介用の簡易メディアキットページ
- `#/issue15-audit`: Issue #15 の採用前確認ページ（内部確認用）

## 3. Home Structure (Top to Bottom)
1. Header (`#top` 起点)
2. Hero
3. Concept
4. Profile (`#about`)
5. Works (`#works`)
6. Contact (`#contact`)
7. Footer

## 4. Primary Navigation
- Header / Footer のグローバルナビはセクションアンカーを使用する。
  - `About` -> `#about`
  - `Works` -> `#works`
  - `Contact` -> `#contact`

## 5. CTA Rules (Current)
- Profile
  - CTAは置かず、人物紹介と実績サマリーに役割を限定する
- Works
  - Home側は概要・数値・主CTAのみを表示する
  - 活動カテゴリの説明や外部掲載リンクはWorks Pageへ集約する
  - Destination: `#/works`
- Works Page
  - ページ冒頭で Featured / Link Library / Media Kit への導線を提示
  - カテゴリ別リンクはタブ化せず、縦方向にすべて展開する
  - 外部掲載先URLは掲載リンクセクションに集約する
- Media Kit Page
  - Works Page から導線を置く
  - 取材・寄稿・紹介前に必要な概要、話せるテーマ、掲載先、問い合わせ導線をまとめる

## 6. Duplicate-CTA Policy
- 同一目的のCTAは「近接エリアに2つ以上置かない」を原則とする。
- 例外: セクション内カード群の個別クリック（一覧/詳細への自然な導線）は許可する。
- 重複の判断基準:
  - 同一ビュー内で視認可能範囲に、同じ文言・同じ遷移先が複数ある場合は統合を検討。
  - 文言と遷移先が不一致な導線（例: 実績を見る文言で Contact へ遷移）は禁止。

## 7. Component Ownership
- Routing switch: [App.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/App.tsx)
- Home sections:
  - [components/Profile.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Profile.tsx)
  - [components/Works.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Works.tsx)
- Dedicated pages:
  - [components/WorksPage.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/WorksPage.tsx)
  - [components/MediaKitPage.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/MediaKitPage.tsx)
  - [components/Issue15AuditPage.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Issue15AuditPage.tsx)

## 8. Change Checklist
- 新しいCTAを追加する場合:
  - 文言と遷移先が一致しているか
  - 既存CTAと役割重複していないか
  - モバイル/デスクトップで重複表示になっていないか
- 新しい専用ページを追加する場合:
  - `App.tsx` の `getRoute` と route state に追加
  - Home 側からの入口リンクを最低1箇所設置
