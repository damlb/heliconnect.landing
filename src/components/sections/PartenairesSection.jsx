import React from 'react';

export default function PartenairesSection() {
  // Logos compagnies placeholder (à remplacer par vraies images)
  const compagnies = [
    { nom: "Heli Prestige", emoji: "🚁" },
    { nom: "Sky Rotors", emoji: "🚁" },
    { nom: "Azur Hélicoptères", emoji: "🚁" },
    { nom: "Elite Aviation", emoji: "🚁" },
    { nom: "Monaco Air", emoji: "🚁" },
    { nom: "Corsica Helicopters", emoji: "🚁" },
    { nom: "Alpine Flights", emoji: "🚁" },
    { nom: "Riviera Wings", emoji: "🚁" },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1D51] mb-4 font-poppins">
            Nos compagnies partenaires
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Les meilleures compagnies d'hélicoptères nous font confiance
          </p>
        </div>

        {/* Carrousel infini de logos */}
        <div className="relative">
          {/* Gradient gauche */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          
          {/* Gradient droit */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Conteneur du carrousel */}
          <div className="overflow-hidden py-8">
            <div className="flex animate-scroll-infinite gap-16">
              {/* Premier set de logos */}
              {compagnies.map((compagnie, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-48 h-32 bg-gradient-to-br from-[#0B1D51] to-[#2d4a7c] rounded-2xl flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-[#D4AF64]/20"
                >
                  <div className="text-5xl mb-2">{compagnie.emoji}</div>
                  <div className="text-white font-semibold text-sm">{compagnie.nom}</div>
                </div>
              ))}
              
              {/* Duplication pour effet infini */}
              {compagnies.map((compagnie, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-48 h-32 bg-gradient-to-br from-[#0B1D51] to-[#2d4a7c] rounded-2xl flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-[#D4AF64]/20"
                >
                  <div className="text-5xl mb-2">{compagnie.emoji}</div>
                  <div className="text-white font-semibold text-sm">{compagnie.nom}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Note en bas */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-[#D4AF64]/10 px-6 py-3 rounded-full border border-[#D4AF64]/20">
            <span className="text-[#C99846] font-semibold">
              + de 50 compagnies partenaires en France et en Europe
            </span>
          </div>
        </div>
      </div>

      {/* Animation CSS inline */}
      <style jsx>{`
        @keyframes scroll-infinite {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 40s linear infinite;
        }

        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}