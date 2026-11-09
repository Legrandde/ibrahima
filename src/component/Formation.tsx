import { motion, type Variants } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaBookOpen } from 'react-icons/fa';

interface AcademicItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  status: string;
  field: string;
  description: string;
  skills: string[];
}

const academicData: AcademicItem[] = [
  {
    id: '1',
    degree: 'Licence en Entrepreneuriat et Gestion des PME',
    institution: 'Université Professionnelle (UNIPRO)',
    period: '2023 – 2026',
    location: 'Conakry, Guinée',
    status: 'Diplôme obtenu en 2026',
    field: 'Entrepreneuriat et gestion des entreprises',
    description: "Cette formation m'a permis d'acquérir des connaissances approfondies en gestion d'entreprise, conception de projets, planification, stratégie entrepreneuriale et management des organisations.",
    skills: [
      "Gestion d'entreprise",
      'Conception de projets',
      'Planification stratégique',
      'Stratégie entrepreneuriale',
      'Management des organisations'
    ]
  },
  {
    id: '2',
    degree: 'Baccalauréat unique',
    institution: 'G.S. La Grande École',
    period: 'Année 2022',
    location: 'Conakry, Guinée',
    status: 'Diplôme obtenu en 2022',
    field: 'Enseignement secondaire',
    description: "Diplôme de fin d'études secondaires marquant l'aboutissement du cycle secondaire et l'accès aux études supérieures spécialisées en gestion et entrepreneuriat.",
    skills: [
      'Fondements académiques',
      'Rigueur & discipline',
      'Capacité d’analyse'
    ]
  }
];

export default function Formation() {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
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
      id="formation"
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
            2. Mon parcours académique
          </span>
          <h2 className={`text-3xl md:text-5xl font-extrabold mt-2 mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Formation & Diplômes
          </h2>
          <p className={`text-base md:text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Un socle solide en entrepreneuriat, gestion des PME et management de projets
          </p>
        </motion.div>

        {/* Academic cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {academicData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className={`p-8 rounded-3xl border transition-all shadow-md relative flex flex-col justify-between ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700/80 hover:border-emerald-500/50'
                  : 'bg-white border-gray-200 hover:border-emerald-500/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <FaGraduationCap size={28} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <FaCalendarAlt size={12} />
                    {item.period}
                  </span>
                </div>

                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {item.degree}
                </h3>

                <div className="flex flex-col gap-1 mb-4 text-sm font-medium">
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                    <FaBookOpen size={14} />
                    {item.institution}
                  </span>
                  <span className={`flex items-center gap-1.5 text-xs ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <FaMapMarkerAlt size={12} />
                    {item.location} • {item.status}
                  </span>
                  <span className={`text-xs font-semibold italic mt-1 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Domaine : {item.field}
                  </span>
                </div>

                <p className={`text-sm leading-relaxed mb-6 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {item.description}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                  Compétences & Connaissances acquises
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ${
                        theme === 'dark'
                          ? 'bg-gray-700/60 text-gray-200'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      <FaCheckCircle className="text-emerald-500 text-[10px]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
