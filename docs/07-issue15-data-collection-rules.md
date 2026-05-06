# Issue #15 Data Collection Rules (2026-03-14)

## 1. Purpose
- 本ドキュメントは、Issue #15 のデータ収集でノイズ混入を防ぐための「サイト別抽出ルール」を定義する。
- 抽出対象は次の3カテゴリのみ。
  - 美術館名
  - ホテル名
  - 伝統工芸品名

## 2. Collection Flow (Visual)
```text
[URL candidate]
      |
      v
[Is domain in allowlist?] -- No --> [Drop]
      |
     Yes
      |
      v
[Is it author-owned scope URL?] -- No --> [Drop]
      |
     Yes
      |
      v
[Is target entity in text?]
  - Museum name
  - Hotel name
  - Traditional craft item name
      |
   No v
   [Keep as reference only]
      |
   Yes
      |
      v
[Normalize name + attach evidence URL]
      |
      v
[Store in dataset]
```

## 3. Site Rules Matrix
| Site | Author / Ownership Validation | Allowed URL Scope | Extract Targets | Exclude |
|---|---|---|---|---|
| `www.tour.ne.jp` | 著者ページが `blog/rikatan` であること | `https://www.tour.ne.jp/blog/rikatan/` 配下 | 美術館名 / ホテル名 / 伝統工芸品名 | 著者配下外URL、広告パーツ由来テキスト |
| `rakukatsu.jp` | 著者ページが `author/takahashi-rika` であること | `https://rakukatsu.jp/author/takahashi-rika` 配下 | 美術館名 / ホテル名 / 伝統工芸品名 | 著者配下外URL、関連記事ウィジェットのみの情報 |
| `www.biteki.com` | 本人寄稿記事である根拠（リンク集管理対象） | リンク集で管理中の個別記事URLのみ | 主にホテル名（旅記事） | サイト全体の一般記事巡回 |
| `girlsartalk.com` | 本人掲載と紐づくURLのみ | リンク集に登録済みURL、またはその代替URL確定後 | 主に伝統工芸品名 | 代替URL未確定の記事、404 URL |
| `woman.nikkei.com` | 本人導線（アンバサダー/寄稿）であること | リンク集管理対象URLのみ | 補助情報（雑誌掲載履歴側） | サイト横断クロール |
| `city.living.jp` | 本人ページ導線であること | リンク集管理対象URLのみ | 補助情報（雑誌掲載履歴側） | サイト横断クロール |
| `www.yamaha-ongaku.com` | 対象インタビューURLであること | 登録済みインタビューURLのみ | 補助情報（実績根拠） | 他ページへの拡張探索 |

## 4. Extraction Rule by Category
### 4.1 美術館名
- 「◯◯美術館」の固有名詞を優先抽出する。
- 例: `国立西洋美術館`、`オルセー美術館`
- 展覧会名のみで施設名がない場合は「候補」扱いにする。

### 4.2 ホテル名
- 「ホテル」を含む固有施設名を抽出する。
- 例: `ホテルインディゴ東京渋谷`、`フォーシーズンズホテル東京大手町`
- レストラン名のみはホテル名と分離して扱う。

### 4.3 伝統工芸品名
- 工芸ジャンル語ではなく、品目・技法の固有名詞を優先抽出する。
- 例: `薩摩切子`、`有田焼`、`大島紬`（実データ確認後に採用）
- 「伝統工芸」だけの一般語は採用しない。

## 5. Name Normalization Rules
- 表記ゆれ統一: 全角/半角、英数字、長音、括弧の揺れを統一。
- 同一施設の別表記統合: 公式表記を主キーに採用し、別名は `aliases` に保持。
- 重複管理: `normalized_name + category` を一意キーとする。

## 6. Evidence Policy
- 各抽出項目には最低1件の `evidence_url` を必須とする。
- 複数根拠がある場合は配列保持する。
- 404/403/著者不一致URLは `invalid_sources` に記録し、表示データには採用しない。

## 7. Output Schema (Draft)
```json
{
  "category": "hotel | museum | traditional_craft",
  "name": "string",
  "normalized_name": "string",
  "aliases": ["string"],
  "area": "string | null",
  "evidence_urls": ["https://..."],
  "notes": "string"
}
```

## 8. Execution Checklist
- [ ] 対象URLが allowlist と author scope を満たす
- [ ] 抽出対象が 3カテゴリのいずれかに該当する
- [ ] 一般語ではなく固有名詞で抽出できている
- [ ] 正規化と重複排除を実施した
- [ ] evidence URL を付与した
- [ ] 無効URLを invalid_sources に分離した
