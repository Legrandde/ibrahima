import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import Header from "../component/Header";
import Banner from "../component/Banner";
import About from "../component/About";
import Formation from "../component/Formation";
import Parcours from "../component/Parcours";
import Skills from "../component/Skills";
import Ambitions from "../component/Ambitions";
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
    <div className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      {/* Floating WhatsApp Button */}
      <button 
        onClick={() => window.open("https://wa.me/224781938221", "_blank")} 
        className="bg-green-500 hover:bg-green-600 transition-transform hover:scale-110 fixed bottom-6 right-6 p-3.5 rounded-full cursor-pointer shadow-2xl text-white z-50 flex items-center justify-center" 
        aria-label="Contacter Ibrahima Diallo sur WhatsApp"
      >
        <BsWhatsapp color="white" size={26} />
      </button>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
        <Header />
      </motion.div>

      {/* Banner / Hero (Accueil) */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
        <Banner />
      </motion.div>

      {/* 1. Accueil – Qui suis-je ? */}
      <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
        <About />
      </motion.div>

      {/* 2. Mon parcours académique */}
      <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
        <Formation />
      </motion.div>

      {/* 3. Mon parcours professionnel */}
      <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
        <Parcours />
      </motion.div>

      {/* 4. Mon expertise et mes compétences */}
      <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
        <Skills />
      </motion.div>

      {/* 5. Mes ambitions entrepreneuriales - GN AGROBUSINESS */}
      <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
        <Ambitions />
      </motion.div>

      {/* 6. Contact */}
      <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
        <Contact />
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
