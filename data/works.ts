import {
  FeaturedWork,
  WorksDetailItem,
  WorksLinkCategory,
  WorksMetric,
} from '../types';

export const worksMetrics: WorksMetric[] = [
  {
    value: '300+',
    label: 'Articles',
    note: '美容、旅、暮らし、文化を横断する記事制作',
  },
  {
    value: '5',
    label: 'Fields',
    note: 'Beauty / Travel / Editorial / Audio / Interview',
  },
  {
    value: '1',
    label: 'Sensory Lens',
    note: '五感で体験を読み解き、伝わる言葉へ整える視点',
  },
];

export const featuredWorks: FeaturedWork[] = [
  {
    title: '美的.com ウェルネス旅企画',
    label: 'Beauty Trip',
    summary: '美容視点で旅の体験価値を編み直し、読者が行動に移しやすい導線へ。',
    url: 'https://www.biteki.com/life-style/others/1661397',
  },
  {
    title: 'りかたんの五感美容旅',
    label: 'Travel Journal',
    summary: '土地の空気、食、香り、肌感覚を拾い上げる旅ブログのアーカイブ。',
    url: 'https://www.tour.ne.jp/blog/rikatan/',
  },
  {
    title: 'Voicy 美容健康アーカイブ',
    label: 'Audio',
    summary: '日々のセルフケアを、声でやわらかく届ける継続配信。',
    url: 'https://voicy.jp/channel/1073/227019',
  },
];

export const worksDetailItems: WorksDetailItem[] = [
  {
    title: '美容・ライフスタイル系メディア掲載',
    category: 'Beauty Media',
    overview: '美的、anan Beauty＋、CREA、Hanakoなどで、美容・ライフスタイルを軸にした体験型コンテンツを継続発信。',
    tone: '体験を読者の暮らしへ接続する、やわらかな実用性。',
  },
  {
    title: '新聞・雑誌・女性向け媒体での連載/寄稿',
    category: 'Editorial',
    overview: '日経x woman、シティリビングなどで、日常と美意識を結ぶテーマの記事を掲載。',
    tone: '媒体トーンを尊重しながら、生活者の視点で整理。',
  },
  {
    title: '旅行・ブログ領域の発信',
    category: 'Travel Blog',
    overview: 'トラベルコ「りかたんの五感美容旅」や著者ページを通じて、旅と美容を横断したコンテンツを発信。',
    tone: '土地の魅力を五感で拾い、読み物として残す視点。',
  },
  {
    title: '音声メディアでの継続配信',
    category: 'Audio',
    overview: 'Voicyで美容健康を軸に、習慣・栄養・睡眠・セルフケアなど幅広いテーマを継続発信。',
    tone: '短く聞けて、今日の行動に移しやすい健康美容の話題。',
  },
  {
    title: 'インタビュー・外部掲載',
    category: 'Interview',
    overview: '伝統工芸、ヤマハ音楽教室アンバサダーなど、外部サイトでのインタビュー・掲載実績。',
    tone: '文化や活動背景を、第三者媒体の文脈で届ける実績。',
  },
];

export const achievementLinkCategories: WorksLinkCategory[] = [
  {
    name: '美容/ライフ',
    lead: '美容、ウェルネス旅、体験レポートを中心にした掲載先です。',
    slug: 'beauty-life',
    items: [
      { title: '美的', url: 'https://www.biteki.com/', mediaName: '美的.com', topic: ['美容'] },
      { title: 'GWや夏休みはどう過ごす？ 心も体もイキイキと過ごせる1泊2日のウェルネスプランを美容賢者が提案', url: 'https://www.biteki.com/life-style/others/1661397', mediaName: '美的.com', topic: ['美容', '旅'] },
      { title: '〖GW1泊2日の美トリップ〗美肌整う鹿児島県・霧島の温泉旅｜天然の"泥パック"で全身すべすべに♪', url: 'https://www.biteki.com/life-style/others/1660535', mediaName: '美的.com', topic: ['美容', '旅'] },
      { title: '〖14のおすすめ〗ネイルオイル、人気で優秀なヤツ集めました！', url: 'https://www.biteki.com/nail/nail-howto/292503', mediaName: '美的.com', topic: ['美容'] },
      { title: 'anan Beauty ＋', url: 'https://plus.ananweb.jp/', mediaName: 'anan Beauty＋', topic: ['美容'] },
      { title: 'CREAアンバサダー', url: 'https://crea.bunshun.jp/list/author/64993f21b576224852000012', mediaName: 'CREA', topic: ['美容', 'ライフ'] },
      { title: 'ハナコラボJOURNAL', url: 'https://hanako.tokyo/tags/hanako-lab-journal/', mediaName: 'Hanako Web', topic: ['ライフ'] },
      { title: '米肌 beauty channel', url: 'https://www.instagram.com/', mediaName: 'Instagram', topic: ['美容'] },
    ],
  },
  {
    name: '新聞/雑誌',
    lead: '女性向け媒体を中心に、アンバサダー・連載・記事掲載の導線をまとめています。',
    slug: 'editorial',
    items: [
      { title: '日経x womanアンバサダー', url: 'https://woman.nikkei.com/', mediaName: '日経xwoman', topic: ['ライフ'] },
      { title: '書き残すことで気持ちがスッキリする手帳活用術［PR］', url: 'https://woman.nikkei.com/atcl/cons/051300011/101300034/?P=2', mediaName: '日経xwoman', topic: ['ライフ'] },
      { title: '突然の予定変更もOK！卓上カレンダーの活用法とは〖日経WOMAN16年6月号〗', url: 'https://woman.nikkei.com/atcl/doors/wol/magazine/15/113000009/042000022/', mediaName: '日経xwoman', topic: ['ライフ'], year: 2016 },
      { title: '日常に五感のスイッチを', url: 'https://city.living.jp/citymate/citymate415/', mediaName: 'シティリビングWeb', topic: ['ライフ', '五感美容'] },
      { title: 'シティリビング横浜版', url: 'https://book.living.jp/ebooks/cityliving/yokohama/20190208/index_h5.html', mediaName: 'シティリビング', topic: ['ライフ'], year: 2019 },
    ],
  },
  {
    name: '旅ブログ',
    lead: '旅と感性をテーマにしたブログ・著者ページのアーカイブです。',
    slug: 'travel-blog',
    items: [
      { title: 'りかたんの五感美容旅', url: 'https://www.tour.ne.jp/blog/rikatan/', mediaName: 'トラベルコ', topic: ['旅', '美容'] },
      { title: '楽活 著者ページ', url: 'https://rakukatsu.jp/author/takahashi-rika', mediaName: '楽活', topic: ['ライフ'] },
    ],
  },
  {
    name: 'Voicy',
    lead: 'Voicy「美容健康」チャンネルで、習慣・栄養・睡眠・セルフケアを継続配信。代表的な回をピックアップしています。',
    slug: 'voicy',
    displayLimit: 4,
    viewAllUrl: 'https://voicy.jp/channel/1073',
    viewAllLabel: '全 18 エピソードを Voicy で聴く',
    items: [
      { title: 'アートの力で心身共にキレイで健康に！', url: 'https://voicy.jp/channel/1073/227019', mediaName: 'Voicy 美容健康', topic: ['美容', 'アート'] },
      { title: '二の腕と猫背に効くエクササイズとは？', url: 'https://voicy.jp/channel/1073/223984', mediaName: 'Voicy 美容健康', topic: ['美容', '健康'] },
      { title: 'まずはお口から！大病防ぐオーラルケア', url: 'https://voicy.jp/channel/1073/220292', mediaName: 'Voicy 美容健康', topic: ['健康'] },
      { title: 'りんご酢の取り入れ方について', url: 'https://voicy.jp/channel/1073/218281', mediaName: 'Voicy 美容健康', topic: ['健康'] },
      { title: '意外と知らない！？日本茶の魅力について', url: 'https://voicy.jp/channel/1073/214884', mediaName: 'Voicy 美容健康', topic: ['健康', '文化'] },
      { title: '人気読者モデルオススメ美容法とは？', url: 'https://voicy.jp/channel/1073/198824', mediaName: 'Voicy 美容健康', topic: ['美容'] },
      { title: '健康美容の味方！マヌカハニーについて', url: 'https://voicy.jp/channel/1073/200159', mediaName: 'Voicy 美容健康', topic: ['健康'] },
      { title: 'うま味の秘密を知る！かつお節の魅力', url: 'https://voicy.jp/channel/1073/198829', mediaName: 'Voicy 美容健康', topic: ['健康', '文化'] },
      { title: 'もっと大切にしたい！睡眠の改善法', url: 'https://voicy.jp/channel/1073/194995', mediaName: 'Voicy 美容健康', topic: ['健康'] },
      { title: '早期発見に必要ながん検診について', url: 'https://voicy.jp/channel/1073/192909', mediaName: 'Voicy 美容健康', topic: ['健康'] },
      { title: '美と健康に欠かせない味噌の魅力とは？', url: 'https://voicy.jp/channel/1073/191567', mediaName: 'Voicy 美容健康', topic: ['健康', '文化'] },
      { title: '歯周病も口臭もあいうべ体操で予防！？', url: 'https://voicy.jp/channel/1073/188336', mediaName: 'Voicy 美容健康', topic: ['健康'] },
      { title: '毎日1分！身体が軽くなる習慣', url: 'https://voicy.jp/channel/1073/171131', mediaName: 'Voicy 美容健康', topic: ['健康'] },
      { title: '胃カメラの受け方と胃の健康を守る方法', url: 'https://voicy.jp/channel/1073/178254', mediaName: 'Voicy 美容健康', topic: ['健康'] },
      { title: '香りの活用法で人生が豊かになる方法', url: 'https://voicy.jp/channel/1073/179146', mediaName: 'Voicy 美容健康', topic: ['美容', 'ライフ'] },
      { title: '好感度UP！自分に似合う色の見つけ方', url: 'https://voicy.jp/channel/1073/172049', mediaName: 'Voicy 美容健康', topic: ['美容'] },
      { title: '見た目の印象を変える髪のお手入れ方法', url: 'https://voicy.jp/channel/1073/167200', mediaName: 'Voicy 美容健康', topic: ['美容'] },
      { title: '呼吸法で不安を瞬間リフレッシュ！', url: 'https://voicy.jp/channel/1073/170892', mediaName: 'Voicy 美容健康', topic: ['健康'] },
    ],
  },
  {
    name: 'その他',
    lead: '外部サイトでのインタビュー掲載・アンバサダー掲載です。',
    slug: 'other',
    items: [
      { title: '伝統工芸インタビュー', url: 'https://girlsartalk.com/column/16874.html', mediaName: 'Girls Art Talk', topic: ['アート', '文化'] },
      { title: 'ヤマハ音楽教室アンバサダーインタビュー', url: 'https://www.yamaha-ongaku.com/music-school/why_yamaha/ambassador/article08.html', mediaName: 'ヤマハ音楽教室', topic: ['文化'] },
    ],
  },
];
