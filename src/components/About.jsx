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
      <p className="mt-4 text-secondary text-[22px] max-w-3xl leading-[40px]">
      I'm a software engineer passionate about how technology drives every industry. 
      From Unity game development to healthcare solutions, I love diving in wherever I can make an impact. 
      With two research publications and four hackathon wins, I'm just getting started. 
      I'm fluent across the stack, quick to learn new tools, and always up for a challenge.
      </p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")