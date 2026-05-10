# Color Palette References (Fashion / Editorial Web)

ファッション誌・カルチャー誌系 Web サイトの配色を観察し、Sensoria 用の色設計の選択肢として整理する。最終決定は [02-design-guide.md](02-design-guide.md) に反映する。本書は **採用候補のメニュー** であり、実装ルールではない。

調査対象（一次観察 / 補助調査）:
- 国内: GINZA, Hanako, 美的, Fashion Press, an・an
- 海外: VOGUE, T Magazine (NYT), KINFOLK, Cereal, AnOther, MR PORTER, Departures
- 補助参照: 美術館図録 (MoMA / TATE) のオンラインカタログ系

## 観察から見えた共通原則

1. **背景は強烈な白を避ける** — 多くは `#fafaf9` や `#f7f5f2` のような微妙にウォームな白
2. **テキストは純黒を避ける** — `#1c1917` 〜 `#2a2a2a` 帯のチャコール
3. **アクセントは原則 1 色** — 複数アクセントは特集ページ単位でテーマカラーを変える方式が主流
4. **ボタンは "目立たせない"** — 罫線型 / 文字＋下線型が中心。塗りつぶし CTA は「予約 / 購入」のような変換目的の時だけ
5. **タイポグラフィでメリハリ** — 色ではなくフォントサイズ・ウェイト・余白で階層を作る

---

## Pattern A: Editorial Minimal（KINFOLK / Cereal 系）

最もクリーンで知性的な印象。読み物の質を訴求する写真誌・季刊誌系。

| Role | Token | Hex | 補足 |
|---|---|---|---|
| Canvas | warm-white | `#fafaf9` 〜 `#f7f5f2` | 紙の白に近い |
| Surface | warm-cream | `#f0ede8` | 章切れ |
| Text primary | charcoal | `#1c1917` | 黒すぎない |
| Text secondary | mute | `#5b554f` | リード |
| Accent | none | — | 完全モノクロ |

**特徴**: アクセント色なし。写真とタイポグラフィだけで構成。
**向き**: 記事を読ませることが主目的のサイト。文字量が多くても読み疲れしない。
**不向き**: ECや誘導コンバージョンを稼ぎたいサイト（CTA が地味すぎる）。
**Sensoria への適用度**: ◎（現在の方向性に最も近い）。

---

## Pattern B: Japanese Sumi（和の墨・楮 系）

Hanako / GINZA / 美的 などの日本の女性誌に近い。和紙 + 墨 + 微小なアクセント。

| Role | Token | Hex |
|---|---|---|
| Canvas | washi | `#f9f6f0` |
| Surface | tracing | `#ece8df` |
| Text primary | sumi | `#1f1d1a` |
| Text secondary | ink-mute | `#615b51` |
| Accent | vermillion | `#a83a3a` |

**特徴**: 和紙のような微妙にウォームな下地に、伝統色の朱（vermillion）を点で使う。
**向き**: 和の世界観を出したいエディトリアル。美容・旅・伝統工芸との相性◎。
**不向き**: モダン / シャープに見せたい場合は朱が古く見える。
**Sensoria への適用度**: ○（"五感美容 / 旅 / アート" のテーマには合う。朱の使い方を絞れば現在の sage と同水準で動く）。

---

## Pattern C: High Fashion Mono（VOGUE / Harper's Bazaar 系）

ブラック・ホワイトのコントラストを最大化、要所にゴールド。

| Role | Token | Hex |
|---|---|---|
| Canvas | white | `#ffffff` |
| Surface | cool-grey | `#eeeeee` |
| Text primary | black | `#000000` |
| Text secondary | grey | `#666666` |
| Accent | gold | `#b8860b` 〜 `#d4af37` |

**特徴**: 極端なコントラスト、ゴールドは "ラベル / アンカー" として効かせる。
**向き**: ハイファッション、ラグジュアリー商品系。
**不向き**: 静謐さや余白の繊細さを出したい場合は冷たく見える。
**Sensoria への適用度**: △（ブランドキーワード "静謐" と "癒やし" にややそぐわない。ゴールドの使い方は参考になる）。

---

## Pattern D: Quiet Luxe（T Magazine / MR PORTER 系）

クリームベース + 深いインク + 控えめなブロンズ / シャンパン。読み物としても EC としても機能する万能型。

| Role | Token | Hex |
|---|---|---|
| Canvas | cream | `#f5efe6` |
| Surface | warm-grey | `#e8e1d6` |
| Text primary | ink | `#1a1816` |
| Text secondary | warm-mute | `#65605a` |
| Accent | bronze | `#7a5a37` |
| Optional | champagne | `#c9b48a` |

**特徴**: 明確に "高級" な印象を出すが嫌味がない。ボタンは罫線型 + ブロンズ文字が中心。
**向き**: ホテル / 旅 / 高級ライフスタイル系。
**不向き**: 若者向けポップなコンテンツ。
**Sensoria への適用度**: ◎（参考画像のホテル / 美術館 / 都市夜景の世界観と最も整合）。

---

## Pattern E: Architectural / Museum（Cereal / AnOther / MoMA 系）

オフホワイト + 純インクのみ。罫線で構成、装飾色ゼロ。

| Role | Token | Hex |
|---|---|---|
| Canvas | off-white | `#f4f2ee` |
| Surface | paper | `#e8e6e0` |
| Text primary | ink | `#161514` |
| Text secondary | grey-warm | `#605c56` |
| Accent | none / 写真のみ | — |

**特徴**: 完全モノクロ。差別化はタイポグラフィと写真の質感だけ。
**向き**: 美術館図録、ミニマルブランド、写真主体ポートフォリオ。
**不向き**: 文字量が少ないと寒く見える。
**Sensoria への適用度**: ○（現状の Pattern A 路線と差はわずか。よりシビアにしたい時に切替可能）。

---

## Pattern F: Modern Sumi + Pop（an・an / FIGARO 系）

ベースは和紙系、見出しに鮮やかな彩色（赤 / 青 / 黄）を回転で使う特集ごとのテーマカラー。

| Role | Token | Hex |
|---|---|---|
| Canvas | washi | `#f9f6f0` |
| Surface | section-tint | feature ごとに変動 |
| Text primary | charcoal | `#1f1d1a` |
| Theme color | feature ごと | `#c2453a` (red) / `#3a597a` (indigo) / `#c8a64b` (yellow ochre) など |

**特徴**: 「特集ごとに色変え」の仕組み。ベースは固定、要素は動かない。
**向き**: 連載や特集ごとに表情を変えたい雑誌型。
**不向き**: ブランドの一貫性を最優先するポートフォリオ系。
**Sensoria への適用度**: △（記事ごとに色を変えるのは現在の規模には過剰。将来 Journal 機能を持たせる場合の選択肢）。

---

## Pattern G: Dark Editorial（モダンラグジュアリー / 夜系）

dark-first 設計。深い墨地を canvas にし、文字は warm white、アクセントに champagne。

| Role | Token | Hex |
|---|---|---|
| Canvas | midnight | `#1a1816` |
| Surface | deep-grey | `#2a2724` |
| Text primary | warm-white | `#f5efe6` |
| Text secondary | grey-warm | `#a39d96` |
| Accent | champagne | `#c9b48a` |

**特徴**: 全面ダーク。夜景・ホテル・現代美術と相性◎。
**向き**: 高級ラウンジ、ナイトライフ、夜景中心のコンテンツ。
**不向き**: 全面ダークは長文読み物に向かない（疲労）。
**Sensoria への適用度**: ○（**Concept セクションのダーク帯**を全面化する選択肢。一部ページだけ dark にすると差別化が強くなる）。

---

## 比較表

| Pattern | アクセント | 雰囲気 | Sensoria 適用度 |
|---|---|---|---|
| A. Editorial Minimal | なし | 静謐・知的 | ◎ |
| B. Japanese Sumi | 朱 | 和・伝統 | ○ |
| C. High Fashion Mono | 金 | 強い・冷たい | △ |
| D. Quiet Luxe | ブロンズ | 高級・温かい | ◎ |
| E. Architectural | なし | ミニマル・図録 | ○ |
| F. Modern Sumi + Pop | 特集色 | 雑誌・特集型 | △ |
| G. Dark Editorial | シャンパン | 夜・ラグジュアリー | ○ |

## 推奨される検討の道筋

1. **現在の方向（Pattern A 寄り＋ sage）を磨き続ける** — 最小工数、ブランド方針と整合
2. **D に寄せる** — クリーム + インク + ブロンズ。参考画像の世界観と最も近い
3. **A 全体 + G で 1〜2 セクションだけ dark** — 既に Concept がダーク帯の片鱗。Hero or Featured も部分 dark にすると "夜・ラグジュアリー" の側面が立つ
4. **B または F は未来の Journal 機能拡張時に検討** — 連載・特集が出てきた段階で

## 次の意思決定

- A のまま行く → 何もしない（[02-design-guide.md](02-design-guide.md) のとおり）
- D へ移行する → docs を D の token に書き換え、コンポーネント側を一斉置換する PR
- A + G 部分採用 → ダーク化したいセクション（Featured Hero など）を個別に dark 化

参考画像（rika05181 のラウンジ夜景・ホテル・美術館・ヘリポート）の総合トーンからは **D もしくは A + G の混在** が一番自然に見える、というのが本書の所感。
