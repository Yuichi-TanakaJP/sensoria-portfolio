# Release Checklist

## 0. Current Known Gaps
- [ ] 連絡先メールアドレスとSNS URL が暫定値
- [ ] OGP画像をブランド正式素材へ差し替え
- [ ] 本番ドメイン確定後に canonical / sitemap のURL最終調整

## 1. Functional
- [ ] Header / Footerの全リンクが有効
- [ ] モバイルメニューの開閉と遷移が正常
- [ ] 主要CTA（記事一覧・プロフィール導線）が期待通り動作

## 2. Visual QA
- [ ] Chrome / Safari / Edge で崩れなし
- [ ] 360px幅でも横スクロールなし
- [ ] Hero / Card / Profile画像が意図比率で表示
- [ ] フォント読み込み失敗時も破綻しない

## 3. Performance
- [ ] 画像を本番用に最適化（WebP/AVIF）
- [ ] 不要な読み込みを削減
- [ ] Core Web Vitals を確認（LCP/CLS/INP）

## 4. Accessibility
- [ ] H1が1つで見出し階層が適切
- [ ] キーボードのみで主要導線を操作可能
- [ ] Focus表示が視認可能
- [ ] 意味のある画像に `alt` を設定
- [ ] アイコンのみ操作要素に `aria-label` を設定

## 5. SEO
- [x] Homeの `title` / `description` 設定済み
- [x] canonical を設定
- [x] robots.txt / sitemap.xml を配置
- [ ] JSON-LD 構造化データを導入
- [x] OGP (`og:title`, `og:description`, `og:image`) を設定

## 6. Analytics
- [x] Cloudflare Web Analytics script設置済み
- [ ] 主要イベント命名を確定
- [ ] 主要CTAクリックの計測を実装
- [ ] 月次レビューの確認手順を文書化

## 7. Deployment
- [ ] `npm run build` の成功確認
- [ ] production/preview の環境設定確認
- [ ] リリースログ更新（`docs/project-log*.md`）
