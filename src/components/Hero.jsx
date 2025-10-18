import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';


const Hero = () => {
  return (
    <section className={`relative w-full py-20 mx-auto`}>
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-5`}
      >
        <div className='flex flex-col justify-center items-center'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 h-20 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hey there! I'm <span className='text-[#915eff]'>Zaid.</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I'm a software engineer honing my craft one line of code at a time.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero