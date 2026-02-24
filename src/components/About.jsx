import React from 'react';
import { Tilt } from 'react-tilt';
import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc/index'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <div className='w-full white-blue-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className='text-white text-[24px] font-bold text-center'>{title}</h3>
        </div>
      </div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview:</h2>
      </div>
      <p className="mt-4 text-secondary text-[22px] leading-[40px]">
I’m a multidisciplinary engineer working across research, industry, and community spaces to turn ideas into real-world systems. From XR and Unity development to applied AI and practical software solutions, I build wherever technology can make a meaningful impact.
Along the way I’ve led and contributed to collaborative projects that earned 6 hackathon wins and 3 publications, but what matters most to me is the people behind the work: mentoring, organizing, and building with communities to help others learn and ship their own ideas.
I move comfortably across the stack, adapt quickly to new tools, and focus on bringing teams together to take projects from concept to deployment.
      </p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")