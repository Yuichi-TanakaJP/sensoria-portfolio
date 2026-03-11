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
};

const detailItems: DetailItem[] = [
  {
    title: 'Nikkei Web 連載',
    category: 'Editorial',
    overview: 'アート・旅・美容領域で、読後に感覚が残る構成を軸に執筆。媒体のトーンと個人の文体を両立させる編集設計を担当。',
    achievements: [
      '特集記事の企画立案から執筆まで一貫して実施',
      '読者導線を意識した見出し・リード最適化',
      '取材メモを活用した一次情報ベースのストーリー化',
    ],
  },
  {
    title: 'ブランドコンセプト設計',
    category: 'Direction',
    overview: '言葉・体験・ビジュアルを同一の思想で束ね、ブランドの世界観を継続的に運用できる状態へ整備。',
    achievements: [
      'ブランドステートメントとトーンガイドを策定',
      'サービス体験に合わせたコピーラインを再設計',
      '運用チーム向けの編集ルールを整備',
    ],
  },
  {
    title: 'Webメディア監修',
    category: 'Consulting',
    overview: '編集方針とUI体験の接続を支援し、可読性と雰囲気の両立を重視した改善サイクルを実行。',
    achievements: [
      '記事テンプレートと情報設計を監修',
      'コンテンツ評価軸の導入で更新優先度を明確化',
      '編集・デザイン間の制作フローを標準化',
    ],
  },
];

const achievementLinks: LinkItem[] = [
  { title: 'Instagram', url: 'https://instagram.com/rika05181' },
  { title: '楽活', url: 'https://rakukatsu.jp/author/takahashi-rika' },
  { title: 'りかたんの五感美容旅 | トラベルコ', url: 'https://www.tour.ne.jp/blog/rikatan/' },
  { title: '日常に五感のスイッチを｜シティリビングWeb', url: 'https://city.living.jp/citymate/citymate415/' },
  { title: '美的', url: 'https://www.biteki.com/' },
  { title: '日経x womanアンバサダー', url: 'https://woman.nikkei.com/' },
  { title: 'anan Beauty ＋', url: 'https://plus.ananweb.jp/' },
  { title: 'CREAアンバサダー', url: 'https://crea.bunshun.jp/list/author/64993f21b576224852000012' },
  { title: 'ハナコラボJOURNAL | Hanako Web', url: 'https://hanako.tokyo/tags/hanako-lab-journal/' },
  { title: '米肌 beauty channel', url: 'https://www.instagram.com/' },
  { title: 'GWや夏休みはどう過ごす？ 心も体もイキイキと過ごせる1泊2日のウェルネスプランを美容賢者が提案 | 美的.com', url: 'https://www.biteki.com/life-style/others/1661397' },
  { title: '〖GW1泊2日の美トリップ〗美肌整う鹿児島県・霧島の温泉旅｜天然の“泥パック”で全身すべすべに♪ | 美的.com', url: 'https://www.biteki.com/life-style/others/1660535' },
  { title: '〖14のおすすめ〗ネイルオイル、人気で優秀なヤツ集めました！ | 美的.com', url: 'https://www.biteki.com/nail/nail-howto/292503' },
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
  { title: '伝統工芸インタビュー', url: 'https://girlsartalk.com/column/16874.html' },
  { title: 'ヤマハ音楽教室アンバサダーインタビュー', url: 'https://www.yamaha-ongaku.com/music-school/why_yamaha/ambassador/article08.html' },
  { title: 'シティリビング横浜版', url: 'https://book.living.jp/ebooks/cityliving/yokohama/20190208/index_h5.html' },
  { title: '書き残すことで気持ちがスッキリする手帳活用術［PR］（2ページ目）：日経xwoman', url: 'https://woman.nikkei.com/atcl/cons/051300011/101300034/?P=2' },
  { title: '突然の予定変更もOK！卓上カレンダーの活用法とは〖日経WOMAN16年6月号〗：日経xwoman', url: 'https://woman.nikkei.com/atcl/doors/wol/magazine/15/113000009/042000022/' },
];

const WorksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
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

      <main className="max-w-screen-xl mx-auto px-6 py-16 md:py-24">
        <p className="text-sm md:text-base text-stone-600 leading-loose mb-12 md:mb-16 max-w-3xl">
          Sensoriaの活動履歴を、執筆・設計・監修の3領域で整理しています。案件の規模よりも、意図が伝わる構成と体験品質を重視して取り組んできた実績です。
        </p>

        <div className="space-y-8 md:space-y-10">
          {detailItems.map((item) => (
            <article key={item.title} className="border border-stone-200 bg-white p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                <h2 className="text-2xl font-serif text-stone-900">{item.title}</h2>
                <span className="text-xs tracking-widest uppercase text-earth-terra">{item.category}</span>
              </div>
              <p className="text-stone-600 leading-loose mb-6">{item.overview}</p>
              <ul className="space-y-3">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="text-sm md:text-base text-stone-700 leading-relaxed">
                    ・{achievement}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl md:text-3xl font-serif text-stone-900 mb-6">リンク集</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {achievementLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-stone-200 px-5 py-4 text-sm md:text-base text-stone-700 leading-relaxed hover:border-earth-terra/50 hover:text-earth-terra transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default WorksPage;
