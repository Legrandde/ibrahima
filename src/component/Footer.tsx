import { FaEnvelope, FaPhone, FaSeedling } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { FaLocationDot } from 'react-icons/fa6';
import { BsWhatsapp } from 'react-icons/bs';

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full border-t transition-colors ${
      theme === 'dark' 
        ? 'bg-gray-950 text-gray-300 border-gray-800' 
        : 'bg-gray-50 text-gray-800 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <FaSeedling size={16} />
              </div>
              <h3 className={`text-xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                IBRAHIMA <span className="text-emerald-500">DIALLO</span>
              </h3>
            </div>
            <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
              GN AGROBUSINESS
            </p>
            <p className={`text-sm leading-relaxed mb-4 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Entrepreneur agricole et promoteur de GN AGROBUSINESS. Titulaire d'une Licence en Entrepreneuriat et Gestion des PME (UNIPRO 2026). Dédié à la modernisation agricole et à la filière maraîchère en Guinée.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-base font-bold mb-4 uppercase tracking-wider ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#accueil" className="hover:text-emerald-500 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-500 transition-colors">
                  1. Qui suis-je ?
                </a>
              </li>
              <li>
                <a href="#formation" className="hover:text-emerald-500 transition-colors">
                  2. Parcours académique
                </a>
              </li>
              <li>
                <a href="#parcours" className="hover:text-emerald-500 transition-colors">
                  3. Parcours professionnel
                </a>
              </li>
              <li>
                <a href="#competences" className="hover:text-emerald-500 transition-colors">
                  4. Expertise & Compétences
                </a>
              </li>
              <li>
                <a href="#ambitions" className="hover:text-emerald-500 transition-colors">
                  5. GN AGROBUSINESS
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-500 transition-colors">
                  6. Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-base font-bold mb-4 uppercase tracking-wider ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Coordonnées
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FaPhone className="text-emerald-500 flex-shrink-0" />
                <a href="tel:+224781938221" className="hover:text-emerald-500 transition-colors font-medium">
                  +224 78 193 82 21
                </a>
              </li>
              <li className="flex items-center gap-3">
                <BsWhatsapp className="text-emerald-500 flex-shrink-0" />
                <a href="https://wa.me/224781938221" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors font-medium">
                  WhatsApp direct
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-emerald-500 flex-shrink-0" />
                <a href="mailto:ibrahimdiallo224123@gmail.com" className="hover:text-emerald-500 transition-colors break-all">
                  ibrahimdiallo224123@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaLocationDot className="text-emerald-500 flex-shrink-0 mt-1" />
                <span>
                  Keur Massar, Dakar, Sénégal <br />
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                    Projet : Somayah, Coyah, Guinée
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t pt-8 ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
            <p className={theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}>
              © {currentYear} Ibrahima Diallo. Tous droits réservés.
            </p>
            <p className={theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}>
              GN AGROBUSINESS • Somayah, Coyah, Guinée
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
