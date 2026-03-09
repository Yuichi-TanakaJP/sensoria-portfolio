import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-stone-100">
      <div className="max-w-screen-md mx-auto px-6 text-center">
        <span className="block text-xs tracking-[0.3em] text-earth-sage uppercase mb-3">Contact</span>
        <h2 className="text-3xl md:text-4xl font-medium font-serif text-stone-800 tracking-wider mb-8">
          ご相談・ご依頼
        </h2>
        <p className="text-stone-600 leading-loose mb-10">
          執筆、編集、コンセプト設計のご相談は、以下のメールまたはSNSからご連絡ください。
          <br />
          内容を確認後、通常2営業日以内を目安に返信します。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contact@sensoria.example"
            className="px-8 py-3 bg-stone-800 text-stone-50 text-sm tracking-widest hover:bg-earth-terra transition-colors duration-300"
          >
            メールで連絡する
          </a>
          <a
            href="https://example.com/sensoria-instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-stone-400 text-stone-700 text-sm tracking-widest hover:border-earth-terra hover:text-earth-terra transition-colors duration-300"
          >
            Instagramを見る
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
