import React from 'react';
import { Article } from '../types';

const journalArticles: Article[] = [
  {
    id: '4',
    title: '朝の静寂を取り戻す、10分間の「聴覚」デトックス。',
    category: 'Lifestyle',
    tags: ['ライフスタイル', '聴覚'],
    image: 'https://picsum.photos/id/19/400/300',
    excerpt: '忙しい日々の中で、音の選び方を変えるだけで集中力と回復感は大きく変わります。',
    date: '2023.11.05',
  },
  {
    id: '5',
    title: '現代アートと食の融合。味覚を刺激する新しいレストラン体験。',
    category: 'Art',
    tags: ['アート', '食', '味覚'],
    image: 'https://picsum.photos/id/431/400/300',
    excerpt: '視覚演出と味覚設計の交差点にある、体験型ダイニングの価値を整理しました。',
    date: '2023.11.02',
  },
  {
    id: '6',
    title: '週末、スマホを置いて森へ行く。デジタルデトックスのすすめ。',
    category: 'Travel',
    tags: ['旅', '自然'],
    image: 'https://picsum.photos/id/28/400/300',
    excerpt: '通知から離れる時間を意図的につくることで、感覚が整う旅の作り方を紹介します。',
    date: '2023.10.28',
  },
];

const JournalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="sticky top-0 z-20 bg-stone-50/95 backdrop-blur border-b border-stone-200">
        <div className="max-w-screen-xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="text-sm tracking-widest text-stone-600 hover:text-earth-terra transition-colors uppercase">
            Top Page
          </a>
          <h1 className="text-lg md:text-2xl font-serif tracking-widest text-stone-900">記事一覧</h1>
          <a href="#contact" className="text-sm tracking-widest text-stone-600 hover:text-earth-terra transition-colors uppercase">
            Contact
          </a>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journalArticles.map((article) => (
            <article key={article.id} className="bg-white border border-stone-200 p-4 md:p-5">
              <div className="relative overflow-hidden aspect-[3/2] mb-4">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-earth-terra uppercase tracking-wider">{article.category}</span>
                <span className="text-xs text-stone-400">{article.date}</span>
              </div>
              <h2 className="text-base font-medium font-serif text-stone-800 leading-relaxed mb-3">{article.title}</h2>
              <p className="text-sm text-stone-600 leading-loose">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default JournalPage;
