# Page Structure

## 1. Sitemap / URL Policy
- URL policy: 現状は単一ページ `/` + セクションアンカー運用
- Language policy: 日本語メイン（UIラベルは一部英語）
- Current map:
  - `/` Home (single page)
  - `/#concept` Concept
  - `/#featured` Featured Journal
  - `/#journal` Latest Journal
  - `/#about` Profile
  - `/#works` Works
  - `/#contact` Contact

## 2. Page Definitions
### Page: `/`
- Goal: 五感美容の世界観と実績を短時間で伝える
- Primary CTA: `記事一覧を見る`（Latest Journal末尾）
- Secondary CTA:
  - `VIEW ALL JOURNAL`（Featured -> Journal）
  - `詳しいプロフィール・実績を見る`
- Main sections (top to bottom):
  1. Header (fixed nav)
  2. Hero
  3. Concept (`#concept`)
  4. Featured Journal (`#featured`)
  5. Latest Journal (`#journal`)
  6. Profile (`#about`)
  7. Works (`#works`)
  8. Contact (`#contact`)
  9. Footer
- Required assets:
  - Hero image
  - Featured article images x3
  - Latest article images x3
  - Profile image x1
- Success condition:
  - 主要CTAクリックが継続発生
  - Profileセクションまでの到達率が一定以上

## 3. Component Notes
- Reusable components:
  - [Header.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Header.tsx)
  - [Hero.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Hero.tsx)
  - [Concept.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Concept.tsx)
  - [FeaturedJournal.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/FeaturedJournal.tsx)
  - [LatestJournal.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/LatestJournal.tsx)
  - [Profile.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Profile.tsx)
  - [Works.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Works.tsx)
  - [Contact.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Contact.tsx)
  - [Footer.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Footer.tsx)
- Section naming rule:
  - `id` はナビゲーションリンクと一致させる（`href="#xxx"` <-> `section id="xxx"`）
- Mobile-first notes:
  - Headerはモバイルメニューあり
  - 主要コンテンツは1カラム -> 2/3カラムへ拡張されるレスポンシブ設計
