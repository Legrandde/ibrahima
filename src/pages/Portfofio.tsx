import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import Header from "../component/Header";
import Banner from "../component/Banner";
import About from "../component/About";
import Skills from "../component/Skills";
import Parcours from "../component/Parcours";
import Ambitions from "../component/Ambitions";
import Formation from "../component/Formation";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import { useTheme } from "../contexts/ThemeContext";
import { BsWhatsapp } from "react-icons/bs";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeUpTransition: Transition = {
  duration: 0.55,
  ease: [0.16, 1, 0.3, 1],
};

export default function Portfolio() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === "dark" ? "bg-[#0b0f17] text-white" : "bg-[#f5f7f6] text-gray-900"
    }`}>
      {/* Floating WhatsApp Quick Action Button with rounded */}
      <button 
        onClick={() => window.open("https://wa.me/221781938221", "_blank")} 
        className="bg-emerald-500 hover:bg-emerald-600 transition-all hover:scale-105 fixed bottom-6 right-6 p-3.5 rounded cursor-pointer shadow-2xl text-white z-50 flex items-center justify-center border border-white/30" 
        aria-label="Contacter Ibrahima Diallo sur WhatsApp"
      >
        <BsWhatsapp color="white" size={24} />
      </button>

      {/* Header */}
      <Header />

      {/* Main Container */}
      <main className="space-y-4">
        {/* Hero Card */}
        <Banner />

        {/* 1. Qui suis-je (Bento Grid) */}
        <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
          <About />
        </motion.div>

        {/* 4. Expertise & Compétences */}
        <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
          <Skills />
        </motion.div>

        {/* 3. Parcours Professionnel */}
        <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
          <Parcours />
        </motion.div>

        {/* 5. Mes Ambitions Entrepreneuriales - GN AGROBUSINESS */}
        <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
          <Ambitions />
        </motion.div>

        {/* 2. Parcours Académique */}
        <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
          <Formation />
        </motion.div>

        {/* 6. Contact */}
        <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
          <Contact />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
