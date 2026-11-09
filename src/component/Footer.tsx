import { FaSeedling, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { BsWhatsapp } from 'react-icons/bs';
import { useTheme } from '../contexts/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className="pt-8 pb-12 px-4 max-w-7xl mx-auto">
      {/* Footer Card with rounded */}
      <div className={`p-8 sm:p-12 md:p-14 rounded border ${
        theme === 'dark' 
          ? 'bg-gray-950 border-gray-800 text-white' 
          : 'bg-[#f8faf8] border-gray-200 text-gray-900'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand & Slogan */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded bg-emerald-600 flex items-center justify-center text-white">
                  <FaSeedling size={16} />
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tight leading-none">
                    IBRAHIMA <span className="text-emerald-500">DIALLO</span>
                  </h3>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                    GN AGROBUSINESS
                  </span>
                </div>
              </div>

              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-4">
                Agrobusiness & Entrepreneuriat PME
              </span>

              <p className={`text-xs sm:text-sm leading-relaxed max-w-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Titulaire d'une Licence en Entrepreneuriat et Gestion des PME (UNIPRO 2026). Promoteur de l'exploitation agricole de Somayah (Coyah), dédiée à la filière maraîchère.
              </p>
            </div>
          </div>

          {/* Nav links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><a href="#accueil" className="hover:text-emerald-500 transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-emerald-500 transition-colors">1. Qui suis-je ?</a></li>
              <li><a href="#formation" className="hover:text-emerald-500 transition-colors">2. Parcours académique</a></li>
              <li><a href="#parcours" className="hover:text-emerald-500 transition-colors">3. Parcours professionnel</a></li>
              <li><a href="#competences" className="hover:text-emerald-500 transition-colors">4. Expertise & Compétences</a></li>
              <li><a href="#ambitions" className="hover:text-emerald-500 transition-colors">5. GN AGROBUSINESS</a></li>
              <li><a href="#contact" className="hover:text-emerald-500 transition-colors">6. Contact</a></li>
            </ul>
          </div>

          {/* Direct coordinates */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4">
              Coordonnées
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a href="tel:+221781938221" className="flex items-center gap-2.5 hover:text-emerald-500 transition-colors font-bold">
                  <FaPhone className="text-emerald-500" size={13} />
                  <span>+221 78 193 82 21</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/221781938221" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-green-600 dark:text-green-400 hover:underline font-bold">
                  <BsWhatsapp size={14} />
                  <span>Discuter sur WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="mailto:ibrahimdiallo224123@gmail.com" className="flex items-center gap-2.5 hover:text-emerald-500 transition-colors font-medium break-all">
                  <FaEnvelope className="text-emerald-500 flex-shrink-0" size={13} />
                  <span>ibrahimdiallo224123@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <FaLocationDot className="text-emerald-500 flex-shrink-0 mt-0.5" size={13} />
                <span>
                  Keur Massar, Dakar, Sénégal <br />
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    Projet : Somayah, Coyah, Guinée
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium text-gray-400">
          <p>© {year} Ibrahima Diallo • Tous droits réservés.</p>
          <p>GN AGROBUSINESS • Somayah, Coyah (Guinée)</p>
        </div>
      </div>
    </footer>
  );
}
