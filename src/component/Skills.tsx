import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  FaArrowRight, 
  FaBriefcase, 
  FaLaptopCode, 
  FaSeedling, 
  FaCheckCircle 
} from 'react-icons/fa';
import { GiPotato, GiPlantRoots } from 'react-icons/gi';

export default function Skills() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'all' | 'agri' | 'gestion' | 'numerique'>('all');

  const categories = [
    { id: 'all', label: 'Toutes les compétences' },
    { id: 'agri', label: 'Expertise agricole' },
    { id: 'gestion', label: 'Gestion & PME' },
    { id: 'numerique', label: 'Outils numériques' },
  ];

  const cards = [
    {
      id: 'oignon-patate',
      cat: 'agri',
      tag: 'Cultures Maraîchères',
      title: 'Culture de l’oignon & de la pomme de terre',
      desc: 'Maîtrise des cycles végétatifs, des besoins en fertilisation, de l’irrigation et de l’organisation rigoureuse de la production agricole.',
      points: [
        'Culture de l’oignon',
        'Culture de la pomme de terre',
        'Organisation de la production agricole'
      ],
      icon: <GiPotato size={22} className="text-emerald-400" />,
      bgImage: "url('/gn_agrobusiness.jpg')"
    },
    {
      id: 'business-plans',
      cat: 'gestion',
      tag: 'Entrepreneuriat & Stratégie',
      title: 'Business plans & Structuration PME',
      desc: 'Modélisation financière, identification d’opportunités rentables et pilotage stratégique des entreprises de taille intermédiaire.',
      points: [
        'Élaboration et rédaction de business plans',
        'Identification et conception d’idées de projets',
        'Structuration de projets entrepreneuriaux'
      ],
      icon: <FaBriefcase size={20} className="text-amber-400" />,
      bgImage: "linear-gradient(145deg, #1e293b, #0f172a)"
    },
    {
      id: 'distribution',
      cat: 'agri',
      tag: 'Chaîne de Valeur',
      title: 'Stocks, conservation & distribution',
      desc: 'Développement de circuits courts et fiables entre l’exploitation de Somayah et les marchés de consommation.',
      points: [
        'Gestion des stocks et conservation post-récolte',
        'Commercialisation et distribution des produits',
        'Développement des circuits d’approvisionnement'
      ],
      icon: <GiPlantRoots size={22} className="text-emerald-400" />,
      bgImage: "linear-gradient(145deg, #064e3b, #022c22)"
    },
    {
      id: 'numerique',
      cat: 'numerique',
      tag: 'Logiciels & Modélisation',
      title: 'Outils informatiques & MS Project',
      desc: 'Gestion informatique des plannings d’exploitation, suivi budgétaire sous tableur et documentation administrative.',
      points: [
        'Microsoft Project (MS Project) – Intermédiaire',
        'Microsoft Excel (Modélisation & Budgets)',
        'Microsoft Word (Rapports & Dossiers)'
      ],
      icon: <FaLaptopCode size={20} className="text-blue-400" />,
      bgImage: "linear-gradient(145deg, #1e1b4b, #0f172a)"
    }
  ];

  const filteredCards = activeTab === 'all' ? cards : cards.filter(c => c.cat === activeTab);

  return (
    <section id="competences" className="py-16 px-4 max-w-7xl mx-auto">
      {/* Top Split Asymmetric Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 items-stretch">
        {/* Left Card */}
        <div className={`lg:col-span-6 p-8 sm:p-10 rounded border flex flex-col justify-between ${
          theme === 'dark' 
            ? 'bg-gray-900 border-gray-800 text-white' 
            : 'bg-white border-gray-200 text-gray-900 shadow-sm'
        }`}>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-8 rounded bg-emerald-600 text-white flex items-center justify-center">
                <FaSeedling size={14} />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                Pôle Agrobusiness
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">
              Structurer des entreprises agricoles modernes et résilientes.
            </h3>

            <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Fort de ma formation en gestion d'entreprise à l'UNIPRO et de mes connaissances agronomiques, je combine rigueur financière, sens stratégique et efficacité technique sur le terrain.
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-emerald-900/20 dark:border-emerald-700/30">
            <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              Analyse de marché • Business plans • Production maraîchère
            </span>
            <a 
              href="#ambitions"
              className="w-9 h-9 rounded bg-gray-950 text-white dark:bg-white dark:text-gray-950 flex items-center justify-center hover:scale-105 transition-transform"
              aria-label="En savoir plus"
            >
              <FaArrowRight size={11} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
              4. Mon expertise et mes compétences
            </div>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-950'
            }`}>
              Une expertise pluridisciplinaire au service du terrain.
            </h2>
          </div>

          <div className={`p-6 sm:p-7 rounded border flex items-center gap-5 ${
            theme === 'dark' 
              ? 'bg-gray-900 border-gray-800 text-white' 
              : 'bg-white border-gray-200 text-gray-900 shadow-sm'
          }`}>
            <div className="w-14 h-14 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
              <FaBriefcase size={24} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Gestion & Organisation des PME
              </p>
              <p className="text-sm font-bold tracking-tight">
                Planification des activités, structuration et management
              </p>
              <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Capacité à transformer une vision en exploitation structurée et rentable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
            Catalogue de compétences
          </span>
          <h3 className={`text-2xl sm:text-3xl font-black ${
            theme === 'dark' ? 'text-white' : 'text-gray-950'
          }`}>
            Explorez mes domaines d'intervention
          </h3>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/60">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-gray-950 text-white dark:bg-white dark:text-gray-950 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCards.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group relative rounded overflow-hidden min-h-[420px] flex flex-col justify-between p-6 shadow-md border border-black/10 dark:border-white/10 text-white"
            style={{
              backgroundImage: card.bgImage,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-gray-950/40 -z-0" />

            {/* Top Tag & Icon */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider backdrop-blur-md bg-white/20 border border-white/25">
                {card.tag}
              </span>
              <div className="w-9 h-9 rounded backdrop-blur-md bg-white/15 flex items-center justify-center">
                {card.icon}
              </div>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 mt-auto">
              <h4 className="text-lg font-black tracking-tight leading-snug mb-2">
                {card.title}
              </h4>

              <p className="text-xs text-white/75 leading-relaxed mb-4">
                {card.desc}
              </p>

              {/* Bullet points */}
              <ul className="space-y-1.5 mb-5 border-t border-white/15 pt-3">
                {card.points.map((pt, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[11px] text-white/90">
                    <FaCheckCircle className="text-emerald-400 text-[10px] flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-300">
                  Compétence validée
                </span>
                <a
                  href="#contact"
                  className="w-9 h-9 rounded bg-white text-gray-950 flex items-center justify-center group-hover:bg-emerald-400 transition-colors shadow-md"
                  aria-label="Contacter à propos de cette compétence"
                >
                  <FaArrowRight size={10} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
