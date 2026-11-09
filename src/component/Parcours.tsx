import { motion, type Variants } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCompass, FaCheck } from 'react-icons/fa';

interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    id: '1',
    role: 'Agent de production',
    company: 'Étoile Consulting',
    location: 'Dakar, Sénégal',
    period: 'Juin 2025 – Juillet 2025',
    description: "Deuxième expérience au sein de la même structure, me permettant de renforcer mon expérience professionnelle, mon sens de l'organisation et ma capacité à travailler dans un environnement opérationnel.",
    highlights: [
      'Renforcement de l’expérience professionnelle',
      'Sens aigu de l’organisation et de la rigueur',
      'Travail d’équipe en environnement opérationnel exigeant',
      'Optimisation des flux de travail'
    ]
  },
  {
    id: '2',
    role: 'Agent de production',
    company: 'Étoile Consulting',
    location: 'Dakar, Sénégal',
    period: 'Mars 2024 – Avril 2024',
    description: "Participation active aux activités de production et contribution au fonctionnement opérationnel de la structure.",
    highlights: [
      'Participation directe aux activités de production',
      'Contribution au fonctionnement opérationnel quotidien',
      'Respect des normes et des processus de fabrication',
      'Gestion opérationnelle de base'
    ]
  }
];

export default function Parcours() {
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
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`} 
      id="parcours"
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
            3. Mon parcours professionnel
          </span>
          <h2 className={`text-3xl md:text-5xl font-extrabold mt-2 mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Expériences & Immersion Opérationnelle
          </h2>
          <p className={`text-base md:text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Une pratique concrète du terrain, de l'organisation et du travail en équipe
          </p>
        </motion.div>

        {/* Timeline experiences */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className={`p-8 rounded-3xl border transition-all shadow-md flex flex-col justify-between ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700/80 hover:border-emerald-500/50'
                  : 'bg-white border-gray-200 hover:border-emerald-500/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <FaBriefcase size={24} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <FaCalendarAlt size={12} />
                    {exp.period}
                  </span>
                </div>

                <h3 className={`text-xl font-bold mb-1 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {exp.role}
                </h3>

                <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm mb-1">
                  {exp.company}
                </p>

                <p className={`flex items-center gap-1 text-xs mb-4 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <FaMapMarkerAlt size={11} className="text-emerald-500" />
                  {exp.location}
                </p>

                <p className={`text-sm leading-relaxed mb-6 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {exp.description}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                  Acquis clés
                </p>
                <ul className="space-y-1.5">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className={`flex items-center gap-2 text-xs ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <FaCheck className="text-emerald-500 flex-shrink-0 text-[10px]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mon orientation professionnelle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`p-8 rounded-3xl border-2 border-dashed border-emerald-500/40 relative overflow-hidden ${
            theme === 'dark' ? 'bg-gray-800/60' : 'bg-emerald-50/50'
          }`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="p-4 rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/30">
              <FaCompass size={32} />
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                Perspectives
              </span>
              <h3 className={`text-xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Mon orientation professionnelle
              </h3>
              <p className={`text-sm md:text-base leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                « Fort de ma formation en entrepreneuriat et gestion des PME, je souhaite mettre mes connaissances au service du développement des entreprises, particulièrement dans le secteur agricole et les chaînes de valeur agroalimentaires. »
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
