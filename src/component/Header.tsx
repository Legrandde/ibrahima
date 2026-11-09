import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { FaPhone, FaMoon, FaSun, FaArrowRight } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa6";
import { useTheme } from "../contexts/ThemeContext";

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-4 left-0 right-0 z-50 px-4 max-w-7xl mx-auto">
            <div className={`flex items-center justify-between px-5 py-3 rounded backdrop-blur-xl border transition-all shadow-lg ${
                theme === 'dark' 
                    ? 'bg-gray-900/80 border-gray-800/90 text-white shadow-black/40' 
                    : 'bg-white/80 border-gray-200/80 text-gray-900 shadow-gray-200/60'
            }`}>
                {/* Logo / Brand */}
                <a href="#accueil" className="flex items-center gap-2.5 group">
                    <div className="w-9 h-9 rounded bg-emerald-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                        <FaSeedling size={16} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-black tracking-tight leading-none">
                            Ibrahima <span className="text-emerald-500">Diallo</span>
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                            GN AGROBUSINESS
                        </span>
                    </div>
                </a>

                {/* Desktop Nav Links */}
                <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold">
                    <a href="#accueil" className="hover:text-emerald-500 transition-colors">Accueil</a>
                    <a href="#about" className="hover:text-emerald-500 transition-colors">Qui suis-je</a>
                    <a href="#competences" className="hover:text-emerald-500 transition-colors">Expertise</a>
                    <a href="#parcours" className="hover:text-emerald-500 transition-colors">Expériences</a>
                    <a href="#ambitions" className="hover:text-emerald-500 transition-colors">GN AGROBUSINESS</a>
                    <a href="#formation" className="hover:text-emerald-500 transition-colors">Formation</a>
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-2.5">
                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className={`w-9 h-9 rounded flex items-center justify-center transition-colors ${
                            theme === 'dark'
                                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        aria-label="Changer de thème"
                    >
                        {theme === 'dark' ? <FaSun size={15} /> : <FaMoon size={15} />}
                    </button>

                    {/* Contact Button */}
                    <a
                        href="#contact"
                        className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-bold bg-gray-950 text-white dark:bg-white dark:text-gray-950 hover:opacity-90 transition-opacity shadow-sm"
                    >
                        <span>Prendre contact</span>
                        <div className="w-5 h-5 rounded bg-emerald-500 text-white flex items-center justify-center text-[10px]">
                            <FaArrowRight size={8} />
                        </div>
                    </a>

                    {/* Mobile Menu Trigger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`w-9 h-9 rounded lg:hidden flex items-center justify-center ${
                            theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'
                        }`}
                        aria-label="Menu"
                    >
                        {menuOpen ? <BiX size={22} /> : <BiMenu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className={`mt-2 p-5 rounded border backdrop-blur-xl shadow-2xl flex flex-col gap-3 text-sm font-semibold lg:hidden ${
                    theme === 'dark' ? 'bg-gray-900/95 border-gray-800 text-white' : 'bg-white/95 border-gray-200 text-gray-900'
                }`}>
                    <a href="#accueil" onClick={() => setMenuOpen(false)} className="p-2 rounded hover:bg-emerald-500/10 hover:text-emerald-500">Accueil</a>
                    <a href="#about" onClick={() => setMenuOpen(false)} className="p-2 rounded hover:bg-emerald-500/10 hover:text-emerald-500">1. Qui suis-je ?</a>
                    <a href="#competences" onClick={() => setMenuOpen(false)} className="p-2 rounded hover:bg-emerald-500/10 hover:text-emerald-500">Expertise & Compétences</a>
                    <a href="#parcours" onClick={() => setMenuOpen(false)} className="p-2 rounded hover:bg-emerald-500/10 hover:text-emerald-500">Parcours professionnel</a>
                    <a href="#ambitions" onClick={() => setMenuOpen(false)} className="p-2 rounded hover:bg-emerald-500/10 hover:text-emerald-500">GN AGROBUSINESS</a>
                    <a href="#formation" onClick={() => setMenuOpen(false)} className="p-2 rounded hover:bg-emerald-500/10 hover:text-emerald-500">Parcours académique</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)} className="p-2 rounded hover:bg-emerald-500/10 hover:text-emerald-500">Contact</a>
                    <div className="pt-2 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                        <a href="tel:+221781938221" className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-bold">
                            <FaPhone size={11} /> +221 78 193 82 21
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
