# Navigation and Structure Spec (2026-03-11)

## 1. Purpose
- 本ドキュメントは、現行実装の画面構造と導線を整理し、重複CTAの判断基準を明文化する。
- 対象は `App.tsx` で描画される Home と、ハッシュルーティングで切り替える専用ページ。

## 2. Route Map
- `#` or no hash: Home（1ページ構成）
- `#/works`: 活動と実績の専用ページ

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
  - CTA: `詳しいプロフィール・実績を見る →`
  - Destination: `#/works`
- Works
  - Home側は概要・数値・主CTAのみを表示する
  - 活動カテゴリの説明や外部掲載リンクはWorks Pageへ集約する
  - Destination: `#/works`
- Works Page
  - ページ冒頭でカテゴリへの主要リンクを提示
  - カテゴリ別リンクはタブ化せず、縦方向にすべて展開する
  - 外部掲載先URLは掲載リンクセクションに集約する

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

## 8. Change Checklist
- 新しいCTAを追加する場合:
  - 文言と遷移先が一致しているか
  - 既存CTAと役割重複していないか
  - モバイル/デスクトップで重複表示になっていないか
- 新しい専用ページを追加する場合:
  - `App.tsx` の `getRoute` と route state に追加
  - Home 側からの入口リンクを最低1箇所設置
