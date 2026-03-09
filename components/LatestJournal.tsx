import React, { useMemo, useState } from 'react';
import { Article } from '../types';
import { journalArticles } from '../data/articles';

const latestArticles: Article[] = journalArticles.slice(3);

const LatestJournal: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | Article['category']>('All');

  const categories = useMemo(
    () => ['All', ...new Set(latestArticles.map((article) => article.category))] as Array<'All' | Article['category']>,
    []
  );

  const filteredArticles = useMemo(
    () =>
      selectedCategory === 'All'
        ? latestArticles
        : latestArticles.filter((article) => article.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <section id="journal" className="py-20 bg-stone-100">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
           <span className="block text-xs tracking-[0.3em] text-earth-sage uppercase mb-3">Latest Journal</span>
          <h2 className="text-2xl md:text-3xl font-medium font-serif text-stone-800 tracking-wider">最新の記事</h2>
          <div className="mt-8 flex justify-center">
            <label className="text-sm text-stone-600 flex items-center gap-3">
              <span className="tracking-widest uppercase">Category</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as 'All' | Article['category'])}
                className="bg-white border border-stone-300 text-stone-800 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-earth-terra/40"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <a
              key={article.id}
              href={`/journal.html#article-${article.id}`}
              className="group block bg-white p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative overflow-hidden aspect-[3/2] mb-4">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-center mb-2">
                 <span className="text-xs font-medium text-earth-terra uppercase tracking-wider">{article.category}</span>
                 <span className="text-xs text-stone-400">{article.date}</span>
              </div>
              <h3 className="text-base font-medium font-serif text-stone-800 leading-relaxed group-hover:text-earth-terra transition-colors">
                {article.title}
              </h3>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/journal.html" className="inline-block px-8 py-3 bg-stone-800 text-stone-50 text-sm tracking-widest hover:bg-earth-terra transition-colors duration-300">
            記事一覧を見る
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestJournal;
