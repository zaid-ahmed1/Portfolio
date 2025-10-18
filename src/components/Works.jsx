import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { link } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cardContent = (
    <div className='bg-tertiary p-5 rounded-2xl green-pink-gradient sm:w-[360px] w-full'>
        <div className='relative w-full h-[200px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div 
            className='w-full h-full bg-gray-600 rounded-2xl flex items-center justify-center text-white text-center p-4'
            style={{ display: 'none' }}
          >
            Image failed to load
          </div>

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={link}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
    </div>
  );

  return (
    <div>
      {isMobile ? (
        cardContent
      ) : (
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          {cardContent}
        </Tilt>
      )}
    </div>
  );
};

const Works = () => {
  useEffect(() => {
    console.log('Projects loaded:', projects.length);
    console.log('Projects data:', projects);
  }, []);

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects:</h2>
      </div>

      <div className='w-full flex'>
        <p className='mt-3 text-secondary text-[22px] max-w-3xl leading-[30px]'>
          Here are some projects which demonstrate what I've learned. Where applicable, there are demos, repositories, or video links.
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center sm:justify-start'>
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))
        ) : (
          <div className="text-white text-center w-full">
            <p>No projects found. Please check the console for errors.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");