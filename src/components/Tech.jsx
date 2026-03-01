import React from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <div className="mb-12">
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-tertiary card-border card-border-hover transition-transform duration-200 hover:-translate-y-1 w-[100px]"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-16 h-16 object-contain"
            />
            <span className="text-secondary text-[12px] text-center group-hover:text-white transition-colors duration-200">
              {technology.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");