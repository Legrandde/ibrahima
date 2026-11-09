import { useTheme } from '../contexts/ThemeContext';
import { FaArrowRight, FaBriefcase, FaCalendarAlt, FaCheck, FaIndustry } from 'react-icons/fa';

export default function Parcours() {
  const { theme } = useTheme();

  const experiences = [
    {
      period: 'Juin 2025 – Juillet 2025',
      role: 'Agent de production',
      company: 'Étoile Consulting',
      location: 'Dakar, Sénégal',
      desc: 'Deuxième expérience au sein de la structure : renforcement de l’expérience professionnelle, sens élevé de l’organisation et maîtrise du travail en environnement opérationnel exigeant.',
      points: [
        'Sens élevé de l’organisation',
        'Travail en environnement opérationnel',
        'Rigueur et régularité d’exécution'
      ]
    },
    {
      period: 'Mars 2024 – Avril 2024',
      role: 'Agent de production',
      company: 'Étoile Consulting',
      location: 'Dakar, Sénégal',
      desc: 'Première immersion opérationnelle : participation directe aux activités de production et contribution au fonctionnement quotidien de la structure.',
      points: [
        'Participation active à la production',
        'Contribution au fonctionnement opérationnel',
        'Respect des cadences et normes'
      ]
    }
  ];

  return (
    <section id="parcours" className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
          3. Mon parcours professionnel
        </div>
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight ${
          theme === 'dark' ? 'text-white' : 'text-gray-950'
        }`}>
          Rigueur opérationnelle & immersion en entreprise.
        </h2>
        <p className={`text-xs sm:text-sm max-w-2xl mt-2 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Deux expériences formatrices à Dakar ayant forgé mon sens de la discipline de production et de l'organisation collective.
        </p>
      </div>

      {/* Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
        {/* Left Big Experience Card */}
        <div className={`lg:col-span-7 p-8 sm:p-10 rounded border flex flex-col justify-between ${
          theme === 'dark' 
            ? 'bg-gray-900 border-gray-800 text-white' 
            : 'bg-white border-gray-200 text-gray-900 shadow-sm'
        }`}>
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <FaIndustry size={22} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                    Expériences Clés
                  </span>
                  <p className="text-lg font-black">Étoile Consulting • Dakar</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded text-[11px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                2 Missions
              </span>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className={`p-5 rounded border ${
                  theme === 'dark' ? 'bg-gray-800/50 border-gray-700/60' : 'bg-gray-50 border-gray-200/70'
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <p className="font-extrabold text-sm sm:text-base">{exp.role} – {exp.company}</p>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold bg-gray-100 dark:bg-gray-850 text-gray-700 dark:text-gray-300">
                      <FaCalendarAlt size={10} />
                      {exp.period}
                    </span>
                  </div>
                  <p className={`text-xs leading-relaxed mb-3 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {exp.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.points.map((p, i) => (
                      <span key={i} className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium ${
                        theme === 'dark' ? 'bg-gray-700/60 text-gray-200' : 'bg-white text-gray-700 border border-gray-200'
                      }`}>
                        <FaCheck size={9} className="text-emerald-500" />
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <span className="text-xs text-gray-400 font-semibold">Environnement opérationnel & Logistique</span>
            <a 
              href="#contact"
              className="w-9 h-9 rounded bg-gray-950 text-white dark:bg-white dark:text-gray-950 flex items-center justify-center hover:scale-105 transition-transform"
              aria-label="Contacter"
            >
              <FaArrowRight size={11} />
            </a>
          </div>
        </div>

        {/* Right Metric Card */}
        <div className={`lg:col-span-5 p-8 sm:p-10 rounded border flex flex-col justify-between ${
          theme === 'dark' 
            ? 'bg-gray-900 border-gray-800 text-white' 
            : 'bg-white border-gray-200 text-gray-900 shadow-sm'
        }`}>
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Profil Opérationnel
              </span>
              <span className="w-8 h-8 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <FaBriefcase size={14} />
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-6">
              Compétences appliquées
            </h3>

            {/* Circular Gauge simulation */}
            <div className="flex items-center justify-center py-6">
              <div className="relative w-44 h-44 rounded-full flex items-center justify-center border-8 border-gray-100 dark:border-gray-800 border-t-emerald-500 border-r-emerald-500 transform -rotate-45 shadow-inner">
                <div className="transform rotate-45 text-center p-2">
                  <span className="text-3xl font-black tracking-tight block">100%</span>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    Engagement
                  </span>
                  <span className={`text-[10px] block mt-0.5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Terrain & Gestion
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4 text-center">
              <div className={`p-3 rounded ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
              }`}>
                <p className="text-xs text-gray-400 font-semibold">MS Project</p>
                <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">Intermédiaire</p>
              </div>
              <div className={`p-3 rounded ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
              }`}>
                <p className="text-xs text-gray-400 font-semibold">Business Plans</p>
                <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">Avancé</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <span>Rigueur opérationnelle</span>
            <div className="w-2 h-2 rounded bg-emerald-500" />
          </div>
        </div>
      </div>

      {/* Mon Orientation Professionnelle Box */}
      <div className={`p-8 sm:p-10 rounded border ${
        theme === 'dark' 
          ? 'bg-gray-900 border-gray-800 text-white' 
          : 'bg-white border-gray-200 text-gray-900 shadow-sm'
      }`}>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-2">
              Mon orientation professionnelle
            </span>
            <p className="text-base sm:text-lg md:text-xl font-bold leading-relaxed">
              « Fort de ma formation en entrepreneuriat et gestion des PME, je souhaite mettre mes connaissances au service du développement des entreprises, particulièrement dans le secteur agricole et les chaînes de valeur agroalimentaires. »
            </p>
          </div>

          <a
            href="#ambitions"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-gray-950 text-white dark:bg-white dark:text-gray-950 text-xs font-bold whitespace-nowrap hover:opacity-90 transition-opacity flex-shrink-0 shadow-md"
          >
            <span>Voir le projet agricole</span>
            <FaArrowRight size={10} />
          </a>
        </div>
      </div>
    </section>
  );
}
