import React from 'react'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Certifications from './Pages/Certifications'
import Education from './Pages/Education'


// import Contact from './pages/Contact'

const App = () => {
  return (
    <div className="bg-slate-900 text-white font-sans w-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
