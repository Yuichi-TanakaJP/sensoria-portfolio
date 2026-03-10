import React from 'react';
import { Article } from '../types';

const featuredItems: Article[] = [
  {
    id: '1',
    title: '瀬戸内の光と影。アートが教えてくれる「見る」ことの豊かさ。',
    category: 'Art',
    tags: ['アート', '旅', '視覚'],
    image: 'https://picsum.photos/id/1040/800/1000',
    excerpt: '直島の美術館で出会った静寂と光。感覚が研ぎ澄まされる時間の価値を掘り下げます。',
    date: '2023.10.15',
  },
  {
    id: '2',
    title: 'なぜ、そのクリームに癒やされるのか。肌が喜ぶ「触り心地」の秘密。',
    category: 'Beauty',
    tags: ['美容', 'スキンケア', '触覚'],
    image: 'https://picsum.photos/id/360/800/1000',
    excerpt: 'テクスチャは機能以上に体験を決める。触覚視点でスキンケアの選び方を整理します。',
    date: '2023.10.22',
  },
  {
    id: '3',
    title: '記憶を呼び覚ます香り。旅先で出会った一生モノのパフューム。',
    category: 'Travel',
    tags: ['旅', '美容', '嗅覚'],
    image: 'https://picsum.photos/id/292/800/1000',
    excerpt: '香りが呼び戻す旅の記憶。嗅覚とストーリーの関係を、実体験をもとに紹介します。',
    date: '2023.10.30',
  },
];

const FeaturedPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="sticky top-0 z-20 bg-stone-50/95 backdrop-blur border-b border-stone-200">
        <div className="max-w-screen-xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="text-sm tracking-widest text-stone-600 hover:text-earth-terra transition-colors uppercase">
            Top Page
          </a>
          <h1 className="text-lg md:text-2xl font-serif tracking-widest text-stone-900">特集一覧</h1>
          <a href="#/journal" className="text-sm tracking-widest text-stone-600 hover:text-earth-terra transition-colors uppercase">
            Journal
          </a>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {featuredItems.map((item) => (
            <article key={item.id} className="bg-white border border-stone-200 p-5 md:p-6">
              <div className="relative overflow-hidden aspect-[4/5] mb-5">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-medium text-earth-terra uppercase tracking-wider">{item.category}</span>
                <span className="text-xs text-stone-400">{item.date}</span>
              </div>
              <h2 className="text-lg font-serif text-stone-900 leading-relaxed mb-3">{item.title}</h2>
              <p className="text-sm text-stone-600 leading-loose">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FeaturedPage;
