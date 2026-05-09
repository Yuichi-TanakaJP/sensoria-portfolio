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
  - `/#/media-kit` Media Kit Page
  - `/#/issue15-audit` Issue #15 audit page (internal)

## 2. Page Definitions
### Page: `/`
- Goal: 五感美容の世界観と実績を短時間で伝える
- Primary CTA: `実績ページを見る`（Works）
- Secondary CTA: none
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
- Primary CTA: Featured / Link Library / Media Kit
- Main sections:
  1. Editorial hero（活動の立ち位置 + 実績サマリー）
  2. Selected Works（代表導線）
  3. Expertise（活動領域の説明）
  4. Archive（外部URLの正本）
  5. Next（Issue #15 の根拠付き実績追加への接続）

### Page: `/#/media-kit`
- Goal: 取材・寄稿・紹介前に必要な概要を短時間で確認できるようにする
- Primary CTA: Contact / Works
- Main sections:
  1. Media kit hero
  2. Profile facts
  3. Topics / press mentions / inquiry cue
  4. Assets note

## 3. Component Notes
- Reusable components:
  - [Header.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Header.tsx)
  - [Hero.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Hero.tsx)
  - [Concept.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Concept.tsx)
  - [Profile.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Profile.tsx)
  - [Works.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Works.tsx)
  - [Contact.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Contact.tsx)
  - [Footer.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/Footer.tsx)
  - [WorksPage.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/WorksPage.tsx)
  - [MediaKitPage.tsx](/c:/Users/yutaz/dev/sensoria-portfolio/components/MediaKitPage.tsx)
- Section naming rule:
  - `id` はナビゲーションリンクと一致させる（`href="#xxx"` <-> `section id="xxx"`）
- Mobile-first notes:
  - Headerはモバイルメニューあり
  - 主要コンテンツは1カラム -> 2/3カラムへ拡張されるレスポンシブ設計
