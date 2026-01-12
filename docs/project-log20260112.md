# Project Log – Sensoria Portfolio

## 目的
- 個人の活動・経歴を集約する基幹ホームページを作成する
- 外部メディア掲載（公式 / note / SNS）への導線を整理する
- 完成を目指さず、公開後に育てていく前提の土台を作る

## 技術スタック
- Frontend: Vite + React + TypeScript
- Hosting: Vercel
- Analytics: Cloudflare Web Analytics
- Source Control: GitHub（mainブランチを正本とする）

## 技術選定の判断
- 静的サイトで要件を満たせるため、Next.js等への過剰投資を避けた
- VercelによるGitHub連携と自動デプロイを優先
- Cookieレスで軽量なCloudflare Analyticsを採用
- Google AI StudioはPOC生成・相談用途に限定し、実装の正本はGitHubとした

## 実装内容
- Vercelへのデプロイと公開
- Cloudflare Web Analyticsの導入
- mainブランチ更新＝本番反映の運用確立

## 学び・気づき
- 「作り直す」より「公開して育てる」方が健全
- AI生成は設計と判断を人が持つことで価値を発揮する
- 基幹HPは完成品ではなく、更新を受け止める“器”
- アクセス解析は最初から“ゆるく”入れると迷わない

## 今後の方針
- 数値は週1回程度の確認に留める
- 必要に応じてWorks / Archiveを拡張
- 大きな要件変更が出た段階でフレームワークを再検討
