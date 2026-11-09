import { useTheme } from '../contexts/ThemeContext';
import { 
  FaArrowRight, 
  FaMapMarkerAlt, 
  FaStore, 
  FaBoxes, 
  FaUsers, 
  FaAward, 
  FaCheckCircle 
} from 'react-icons/fa';
import { GiPotato, GiPlantRoots } from 'react-icons/gi';

export default function Ambitions() {
  const { theme } = useTheme();

  const axes = [
    {
      num: '01',
      title: 'Développer la production agricole',
      desc: 'Optimisation des rendements pour l’oignon et la pomme de terre sur l’exploitation de Somayah (Coyah).',
      icon: <GiPlantRoots size={20} className="text-emerald-500" />
    },
    {
      num: '02',
      title: 'Structurer les circuits de commercialisation',
      desc: 'Mise en place de circuits d’approvisionnement directs et fiables pour approvisionner les marchés urbains et régionaux.',
      icon: <FaStore size={18} className="text-amber-500" />
    },
    {
      num: '03',
      title: 'Moderniser les techniques de production et stockage',
      desc: 'Adoption de technologies adaptées d’irrigation, de récolte et d’infrastructures de conservation post-récolte.',
      icon: <FaBoxes size={18} className="text-blue-500" />
    },
    {
      num: '04',
      title: 'Contribuer à la sécurité alimentaire & à l’emploi',
      desc: 'Création d’emplois agricoles décents et pérennes, et participation active à l’autosuffisance alimentaire.',
      icon: <FaUsers size={18} className="text-purple-500" />
    }
  ];

  return (
    <section id="ambitions" className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
          5. Mes ambitions entrepreneuriales
        </div>
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3 ${
          theme === 'dark' ? 'text-white' : 'text-gray-950'
        }`}>
          GN AGROBUSINESS
        </h2>
        <p className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400">
          Production et commercialisation d'oignons et de pommes de terre
        </p>
        <p className={`text-xs sm:text-sm mt-3 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Un projet entrepreneurial porté avec l'ambition de participer activement au développement de la production maraîchère en Guinée.
        </p>
      </div>

      {/* Two Large Featured Package-style Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Card 1: Exploitation Somayah */}
        <div 
          className="relative rounded overflow-hidden min-h-[460px] flex flex-col justify-between p-8 sm:p-10 text-white shadow-xl border border-black/10 dark:border-white/10"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(10, 25, 18, 0.5) 0%, rgba(6, 20, 14, 0.92) 100%), url('/gn_agrobusiness.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Top Tag */}
          <div className="flex items-center justify-between z-10">
            <span className="px-3.5 py-1.5 rounded text-xs font-bold uppercase tracking-wider backdrop-blur-md bg-white/20 border border-white/25">
              Projet Phare • Somayah (Coyah)
            </span>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-500 text-white text-xs font-bold">
              <FaMapMarkerAlt size={10} />
              <span>Guinée</span>
            </div>
          </div>

          {/* Bottom Card Content */}
          <div className="z-10 mt-auto">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider block mb-1">
              Implantation & Objectif
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
              L'Exploitation Agricole de Somayah
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6">
              Le projet prévoit l'implantation d'une exploitation agricole à <strong>Somayah</strong>, dans la préfecture de <strong>Coyah</strong>, avec pour objectif de répondre à la demande croissante du marché en oignons et en pommes de terre.
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/20">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded text-xs font-semibold bg-white/20 backdrop-blur-sm">
                  Oignons
                </span>
                <span className="px-3 py-1 rounded text-xs font-semibold bg-white/20 backdrop-blur-sm">
                  Pommes de terre
                </span>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white text-gray-950 text-xs font-bold hover:bg-emerald-50 transition-colors shadow-md"
              >
                <span>Partenariat</span>
                <FaArrowRight size={9} />
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: Vision Entrepreneuriale */}
        <div 
          className="relative rounded overflow-hidden min-h-[460px] flex flex-col justify-between p-8 sm:p-10 text-white shadow-xl border border-black/10 dark:border-white/10"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(20, 30, 25, 0.75) 0%, rgba(10, 18, 14, 0.95) 100%), url('/gn_agrobusiness.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Top Tag */}
          <div className="flex items-center justify-between z-10">
            <span className="px-3.5 py-1.5 rounded text-xs font-bold uppercase tracking-wider backdrop-blur-md bg-white/20 border border-white/25">
              Stratégie & Rentabilité
            </span>
            <div className="w-8 h-8 rounded bg-emerald-500 text-white flex items-center justify-center">
              <GiPotato size={18} />
            </div>
          </div>

          {/* Bottom Card Content */}
          <div className="z-10 mt-auto">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider block mb-1">
              Modèle d'Entreprise
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
              Vision Entrepreneuriale
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6">
              « Mettre en place une entreprise agricole moderne, rentable et durable, capable de produire des denrées alimentaires de qualité et de développer des circuits de commercialisation efficaces. »
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/20">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded text-xs font-semibold bg-white/10 text-white border border-white/20">
                  Moderne
                </span>
                <span className="px-3 py-1 rounded text-xs font-semibold bg-white/10 text-white border border-white/20">
                  Rentable & Durable
                </span>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white text-gray-950 text-xs font-bold hover:bg-emerald-50 transition-colors shadow-md"
              >
                <span>Rejoindre le projet</span>
                <FaArrowRight size={9} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* The 4 Development Axes Cards */}
      <div className="mb-14">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
            Plan Opérationnel
          </span>
          <h3 className={`text-2xl sm:text-3xl font-black ${
            theme === 'dark' ? 'text-white' : 'text-gray-950'
          }`}>
            Mes 4 axes de développement
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {axes.map((axe, index) => (
            <div
              key={index}
              className={`p-7 rounded border flex flex-col justify-between transition-all hover:shadow-md ${
                theme === 'dark'
                  ? 'bg-gray-900 border-gray-800 text-white'
                  : 'bg-white border-gray-200 text-gray-900 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>
                    {axe.icon}
                  </div>
                  <span className="text-2xl font-black text-gray-300 dark:text-gray-700">
                    {axe.num}
                  </span>
                </div>

                <h4 className="text-base font-bold mb-2 tracking-tight">
                  {axe.title}
                </h4>

                <p className={`text-xs leading-relaxed ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {axe.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-150 dark:border-gray-800 flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <FaCheckCircle size={11} />
                <span>Axe stratégique</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Perspectives à long terme card */}
      <div className={`p-8 sm:p-10 rounded border ${
        theme === 'dark' 
          ? 'bg-gray-900 border-gray-800 text-white' 
          : 'bg-white border-gray-200 text-gray-900 shadow-sm'
      }`}>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-14 h-14 rounded bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-600/30">
            <FaAward size={26} />
          </div>
          <div className="flex-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
              Perspectives à long terme
            </span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-2">
              Bâtir un modèle entrepreneurial agricole de référence en Guinée
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed mb-3 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Faire évoluer <strong>GN AGROBUSINESS</strong> vers une entreprise agricole structurée et compétitive, capable d'étendre progressivement ses activités à d'autres filières agricoles et à de nouveaux marchés.
            </p>
            <p className="text-xs sm:text-sm font-bold italic text-emerald-700 dark:text-emerald-300">
              « Mon ambition dépasse la simple création d'une ferme : je souhaite contribuer à la construction d'un véritable modèle entrepreneurial agricole en Guinée. »
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
