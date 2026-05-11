import React from 'react';

const Profile: React.FC = () => {
  return (
    <section id="about" className="bg-stone-50 py-24 md:py-32">
      <div className="mx-auto max-w-screen-xl px-6">
        {/* Section header */}
        <div className="mb-12 grid grid-cols-1 gap-3 md:mb-16 md:grid-cols-[auto_1fr_auto] md:items-end">
          <span className="text-[11px] uppercase tracking-[0.4em] text-earth-sage">Chapter 02 — Profile</span>
          <div aria-hidden="true" className="hidden h-[1px] bg-stone-300 md:block" />
          <span className="text-[11px] uppercase tracking-[0.4em] text-stone-400">ぺんぺんすけ</span>
        </div>

        {/* Pull-quote: the main visual element */}
        <blockquote className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-3xl leading-snug text-stone-900 md:text-5xl md:leading-tight">
            五感を通じて、<br />
            <em className="not-italic font-serif">美意識を磨く</em>。
          </p>
          <footer className="mt-8 text-sm tracking-widest text-stone-500 uppercase">— Editorial Stance</footer>
        </blockquote>

        {/* Asymmetric: portrait left, copy right (lg only) */}
        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[320px_1fr] lg:gap-20">
          <div className="mx-auto lg:mx-0 w-full max-w-[320px]">
            <div className="aspect-[3/4] w-full">
              <img
                src="/profile-portrait.jpg"
                alt="ぺんぺんすけ ポートレート"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="mt-6 text-center text-xs tracking-widest text-stone-400 uppercase lg:text-left">
              Writer / Editor
            </div>
          </div>

          <div className="space-y-6 font-serif text-sm leading-loose text-stone-700 md:text-base">
            <p>
              アート、旅、美容をテーマに執筆活動を行うライター・エディター。
              「五感を通じて美意識を磨く」をライフテーマとし、美術館の静寂、異国の風の匂い、上質な化粧品のテクスチャなど、感覚に響く体験を言葉に紡いでいる。
            </p>
            <p>
              日本経済新聞電子版（日経Web）にてコラムを連載し、通算 300 本以上の記事を執筆。
              数字やスペックだけでなく、「どう感じるか」という情緒的価値を伝える執筆スタイルに定評がある。
            </p>
            <p>
              現在は Web メディアのディレクションや、ブランドのコンセプトメイキングを中心に活動中。
            </p>

            {/* Achievement strip — minimal, no boxes */}
            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-stone-200 pt-8 md:grid-cols-3">
              <div>
                <dt className="text-[11px] uppercase tracking-widest text-stone-500">Articles</dt>
                <dd className="mt-2 font-serif text-3xl text-stone-900 md:text-4xl">300+</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-widest text-stone-500">Experience</dt>
                <dd className="mt-2 font-serif text-3xl text-stone-900 md:text-4xl">10yr</dd>
              </div>
              <div className="col-span-2 md:col-span-1">
                <dt className="text-[11px] uppercase tracking-widest text-stone-500">Themes</dt>
                <dd className="mt-2 font-serif text-base text-stone-800 leading-relaxed">Beauty / Travel / Editorial</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
