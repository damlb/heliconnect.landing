import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-3xl">🚁</span>
          <span className={`text-2xl font-bold font-poppins ${
            isScrolled ? 'text-[#0B1D51]' : 'text-white'
          }`}>
            HeliConnect
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#avantages"
            className={`font-medium transition-colors ${
              isScrolled
                ? 'text-gray-700 hover:text-[#0B1D51]'
                : 'text-white/90 hover:text-white'
            }`}
          >
            Avantages
          </a>
          <a
            href="#fonctionnement"
            className={`font-medium transition-colors ${
              isScrolled
                ? 'text-gray-700 hover:text-[#0B1D51]'
                : 'text-white/90 hover:text-white'
            }`}
          >
            Comment ça marche
          </a>
          <a
            href="#tarifs"
            className={`font-medium transition-colors ${
              isScrolled
                ? 'text-gray-700 hover:text-[#0B1D51]'
                : 'text-white/90 hover:text-white'
            }`}
          >
            Tarifs
          </a>
          <a
            href="#contact"
            className={`font-medium transition-colors ${
              isScrolled
                ? 'text-gray-700 hover:text-[#0B1D51]'
                : 'text-white/90 hover:text-white'
            }`}
          >
            Contact
          </a>
        </div>

        {/* Boutons CTA */}
        <div className="flex items-center gap-4">
          <button className={`px-4 py-2 rounded-lg font-medium transition-all ${
            isScrolled
              ? 'text-gray-700 hover:bg-gray-100'
              : 'text-white hover:bg-white/10'
          }`}>
            Connexion
          </button>
          <button className="bg-gradient-to-r from-[#D4AF64] to-[#C99846] text-[#0B1D51] px-6 py-2 rounded-lg font-bold hover:shadow-xl hover:-translate-y-0.5 transition-all">
            Inscription
          </button>
        </div>
      </nav>
    </header>
  );
}