import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { EarthCanvas } from './EarthCanvas';
import { SectionWrapper } from '../higherImprtant';
import { slideIn } from '../utils/motion';
import emailjs from "@emailjs/browser"


// template_5wqchy6
// service_7a9e3io
// ViFPKaKUHoW6UqHL5ch0a

export const ContactBody = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} =e.target;
    setForm({...form, [name]: value})

  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs.send('service_7a9e3io','template_5wqchy6',{
      from_name: form.name,
      to_name: 'Yuncheol Lee',
      from_email: form.email,
      to_email: 'lyc1353@gmail.com',
      message: form.message
    },
    'JKaWT-oxXaPWVQLom')
    .then(() => {
        setLoading(false)
        alert('Thank you! I will contact you as soon as possible!');
  
        setForm({
          name: '',
          email: '',
          message: ''
        })
    }, (error) => {
      console.log(error);
      alert('Someting is went WRONG!')
    })
  };

  return (
    <div className='xl:mt12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[.075] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch </p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* input form card */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-9'
        >
          <label className='flex flex-col'>
            <span className='text-white'>Your Name: </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='What is your name?'
              className=' bg-tertiary py-6 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white'>Your Email: </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='What is your Email?'
              className=' bg-tertiary py-6 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white'>Your Message: </span>
            <textarea
              name='message'
              rows='7'
              value={form.message}
              onChange={handleChange}
              placeholder='What is your Message?'
              className=' bg-tertiary py-6 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            ></textarea>
          </label>

          <button
            type='submit'
            className=' bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-x1'
          >
            {loading ? 'Sending' : 'Send'}
          </button>
        </form>
      </motion.div>

      {/* background stars */}
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className=" xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const Contact = () => {
  return SectionWrapper(ContactBody, 'contact');
};

export default Contact;
