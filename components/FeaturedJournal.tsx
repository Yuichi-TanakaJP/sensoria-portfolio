import React from 'react';
import { Article } from '../types';
import { ArrowRight } from 'lucide-react';
import { journalArticles } from '../data/articles';

const featuredArticles: Article[] = journalArticles.slice(0, 3);

const FeaturedJournal: React.FC = () => {
  return (
    <section id="featured" className="py-20 md:py-32 px-6 max-w-screen-xl mx-auto">
       <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20">
        <div>
          <span className="block text-xs tracking-[0.3em] text-earth-sage uppercase mb-3">Featured Journal</span>
          <h2 className="text-3xl md:text-4xl font-medium font-serif text-stone-800 tracking-wider">
            五感を旅する
          </h2>
        </div>
        <a href="/journal.html" className="hidden md:flex items-center text-sm tracking-widest text-stone-500 hover:text-earth-terra transition-colors mt-4 md:mt-0">
          VIEW ALL <ArrowRight size={16} className="ml-2" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {featuredArticles.map((article) => (
          <article key={article.id} className="group cursor-pointer flex flex-col h-full">
            <div className="relative overflow-hidden aspect-[4/5] mb-6">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-stone-50/90 backdrop-blur-sm px-3 py-1 text-xs tracking-widest uppercase text-stone-800">
                {article.category}
              </div>
            </div>
            <div className="flex-1 flex flex-col">
               <div className="flex gap-2 mb-3">
                {article.tags.map(tag => (
                  <span key={tag} className="text-[10px] text-stone-400 border border-stone-200 px-2 py-0.5 rounded-full">#{tag}</span>
                ))}
              </div>
              <h3 className="text-lg md:text-xl font-medium font-serif leading-relaxed mb-4 text-stone-800 group-hover:text-earth-terra transition-colors">
                {article.title}
              </h3>
              <p className="text-stone-500 text-sm leading-loose mb-6 line-clamp-3 flex-grow">
                {article.excerpt}
              </p>
              <div className="text-xs text-stone-400 tracking-widest mt-auto">
                {article.date}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 md:hidden text-center">
        <a href="/journal.html" className="inline-flex items-center text-sm tracking-widest text-stone-500 hover:text-earth-terra transition-colors border-b border-stone-300 pb-1">
          VIEW ALL JOURNAL <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default FeaturedJournal;
