import React from 'react';
import { Clock, TrendingDown, Users, Bell, Leaf, Headphones } from 'lucide-react';

export default function AvantagesSection() {
  const avantages = [
    {
      icon: Clock,
      titre: "Accès prioritaire 48h",
      description: "Découvrez les vols à vide 48h avant leur publication au grand public"
    },
    {
      icon: TrendingDown,
      titre: "Tarifs privilégiés",
      description: "Jusqu'à -75% sur les tarifs habituels des vols privés en hélicoptère"
    },
    {
      icon: Users,
      titre: "Plateforme B2B exclusive",
      description: "Réservée aux professionnels du tourisme : agences, DMC, conciergeries"
    },
    {
      icon: Bell,
      titre: "Notifications instantanées",
      description: "Alertes en temps réel dès qu'un vol correspond à vos critères"
    },
    {
      icon: Leaf,
      titre: "Impact environnemental",
      description: "Réduisez les vols à vide et participez à une aviation plus responsable"
    },
    {
      icon: Headphones,
      titre: "Support dédié",
      description: "Une équipe à votre écoute pour vous accompagner au quotidien"
    }
  ];

  return (
    <section id="avantages" className="py-20 bg-gradient-to-b from-white to-neutral">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1D51] mb-4 font-poppins">
            Pourquoi choisir HeliConnect ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une plateforme pensée pour les professionnels qui recherchent l'excellence
          </p>
        </div>

        {/* Grille des avantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {avantages.map((avantage, index) => {
            const Icon = avantage.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Icône avec fond or */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF64] to-[#C99846] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-[#0B1D51]" strokeWidth={2} />
                </div>

                {/* Contenu */}
                <h3 className="text-xl font-bold text-[#0B1D51] mb-3 font-poppins">
                  {avantage.titre}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {avantage.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Badge écologique en bas */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/10 to-accent-light/10 px-6 py-3 rounded-full border border-accent/20">
            <Leaf className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">
              40% des vols d'hélicoptères sont effectués à vide - Participez au changement
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}