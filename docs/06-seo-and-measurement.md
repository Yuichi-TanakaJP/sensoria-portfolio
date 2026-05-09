# SEO and Measurement Plan

## 1. SEO Basics
- Domain: Custom domain not fixed in repository (define when production domain is decided)
- Canonical policy: 全ページに自己参照canonicalを設定
- Index policy: 本番のみindex、preview環境はnoindex推奨
- Robots / sitemap location:
  - `/robots.txt`
  - `/sitemap.xml`
  - 実装済み（`public/robots.txt`, `public/sitemap.xml`）

## 2. Metadata by Page
Current site is a single page (`/`). Other rows are future expansion.

| Page | Title | Description | Main Keyword | Notes |
|---|---|---|---|---|
| `/` | Sensoria - 五感で紡ぐ、美の旅路 - | 五感美容をテーマにした上質なポートフォリオ・Webマガジンサイト。アート、旅、美容を通じた美意識の記録。 | 五感美容 / アート 旅 美容 | 実装済み (`index.html`, `metadata.json`) |
| `/works` | Works | 実績一覧 | ポートフォリオ 実績 | 将来ページ |
| `/journal` | Journal | 記事一覧 | 美容コラム | 将来ページ |
| `/profile` | Profile | プロフィール詳細 | ライター プロフィール | 将来ページ |

## 3. Heading Structure
- H1 policy (one per page): 1ページ1つを原則（Hero内のメインコピー）
- H2/H3 policy: セクション単位にH2、カードタイトルはH3
- Internal link policy:
  - Header / Footerナビは実在する `id` のみ設定
  - `#about` / `#journal` / `#works` / `#contact` のアンカー導線を実装済み

## 4. Structured Data
- Type:
  - `WebSite`（初期）
  - `Person`（プロフィール強化時）
  - `Article`（記事詳細ページ追加時）
- Target pages: `/` から段階導入
- JSON-LD owner: Owner

## 5. Analytics Setup
- Tool: Cloudflare Web Analytics（`index.html` にbeacon script設置済み）
- Environment separation:
  - production: enable
  - preview/dev: optional
- Naming rules:
  - event名: `verb_object_location` 形式（例: `click_cta_journal_footer`）
  - parameter名: `snake_case`

## 6. Event Definitions
Cloudflare標準計測を維持しつつ、必要ならカスタムイベント追加。

| Event Name | Trigger | Parameters | Goal Type | Owner |
|---|---|---|---|---|
| `page_view_home` | `/` page loaded | `path` | Traffic | Owner |
| `click_nav_anchor` | Header/Footer nav click | `label`, `target_id` | Engagement | Owner |
| `click_cta_journal` | 「記事一覧を見る」クリック | `section`, `label` | Engagement | Owner |
| `click_profile_detail` | 「詳しいプロフィール・実績を見る」クリック | `section` | Engagement | Owner |
| `click_external_link` | SNS/外部リンククリック | `url`, `location` | Conversion assist | Owner |

## 7. KPI Mapping
- KPI 1: 回遊行動（スクロール + CTAクリック）
  - events: `click_nav_anchor`, `click_cta_journal`, `click_profile_detail`
- KPI 2: 外部導線の実行
  - events: `click_external_link`
- Dashboard URL: Cloudflare Web Analytics dashboard (project-level)
