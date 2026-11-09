import { motion, type Variants } from "framer-motion";
import { FaGraduationCap, FaSeedling, FaMapMarkerAlt, FaChartLine, FaLeaf } from "react-icons/fa";
import { GiPotato } from "react-icons/gi";
import { useTheme } from "../contexts/ThemeContext";

export default function Banner() {
    const { theme } = useTheme();

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const imageVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const badges = [
        { Icon: FaLeaf, angle: 10, color: '#f59e0b', label: 'Culture de l’Oignon' },
        { Icon: GiPotato, angle: 80, color: '#eab308', label: 'Pomme de Terre' },
        { Icon: FaSeedling, angle: 150, color: '#10b981', label: 'GN AGROBUSINESS' },
        { Icon: FaGraduationCap, angle: 215, color: '#3b82f6', label: 'UNIPRO 2026' },
        { Icon: FaChartLine, angle: 280, color: '#059669', label: 'Gestion des PME' },
        { Icon: FaMapMarkerAlt, angle: 335, color: '#ef4444', label: 'Somayah, Coyah' },
    ];

    return (
        <motion.section 
            id="accueil" 
            className={`relative flex flex-col md:flex-row justify-center items-center min-h-[85vh] px-4 md:px-8 py-12 max-w-7xl mx-auto overflow-hidden ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Background pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-40 z-0"
                style={{
                    backgroundImage: theme === 'dark'
                        ? 'radial-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px)'
                        : 'radial-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />

            <motion.div 
                className="flex justify-center items-center md:items-start text-center md:text-left flex-col p-4 z-10 max-w-2xl flex-1"
                variants={containerVariants}
            >
                <motion.div 
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                >
                    <FaSeedling className="text-emerald-500" />
                    Agrobusiness & Entrepreneuriat
                </motion.div>

                <motion.h1 
                    variants={itemVariants}
                    className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                >
                    IBRAHIMA <span className="text-emerald-500">DIALLO</span>
                </motion.h1>

                <motion.h2 
                    variants={itemVariants}
                    className="text-lg sm:text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-2"
                >
                    Entrepreneur agricole et promoteur de GN AGROBUSINESS
                </motion.h2>

                <motion.p 
                    variants={itemVariants}
                    className={`text-sm sm:text-base font-medium mb-6 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                >
                    Titulaire d'une Licence en Entrepreneuriat et Gestion des PME | Agrobusiness
                </motion.p>

                <motion.div 
                    variants={itemVariants}
                    className={`p-5 rounded-2xl mb-8 max-w-xl text-left border ${
                        theme === 'dark' ? 'bg-gray-800/80 border-gray-700/60 text-gray-200' : 'bg-emerald-50/70 border-emerald-100/80 text-gray-800 shadow-sm'
                    }`}
                >
                    <p className="text-xs uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                        Vision
                    </p>
                    <p className="italic text-sm sm:text-base leading-relaxed">
                        « Faire de l'agriculture un véritable moteur de création de richesse, d'emplois et de développement économique en Guinée. »
                    </p>
                </motion.div>

                <motion.div 
                    variants={itemVariants}
                    className="flex flex-wrap gap-4 justify-center md:justify-start"
                >
                    <a
                        href="#ambitions"
                        className="px-6 py-3 rounded-xl font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-2"
                    >
                        <FaSeedling />
                        Découvrir GN AGROBUSINESS
                    </a>
                    <a
                        href="#contact"
                        className={`px-6 py-3 rounded-xl font-semibold border transition-all ${
                            theme === 'dark'
                                ? 'border-gray-700 bg-gray-800/80 text-gray-200 hover:bg-gray-700'
                                : 'border-gray-300 bg-white text-gray-800 hover:bg-gray-50 shadow-sm'
                        }`}
                    >
                        Me contacter
                    </a>
                </motion.div>
            </motion.div>

            {/* Profile image with floating badges */}
            <div className="relative flex items-center justify-center w-full max-w-sm md:max-w-md aspect-square z-10 mt-10 md:mt-0 p-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/20 to-amber-500/20 blur-2xl -z-10" />

                <motion.div 
                    variants={imageVariants}
                    className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-500/30"
                >
                    <img 
                        src="/ibrahima_profile.jpg" 
                        alt="Ibrahima Diallo - Entrepreneur agricole" 
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                        <div className="text-white">
                            <p className="font-bold text-sm">Ibrahima Diallo</p>
                            <p className="text-xs text-emerald-300">Promoteur GN AGROBUSINESS</p>
                        </div>
                    </div>
                </motion.div>

                {/* Floating tags */}
                {badges.map(({ Icon, angle, color, label }, index) => {
                    const rad = (angle * Math.PI) / 180;
                    const radius = 150;
                    const x = Math.cos(rad) * radius;
                    const y = Math.sin(rad) * radius;
                    return (
                        <motion.div
                            key={index}
                            title={label}
                            style={{ position: 'absolute', left: '50%', top: '50%' }}
                            initial={{ opacity: 0, scale: 0, x: x - 18, y: y - 18 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                x: [x - 18, x - 22, x - 18],
                                y: [y - 18, y - 22, y - 18],
                            }}
                            transition={{
                                opacity: { delay: 0.8 + index * 0.12, duration: 0.4 },
                                scale: { delay: 0.8 + index * 0.12, duration: 0.4, type: 'spring' },
                                x: { delay: 0.8 + index * 0.12, duration: 3 + index * 0.3, repeat: Infinity, ease: 'easeInOut' },
                                y: { delay: 0.8 + index * 0.12, duration: 3 + index * 0.3, repeat: Infinity, ease: 'easeInOut' },
                            }}
                            className="hidden sm:block"
                        >
                            <div className={`p-2.5 rounded-xl flex items-center gap-2 shadow-lg backdrop-blur-sm border ${
                                theme === 'dark' ? 'bg-gray-800/90 border-gray-700' : 'bg-white/95 border-gray-200'
                            }`}>
                                <Icon size={18} color={color} />
                                <span className={`text-xs font-semibold whitespace-nowrap ${
                                    theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                                }`}>
                                    {label}
                                </span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
}
