import { useTheme } from '../contexts/ThemeContext';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaCheck, FaBookOpen } from 'react-icons/fa';

export default function Formation() {
  const { theme } = useTheme();

  const academicItems = [
    {
      degree: 'Licence Entrepreneuriat & Gestion des PME',
      school: 'Université Professionnelle (UNIPRO)',
      period: '2023 – 2026',
      status: 'Diplôme obtenu en 2026',
      location: 'Conakry, Guinée',
      field: 'Entrepreneuriat et gestion des entreprises',
      desc: "Acquisition de connaissances solides en gestion d'entreprise, conception de projets, planification, stratégie entrepreneuriale et management des organisations.",
      tags: ['Gestion d’entreprise', 'Conception de projets', 'Planification', 'Management PME'],
      highlight: true
    },
    {
      degree: 'Baccalauréat Unique',
      school: 'G.S. La Grande École',
      period: 'Année 2022',
      status: 'Diplôme obtenu en 2022',
      location: 'Conakry, Guinée',
      field: 'Enseignement Secondaire',
      desc: "Cycle secondaire validé avec succès, préparant aux études universitaires approfondies en gestion et management d'entreprises.",
      tags: ['Rigueur académique', 'Discipline', 'Capacité de synthèse'],
      highlight: false
    }
  ];

  return (
    <section id="formation" className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
            2. Mon parcours académique
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-950'
          }`}>
            Formations & Diplômes
          </h2>
        </div>
        <p className={`text-xs sm:text-sm max-w-md ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Un socle universitaire certifié en entrepreneuriat et management des PME.
        </p>
      </div>

      {/* Row of Academic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {academicItems.map((item, index) => (
          <div
            key={index}
            className={`p-8 sm:p-10 rounded border flex flex-col justify-between transition-all hover:shadow-lg ${
              theme === 'dark'
                ? 'bg-gray-900 border-gray-800 text-white'
                : 'bg-white border-gray-200 text-gray-900 shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <FaGraduationCap size={24} />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <FaCalendarAlt size={11} />
                  {item.period}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-2">
                {item.degree}
              </h3>

              <div className="flex flex-col gap-1 mb-4 text-xs font-semibold">
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 text-sm">
                  <FaBookOpen size={12} />
                  {item.school}
                </span>
                <span className={`flex items-center gap-1 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <FaMapMarkerAlt size={11} />
                  {item.location} • <strong className="text-emerald-500">{item.status}</strong>
                </span>
                <span className={`text-[11px] italic mt-1 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Domaine : {item.field}
                </span>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {item.desc}
              </p>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                Connaissances & Acquis
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium ${
                      theme === 'dark'
                        ? 'bg-gray-800 text-gray-200 border border-gray-700'
                        : 'bg-gray-100 text-gray-700 border border-gray-200'
                    }`}
                  >
                    <FaCheck size={9} className="text-emerald-500" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
