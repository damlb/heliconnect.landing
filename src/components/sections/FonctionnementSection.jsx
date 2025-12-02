import React from 'react';
import { UserPlus, Settings, Zap, CheckCircle } from 'lucide-react';

export default function FonctionnementSection() {
  const etapes = [
    {
      numero: 1,
      icon: UserPlus,
      titre: "Inscription gratuite",
      description: "Créez votre compte professionnel en moins de 2 minutes. Gratuit jusqu'au 30 juillet 2025."
    },
    {
      numero: 2,
      icon: Settings,
      titre: "Définissez vos critères",
      description: "Renseignez vos destinations favorites et recevez uniquement les vols qui vous intéressent."
    },
    {
      numero: 3,
      icon: Zap,
      titre: "Accès prioritaire 48h",
      description: "Découvrez les vols à vide 48h avant leur publication au grand public."
    },
    {
      numero: 4,
      icon: CheckCircle,
      titre: "Réservation simplifiée",
      description: "Réservez en un clic et recevez votre confirmation instantanément."
    }
  ];

  return (
    <section id="fonctionnement" className="py-20 bg-gradient-to-b from-white to-neutral">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1D51] mb-4 font-poppins">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rejoignez HeliConnect en 4 étapes simples
          </p>
        </div>

        {/* Timeline desktop */}
        <div className="hidden lg:block relative">
          {/* Ligne de connexion */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF64] via-[#C99846] to-[#D4AF64]"></div>

          <div className="grid grid-cols-4 gap-8">
            {etapes.map((etape, index) => {
              const Icon = etape.icon;
              return (
                <div key={index} className="relative">
                  {/* Numéro + Icône */}
                  <div className="relative z-10 mb-6">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#0B1D51] to-[#2d4a7c] rounded-2xl flex items-center justify-center shadow-xl border-4 border-white">
                      <Icon className="w-12 h-12 text-[#D4AF64]" strokeWidth={2} />
                    </div>
                    {/* Badge numéro */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-[#D4AF64] to-[#C99846] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                      <span className="text-[#0B1D51] font-bold text-lg">{etape.numero}</span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#0B1D51] mb-3 font-poppins">
                      {etape.titre}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {etape.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline mobile */}
        <div className="lg:hidden space-y-8">
          {etapes.map((etape, index) => {
            const Icon = etape.icon;
            return (
              <div key={index} className="flex gap-6">
                {/* Numéro + Icône */}
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0B1D51] to-[#2d4a7c] rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-[#D4AF64]" strokeWidth={2} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#D4AF64] to-[#C99846] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-[#0B1D51] font-bold">{etape.numero}</span>
                  </div>

                  {/* Ligne de connexion (sauf dernier) */}
                  {index < etapes.length - 1 && (
                    <div className="absolute top-20 left-10 w-0.5 h-16 bg-gradient-to-b from-[#D4AF64] to-[#C99846]"></div>
                  )}
                </div>

                {/* Contenu */}
                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-bold text-[#0B1D51] mb-2 font-poppins">
                    {etape.titre}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {etape.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA en bas */}
        <div className="mt-16 text-center">
          <a
            href="#tarifs"
            className="inline-block bg-gradient-to-r from-[#D4AF64] to-[#C99846] text-[#0B1D51] px-10 py-4 rounded-xl text-lg font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Commencer maintenant
          </a>
          <p className="text-gray-600 text-sm mt-4">
            Rejoignez les 500 premiers professionnels • Gratuit jusqu'au 30 juillet 2025
          </p>
        </div>
      </div>
    </section>
  );
}