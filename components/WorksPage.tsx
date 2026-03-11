import React from 'react';

type DetailItem = {
  title: string;
  category: string;
  overview: string;
  achievements: string[];
};

const detailItems: DetailItem[] = [
  {
    title: 'Nikkei Web 連載',
    category: 'Editorial',
    overview: 'アート・旅・美容領域で、読後に感覚が残る構成を軸に執筆。媒体のトーンと個人の文体を両立させる編集設計を担当。',
    achievements: [
      '特集記事の企画立案から執筆まで一貫して実施',
      '読者導線を意識した見出し・リード最適化',
      '取材メモを活用した一次情報ベースのストーリー化',
    ],
  },
  {
    title: 'ブランドコンセプト設計',
    category: 'Direction',
    overview: '言葉・体験・ビジュアルを同一の思想で束ね、ブランドの世界観を継続的に運用できる状態へ整備。',
    achievements: [
      'ブランドステートメントとトーンガイドを策定',
      'サービス体験に合わせたコピーラインを再設計',
      '運用チーム向けの編集ルールを整備',
    ],
  },
  {
    title: 'Webメディア監修',
    category: 'Consulting',
    overview: '編集方針とUI体験の接続を支援し、可読性と雰囲気の両立を重視した改善サイクルを実行。',
    achievements: [
      '記事テンプレートと情報設計を監修',
      'コンテンツ評価軸の導入で更新優先度を明確化',
      '編集・デザイン間の制作フローを標準化',
    ],
  },
];

const WorksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="sticky top-0 z-20 bg-stone-50/95 backdrop-blur border-b border-stone-200">
        <div className="max-w-screen-xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="text-sm tracking-widest text-stone-600 hover:text-earth-terra transition-colors uppercase">
            Top Page
          </a>
          <h1 className="text-lg md:text-2xl font-serif tracking-widest text-stone-900">活動と実績</h1>
          <a href="#contact" className="text-sm tracking-widest text-stone-600 hover:text-earth-terra transition-colors uppercase">
            Contact
          </a>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-6 py-16 md:py-24">
        <p className="text-sm md:text-base text-stone-600 leading-loose mb-12 md:mb-16 max-w-3xl">
          Sensoriaの活動履歴を、執筆・設計・監修の3領域で整理しています。案件の規模よりも、意図が伝わる構成と体験品質を重視して取り組んできた実績です。
        </p>

        <div className="space-y-8 md:space-y-10">
          {detailItems.map((item) => (
            <article key={item.title} className="border border-stone-200 bg-white p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                <h2 className="text-2xl font-serif text-stone-900">{item.title}</h2>
                <span className="text-xs tracking-widest uppercase text-earth-terra">{item.category}</span>
              </div>
              <p className="text-stone-600 leading-loose mb-6">{item.overview}</p>
              <ul className="space-y-3">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="text-sm md:text-base text-stone-700 leading-relaxed">
                    ・{achievement}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default WorksPage;
