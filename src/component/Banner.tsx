import { motion, type Variants } from "framer-motion";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { GiPotato } from "react-icons/gi";

export default function Banner() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section id="accueil" className="pt-24 pb-8 px-4 max-w-7xl mx-auto">
            {/* Hero Card with rounded */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative rounded overflow-hidden min-h-[620px] md:min-h-[680px] flex flex-col justify-between p-6 sm:p-10 md:p-14 shadow-2xl border border-black/10 dark:border-white/10"
                style={{
                    backgroundImage: `linear-gradient(180deg, rgba(10, 20, 15, 0.45) 0%, rgba(10, 20, 15, 0.85) 100%), url('/gn_agrobusiness.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Top Row inside Hero */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-10">
                    {/* Top Tag Chip */}
                    <motion.div 
                        variants={itemVariants}
                        className="inline-flex items-center gap-2.5 px-4 py-2 rounded backdrop-blur-md bg-white/20 dark:bg-black/30 border border-white/25 text-white text-xs font-semibold shadow-md"
                    >
                        <div className="w-2 h-2 rounded bg-emerald-400 animate-pulse" />
                        <span>Entrepreneur Agricole & Promoteur • GN AGROBUSINESS</span>
                    </motion.div>

                    {/* Top Right Mini Tag */}
                    <motion.div 
                        variants={itemVariants}
                        className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded backdrop-blur-md bg-black/30 border border-white/15 text-white/90 text-xs font-medium"
                    >
                        <FaMapMarkerAlt className="text-emerald-400" size={11} />
                        <span>Somayah, Coyah (Guinée)</span>
                    </motion.div>
                </div>

                {/* Center / Bottom Main Typography */}
                <div className="my-auto py-10 z-10 max-w-3xl">
                    <motion.p 
                        variants={itemVariants}
                        className="text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-3"
                    >
                        Profil Professionnel • Ibrahima Diallo
                    </motion.p>

                    <motion.h1 
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-5"
                    >
                        Moderniser l'agriculture, créer de la richesse & bâtir l'avenir.
                    </motion.h1>

                    <motion.p 
                        variants={itemVariants}
                        className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed mb-8"
                    >
                        Titulaire d'une <strong>Licence en Entrepreneuriat et Gestion des PME (UNIPRO 2026)</strong> et promoteur de <strong>GN AGROBUSINESS</strong>, spécialisé dans la production maraîchère performante d'oignons et de pommes de terre en Guinée.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-wrap items-center gap-3.5"
                    >
                        <a
                            href="#ambitions"
                            className="inline-flex items-center gap-3 px-6 py-3.5 rounded bg-white text-gray-950 hover:bg-emerald-50 font-bold text-xs sm:text-sm transition-all shadow-xl group"
                        >
                            <span>Découvrir GN AGROBUSINESS</span>
                            <div className="w-7 h-7 rounded bg-gray-950 text-white flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                                <FaArrowRight size={11} />
                            </div>
                        </a>

                        <a
                            href="#about"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded backdrop-blur-md bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-xs sm:text-sm transition-all"
                        >
                            <span>Qui suis-je ?</span>
                        </a>
                    </motion.div>
                </div>

                {/* Bottom Row inside Hero with Floating Cards */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 z-10 pt-4 border-t border-white/15">
                    {/* Left Mini Card: Profile snippet */}
                    <div className="md:col-span-7 flex items-center gap-4 p-3.5 rounded backdrop-blur-md bg-white/10 border border-white/20 text-white">
                        <img 
                            src="/ibrahima_profile.jpg" 
                            alt="Ibrahima Diallo" 
                            className="w-12 h-12 rounded object-cover border-2 border-emerald-400"
                        />
                        <div className="flex-1">
                            <p className="font-bold text-sm leading-tight">IBRAHIMA DIALLO</p>
                            <p className="text-xs text-white/75">Licence Entrepreneuriat & Gestion des PME | UNIPRO 2026</p>
                        </div>
                        <a 
                            href="#contact"
                            className="hidden sm:flex items-center justify-center w-8 h-8 rounded bg-white text-gray-950 hover:bg-emerald-400 transition-colors"
                            aria-label="Contacter"
                        >
                            <FaArrowRight size={10} />
                        </a>
                    </div>

                    {/* Right Mini Card: Project stats */}
                    <div className="md:col-span-5 flex items-center justify-between p-3.5 rounded backdrop-blur-md bg-white/10 border border-white/20 text-white">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-emerald-500/30 flex items-center justify-center text-emerald-300">
                                <GiPotato size={22} />
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">Filières cibles</p>
                                <p className="text-sm font-bold">Oignon & Pomme de terre</p>
                            </div>
                        </div>
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                            Coyah
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
