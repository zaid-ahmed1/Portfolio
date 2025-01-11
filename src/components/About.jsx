import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc/index'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5*index, 0.8)}
      className='w-full white-blue-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16" object-contain />
          <h3 className='text-white text-[24px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview:</h2>
      </motion.div>
      <motion.p
      variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[22px] max-w-3xl leading-[40px]">
        I'm passionate about how software powers every industry and love to jump in 
        wherever I can: from Unity game development to healthcare solutions, I've put my skills to use.
        I'm experienced in many languages across the stack, and learn quickly when faced with a new challenge.
        When I'm not at my computer, you can find me skiing in the winter or hiking in the summer.
        I look forward to connecting with you and seeing how we can learn from each other!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={services.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")