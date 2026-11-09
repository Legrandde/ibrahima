import { FaArrowRight, FaBullseye } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa6";
import { useTheme } from "../contexts/ThemeContext";

export default function About() {
    const { theme } = useTheme();

    return (
        <section id="about" className="py-12 px-4 max-w-7xl mx-auto">
            {/* Bento Grid Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
                <div>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                        <FaSeedling size={11} />
                        1. Accueil – Qui suis-je ?
                    </div>
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight ${
                        theme === 'dark' ? 'text-white' : 'text-gray-950'
                    }`}>
                        Une vocation : l'entrepreneuriat agricole
                    </h2>
                </div>
                <p className={`text-xs sm:text-sm max-w-md ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                    Un parcours alliant formation universitaire rigoureuse en gestion et ambition forte de bâtir une agriculture moderne.
                </p>
            </div>

            {/* Asymmetric 3-Column Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Card 1: Text Presentation Card */}
                <div className={`lg:col-span-4 p-8 rounded border flex flex-col justify-between shadow-sm transition-all hover:shadow-md ${
                    theme === 'dark' 
                        ? 'bg-gray-900 border-gray-800 text-white' 
                        : 'bg-[#f8faf8] border-gray-200 text-gray-900'
                }`}>
                    <div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-semibold bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 mb-6">
                            <span>Profil & Parcours</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-snug mb-4">
                            Je suis Ibrahima Diallo, promoteur de GN AGROBUSINESS.
                        </h3>
                        <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                            Titulaire d'une <strong>Licence en Entrepreneuriat et Gestion des PME</strong>, obtenue en 2026 à l'<strong>Université Professionnelle (UNIPRO)</strong>.
                        </p>
                        <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                            Passionné par l'entrepreneuriat et le développement agricole, je m'investis dans la conception et la structuration de projets entrepreneuriaux à fort potentiel économique et social.
                        </p>
                    </div>

                    <a
                        href="#formation"
                        className="inline-flex items-center justify-between px-5 py-3 rounded bg-gray-950 text-white dark:bg-white dark:text-gray-950 text-xs font-bold hover:opacity-90 transition-opacity mt-2"
                    >
                        <span>Découvrir mon parcours</span>
                        <div className="w-5 h-5 rounded bg-emerald-500 text-white flex items-center justify-center text-[10px]">
                            <FaArrowRight size={8} />
                        </div>
                    </a>
                </div>

                {/* Card 2: Center Portrait Card */}
                <div className="lg:col-span-4 relative rounded overflow-hidden min-h-[380px] lg:min-h-full border border-gray-200 dark:border-gray-800 shadow-md group">
                    <img 
                        src="/ibrahima_profile.jpg" 
                        alt="Ibrahima Diallo portrait" 
                        className="w-full h-full object-cover object-top absolute inset-0 transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                        <div className="p-4 rounded backdrop-blur-md bg-white/15 border border-white/20 flex items-center justify-between">
                            <div>
                                <p className="font-extrabold text-sm sm:text-base">IBRAHIMA DIALLO</p>
                                <p className="text-xs text-emerald-300 font-medium">Diplômé UNIPRO 2026 • Gestion PME</p>
                            </div>
                            <a
                                href="#contact"
                                className="w-9 h-9 rounded bg-white text-gray-950 flex items-center justify-center hover:bg-emerald-400 transition-colors"
                                aria-label="Contacter"
                            >
                                <FaArrowRight size={10} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card 3: Project Highlight Card */}
                <div className="lg:col-span-4 relative rounded overflow-hidden min-h-[380px] lg:min-h-full border border-gray-200 dark:border-gray-800 shadow-md group">
                    <img 
                        src="/gn_agrobusiness.jpg" 
                        alt="Récolte GN AGROBUSINESS" 
                        className="w-full h-full object-cover absolute inset-0 transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-black/20 flex flex-col justify-between p-6 text-white">
                        <div className="flex justify-between items-start">
                            <span className="px-3 py-1 rounded text-[11px] font-bold uppercase backdrop-blur-md bg-white/20 border border-white/25">
                                Somayah • Coyah
                            </span>
                            <span className="w-8 h-8 rounded bg-emerald-500 text-white flex items-center justify-center">
                                <FaSeedling size={13} />
                            </span>
                        </div>

                        <div>
                            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider block mb-1">
                                Projet Entrepreneurial
                            </span>
                            <h4 className="text-xl font-black mb-2">GN AGROBUSINESS</h4>
                            <p className="text-xs text-white/80 leading-relaxed mb-4">
                                Spécialisé dans la culture et la commercialisation de l'oignon et de la pomme de terre en Guinée.
                            </p>
                            <a 
                                href="#ambitions"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white text-gray-950 text-xs font-bold hover:bg-emerald-50 transition-colors"
                            >
                                <span>Explorer le projet</span>
                                <FaArrowRight size={9} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wide Vision Bar */}
            <div className={`mt-6 p-7 sm:p-9 rounded border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 ${
                theme === 'dark' 
                    ? 'bg-gray-900 border-gray-800 text-white' 
                    : 'bg-white border-gray-200 text-gray-900 shadow-sm'
            }`}>
                <div className="flex items-start sm:items-center gap-4">
                    <div className="w-12 h-12 rounded bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                        <FaBullseye size={22} />
                    </div>
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                            Ma Vision Phare
                        </span>
                        <p className="text-base sm:text-lg md:text-xl font-bold tracking-tight">
                            « Faire de l'agriculture un véritable moteur de création de richesse, d'emplois et de développement économique en Guinée. »
                        </p>
                    </div>
                </div>

                <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded bg-gray-950 text-white dark:bg-white dark:text-gray-950 text-xs font-bold whitespace-nowrap hover:opacity-90 transition-opacity"
                >
                    <span>Échanger avec moi</span>
                    <FaArrowRight size={10} />
                </a>
            </div>
        </section>
    );
}
