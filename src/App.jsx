import React, { useEffect } from 'react'
import { initTheme } from './Utils/theme'
import AnimatedBackground from './Components/AnimatedBackground';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Work from './Components/Work';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  useEffect(()=>{
    initTheme();
  },[])
  return (
    <div className='min-h-screen grid-pattern dark:grid-pattern-light'>
      <AnimatedBackground/>
      <Header/>
      <main>
        <Hero/>
        <Work/>
        <Skills/>
        <About/>
         <Contact/>
         <Footer/>

      </main>
    </div>
  )
}

export default App