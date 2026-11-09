import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaSeedling, FaPaperPlane } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { useTheme } from "../contexts/ThemeContext";
import { useState } from "react";

export default function Contact() {
    const { theme } = useTheme();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "success" | "empty">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatus("empty");
            return;
        }

        const mailtoUrl = `mailto:ibrahimdiallo224123@gmail.com?subject=${encodeURIComponent(
            formData.subject || "Prise de contact via portfolio"
        )}&body=${encodeURIComponent(
            `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        window.location.href = mailtoUrl;
        setStatus("success");
    };

    return (
        <section
            className={`py-20 px-4 md:px-8 max-w-7xl mx-auto ${
                theme === "dark" ? "bg-gray-900" : "bg-white"
            }`}
            id="contact"
        >
            <div className="text-center mb-16">
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center justify-center gap-2">
                    <FaSeedling />
                    6. Contact
                </span>
                <h2
                    className={`text-3xl md:text-5xl font-extrabold mt-2 mb-4 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                >
                    Prenez Contact
                </h2>
                <p
                    className={`text-base md:text-lg max-w-3xl mx-auto leading-relaxed ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                    « Ouvert aux opportunités professionnelles, aux collaborations, aux partenariats et aux échanges autour du développement agricole et entrepreneurial. »
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Contact info cards */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className={`p-8 rounded-3xl border shadow-lg ${
                        theme === "dark"
                            ? "bg-gray-800 border-gray-700"
                            : "bg-white border-gray-200"
                    }`}>
                        <div className="mb-6">
                            <h3 className={`text-2xl font-extrabold ${
                                theme === "dark" ? "text-white" : "text-gray-900"
                            }`}>
                                IBRAHIMA DIALLO
                            </h3>
                            <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                                Entrepreneur agricole et promoteur de GN AGROBUSINESS
                            </p>
                        </div>

                        <div className="flex flex-col gap-5 text-sm">
                            {/* Téléphone */}
                            <a 
                                href="tel:+221781938221" 
                                className={`flex items-center gap-4 group p-3 rounded-2xl transition-all ${
                                    theme === "dark" ? "hover:bg-gray-700/60 text-gray-200" : "hover:bg-emerald-50 text-gray-800"
                                }`}
                            >
                                <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                    <FaPhone size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-medium">Téléphone / WhatsApp</p>
                                    <p className="font-bold text-base">+221 78 193 82 21</p>
                                </div>
                            </a>

                            {/* WhatsApp Direct */}
                            <a 
                                href="https://wa.me/221781938221" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 group p-3 rounded-2xl bg-green-500/10 hover:bg-green-500 text-green-700 dark:text-green-300 hover:text-white transition-all border border-green-500/20"
                            >
                                <div className="p-3.5 rounded-2xl bg-green-500 text-white">
                                    <BsWhatsapp size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold">Discuter directement</p>
                                    <p className="font-bold text-base">Sur WhatsApp</p>
                                </div>
                            </a>

                            {/* E-mail */}
                            <a 
                                href="mailto:ibrahimdiallo224123@gmail.com" 
                                className={`flex items-center gap-4 group p-3 rounded-2xl transition-all ${
                                    theme === "dark" ? "hover:bg-gray-700/60 text-gray-200" : "hover:bg-emerald-50 text-gray-800"
                                }`}
                            >
                                <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                    <FaEnvelope size={18} />
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-xs text-gray-400 font-medium">E-mail officiel</p>
                                    <p className="font-bold text-sm sm:text-base break-all">ibrahimdiallo224123@gmail.com</p>
                                </div>
                            </a>

                            {/* Localisation */}
                            <div className={`flex items-center gap-4 p-3 rounded-2xl ${
                                theme === "dark" ? "text-gray-200" : "text-gray-800"
                            }`}>
                                <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                    <FaMapMarkerAlt size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-medium">Localisation actuelle</p>
                                    <p className="font-bold text-sm sm:text-base">Keur Massar, Dakar, Sénégal</p>
                                </div>
                            </div>

                            {/* Projet agricole */}
                            <div className={`flex items-center gap-4 p-3 rounded-2xl ${
                                theme === "dark" ? "text-gray-200" : "text-gray-800"
                            }`}>
                                <div className="p-3.5 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                                    <FaSeedling size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-medium">Projet agricole (Exploitation)</p>
                                    <p className="font-bold text-sm sm:text-base text-emerald-600 dark:text-emerald-400">
                                        Somayah, Coyah, Guinée
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Formulaire de message */}
                <div className="lg:col-span-7">
                    <form
                        onSubmit={handleSubmit}
                        className={`p-8 rounded-3xl border shadow-lg flex flex-col gap-4 ${
                            theme === "dark"
                                ? "bg-gray-800 border-gray-700"
                                : "bg-white border-gray-200"
                        }`}
                    >
                        <h3 className={`text-xl font-bold mb-2 ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                        }`}>
                            Envoyer un message
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className={`block text-xs font-semibold uppercase mb-1.5 ${
                                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                                }`}>
                                    Votre nom complet *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Ex: Amadou Diallo"
                                    className={`w-full p-3 rounded-xl outline-none transition-all ${
                                        theme === "dark"
                                            ? "bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-emerald-500"
                                            : "bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-emerald-500"
                                    }`}
                                />
                            </div>

                            <div>
                                <label className={`block text-xs font-semibold uppercase mb-1.5 ${
                                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                                }`}>
                                    Votre e-mail *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Ex: contact@exemple.com"
                                    className={`w-full p-3 rounded-xl outline-none transition-all ${
                                        theme === "dark"
                                            ? "bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-emerald-500"
                                            : "bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-emerald-500"
                                    }`}
                                />
                            </div>
                        </div>

                        <div>
                            <label className={`block text-xs font-semibold uppercase mb-1.5 ${
                                theme === "dark" ? "text-gray-300" : "text-gray-700"
                            }`}>
                                Objet / Sujet
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Ex: Partenariat agricole / Opportunité"
                                className={`w-full p-3 rounded-xl outline-none transition-all ${
                                    theme === "dark"
                                        ? "bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-emerald-500"
                                        : "bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-emerald-500"
                                }`}
                            />
                        </div>

                        <div>
                            <label className={`block text-xs font-semibold uppercase mb-1.5 ${
                                theme === "dark" ? "text-gray-300" : "text-gray-700"
                            }`}>
                                Votre message *
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Bonjour Ibrahima, je vous contacte concernant votre projet agricole GN AGROBUSINESS..."
                                className={`w-full p-3 rounded-xl outline-none resize-none transition-all ${
                                    theme === "dark"
                                        ? "bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-emerald-500"
                                        : "bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-emerald-500"
                                }`}
                            />
                        </div>

                        {status === "empty" && (
                            <p className="text-red-400 text-xs font-semibold">
                                Veuillez remplir au moins votre nom, email et votre message.
                            </p>
                        )}
                        {status === "success" && (
                            <p className="text-emerald-500 text-xs font-semibold">
                                Redirection vers votre messagerie en cours... Merci pour votre message !
                            </p>
                        )}

                        <button
                            type="submit"
                            className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 cursor-pointer"
                        >
                            <FaPaperPlane />
                            Envoyer le message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
