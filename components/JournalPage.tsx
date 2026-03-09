import React, { useMemo, useState } from 'react';
import { journalArticles } from '../data/articles';
import { Article } from '../types';
import Footer from './Footer';

const JournalPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | Article['category']>('All');
  const [keyword, setKeyword] = useState('');

  const categories = useMemo(
    () => ['All', ...new Set(journalArticles.map((article) => article.category))] as Array<'All' | Article['category']>,
    []
  );

  const filteredArticles = useMemo(() => {
    const loweredKeyword = keyword.trim().toLowerCase();

    return journalArticles.filter((article) => {
      const isCategoryMatch = selectedCategory === 'All' || article.category === selectedCategory;
      if (!isCategoryMatch) return false;

      if (!loweredKeyword) return true;

      const searchable = [article.title, article.excerpt, article.tags.join(' ')].join(' ').toLowerCase();
      return searchable.includes(loweredKeyword);
    });
  }, [keyword, selectedCategory]);

  return (
    <div id="top" className="min-h-screen bg-stone-50 text-stone-800 selection:bg-earth-terra/30 selection:text-earth-terra">
      <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between gap-4">
          <a href="/" className="text-2xl font-medium font-serif tracking-widest text-stone-900 hover:opacity-80 transition-opacity">
            Sensoria
          </a>
          <nav className="flex items-center gap-6 text-xs md:text-sm tracking-widest uppercase">
            <a href="/" className="text-stone-600 hover:text-earth-terra transition-colors">Home</a>
            <a href="/#about" className="text-stone-600 hover:text-earth-terra transition-colors">About</a>
            <a href="/#contact" className="text-stone-600 hover:text-earth-terra transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="py-16 md:py-20">
        <section className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <span className="block text-xs tracking-[0.3em] text-earth-sage uppercase mb-3">Journal</span>
            <h1 className="text-3xl md:text-5xl font-medium font-serif text-stone-900 tracking-wider mb-4">記事一覧</h1>
            <p className="text-stone-600 leading-loose">アート、旅、美容を軸に、五感をひらくための記録を掲載しています。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-10">
            <aside className="bg-white border border-stone-200 p-5 h-fit">
              <div className="mb-6">
                <label htmlFor="journal-keyword" className="block text-xs tracking-widest uppercase text-stone-500 mb-2">Keyword</label>
                <input
                  id="journal-keyword"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="例: 旅"
                  className="w-full border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-earth-terra/40"
                />
              </div>
              <div>
                <label htmlFor="journal-category" className="block text-xs tracking-widest uppercase text-stone-500 mb-2">Category</label>
                <select
                  id="journal-category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as 'All' | Article['category'])}
                  className="w-full border border-stone-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-earth-terra/40"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </aside>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {filteredArticles.map((article) => (
                <article id={`article-${article.id}`} key={article.id} className="bg-white border border-stone-200 p-4 md:p-5">
                  <a href={article.href} target="_blank" rel="noopener noreferrer" className="group block">
                    <div className="relative overflow-hidden aspect-[16/10] mb-4">
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
                    <h2 className="text-lg font-medium font-serif text-stone-900 leading-relaxed mb-3 group-hover:text-earth-terra transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm text-stone-600 leading-loose">{article.excerpt}</p>
                  </a>
                </article>
              ))}
              {filteredArticles.length === 0 && (
                <div className="md:col-span-2 border border-stone-200 bg-white p-8 text-center text-stone-500">
                  条件に一致する記事はありません。キーワードまたはカテゴリを変更してください。
                </div>
              )}
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JournalPage;
