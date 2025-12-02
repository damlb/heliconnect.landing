import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1D51] mb-4 font-poppins">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonne gauche - Formulaire */}
          <div>
            <form className="space-y-6">
              {/* Nom */}
              <div>
                <label className="block text-sm font-semibold text-[#0B1D51] mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jean Dupont"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D4AF64] focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-[#0B1D51] mb-2">
                  Email professionnel *
                </label>
                <input
                  type="email"
                  required
                  placeholder="jean.dupont@agence.fr"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D4AF64] focus:outline-none transition-colors"
                />
              </div>

              {/* Téléphone */}
              <div>
                <label className="block text-sm font-semibold text-[#0B1D51] mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+33 6 XX XX XX XX"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D4AF64] focus:outline-none transition-colors"
                />
              </div>

              {/* Type de professionnel */}
              <div>
                <label className="block text-sm font-semibold text-[#0B1D51] mb-2">
                  Type de professionnel *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D4AF64] focus:outline-none transition-colors bg-white"
                >
                  <option value="">-- Sélectionner --</option>
                  <option value="agence">Agence de voyage</option>
                  <option value="dmc">DMC / Tour opérateur</option>
                  <option value="conciergerie">Conciergerie privée</option>
                  <option value="hotel">Hôtel de luxe</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-[#0B1D51] mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows="5"
                  placeholder="Parlez-nous de votre projet..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D4AF64] focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              {/* Bouton submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4AF64] to-[#C99846] text-[#0B1D51] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Champs obligatoires
              </p>
            </form>
          </div>

          {/* Colonne droite - Informations de contact */}
          <div className="space-y-8">
            {/* Carte de contact */}
            <div className="bg-gradient-to-br from-[#0B1D51] to-[#2d4a7c] rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 font-poppins text-[#D4AF64]">
                Informations de contact
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4AF64]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#D4AF64]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Email</div>
                    <a href="mailto:contact@heliconnect.fr" className="text-white hover:text-[#D4AF64] transition-colors font-medium">
                      contact@heliconnect.fr
                    </a>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4AF64]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#D4AF64]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Téléphone</div>
                    <a href="tel:+33XXXXXXXXX" className="text-white hover:text-[#D4AF64] transition-colors font-medium">
                      +33 X XX XX XX XX
                    </a>
                  </div>
                </div>

                {/* Adresse */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4AF64]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#D4AF64]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Adresse</div>
                    <p className="text-white">
                      Aérodrome de Figari Sud-Corse<br />
                      20137 Porto-Vecchio<br />
                      France
                    </p>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4AF64]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#D4AF64]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Horaires</div>
                    <p className="text-white">
                      Lun - Ven : 9h - 18h<br />
                      Sam : 10h - 16h<br />
                      Dim : Fermé
                    </p>
                  </div>
                </div>
              </div>

              {/* Ligne de séparation */}
              <div className="h-px bg-[#D4AF64]/20 my-6"></div>

              {/* Note */}
              <p className="text-white/80 text-sm leading-relaxed">
                Nous nous engageons à répondre à toutes les demandes dans un délai de 24h ouvrées.
              </p>
            </div>

            {/* Badge réponse rapide */}
            <div className="bg-accent/10 border-2 border-accent/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="font-bold text-accent">Réponse rapide garantie</span>
              </div>
              <p className="text-gray-700 text-sm">
                Notre équipe s'engage à répondre à votre demande dans les 24h ouvrées. 
                Pour une réponse immédiate, appelez-nous directement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}