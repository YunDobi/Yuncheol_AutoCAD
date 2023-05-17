import React from 'react'
import {motion} from "framer-motion";
import { styles } from '../style';

import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../higherImprtant';
import { technologies } from '../constant';
import BallCanvas from './Ball';

const TechBody = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>my Technical</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((tech) => (
          <div className='w-28 h-28' key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </>
  )
}
const Tech = () => 
  SectionWrapper(TechBody, "tech")

export default Tech;