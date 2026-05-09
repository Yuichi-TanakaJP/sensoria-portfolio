import React from 'react';
import { ArrowUpRight, BookOpenText, Headphones, Landmark, Mail, Newspaper, Sparkles } from 'lucide-react';
import { WorksLinkItem } from '../types';
import {
  achievementLinkCategories,
  featuredWorks,
  worksDetailItems,
  worksMetrics,
} from '../data/works';

const getCta = (item: WorksLinkItem): WorksLinkItem['cta'] => {
  if (item.cta) {
    return item.cta;
  }
  if (item.url.includes('instagram.com')) {
    return 'Follow';
  }
  if (item.url.includes('voicy.jp')) {
    return 'Listen';
  }
  if (item.url.includes('biteki.com') || item.url.includes('nikkei.com')) {
    return 'Read';
  }
  return 'Visit';
};

const getDomainLabel = (url: string): string => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
};

const categoryIcons = [BookOpenText, Newspaper, Landmark, Headphones, Sparkles];

const WorksPage: React.FC = () => {
  const totalLinks = achievementLinkCategories.reduce((sum, category) => sum + category.items.length, 0);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-5">
          <a href="#" className="text-sm uppercase tracking-widest text-stone-600 transition-colors hover:text-earth-terra">
            Top
          </a>
          <h1 className="text-base tracking-widest text-stone-900 md:text-xl">活動と実績</h1>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-stone-600 transition-colors hover:text-earth-terra">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Contact
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-stone-200">
          <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block">
            <img src="/hero-snoopy.jpg" alt="" className="h-full w-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-stone-50/35" />
          </div>
          <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1fr_360px] lg:items-end">
            <div className="relative z-10 max-w-3xl">
              <span className="mb-5 block text-xs uppercase tracking-[0.3em] text-earth-sage">Works Portfolio</span>
              <h2 className="font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
                五感で見つけた価値を、
                <br />
                読みたくなる実績へ。
              </h2>
              <p className="mt-8 max-w-2xl text-sm leading-loose text-stone-600 md:text-base">
                美容、旅、アート、文化、音声配信まで。媒体ごとの文脈に寄り添いながら、体験を言葉と導線に整えてきた活動をまとめています。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#featured-works" className="border border-stone-800 bg-stone-800 px-5 py-3 text-xs uppercase tracking-widest text-stone-50 transition-colors hover:border-earth-terra hover:bg-earth-terra">
                  Featured
                </a>
                <a href="#link-library" className="border border-stone-300 px-5 py-3 text-xs uppercase tracking-widest text-stone-700 transition-colors hover:border-earth-terra hover:text-earth-terra">
                  Link Library
                </a>
                <a href="#/media-kit" className="border border-stone-300 px-5 py-3 text-xs uppercase tracking-widest text-stone-700 transition-colors hover:border-earth-terra hover:text-earth-terra">
                  Media Kit
                </a>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 gap-3">
              {worksMetrics.map((metric) => (
                <div key={metric.label} className="border border-stone-200 bg-stone-50/90 p-5 backdrop-blur">
                  <span className="block font-serif text-4xl text-earth-gold">{metric.value}</span>
                  <span className="mt-2 block text-xs uppercase tracking-widest text-stone-500">{metric.label}</span>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{metric.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="featured-works" className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
          <div className="mb-8 grid grid-cols-1 gap-6 border-b border-stone-200 pb-5 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <span className="block text-xs uppercase tracking-[0.3em] text-earth-sage">Selected Works</span>
              <h3 className="mt-3 font-serif text-3xl text-stone-900 md:text-4xl">代表的な導線</h3>
            </div>
            <span className="text-xs uppercase tracking-widest text-stone-500">{featuredWorks.length} Highlights</span>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {featuredWorks.map((work, index) => (
              <a
                key={work.title}
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group min-h-[260px] border border-stone-200 bg-stone-100 p-6 transition-colors hover:border-earth-terra/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra/60"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs uppercase tracking-widest text-earth-terra">{work.label}</span>
                  <span className="font-serif text-3xl text-stone-300">0{index + 1}</span>
                </div>
                <h4 className="mt-14 font-serif text-2xl leading-relaxed text-stone-900">{work.title}</h4>
                <p className="mt-4 text-sm leading-loose text-stone-600">{work.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 transition-colors group-hover:text-earth-terra">
                  View
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="border-y border-stone-200 bg-stone-100/70">
          <div className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-[320px_1fr]">
              <div>
                <span className="block text-xs uppercase tracking-[0.3em] text-earth-sage">Expertise</span>
                <h3 className="mt-3 font-serif text-3xl text-stone-900">活動カテゴリ</h3>
              </div>
              <p className="text-sm leading-loose text-stone-600">
                どの媒体でも、単なる情報整理ではなく、体験の輪郭と読者の行動をつなげることを大切にしています。
              </p>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden border border-stone-200 bg-stone-200 md:grid-cols-2 lg:grid-cols-5">
              {worksDetailItems.map((item, index) => {
                const Icon = categoryIcons[index] ?? Sparkles;
                return (
                  <article key={item.title} className="bg-stone-50 p-5 md:p-6">
                    <Icon className="h-5 w-5 text-earth-terra" aria-hidden="true" />
                    <span className="mt-5 block text-xs uppercase tracking-widest text-stone-400">{item.category}</span>
                    <h4 className="mt-3 font-serif text-lg leading-relaxed text-stone-900">{item.title}</h4>
                    <p className="mt-4 text-sm leading-loose text-stone-600">{item.overview}</p>
                    <p className="mt-5 border-t border-stone-200 pt-4 text-sm leading-loose text-earth-sage">{item.tone}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="link-library" className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
          <div className="mb-8 grid grid-cols-1 gap-6 border-b border-stone-200 pb-5 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <span className="block text-xs uppercase tracking-[0.3em] text-earth-sage">Archive</span>
              <h3 className="mt-3 font-serif text-3xl text-stone-900 md:text-4xl">掲載リンク</h3>
            </div>
            <span className="text-xs uppercase tracking-widest text-stone-500">{totalLinks} Links</span>
          </div>

          <nav aria-label="掲載リンクカテゴリ" className="mb-12 grid grid-cols-2 gap-2 md:grid-cols-5">
            {achievementLinkCategories.map((category) => (
              <a
                key={category.name}
                href={`#works-${category.slug}`}
                className="border border-stone-200 bg-stone-50 px-4 py-4 transition-colors hover:border-earth-terra/60 hover:text-earth-terra focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra/60"
              >
                <span className="block font-serif text-base text-stone-900">{category.name}</span>
                <span className="mt-2 block text-[11px] uppercase tracking-widest text-stone-400">{category.items.length} Links</span>
              </a>
            ))}
          </nav>

          <div className="space-y-14">
            {achievementLinkCategories.map((category) => (
              <section key={category.name} id={`works-${category.slug}`} className="scroll-mt-24">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[280px_1fr] lg:gap-10">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-earth-terra">{category.items.length} Links</span>
                    <h4 className="mt-3 font-serif text-2xl text-stone-900">{category.name}</h4>
                    <p className="mt-3 text-sm leading-loose text-stone-600">{category.lead}</p>
                  </div>

                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {category.items.map((link) => (
                      <a
                        key={`${category.name}-${link.title}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group border border-stone-200 bg-stone-50 px-5 py-4 transition-colors hover:border-earth-terra/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra/60"
                      >
                        <p className="text-sm leading-relaxed text-stone-800 md:text-base">{link.title}</p>
                        <div className="mt-4 flex items-center justify-between gap-4 text-[11px] uppercase tracking-widest">
                          <span className="min-w-0 truncate text-stone-400">{getDomainLabel(link.url)}</span>
                          <span className="inline-flex flex-none items-center gap-1 text-earth-terra">
                            {getCta(link)}
                            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="border-t border-stone-200 bg-stone-900 text-stone-50">
          <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-6 py-14 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="block text-xs uppercase tracking-[0.3em] text-stone-400">Next</span>
              <h3 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">媒体資料としても、実績集としても使えるページへ。</h3>
              <p className="mt-4 max-w-2xl text-sm leading-loose text-stone-300">
                #15 の確認が進んだら、美術館・ホテル・伝統工芸を根拠URL付きで追加し、より専門性の見えるページに育てます。
              </p>
            </div>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 border border-stone-500 px-6 py-3 text-xs uppercase tracking-widest text-stone-50 transition-colors hover:border-earth-terra hover:text-earth-terra">
              Contact
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#/media-kit" className="inline-flex items-center justify-center gap-2 border border-stone-500 px-6 py-3 text-xs uppercase tracking-widest text-stone-50 transition-colors hover:border-earth-terra hover:text-earth-terra">
              Media Kit
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WorksPage;
