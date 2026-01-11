import React from 'react';

const Concept: React.FC = () => {
  return (
    <section id="concept" className="py-24 md:py-32 bg-stone-50 relative">
      <div className="max-w-screen-md mx-auto px-6">
        <div className="text-center mb-16">
          <span className="block text-xs tracking-[0.4em] text-stone-400 uppercase mb-4">Introduction</span>
          <h2 className="text-3xl md:text-4xl font-medium font-serif text-stone-800 tracking-widest">五感美容とは</h2>
        </div>

        <div className="prose prose-stone prose-lg mx-auto text-stone-600 font-serif leading-loose text-justify md:text-center">
          <p className="mb-8">
            美しいものを見る（視覚）、その土地の空気を吸う（嗅覚）、心地よいものに触れる（触覚）。
          </p>
          <p className="mb-8">
            アートに触れる高揚感も、旅先での解放感も、日々のスキンケアの充足感も、すべては繋がっています。
          </p>
          <p>
            300本の執筆を通して見つけた、五感を研ぎ澄ませて美しく生きるためのヒントをお届けします。
          </p>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="w-3 h-3 rounded-full bg-earth-terra opacity-60"></div>
        </div>
      </div>
      
      {/* Decorative vertical line */}
      <div className="absolute left-6 md:left-12 top-32 bottom-32 w-[1px] bg-stone-200 hidden md:block"></div>
      <div className="absolute right-6 md:right-12 top-32 bottom-32 w-[1px] bg-stone-200 hidden md:block"></div>
    </section>
  );
};

export default Concept;