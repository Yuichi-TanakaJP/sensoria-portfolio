# Design Guide

## 1. Brand Direction
- Keywords: 静謐 / 知的 / 癒やし / 洗練 / 信頼
- Mood: 美術館の図録、紙の質感、余白を感じる体験
- Do not use:
  - 純白 `#FFFFFF` と純黒 `#000000`
  - 彩度の高すぎるビビッド配色
  - 過剰な影・過剰なアニメーション

## 2. Colors
- Background: `stone-50` (`#fafaf9`)
- Surface: `stone-100` (`#f5f5f4`)
- Text primary: `stone-900` (`#1c1917`)
- Text secondary: `stone-800` (`#292524`)
- Accent 1: `earth-terra` (`#b45309`)
- Accent 2: `earth-sage` (`#4d7c5f`)
- Accent 3: `earth-gold` (`#a16207`)
- Link: default `stone-600` -> hover `earth-terra`

## 3. Typography
- Heading font: `Zen Old Mincho` (fallback: `Shippori Mincho`, `Yu Mincho`, serif)
- Body font: `Zen Old Mincho` ベース
- Scale (current implementation baseline):
  - H1: `text-4xl` to `text-7xl`
  - H2: `text-2xl` to `text-4xl`
  - H3: `text-base` to `text-xl`
  - Body: `text-sm` to `text-xl`
  - Caption: `text-xs`
- Line height: `leading-relaxed` / `leading-loose` 中心
- Letter spacing: `tracking-widest` / custom trackingを積極利用

## 4. Spacing / Layout
- Grid system: Tailwind utilityベース、`max-w-screen-xl` + section単位余白
- Container width: `max-w-screen-md` または `max-w-screen-xl`
- Section spacing:
  - Standard: `py-20`
  - Large: `py-24` to `py-32`
- Mobile breakpoints: `md` / `lg` で段組み変更

## 5. Components
- Header: fixed、スクロールで半透明背景とblurへ変化
- Hero: 背景写真 + vellum layer (`bg-stone-50/60` + blur)
- Card:
  - Featured: 縦長カード、ホバーで画像拡大
  - Latest: 横長サムネ + メタ情報
- Button: stone系ベース、hoverでterraに変化
- Footer: dark stoneベース、最小情報に集約

State policy:
- default / hover / focus-visible / disabled を定義対象にする
- hover演出は控えめ（色変更・微小拡大）

Accessibility notes:
- コントラスト比を確保（特に `stone-400` 周辺テキスト）
- キーボード操作時はfocus可視化を必須化
- アイコンのみボタンには `aria-label` を付与する

## 6. Image Rules
- Photo tone: 自然光、低コントラスト、空気感重視
- Aspect ratio rules:
  - Hero: full-bleed
  - Featured: `4:5`
  - Latest: `3:2`
  - Profile: `3:4`
- Compression policy:
  - 本番はWebP/AVIF優先、LCP画像は優先最適化
- Alt text policy:
  - 装飾以外は意味のある代替テキストを付与

## 7. Motion
- Transition style: `fade-in-up` + gentle hover transitions
- Duration: 300ms to 700ms（要素役割で使い分け）
- Easing: `ease-out` / `ease-in-out`
- Reduced motion fallback:
  - 将来的に `prefers-reduced-motion` を導入し、主要アニメーションを無効化
