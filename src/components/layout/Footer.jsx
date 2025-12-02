import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0B1D51] to-[#1a365d] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Contenu principal du footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Colonne 1 : Logo + Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🚁</span>
              <span className="text-2xl font-bold font-poppins">HeliConnect</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              La plateforme B2B de référence pour l'accès aux vols à vide d'hélicoptères.
            </p>
            <div className="flex items-center gap-2 text-[#D4AF64]">
              <span className="font-semibold">Moins cher • Plus vert</span>
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins text-[#D4AF64]">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="#avantages" className="text-white/80 hover:text-white transition-colors">
                  Avantages
                </a>
              </li>
              <li>
                <a href="#fonctionnement" className="text-white/80 hover:text-white transition-colors">
                  Comment ça marche
                </a>
              </li>
              <li>
                <a href="#tarifs" className="text-white/80 hover:text-white transition-colors">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/80 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Pour les pros */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins text-[#D4AF64]">Pour les professionnels</h3>
            <ul className="space-y-3">
              <li className="text-white/80">Agences de voyage</li>
              <li className="text-white/80">DMC & Tour opérateurs</li>
              <li className="text-white/80">Conciergeries privées</li>
              <li className="text-white/80">Hôtels de luxe</li>
              <li>
                <a href="#" className="text-[#D4AF64] hover:text-[#E8D4A0] transition-colors font-semibold">
                  Devenir partenaire →
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins text-[#D4AF64]">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D4AF64] flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@heliconnect.fr" className="text-white/80 hover:text-white transition-colors">
                  contact@heliconnect.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D4AF64] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  +33 X XX XX XX XX
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF64] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  Porto-Vecchio<br />
                  Corse, France
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation dorée */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF64]/30 to-transparent mb-8"></div>

        {/* Bas du footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© 2024 HeliConnect. Tous droits réservés.</p>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white transition-colors">
              CGV
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}