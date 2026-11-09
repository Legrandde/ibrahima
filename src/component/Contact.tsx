import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaPaperPlane } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { useTheme } from "../contexts/ThemeContext";

export default function Contact() {
    const { theme } = useTheme();

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;

        const mailto = `mailto:ibrahimdiallo224123@gmail.com?subject=${encodeURIComponent(
            form.subject || "Contact depuis portfolio"
        )}&body=${encodeURIComponent(
            `Nom: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
        )}`;

        window.location.href = mailto;
        setSubmitted(true);
    };

    return (
        <section id="contact" className="py-16 px-4 max-w-7xl mx-auto">
            {/* Contact Card with rounded */}
            <div className={`p-8 sm:p-12 md:p-16 rounded border shadow-xl ${
                theme === 'dark' 
                    ? 'bg-gray-900 border-gray-800 text-white' 
                    : 'bg-white border-gray-200 text-gray-900'
            }`}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Info Column */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-4">
                                6. Contact
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
                                Échangeons sur vos projets.
                            </h2>

                            <p className={`text-xs sm:text-sm leading-relaxed mb-8 ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                                « Ouvert aux opportunités professionnelles, aux collaborations, aux partenariats et aux échanges autour du développement agricole et entrepreneurial. »
                            </p>
                        </div>

                        {/* Contact Chips */}
                        <div className="space-y-4">
                            {/* Phone (+221) */}
                            <a
                                href="tel:+221781938221"
                                className={`flex items-center gap-4 p-4 rounded border transition-all ${
                                    theme === 'dark' 
                                        ? 'bg-gray-800/60 border-gray-700/80 hover:bg-gray-800 text-white' 
                                        : 'bg-gray-50 border-gray-200 hover:bg-emerald-50/50 text-gray-900'
                                }`}
                            >
                                <div className="w-10 h-10 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                                    <FaPhone size={16} />
                                </div>
                                <div className="flex-1">
                                    <span className="text-[10px] uppercase font-bold text-gray-400 block">Téléphone direct</span>
                                    <span className="font-extrabold text-sm sm:text-base">+221 78 193 82 21</span>
                                </div>
                                <div className="w-8 h-8 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs">
                                    <FaArrowRight size={9} />
                                </div>
                            </a>

                            {/* WhatsApp Direct (+221) */}
                            <a
                                href="https://wa.me/221781938221"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-4 p-4 rounded border transition-all ${
                                    theme === 'dark' 
                                        ? 'bg-gray-800/60 border-gray-700/80 hover:bg-gray-800 text-white' 
                                        : 'bg-gray-50 border-gray-200 hover:bg-emerald-50/40 text-gray-900'
                                }`}
                            >
                                <div className="w-10 h-10 rounded bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center flex-shrink-0">
                                    <BsWhatsapp size={18} />
                                </div>
                                <div className="flex-1">
                                    <span className="text-[10px] uppercase font-bold text-gray-400 block">Messagerie instantanée</span>
                                    <span className="font-extrabold text-sm sm:text-base">Discuter sur WhatsApp</span>
                                </div>
                                <div className="w-8 h-8 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs">
                                    <FaArrowRight size={9} />
                                </div>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:ibrahimdiallo224123@gmail.com"
                                className={`flex items-center gap-4 p-4 rounded border transition-all ${
                                    theme === 'dark' 
                                        ? 'bg-gray-800/60 border-gray-700/80 hover:bg-gray-800 text-white' 
                                        : 'bg-gray-50 border-gray-200 hover:bg-emerald-50/50 text-gray-900'
                                }`}
                            >
                                <div className="w-10 h-10 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                                    <FaEnvelope size={16} />
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <span className="text-[10px] uppercase font-bold text-gray-400 block">E-mail</span>
                                    <span className="font-extrabold text-xs sm:text-sm truncate block">ibrahimdiallo224123@gmail.com</span>
                                </div>
                                <div className="w-8 h-8 rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs">
                                    <FaArrowRight size={9} />
                                </div>
                            </a>

                            {/* Locations */}
                            <div className={`p-4 rounded border flex items-start gap-4 ${
                                theme === 'dark' ? 'bg-gray-800/40 border-gray-700/60' : 'bg-gray-50/70 border-gray-200'
                            }`}>
                                <div className="w-10 h-10 rounded bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt size={16} />
                                </div>
                                <div className="text-xs">
                                    <p className="font-bold">Keur Massar, Dakar, Sénégal</p>
                                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                                        Exploitation : Somayah, Coyah, Guinée
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Column */}
                    <div className="lg:col-span-7">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                        Votre nom complet *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        placeholder="Ex: Ibrahima Diallo"
                                        className={`w-full p-4 rounded text-xs sm:text-sm font-medium outline-none transition-all ${
                                            theme === 'dark'
                                                ? 'bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-emerald-500'
                                                : 'bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-emerald-500'
                                        }`}
                                    />
                                </div>

                                <div>
                                    <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                        Votre adresse e-mail *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        placeholder="Ex: contact@exemple.com"
                                        className={`w-full p-4 rounded text-xs sm:text-sm font-medium outline-none transition-all ${
                                            theme === 'dark'
                                                ? 'bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-emerald-500'
                                                : 'bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-emerald-500'
                                        }`}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                    Objet / Sujet de contact
                                </label>
                                <input
                                    type="text"
                                    value={form.subject}
                                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                    placeholder="Ex: Partenariat agricole / Commande GN AGROBUSINESS"
                                    className={`w-full p-4 rounded text-xs sm:text-sm font-medium outline-none transition-all ${
                                        theme === 'dark'
                                            ? 'bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-emerald-500'
                                            : 'bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-emerald-500'
                                    }`}
                                />
                            </div>

                            <div>
                                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                    Votre message *
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    placeholder="Bonjour Ibrahima, je vous contacte à propos de..."
                                    className={`w-full p-4 rounded text-xs sm:text-sm font-medium outline-none resize-none transition-all ${
                                        theme === 'dark'
                                            ? 'bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-emerald-500'
                                            : 'bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-emerald-500'
                                    }`}
                                />
                            </div>

                            {submitted && (
                                <p className="text-emerald-500 text-xs font-semibold">
                                    Ouverture de votre client e-mail en cours...
                                </p>
                            )}

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded bg-gray-950 text-white dark:bg-white dark:text-gray-950 hover:bg-emerald-600 dark:hover:bg-emerald-500 dark:hover:text-white font-bold text-xs sm:text-sm transition-all shadow-lg cursor-pointer mt-2"
                            >
                                <span>Envoyer le message</span>
                                <div className="w-6 h-6 rounded bg-emerald-500 text-white flex items-center justify-center text-[10px]">
                                    <FaPaperPlane size={9} />
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
