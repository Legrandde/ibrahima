import { FaPhone, FaSeedling, FaGraduationCap, FaTractor, FaBullseye } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

export default function About() {
    const { theme } = useTheme();

    return (
        <section 
            className={`py-20 px-4 md:px-8 max-w-7xl mx-auto ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`} 
            id="about"
        >
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Visual card */}
                <div className="w-full lg:w-5/12 flex flex-col gap-4">
                    <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-emerald-500/20 group">
                        <img 
                            src="/gn_agrobusiness.jpg" 
                            alt="Projet GN AGROBUSINESS - Oignons et pommes de terre" 
                            className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                            <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold uppercase w-fit mb-2">
                                Exploitation Somayah (Coyah)
                            </span>
                            <h4 className="text-xl font-bold">GN AGROBUSINESS</h4>
                            <p className="text-sm text-gray-200">Production & commercialisation maraîchère de qualité</p>
                        </div>
                    </div>

                    {/* Mini stats cards */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className={`p-4 rounded-2xl border ${
                            theme === 'dark' ? 'bg-gray-800/60 border-gray-700' : 'bg-emerald-50/60 border-emerald-100'
                        }`}>
                            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1">
                                <FaGraduationCap size={18} />
                                <span className="text-xs font-bold uppercase">Formation</span>
                            </div>
                            <p className="font-bold text-sm">Licence PME</p>
                            <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>UNIPRO (2026)</p>
                        </div>

                        <div className={`p-4 rounded-2xl border ${
                            theme === 'dark' ? 'bg-gray-800/60 border-gray-700' : 'bg-emerald-50/60 border-emerald-100'
                        }`}>
                            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1">
                                <FaTractor size={18} />
                                <span className="text-xs font-bold uppercase">Filières</span>
                            </div>
                            <p className="font-bold text-sm">Oignon & Pomme</p>
                            <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>de terre en Guinée</p>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-7/12 flex flex-col gap-5">
                    <div>
                        <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                            <FaSeedling />
                            1. Accueil – Qui suis-je ?
                        </span>
                        <h2 className={`text-3xl md:text-4xl font-extrabold mt-1 mb-2 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                            Ibrahima Diallo
                        </h2>
                        <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                            Entrepreneur agricole & promoteur de GN AGROBUSINESS
                        </h3>
                    </div>

                    <p className={`text-base leading-relaxed ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                        Je suis <strong>Ibrahima Diallo</strong>, titulaire d'une <strong>Licence en Entrepreneuriat et Gestion des PME</strong>, obtenue en 2026 à l'Université Professionnelle (UNIPRO).
                    </p>

                    <p className={`text-base leading-relaxed ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                        Passionné par l'entrepreneuriat et particulièrement intéressé par le développement du secteur agricole, je m'investis dans la conception et la structuration de projets entrepreneuriaux à fort potentiel économique et social.
                    </p>

                    <p className={`text-base leading-relaxed ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                        Mon ambition est de contribuer à la modernisation de l'agriculture guinéenne à travers la création d'entreprises agricoles performantes, durables et innovantes.
                    </p>

                    <p className={`text-base leading-relaxed ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                        Je suis le promoteur de <strong>GN AGROBUSINESS</strong>, un projet entrepreneurial spécialisé dans la culture et la commercialisation de l'oignon et de la pomme de terre.
                    </p>

                    {/* Vision card */}
                    <div className={`p-5 rounded-2xl border ${
                        theme === 'dark' ? 'bg-gray-800/80 border-gray-700/60 text-gray-200' : 'bg-emerald-50/70 border-emerald-100/80 text-gray-800 shadow-sm'
                    }`}>
                        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1.5">
                            <FaBullseye />
                            Ma vision
                        </div>
                        <p className="italic font-medium text-base md:text-lg">
                            « Faire de l'agriculture un véritable moteur de création de richesse, d'emplois et de développement économique en Guinée. »
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <a 
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-all shadow-md shadow-emerald-600/20"
                        >
                            <FaPhone /> Me contacter
                        </a>
                        <a 
                            href="#ambitions"
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border transition-all ${
                                theme === 'dark'
                                    ? 'border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700'
                                    : 'border-gray-300 bg-white text-gray-800 hover:bg-gray-50'
                            }`}
                        >
                            En savoir plus sur le projet
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
