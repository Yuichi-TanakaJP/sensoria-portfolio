import React from 'react';

type SummaryItem = {
  value: string;
  label: string;
};

const summaryItems: SummaryItem[] = [
  {
    value: '300+',
    label: 'ARTICLES',
  },
  {
    value: '5',
    label: 'CATEGORIES',
  },
  {
    value: '1',
    label: 'WORKS HUB',
  },
];

const Works: React.FC = () => {
  return (
    <section id="works" className="py-24 md:py-32 px-6 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
        <div>
          <span className="block text-xs tracking-[0.3em] text-earth-sage uppercase mb-3">Works</span>
          <h2 className="text-3xl md:text-4xl font-medium font-serif text-stone-800 tracking-wider mb-6">活動と実績</h2>
          <p className="text-sm md:text-base text-stone-600 leading-loose mb-8">
            執筆、取材、音声配信、外部掲載の実績は専用ページに集約しています。
            TOPでは概要だけを伝え、詳細なカテゴリと掲載リンクは実績ページで確認できます。
          </p>
          <a
            href="#/works"
            className="inline-block px-8 py-3 bg-stone-800 text-stone-50 text-sm tracking-widest hover:bg-earth-terra transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra/60"
          >
            実績ページを見る
          </a>
        </div>

        <div className="border-y border-stone-200 py-8 md:py-10">
          <div className="grid grid-cols-3 gap-6">
          {summaryItems.map((item) => (
            <div key={item.label}>
              <span className="block text-3xl md:text-4xl font-serif text-earth-gold mb-2">{item.value}</span>
              <span className="text-[11px] md:text-xs tracking-widest text-stone-500">{item.label}</span>
            </div>
          ))}
          </div>
          <p className="mt-8 text-sm text-stone-500 leading-loose">
            実績ページでは、主要リンク、活動カテゴリ、掲載リンクの順で整理しています。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Works;
