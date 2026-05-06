export type Issue15AuditCategory =
  | 'museum'
  | 'hotel'
  | 'traditional_craft'
  | 'media_history'
  | 'reference';

export type UrlCheckStatus =
  | 'unchecked'
  | 'valid'
  | 'redirected'
  | 'blocked'
  | 'invalid'
  | 'needs_manual_check';

export type AuthorCheckStatus =
  | 'unchecked'
  | 'confirmed'
  | 'unclear'
  | 'not_author';

export type ExtractionStatus =
  | 'not_started'
  | 'candidate_found'
  | 'no_target_found'
  | 'normalized'
  | 'approved'
  | 'rejected';

export type AuditDecision = 'unreviewed' | 'keep_candidate' | 'hold' | 'exclude' | 'approved';

export type Issue15SourceCandidate = {
  id: string;
  title: string;
  url: string;
  sourceGroup: string;
  expectedCategories: Issue15AuditCategory[];
  urlStatus: UrlCheckStatus;
  authorStatus: AuthorCheckStatus;
  extractionStatus: ExtractionStatus;
  decision: AuditDecision;
  extractedNames: string[];
  checkedAt: string | null;
  notes: string;
};

export const issue15SourceCandidates: Issue15SourceCandidate[] = [
  {
    id: 'tour-rikatan-index',
    title: 'りかたんの五感美容旅 | トラベルコ',
    url: 'https://www.tour.ne.jp/blog/rikatan/',
    sourceGroup: '旅ブログ',
    expectedCategories: ['museum', 'hotel', 'traditional_craft'],
    urlStatus: 'unchecked',
    authorStatus: 'unchecked',
    extractionStatus: 'not_started',
    decision: 'unreviewed',
    extractedNames: [],
    checkedAt: null,
    notes: '著者配下の記事一覧として扱い、個別記事URLへ展開する前の入口候補。',
  },
  {
    id: 'rakukatsu-author',
    title: '楽活 著者ページ',
    url: 'https://rakukatsu.jp/author/takahashi-rika',
    sourceGroup: '旅ブログ',
    expectedCategories: ['museum', 'hotel', 'traditional_craft'],
    urlStatus: 'unchecked',
    authorStatus: 'unchecked',
    extractionStatus: 'not_started',
    decision: 'unreviewed',
    extractedNames: [],
    checkedAt: null,
    notes: '著者ページ確認後、本人記事の個別URLのみ抽出対象にする。',
  },
  {
    id: 'biteki-wellness-plan',
    title: 'GWや夏休みはどう過ごす？ 1泊2日のウェルネスプラン | 美的.com',
    url: 'https://www.biteki.com/life-style/others/1661397',
    sourceGroup: '美容/ライフ',
    expectedCategories: ['hotel'],
    urlStatus: 'unchecked',
    authorStatus: 'unchecked',
    extractionStatus: 'not_started',
    decision: 'unreviewed',
    extractedNames: [],
    checkedAt: null,
    notes: 'リンク集管理対象URL。ホテル名抽出候補として確認する。',
  },
  {
    id: 'biteki-kirishima-trip',
    title: '美肌整う鹿児島県・霧島の温泉旅 | 美的.com',
    url: 'https://www.biteki.com/life-style/others/1660535',
    sourceGroup: '美容/ライフ',
    expectedCategories: ['hotel'],
    urlStatus: 'unchecked',
    authorStatus: 'unchecked',
    extractionStatus: 'not_started',
    decision: 'unreviewed',
    extractedNames: [],
    checkedAt: null,
    notes: 'リンク集管理対象URL。ホテル名やエリア情報の根拠として使えるか確認する。',
  },
  {
    id: 'biteki-nail-oil',
    title: '14のおすすめ ネイルオイル | 美的.com',
    url: 'https://www.biteki.com/nail/nail-howto/292503',
    sourceGroup: '美容/ライフ',
    expectedCategories: ['reference'],
    urlStatus: 'unchecked',
    authorStatus: 'unchecked',
    extractionStatus: 'not_started',
    decision: 'unreviewed',
    extractedNames: [],
    checkedAt: null,
    notes: '3カテゴリの直接候補ではないため、本人記事確認後も原則は参照扱い。',
  },
  {
    id: 'girlsartalk-traditional-craft',
    title: '伝統工芸インタビュー',
    url: 'https://girlsartalk.com/column/16874.html',
    sourceGroup: 'その他',
    expectedCategories: ['traditional_craft'],
    urlStatus: 'unchecked',
    authorStatus: 'unchecked',
    extractionStatus: 'not_started',
    decision: 'unreviewed',
    extractedNames: [],
    checkedAt: null,
    notes: '404やURL移転の可能性も含めて、本文と本人掲載の両方を確認する。',
  },
  {
    id: 'woman-nikkei-stationery-pr',
    title: '書き残すことで気持ちがスッキリする手帳活用術 | 日経xwoman',
    url: 'https://woman.nikkei.com/atcl/cons/051300011/101300034/?P=2',
    sourceGroup: '新聞/雑誌',
    expectedCategories: ['media_history'],
    urlStatus: 'unchecked',
    authorStatus: 'unchecked',
    extractionStatus: 'not_started',
    decision: 'unreviewed',
    extractedNames: [],
    checkedAt: null,
    notes: '雑誌掲載履歴・寄稿実績側の候補。3カテゴリ抽出には混ぜない。',
  },
  {
    id: 'woman-nikkei-calendar',
    title: '卓上カレンダーの活用法 | 日経xwoman',
    url: 'https://woman.nikkei.com/atcl/doors/wol/magazine/15/113000009/042000022/',
    sourceGroup: '新聞/雑誌',
    expectedCategories: ['media_history'],
    urlStatus: 'unchecked',
    authorStatus: 'unchecked',
    extractionStatus: 'not_started',
    decision: 'unreviewed',
    extractedNames: [],
    checkedAt: null,
    notes: '雑誌掲載履歴側の候補。時期と掲載種別を後で確認する。',
  },
  {
    id: 'city-living-profile',
    title: '日常に五感のスイッチを | シティリビングWeb',
    url: 'https://city.living.jp/citymate/citymate415/',
    sourceGroup: '新聞/雑誌',
    expectedCategories: ['media_history'],
    urlStatus: 'unchecked',
    authorStatus: 'unchecked',
    extractionStatus: 'not_started',
    decision: 'unreviewed',
    extractedNames: [],
    checkedAt: null,
    notes: '本人ページ導線として有効か確認する。',
  },
  {
    id: 'city-living-yokohama-ebook',
    title: 'シティリビング横浜版',
    url: 'https://book.living.jp/ebooks/cityliving/yokohama/20190208/index_h5.html',
    sourceGroup: '新聞/雑誌',
    expectedCategories: ['media_history'],
    urlStatus: 'unchecked',
    authorStatus: 'unchecked',
    extractionStatus: 'not_started',
    decision: 'unreviewed',
    extractedNames: [],
    checkedAt: null,
    notes: '媒体掲載履歴候補。本人掲載箇所を確認できる場合のみ採用候補にする。',
  },
  {
    id: 'yamaha-ambassador',
    title: 'ヤマハ音楽教室アンバサダーインタビュー',
    url: 'https://www.yamaha-ongaku.com/music-school/why_yamaha/ambassador/article08.html',
    sourceGroup: 'その他',
    expectedCategories: ['reference'],
    urlStatus: 'unchecked',
    authorStatus: 'unchecked',
    extractionStatus: 'not_started',
    decision: 'unreviewed',
    extractedNames: [],
    checkedAt: null,
    notes: '実績根拠候補。3カテゴリや雑誌掲載履歴とは分けて扱う。',
  },
];

