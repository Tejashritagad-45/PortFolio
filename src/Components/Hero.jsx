import React from 'react'
import { easeInOut, motion } from 'framer-motion'
import { FaArrowRight, FaCommentDots, } from "react-icons/fa"
import { assets, socialPlatforms } from '../assets/assets'
import Lottie from "react-lottie-player"
import lottieJson from "../assets/lottie.json"

const Hero = () => {
  return (
    <section id='home' className='min-h-screen relative z-10 flex items-center pt-16' >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='grid grid-cols-1  lg:grid-cols-2 gap-16 items-center'>
          {/* left part */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="inline-block px-4 py-2 glass dark:glass rounded-full text-neo-secondary font-medium mb-4"
            >
              🚀 React Developer | MERN Stack Developer
            </motion.span>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Hi, I'm
              <span className="block gradient-text">
                Tejashri Tagad
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-8"
            >
               Passionate Frontend & MERN Stack Developer with experience building
  responsive, user-friendly, and scalable web applications using
              <span className="font-semibold text-neo-secondary">
                {" "} React.js, JavaScript, Node.js, Express.js, MongoDB, and Tailwind CSS.
              </span>
              
            </motion.p>

            {/* buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className='flex flex-col sm:flex-row gap-4 justify-center
          lg:justify-start'
            >
              <motion.a
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                href='#work'
                className='neo-btn px-8 py-4 rounded-full font-bold flex items-center
            cursor-pointer'
              >
                View My work
                <FaArrowRight className='ml-2' />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.06 }}
                href='#contact'
                className='px-8 py-4 rounded-full font-bold border-2 border-neo-primary
             flex items-center hover:bg-neo-primary/20'
              >
                Get In Touch
                <FaCommentDots className='ml-2' />
              </motion.a>
            </motion.div>
            {/* motion icons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className='mt-12 flex justify-center lg:justify-start space-x-6'
            >
              {socialPlatforms.map((platform, index) => {
                return (
                  <motion.a
                    key={index}
                    href={platform.href}
                    className='w-8 h-8 md:w-10 md:h-10 rounded-full glass dark:glass
               flex items-center justify-center'
                  >
                    <platform.icon />
                  </motion.a>
                )


              })}
            </motion.div>

          </div>



          {/* Right Image part */}
          <div className='order-1 lg:order-2 flex justify-center relative'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className='relative w-40 h-40 sm:w-52 sm:h:52 md:w-64 md:h-64'
            >
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className='absolute inset-0 rounded-3xl overflow-hidden'
              >
                <img src={assets.profileImg} alt="" className='w-full h-full
                  rounded-full object-cover'/>
              </motion.div>
              <motion.div
                className='absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl glass dark:glass
                border border-neo-primary/20 overflow-hidden p-4'
              >
                {/* <p className='font-bold text-lg text-neo-accent'></p> */}
                <Lottie animationData={lottieJson} play loop />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero