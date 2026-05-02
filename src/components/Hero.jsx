import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { headshot } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center mx-auto">
      <div className={`max-w-4xl mx-auto ${styles.paddingX} flex flex-col items-center text-center gap-8 pt-24`}>
        {/* Profile photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full photo-glow bg-tertiary flex items-center justify-center overflow-hidden"
        >
          <img src={headshot} alt="Zaid Ahmed" className="w-full h-full object-cover" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className={styles.heroHeadText}
        >
          {"Hey, I'm "}<span className="text-accent">Zaid.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className={`${styles.heroSubText} text-secondary max-w-[85%] sm:max-w-2xl`}
        >
          Multidisciplinary software engineer turning ideas into real systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="flex flex-wrap gap-4 justify-center mt-4 relative z-10"
        >
          <a
            href="#work"
            onClick={(e) => { e.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-3 bg-accent rounded-lg text-white font-semibold hover:bg-[#7a4de0] transition-colors duration-200 cursor-pointer"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-3 border border-accent rounded-lg text-accent font-semibold hover:bg-accent/10 transition-colors duration-200 cursor-pointer"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
