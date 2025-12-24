import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
<div className='overflow-x-hidden text-neutral-300 antialiased
    selection:bg-cyan-300 selection:text-cyan-900'> 
  <div className='fixed top-0 -z-10 h-full w-full' >
    <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
    </div>
    <div className='container mx-auto px-8'  >
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experiences />
      <Projects />
      <Contact />
    </div>
    </div>
    
  )
}

export default App