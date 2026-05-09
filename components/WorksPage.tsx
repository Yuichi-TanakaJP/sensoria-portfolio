import React from 'react';
import { ArrowUpRight, BookOpenText, Headphones, Landmark, Mail, Newspaper, Sparkles } from 'lucide-react';

type DetailItem = {
  title: string;
  category: string;
  overview: string;
  tone: string;
};

type LinkItem = {
  title: string;
  url: string;
  cta?: 'Visit' | 'Read' | 'Listen' | 'Follow';
};

type LinkCategory = {
  name: string;
  lead: string;
  slug: string;
  items: LinkItem[];
};

type FeaturedWork = {
  title: string;
  label: string;
  summary: string;
  url: string;
};

type Metric = {
  value: string;
  label: string;
  note: string;
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

const getDomainLabel = (url: string): string => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
};

const metrics: Metric[] = [
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

const featuredWorks: FeaturedWork[] = [
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

const detailItems: DetailItem[] = [
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

const achievementLinkCategories: LinkCategory[] = [
  {
    name: '美容/ライフ',
    lead: '美容、ウェルネス旅、体験レポートを中心にした掲載先です。',
    slug: 'beauty-life',
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
    name: '新聞/雑誌',
    lead: '女性向け媒体を中心に、アンバサダー・連載・記事掲載の導線をまとめています。',
    slug: 'editorial',
    items: [
      { title: '日経x womanアンバサダー', url: 'https://woman.nikkei.com/' },
      { title: '書き残すことで気持ちがスッキリする手帳活用術［PR］（2ページ目）：日経xwoman', url: 'https://woman.nikkei.com/atcl/cons/051300011/101300034/?P=2' },
      { title: '突然の予定変更もOK！卓上カレンダーの活用法とは〖日経WOMAN16年6月号〗：日経xwoman', url: 'https://woman.nikkei.com/atcl/doors/wol/magazine/15/113000009/042000022/' },
      { title: '日常に五感のスイッチを｜シティリビングWeb', url: 'https://city.living.jp/citymate/citymate415/' },
      { title: 'シティリビング横浜版', url: 'https://book.living.jp/ebooks/cityliving/yokohama/20190208/index_h5.html' },
    ],
  },
  {
    name: '旅ブログ',
    lead: '旅と感性をテーマにしたブログ・著者ページのアーカイブです。',
    slug: 'travel-blog',
    items: [
      { title: 'りかたんの五感美容旅 | トラベルコ', url: 'https://www.tour.ne.jp/blog/rikatan/' },
      { title: '楽活', url: 'https://rakukatsu.jp/author/takahashi-rika' },
    ],
  },
  {
    name: 'Voicy',
    lead: 'Voicyでの美容健康コンテンツを中心に、継続発信のアーカイブをまとめています。',
    slug: 'voicy',
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
    name: 'その他',
    lead: '外部サイトでのインタビュー掲載・アンバサダー掲載です。',
    slug: 'other',
    items: [
      { title: '伝統工芸インタビュー', url: 'https://girlsartalk.com/column/16874.html' },
      { title: 'ヤマハ音楽教室アンバサダーインタビュー', url: 'https://www.yamaha-ongaku.com/music-school/why_yamaha/ambassador/article08.html' },
    ],
  },
];

const categoryIcons = [BookOpenText, Newspaper, Landmark, Headphones, Sparkles];

const WorksPage: React.FC = () => {
  const totalLinks = achievementLinkCategories.reduce((sum, category) => sum + category.items.length, 0);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-5">
          <a href="#" className="text-sm uppercase tracking-widest text-stone-600 transition-colors hover:text-earth-terra">
            Top
          </a>
          <h1 className="text-base tracking-widest text-stone-900 md:text-xl">活動と実績</h1>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-stone-600 transition-colors hover:text-earth-terra">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Contact
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-stone-200">
          <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block">
            <img src="/hero-snoopy.jpg" alt="" className="h-full w-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-stone-50/35" />
          </div>
          <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1fr_360px] lg:items-end">
            <div className="relative z-10 max-w-3xl">
              <span className="mb-5 block text-xs uppercase tracking-[0.3em] text-earth-sage">Works Portfolio</span>
              <h2 className="font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
                五感で見つけた価値を、
                <br />
                読みたくなる実績へ。
              </h2>
              <p className="mt-8 max-w-2xl text-sm leading-loose text-stone-600 md:text-base">
                美容、旅、アート、文化、音声配信まで。媒体ごとの文脈に寄り添いながら、体験を言葉と導線に整えてきた活動をまとめています。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#featured-works" className="border border-stone-800 bg-stone-800 px-5 py-3 text-xs uppercase tracking-widest text-stone-50 transition-colors hover:border-earth-terra hover:bg-earth-terra">
                  Featured
                </a>
                <a href="#link-library" className="border border-stone-300 px-5 py-3 text-xs uppercase tracking-widest text-stone-700 transition-colors hover:border-earth-terra hover:text-earth-terra">
                  Link Library
                </a>
                <a href="#/media-kit" className="border border-stone-300 px-5 py-3 text-xs uppercase tracking-widest text-stone-700 transition-colors hover:border-earth-terra hover:text-earth-terra">
                  Media Kit
                </a>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 gap-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="border border-stone-200 bg-stone-50/90 p-5 backdrop-blur">
                  <span className="block font-serif text-4xl text-earth-gold">{metric.value}</span>
                  <span className="mt-2 block text-xs uppercase tracking-widest text-stone-500">{metric.label}</span>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{metric.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="featured-works" className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
          <div className="mb-8 grid grid-cols-1 gap-6 border-b border-stone-200 pb-5 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <span className="block text-xs uppercase tracking-[0.3em] text-earth-sage">Selected Works</span>
              <h3 className="mt-3 font-serif text-3xl text-stone-900 md:text-4xl">代表的な導線</h3>
            </div>
            <span className="text-xs uppercase tracking-widest text-stone-500">{featuredWorks.length} Highlights</span>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {featuredWorks.map((work, index) => (
              <a
                key={work.title}
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group min-h-[260px] border border-stone-200 bg-stone-100 p-6 transition-colors hover:border-earth-terra/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra/60"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs uppercase tracking-widest text-earth-terra">{work.label}</span>
                  <span className="font-serif text-3xl text-stone-300">0{index + 1}</span>
                </div>
                <h4 className="mt-14 font-serif text-2xl leading-relaxed text-stone-900">{work.title}</h4>
                <p className="mt-4 text-sm leading-loose text-stone-600">{work.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 transition-colors group-hover:text-earth-terra">
                  View
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="border-y border-stone-200 bg-stone-100/70">
          <div className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-[320px_1fr]">
              <div>
                <span className="block text-xs uppercase tracking-[0.3em] text-earth-sage">Expertise</span>
                <h3 className="mt-3 font-serif text-3xl text-stone-900">活動カテゴリ</h3>
              </div>
              <p className="text-sm leading-loose text-stone-600">
                どの媒体でも、単なる情報整理ではなく、体験の輪郭と読者の行動をつなげることを大切にしています。
              </p>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden border border-stone-200 bg-stone-200 md:grid-cols-2 lg:grid-cols-5">
              {detailItems.map((item, index) => {
                const Icon = categoryIcons[index] ?? Sparkles;
                return (
                  <article key={item.title} className="bg-stone-50 p-5 md:p-6">
                    <Icon className="h-5 w-5 text-earth-terra" aria-hidden="true" />
                    <span className="mt-5 block text-xs uppercase tracking-widest text-stone-400">{item.category}</span>
                    <h4 className="mt-3 font-serif text-lg leading-relaxed text-stone-900">{item.title}</h4>
                    <p className="mt-4 text-sm leading-loose text-stone-600">{item.overview}</p>
                    <p className="mt-5 border-t border-stone-200 pt-4 text-sm leading-loose text-earth-sage">{item.tone}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="link-library" className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
          <div className="mb-8 grid grid-cols-1 gap-6 border-b border-stone-200 pb-5 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <span className="block text-xs uppercase tracking-[0.3em] text-earth-sage">Archive</span>
              <h3 className="mt-3 font-serif text-3xl text-stone-900 md:text-4xl">掲載リンク</h3>
            </div>
            <span className="text-xs uppercase tracking-widest text-stone-500">{totalLinks} Links</span>
          </div>

          <nav aria-label="掲載リンクカテゴリ" className="mb-12 grid grid-cols-2 gap-2 md:grid-cols-5">
            {achievementLinkCategories.map((category) => (
              <a
                key={category.name}
                href={`#works-${category.slug}`}
                className="border border-stone-200 bg-stone-50 px-4 py-4 transition-colors hover:border-earth-terra/60 hover:text-earth-terra focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra/60"
              >
                <span className="block font-serif text-base text-stone-900">{category.name}</span>
                <span className="mt-2 block text-[11px] uppercase tracking-widest text-stone-400">{category.items.length} Links</span>
              </a>
            ))}
          </nav>

          <div className="space-y-14">
            {achievementLinkCategories.map((category) => (
              <section key={category.name} id={`works-${category.slug}`} className="scroll-mt-24">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[280px_1fr] lg:gap-10">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-earth-terra">{category.items.length} Links</span>
                    <h4 className="mt-3 font-serif text-2xl text-stone-900">{category.name}</h4>
                    <p className="mt-3 text-sm leading-loose text-stone-600">{category.lead}</p>
                  </div>

                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {category.items.map((link) => (
                      <a
                        key={`${category.name}-${link.title}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group border border-stone-200 bg-stone-50 px-5 py-4 transition-colors hover:border-earth-terra/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra/60"
                      >
                        <p className="text-sm leading-relaxed text-stone-800 md:text-base">{link.title}</p>
                        <div className="mt-4 flex items-center justify-between gap-4 text-[11px] uppercase tracking-widest">
                          <span className="min-w-0 truncate text-stone-400">{getDomainLabel(link.url)}</span>
                          <span className="inline-flex flex-none items-center gap-1 text-earth-terra">
                            {getCta(link)}
                            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="border-t border-stone-200 bg-stone-900 text-stone-50">
          <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-6 py-14 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="block text-xs uppercase tracking-[0.3em] text-stone-400">Next</span>
              <h3 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">媒体資料としても、実績集としても使えるページへ。</h3>
              <p className="mt-4 max-w-2xl text-sm leading-loose text-stone-300">
                #15 の確認が進んだら、美術館・ホテル・伝統工芸を根拠URL付きで追加し、より専門性の見えるページに育てます。
              </p>
            </div>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 border border-stone-500 px-6 py-3 text-xs uppercase tracking-widest text-stone-50 transition-colors hover:border-earth-terra hover:text-earth-terra">
              Contact
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#/media-kit" className="inline-flex items-center justify-center gap-2 border border-stone-500 px-6 py-3 text-xs uppercase tracking-widest text-stone-50 transition-colors hover:border-earth-terra hover:text-earth-terra">
              Media Kit
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WorksPage;
