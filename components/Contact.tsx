import React from 'react';
import { ArrowUpRight, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-stone-50 py-24 md:py-32">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="mb-12 grid grid-cols-1 gap-3 md:mb-16 md:grid-cols-[auto_1fr_auto] md:items-end">
          <span className="text-[11px] uppercase tracking-[0.4em] text-earth-sage">Chapter 04 — Contact</span>
          <div aria-hidden="true" className="hidden h-[1px] bg-stone-300 md:block" />
          <span className="text-[11px] uppercase tracking-[0.4em] text-stone-400">ご相談・ご依頼</span>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr] md:gap-20 md:items-center">
          <div>
            <h2 className="font-serif text-3xl leading-tight text-stone-900 md:text-5xl">
              企画のご相談から、<br />
              ご依頼まで。
            </h2>
            <p className="mt-8 max-w-xl text-base leading-loose text-stone-600">
              執筆、編集、コンセプト設計のご相談を承っています。
              内容を確認後、通常 2 営業日以内を目安に返信します。
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="mailto:contact@sensoria.example"
              className="group flex items-center justify-between gap-4 bg-earth-terra px-6 py-5 text-sm tracking-widest text-stone-50 transition-colors hover:bg-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra/60 focus-visible:ring-offset-2"
            >
              <span className="uppercase">メールで連絡する</span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/rika05181/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 border border-stone-400 px-6 py-5 text-sm tracking-widest text-stone-700 transition-colors hover:border-earth-terra hover:text-earth-terra focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earth-terra/60"
            >
              <span className="uppercase inline-flex items-center gap-3">
                <Instagram className="h-4 w-4" aria-hidden="true" />
                Instagram で見る
              </span>
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
