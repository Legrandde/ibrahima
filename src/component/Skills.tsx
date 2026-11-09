import { motion, type Variants } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  FaBriefcase, 
  FaLaptopCode, 
  FaSeedling, 
  FaCheckCircle 
} from 'react-icons/fa';

interface SkillGroup {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  badgeBg: string;
  skills: { name: string; detail?: string }[];
}

const skillGroups: SkillGroup[] = [
  {
    id: 'gestion',
    title: 'Gestion et entrepreneuriat',
    icon: <FaBriefcase size={26} />,
    color: 'text-amber-500',
    badgeBg: 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400',
    skills: [
      { name: 'Élaboration et rédaction de business plans' },
      { name: 'Identification et conception d\'idées de projets' },
      { name: 'Structuration de projets entrepreneuriaux' },
      { name: 'Planification et organisation des activités' },
      { name: 'Analyse de marché et réflexion stratégique' },
      { name: 'Gestion et organisation des PME' },
    ]
  },
  {
    id: 'numerique',
    title: 'Compétences numériques',
    icon: <FaLaptopCode size={26} />,
    color: 'text-blue-500',
    badgeBg: 'bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400',
    skills: [
      { name: 'Microsoft Word', detail: 'Rédaction professionnelle & rapports' },
      { name: 'Microsoft Excel', detail: 'Tableaux de bord & modélisation financière' },
      { name: 'Microsoft Project (MS Project)', detail: 'Niveau intermédiaire – Gestion des plannings' },
    ]
  },
  {
    id: 'agricole',
    title: 'Expertise agricole',
    icon: <FaSeedling size={26} />,
    color: 'text-emerald-500',
    badgeBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400',
    skills: [
      { name: 'Culture de l\'oignon' },
      { name: 'Culture de la pomme de terre' },
      { name: 'Organisation de la production agricole' },
      { name: 'Gestion des stocks et conservation post-récolte' },
      { name: 'Commercialisation et distribution des produits agricoles' },
      { name: 'Développement des circuits d\'approvisionnement' },
    ]
  }
];

export default function Skills() {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section 
      className={`py-20 px-4 md:px-8 ${
        theme === 'dark' ? 'bg-gray-800/40' : 'bg-gray-50'
      }`} 
      id="competences"
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
            4. Mon expertise et mes compétences
          </span>
          <h2 className={`text-3xl md:text-5xl font-extrabold mt-2 mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Compétences & Savoir-Faire
          </h2>
          <p className={`text-base md:text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Une synergie entre gestion stratégique des PME, maîtrise des outils numériques et compétences agronomiques de terrain
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`p-7 rounded-3xl border transition-all shadow-md flex flex-col justify-between ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700/80 hover:border-emerald-500/50'
                  : 'bg-white border-gray-200 hover:border-emerald-500/50'
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3.5 rounded-2xl ${
                    theme === 'dark' ? 'bg-gray-700/70' : 'bg-gray-100'
                  } ${group.color}`}>
                    {group.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {group.title}
                    </h3>
                    <span className="text-xs text-gray-400 font-medium">
                      {group.skills.length} compétences clés
                    </span>
                  </div>
                </div>

                <ul className="space-y-3.5">
                  {group.skills.map((skill, index) => (
                    <li 
                      key={index}
                      className={`flex items-start gap-3 p-2.5 rounded-xl transition-colors ${
                        theme === 'dark' ? 'hover:bg-gray-700/40' : 'hover:bg-gray-50'
                      }`}
                    >
                      <FaCheckCircle className="text-emerald-500 flex-shrink-0 mt-1 text-sm" />
                      <div>
                        <p className={`text-sm font-semibold leading-tight ${
                          theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                        }`}>
                          {skill.name}
                        </p>
                        {skill.detail && (
                          <p className={`text-xs mt-0.5 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {skill.detail}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category Footer pill */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700/60">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${group.badgeBg}`}>
                  Expertise confirmée
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
