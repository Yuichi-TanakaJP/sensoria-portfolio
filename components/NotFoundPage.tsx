import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Header from './Header';
import { buttonSecondary } from '../lib/buttonStyles';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <Header />
      <main>
        <section className="mx-auto flex min-h-[80vh] max-w-screen-md flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
          <span className="block text-[11px] uppercase tracking-[0.4em] text-earth-sage">Error 404</span>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-stone-900 md:text-7xl">
            迷い込んだページの<br />ようです。
          </h1>
          <p className="mt-10 max-w-xl text-base leading-loose text-stone-600">
            お探しのページは見つかりませんでした。
            <br />
            目次に戻って、別の章をめくってみてください。
          </p>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a href="#" className={`${buttonSecondary} min-w-[200px]`}>
              ホームへ戻る
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#/works" className={`${buttonSecondary} min-w-[200px]`}>
              Works を見る
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NotFoundPage;
