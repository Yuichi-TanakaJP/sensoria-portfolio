import React from 'react';

type DetailItem = {
  title: string;
  category: string;
  overview: string;
  achievements: string[];
};

type LinkItem = {
  title: string;
  url: string;
  publishedAt?: string;
  cta?: 'Visit' | 'Read' | 'Listen' | 'Follow';
};

type LinkCategory = {
  name: string;
  lead: string;
  accent: string;
  items: LinkItem[];
};

const sortByRecent = (items: LinkItem[]): LinkItem[] => {
  return [...items].sort((a, b) => {
    const ad = a.publishedAt ? Date.parse(a.publishedAt) : Number.NEGATIVE_INFINITY;
    const bd = b.publishedAt ? Date.parse(b.publishedAt) : Number.NEGATIVE_INFINITY;
    return bd - ad;
  });
};

const getCta = (item: LinkItem): LinkItem['cta'] => {
  if (item.cta) {
    return item.cta;
  }
  if (item.url.includes('instagram.com')) {
    return 'Follow';
  }
  if (item.url.includes('voicy.jp')) {
    return 'Listen';
  }
  if (item.url.includes('biteki.com') || item.url.includes('nikkei.com')) {
    return 'Read';
  }
  return 'Visit';
};

const detailItems: DetailItem[] = [
  {
    title: '美容・ライフスタイル系メディア掲載',
    category: 'Beauty Media',
    overview: '美的、anan Beauty＋、CREA、Hanakoなどで、美容・ライフスタイルを軸にした体験型コンテンツを継続発信。',
    achievements: [
      '美容・ウェルネス領域での取材記事・特集記事を掲載',
      '体験価値が伝わる構成とコピーの設計',
      '媒体トーンに沿った継続的な寄稿',
    ],
  },
  {
    title: '新聞・雑誌・女性向け媒体での連載/寄稿',
    category: 'Editorial',
    overview: '日経x woman、シティリビングなどで、日常と美意識を結ぶテーマの記事を掲載。',
    achievements: [
      'アンバサダー・寄稿記事を通じた継続発信',
      '読者層に合わせた実用テーマの企画',
      '紙面・Web両方での掲載実績',
    ],
  },
  {
    title: '旅行・ブログ領域の発信',
    category: 'Travel Blog',
    overview: 'トラベルコ「りかたんの五感美容旅」や著者ページを通じて、旅と美容を横断したコンテンツを発信。',
    achievements: [
      '旅先体験を美容視点で再構成した記事展開',
      'シリーズ運用によるテーマ蓄積',
      'プロフィール導線からの一覧回遊',
    ],
  },
  {
    title: '音声メディアでの継続配信',
    category: 'Audio',
    overview: 'Voicyで美容健康を軸に、習慣・栄養・睡眠・セルフケアなど幅広いテーマを継続発信。',
    achievements: [
      '単発ではなく連続企画として配信アーカイブを構築',
      '日常で実践しやすい健康美容テーマを選定',
      '視聴しやすい短尺構成で情報を整理',
    ],
  },
  {
    title: 'インタビュー・外部掲載',
    category: 'Interview',
    overview: '伝統工芸、ヤマハ音楽教室アンバサダーなど、外部サイトでのインタビュー・掲載実績。',
    achievements: [
      '専門分野・文化領域を横断した取材対応',
      'アンバサダーとしての活動背景を発信',
      '第三者媒体での信頼性強化に寄与',
    ],
  },
];

const achievementLinkCategories: LinkCategory[] = [
  {
    name: 'SNS',
    lead: 'Instagramを起点に、日々の発信と最新情報を更新しています。',
    accent: 'from-rose-100 via-orange-50 to-stone-50',
    items: [{ title: 'Instagram', url: 'https://instagram.com/rika05181', cta: 'Follow' }],
  },
  {
    name: '美容・ライフスタイル系メディア',
    lead: '美容、ウェルネス旅、体験レポートを中心にした掲載先です。',
    accent: 'from-amber-50 via-orange-50 to-stone-50',
    items: [
      { title: '美的', url: 'https://www.biteki.com/' },
      { title: 'GWや夏休みはどう過ごす？ 心も体もイキイキと過ごせる1泊2日のウェルネスプランを美容賢者が提案 | 美的.com', url: 'https://www.biteki.com/life-style/others/1661397' },
      { title: '〖GW1泊2日の美トリップ〗美肌整う鹿児島県・霧島の温泉旅｜天然の“泥パック”で全身すべすべに♪ | 美的.com', url: 'https://www.biteki.com/life-style/others/1660535' },
      { title: '〖14のおすすめ〗ネイルオイル、人気で優秀なヤツ集めました！ | 美的.com', url: 'https://www.biteki.com/nail/nail-howto/292503' },
      { title: 'anan Beauty ＋', url: 'https://plus.ananweb.jp/' },
      { title: 'CREAアンバサダー', url: 'https://crea.bunshun.jp/list/author/64993f21b576224852000012' },
      { title: 'ハナコラボJOURNAL | Hanako Web', url: 'https://hanako.tokyo/tags/hanako-lab-journal/' },
      { title: '米肌 beauty channel', url: 'https://www.instagram.com/' },
    ],
  },
  {
    name: '新聞・雑誌・女性向けメディア',
    lead: '女性向け媒体を中心に、アンバサダー・連載・記事掲載の導線をまとめています。',
    accent: 'from-sky-50 via-cyan-50 to-stone-50',
    items: [
      { title: '日経x womanアンバサダー', url: 'https://woman.nikkei.com/' },
      { title: '書き残すことで気持ちがスッキリする手帳活用術［PR］（2ページ目）：日経xwoman', url: 'https://woman.nikkei.com/atcl/cons/051300011/101300034/?P=2' },
      { title: '突然の予定変更もOK！卓上カレンダーの活用法とは〖日経WOMAN16年6月号〗：日経xwoman', url: 'https://woman.nikkei.com/atcl/doors/wol/magazine/15/113000009/042000022/' },
      { title: '日常に五感のスイッチを｜シティリビングWeb', url: 'https://city.living.jp/citymate/citymate415/' },
      { title: 'シティリビング横浜版', url: 'https://book.living.jp/ebooks/cityliving/yokohama/20190208/index_h5.html' },
    ],
  },
  {
    name: '旅行・ブログ系',
    lead: '旅と感性をテーマにしたブログ・著者ページのアーカイブです。',
    accent: 'from-emerald-50 via-teal-50 to-stone-50',
    items: [
      { title: 'りかたんの五感美容旅 | トラベルコ', url: 'https://www.tour.ne.jp/blog/rikatan/' },
      { title: '楽活', url: 'https://rakukatsu.jp/author/takahashi-rika' },
    ],
  },
  {
    name: '音声メディア',
    lead: 'Voicyでの美容健康コンテンツを中心に、継続発信のアーカイブをまとめています。',
    accent: 'from-violet-50 via-fuchsia-50 to-stone-50',
    items: [
      { title: 'Voicy 〖美容健康〗アートの力で心身共にキレイで健康に！', url: 'https://voicy.jp/channel/1073/227019' },
      { title: 'Voicy 〖美容健康〗二の腕と猫背に効くエクササイズとは？', url: 'https://voicy.jp/channel/1073/223984' },
      { title: 'Voicy 〖美容健康〗まずはお口から！大病防ぐオーラルケア', url: 'https://voicy.jp/channel/1073/220292' },
      { title: 'Voicy 〖美容健康〗りんご酢の取り入れ方について', url: 'https://voicy.jp/channel/1073/218281' },
      { title: 'Voicy 〖美容健康〗意外と知らない！？日本茶の魅力について', url: 'https://voicy.jp/channel/1073/214884' },
      { title: 'Voicy 〖美容健康〗人気読者モデルオススメ美容法とは？', url: 'https://voicy.jp/channel/1073/198824' },
      { title: 'Voicy 〖美容健康〗健康美容の味方！マヌカハニーについて', url: 'https://voicy.jp/channel/1073/200159' },
      { title: 'Voicy 〖美容健康〗うま味の秘密を知る！かつお節の魅力', url: 'https://voicy.jp/channel/1073/198829' },
      { title: 'Voicy 〖美容健康〗もっと大切にしたい！睡眠の改善法', url: 'https://voicy.jp/channel/1073/194995' },
      { title: 'Voicy 〖美容健康〗早期発見に必要ながん検診について', url: 'https://voicy.jp/channel/1073/192909' },
      { title: 'Voicy 〖美容健康〗美と健康に欠かせない味噌の魅力とは？', url: 'https://voicy.jp/channel/1073/191567' },
      { title: 'Voicy 〖美容健康〗歯周病も口臭もあいうべ体操で予防！？', url: 'https://voicy.jp/channel/1073/188336' },
      { title: 'Voicy 〖美容健康〗毎日1分！身体が軽くなる習慣', url: 'https://voicy.jp/channel/1073/171131' },
      { title: 'Voicy 〖美容健康〗胃カメラの受け方と胃の健康を守る方法', url: 'https://voicy.jp/channel/1073/178254' },
      { title: 'Voicy 〖美容健康〗香りの活用法で人生が豊かになる方法', url: 'https://voicy.jp/channel/1073/179146' },
      { title: 'Voicy 〖美容健康〗好感度UP！自分に似合う色の見つけ方', url: 'https://voicy.jp/channel/1073/172049' },
      { title: 'Voicy 〖美容健康〗見た目の印象を変える髪のお手入れ方法', url: 'https://voicy.jp/channel/1073/167200' },
      { title: 'Voicy 〖美容健康〗呼吸法で不安を瞬間リフレッシュ！', url: 'https://voicy.jp/channel/1073/170892' },
    ],
  },
  {
    name: 'インタビュー・その他外部掲載',
    lead: '外部サイトでのインタビュー掲載・アンバサダー掲載です。',
    accent: 'from-stone-100 via-zinc-50 to-stone-50',
    items: [
      { title: '伝統工芸インタビュー', url: 'https://girlsartalk.com/column/16874.html' },
      { title: 'ヤマハ音楽教室アンバサダーインタビュー', url: 'https://www.yamaha-ongaku.com/music-school/why_yamaha/ambassador/article08.html' },
    ],
  },
];

const featuredLinks: LinkItem[] = [
  {
    title: 'GWや夏休みはどう過ごす？ 心も体もイキイキと過ごせる1泊2日のウェルネスプランを美容賢者が提案 | 美的.com',
    url: 'https://www.biteki.com/life-style/others/1661397',
    cta: 'Read',
  },
  {
    title: '日経x womanアンバサダー',
    url: 'https://woman.nikkei.com/',
    cta: 'Visit',
  },
  {
    title: 'Voicy 〖美容健康〗アートの力で心身共にキレイで健康に！',
    url: 'https://voicy.jp/channel/1073/227019',
    cta: 'Listen',
  },
];

const WorksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 via-stone-50 to-stone-50 text-stone-800">
      <header className="sticky top-0 z-20 bg-stone-50/95 backdrop-blur border-b border-stone-200">
        <div className="max-w-screen-xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="text-sm tracking-widest text-stone-600 hover:text-earth-terra transition-colors uppercase">
            Top Page
          </a>
          <h1 className="text-lg md:text-2xl font-serif tracking-widest text-stone-900">活動と実績</h1>
          <a href="#contact" className="text-sm tracking-widest text-stone-600 hover:text-earth-terra transition-colors uppercase">
            Contact
          </a>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-6 py-14 md:py-20">
        <section className="relative overflow-hidden rounded-2xl border border-stone-200 bg-white/80 p-8 md:p-12 mb-16">
          <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-earth-terra/10 blur-2xl" />
          <div className="absolute -bottom-24 -left-8 h-56 w-56 rounded-full bg-earth-sage/10 blur-2xl" />
          <div className="relative">
            <span className="text-xs tracking-[0.3em] text-earth-sage uppercase">Portfolio Links</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-serif leading-tight text-stone-900">
              掲載実績とSNSを、
              <br />
              ひとつのページで美しく整理。
            </h2>
            <p className="mt-5 max-w-3xl text-sm md:text-base text-stone-600 leading-loose">
              美容・ライフスタイル系メディア、女性向け媒体、旅行ブログ、音声配信、外部インタビューまで、活動実績をカテゴリ別にまとめています。
              目的に合わせてすぐアクセスできる、ポートフォリオ型のリンク集です。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {achievementLinkCategories.map((category) => (
                <span key={category.name} className="px-4 py-2 text-xs md:text-sm bg-stone-100 text-stone-700 rounded-full">
                  {category.name} ({category.items.length})
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-end justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-serif text-stone-900">Featured</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredLinks.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-stone-200 bg-white p-5 md:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-sm leading-relaxed text-stone-700 mb-4">{item.title}</p>
                <span className="inline-flex items-center text-xs tracking-widest uppercase text-earth-terra">
                  {getCta(item)} →
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl md:text-3xl font-serif text-stone-900 mb-6">活動カテゴリ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {detailItems.map((item) => (
              <article key={item.title} className="rounded-xl border border-stone-200 bg-white p-6">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h4 className="text-xl font-serif text-stone-900">{item.title}</h4>
                  <span className="text-xs tracking-widest uppercase text-earth-terra">{item.category}</span>
                </div>
                <p className="text-sm text-stone-600 leading-loose mb-4">{item.overview}</p>
                <ul className="space-y-2">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="text-sm text-stone-700 leading-relaxed">
                      ・{achievement}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl md:text-3xl font-serif text-stone-900 mb-3">リンク集</h3>
          <p className="text-sm md:text-base text-stone-600 leading-loose mb-8">
            Link in bio の分かりやすさと、ポートフォリオの上品さを両立する構成で、カテゴリ別に掲載先へアクセスできます。
          </p>

          <div className="space-y-10">
            {achievementLinkCategories.map((category) => (
              <section key={category.name} className={`rounded-2xl border border-stone-200 bg-gradient-to-r ${category.accent} p-6 md:p-8`}>
                <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
                  <div>
                    <h4 className="text-xl md:text-2xl font-serif text-stone-900">
                      {category.name}
                    </h4>
                    <p className="text-sm text-stone-600 mt-2 leading-relaxed">{category.lead}</p>
                  </div>
                  <span className="px-3 py-1.5 rounded-full bg-white text-xs tracking-widest text-stone-700">
                    {category.items.length} LINKS
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {sortByRecent(category.items).map((link) => (
                    <a
                      key={`${category.name}-${link.title}`}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-lg border border-stone-200 bg-white px-5 py-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-sm md:text-base text-stone-700 leading-relaxed">{link.title}</p>
                        {link.publishedAt && (
                          <span className="text-xs tracking-widest text-stone-400 whitespace-nowrap">
                            {link.publishedAt}
                          </span>
                        )}
                      </div>
                      <span className="mt-3 inline-flex text-xs tracking-widest uppercase text-earth-terra">
                        {getCta(link)} →
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default WorksPage;
