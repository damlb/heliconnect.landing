import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Overlay bleu profond avec opacité pour assombrir la vidéo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D51]/95 via-[#1a365d]/90 to-[#2d4a7c]/95 z-10"></div>
      
      {/* Vidéo d'hélicoptère en arrière-plan */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover blur-sm"
          aria-label="Vidéo d'ambiance : hélicoptère en vol"
        >
          <source src="/videos/helicopter-flight.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Contenu principal */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-block mb-8">
          <span className="bg-[#D4AF64]/15 backdrop-blur-md px-6 py-2 rounded-full text-[#E8D4A0] text-sm font-medium border border-[#D4AF64]/30">
            Plateforme B2B pour professionnels du tourisme
          </span>
        </div>

        {/* Titre principal */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Vols privés à tarifs privilégiés
        </h1>

        {/* Sous-titre */}
        <p className="text-xl md:text-2xl text-white/95 mb-4 font-light leading-relaxed max-w-3xl mx-auto">
          Accédez en priorité aux meilleures opportunités de vols à vide
        </p>

        {/* Accent écologique */}
        <p className="text-lg md:text-xl text-[#6EE7B7] mb-10 font-normal">
          Moins cher • Plus vert
        </p>

        {/* CTA */}
        <a
          href="#tarifs"
          className="inline-block bg-gradient-to-r from-[#D4AF64] to-[#C99846] text-[#0B1D51] px-10 py-4 rounded-xl text-lg font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg"
        >
          Découvrir l'offre
        </a>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#6EE7B7]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Gratuit jusqu'au 30 juillet 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#6EE7B7]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Accès prioritaire 48h</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#6EE7B7]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Impact environnemental positif</span>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-10 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}