import React from "react";

import { styles } from "../styles";
import { link } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div className="bg-tertiary rounded-2xl card-border card-border-hover sm:w-[360px] w-full overflow-hidden">
      <div className="relative w-full h-[200px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 flex justify-end m-3">
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-primary/60 backdrop-blur-sm border border-subtle hover:border-accent transition-colors duration-200"
          >
            <img
              src={link}
              alt="link"
              className="w-1/2 h-1/2 object-contain"
            />
          </a>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-white font-bold text-[22px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] leading-[22px]">{description}</p>

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[13px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[18px] max-w-3xl leading-[30px]">
          Here are some projects which demonstrate what I've learned. Where applicable, there are demos, repositories, or video links.
        </p>
      </div>

      <div className="mt-16 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");