import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Area */}
      <div className="absolute inset-0 z-0">
        {/* Image */}
        <img 
          src="https://picsum.photos/id/28/1920/1080" 
          alt="Forest and light atmosphere" 
          className="w-full h-full object-cover"
        />
        
        {/* Vellum Layer: Semi-transparent white overlay to mimic tracing paper */}
        {/* This makes dark text readable while keeping the image atmospheric */}
        <div className="absolute inset-0 bg-stone-50/60 backdrop-blur-[2px]" />

        {/* Gradient Fade: Seamless transition to the content below */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-50/20 to-stone-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-md mx-auto px-6 text-center pt-20">
        <p className="text-earth-sage font-medium tracking-[0.3em] text-sm md:text-base mb-6 uppercase fade-in-up" style={{ animationDelay: '0.2s' }}>
          Five Senses Beauty
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium font-serif text-stone-900 leading-tight mb-8 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <span className="block mb-2 md:mb-4">視覚を磨き、</span>
          <span className="block">触覚を癒やす。</span>
        </h1>

        <div className="h-12 w-[1px] bg-stone-400 mx-auto mb-8 fade-in-up" style={{ animationDelay: '0.6s' }}></div>

        <p className="text-stone-800 text-lg md:text-xl font-serif leading-relaxed tracking-wider fade-in-up" style={{ animationDelay: '0.8s' }}>
          アート、旅、美容で紡ぐ<br className="md:hidden" />「五感美容」の記録。
        </p>
        
        <p className="mt-8 text-sm text-stone-600 tracking-widest fade-in-up" style={{ animationDelay: '1s' }}>
          日経Webでの300本の連載を経てたどり着いた、<br className="md:hidden" />心地よい暮らしの美学。
        </p>
      </div>
    </section>
  );
};

export default Hero;