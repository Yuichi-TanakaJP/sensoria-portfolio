import React from 'react';

type WorkItem = {
  title: string;
  type: string;
  summary: string;
};

const workItems: WorkItem[] = [
  {
    title: '美容・ライフスタイル系メディア掲載',
    type: 'Beauty Media',
    summary: '美的、anan Beauty＋、CREA、Hanakoなどで美容・体験レポートを継続発信。',
  },
  {
    title: '新聞・雑誌・女性向け媒体での連載/寄稿',
    type: 'Editorial',
    summary: '日経x woman、シティリビングなどで、日常に寄り添う五感テーマの記事を掲載。',
  },
  {
    title: '旅行・ブログ領域の発信',
    type: 'Travel Blog',
    summary: 'トラベルコ「りかたんの五感美容旅」や著者ページで旅と美容の記録を継続掲載。',
  },
  {
    title: '音声メディアでの継続配信',
    type: 'Audio',
    summary: 'Voicyで美容健康を軸に、習慣・栄養・睡眠・セルフケアなどのテーマを継続発信。',
  },
  {
    title: 'インタビュー・外部掲載',
    type: 'Interview',
    summary: '伝統工芸、ヤマハ音楽教室アンバサダーなど、外部インタビュー・掲載実績を展開。',
  },
];

const Works: React.FC = () => {
  return (
    <section id="works" className="py-24 md:py-32 px-6 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-28">
          <span className="block text-xs tracking-[0.3em] text-earth-sage uppercase mb-3">Works</span>
          <h2 className="text-3xl md:text-4xl font-medium font-serif text-stone-800 tracking-wider mb-6">活動と実績</h2>
          <p className="text-sm md:text-base text-stone-600 leading-loose mb-8">
            掲載媒体、連載、旅の取材、音声配信、インタビューをひとつの実績ページに集約しています。
            詳細なリンクや今後追加する取材実績は、Worksページで確認できます。
          </p>
          <a
            href="#/works"
            className="inline-block px-8 py-3 bg-stone-800 text-stone-50 text-sm tracking-widest hover:bg-earth-terra transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra/60"
          >
            実績ページを見る
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {workItems.map((work) => (
            <article
              key={work.title}
              className="border border-stone-200 bg-stone-50 p-6 md:p-7"
            >
              <span className="text-xs tracking-widest uppercase text-earth-terra mb-4 block">{work.type}</span>
              <h3 className="text-lg font-serif text-stone-900 mb-3 leading-relaxed">{work.title}</h3>
              <p className="text-sm text-stone-600 leading-loose">{work.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
