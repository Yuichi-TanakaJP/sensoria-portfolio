# Page Structure

## 1. Sitemap / URL Policy
- URL policy: 現状は単一ページ `/` + セクションアンカー運用
- Language policy: 日本語メイン（UIラベルは一部英語）
- Current map:
  - `/` Home (single page)
  - `/#concept` Concept
  - `/#about` Profile
  - `/#works` Works
  - `/#contact` Contact
  - `/#/works` Works Page

## 2. Page Definitions
### Page: `/`
- Goal: 五感美容の世界観と実績を短時間で伝える
- Primary CTA: `実績ページを見る`（Works）
- Secondary CTA:
  - `詳しいプロフィール・実績を見る`
- Main sections (top to bottom):
  1. Header (fixed nav)
  2. Hero
  3. Concept (`#concept`)
  4. Profile (`#about`)
  5. Works (`#works`, overview + CTA only)
  6. Contact (`#contact`)
  7. Footer
- Required assets:
  - Hero image
  - Profile image x1
- Success condition:
  - 主要CTAクリックが継続発生
  - Profileセクションまでの到達率が一定以上

### Page: `/#/works`
- Goal: 掲載実績、外部リンク、取材実績を集約して確認できるようにする
- Primary CTA: 主要リンク / カテゴリ別掲載リンク
- Main sections:
  1. Works intro
  2. 主要リンク（カテゴリへのページ内ショートカット）
  3. 活動カテゴリ（活動領域の説明）
  4. 掲載リンク（外部URLの正本）

## 3. Component Notes
- Reusable components:
  - [Header.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Header.tsx)
  - [Hero.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Hero.tsx)
  - [Concept.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Concept.tsx)
  - [Profile.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Profile.tsx)
  - [Works.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Works.tsx)
  - [Contact.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Contact.tsx)
  - [Footer.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Footer.tsx)
- Section naming rule:
  - `id` はナビゲーションリンクと一致させる（`href="#xxx"` <-> `section id="xxx"`）
- Mobile-first notes:
  - Headerはモバイルメニューあり
  - 主要コンテンツは1カラム -> 2/3カラムへ拡張されるレスポンシブ設計
