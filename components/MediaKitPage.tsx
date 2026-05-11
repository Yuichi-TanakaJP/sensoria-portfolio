import React from 'react';
import { ArrowUpRight, BriefcaseBusiness, Download, Mail, MessageSquareText, Newspaper, Sparkles } from 'lucide-react';
import Header from './Header';
import { buttonSecondary, buttonSecondaryOnDark } from '../lib/buttonStyles';
import { card, cardDark, cardFlat } from '../lib/surfaces';
import { pressMentions } from '../data/press';

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

const MediaKitPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-br from-stone-50 via-stone-50 to-stone-100">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-[-3rem] top-4 hidden select-none font-serif text-[12rem] leading-none text-stone-200/70 lg:block"
          >
            Kit
          </span>
          <div className="relative mx-auto grid max-w-screen-xl grid-cols-1 gap-10 px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:grid-cols-[1fr_380px] lg:items-end">
            <div>
              <span className="mb-5 block text-xs uppercase tracking-[0.3em] text-earth-sage">For Editors / Partners</span>
              <h1 className="font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
                紹介しやすく、
                <br />
                依頼しやすい資料室。
              </h1>
              <p className="mt-8 max-w-2xl text-sm leading-loose text-stone-600 md:text-base">
                プロフィール、得意テーマ、掲載媒体、問い合わせ導線をまとめた簡易メディアキットです。取材、寄稿、アンバサダー、音声企画などの検討に使えます。
              </p>
            </div>
            <div className={card}>
              <Sparkles className="h-6 w-6 text-stone-600" aria-hidden="true" />
              <p className="mt-6 font-serif text-2xl leading-relaxed text-stone-900">
                五感を切り口に、体験と読者の暮らしをつなぐ発信者。
              </p>
              <a href="#media-kit-profile" className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-700">
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
                <div key={label} className={cardFlat}>
                  <span className="text-xs uppercase tracking-widest text-stone-500">{label}</span>
                  <p className="mt-4 text-sm leading-loose text-stone-700">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-stone-200 bg-stone-100/70">
          <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-3 md:py-20">
            <article className={cardFlat}>
              <MessageSquareText className="h-6 w-6 text-stone-600" aria-hidden="true" />
              <h3 className="mt-6 font-serif text-2xl text-stone-900">話せるテーマ</h3>
              <ul className="mt-6 space-y-4">
                {topics.map((topic) => (
                  <li key={topic} className="border-t border-stone-200 pt-4 text-sm leading-loose text-stone-600">
                    {topic}
                  </li>
                ))}
              </ul>
            </article>

            <article className={cardFlat}>
              <Newspaper className="h-6 w-6 text-stone-600" aria-hidden="true" />
              <h3 className="mt-6 font-serif text-2xl text-stone-900">掲載・発信先</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {pressMentions.map((name) => (
                  <span key={name} className="border border-stone-200 bg-white px-3 py-2 text-sm text-stone-700">
                    {name}
                  </span>
                ))}
              </div>
            </article>

            <article className={cardDark}>
              <BriefcaseBusiness className="h-6 w-6 text-stone-900" aria-hidden="true" />
              <h3 className="mt-6 font-serif text-2xl">依頼の相談</h3>
              <p className="mt-6 text-sm leading-loose text-stone-300">
                記事制作、体験取材、音声企画、アンバサダー相談など、媒体や目的に合わせて整理できます。
              </p>
              <a href="#contact" className={`mt-8 ${buttonSecondaryOnDark}`}>
                Contact
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
          <div className={`${card} grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-center`}>
            <div>
              <span className="block text-xs uppercase tracking-[0.3em] text-earth-sage">Assets</span>
              <h3 className="mt-3 font-serif text-3xl text-stone-900">素材と実績は段階的に整備中</h3>
              <p className="mt-4 max-w-2xl text-sm leading-loose text-stone-600">
                #15 の根拠確認が進んだら、媒体掲載履歴や専門領域別実績をこのページにも反映します。
              </p>
            </div>
            <a href="#/works" className={buttonSecondary}>
              <span className="inline-flex items-center gap-3">
                <Download className="h-4 w-4" aria-hidden="true" />
                Works
              </span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MediaKitPage;
