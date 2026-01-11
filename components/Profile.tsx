import React from 'react';

const Profile: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Image Area */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mr-auto">
             <img 
              src="https://picsum.photos/id/64/800/1067" 
              alt="Profile Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-stone-300 -z-10"></div>
          </div>
        </div>

        {/* Text Area */}
        <div className="w-full lg:w-1/2">
          <span className="block text-xs tracking-[0.3em] text-earth-sage uppercase mb-4">About & Works</span>
          <h2 className="text-3xl md:text-4xl font-medium font-serif text-stone-800 tracking-widest mb-8">
            五感を通じて、<br />美意識を磨く。
          </h2>
          
          <div className="space-y-6 text-stone-600 leading-loose font-serif text-sm md:text-base">
            <p>
              <strong>Profile Name</strong>
              <br />
              アート、旅、美容をテーマに執筆活動を行うライター・エディター。
            </p>
            <p>
              「五感を通じて美意識を磨く」をライフテーマとし、美術館の静寂、異国の風の匂い、上質な化粧品のテクスチャなど、感覚に響く体験を言葉に紡いでいる。
            </p>
            <p>
              日本経済新聞電子版（日経Web）にてコラムを連載し、通算300本以上の記事を執筆。数字やスペックだけでなく、「どう感じるか」という情緒的価値を伝える執筆スタイルに定評がある。
            </p>
            <p>
              現在はWebメディアのディレクションや、ブランドのコンセプトメイキングを中心に活動中。
            </p>
          </div>

          <div className="mt-10">
            <a href="#contact" className="inline-block border-b border-stone-800 pb-1 text-stone-800 tracking-widest hover:text-earth-terra hover:border-earth-terra transition-colors">
              詳しいプロフィール・実績を見る →
            </a>
          </div>

          {/* Works Summary */}
          <div className="mt-16 pt-8 border-t border-stone-200 grid grid-cols-2 gap-8">
             <div>
                <span className="block text-3xl font-medium font-serif text-earth-gold mb-1">300+</span>
                <span className="text-xs tracking-widest text-stone-500">ARTICLES WRITTEN</span>
             </div>
             <div>
                <span className="block text-3xl font-medium font-serif text-earth-gold mb-1">10yr</span>
                <span className="text-xs tracking-widest text-stone-500">EXPERIENCE</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;