import React from 'react';

const Concept: React.FC = () => {
  return (
    <section id="concept" className="relative bg-stone-900 py-24 md:py-32 text-stone-100">
      {/* Side rule decoration (large screens) */}
      <div aria-hidden="true" className="absolute left-8 top-12 hidden text-[10px] uppercase tracking-[0.4em] text-stone-500 md:block">
        Chapter 01 — Concept
      </div>
      <div aria-hidden="true" className="absolute right-8 bottom-12 hidden text-[10px] uppercase tracking-[0.4em] text-stone-500 md:block">
        Sensoria / Five Senses
      </div>

      <div className="max-w-screen-md mx-auto px-6">
        <div className="text-center mb-14">
          <span className="block text-xs tracking-[0.4em] text-earth-gold uppercase mb-5">Introduction</span>
          <h2 className="text-3xl md:text-5xl font-medium font-serif text-stone-50 tracking-widest">五感美容とは</h2>
          <div className="mt-6 mx-auto h-[1px] w-16 bg-earth-gold/60" />
        </div>

        <div className="font-serif text-stone-200 leading-loose text-justify md:text-center space-y-8 text-base md:text-lg">
          <p>
            美しいものを見る（視覚）、その土地の空気を吸う（嗅覚）、心地よいものに触れる（触覚）。
          </p>
          <p>
            アートに触れる高揚感も、旅先での解放感も、日々のスキンケアの充足感も、すべては繋がっています。
          </p>
          <p className="text-stone-50 italic">
            300本の執筆を通して見つけた、<br className="md:hidden" />五感を研ぎ澄ませて美しく生きるためのヒント。
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="h-2 w-2 rounded-full bg-earth-gold" />
        </div>
      </div>
    </section>
  );
};

export default Concept;
