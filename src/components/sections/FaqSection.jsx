import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Qui peut s'inscrire sur HeliConnect ?",
      reponse: "HeliConnect est exclusivement réservé aux professionnels du tourisme : agences de voyage, DMC, tour-opérateurs, conciergeries privées et hôtels de luxe. Vous devrez fournir un justificatif professionnel lors de l'inscription."
    },
    {
      question: "L'offre gratuite jusqu'au 30 juillet 2025 est-elle vraiment sans engagement ?",
      reponse: "Oui, absolument ! Aucune carte bancaire n'est requise à l'inscription. Vous bénéficiez de tous les avantages premium gratuitement jusqu'au 30 juillet 2025. Après cette date, vous pouvez choisir de continuer à 99€/mois ou d'annuler en 1 clic."
    },
    {
      question: "Comment fonctionne l'accès prioritaire 48h ?",
      reponse: "Dès qu'une compagnie publie un vol à vide, vous recevez une notification instantanée (WhatsApp, email ou SMS). Vous avez alors 48h pour réserver avant que le vol ne soit accessible au grand public. Cela vous garantit les meilleures opportunités."
    },
    {
      question: "Quelles sont les économies réelles sur les vols à vide ?",
      reponse: "Les vols à vide sont proposés entre -50% et -75% du tarif normal. Par exemple, un vol Paris-Courchevel qui coûte normalement 8000€ peut être disponible à partir de 2000€ en vol à vide. Les économies dépendent de la flexibilité et de la disponibilité."
    },
    {
      question: "Les vols sont-ils garantis ?",
      reponse: "Oui, une fois votre réservation confirmée, le vol est garanti. Cependant, comme il s'agit de vols de repositionnement, les horaires peuvent être ajustés avec un préavis de 24h. Nous vous notifions immédiatement de tout changement."
    },
    {
      question: "Puis-je annuler une réservation ?",
      reponse: "Les conditions d'annulation dépendent de chaque compagnie et sont clairement indiquées avant la réservation. En général, les vols à vide sont non remboursables car ils sont déjà fortement réduits. Certaines compagnies proposent des options d'assurance annulation."
    },
    {
      question: "Comment sont sélectionnées les compagnies partenaires ?",
      reponse: "Nous travaillons uniquement avec des compagnies certifiées DGAC (Direction Générale de l'Aviation Civile) et disposant de toutes les assurances requises. Chaque compagnie est auditée avant d'être acceptée sur la plateforme."
    },
    {
      question: "Quel est l'impact environnemental réel ?",
      reponse: "En remplissant des vols qui auraient été effectués à vide de toute façon, vous ne générez aucune émission supplémentaire. C'est l'équivalent du covoiturage pour l'aviation privée : vous optimisez l'utilisation des appareils existants plutôt que de créer de nouveaux vols."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-neutral to-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1D51] mb-4 font-poppins">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce que vous devez savoir sur HeliConnect
          </p>
        </div>

        {/* Accordéon */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              {/* Question - Header cliquable */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-[#0B1D51] text-lg font-poppins pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#D4AF64] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Réponse - Contenu expansible */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <div className="h-px bg-gradient-to-r from-[#D4AF64]/20 via-[#D4AF64]/40 to-[#D4AF64]/20 mb-4"></div>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.reponse}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA vers contact */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Vous avez d&apos;autres questions ?
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-[#D4AF64] to-[#C99846] text-[#0B1D51] px-8 py-3 rounded-xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
}