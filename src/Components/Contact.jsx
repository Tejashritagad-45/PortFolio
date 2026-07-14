import React from 'react'
import {motion} from "framer-motion"
import { socialPlatforms } from '../assets/assets'
import{MdEmail, MdLocationOn, MdPhone} from "react-icons/md"

const Contact = () => {
  const contactInfo=[
    {icon:<MdEmail className="w-6 h-6"/>,title:"Email",value:"tagadteju45@gmail.com"},
    {icon:<MdPhone className="w-6 h-6"/>,title:"phone",value:"+92 7498164068"},
    {icon:<MdLocationOn className="w-6 h-6"/>,title:"Location",value:"Pune,Maharashtra India"},
  ]
  return (


    <div id='contact' className='py-16 md:py-20 relative z-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0,transition:{duration:0.8}}}
         viewport={{once:false}}
        className='text-center mb-12 md:mb-16'
        >
          <span className='inline-block px-4 py-2 glass dark:glass rounded-full text-neo-secondary 
          font-medium mb-4'>GET IN TOUCH</span>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
            <span className='gradient-text'>Let's Work Together</span>
          </h2>
          <p className='text-lg sm:text-xl max-w-3xl mx-auto'>Have a project in mind or want discuss potential  opportunities?
            I'd love to hear from you.
          </p>
        </motion.div>
        <div className='max-w-4xl mx-auto rounded-2xl md:rounded-3xl 
        overflow-hidden glass dark:glass border border-neo-primary/20'>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            {/* Contact information */}
            <motion.div
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0,transition:{duration:0.8}}}
            viewport={{once:false}}
            className='p-6 md:p-8 lg:p-12 bg-linear-to-br from-white/10
            to-neo-primary/10 dark:from-neo-dark dark:to-neo-primary/10' 
            >
              <h3 className='text-xl md:text-2xl font-bold mb-4 md:mb-6'>Contact Information</h3>
              <div className='space-y-4 md:space-y-6'>
                {contactInfo.map((info,index)=>{
                 return( <motion.div 
                  key={index}
                  className='flex items-center'
                  whileHover={{scale:1.05}}
                  >
                    <div className='shrink-0 mt-1 text-neo-primary'>{info.icon}</div>
                    <div className='ml-3 md:ml-4'>
                      <h4 className='text-base md:text-lg font-medium'> {info.title}</h4>
                      <p className='text-sm md:text-base'>{info.value}</p>
                    </div>
                  </motion.div>
                 )
                })}
              </div>
              <div className='mt-8 md:mt-12'>
                <h4 className='text-lg md:text-xl font-bold mb-3 md:mb-4'>
                  Follow Me</h4>
                  <div className='flex space-x-3 md:space-x-4'>
                    {socialPlatforms.map((platform,index)=>{
                     return(<motion.a
                          key={index}
                          href={platform.href}
                          whileHover={{scale:1.2}}
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full glass dark:glass 
                          flex items-center justify-center hover:bg-neo-primary/30 transition-colors duration-300 "
                          >
                            <platform.icon/>
                        </motion.a>
                     )
                    })}
                  </div>
              </div>
            </motion.div>
            {/* Contact form */}
            <motion.div 
            initial={{opacity:0,x:50}}
            whileInView={{opacity:1,x:0 ,transition:{duration:0.8}}}
            viewport={{once:false}}
            className='p-6 md:p-8 lg:p-12'>
              <form action="" className='space-y-4 md:space-y-6'>
                {["name","email","subject"].map((field)=>{
                  return( <div key={field}>
                    <label htmlFor={field} className='block text-sm font-medium mb-2'>
                      {field.charAt(0).toUpperCase() + field.slice(1)}

                    </label>
                    <input type={field==='email'? "email":"text"}  id={field}
                    className='w-full px-4 py-3 rounded border border-neo-primary/50 
                    focus:outline-none transition-all duration-300'
                    placeholder={`Enter your ${field}`}
                    />
                  </div>
                  )
                })}
                <div>
                  <label htmlFor="message" className='block text-s font-medium mb-2'>Message</label>
                  <textarea rows="4" name="message" id="message"
                  className=' w-full py-3 rounded border border-neo-primary/50 
                  focus-outline-none transition-all duration-300'
                  placeholder='Your Message here....'
                  ></textarea>
                </div>
                <motion.button
                type='submit'
                className='ne0-btn w-full px-6 
                py-3 md:py-4 rounded-full font-bold'
                whileHover={{scale:1.05}}
                >
                   Send Message
                </motion.button>
              </form>
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact