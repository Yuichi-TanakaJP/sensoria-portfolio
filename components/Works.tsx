import React from 'react';
import { ArrowUpRight } from 'lucide-react';

type SummaryItem = {
  value: string;
  label: string;
};

const summaryItems: SummaryItem[] = [
  { value: '300+', label: 'Articles' },
  { value: '5', label: 'Categories' },
  { value: '30+', label: 'Linked Pieces' },
];

const Works: React.FC = () => {
  return (
    <section id="works" className="relative bg-stone-100">
      <div className="mx-auto max-w-screen-xl px-6 py-24 md:py-32">
        <div className="mb-12 grid grid-cols-1 gap-3 md:mb-16 md:grid-cols-[auto_1fr_auto] md:items-end">
          <span className="text-[11px] uppercase tracking-[0.4em] text-earth-sage">Chapter 03 — Works</span>
          <div aria-hidden="true" className="hidden h-[1px] bg-stone-300 md:block" />
          <span className="text-[11px] uppercase tracking-[0.4em] text-stone-400">活動と実績</span>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_1fr] md:gap-20 md:items-end">
          <div>
            <h2 className="font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
              読まれる文脈に、<br />
              <em className="not-italic font-serif">書く</em>。
            </h2>
            <p className="mt-8 max-w-xl text-base leading-loose text-stone-600">
              執筆、取材、音声配信、外部掲載までの活動を専用ページに集約しています。
              媒体ごとのトーンを大切にしながら、体験の感触を残す記録を続けてきました。
            </p>
            <a
              href="#/works"
              className="mt-10 inline-flex items-center gap-3 bg-stone-900 px-6 py-4 text-xs uppercase tracking-widest text-stone-50 transition-colors hover:bg-earth-terra focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra/60"
            >
              実績ページを見る
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Numbers strip — no boxes, just typography */}
          <dl className="grid grid-cols-3 gap-6 border-t border-stone-300 pt-10">
            {summaryItems.map((item) => (
              <div key={item.label}>
                <dt className="text-[11px] uppercase tracking-widest text-stone-500">{item.label}</dt>
                <dd className="mt-3 font-serif text-3xl text-earth-gold md:text-5xl">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Works;
