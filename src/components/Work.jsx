import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { drive, github } from '../assets';
import { SectionWrapper } from '../higherImprtant';
// have to change the projects
import { projects } from '../constant';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)} style={{margin: "8px"}}>
      <Tilt
        option={{
          max: 45,
          scale: 1,
          speed: 45,
        }}
        className=' bg-blue-300 bg-opacity-10 p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px] group'>
          <img
            src={image}
            alt={name}
            className=' w-full h-full rounded-2xl'
          />

          <div className='absolute inset-0 justify-end m-3 card-img_hover flex'>
            {/* // not sure what is _blank */}
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={drive}
                alt='drive'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          {/* if length is over 170, describe as a ... */}
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        {/* <div className=' mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => 
        <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
        )}

      </div> */}
      </Tilt>
    </motion.div>
  );
};

const WorkBody = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Introudution of the Projects
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap'>
        {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          );
        })}
      </div>
    </>
  );
};

const Work = () => SectionWrapper(WorkBody, 'work');

export default Work;
