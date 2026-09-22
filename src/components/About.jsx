import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc/index";
import { fadeIn } from "../utils/motion";

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
    </>
  );
};

export default SectionWrapper(About, "about");
