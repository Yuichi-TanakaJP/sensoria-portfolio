import React from 'react';

type WorkItem = {
  title: string;
  type: string;
  summary: string;
  href: string;
};

const workItems: WorkItem[] = [
  {
    title: '美容・ライフスタイル系メディア掲載',
    type: 'Beauty Media',
    summary: '美的、anan Beauty＋、CREA、Hanakoなどで美容・体験レポートを継続発信。',
    href: '#/works',
  },
  {
    title: '新聞・雑誌・女性向け媒体での連載/寄稿',
    type: 'Editorial',
    summary: '日経x woman、シティリビングなどで、日常に寄り添う五感テーマの記事を掲載。',
    href: '#/works',
  },
  {
    title: '旅行・ブログ領域の発信',
    type: 'Travel Blog',
    summary: 'トラベルコ「りかたんの五感美容旅」や著者ページで旅と美容の記録を継続掲載。',
    href: '#/works',
  },
  {
    title: '音声メディアでの継続配信',
    type: 'Audio',
    summary: 'Voicyで美容健康を軸に、習慣・栄養・睡眠・セルフケアなどのテーマを継続発信。',
    href: '#/works',
  },
  {
    title: 'インタビュー・外部掲載',
    type: 'Interview',
    summary: '伝統工芸、ヤマハ音楽教室アンバサダーなど、外部インタビュー・掲載実績を展開。',
    href: '#/works',
  },
];

const Works: React.FC = () => {
  return (
    <section id="works" className="py-24 md:py-32 px-6 max-w-screen-xl mx-auto">
      <div className="flex items-end justify-between gap-6 mb-12 md:mb-16">
        <div>
          <span className="block text-xs tracking-[0.3em] text-earth-sage uppercase mb-3">Works</span>
          <h2 className="text-3xl md:text-4xl font-medium font-serif text-stone-800 tracking-wider">活動と実績</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {workItems.map((work) => (
          <a
            key={work.title}
            href={work.href}
            target={work.href.startsWith('http') ? '_blank' : undefined}
            rel={work.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group border border-stone-200 bg-stone-50 p-6 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-earth-terra/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra/60"
            aria-label={`${work.title}の詳細へ移動`}
          >
            <span className="text-xs tracking-widest uppercase text-earth-terra mb-4">{work.type}</span>
            <h3 className="text-xl font-serif text-stone-900 mb-4 leading-relaxed">{work.title}</h3>
            <p className="text-sm md:text-base text-stone-600 leading-loose">{work.summary}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Works;
