import React from 'react'
import Header from '../components/Header'
import Herosection from '../components/Herosection'
import About from '../components/About'
import Project from '../components/project'
import Resume from '../components/resume'
import Contact from '../components/contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="pt-16">
        <Herosection />
        <About />
        <Project />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Home