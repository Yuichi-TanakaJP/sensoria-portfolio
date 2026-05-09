import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-stone-50">
      {/* Decorative serif watermark — museum-catalog feel */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 select-none font-serif text-[20rem] leading-none text-stone-200/50 md:-top-24 md:text-[32rem]"
      >
        S
      </span>

      {/* Editorial gutter marks (large screens) */}
      <div aria-hidden="true" className="pointer-events-none absolute left-8 top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-stone-400">
          <span className="font-serif text-base text-earth-terra">01</span>
          <div className="h-16 w-[1px] bg-stone-400" />
          <span style={{ writingMode: 'vertical-rl' }}>Cover</span>
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-stone-400">
          <span className="font-serif text-base text-earth-terra">2026</span>
          <div className="h-16 w-[1px] bg-stone-400" />
          <span style={{ writingMode: 'vertical-rl' }}>Vol. 01</span>
        </div>
      </div>

      {/* Subtle warm radial accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(180, 83, 9, 0.05), transparent 55%)',
        }}
      />

      {/* Bottom fade for seamless transition into next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-stone-50"
      />

      {/* Content */}
      <div className="relative z-10 max-w-screen-md mx-auto px-6 text-center pt-20">
        <p
          className="text-earth-sage font-medium tracking-[0.3em] text-sm md:text-base mb-6 uppercase fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Five Senses Beauty
        </p>

        <div
          className="h-12 w-[1px] bg-stone-400 mx-auto mb-8 fade-in-up"
          style={{ animationDelay: '0.6s' }}
        ></div>

        <p
          className="text-stone-800 text-lg md:text-xl font-serif leading-relaxed tracking-wider fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          アート、旅、美容で紡ぐ
          <br className="md:hidden" />
          「五感美容」の記録。
        </p>

        <p
          className="mt-8 text-sm text-stone-600 tracking-widest fade-in-up"
          style={{ animationDelay: '1s' }}
        >
          日経Webでの300本の連載を経てたどり着いた、
          <br className="md:hidden" />
          心地よい暮らしの美学。
        </p>
      </div>
    </section>
  );
};

export default Hero;
