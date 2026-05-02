import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc/index";
import { fadeIn } from "../utils/motion";

const SkillTag = ({ title, icon, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.5)}
      className="flex items-center gap-3 px-5 py-3 bg-tertiary rounded-xl card-border card-border-hover"
    >
      <img src={icon} alt={title} className="w-8 h-8 object-contain" />
      <span className="text-secondary text-[15px] font-medium">{title}</span>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>
      <p className="mt-4 text-secondary text-[18px] leading-[32px] max-w-4xl">
        {"I'm a multidisciplinary engineer working across research, industry, and community spaces to turn ideas into real-world systems. From XR and Unity development to applied AI and practical software solutions, I build wherever technology can make a meaningful impact."}
      </p>
      <p className="mt-4 text-secondary text-[18px] leading-[32px] max-w-4xl">
        {"Along the way I've led and contributed to collaborative projects that earned "}
        <span className="text-white font-bold">7 hackathon wins</span>
        {" and "}
        <span className="text-white font-bold">3 publications</span>
        {", but what matters most to me is the people behind the work: mentoring, organizing, and building with communities to help others learn and ship their own ideas."}
      </p>
      <div className="mt-12 flex flex-wrap gap-4">
        {services.map((service, index) => (
          <SkillTag key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
