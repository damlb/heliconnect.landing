import React from 'react';
import { Check, Sparkles } from 'lucide-react';

export default function TarifsSection() {
  const avantages = [
    "Accès prioritaire 48h aux vols à vide",
    "Notifications instantanées WhatsApp/Email",
    "Tarifs jusqu'à -75% sur prix public",
    "Support client dédié 7j/7",
    "Tableau de bord professionnel"
  ];

  return (
    <section id="tarifs" className="py-20 bg-gradient-to-b from-neutral to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1D51] mb-4 font-poppins">
            Offre de lancement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rejoignez les 500 premiers professionnels et profitez d'un accès gratuit
          </p>
        </div>

        {/* Carte tarif unique - Version Premium */}
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#0B1D51] via-[#1a365d] to-[#2d4a7c] rounded-3xl p-10 shadow-2xl">
            {/* Badge offre limitée */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-[#D4AF64] to-[#C99846] text-[#0B1D51] px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                <Sparkles className="w-4 h-4" />
                500 PREMIERS INSCRITS
              </div>
            </div>

            {/* Contenu de la carte */}
            <div className="text-center mb-8 mt-6">
              <h3 className="text-3xl font-bold text-white mb-2 font-poppins">
                Professionnel Premium
              </h3>
              <p className="text-white/80">
                Pour agences, DMC, conciergeries & hôtels
              </p>
            </div>

            {/* Prix */}
            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-6xl font-bold text-[#D4AF64]">GRATUIT</span>
              </div>
              <p className="text-white/90 text-lg">
                jusqu'au <span className="font-bold text-[#D4AF64]">30 juillet 2025</span>
              </p>
              <p className="text-white/70 text-sm mt-2">
                Puis 99€/mois sans engagement
              </p>
            </div>

            {/* Ligne de séparation dorée */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF64]/50 to-transparent mb-8"></div>

            {/* Liste des avantages */}
            <div className="space-y-4 mb-8">
              {avantages.map((avantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#D4AF64]/20 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-[#D4AF64]" strokeWidth={3} />
                  </div>
                  <span className="text-white/90">{avantage}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="w-full bg-gradient-to-r from-[#D4AF64] to-[#C99846] text-[#0B1D51] py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              Rejoindre maintenant
            </button>

            {/* Note en bas */}
            <p className="text-center text-white/60 text-sm mt-6">
              🎁 Aucune carte bancaire requise • Résiliation en 1 clic
            </p>
          </div>

          {/* Garantie en dessous */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Satisfaction garantie ou remboursé sous 30 jours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}