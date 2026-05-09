import React from 'react';
import { ArrowUpRight, BriefcaseBusiness, Download, Mail, MessageSquareText, Newspaper, Sparkles } from 'lucide-react';

const profileFacts = [
  ['Theme', '五感美容 / 旅 / アート / 暮らし'],
  ['Format', '記事制作 / 取材 / 音声配信 / アンバサダー'],
  ['Tone', '上品、知的、やわらかい実用性'],
];

const topics = [
  '美容とウェルネス旅の体験設計',
  '五感をひらくアート・文化体験',
  '日常を整えるセルフケアと習慣',
  '媒体トーンに合わせた記事・企画づくり',
];

const pressMentions = ['美的', '日経x woman', 'CREA', 'Hanako', 'シティリビング', 'Voicy'];

const MediaKitPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-5">
          <a href="#/works" className="text-sm uppercase tracking-widest text-stone-600 transition-colors hover:text-earth-terra">
            Works
          </a>
          <h1 className="text-base tracking-widest text-stone-900 md:text-xl">Media Kit</h1>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-stone-600 transition-colors hover:text-earth-terra">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Contact
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-stone-200">
          <div className="absolute inset-0 opacity-20">
            <img src="/hero-snoopy.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="relative mx-auto grid max-w-screen-xl grid-cols-1 gap-10 px-6 py-16 md:py-24 lg:grid-cols-[1fr_380px] lg:items-end">
            <div>
              <span className="mb-5 block text-xs uppercase tracking-[0.3em] text-earth-sage">For Editors / Partners</span>
              <h2 className="font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
                紹介しやすく、
                <br />
                依頼しやすい資料室。
              </h2>
              <p className="mt-8 max-w-2xl text-sm leading-loose text-stone-600 md:text-base">
                プロフィール、得意テーマ、掲載媒体、問い合わせ導線をまとめた簡易メディアキットです。取材、寄稿、アンバサダー、音声企画などの検討に使えます。
              </p>
            </div>
            <div className="border border-stone-200 bg-stone-50/90 p-6 backdrop-blur">
              <Sparkles className="h-6 w-6 text-earth-terra" aria-hidden="true" />
              <p className="mt-6 font-serif text-2xl leading-relaxed text-stone-900">
                五感を切り口に、体験と読者の暮らしをつなぐ発信者。
              </p>
              <a href="#media-kit-profile" className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-earth-terra">
                View Profile
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="media-kit-profile" className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[360px_1fr]">
            <div>
              <span className="block text-xs uppercase tracking-[0.3em] text-earth-sage">Profile</span>
              <h3 className="mt-3 font-serif text-3xl text-stone-900">概要</h3>
            </div>
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-stone-200 bg-stone-200 md:grid-cols-3">
              {profileFacts.map(([label, value]) => (
                <div key={label} className="bg-stone-50 p-6">
                  <span className="text-xs uppercase tracking-widest text-earth-terra">{label}</span>
                  <p className="mt-4 text-sm leading-loose text-stone-700">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-stone-200 bg-stone-100/70">
          <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-3 md:py-20">
            <article className="bg-stone-50 p-6">
              <MessageSquareText className="h-6 w-6 text-earth-terra" aria-hidden="true" />
              <h3 className="mt-6 font-serif text-2xl text-stone-900">話せるテーマ</h3>
              <ul className="mt-6 space-y-4">
                {topics.map((topic) => (
                  <li key={topic} className="border-t border-stone-200 pt-4 text-sm leading-loose text-stone-600">
                    {topic}
                  </li>
                ))}
              </ul>
            </article>

            <article className="bg-stone-50 p-6">
              <Newspaper className="h-6 w-6 text-earth-terra" aria-hidden="true" />
              <h3 className="mt-6 font-serif text-2xl text-stone-900">掲載・発信先</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {pressMentions.map((name) => (
                  <span key={name} className="border border-stone-200 bg-white px-3 py-2 text-sm text-stone-700">
                    {name}
                  </span>
                ))}
              </div>
            </article>

            <article className="bg-stone-900 p-6 text-stone-50">
              <BriefcaseBusiness className="h-6 w-6 text-earth-gold" aria-hidden="true" />
              <h3 className="mt-6 font-serif text-2xl">依頼の相談</h3>
              <p className="mt-6 text-sm leading-loose text-stone-300">
                記事制作、体験取材、音声企画、アンバサダー相談など、媒体や目的に合わせて整理できます。
              </p>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 border border-stone-500 px-4 py-3 text-xs uppercase tracking-widest text-stone-50 transition-colors hover:border-earth-terra hover:text-earth-terra">
                Contact
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-8 border border-stone-200 bg-stone-50 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <span className="block text-xs uppercase tracking-[0.3em] text-earth-sage">Assets</span>
              <h3 className="mt-3 font-serif text-3xl text-stone-900">素材と実績は段階的に整備中</h3>
              <p className="mt-4 max-w-2xl text-sm leading-loose text-stone-600">
                #15 の根拠確認が進んだら、媒体掲載履歴や専門領域別実績をこのページにも反映します。
              </p>
            </div>
            <a href="#/works" className="inline-flex items-center justify-center gap-2 border border-stone-300 px-5 py-3 text-xs uppercase tracking-widest text-stone-700 transition-colors hover:border-earth-terra hover:text-earth-terra">
              <Download className="h-4 w-4" aria-hidden="true" />
              Works
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MediaKitPage;
