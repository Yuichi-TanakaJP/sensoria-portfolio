# Design Guide

## 1. Brand Direction
- Keywords: 静謐 / 知的 / 癒やし / 洗練 / 信頼
- Mood: 美術館の図録、紙の質感、余白を感じる体験
- Do not use:
  - 純白 `#FFFFFF` と純黒 `#000000`
  - 彩度の高すぎるビビッド配色
  - 過剰な影・過剰なアニメーション

## 2. Colors

### Palette (2026-05-10 一新)
配色の "色数を減らす" 方向に整理。装飾用の暖色（terra / gold）は廃止し、無彩色 stone を基調に据える。

| Role | Token | Hex | Usage |
|---|---|---|---|
| Canvas | `stone-50` | `#fafaf9` | デフォルト背景 |
| Surface | `stone-100` | `#f5f5f4` | セクション差し替え |
| Dark canvas | `stone-900` | `#1c1917` | ダーク帯（章ブレイク）/ 主 CTA 面 |
| Text primary | `stone-900` | `#1c1917` | 本文 / 見出し |
| Text secondary | `stone-700` | `#44403c` | 副見出し / リード |
| Text tertiary | `stone-500` | `#78716c` | キャプション |
| Border | `stone-200` / `stone-300` / `stone-400` | — | 罫線 |
| **Brand accent** | `earth-sage` | `#4d7c5f` | **唯一の有彩色**。Chapter 見出しのアイブロウのみ使用 |

### 使わなくなった色（将来も使わない）
- `earth-terra` (`#b45309`) — クラフト寄りでブランドに合わなかったため廃止
- `earth-gold` (`#a16207`) — 同上、廃止

> 既存実装には残っているが、新規追加はしない。リファクタ時に随時剥離。

### リンク・ホバー方針
- 通常の文字リンク: `stone-700` → hover `stone-900`
- アンダーライン使用 OK（hover 時のみ表示）
- 色のシフトでホバーを表現しない（濃度・下線・微小スケールで表す）

## 2-bis. Buttons / CTA System

3 種類だけに統一する。新規ボタンを増やす場合はまず既存に当てはめ、足りなければここを更新する。

### Primary（最重要 CTA）
- bg: `stone-900`
- text: `stone-50`
- hover: `bg-stone-700`
- 例: メインの問い合わせボタン、各ページの主導線

### Secondary（罫線型）
- bg: 透明（または `stone-50`）
- border: `stone-400`
- text: `stone-700`
- hover: `border-stone-900` + `text-stone-900`
- 例: SNS、副 CTA、Media Kit などの補助導線

### Ghost / Inline（文字リンク）
- text: `stone-700`
- hover: `text-stone-900` + `underline`
- 例: パンくず、補助テキストリンク

### 共通ルール
- すべて `focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2` を必須
- 角丸なし（直角を維持、編集物トーン）
- アニメーションは `transition-colors` のみ（色変化以外しない）
- アイコン併用時は `gap-2` 〜 `gap-3`
- 文言と遷移先の整合は [04-navigation-and-structure-spec.md](04-navigation-and-structure-spec.md) §5 を参照

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
  - 本番は WebP/AVIF 優先、LCP 画像は優先最適化
  - 配信は `<picture>` で AVIF → WebP → JPEG/PNG のフォールバック順で並べる
- Loading attributes:
  - LCP 候補（Hero / Featured 1 枚目）: `loading="eager"` + `decoding="sync"` + `fetchpriority="high"`
  - それ以外: `loading="lazy"` + `decoding="async"`
- Alt text policy:
  - 装飾以外は意味のある代替テキストを付与
  - 装飾画像は `alt=""` + `aria-hidden="true"` を併用

## 7. Motion
- Transition style: `fade-in-up` + gentle hover transitions
- Duration: 300ms to 700ms（要素役割で使い分け）
- Easing: `ease-out` / `ease-in-out`
- Reduced motion fallback:
  - 将来的に `prefers-reduced-motion` を導入し、主要アニメーションを無効化
