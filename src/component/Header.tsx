import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaMoon, FaSun, FaSeedling } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const [menuDisplay, setMenuDisplay] = useState<boolean>(false);

    return (
        <header className={`sticky top-0 z-50 w-full backdrop-blur-md transition-colors ${
            theme === 'dark' ? 'bg-gray-900/90 border-b border-gray-800' : 'bg-white/90 border-b border-gray-200'
        }`}>
            <div className="flex p-4 w-full items-center justify-between max-w-7xl mx-auto">
                <a href="#accueil" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:bg-emerald-500 transition-colors">
                        <FaSeedling size={20} />
                    </div>
                    <div>
                        <h1 className={`text-xl font-bold tracking-tight ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                            Ibrahima <span className="text-emerald-500">Diallo</span>
                        </h1>
                        <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 block -mt-1">
                            GN AGROBUSINESS
                        </span>
                    </div>
                </a>

                <div className="flex items-center justify-center gap-2 md:gap-6">
                    <div className={`hidden lg:flex items-center justify-center gap-1.5 text-xs font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        <FaLocationDot className="text-emerald-500" />
                        Dakar & Somayah (Coyah)
                    </div>

                    <a 
                        href="tel:+221781938221"
                        className={`hidden md:flex items-center justify-center gap-1.5 text-sm font-semibold transition-colors ${
                            theme === 'dark' ? 'text-gray-300 hover:text-emerald-400' : 'text-gray-700 hover:text-emerald-600'
                        }`}
                    >
                        <FaPhone className="text-emerald-500 text-xs" />
                        +221 78 193 82 21
                    </a>

                    <a 
                        href="#contact"
                        className="px-4 py-2 text-sm font-medium hover:bg-emerald-600 hover:text-white border border-emerald-500 text-emerald-600 dark:text-emerald-400 dark:border-emerald-500 rounded-lg transition-colors"
                    >
                        Contact
                    </a>
                    
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-lg transition-colors ${
                            theme === 'dark'
                                ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                        aria-label="Changer de thème"
                    >
                        {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
                    </button>

                    <button 
                        className={`p-2 rounded-lg md:hidden ${
                            theme === 'dark' ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'
                        }`}
                        onClick={() => setMenuDisplay(!menuDisplay)}
                        aria-label="Menu"
                    >
                        <BiMenu size={26} />
                    </button>
                </div>
            </div>

            {/* Menu navigation */}
            <div className={`${menuDisplay ? "flex flex-col" : "hidden"} md:flex md:flex-row md:flex-wrap p-3 items-center justify-center gap-x-6 gap-y-2 max-w-7xl mx-auto border-t text-sm ${
                theme === 'dark' ? 'border-gray-800 bg-gray-900/95' : 'border-gray-200 bg-white/95'
            }`}>
                <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4 md:gap-7 font-medium">
                    <a 
                        href="#accueil" 
                        onClick={() => setMenuDisplay(false)}
                        className={`whitespace-nowrap hover:text-emerald-500 transition-colors ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}
                    >
                        Accueil
                    </a>
                    <a 
                        href="#about" 
                        onClick={() => setMenuDisplay(false)}
                        className={`whitespace-nowrap hover:text-emerald-500 transition-colors ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}
                    >
                        Qui suis-je ?
                    </a>
                    <a 
                        href="#formation" 
                        onClick={() => setMenuDisplay(false)}
                        className={`whitespace-nowrap hover:text-emerald-500 transition-colors ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}
                    >
                        Parcours académique
                    </a>
                    <a 
                        href="#parcours" 
                        onClick={() => setMenuDisplay(false)}
                        className={`whitespace-nowrap hover:text-emerald-500 transition-colors ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}
                    >
                        Parcours professionnel
                    </a>
                    <a 
                        href="#competences" 
                        onClick={() => setMenuDisplay(false)}
                        className={`whitespace-nowrap hover:text-emerald-500 transition-colors ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}
                    >
                        Expertise & Compétences
                    </a>
                    <a 
                        href="#ambitions" 
                        onClick={() => setMenuDisplay(false)}
                        className={`whitespace-nowrap hover:text-emerald-500 transition-colors ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}
                    >
                        GN AGROBUSINESS
                    </a>
                    <a 
                        href="#contact" 
                        onClick={() => setMenuDisplay(false)}
                        className={`whitespace-nowrap hover:text-emerald-500 transition-colors ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </header>
    );
}
