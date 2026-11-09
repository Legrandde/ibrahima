import { motion, type Variants } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  FaSeedling, 
  FaMapMarkerAlt, 
  FaStore, 
  FaBoxes, 
  FaUsers, 
  FaAward, 
  FaCheckCircle,
  FaLeaf
} from 'react-icons/fa';
import { GiPotato, GiFarmTractor } from 'react-icons/gi';

export default function Ambitions() {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const axes = [
    {
      num: '01',
      title: 'Développer la production agricole',
      description: 'Augmenter les rendements et optimiser les cycles de culture maraîchère pour l’oignon et la pomme de terre à Somayah.',
      icon: <FaSeedling className="text-emerald-500" size={22} />
    },
    {
      num: '02',
      title: 'Structurer les circuits de commercialisation',
      description: 'Mettre en place des canaux directs, fiables et transparents reliant l’exploitation aux marchés de gros et aux distributeurs.',
      icon: <FaStore className="text-amber-500" size={22} />
    },
    {
      num: '03',
      title: 'Moderniser les techniques de production et de stockage',
      description: 'Adopter des pratiques modernes d’irrigation, de récolte et des solutions de conservation post-récolte performantes.',
      icon: <FaBoxes className="text-blue-500" size={22} />
    },
    {
      num: '04',
      title: 'Contribuer à la sécurité alimentaire & à l’emploi',
      description: 'Créer des emplois ruraux durables et participer à l’autosuffisance alimentaire des populations en Guinée.',
      icon: <FaUsers className="text-purple-500" size={22} />
    }
  ];

  return (
    <section 
      className={`py-20 px-4 md:px-8 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`} 
      id="ambitions"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            5. Mes ambitions entrepreneuriales
          </span>
          <h2 className={`text-3xl md:text-5xl font-extrabold mt-2 mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            GN AGROBUSINESS
          </h2>
          <p className="text-lg md:text-xl font-bold text-emerald-600 dark:text-emerald-400 max-w-2xl mx-auto">
            Production et commercialisation d'oignons et de pommes de terre
          </p>
        </motion.div>

        {/* Hero showcase card of GN AGROBUSINESS */}
        <div className={`p-8 md:p-12 rounded-3xl border mb-16 shadow-xl relative overflow-hidden ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-800 to-gray-850 border-gray-700' 
            : 'bg-gradient-to-br from-emerald-50/60 to-amber-50/40 border-emerald-100'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase w-fit bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <FaMapMarkerAlt />
                Implantation : Somayah, Préfecture de Coyah, Guinée
              </div>

              <h3 className={`text-2xl sm:text-3xl font-extrabold leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Un projet d'envergure pour la production maraîchère guinéenne
              </h3>

              <p className={`text-base leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <strong>GN AGROBUSINESS</strong> est un projet entrepreneurial que je porte avec l'ambition de participer activement au développement de la production maraîchère en Guinée.
              </p>

              <p className={`text-base leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Le projet prévoit l'implantation d'une exploitation agricole à <strong>Somayah</strong>, dans la préfecture de <strong>Coyah</strong>, avec pour objectif de répondre à la demande croissante du marché en oignons et en pommes de terre.
              </p>

              {/* Vision card inside */}
              <div className={`p-5 rounded-2xl border ${
                theme === 'dark' ? 'bg-gray-700/60 border-gray-600 text-gray-200' : 'bg-white border-gray-200 text-gray-800 shadow-sm'
              }`}>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                  Ma vision entrepreneuriale
                </p>
                <p className="text-sm sm:text-base font-semibold leading-relaxed">
                  « Mettre en place une entreprise agricole moderne, rentable et durable, capable de produire des denrées alimentaires de qualité et de développer des circuits de commercialisation efficaces. »
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                  <FaLeaf size={16} /> Oignons de qualité
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/20 text-amber-700 dark:text-amber-300">
                  <GiPotato size={16} /> Pommes de terre
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-500/20 text-blue-700 dark:text-blue-300">
                  <GiFarmTractor size={16} /> Agriculture moderne
                </span>
              </div>
            </div>

            {/* Photo on the right */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-500/30 group">
                <img 
                  src="/gn_agrobusiness.jpg" 
                  alt="Récolte d'oignons et de pommes de terre - GN AGROBUSINESS"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <p className="font-bold text-sm">GN AGROBUSINESS</p>
                  <p className="text-xs text-emerald-300">Production maraîchère • Somayah, Coyah</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 axes de développement */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Stratégie d'action
            </span>
            <h3 className={`text-2xl sm:text-3xl font-extrabold mt-1 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Mes 4 axes de développement
            </h3>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {axes.map((axe, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className={`p-6 rounded-3xl border transition-all shadow-md flex flex-col justify-between ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700/80 hover:border-emerald-500/50'
                    : 'bg-white border-gray-200 hover:border-emerald-500/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-gray-100 dark:bg-gray-700/70">
                      {axe.icon}
                    </div>
                    <span className="text-2xl font-black text-gray-300 dark:text-gray-600">
                      {axe.num}
                    </span>
                  </div>

                  <h4 className={`text-base font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {axe.title}
                  </h4>

                  <p className={`text-xs leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {axe.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700/50 flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <FaCheckCircle size={12} /> Axe prioritaire
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Perspectives à long terme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`p-8 md:p-10 rounded-3xl border-2 border-emerald-500/30 ${
            theme === 'dark' ? 'bg-gray-850' : 'bg-emerald-50/40'
          }`}
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="p-4 rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 flex-shrink-0">
              <FaAward size={32} />
            </div>

            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                Horizon & Impact
              </span>
              <h3 className={`text-xl md:text-2xl font-extrabold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Mes perspectives à long terme
              </h3>

              <p className={`text-sm md:text-base leading-relaxed mb-4 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Faire évoluer <strong>GN AGROBUSINESS</strong> vers une entreprise agricole structurée et compétitive, capable d'étendre progressivement ses activités à d'autres filières agricoles et à de nouveaux marchés.
              </p>

              <div className={`p-4 rounded-xl border ${
                theme === 'dark' ? 'bg-gray-800/80 border-gray-700 text-gray-200' : 'bg-white border-emerald-100 text-gray-800'
              }`}>
                <p className="font-semibold italic text-sm md:text-base">
                  « Mon ambition dépasse la simple création d'une ferme : je souhaite contribuer à la construction d'un véritable modèle entrepreneurial agricole en Guinée. »
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
