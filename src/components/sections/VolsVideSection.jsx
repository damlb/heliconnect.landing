import React from 'react';
import { TrendingDown } from 'lucide-react';

export default function VolsVideSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche - Texte */}
          <div>
            <div className="inline-block mb-4">
              <span className="bg-[#D4AF64]/10 text-[#C99846] px-4 py-2 rounded-full text-sm font-semibold border border-[#D4AF64]/20">
                Comprendre les vols à vide
              </span>
            </div>

            {/* Titre corrigé - police réduite pour éviter le retour à la ligne */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D51] mb-6 font-poppins leading-tight">
              Qu'est-ce qu'un vol à vide ?
            </h2>

            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                Un <strong className="text-[#0B1D51]">vol à vide</strong> (ou <em>empty leg</em> en anglais) 
                est un vol de repositionnement d'hélicoptère effectué sans passager.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Lorsqu'un client réserve un vol privé de A vers B, l'appareil doit souvent retourner 
                à sa base ou se rendre vers un autre client. Ce trajet de repositionnement représente 
                une opportunité unique d'accéder au transport héliporté à tarif réduit.
              </p>

              {/* Statistique mise en avant */}
              <div className="bg-gradient-to-r from-[#0B1D51] to-[#2d4a7c] rounded-2xl p-8 my-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#D4AF64]/20 rounded-xl flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-[#D4AF64]" />
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-[#D4AF64]">40%</div>
                    <div className="text-white/80 text-sm">des vols privés</div>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Près de 40% des vols d'hélicoptères privés sont effectués à vide. 
                  C'est une ressource considérable qui reste inexploitée.
                </p>
              </div>
            </div>

            {/* SUPPRIMÉ : Les 3 icônes (Jusqu'à -75%, Impact positif, Accès 48h) */}
            {/* On les réutilisera ailleurs dans la landing page */}
          </div>

          {/* Colonne droite - Image placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#0B1D51] to-[#2d4a7c] flex items-center justify-center overflow-hidden shadow-2xl">
              {/* 
                PLACEHOLDER - À remplacer par :
                <img 
                  src="/images/helicopter-flight.webp" 
                  alt="Hélicoptère privé en vol - Vols à vide HeliConnect"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              */}
              <div className="text-center text-white p-8" role="img" aria-label="Illustration d'un hélicoptère en vol">
                <div className="text-8xl mb-4" aria-hidden="true">🚁</div>
                <p className="text-xl font-semibold mb-2">Image hélicoptère</p>
                <p className="text-white/70 text-sm">
                  Photo haute qualité d'un hélicoptère en vol
                </p>
              </div>

              {/* Badge flottant - Réduction CO₂ */}
              <div className="absolute top-6 right-6 bg-white rounded-xl px-4 py-3 shadow-lg" aria-label="Badge réduction CO₂">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="text-xs text-gray-600">Réduction CO₂</div>
                    <div className="font-bold text-accent">-40%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Éléments décoratifs */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#D4AF64]/20 rounded-full blur-2xl" aria-hidden="true"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
}