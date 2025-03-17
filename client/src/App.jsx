import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Experience from './pages/Experience'
import ContactMe from './pages/ContactMe'
import Footer from './pages/Footer'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import GoToTop from './components/GoToTop/GoToTop'
import Services from './pages/Services'

function App() {
  return (
    <>
      <div id="nav">
        <Navbar />
      </div>
      <div id="home">
        <Home />
      </div>
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact-me">
        <ContactMe />
      </div>
      <Footer />
      <GoToTop />
      <ToastContainer />

    </>
  )
}

export default App
