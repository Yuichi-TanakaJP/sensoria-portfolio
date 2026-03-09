import React from 'react';

type WorkItem = {
  title: string;
  type: string;
  summary: string;
  linkLabel: string;
  href: string;
};

const workItems: WorkItem[] = [
  {
    title: 'Nikkei Web 連載',
    type: 'Editorial',
    summary: 'アート・旅・美容領域での執筆実績。読後に感覚が残る文章設計を重視。',
    linkLabel: '掲載実績を見る',
    href: 'https://example.com/sensoria-nikkei',
  },
  {
    title: 'ブランドコンセプト設計',
    type: 'Direction',
    summary: '言葉・体験・ビジュアルを一体で設計し、ブランドの一貫性を構築。',
    linkLabel: 'プロジェクト概要を見る',
    href: 'https://example.com/sensoria-concept',
  },
  {
    title: 'Webメディア監修',
    type: 'Consulting',
    summary: '編集方針とUI体験の接続を支援し、読みやすさと世界観を両立。',
    linkLabel: '相談する',
    href: '#contact',
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
        <p className="hidden md:block text-sm text-stone-500 tracking-widest">
          Writing / Direction / Consulting
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {workItems.map((work) => (
          <article key={work.title} className="border border-stone-200 bg-stone-50 p-6 md:p-8 flex flex-col">
            <span className="text-xs tracking-widest uppercase text-earth-terra mb-4">{work.type}</span>
            <h3 className="text-xl font-serif text-stone-900 mb-4 leading-relaxed">{work.title}</h3>
            <p className="text-sm md:text-base text-stone-600 leading-loose flex-grow">{work.summary}</p>
            <a
              href={work.href}
              target={work.href.startsWith('http') ? '_blank' : undefined}
              rel={work.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="mt-8 inline-block text-sm tracking-widest text-stone-800 border-b border-stone-300 pb-1 hover:text-earth-terra hover:border-earth-terra transition-colors"
            >
              {work.linkLabel}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Works;
