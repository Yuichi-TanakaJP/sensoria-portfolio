# Navigation and Structure Spec (2026-03-11)

## 1. Purpose
- 本ドキュメントは、現行実装の画面構造と導線を整理し、重複CTAの判断基準を明文化する。
- 対象は `App.tsx` で描画される Home と、ハッシュルーティングで切り替える専用ページ。

## 2. Route Map
- `#` or no hash: Home（1ページ構成）
- `#/works`: 活動と実績の専用ページ
- `#/journal`: 記事一覧の専用ページ

## 3. Home Structure (Top to Bottom)
1. Header (`#top` 起点)
2. Hero
3. Concept
4. Featured Journal
5. Latest Journal (`#journal`)
6. Profile (`#about`)
7. Works (`#works`)
8. Contact (`#contact`)
9. Footer

## 4. Primary Navigation
- Header / Footer のグローバルナビはセクションアンカーを使用する。
  - `About` -> `#about`
  - `Journal` -> `#journal`
  - `Works` -> `#works`
  - `Contact` -> `#contact`

## 5. CTA Rules (Current)
- Featured Journal
  - CTA: `記事一覧を見る`
  - Destination: `#/journal`
- Latest Journal
  - 各記事カード: `#/journal`
  - セクション末尾ボタン: `#/journal`
- Profile
  - CTA: `詳しいプロフィール・実績を見る →`
  - Destination: `#/works`
- Works
  - 3カードすべてカード全体クリックで遷移
  - Destination: `#/works`

## 6. Duplicate-CTA Policy
- 同一目的のCTAは「近接エリアに2つ以上置かない」を原則とする。
- 例外: セクション内カード群の個別クリック（一覧/詳細への自然な導線）は許可する。
- 重複の判断基準:
  - 同一ビュー内で視認可能範囲に、同じ文言・同じ遷移先が複数ある場合は統合を検討。
  - 文言と遷移先が不一致な導線（例: 実績を見る文言で Contact へ遷移）は禁止。

## 7. Component Ownership
- Routing switch: [App.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/App.tsx)
- Home sections:
  - [components/FeaturedJournal.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/FeaturedJournal.tsx)
  - [components/LatestJournal.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/LatestJournal.tsx)
  - [components/Profile.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Profile.tsx)
  - [components/Works.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Works.tsx)
- Dedicated pages:
  - [components/WorksPage.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/WorksPage.tsx)
  - [components/JournalPage.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/JournalPage.tsx)

## 8. Change Checklist
- 新しいCTAを追加する場合:
  - 文言と遷移先が一致しているか
  - 既存CTAと役割重複していないか
  - モバイル/デスクトップで重複表示になっていないか
- 新しい専用ページを追加する場合:
  - `App.tsx` の `getRoute` と route state に追加
  - Home 側からの入口リンクを最低1箇所設置
