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

const allTopics = Array.from(
  new Set(
    achievementLinkCategories.flatMap((category) => category.items.flatMap((item) => item.topic ?? []))
  )
).sort();

const readTopicsFromUrl = (): string[] => {
  if (typeof window === 'undefined') return [];
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('topics');
  return raw ? raw.split(',').filter(Boolean) : [];
};

const WorksPage: React.FC = () => {
  const [activeTopics, setActiveTopics] = React.useState<string[]>(readTopicsFromUrl);
  const [activeCategorySlug, setActiveCategorySlug] = React.useState<string | null>(null);
  const totalLinks = achievementLinkCategories.reduce((sum, category) => sum + category.items.length, 0);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (activeTopics.length === 0) {
      params.delete('topics');
    } else {
      params.set('topics', activeTopics.join(','));
    }
    const search = params.toString();
    const next = window.location.pathname + (search ? `?${search}` : '') + window.location.hash;
    window.history.replaceState(null, '', next);
  }, [activeTopics]);

  const toggleTopic = React.useCallback((topic: string) => {
    setActiveTopics((prev) => (prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]));
  }, []);

  const clearTopics = React.useCallback(() => setActiveTopics([]), []);

  const filteredCategories = React.useMemo(() => {
    if (activeTopics.length === 0) return achievementLinkCategories;
    return achievementLinkCategories
      .map((category) => ({
        ...category,
        items: category.items.filter((item) => item.topic?.some((t) => activeTopics.includes(t))),
      }))
      .filter((category) => category.items.length > 0);
  }, [activeTopics]);

  const noResults = activeTopics.length > 0 && filteredCategories.length === 0;
  const filteredCount = filteredCategories.reduce((sum, c) => sum + c.items.length, 0);

  React.useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-category-section]'));
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop);
        if (visible[0]) {
          setActiveCategorySlug(visible[0].target.getAttribute('data-category-slug'));
        }
      },
      { rootMargin: '-30% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [filteredCategories.length]);

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
        <section className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-br from-stone-50 via-stone-50 to-stone-100">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-[-2rem] top-8 hidden select-none font-serif text-[10rem] leading-none text-stone-200/70 lg:block"
          >
            Vol.
          </span>
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

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {featuredWorks.map((work, index) => {
              const meta = [work.year ? String(work.year) : null, work.mediaName ?? null].filter(Boolean) as string[];
              return (
                <a
                  key={work.title}
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col overflow-hidden border border-stone-200 bg-stone-50 transition-colors hover:border-earth-terra/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra/60"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-stone-100 via-stone-200 to-stone-300">
                    {work.keyVisual ? (
                      <img
                        src={work.keyVisual}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span aria-hidden="true" className="select-none font-serif text-[8rem] leading-none text-stone-400/60 transition-transform duration-700 ease-out group-hover:scale-105">
                          0{index + 1}
                        </span>
                      </div>
                    )}
                    <span className="absolute left-4 top-4 inline-flex items-center bg-stone-900/85 px-3 py-1 text-[11px] uppercase tracking-widest text-stone-50 backdrop-blur">
                      {work.label}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    {meta.length > 0 && (
                      <span className="text-[11px] uppercase tracking-widest text-stone-500">{meta.join(' · ')}</span>
                    )}
                    <h4 className="mt-3 font-serif text-2xl leading-relaxed text-stone-900">{work.title}</h4>
                    <p className="mt-4 text-sm leading-loose text-stone-600">{work.summary}</p>
                    {work.quote && (
                      <blockquote className="mt-5 border-l-2 border-earth-terra pl-4 font-serif text-sm italic leading-loose text-earth-sage">
                        “{work.quote}”
                      </blockquote>
                    )}
                    <span className="mt-auto pt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 transition-colors group-hover:text-earth-terra">
                      View
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </a>
              );
            })}
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
            <span className="text-xs uppercase tracking-widest text-stone-500">
              {activeTopics.length > 0 ? `${filteredCount} / ${totalLinks}` : `${totalLinks}`} Links
            </span>
          </div>

          {/* Topic filter chips */}
          <div className="mb-6">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-widest text-stone-500">Filter by topic</span>
              {activeTopics.length > 0 && (
                <button
                  type="button"
                  onClick={clearTopics}
                  className="text-[11px] uppercase tracking-widest text-earth-terra transition-colors hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra/60"
                >
                  Clear ({activeTopics.length})
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {allTopics.map((topic) => {
                const isActive = activeTopics.includes(topic);
                return (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => toggleTopic(topic)}
                    aria-pressed={isActive}
                    className={
                      isActive
                        ? 'border border-earth-terra bg-earth-terra px-3 py-1.5 text-xs text-stone-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra/60'
                        : 'border border-stone-300 bg-stone-50 px-3 py-1.5 text-xs text-stone-700 transition-colors hover:border-earth-terra hover:text-earth-terra focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra/60'
                    }
                  >
                    {topic}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sticky category TOC (horizontal scroll on mobile) */}
          <nav
            aria-label="掲載リンクカテゴリ"
            className="sticky top-[56px] z-10 -mx-6 mb-10 flex gap-2 overflow-x-auto border-y border-stone-200 bg-stone-50/95 px-6 py-3 backdrop-blur md:top-[64px]"
          >
            {filteredCategories.map((category) => {
              const isActive = activeCategorySlug === category.slug;
              return (
                <a
                  key={category.name}
                  href={`#works-${category.slug}`}
                  className={
                    'flex-none border px-4 py-2 text-xs uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra/60 ' +
                    (isActive
                      ? 'border-earth-terra bg-earth-terra/10 text-earth-terra'
                      : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-earth-terra/60 hover:text-earth-terra')
                  }
                >
                  <span className="font-serif text-sm">{category.name}</span>
                  <span className="ml-2 text-[10px] text-stone-400">{category.items.length}</span>
                </a>
              );
            })}
          </nav>

          {noResults ? (
            <div className="border border-dashed border-stone-300 bg-stone-50 px-6 py-12 text-center">
              <p className="font-serif text-lg text-stone-700">該当する掲載が見つかりませんでした。</p>
              <p className="mt-3 text-sm leading-loose text-stone-500">フィルタを解除すると、すべての掲載リンクが表示されます。</p>
              <button
                type="button"
                onClick={clearTopics}
                className="mt-6 inline-flex items-center gap-2 border border-stone-400 px-5 py-2 text-xs uppercase tracking-widest text-stone-700 transition-colors hover:border-earth-terra hover:text-earth-terra focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra/60"
              >
                Clear filters
              </button>
            </div>
          ) : (
          <div className="space-y-14">
            {filteredCategories.map((category) => (
              <section
                key={category.name}
                id={`works-${category.slug}`}
                data-category-section
                data-category-slug={category.slug}
                className="scroll-mt-32"
              >
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[280px_1fr] lg:gap-10">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-earth-terra">{category.items.length} Links</span>
                    <h4 className="mt-3 font-serif text-2xl text-stone-900">{category.name}</h4>
                    <p className="mt-3 text-sm leading-loose text-stone-600">{category.lead}</p>
                  </div>

                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {(category.displayLimit ? category.items.slice(0, category.displayLimit) : category.items).map((link) => {
                      const metaParts = [
                        link.year ? String(link.year) : null,
                        link.mediaName ?? null,
                        link.topic?.length ? link.topic.join(' / ') : null,
                      ].filter(Boolean) as string[];
                      return (
                        <a
                          key={`${category.name}-${link.title}`}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work-link group border border-stone-200 bg-stone-50 px-5 py-4 transition-colors hover:border-earth-terra/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra/60"
                        >
                          <p className="work-title text-sm leading-relaxed text-stone-800 md:text-base">{link.title}</p>
                          {metaParts.length > 0 && (
                            <p className="mt-2 text-xs leading-relaxed text-stone-500">
                              {metaParts.join(' · ')}
                            </p>
                          )}
                          <div className="mt-4 flex items-center justify-between gap-4 text-[11px] uppercase tracking-widest">
                            <span className="min-w-0 truncate text-stone-400">{getDomainLabel(link.url)}</span>
                            <span className="inline-flex flex-none items-center gap-1 text-earth-terra">
                              {getCta(link)}
                              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </span>
                          </div>
                        </a>
                      );
                    })}
                    {category.viewAllUrl && (
                      <a
                        href={category.viewAllUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col justify-between border border-dashed border-stone-300 bg-stone-50 px-5 py-4 transition-colors hover:border-earth-terra/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra/60 md:col-span-2"
                      >
                        <p className="font-serif text-base leading-relaxed text-stone-800 md:text-lg">
                          {category.viewAllLabel ?? 'すべて見る'}
                        </p>
                        <div className="mt-4 flex items-center justify-between gap-4 text-[11px] uppercase tracking-widest">
                          <span className="min-w-0 truncate text-stone-400">{getDomainLabel(category.viewAllUrl)}</span>
                          <span className="inline-flex flex-none items-center gap-1 text-earth-terra">
                            View all
                            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </section>
            ))}
          </div>
          )}
        </section>

        <section className="border-t border-stone-200 bg-stone-900 text-stone-50">
          <div className="mx-auto max-w-screen-xl px-6 py-14 md:py-20">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <span className="block text-xs uppercase tracking-[0.3em] text-earth-gold">For Editors / Partners</span>
                <h3 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">取材・寄稿・依頼の方へ</h3>
                <p className="mt-4 max-w-2xl text-sm leading-loose text-stone-300">
                  媒体やテーマに合わせた企画にも対応しています。まずはメディアキットで概要をご確認の上、ご相談ください。
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-stone-50 px-6 py-3 text-xs uppercase tracking-widest text-stone-900 transition-colors hover:bg-earth-terra hover:text-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
                >
                  Contact
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#/media-kit"
                  className="inline-flex items-center justify-center gap-2 border border-stone-500 px-6 py-3 text-xs uppercase tracking-widest text-stone-50 transition-colors hover:border-earth-terra hover:text-earth-terra focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
                >
                  Media Kit
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <p className="mt-10 border-t border-stone-700 pt-6 text-xs leading-relaxed text-stone-500">
              掲載媒体や取材記録は順次更新しています。
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WorksPage;
